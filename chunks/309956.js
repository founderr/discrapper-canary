n.d(t, {
    B: function () {
        return a;
    }
}),
    n(47120);
var r = n(192379),
    s = n(215023);
let a = (e, t) => {
    let [n, a] = r.useState(s.f7.HIDDEN),
        [i, l] = r.useState(s.f7.HIDDEN);
    r.useEffect(() => {
        a(e ? s.f7.VISIBLE : s.f7.HIDDEN), l(e ? s.f7.HIDDEN : s.f7.VISIBLE);
    }, [e]);
    let o = (e) => new Promise((t) => setTimeout(t, e)),
        c = r.useCallback(
            async (e) => {
                e && (a(s.f7.OUT), await o(1.1 * s.lb)), e && l(s.f7.IN), a(s.f7.HIDDEN), null != t.current && t.current.scrollTo({ to: 0 }), l(s.f7.VISIBLE);
            },
            [t]
        );
    return {
        feedState: n,
        catalogState: i,
        transitionToCatalog: c,
        transitionToFeed: r.useCallback(() => {
            null != t.current && t.current.scrollTo({ to: 0 }), l(s.f7.HIDDEN), a(s.f7.VISIBLE);
        }, [t])
    };
};
