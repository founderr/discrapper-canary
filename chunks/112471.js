n.d(t, {
    q: function () {
        return c;
    }
}),
    n(47120),
    n(653041),
    n(733860);
var i = n(470079),
    a = n(442837),
    s = n(537883),
    r = n(356164),
    l = n(164991),
    o = n(731455);
function c() {
    let e = (0, l.NL)(),
        t = (0, l.D1)(),
        n = (0, l.Dm)(),
        c = (0, a.e7)([r.Z], () => {
            if (null == t) return 0;
            let i = r.Z.getTotal({
                categoryId: t,
                query: e,
                languageCode: n
            });
            return null != i ? i : 0;
        }),
        d = (0, a.e7)([r.Z], () => {
            let t = r.Z.getTotal({
                categoryId: o.Hk,
                query: e,
                languageCode: n
            });
            return null != t ? t : 0;
        }),
        u = (0, a.e7)([s.Z], () => s.Z.getVisibleTabs());
    return i.useMemo(() => {
        if (null == u) return null;
        if (null == t) return u;
        let e = [],
            n = !0,
            i = !0;
        for (let [a, s] of u) a === t && (n = !1), a === o.Hk && (i = !1), e.push([a, s]);
        return i && e.unshift([o.Hk, d]), n && e.push([t, c]), i || n ? e : u;
    }, [u, t, d, c]);
}
