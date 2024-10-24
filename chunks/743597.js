n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(192379),
    s = n(392711),
    a = n.n(s),
    l = n(772848),
    r = n(846519),
    o = n(125268),
    c = n(292793),
    u = n(813900);
let d = a().debounce(o.BR, u.Fq, { maxWait: u.Fq });
function h(e, t, n) {
    let s = i.useRef((0, l.Z)()),
        a = i.useRef(new r.Xp()),
        h = i.useCallback(
            (i) => {
                (i.lastUpdatedAt = Date.now()), (0, o.gr)(i, e, n), (0, o.BR)(t, n, i);
            },
            [t, n, e]
        ),
        p = i.useCallback(
            (i, r, d) => {
                s.current = (0, l.Z)();
                let p = {
                    ...i,
                    id: s.current,
                    x: r,
                    y: d,
                    userId: e,
                    state: c.f.START,
                    lastUpdatedAt: Date.now()
                };
                (0, o.BR)(t, n, p), (0, o.gr)(p, e, n), a.current.start(u.FO, () => h(p));
            },
            [e, t, n, h]
        ),
        m = i.useCallback(
            (i, l, r) => {
                let p = {
                    ...i,
                    id: s.current,
                    x: l,
                    y: r,
                    userId: e,
                    state: c.f.START,
                    lastUpdatedAt: Date.now()
                };
                d(t, n, p), (0, o.gr)(p, e, n), a.current.start(u.FO, () => h(p));
            },
            [e, t, n, h]
        ),
        _ = i.useCallback(
            (i, l, r) => {
                d.cancel(),
                    (0, o.Df)(t, n, s.current),
                    (0, o.gr)(
                        {
                            ...i,
                            id: s.current,
                            x: l,
                            y: r,
                            userId: e,
                            state: c.f.STOP,
                            lastUpdatedAt: Date.now()
                        },
                        e,
                        n
                    ),
                    a.current.stop();
            },
            [t, n, e]
        ),
        f = i.useCallback((e, t, n) => m(e, t, n), [m]);
    return i.useMemo(
        () => ({
            handleMouseDown: p,
            handleMouseMove: m,
            handleMouseUp: _,
            handleMouseEnter: f
        }),
        [p, f, m, _]
    );
}
