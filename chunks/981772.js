n.d(t, {
    Cn: function () {
        return h;
    },
    R6: function () {
        return m;
    },
    Ue: function () {
        return p;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    o = n(942951),
    s = n(834129),
    l = n(703656),
    u = n(314897),
    c = n(271383),
    d = n(594174),
    _ = n(805519),
    E = n(689938);
let f = (e, t) => {
    let { joinRequest: n, joinRequestGuild: r } = (0, _.Z)(t.id),
        s = (0, a.e7)([d.default], () => d.default.getUser(null == n ? void 0 : n.userId)),
        E = (0, o.l)({
            user: s,
            channelId: t.id,
            guildId: t.guild_id,
            messageId: e.id
        }),
        f = (0, a.e7)([c.ZP, u.default], () => c.ZP.isMember(null == r ? void 0 : r.id, u.default.getId())),
        h = i.useCallback(() => {
            f && null != r && (0, l.XU)(r.id);
        }, [r, f]);
    return {
        guild: r,
        joinRequest: n,
        usernameHook: E,
        guildNameClick: h
    };
};
function h(e) {
    var t, i, a;
    let { message: o, channel: l, compact: u } = e,
        { guild: c, joinRequest: d, usernameHook: _, guildNameClick: h } = f(o, l);
    return (0, r.jsx)(s.Z, {
        icon: n(570111),
        timestamp: o.timestamp,
        compact: u,
        children: E.Z.Messages.GUILD_JOIN_REQUEST_APPROVED_SYSTEM_MESSAGE.format({
            username: null !== (i = null == d ? void 0 : null === (t = d.user) || void 0 === t ? void 0 : t.username) && void 0 !== i ? i : '',
            usernameHook: _(),
            guildName: null !== (a = null == c ? void 0 : c.name) && void 0 !== a ? a : '',
            guildNameClick: h
        })
    });
}
function p(e) {
    var t, i, a;
    let { message: o, channel: l, compact: u } = e,
        { guild: c, joinRequest: d, usernameHook: _, guildNameClick: h } = f(o, l);
    return (0, r.jsx)(s.Z, {
        icon: n(474019),
        timestamp: o.timestamp,
        compact: u,
        children: E.Z.Messages.GUILD_JOIN_REQUEST_REJECTED_SYSTEM_MESSAGE.format({
            username: null !== (i = null == d ? void 0 : null === (t = d.user) || void 0 === t ? void 0 : t.username) && void 0 !== i ? i : '',
            usernameHook: _(),
            guildName: null !== (a = null == c ? void 0 : c.name) && void 0 !== a ? a : '',
            guildNameClick: h
        })
    });
}
function m(e) {
    var t, i, a;
    let { message: o, channel: l, compact: u } = e,
        { guild: c, joinRequest: d, usernameHook: _, guildNameClick: h } = f(o, l);
    return (0, r.jsx)(s.Z, {
        icon: n(474019),
        timestamp: o.timestamp,
        compact: u,
        children: E.Z.Messages.GUILD_JOIN_REQUEST_WITHDRAWN_SYSTEM_MESSAGE.format({
            username: null !== (i = null == d ? void 0 : null === (t = d.user) || void 0 === t ? void 0 : t.username) && void 0 !== i ? i : '',
            usernameHook: _(),
            guildName: null !== (a = null == c ? void 0 : c.name) && void 0 !== a ? a : '',
            guildNameClick: h
        })
    });
}
