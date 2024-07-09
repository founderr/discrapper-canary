i.d(n, {
    Z: function () {
        return a;
    }
});
var l = i(470079), s = i(442837), o = i(621853);
let t = [];
function a(e) {
    let n = (0, s.e7)([o.Z], () => o.Z.getUserProfile(e));
    return (0, l.useMemo)(() => (null == n ? void 0 : n.applicationRoleConnections) == null ? t : n.applicationRoleConnections, [null == n ? void 0 : n.applicationRoleConnections]);
}
