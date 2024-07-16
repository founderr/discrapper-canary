n.d(i, {
  Z: function() {
return r;
  }
});
var s = n(470079),
  l = n(442837),
  o = n(621853);
let t = [];

function r(e) {
  let i = (0, l.e7)([o.Z], () => o.Z.getUserProfile(e));
  return (0, s.useMemo)(() => (null == i ? void 0 : i.applicationRoleConnections) == null ? t : i.applicationRoleConnections, [null == i ? void 0 : i.applicationRoleConnections]);
}