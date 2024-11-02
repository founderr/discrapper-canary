n.d(t, {
    B: function () {
        return s;
    }
}),
    n(47120);
var r = n(192379),
    a = n(215023);
let s = (e, t) => {
    let [n, s] = r.useState(a.f7.HIDDEN),
        [i, l] = r.useState(a.f7.HIDDEN);
    r.useEffect(() => {
        s(e ? a.f7.VISIBLE : a.f7.HIDDEN), l(e ? a.f7.HIDDEN : a.f7.VISIBLE);
    }, [e]);
    let o = (e) => new Promise((t) => setTimeout(t, e)),
        c = r.useCallback(
            async (e) => {
                e && (s(a.f7.OUT), await o(1.1 * a.lb)), e && l(a.f7.IN), s(a.f7.HIDDEN), null != t.current && t.current.scrollTo({ to: 0 }), l(a.f7.VISIBLE);
            },
            [t]
        );
    return {
        feedState: n,
        catalogState: i,
        transitionToCatalog: c,
        transitionToFeed: r.useCallback(() => {
            null != t.current && t.current.scrollTo({ to: 0 }), l(a.f7.HIDDEN), s(a.f7.VISIBLE);
        }, [t])
    };
};
