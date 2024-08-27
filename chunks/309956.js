n.d(t, {
    B: function () {
        return a;
    }
}),
    n(47120);
var r = n(470079),
    s = n(215023);
let a = (e, t) => {
    let [n, a] = r.useState(s.f7.HIDDEN),
        [i, o] = r.useState(s.f7.HIDDEN);
    r.useEffect(() => {
        a(e ? s.f7.VISIBLE : s.f7.HIDDEN), o(e ? s.f7.HIDDEN : s.f7.VISIBLE);
    }, [e]);
    let l = (e) => new Promise((t) => setTimeout(t, e)),
        c = r.useCallback(async () => {
            a(s.f7.OUT), await l(s.lb), await l(0.25 * s.lb), null != t.current && t.current.scrollTo({ to: 0 }), o(s.f7.IN), a(s.f7.HIDDEN), await l(0.33 * s.lb), o(s.f7.VISIBLE);
        }, [t]);
    return {
        feedState: n,
        catalogState: i,
        transitionToCatalog: c,
        transitionToFeed: r.useCallback(async () => {
            o(s.f7.OUT), await l(s.lb), null != t.current && t.current.scrollTo({ to: 0 }), o(s.f7.HIDDEN), a(s.f7.IN), await l(s.lb), a(s.f7.VISIBLE);
        }, [t])
    };
};
