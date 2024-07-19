s.d(n, {
  Z: function() {
return r;
  }
});
var i = s(470079),
  l = s(442837),
  o = s(621853);
let t = [];

function r(e) {
  let n = (0, l.e7)([o.Z], () => o.Z.getUserProfile(e));
  return (0, i.useMemo)(() => (null == n ? void 0 : n.applicationRoleConnections) == null ? t : n.applicationRoleConnections, [null == n ? void 0 : n.applicationRoleConnections]);
}