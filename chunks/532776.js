i.d(n, {
  Z: function() {
return a;
  }
});
var s = i(470079),
  l = i(442837),
  t = i(621853);
let o = [];

function a(e) {
  let n = (0, l.e7)([t.Z], () => t.Z.getUserProfile(e));
  return (0, s.useMemo)(() => (null == n ? void 0 : n.applicationRoleConnections) == null ? o : n.applicationRoleConnections, [null == n ? void 0 : n.applicationRoleConnections]);
}