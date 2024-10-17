t.d(n, {
    Z: function () {
        return a;
    }
});
var l = t(442837),
    i = t(558381),
    s = t(551428);
let a = (0, l.Kb)(s.Z, {
    queryId: (e) => (null != e ? ['storeListing', e] : null),
    get: (e) => (null != e ? s.Z.getForSKU(e) : null),
    load: (e, n) => (null != n ? (0, i.km)(n) : Promise.resolve()),
    useStateHook: l.e7
});
