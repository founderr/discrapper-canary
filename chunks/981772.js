n.d(t, {
    Cn: function () {
        return m;
    },
    R6: function () {
        return T;
    },
    Ue: function () {
        return f;
    }
});
var i = n(200651),
    a = n(192379),
    s = n(442837),
    r = n(942951),
    l = n(834129),
    o = n(703656),
    c = n(314897),
    u = n(271383),
    d = n(594174),
    _ = n(805519),
    E = n(689938);
let I = (e, t) => {
    let { joinRequest: n, joinRequestGuild: i } = (0, _.Z)(t.id),
        l = (0, s.e7)([d.default], () => d.default.getUser(null == n ? void 0 : n.userId)),
        E = (0, r.l)({
            user: l,
            channelId: t.id,
            guildId: t.guild_id,
            messageId: e.id
        }),
        I = (0, s.e7)([u.ZP, c.default], () => u.ZP.isMember(null == i ? void 0 : i.id, c.default.getId())),
        m = a.useCallback(() => {
            I && null != i && (0, o.XU)(i.id);
        }, [i, I]);
    return {
        guild: i,
        joinRequest: n,
        usernameHook: E,
        guildNameClick: m
    };
};
function m(e) {
    var t, a, s;
    let { message: r, channel: o, compact: c } = e,
        { guild: u, joinRequest: d, usernameHook: _, guildNameClick: m } = I(r, o);
    return (0, i.jsx)(l.Z, {
        icon: n(570111),
        timestamp: r.timestamp,
        compact: c,
        children: E.Z.Messages.GUILD_JOIN_REQUEST_APPROVED_SYSTEM_MESSAGE.format({
            username: null !== (a = null == d ? void 0 : null === (t = d.user) || void 0 === t ? void 0 : t.username) && void 0 !== a ? a : '',
            usernameHook: _(),
            guildName: null !== (s = null == u ? void 0 : u.name) && void 0 !== s ? s : '',
            guildNameClick: m
        })
    });
}
function f(e) {
    var t, a, s;
    let { message: r, channel: o, compact: c } = e,
        { guild: u, joinRequest: d, usernameHook: _, guildNameClick: m } = I(r, o);
    return (0, i.jsx)(l.Z, {
        icon: n(474019),
        timestamp: r.timestamp,
        compact: c,
        children: E.Z.Messages.GUILD_JOIN_REQUEST_REJECTED_SYSTEM_MESSAGE.format({
            username: null !== (a = null == d ? void 0 : null === (t = d.user) || void 0 === t ? void 0 : t.username) && void 0 !== a ? a : '',
            usernameHook: _(),
            guildName: null !== (s = null == u ? void 0 : u.name) && void 0 !== s ? s : '',
            guildNameClick: m
        })
    });
}
function T(e) {
    var t, a, s;
    let { message: r, channel: o, compact: c } = e,
        { guild: u, joinRequest: d, usernameHook: _, guildNameClick: m } = I(r, o);
    return (0, i.jsx)(l.Z, {
        icon: n(474019),
        timestamp: r.timestamp,
        compact: c,
        children: E.Z.Messages.GUILD_JOIN_REQUEST_WITHDRAWN_SYSTEM_MESSAGE.format({
            username: null !== (a = null == d ? void 0 : null === (t = d.user) || void 0 === t ? void 0 : t.username) && void 0 !== a ? a : '',
            usernameHook: _(),
            guildName: null !== (s = null == u ? void 0 : u.name) && void 0 !== s ? s : '',
            guildNameClick: m
        })
    });
}
