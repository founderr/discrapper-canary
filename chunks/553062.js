r.d(t, {
    A: function () {
        return R;
    },
    R: function () {
        return N;
    }
});
var n = r(101284),
    a = r(622916),
    _ = r(263449),
    o = r(255768),
    E = r(988097),
    i = r(73453),
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
function N(e, t = {}) {
    let r;
    let N = new Map(),
        A = !1,
        T = 'externalFinish',
        d = !t.disableAutoFinish,
        L = [],
        { idleTimeout: f = R.idleTimeout, finalTimeout: O = R.finalTimeout, childSpanTimeout: p = R.childSpanTimeout, beforeSpanEnd: h } = t,
        S = (0, _.s3)();
    if (!S || !(0, i.z)()) return new l.b();
    let D = (0, _.nZ)(),
        C = (0, s.HN)(),
        g = (function (e) {
            let t = (0, I.qp)(e);
            return (0, c.D)((0, _.nZ)(), t), o.X && a.kg.log('[Tracing] Started span is an idle span'), t;
        })(e);
    function U() {
        r && (clearTimeout(r), (r = void 0));
    }
    function P(e) {
        U(),
            (r = setTimeout(() => {
                !A && 0 === N.size && d && ((T = 'idleTimeout'), g.end(e));
            }, f));
    }
    function M(e) {
        r = setTimeout(() => {
            !A && d && ((T = 'heartbeatFailed'), g.end(e));
        }, p);
    }
    g.end = new Proxy(g.end, {
        apply(e, t, r) {
            h && h(g);
            let [a, ..._] = r,
                o = a || (0, n.ph)(),
                E = (0, s.$k)(o),
                i = (0, s.Dp)(g).filter((e) => e !== g);
            if (!i.length) return G(E), Reflect.apply(e, t, [E, ..._]);
            let c = i.map((e) => (0, s.XU)(e).timestamp).filter((e) => !!e),
                l = c.length ? Math.max(...c) : void 0,
                u = (0, s.XU)(g).start_timestamp,
                I = Math.min(u ? u + O / 1000 : 1 / 0, Math.max(u || -1 / 0, Math.min(E, l || 1 / 0)));
            return G(I), Reflect.apply(e, t, [I, ..._]);
        }
    });
    function G(e) {
        (A = !0), N.clear(), L.forEach((e) => e()), (0, c.D)(D, C);
        let t = (0, s.XU)(g),
            { start_timestamp: r } = t;
        if (!r) return;
        !(t.data || {})[E.ju] && g.setAttribute(E.ju, T), a.kg.log(`[Tracing] Idle span "${t.op}" finished`);
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
                E = n <= e,
                i = r - n <= (O + f) / 1000;
            if (o.X) {
                let e = JSON.stringify(t, void 0, 2);
                E ? !i && a.kg.log('[Tracing] Discarding span since it finished after idle span final timeout', e) : a.kg.log('[Tracing] Discarding span since it happened after idle span was finished', e);
            }
            (!i || !E) && ((0, s.ed)(g, t), _++);
        }),
            _ > 0 && g.setAttribute('sentry.idle_span_discarded_spans', _);
    }
    return (
        L.push(
            S.on('spanStart', (e) => {
                if (!A && e !== g && !(0, s.XU)(e).timestamp) {
                    if ((0, s.Dp)(g).includes(e)) {
                        var t;
                        (t = e.spanContext().spanId), U(), N.set(t, !0), M((0, n.ph)() + p / 1000);
                    }
                }
            })
        ),
        L.push(
            S.on('spanEnd', (e) => {
                var t;
                if (!A) (t = e.spanContext().spanId), N.has(t) && N.delete(t), 0 === N.size && P((0, n.ph)() + f / 1000);
            })
        ),
        L.push(
            S.on('idleSpanEnableAutoFinish', (e) => {
                e === g && ((d = !0), P(), N.size && M());
            })
        ),
        !t.disableAutoFinish && P(),
        setTimeout(() => {
            !A &&
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
