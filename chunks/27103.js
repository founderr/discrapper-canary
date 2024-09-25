n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(385499),
    l = n(739566),
    u = n(464891),
    c = n(83561),
    d = n(834129),
    _ = n(674563),
    E = n(689938),
    f = n(38814);
function h(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        h = (0, l.ZP)(t),
        p = i(h),
        {
            avatarSrc: m,
            eventHandlers: { onMouseEnter: I, onMouseLeave: T }
        } = (0, c.m)(!0);
    return (0, r.jsx)('div', {
        onMouseEnter: I,
        onMouseLeave: T,
        children: (0, r.jsx)(d.Z, {
            className: a()(f.mainContainer, { [f.compact]: n }),
            iconNode: n ? null : (0, r.jsx)(c.S, { src: m }),
            iconContainerClassName: f.iconContainer,
            compact: n,
            children: (0, r.jsxs)('div', {
                className: a()(f.content, { [f.compact]: n }),
                children: [
                    (0, r.jsx)(u.nD, {
                        message: t,
                        messageClassname: f.spanCorrection,
                        className: a()(f.usernameContainer, f.spanCorrection, { [f.compact]: n }),
                        username: (0, r.jsxs)('div', {
                            className: f.spanCorrection,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: f.username,
                                    children: E.Z.Messages.GUILD_AUTOMOD_USERNAME
                                }),
                                (0, r.jsx)(s.Z, {
                                    type: _.Hb.SYSTEM_DM,
                                    className: f.systemTag
                                })
                            ]
                        }),
                        compact: n,
                        showTimestamp: !0
                    }),
                    (0, r.jsx)('div', {
                        className: a()(f.__invalid_messageContent, { [f.compact]: n }),
                        children: E.Z.Messages.GUILD_REPORT_FALSE_ALARM_SYSTEM_MESSAGE_SHORT.format({
                            username: h.nick,
                            usernameHook: p
                        })
                    })
                ]
            })
        })
    });
}
