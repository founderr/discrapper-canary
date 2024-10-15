t.d(n, {
    Z: function () {
        return s;
    }
});
var i = t(470079),
    r = t(442837),
    l = t(480608),
    o = t(243730);
let u = {};
function s(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        t = (0, r.e7)([o.Z], () => o.Z.getRoleMemberCount(e));
    return (
        i.useEffect(() => {
            if (null == e) return;
            let t = u[e];
            !(null != t && n > 0 && Date.now() - t < n) && ((u[e] = Date.now()), l.E(e));
        }, [e, n]),
        t
    );
}
