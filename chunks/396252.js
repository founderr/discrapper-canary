n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    s = n(385499),
    c = n(430824),
    u = n(739566),
    d = n(464891),
    m = n(83561),
    f = n(834129),
    h = n(674563),
    p = n(388032),
    g = n(38814);
function _(e) {
    var t;
    let { message: n, compact: r, usernameHook: _, channel: C } = e,
        E = (0, a.e7)([c.Z], () => c.Z.getGuild(C.guild_id)),
        I = (0, u.ZP)(n),
        x = _(I),
        {
            avatarSrc: v,
            eventHandlers: { onMouseEnter: N, onMouseLeave: T }
        } = (0, m.m)(!0);
    return (0, i.jsx)('div', {
        onMouseEnter: N,
        onMouseLeave: T,
        children: (0, i.jsx)(f.Z, {
            className: l()(g.mainContainer, { [g.compact]: r }),
            iconNode: r ? null : (0, i.jsx)(m.S, { src: v }),
            iconContainerClassName: g.iconContainer,
            compact: r,
            children: (0, i.jsxs)('div', {
                className: l()(g.content, { [g.compact]: r }),
                children: [
                    (0, i.jsx)(d.nD, {
                        message: n,
                        messageClassname: g.spanCorrection,
                        className: l()(g.usernameContainer, g.spanCorrection, { [g.compact]: r }),
                        username: (0, i.jsxs)('div', {
                            className: g.spanCorrection,
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: g.username,
                                    children: p.intl.string(p.t.hG1StL)
                                }),
                                (0, i.jsx)(s.Z, {
                                    type: h.Hb.SYSTEM_DM,
                                    className: g.systemTag
                                })
                            ]
                        }),
                        compact: r,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', {
                        className: l()(g.__invalid_messageContent, { [g.compact]: r }),
                        children: p.intl.format(p.t.W0UBIy, {
                            username: I.nick,
                            usernameHook: x,
                            guildName: null !== (t = null == E ? void 0 : E.name) && void 0 !== t ? t : ''
                        })
                    })
                ]
            })
        })
    });
}
