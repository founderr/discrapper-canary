i.d(n, {
    Z: function () {
        return a;
    }
});
var o = i(470079), s = i(442837), t = i(621853);
let l = [];
function a(e) {
    let n = (0, s.e7)([t.Z], () => t.Z.getUserProfile(e));
    return (0, o.useMemo)(() => (null == n ? void 0 : n.applicationRoleConnections) == null ? l : n.applicationRoleConnections, [null == n ? void 0 : n.applicationRoleConnections]);
}
