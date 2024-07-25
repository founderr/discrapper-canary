n.d(i, {
  Z: function() {
return a;
  }
});
var s = n(470079),
  l = n(442837),
  t = n(621853);
let o = [];

function a(e) {
  let i = (0, l.e7)([t.Z], () => t.Z.getUserProfile(e));
  return (0, s.useMemo)(() => (null == i ? void 0 : i.applicationRoleConnections) == null ? o : i.applicationRoleConnections, [null == i ? void 0 : i.applicationRoleConnections]);
}