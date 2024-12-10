n.d(t, {
    q: function () {
        return c;
    }
}),
    n(47120),
    n(653041),
    n(733860);
var i = n(192379),
    r = n(442837),
    l = n(537883),
    a = n(356164),
    o = n(164991),
    s = n(128449);
function c() {
    let e = o.Z.useField('fetchedQuery'),
        t = o.Z.useField('resultsInitialCategoryId'),
        n = o.Z.useField('languageCode'),
        c = (0, r.e7)([a.Z], () => {
            if (null == t) return 0;
            let i = a.Z.getTotal({
                categoryId: t,
                query: e,
                languageCode: n
            });
            return null != i ? i : 0;
        }),
        d = (0, r.e7)([a.Z], () => {
            let t = a.Z.getTotal({
                categoryId: s.Hk,
                query: e,
                languageCode: n
            });
            return null != t ? t : 0;
        }),
        u = (0, r.e7)([l.Z], () => l.Z.getVisibleTabs());
    return i.useMemo(() => {
        if (null == u) return null;
        if (null == t) return u;
        let e = [],
            n = new Set();
        for (let [t, i] of u) n.add(t), e.push([t, i]);
        let i = !1;
        return !n.has(s.Hk) && (n.add(s.Hk), e.unshift([s.Hk, d]), (i = !0)), !n.has(t) && (n.add(t), e.push([t, c]), (i = !0)), i ? e : u;
    }, [u, t, d, c]);
}
