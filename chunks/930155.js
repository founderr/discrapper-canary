t.d(n, {
    H: function () {
        return o;
    }
});
var l = t(442837),
    i = t(821849),
    r = t(509545);
let o = (0, l.Kb)(r.Z, {
    queryId: (e) => (null != e ? ['subscription-plans', e] : null),
    get: (e) => (null != e ? r.Z.getForSKU(e) : []),
    load: (e, n) => (null != n ? (0, i.GZ)(n) : Promise.resolve()),
    useStateHook: l.Wu
});
