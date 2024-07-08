i.d(n, {
    Z: function () {
        return c;
    }
});
var o = i(470079), s = i(442837), t = i(726542), l = i(122021), a = i(621853);
let r = [];
function c(e) {
    let n = (0, l.Xj)({ forUserProfile: !0 }), i = (0, s.e7)([a.Z], () => a.Z.getUserProfile(e));
    return (0, o.useMemo)(() => (null == i ? void 0 : i.connectedAccounts) == null ? r : i.connectedAccounts.filter(e => {
        let {type: i} = e, o = t.Z.get(i);
        return null != o && n(o);
    }), [
        null == i ? void 0 : i.connectedAccounts,
        n
    ]);
}
