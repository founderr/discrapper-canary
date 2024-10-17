t.d(n, {
    Z: function () {
        return c;
    }
});
var o = t(470079),
    i = t(442837),
    s = t(621853);
let l = [];
function c(e) {
    let n = (0, i.e7)([s.Z], () => s.Z.getUserProfile(e));
    return (0, o.useMemo)(() => ((null == n ? void 0 : n.applicationRoleConnections) == null ? l : n.applicationRoleConnections), [null == n ? void 0 : n.applicationRoleConnections]);
}
