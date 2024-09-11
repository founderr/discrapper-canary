t.d(n, {
    Z: function () {
        return s;
    }
});
var l = t(442837),
    i = t(558381),
    r = t(551428);
let s = (0, l.Kb)(r.Z, {
    get: (e) => (null != e ? r.Z.getForSKU(e) : null),
    load: (e, n) => (null != n ? (0, i.km)(n) : Promise.resolve()),
    getIsLoading: (e) => null != e && r.Z.isFetchingForSKU(e),
    useStateHook: l.e7
});
