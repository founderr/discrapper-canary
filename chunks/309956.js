n.d(t, {
    B: function () {
        return a;
    }
}),
    n(47120);
var s = n(470079),
    r = n(215023);
let a = (e, t) => {
    let [n, a] = s.useState(r.f7.HIDDEN),
        [i, o] = s.useState(r.f7.HIDDEN);
    s.useEffect(() => {
        a(e ? r.f7.VISIBLE : r.f7.HIDDEN), o(e ? r.f7.HIDDEN : r.f7.VISIBLE);
    }, [e]);
    let c = (e) => new Promise((t) => setTimeout(t, e)),
        l = s.useCallback(async () => {
            a(r.f7.OUT), await c(r.lb), await c(0.25 * r.lb), null != t.current && t.current.scrollTo({ to: 0 }), o(r.f7.IN), a(r.f7.HIDDEN), await c(0.33 * r.lb), o(r.f7.VISIBLE);
        }, [t]);
    return {
        feedState: n,
        catalogState: i,
        transitionToCatalog: l,
        transitionToFeed: s.useCallback(async () => {
            o(r.f7.OUT), await c(r.lb), null != t.current && t.current.scrollTo({ to: 0 }), o(r.f7.HIDDEN), a(r.f7.IN), await c(r.lb), a(r.f7.VISIBLE);
        }, [t])
    };
};
