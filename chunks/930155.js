t.d(n, {
    H: function () {
        return a;
    }
});
var l = t(470079),
    i = t(442837),
    r = t(821849),
    s = t(509545);
let o = (0, i.Kb)(s.Z, {
    get: (e) => (null != e ? s.Z.getForSKU(e) : []),
    load: (e, n) => (null != n ? (0, r.GZ)(n) : Promise.resolve()),
    getIsLoading: (e) => null != e && s.Z.isFetchingForSKU(e),
    useStateHook: i.Wu
});
function a(e) {
    let n = o(e);
    return (
        l.useEffect(() => {
            if (null != e) (0, r.GZ)(e);
        }, [e]),
        n
    );
}
