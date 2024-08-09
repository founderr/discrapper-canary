n.d(s, {
  Z: function() {
return r;
  }
});
var i = n(470079),
  l = n(442837),
  o = n(621853);
let t = [];

function r(e) {
  let s = (0, l.e7)([o.Z], () => o.Z.getUserProfile(e));
  return (0, i.useMemo)(() => (null == s ? void 0 : s.applicationRoleConnections) == null ? t : s.applicationRoleConnections, [null == s ? void 0 : s.applicationRoleConnections]);
}