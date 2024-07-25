n.d(i, {
  Z: function() {
return d;
  }
});
var s = n(470079),
  l = n(442837),
  t = n(726542),
  o = n(122021),
  a = n(621853);
let r = [];

function d(e) {
  let i = (0, o.Xj)({
  forUserProfile: !0
}),
n = (0, l.e7)([a.Z], () => a.Z.getUserProfile(e));
  return (0, s.useMemo)(() => (null == n ? void 0 : n.connectedAccounts) == null ? r : n.connectedAccounts.filter(e => {
let {
  type: n
} = e, s = t.Z.get(n);
return null != s && i(s);
  }), [
null == n ? void 0 : n.connectedAccounts,
i
  ]);
}