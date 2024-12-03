n.d(t, {
    YV: function () {
        return o;
    },
    iE: function () {
        return s;
    },
    id: function () {
        return l;
    }
}),
    n(47120);
var r = n(192379),
    i = n(223143),
    a = n(286961);
function s() {
    let [e, t] = r.useState(),
        n = (0, a.Z)(),
        s = null == n ? void 0 : n.rewards,
        { purchases: o, hasPreviouslyFetched: l } = (0, i.c7)(),
        u = r.useRef(!1);
    return (
        r.useEffect(() => {
            l && !u.current && null != s && (t(s.filter((e) => null == o.get(e.skuId))), (u.current = !0));
        }, [s, o, l]),
        null != e ? e : void 0
    );
}
function o(e) {
    let t = new Map();
    return e.forEach((e) => t.set(e.skuId, e.assetId)), t;
}
function l(e, t, n) {
    var r;
    let i = null === (r = (0, a.Z)()) || void 0 === r ? void 0 : r.eligiblePlanIds,
        s = null != n && n.length > 1;
    return t && (null == i ? void 0 : i.includes(null == e ? void 0 : e.id)) && s;
}
