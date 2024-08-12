n.d(s, {
  Z: function() {
return d;
  }
});
var i = n(470079),
  l = n(442837),
  t = n(726542),
  o = n(122021),
  r = n(621853);
let a = [];

function d(e) {
  let s = (0, o.Xj)({
  forUserProfile: !0
}),
n = (0, l.e7)([r.Z], () => r.Z.getUserProfile(e));
  return (0, i.useMemo)(() => (null == n ? void 0 : n.connectedAccounts) == null ? a : n.connectedAccounts.filter(e => {
let {
  type: n
} = e, i = t.Z.get(n);
return null != i && s(i);
  }), [
null == n ? void 0 : n.connectedAccounts,
s
  ]);
}