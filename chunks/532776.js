s.d(i, {
  Z: function() {
    return r
  }
});
var n = s(470079),
  l = s(442837),
  t = s(621853);
let o = [];

function r(e) {
  let i = (0, l.e7)([t.Z], () => t.Z.getUserProfile(e));
  return (0, n.useMemo)(() => (null == i ? void 0 : i.applicationRoleConnections) == null ? o : i.applicationRoleConnections, [null == i ? void 0 : i.applicationRoleConnections])
}