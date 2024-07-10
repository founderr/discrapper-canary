n.d(i, {
    Z: function () {
        return a;
    }
});
var l = n(470079), s = n(442837), t = n(621853);
let o = [];
function a(e) {
    let i = (0, s.e7)([t.Z], () => t.Z.getUserProfile(e));
    return (0, l.useMemo)(() => (null == i ? void 0 : i.applicationRoleConnections) == null ? o : i.applicationRoleConnections, [null == i ? void 0 : i.applicationRoleConnections]);
}
