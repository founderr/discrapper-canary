n.d(t, {
    B: function () {
        return i;
    }
}),
    n(47120);
var r = n(192379),
    a = n(215023);
let i = (e, t) => {
    let [n, i] = r.useState(a.f7.HIDDEN),
        [l, s] = r.useState(a.f7.HIDDEN);
    r.useEffect(() => {
        i(e ? a.f7.VISIBLE : a.f7.HIDDEN), s(e ? a.f7.HIDDEN : a.f7.VISIBLE);
    }, [e]);
    let o = (e) => new Promise((t) => setTimeout(t, e)),
        c = r.useCallback(
            async (e) => {
                e && (i(a.f7.OUT), await o(1.1 * a.lb)), e && s(a.f7.IN), i(a.f7.HIDDEN), null != t.current && t.current.scrollTo({ to: 0 }), s(a.f7.VISIBLE);
            },
            [t]
        );
    return {
        feedState: n,
        catalogState: l,
        transitionToCatalog: c,
        transitionToFeed: r.useCallback(() => {
            null != t.current && t.current.scrollTo({ to: 0 }), s(a.f7.HIDDEN), i(a.f7.VISIBLE);
        }, [t])
    };
};
