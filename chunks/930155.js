t.d(n, {
    H: function () {
        return a;
    }
});
var l = t(442837),
    i = t(821849),
    s = t(509545);
let a = (0, l.Kb)(s.Z, {
    queryId: (e) => (null != e ? ['subscription-plans', e] : null),
    get: (e) => (null != e ? s.Z.getForSKU(e) : []),
    load: (e, n) => (null != n ? (0, i.GZ)(n) : Promise.resolve()),
    useStateHook: l.Wu
});
