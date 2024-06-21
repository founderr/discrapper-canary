s.d(i, {
  Z: function() {
    return d
  }
});
var n = s(470079),
  l = s(442837),
  t = s(726542),
  o = s(122021),
  r = s(621853);
let a = [];

function d(e) {
  let i = (0, o.Xj)({
      forUserProfile: !0
    }),
    s = (0, l.e7)([r.Z], () => r.Z.getUserProfile(e));
  return (0, n.useMemo)(() => (null == s ? void 0 : s.connectedAccounts) == null ? a : s.connectedAccounts.filter(e => {
    let {
      type: s
    } = e, n = t.Z.get(s);
    return null != n && i(n)
  }), [null == s ? void 0 : s.connectedAccounts, i])
}