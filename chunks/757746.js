t.d(n, {
    Z: function () {
        return i;
    }
});
var o = t(442837),
    l = t(558381),
    r = t(551428);
let i = (0, o.Kb)(r.Z, {
    queryId: (e) => (null != e ? ['storeListing', e] : null),
    get: (e) => (null != e ? r.Z.getForSKU(e) : null),
    load: (e, n) => (null != n ? (0, l.km)(n) : Promise.resolve()),
    useStateHook: o.e7
});
