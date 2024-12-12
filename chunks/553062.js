r.d(t, {
    A: function () {
        return R;
    },
    R: function () {
        return A;
    }
});
var a = r(101284),
    n = r(622916),
    _ = r(263449),
    o = r(255768),
    E = r(988097),
    i = r(73453),
    c = r(99342),
    s = r(696486),
    l = r(789112),
    I = r(793373),
    u = r(152228);
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
        f = [],
        { idleTimeout: O = R.idleTimeout, finalTimeout: L = R.finalTimeout, childSpanTimeout: p = R.childSpanTimeout, beforeSpanEnd: h } = t,
        D = (0, _.s3)();
    if (!D || !(0, i.z)()) return new l.b();
    let S = (0, _.nZ)(),
        C = (0, s.HN)(),
        P = (function (e) {
            let t = (0, u.qp)(e);
            return (0, c.D)((0, _.nZ)(), t), o.X && n.kg.log('[Tracing] Started span is an idle span'), t;
        })(e);
    function g() {
        r && (clearTimeout(r), (r = void 0));
    }
    function U(e) {
        g(),
            (r = setTimeout(() => {
                !T && 0 === A.size && d && ((N = 'idleTimeout'), P.end(e));
            }, O));
    }
    function M(e) {
        r = setTimeout(() => {
            !T && d && ((N = 'heartbeatFailed'), P.end(e));
        }, p);
    }
    P.end = new Proxy(P.end, {
        apply(e, t, r) {
            h && h(P);
            let [n, ..._] = r,
                o = n || (0, a.ph)(),
                E = (0, s.$k)(o),
                i = (0, s.Dp)(P).filter((e) => e !== P);
            if (!i.length) return G(E), Reflect.apply(e, t, [E, ..._]);
            let c = i.map((e) => (0, s.XU)(e).timestamp).filter((e) => !!e),
                l = c.length ? Math.max(...c) : void 0,
                I = (0, s.XU)(P).start_timestamp,
                u = Math.min(I ? I + L / 1000 : 1 / 0, Math.max(I || -1 / 0, Math.min(E, l || 1 / 0)));
            return G(u), Reflect.apply(e, t, [u, ..._]);
        }
    });
    function G(e) {
        (T = !0), A.clear(), f.forEach((e) => e()), (0, c.D)(S, C);
        let t = (0, s.XU)(P),
            { start_timestamp: r } = t;
        if (!r) return;
        !(t.data || {})[E.ju] && P.setAttribute(E.ju, N), n.kg.log(`[Tracing] Idle span "${t.op}" finished`);
        let a = (0, s.Dp)(P).filter((e) => e !== P),
            _ = 0;
        a.forEach((t) => {
            t.isRecording() &&
                (t.setStatus({
                    code: I.jt,
                    message: 'cancelled'
                }),
                t.end(e),
                o.X && n.kg.log('[Tracing] Cancelling span since span ended early', JSON.stringify(t, void 0, 2)));
            let { timestamp: r = 0, start_timestamp: a = 0 } = (0, s.XU)(t),
                E = a <= e,
                i = r - a <= (L + O) / 1000;
            if (o.X) {
                let e = JSON.stringify(t, void 0, 2);
                E ? !i && n.kg.log('[Tracing] Discarding span since it finished after idle span final timeout', e) : n.kg.log('[Tracing] Discarding span since it happened after idle span was finished', e);
            }
            (!i || !E) && ((0, s.ed)(P, t), _++);
        }),
            _ > 0 && P.setAttribute('sentry.idle_span_discarded_spans', _);
    }
    return (
        f.push(
            D.on('spanStart', (e) => {
                if (!T && e !== P && !(0, s.XU)(e).timestamp) {
                    if ((0, s.Dp)(P).includes(e)) {
                        var t;
                        (t = e.spanContext().spanId), g(), A.set(t, !0), M((0, a.ph)() + p / 1000);
                    }
                }
            })
        ),
        f.push(
            D.on('spanEnd', (e) => {
                var t;
                if (!T) (t = e.spanContext().spanId), A.has(t) && A.delete(t), 0 === A.size && U((0, a.ph)() + O / 1000);
            })
        ),
        f.push(
            D.on('idleSpanEnableAutoFinish', (e) => {
                e === P && ((d = !0), U(), A.size && M());
            })
        ),
        !t.disableAutoFinish && U(),
        setTimeout(() => {
            !T &&
                (P.setStatus({
                    code: I.jt,
                    message: 'deadline_exceeded'
                }),
                (N = 'finalTimeout'),
                P.end());
        }, L),
        P
    );
}
