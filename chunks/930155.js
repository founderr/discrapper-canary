n.d(t, {
    H: function () {
        return o;
    }
});
var r = n(442837),
    i = n(821849),
    a = n(509545);
let o = (0, r.Kb)(a.Z, {
    queryId: (e) => (null != e ? ['subscription-plans', e] : null),
    get: (e) => (null != e ? a.Z.getForSKU(e) : []),
    load: (e, t) => (null != t ? (0, i.GZ)(t) : Promise.resolve()),
    useStateHook: r.Wu
});
