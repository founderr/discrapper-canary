t.d(n, {
    BT: function () {
        return c;
    },
    N8: function () {
        return s;
    }
});
var l = t(442837);
t(467319);
var r = t(496675),
    i = t(533244),
    a = t(487419),
    o = t(981631);
function s(e) {
    let n = (0, l.e7)(
            [r.Z],
            () =>
                (function (e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Z;
                    return n.can(o.Plq.BAN_MEMBERS, e) || n.can(o.Plq.KICK_MEMBERS, e) || n.can(o.Plq.MANAGE_GUILD, e);
                })(e, r.Z),
            [e]
        ),
        t = (0, l.e7)([a.Z], () => (null != e ? a.Z.getGuildIncident(e.id) : null), [e]);
    return !(null != t && (0, i.i9)(t)) && n;
}
function c(e) {
    return (0, l.e7)(
        [r.Z],
        () =>
            (function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Z;
                return n.can(o.Plq.MANAGE_GUILD, e);
            })(e, r.Z),
        [e]
    );
}
