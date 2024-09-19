n.d(t, {
    q: function () {
        return c;
    }
}),
    n(47120),
    n(653041);
var i = n(470079),
    a = n(442837),
    s = n(537883),
    r = n(356164),
    l = n(164991),
    o = n(726115);
function c() {
    let e = (0, l.$G)(),
        t = (0, l.D1)(),
        n = (0, a.e7)([r.Z], () => {
            var n;
            if (null == t) return 0;
            let i = (0, o.a1)({
                categoryId: t,
                query: e
            });
            return null !== (n = r.Z.getTotal(i)) && void 0 !== n ? n : 0;
        }),
        c = (0, a.e7)([s.Z], () => s.Z.getVisibleTabs());
    return i.useMemo(() => {
        if (null == c) return null;
        if (null == t) return c;
        let e = [],
            i = !0;
        for (let [n, a] of c) n === t && (i = !1), e.push([n, a]);
        return i ? (e.push([t, n]), e) : c;
    }, [c, t, n]);
}
