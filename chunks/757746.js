t.d(n, {
    Z: function () {
        return o;
    }
});
var l = t(442837),
    i = t(558381),
    r = t(551428);
let o = (0, l.Kb)(r.Z, {
    queryId: (e) => (null != e ? ['storeListing', e] : null),
    get: (e) => (null != e ? r.Z.getForSKU(e) : null),
    load: (e, n) => (null != n ? (0, i.km)(n) : Promise.resolve()),
    useStateHook: l.e7
});
