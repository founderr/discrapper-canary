n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(393238);
function o() {
    let { ref: e, width: t } = (0, a.Z)(),
        [n, r] = i.useState();
    return (
        i.useEffect(() => {
            null == n && null != t && r(t);
        }, [n, t]),
        [e, n]
    );
}
