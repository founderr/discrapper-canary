i.d(n, {
  Z: function() {
return d;
  }
});
var s = i(470079),
  l = i(442837),
  t = i(726542),
  o = i(122021),
  a = i(621853);
let r = [];

function d(e) {
  let n = (0, o.Xj)({
  forUserProfile: !0
}),
i = (0, l.e7)([a.Z], () => a.Z.getUserProfile(e));
  return (0, s.useMemo)(() => (null == i ? void 0 : i.connectedAccounts) == null ? r : i.connectedAccounts.filter(e => {
let {
  type: i
} = e, s = t.Z.get(i);
return null != s && n(s);
  }), [
null == i ? void 0 : i.connectedAccounts,
n
  ]);
}