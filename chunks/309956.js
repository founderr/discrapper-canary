n.d(t, {
    B: function () {
        return s;
    }
}),
    n(47120);
var r = n(470079),
    a = n(215023);
let s = (e, t) => {
    let [n, s] = r.useState(a.f7.HIDDEN),
        [o, i] = r.useState(a.f7.HIDDEN);
    r.useEffect(() => {
        s(e ? a.f7.VISIBLE : a.f7.HIDDEN), i(e ? a.f7.HIDDEN : a.f7.VISIBLE);
    }, [e]);
    let c = (e) => new Promise((t) => setTimeout(t, e)),
        l = r.useCallback(async () => {
            s(a.f7.OUT), await c(a.lb), await c(0.25 * a.lb), null != t.current && t.current.scrollTo({ to: 0 }), i(a.f7.IN), s(a.f7.HIDDEN), await c(0.33 * a.lb), i(a.f7.VISIBLE);
        }, [t]);
    return {
        feedState: n,
        catalogState: o,
        transitionToCatalog: l,
        transitionToFeed: r.useCallback(async () => {
            i(a.f7.OUT), await c(a.lb), null != t.current && t.current.scrollTo({ to: 0 }), i(a.f7.HIDDEN), s(a.f7.IN), await c(a.lb), s(a.f7.VISIBLE);
        }, [t])
    };
};
