r.d(t, {
    A: function () {
        return R;
    },
    R: function () {
        return A;
    }
});
var n = r(101284),
    a = r(622916),
    _ = r(263449),
    o = r(255768),
    i = r(988097),
    E = r(73453),
    c = r(99342),
    s = r(696486),
    I = r(789112),
    u = r(793373),
    l = r(152228);
let R = {
    idleTimeout: 1000,
    finalTimeout: 30000,
    childSpanTimeout: 15000
};
function A(e, t = {}) {
    let r;
    let A = new Map(),
        T = !1,
        N = 'externalFinish',
        d = !t.disableAutoFinish,
        O = [],
        { idleTimeout: p = R.idleTimeout, finalTimeout: f = R.finalTimeout, childSpanTimeout: L = R.childSpanTimeout, beforeSpanEnd: S } = t,
        D = (0, _.s3)();
    if (!D || !(0, E.z)()) return new I.b();
    let h = (0, _.nZ)(),
        C = (0, s.HN)(),
        g = (function (e) {
            let t = (0, l.qp)(e);
            return (0, c.D)((0, _.nZ)(), t), o.X && a.kg.log('[Tracing] Started span is an idle span'), t;
        })(e);
    function P() {
        r && (clearTimeout(r), (r = void 0));
    }
    function M(e) {
        P(),
            (r = setTimeout(() => {
                !T && 0 === A.size && d && ((N = 'idleTimeout'), g.end(e));
            }, p));
    }
    function U(e) {
        r = setTimeout(() => {
            !T && d && ((N = 'heartbeatFailed'), g.end(e));
        }, L);
    }
    g.end = new Proxy(g.end, {
        apply(e, t, r) {
            S && S(g);
            let [a, ..._] = r,
                o = a || (0, n.ph)(),
                i = (0, s.$k)(o),
                E = (0, s.Dp)(g).filter((e) => e !== g);
            if (!E.length) return m(i), Reflect.apply(e, t, [i, ..._]);
            let c = E.map((e) => (0, s.XU)(e).timestamp).filter((e) => !!e),
                I = c.length ? Math.max(...c) : void 0,
                u = (0, s.XU)(g).start_timestamp,
                l = Math.min(u ? u + f / 1000 : 1 / 0, Math.max(u || -1 / 0, Math.min(i, I || 1 / 0)));
            return m(l), Reflect.apply(e, t, [l, ..._]);
        }
    });
    function m(e) {
        (T = !0), A.clear(), O.forEach((e) => e()), (0, c.D)(h, C);
        let t = (0, s.XU)(g),
            { start_timestamp: r } = t;
        if (!r) return;
        !(t.data || {})[i.ju] && g.setAttribute(i.ju, N), a.kg.log(`[Tracing] Idle span "${t.op}" finished`);
        let n = (0, s.Dp)(g).filter((e) => e !== g),
            _ = 0;
        n.forEach((t) => {
            t.isRecording() &&
                (t.setStatus({
                    code: u.jt,
                    message: 'cancelled'
                }),
                t.end(e),
                o.X && a.kg.log('[Tracing] Cancelling span since span ended early', JSON.stringify(t, void 0, 2)));
            let { timestamp: r = 0, start_timestamp: n = 0 } = (0, s.XU)(t),
                i = n <= e,
                E = r - n <= (f + p) / 1000;
            if (o.X) {
                let e = JSON.stringify(t, void 0, 2);
                i ? !E && a.kg.log('[Tracing] Discarding span since it finished after idle span final timeout', e) : a.kg.log('[Tracing] Discarding span since it happened after idle span was finished', e);
            }
            (!E || !i) && ((0, s.ed)(g, t), _++);
        }),
            _ > 0 && g.setAttribute('sentry.idle_span_discarded_spans', _);
    }
    return (
        O.push(
            D.on('spanStart', (e) => {
                if (!T && e !== g && !(0, s.XU)(e).timestamp) {
                    if ((0, s.Dp)(g).includes(e)) {
                        var t;
                        (t = e.spanContext().spanId), P(), A.set(t, !0), U((0, n.ph)() + L / 1000);
                    }
                }
            })
        ),
        O.push(
            D.on('spanEnd', (e) => {
                var t;
                if (!T) (t = e.spanContext().spanId), A.has(t) && A.delete(t), 0 === A.size && M((0, n.ph)() + p / 1000);
            })
        ),
        O.push(
            D.on('idleSpanEnableAutoFinish', (e) => {
                e === g && ((d = !0), M(), A.size && U());
            })
        ),
        !t.disableAutoFinish && M(),
        setTimeout(() => {
            !T &&
                (g.setStatus({
                    code: u.jt,
                    message: 'deadline_exceeded'
                }),
                (N = 'finalTimeout'),
                g.end());
        }, f),
        g
    );
}
