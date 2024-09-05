t.d(n, {
    H: function () {
        return a;
    }
});
var i = t(470079),
    l = t(442837),
    r = t(821849),
    o = t(509545);
let s = (0, l.Kb)(o.Z, {
    get: (e) => (null != e ? o.Z.getForSKU(e) : []),
    load: (e, n) => (null != n ? (0, r.GZ)(n) : Promise.resolve()),
    getIsLoading: (e) => null != e && o.Z.isFetchingForSKU(e),
    useStateHook: l.Wu
});
function a(e) {
    let n = s(e);
    return (
        i.useEffect(() => {
            if (null != e) (0, r.GZ)(e);
        }, [e]),
        n
    );
}
