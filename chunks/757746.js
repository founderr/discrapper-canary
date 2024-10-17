t.d(e, {
    Z: function () {
        return r;
    }
});
var l = t(442837),
    i = t(558381),
    o = t(551428);
let r = (0, l.Kb)(o.Z, {
    queryId: (n) => (null != n ? ['storeListing', n] : null),
    get: (n) => (null != n ? o.Z.getForSKU(n) : null),
    load: (n, e) => (null != e ? (0, i.km)(e) : Promise.resolve()),
    useStateHook: l.e7
});
