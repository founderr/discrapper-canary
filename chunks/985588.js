t.d(e, {
    s: function () {
        return u;
    }
});
var i = t(442837),
    l = t(314897),
    r = t(699516);
function u(n) {
    return (0, i.e7)([r.Z, l.default], () => {
        let e = r.Z.isFriend(n.id),
            t = l.default.getId() === n.id;
        return e && !t && !n.bot && !n.system && !n.isProvisional;
    });
}
