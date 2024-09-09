r.d(t, {
    B: function () {
        return s;
    }
}),
    r(47120);
var a = r(470079),
    n = r(215023);
let s = (e, t) => {
    let [r, s] = a.useState(n.f7.HIDDEN),
        [i, o] = a.useState(n.f7.HIDDEN);
    a.useEffect(() => {
        s(e ? n.f7.VISIBLE : n.f7.HIDDEN), o(e ? n.f7.HIDDEN : n.f7.VISIBLE);
    }, [e]);
    let l = (e) => new Promise((t) => setTimeout(t, e)),
        c = a.useCallback(
            async (e) => {
                e && (s(n.f7.OUT), await l(1.1 * n.lb)), e && o(n.f7.IN), s(n.f7.HIDDEN), null != t.current && t.current.scrollTo({ to: 0 }), o(n.f7.VISIBLE);
            },
            [t]
        );
    return {
        feedState: r,
        catalogState: i,
        transitionToCatalog: c,
        transitionToFeed: a.useCallback(() => {
            null != t.current && t.current.scrollTo({ to: 0 }), o(n.f7.HIDDEN), s(n.f7.VISIBLE);
        }, [t])
    };
};
