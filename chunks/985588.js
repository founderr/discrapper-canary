e.d(t, {
    s: function () {
        return a;
    }
});
var i = e(442837),
    r = e(314897),
    l = e(699516);
function a(n) {
    return (0, i.e7)([l.Z, r.default], () => {
        let t = l.Z.isFriend(n.id),
            e = r.default.getId() === n.id;
        return t && !e && !n.bot && !n.system && !n.isProvisional;
    });
}
