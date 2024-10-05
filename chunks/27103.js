n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    l = n(481060),
    r = n(385499),
    o = n(739566),
    c = n(464891),
    d = n(83561),
    u = n(834129),
    _ = n(674563),
    E = n(689938),
    I = n(38814);
function m(e) {
    let { message: t, compact: n, usernameHook: a } = e,
        m = (0, o.ZP)(t),
        T = a(m),
        {
            avatarSrc: N,
            eventHandlers: { onMouseEnter: h, onMouseLeave: C }
        } = (0, d.m)(!0);
    return (0, i.jsx)('div', {
        onMouseEnter: h,
        onMouseLeave: C,
        children: (0, i.jsx)(u.Z, {
            className: s()(I.mainContainer, { [I.compact]: n }),
            iconNode: n ? null : (0, i.jsx)(d.S, { src: N }),
            iconContainerClassName: I.iconContainer,
            compact: n,
            children: (0, i.jsxs)('div', {
                className: s()(I.content, { [I.compact]: n }),
                children: [
                    (0, i.jsx)(c.nD, {
                        message: t,
                        messageClassname: I.spanCorrection,
                        className: s()(I.usernameContainer, I.spanCorrection, { [I.compact]: n }),
                        username: (0, i.jsxs)('div', {
                            className: I.spanCorrection,
                            children: [
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: I.username,
                                    children: E.Z.Messages.GUILD_AUTOMOD_USERNAME
                                }),
                                (0, i.jsx)(r.Z, {
                                    type: _.Hb.SYSTEM_DM,
                                    className: I.systemTag
                                })
                            ]
                        }),
                        compact: n,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', {
                        className: s()(I.__invalid_messageContent, { [I.compact]: n }),
                        children: E.Z.Messages.GUILD_REPORT_FALSE_ALARM_SYSTEM_MESSAGE_SHORT.format({
                            username: m.nick,
                            usernameHook: T
                        })
                    })
                ]
            })
        })
    });
}
