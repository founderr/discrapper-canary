n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(442837),
    a = n(558381),
    r = n(551428);
let l = (0, i.Kb)(r.Z, {
    queryId: (e) => (null != e ? ['storeListing', e] : null),
    get: (e) => (null != e ? r.Z.getForSKU(e) : null),
    load: (e, t) => (null != t ? (0, a.km)(t) : Promise.resolve()),
    useStateHook: i.e7
});
