t.d(n, {
    Z: function () {
        return r;
    }
});
var o = t(442837),
    l = t(558381),
    i = t(551428);
let r = (0, o.Kb)(i.Z, {
    queryId: (e) => (null != e ? ['storeListing', e] : null),
    get: (e) => (null != e ? i.Z.getForSKU(e) : null),
    load: (e, n) => (null != n ? (0, l.km)(n) : Promise.resolve()),
    useStateHook: o.e7
});
