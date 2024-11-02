t.d(e, {
    Z: function () {
        return o;
    }
});
var l = t(442837),
    i = t(558381),
    r = t(551428);
let o = (0, l.Kb)(r.Z, {
    queryId: (n) => (null != n ? ['storeListing', n] : null),
    get: (n) => (null != n ? r.Z.getForSKU(n) : null),
    load: (n, e) => (null != e ? (0, i.km)(e) : Promise.resolve()),
    useStateHook: l.e7
});
