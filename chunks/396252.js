n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var a = n(120356),
    s = n.n(a),
    r = n(442837),
    l = n(481060),
    o = n(385499),
    c = n(430824),
    u = n(739566),
    d = n(464891),
    _ = n(83561),
    E = n(834129),
    I = n(674563),
    m = n(689938),
    f = n(38814);
function h(e) {
    var t;
    let { message: n, compact: a, usernameHook: h, channel: T } = e,
        N = (0, r.e7)([c.Z], () => c.Z.getGuild(T.guild_id)),
        p = (0, u.ZP)(n),
        C = h(p),
        {
            avatarSrc: g,
            eventHandlers: { onMouseEnter: S, onMouseLeave: A }
        } = (0, _.m)(!0);
    return (0, i.jsx)('div', {
        onMouseEnter: S,
        onMouseLeave: A,
        children: (0, i.jsx)(E.Z, {
            className: s()(f.mainContainer, { [f.compact]: a }),
            iconNode: a ? null : (0, i.jsx)(_.S, { src: g }),
            iconContainerClassName: f.iconContainer,
            compact: a,
            children: (0, i.jsxs)('div', {
                className: s()(f.content, { [f.compact]: a }),
                children: [
                    (0, i.jsx)(d.nD, {
                        message: n,
                        messageClassname: f.spanCorrection,
                        className: s()(f.usernameContainer, f.spanCorrection, { [f.compact]: a }),
                        username: (0, i.jsxs)('div', {
                            className: f.spanCorrection,
                            children: [
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: f.username,
                                    children: m.Z.Messages.GUILD_AUTOMOD_USERNAME
                                }),
                                (0, i.jsx)(o.Z, {
                                    type: I.Hb.SYSTEM_DM,
                                    className: f.systemTag
                                })
                            ]
                        }),
                        compact: a,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', {
                        className: s()(f.__invalid_messageContent, { [f.compact]: a }),
                        children: m.Z.Messages.GUILD_RAID_REPORT_SYSTEM_MESSAGE.format({
                            username: p.nick,
                            usernameHook: C,
                            guildName: null !== (t = null == N ? void 0 : N.name) && void 0 !== t ? t : ''
                        })
                    })
                ]
            })
        })
    });
}
