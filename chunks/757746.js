t.d(n, {
    Z: function () {
        return s;
    }
});
var l = t(442837),
    i = t(558381),
    a = t(551428);
let s = (0, l.Kb)(a.Z, {
    queryId: (e) => (null != e ? ['storeListing', e] : null),
    get: (e) => (null != e ? a.Z.getForSKU(e) : null),
    load: (e, n) => (null != n ? (0, i.km)(n) : Promise.resolve()),
    useStateHook: l.e7
});
