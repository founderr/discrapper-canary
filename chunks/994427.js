r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(409813),
    o = r(45572);
function l(e) {
    let [n, r] = a.useState(o.A.WAITING);
    return (
        a.useEffect(() => {
            null != e && e !== s.h8.REVIEW && n !== o.A.WAITING && n !== o.A.COMPLETED && r(o.A.WAITING);
        }, [e, n, r]),
        [n, r]
    );
}
