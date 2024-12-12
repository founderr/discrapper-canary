r.d(n, {
    F: function () {
        return d;
    },
    Z: function () {
        return f;
    }
});
var i = r(47120);
var a = r(442837),
    s = r(430824),
    o = r(496675),
    l = r(594174),
    u = r(700785),
    c = r(981631);
function d(e, n) {
    let [r, i, a] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [l.default, s.Z, o.Z],
        d = i.getGuild(e),
        f = r.getUser(n);
    return (
        !(
            null == d ||
            null == f ||
            f.isNonUserBot() ||
            d.isOwner(f) ||
            u.BT({
                permission: c.Plq.ADMINISTRATOR,
                user: f,
                context: d
            })
        ) && a.canManageUser(c.Plq.MODERATE_MEMBERS, f, d)
    );
}
function f(e, n) {
    return (0, a.e7)([l.default, s.Z, o.Z], () => d(e, n, [l.default, s.Z, o.Z]), [e, n]);
}
