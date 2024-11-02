n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(192379),
    l = n(392711),
    r = n.n(l),
    a = n(772848),
    s = n(846519),
    o = n(125268),
    c = n(292793),
    u = n(813900);
let d = r().debounce(o.BR, u.Fq, { maxWait: u.Fq });
function h(e, t, n) {
    let l = i.useRef((0, a.Z)()),
        r = i.useRef(new s.Xp()),
        h = i.useCallback(
            (i) => {
                (i.lastUpdatedAt = Date.now()), (0, o.gr)(i, e, n), (0, o.BR)(t, n, i);
            },
            [t, n, e]
        ),
        m = i.useCallback(
            (i, s, d) => {
                l.current = (0, a.Z)();
                let m = {
                    ...i,
                    id: l.current,
                    x: s,
                    y: d,
                    userId: e,
                    state: c.f.START,
                    lastUpdatedAt: Date.now()
                };
                (0, o.BR)(t, n, m), (0, o.gr)(m, e, n), r.current.start(u.FO, () => h(m));
            },
            [e, t, n, h]
        ),
        p = i.useCallback(
            (i, a, s) => {
                let m = {
                    ...i,
                    id: l.current,
                    x: a,
                    y: s,
                    userId: e,
                    state: c.f.START,
                    lastUpdatedAt: Date.now()
                };
                d(t, n, m), (0, o.gr)(m, e, n), r.current.start(u.FO, () => h(m));
            },
            [e, t, n, h]
        ),
        f = i.useCallback(
            (i, a, s) => {
                d.cancel(),
                    (0, o.Df)(t, n, l.current),
                    (0, o.gr)(
                        {
                            ...i,
                            id: l.current,
                            x: a,
                            y: s,
                            userId: e,
                            state: c.f.STOP,
                            lastUpdatedAt: Date.now()
                        },
                        e,
                        n
                    ),
                    r.current.stop();
            },
            [t, n, e]
        ),
        g = i.useCallback((e, t, n) => p(e, t, n), [p]);
    return i.useMemo(
        () => ({
            handleMouseDown: m,
            handleMouseMove: p,
            handleMouseUp: f,
            handleMouseEnter: g
        }),
        [m, g, p, f]
    );
}
