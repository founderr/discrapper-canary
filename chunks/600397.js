n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var r = n(657707),
    l = n(835473),
    a = n(925329),
    o = n(739566),
    s = n(543388),
    c = n(942951),
    u = n(834129),
    d = n(388032),
    m = n(646768);
function f(e) {
    let { message: t, channel: n, author: f, compact: h } = e,
        { nick: p } = (0, o.Sw)(f, n),
        g = (0, c.l)({
            user: f,
            channelId: n.id,
            guildId: void 0,
            messageId: void 0
        })(),
        _ = (0, l.q)(t.applicationId);
    if (null == _) return null;
    let C = d.intl.format(d.t.m7Lwam, {
        username: p,
        usernameHook: g,
        gameName: _.name,
        gameIconHook: (e) =>
            (0, i.jsx)(s.j, {
                application: _,
                timestamp: t.timestamp,
                children: (0, i.jsxs)('span', {
                    className: m.gameContainer,
                    children: [
                        (0, i.jsx)(a.Z, {
                            game: _,
                            size: a.Z.Sizes.XXSMALL,
                            className: m.inlineIcon
                        }),
                        ' ',
                        e
                    ]
                })
            }),
        helpdeskArticle: '#'
    });
    return (0, i.jsx)(u.Z, {
        iconNode: (0, i.jsx)(r.iWm, { size: 'sm' }),
        compact: h,
        contentClassName: m.content,
        children: (0, i.jsx)('div', { children: C })
    });
}
