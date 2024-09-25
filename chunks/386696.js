n.d(t, {
    F: function () {
        return c;
    },
    Z: function () {
        return d;
    }
});
var r = n(47120);
var i = n(442837),
    a = n(430824),
    o = n(496675),
    s = n(594174),
    l = n(700785),
    u = n(981631);
function c(e, t) {
    let [n, r, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.default, a.Z, o.Z],
        c = r.getGuild(e),
        d = n.getUser(t);
    return (
        !(
            null == c ||
            null == d ||
            d.isNonUserBot() ||
            c.isOwner(d) ||
            l.BT({
                permission: u.Plq.ADMINISTRATOR,
                user: d,
                context: c
            })
        ) && i.canManageUser(u.Plq.MODERATE_MEMBERS, d, c)
    );
}
function d(e, t) {
    return (0, i.e7)([s.default, a.Z, o.Z], () => c(e, t, [s.default, a.Z, o.Z]), [e, t]);
}
