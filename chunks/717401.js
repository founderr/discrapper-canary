r.d(n, {
    YV: function () {
        return c;
    },
    a5: function () {
        return _;
    },
    cF: function () {
        return f;
    },
    iE: function () {
        return l;
    },
    id: function () {
        return d;
    },
    tK: function () {
        return u;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(223143),
    o = r(286961);
function l() {
    let [e, n] = a.useState(),
        r = (0, o.Z)(),
        i = null == r ? void 0 : r.rewards,
        { purchases: l, hasPreviouslyFetched: u } = (0, s.c7)(),
        c = a.useRef(!1);
    return (
        a.useEffect(() => {
            u && !c.current && null != i && (n(i.filter((e) => null == l.get(e.skuId))), (c.current = !0));
        }, [i, l, u]),
        null != e ? e : void 0
    );
}
function u(e) {
    let { purchases: n } = (0, s.c7)();
    return null != e ? n.get(e) : null;
}
function c(e) {
    let n = new Map();
    return e.forEach((e) => n.set(e.skuId, e.assetId)), n;
}
function d(e, n, r) {
    let i = _(e),
        a = null != r && r.length > 1;
    return n && i && a;
}
function f(e, n, r) {
    let i = _(e);
    return null != r && 1 === r.length && i && n;
}
function _(e) {
    var n;
    let r = null === (n = (0, o.Z)()) || void 0 === n ? void 0 : n.eligiblePlanIds;
    return null == r ? void 0 : r.includes(null == e ? void 0 : e.id);
}
