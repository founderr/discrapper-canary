i.d(n, {
  Z: function() {
    return d
  }
});
var t = i(470079),
  s = i(442837),
  o = i(726542),
  l = i(122021),
  a = i(621853);
let r = [];

function d(e) {
  let n = (0, l.Xj)({
      forUserProfile: !0
    }),
    i = (0, s.e7)([a.Z], () => a.Z.getUserProfile(e));
  return (0, t.useMemo)(() => (null == i ? void 0 : i.connectedAccounts) == null ? r : i.connectedAccounts.filter(e => {
    let {
      type: i
    } = e, t = o.Z.get(i);
    return null != t && n(t)
  }), [null == i ? void 0 : i.connectedAccounts, n])
}