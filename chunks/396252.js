n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(385499),
    u = n(430824),
    c = n(739566),
    d = n(464891),
    _ = n(83561),
    E = n(834129),
    f = n(674563),
    h = n(689938),
    p = n(38814);
function m(e) {
    var t;
    let { message: n, compact: i, usernameHook: m, channel: I } = e,
        T = (0, o.e7)([u.Z], () => u.Z.getGuild(I.guild_id)),
        g = (0, c.ZP)(n),
        S = m(g),
        {
            avatarSrc: A,
            eventHandlers: { onMouseEnter: v, onMouseLeave: N }
        } = (0, _.m)(!0);
    return (0, r.jsx)('div', {
        onMouseEnter: v,
        onMouseLeave: N,
        children: (0, r.jsx)(E.Z, {
            className: a()(p.mainContainer, { [p.compact]: i }),
            iconNode: i ? null : (0, r.jsx)(_.S, { src: A }),
            iconContainerClassName: p.iconContainer,
            compact: i,
            children: (0, r.jsxs)('div', {
                className: a()(p.content, { [p.compact]: i }),
                children: [
                    (0, r.jsx)(d.nD, {
                        message: n,
                        messageClassname: p.spanCorrection,
                        className: a()(p.usernameContainer, p.spanCorrection, { [p.compact]: i }),
                        username: (0, r.jsxs)('div', {
                            className: p.spanCorrection,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: p.username,
                                    children: h.Z.Messages.GUILD_AUTOMOD_USERNAME
                                }),
                                (0, r.jsx)(l.Z, {
                                    type: f.Hb.SYSTEM_DM,
                                    className: p.systemTag
                                })
                            ]
                        }),
                        compact: i,
                        showTimestamp: !0
                    }),
                    (0, r.jsx)('div', {
                        className: a()(p.__invalid_messageContent, { [p.compact]: i }),
                        children: h.Z.Messages.GUILD_RAID_REPORT_SYSTEM_MESSAGE.format({
                            username: g.nick,
                            usernameHook: S,
                            guildName: null !== (t = null == T ? void 0 : T.name) && void 0 !== t ? t : ''
                        })
                    })
                ]
            })
        })
    });
}
