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
    l = r(789112),
    u = r(793373),
    I = r(152228);
let R = {
    idleTimeout: 1000,
    finalTimeout: 30000,
    childSpanTimeout: 15000
};
function A(e, t = {}) {
    let r;
    let A = new Map(),
        N = !1,
        T = 'externalFinish',
        d = !t.disableAutoFinish,
        f = [],
        { idleTimeout: L = R.idleTimeout, finalTimeout: O = R.finalTimeout, childSpanTimeout: p = R.childSpanTimeout, beforeSpanEnd: h } = t,
        S = (0, _.s3)();
    if (!S || !(0, E.z)()) return new l.b();
    let D = (0, _.nZ)(),
        C = (0, s.HN)(),
        g = (function (e) {
            let t = (0, I.qp)(e);
            return (0, c.D)((0, _.nZ)(), t), o.X && a.kg.log('[Tracing] Started span is an idle span'), t;
        })(e);
    function P() {
        r && (clearTimeout(r), (r = void 0));
    }
    function U(e) {
        P(),
            (r = setTimeout(() => {
                !N && 0 === A.size && d && ((T = 'idleTimeout'), g.end(e));
            }, L));
    }
    function M(e) {
        r = setTimeout(() => {
            !N && d && ((T = 'heartbeatFailed'), g.end(e));
        }, p);
    }
    g.end = new Proxy(g.end, {
        apply(e, t, r) {
            h && h(g);
            let [a, ..._] = r,
                o = a || (0, n.ph)(),
                i = (0, s.$k)(o),
                E = (0, s.Dp)(g).filter((e) => e !== g);
            if (!E.length) return G(i), Reflect.apply(e, t, [i, ..._]);
            let c = E.map((e) => (0, s.XU)(e).timestamp).filter((e) => !!e),
                l = c.length ? Math.max(...c) : void 0,
                u = (0, s.XU)(g).start_timestamp,
                I = Math.min(u ? u + O / 1000 : 1 / 0, Math.max(u || -1 / 0, Math.min(i, l || 1 / 0)));
            return G(I), Reflect.apply(e, t, [I, ..._]);
        }
    });
    function G(e) {
        (N = !0), A.clear(), f.forEach((e) => e()), (0, c.D)(D, C);
        let t = (0, s.XU)(g),
            { start_timestamp: r } = t;
        if (!r) return;
        !(t.data || {})[i.ju] && g.setAttribute(i.ju, T), a.kg.log(`[Tracing] Idle span "${t.op}" finished`);
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
                E = r - n <= (O + L) / 1000;
            if (o.X) {
                let e = JSON.stringify(t, void 0, 2);
                i ? !E && a.kg.log('[Tracing] Discarding span since it finished after idle span final timeout', e) : a.kg.log('[Tracing] Discarding span since it happened after idle span was finished', e);
            }
            (!E || !i) && ((0, s.ed)(g, t), _++);
        }),
            _ > 0 && g.setAttribute('sentry.idle_span_discarded_spans', _);
    }
    return (
        f.push(
            S.on('spanStart', (e) => {
                if (!N && e !== g && !(0, s.XU)(e).timestamp) {
                    if ((0, s.Dp)(g).includes(e)) {
                        var t;
                        (t = e.spanContext().spanId), P(), A.set(t, !0), M((0, n.ph)() + p / 1000);
                    }
                }
            })
        ),
        f.push(
            S.on('spanEnd', (e) => {
                var t;
                if (!N) (t = e.spanContext().spanId), A.has(t) && A.delete(t), 0 === A.size && U((0, n.ph)() + L / 1000);
            })
        ),
        f.push(
            S.on('idleSpanEnableAutoFinish', (e) => {
                e === g && ((d = !0), U(), A.size && M());
            })
        ),
        !t.disableAutoFinish && U(),
        setTimeout(() => {
            !N &&
                (g.setStatus({
                    code: u.jt,
                    message: 'deadline_exceeded'
                }),
                (T = 'finalTimeout'),
                g.end());
        }, O),
        g
    );
}
