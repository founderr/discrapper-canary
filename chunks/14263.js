n.d(e, {
    Z: function () {
        return u;
    }
});
var i = n(192379),
    l = n(442837),
    r = n(480608),
    d = n(243730);
let a = {};
function u(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = (0, l.e7)([d.Z], () => d.Z.getRoleMemberCount(t));
    return (
        i.useEffect(() => {
            if (null == t) return;
            let n = a[t];
            !(null != n && e > 0 && Date.now() - n < e) && ((a[t] = Date.now()), r.E(t));
        }, [t, e]),
        n
    );
}
