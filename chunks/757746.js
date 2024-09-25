n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(442837),
    i = n(558381),
    a = n(551428);
let o = (0, r.Kb)(a.Z, {
    queryId: (e) => (null != e ? ['storeListing', e] : null),
    get: (e) => (null != e ? a.Z.getForSKU(e) : null),
    load: (e, t) => (null != t ? (0, i.km)(t) : Promise.resolve()),
    useStateHook: r.e7
});
