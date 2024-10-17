s.d(t, {
    B: function () {
        return n;
    }
}),
    s(47120);
var a = s(470079),
    r = s(215023);
let n = (e, t) => {
    let [s, n] = a.useState(r.f7.HIDDEN),
        [i, l] = a.useState(r.f7.HIDDEN);
    a.useEffect(() => {
        n(e ? r.f7.VISIBLE : r.f7.HIDDEN), l(e ? r.f7.HIDDEN : r.f7.VISIBLE);
    }, [e]);
    let o = (e) => new Promise((t) => setTimeout(t, e)),
        c = a.useCallback(
            async (e) => {
                e && (n(r.f7.OUT), await o(1.1 * r.lb)), e && l(r.f7.IN), n(r.f7.HIDDEN), null != t.current && t.current.scrollTo({ to: 0 }), l(r.f7.VISIBLE);
            },
            [t]
        );
    return {
        feedState: s,
        catalogState: i,
        transitionToCatalog: c,
        transitionToFeed: a.useCallback(() => {
            null != t.current && t.current.scrollTo({ to: 0 }), l(r.f7.HIDDEN), n(r.f7.VISIBLE);
        }, [t])
    };
};
