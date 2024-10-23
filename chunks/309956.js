r.d(t, {
    B: function () {
        return a;
    }
}),
    r(47120);
var s = r(192379),
    n = r(215023);
let a = (e, t) => {
    let [r, a] = s.useState(n.f7.HIDDEN),
        [i, l] = s.useState(n.f7.HIDDEN);
    s.useEffect(() => {
        a(e ? n.f7.VISIBLE : n.f7.HIDDEN), l(e ? n.f7.HIDDEN : n.f7.VISIBLE);
    }, [e]);
    let o = (e) => new Promise((t) => setTimeout(t, e)),
        c = s.useCallback(
            async (e) => {
                e && (a(n.f7.OUT), await o(1.1 * n.lb)), e && l(n.f7.IN), a(n.f7.HIDDEN), null != t.current && t.current.scrollTo({ to: 0 }), l(n.f7.VISIBLE);
            },
            [t]
        );
    return {
        feedState: r,
        catalogState: i,
        transitionToCatalog: c,
        transitionToFeed: s.useCallback(() => {
            null != t.current && t.current.scrollTo({ to: 0 }), l(n.f7.HIDDEN), a(n.f7.VISIBLE);
        }, [t])
    };
};
