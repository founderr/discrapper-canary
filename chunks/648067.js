s.d(n, {
  Z: function() {
return d;
  }
});
var i = s(470079),
  l = s(442837),
  o = s(726542),
  t = s(122021),
  r = s(621853);
let a = [];

function d(e) {
  let n = (0, t.Xj)({
  forUserProfile: !0
}),
s = (0, l.e7)([r.Z], () => r.Z.getUserProfile(e));
  return (0, i.useMemo)(() => (null == s ? void 0 : s.connectedAccounts) == null ? a : s.connectedAccounts.filter(e => {
let {
  type: s
} = e, i = o.Z.get(s);
return null != i && n(i);
  }), [
null == s ? void 0 : s.connectedAccounts,
n
  ]);
}