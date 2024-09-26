s.d(n, {
    Z: function () {
        return r;
    }
});
var t = s(470079),
    i = s(442837),
    l = s(621853);
let o = [];
function r(e) {
    let n = (0, i.e7)([l.Z], () => l.Z.getUserProfile(e));
    return (0, t.useMemo)(() => ((null == n ? void 0 : n.applicationRoleConnections) == null ? o : n.applicationRoleConnections), [null == n ? void 0 : n.applicationRoleConnections]);
}
