n.d(t, {
    Z: function () {
        return N;
    }
});
var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    l = n(442837),
    r = n(481060),
    o = n(385499),
    c = n(430824),
    d = n(739566),
    u = n(464891),
    _ = n(83561),
    E = n(834129),
    I = n(674563),
    m = n(689938),
    T = n(38814);
function N(e) {
    var t;
    let { message: n, compact: a, usernameHook: N, channel: h } = e,
        C = (0, l.e7)([c.Z], () => c.Z.getGuild(h.guild_id)),
        f = (0, d.ZP)(n),
        p = N(f),
        {
            avatarSrc: g,
            eventHandlers: { onMouseEnter: A, onMouseLeave: S }
        } = (0, _.m)(!0);
    return (0, i.jsx)('div', {
        onMouseEnter: A,
        onMouseLeave: S,
        children: (0, i.jsx)(E.Z, {
            className: s()(T.mainContainer, { [T.compact]: a }),
            iconNode: a ? null : (0, i.jsx)(_.S, { src: g }),
            iconContainerClassName: T.iconContainer,
            compact: a,
            children: (0, i.jsxs)('div', {
                className: s()(T.content, { [T.compact]: a }),
                children: [
                    (0, i.jsx)(u.nD, {
                        message: n,
                        messageClassname: T.spanCorrection,
                        className: s()(T.usernameContainer, T.spanCorrection, { [T.compact]: a }),
                        username: (0, i.jsxs)('div', {
                            className: T.spanCorrection,
                            children: [
                                (0, i.jsx)(r.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: T.username,
                                    children: m.Z.Messages.GUILD_AUTOMOD_USERNAME
                                }),
                                (0, i.jsx)(o.Z, {
                                    type: I.Hb.SYSTEM_DM,
                                    className: T.systemTag
                                })
                            ]
                        }),
                        compact: a,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', {
                        className: s()(T.__invalid_messageContent, { [T.compact]: a }),
                        children: m.Z.Messages.GUILD_RAID_REPORT_SYSTEM_MESSAGE.format({
                            username: f.nick,
                            usernameHook: p,
                            guildName: null !== (t = null == C ? void 0 : C.name) && void 0 !== t ? t : ''
                        })
                    })
                ]
            })
        })
    });
}
