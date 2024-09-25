n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(735250);
n(470079);
var i = n(657707),
    a = n(835473),
    o = n(925329),
    s = n(739566),
    l = n(944192),
    u = n(942951),
    c = n(834129),
    d = n(689938),
    _ = n(646768);
function E(e) {
    let { message: t, channel: n, author: E, compact: f } = e,
        { nick: h } = (0, s.Sw)(E, n),
        p = (0, u.l)({
            user: E,
            channelId: n.id,
            guildId: void 0,
            messageId: void 0
        })(),
        m = (0, a.q)(t.applicationId);
    if (null == m) return null;
    let I = d.Z.Messages.SYSTEM_MESSAGE_IN_GAME_MESSAGE_NUX.format({
        username: h,
        usernameHook: p,
        gameName: m.name,
        gameIconHook: (e) =>
            (0, r.jsx)(l.j, {
                application: m,
                timestamp: t.timestamp,
                children: (0, r.jsxs)('span', {
                    className: _.gameContainer,
                    children: [
                        (0, r.jsx)(o.Z, {
                            game: m,
                            size: o.Z.Sizes.XXSMALL,
                            className: _.inlineIcon
                        }),
                        ' ',
                        e
                    ]
                })
            }),
        helpdeskArticle: '#'
    });
    return (0, r.jsx)(c.Z, {
        iconNode: (0, r.jsx)(i.iWm, { size: 'sm' }),
        compact: f,
        contentClassName: _.content,
        children: (0, r.jsx)('div', { children: I })
    });
}
