i.d(n, {
  Z: function() {
    return a
  }
});
var t = i(470079),
  s = i(442837),
  o = i(621853);
let l = [];

function a(e) {
  let n = (0, s.e7)([o.Z], () => o.Z.getUserProfile(e));
  return (0, t.useMemo)(() => (null == n ? void 0 : n.applicationRoleConnections) == null ? l : n.applicationRoleConnections, [null == n ? void 0 : n.applicationRoleConnections])
}