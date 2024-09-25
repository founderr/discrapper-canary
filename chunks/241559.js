n.d(t, {
    hB: function () {
        return I;
    },
    lv: function () {
        return E;
    },
    n2: function () {
        return h;
    },
    nX: function () {
        return m;
    },
    rX: function () {
        return T;
    },
    xC: function () {
        return p;
    }
});
var r = n(47120);
var i = n(149765),
    a = n(442837),
    o = n(430824),
    s = n(496675),
    l = n(594174),
    u = n(700785),
    c = n(478743),
    d = n(981631);
let _ = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z, l.default],
            [n, r] = t,
            i = n.getGuild(e);
        return {
            user: r.getCurrentUser(),
            guild: i
        };
    },
    E = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z, l.default],
            n = _(e, t);
        return (
            null != n &&
            i.Db(
                u.uB({
                    user: n.user,
                    context: n.guild,
                    checkElevated: !1
                }),
                c.N
            )
        );
    },
    f = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z, l.default],
            n = _(e, t);
        return null != n && s.Z.can(d.Plq.MANAGE_GUILD, n.guild) && s.Z.can(d.Plq.BAN_MEMBERS, n.guild);
    };
function h(e) {
    return (0, a.e7)([o.Z, l.default], () => E(e, [o.Z, l.default]), [e]);
}
function p(e) {
    let t = h(e),
        n = (0, a.e7)([o.Z, l.default], () => f(e, [o.Z, l.default]), [e]);
    return t && n;
}
function m(e) {
    return (0, a.e7)(
        [o.Z, s.Z],
        () => {
            let t = o.Z.getGuild(e);
            return null != t && s.Z.can(d.Plq.MANAGE_GUILD, t);
        },
        [e]
    );
}
function I(e, t, n) {
    return (0, a.e7)(
        [s.Z, o.Z],
        () => {
            let r = o.Z.getGuild(e);
            return null != r && t && s.Z.canManageUser(d.Plq.BAN_MEMBERS, n, r);
        },
        [t, e, n]
    );
}
function T(e, t, n) {
    let r = o.Z.getGuild(e);
    return null != r && t && s.Z.canManageUser(d.Plq.BAN_MEMBERS, n, r);
}
