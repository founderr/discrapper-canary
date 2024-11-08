t.d(n, {
    Z: function () {
        return s;
    }
});
var i = t(192379),
    l = t(442837),
    o = t(621853);
let r = [];
function s(e) {
    let n = (0, l.e7)([o.Z], () => o.Z.getUserProfile(e));
    return (0, i.useMemo)(() => ((null == n ? void 0 : n.applicationRoleConnections) == null ? r : n.applicationRoleConnections), [null == n ? void 0 : n.applicationRoleConnections]);
}
