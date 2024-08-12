n.d(s, {
  Z: function() {
return r;
  }
});
var i = n(470079),
  l = n(442837),
  t = n(621853);
let o = [];

function r(e) {
  let s = (0, l.e7)([t.Z], () => t.Z.getUserProfile(e));
  return (0, i.useMemo)(() => (null == s ? void 0 : s.applicationRoleConnections) == null ? o : s.applicationRoleConnections, [null == s ? void 0 : s.applicationRoleConnections]);
}