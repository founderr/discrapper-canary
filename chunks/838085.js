n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var i = n(192379),
    r = n(393238);
function l() {
    let { ref: e, width: t } = (0, r.Z)(),
        [n, l] = i.useState();
    return (
        i.useEffect(() => {
            null == n && null != t && l(t);
        }, [n, t]),
        [e, n]
    );
}
