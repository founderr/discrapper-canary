n.d(i, {
    Z: function () {
        return d;
    }
});
var l = n(470079), s = n(442837), t = n(726542), o = n(122021), a = n(621853);
let r = [];
function d(e) {
    let i = (0, o.Xj)({ forUserProfile: !0 }), n = (0, s.e7)([a.Z], () => a.Z.getUserProfile(e));
    return (0, l.useMemo)(() => (null == n ? void 0 : n.connectedAccounts) == null ? r : n.connectedAccounts.filter(e => {
        let {type: n} = e, l = t.Z.get(n);
        return null != l && i(l);
    }), [
        null == n ? void 0 : n.connectedAccounts,
        i
    ]);
}
