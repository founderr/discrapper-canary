t.d(e, {
    H: function () {
        return r;
    }
});
var l = t(442837),
    i = t(821849),
    o = t(509545);
let r = (0, l.Kb)(o.Z, {
    queryId: (n) => (null != n ? ['subscription-plans', n] : null),
    get: (n) => (null != n ? o.Z.getForSKU(n) : []),
    load: (n, e) => (null != e ? (0, i.GZ)(e) : Promise.resolve()),
    useStateHook: l.Wu
});
