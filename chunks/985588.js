n.d(t, {
    s: function () {
        return o;
    }
});
var i = n(442837),
    r = n(314897),
    a = n(699516);
function o(e) {
    return (0, i.e7)([a.Z, r.default], () => {
        let t = a.Z.isFriend(e.id),
            n = r.default.getId() === e.id;
        return t && !n && !e.bot && !e.system && !e.isProvisional;
    });
}
