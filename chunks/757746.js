t.d(n, {
    Z: function () {
        return a;
    }
});
var l = t(442837),
    o = t(558381),
    i = t(551428);
let a = (0, l.Kb)(i.Z, {
    queryId: (e) => (null != e ? ['storeListing', e] : null),
    get: (e) => (null != e ? i.Z.getForSKU(e) : null),
    load: (e, n) => (null != n ? (0, o.km)(n) : Promise.resolve()),
    useStateHook: l.e7
});
