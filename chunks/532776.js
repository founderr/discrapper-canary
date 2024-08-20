t.d(n, {
    Z: function () {
        return r;
    }
});
var i = t(470079),
    s = t(442837),
    o = t(621853);
let l = [];
function r(e) {
    let n = (0, s.e7)([o.Z], () => o.Z.getUserProfile(e));
    return (0, i.useMemo)(() => ((null == n ? void 0 : n.applicationRoleConnections) == null ? l : n.applicationRoleConnections), [null == n ? void 0 : n.applicationRoleConnections]);
}
