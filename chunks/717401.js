n.d(t, {
    YV: function () {
        return l;
    },
    iE: function () {
        return o;
    },
    id: function () {
        return u;
    }
}),
    n(47120);
var r = n(192379),
    i = n(223143),
    a = n(646476),
    s = n(286961);
function o() {
    let [e, t] = r.useState(),
        n = (0, s.Z)(),
        a = null == n ? void 0 : n.rewards,
        { purchases: o, hasPreviouslyFetched: l } = (0, i.c)(),
        u = r.useRef(!1);
    return (
        r.useEffect(() => {
            l && !u.current && null != a && (t(a.filter((e) => null == o.get(e.skuId))), (u.current = !0));
        }, [a, o, l]),
        null != e ? e : void 0
    );
}
function l(e) {
    let t = new Map();
    return e.forEach((e) => t.set(e.skuId, e.assetId)), t;
}
function u(e, t) {
    var n;
    let r = null === (n = (0, s.Z)()) || void 0 === n ? void 0 : n.eligiblePlanIds,
        i = o(),
        l = (0, a.TX)(),
        u = null != i && i.length > 1;
    return t && l && (null == r ? void 0 : r.includes(null == e ? void 0 : e.id)) && u;
}
