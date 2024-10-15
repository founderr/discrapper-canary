t.d(n, {
    H: function () {
        return r;
    }
});
var l = t(442837),
    i = t(821849),
    a = t(509545);
let r = (0, l.Kb)(a.Z, {
    queryId: (e) => (null != e ? ['subscription-plans', e] : null),
    get: (e) => (null != e ? a.Z.getForSKU(e) : []),
    load: (e, n) => (null != n ? (0, i.GZ)(n) : Promise.resolve()),
    useStateHook: l.Wu
});
