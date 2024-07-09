i.d(n, {
    Z: function () {
        return d;
    }
});
var l = i(470079), s = i(442837), o = i(726542), t = i(122021), a = i(621853);
let r = [];
function d(e) {
    let n = (0, t.Xj)({ forUserProfile: !0 }), i = (0, s.e7)([a.Z], () => a.Z.getUserProfile(e));
    return (0, l.useMemo)(() => (null == i ? void 0 : i.connectedAccounts) == null ? r : i.connectedAccounts.filter(e => {
        let {type: i} = e, l = o.Z.get(i);
        return null != l && n(l);
    }), [
        null == i ? void 0 : i.connectedAccounts,
        n
    ]);
}
