r.d(n, {
    hB: function () {
        return v;
    },
    lv: function () {
        return h;
    },
    n2: function () {
        return m;
    },
    nX: function () {
        return E;
    },
    rX: function () {
        return I;
    },
    xC: function () {
        return g;
    }
});
var i = r(47120);
var a = r(149765),
    s = r(442837),
    o = r(430824),
    l = r(496675),
    u = r(594174),
    c = r(700785),
    d = r(478743),
    f = r(981631);
let _ = function (e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z, u.default],
            [r, i] = n,
            a = r.getGuild(e);
        return {
            user: i.getCurrentUser(),
            guild: a
        };
    },
    h = function (e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z, u.default],
            r = _(e, n);
        return (
            null != r &&
            a.Db(
                c.uB({
                    user: r.user,
                    context: r.guild,
                    checkElevated: !1
                }),
                d.N
            )
        );
    },
    p = function (e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z, u.default],
            r = _(e, n);
        return null != r && l.Z.can(f.Plq.MANAGE_GUILD, r.guild) && l.Z.can(f.Plq.BAN_MEMBERS, r.guild);
    };
function m(e) {
    return (0, s.e7)([o.Z, u.default], () => h(e, [o.Z, u.default]), [e]);
}
function g(e) {
    let n = m(e),
        r = (0, s.e7)([o.Z, u.default], () => p(e, [o.Z, u.default]), [e]);
    return n && r;
}
function E(e) {
    return (0, s.e7)(
        [o.Z, l.Z],
        () => {
            let n = o.Z.getGuild(e);
            return null != n && l.Z.can(f.Plq.MANAGE_GUILD, n);
        },
        [e]
    );
}
function v(e, n, r) {
    return (0, s.e7)(
        [l.Z, o.Z],
        () => {
            let i = o.Z.getGuild(e);
            return null != i && n && l.Z.canManageUser(f.Plq.BAN_MEMBERS, r, i);
        },
        [n, e, r]
    );
}
function I(e, n, r) {
    let i = o.Z.getGuild(e);
    return null != i && n && l.Z.canManageUser(f.Plq.BAN_MEMBERS, r, i);
}
