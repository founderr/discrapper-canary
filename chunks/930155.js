t.d(n, {
    H: function () {
        return o;
    }
});
var i = t(442837),
    l = t(821849),
    r = t(509545);
let o = (0, i.Kb)(r.Z, {
    get: (e) => (null != e ? r.Z.getForSKU(e) : []),
    load: (e, n) => (null != n ? (0, l.GZ)(n) : Promise.resolve()),
    getIsLoading: (e) => null != e && r.Z.isFetchingForSKU(e),
    useStateHook: i.Wu
});
