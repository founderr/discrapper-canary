t.d(s, {
    X: function () {
        return o;
    }
});
var n = t(442837),
    a = t(821849),
    i = t(509545),
    r = t(960048);
let o = (0, n.Kb)(i.Z, {
    queryId: (e) => (null != e ? ['subscription-plans', e] : null),
    get: (e) => (null != e ? i.Z.getForSKU(e) : []),
    load: (e, s) => (null == s && r.Z.addBreadcrumb({ message: 'Error loading subscription plans: skuId is null' }), null != s ? (0, a.GZ)(s) : Promise.reject()),
    useStateHook: n.Wu
});
