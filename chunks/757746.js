t.d(n, {
    Z: function () {
        return r;
    }
});
var o = t(442837),
    i = t(558381),
    l = t(551428);
let r = (0, o.Kb)(l.Z, {
    queryId: (e) => (null != e ? ['storeListing', e] : null),
    get: (e) => (null != e ? l.Z.getForSKU(e) : null),
    load: (e, n) => (null != n ? (0, i.km)(n) : Promise.resolve()),
    useStateHook: o.e7
});
