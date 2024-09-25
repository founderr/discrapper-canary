n.d(t, {
    Z: function () {
        return p;
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
    _ = n(981631),
    E = n(674563),
    f = n(689938),
    h = n(38814);
function p(e) {
    let { message: t, compact: n, usernameHook: i } = e,
        p = (0, l.ZP)(t),
        m = i(p),
        {
            avatarSrc: I,
            eventHandlers: { onMouseEnter: T, onMouseLeave: g }
        } = (0, c.m)(!0),
        S =
            '' !== t.content
                ? new Date(t.content).toLocaleString(f.Z.getLocale(), {
                      hour: 'numeric',
                      minute: '2-digit',
                      month: '2-digit',
                      day: '2-digit',
                      year: 'numeric'
                  })
                : '';
    return (0, r.jsx)('div', {
        onMouseEnter: T,
        onMouseLeave: g,
        children: (0, r.jsx)(d.Z, {
            className: a()(h.mainContainer, { [h.compact]: n }),
            iconNode: n ? null : (0, r.jsx)(c.S, { src: I }),
            iconContainerClassName: h.iconContainer,
            compact: n,
            children: (0, r.jsxs)('div', {
                className: a()(h.content, { [h.compact]: n }),
                children: [
                    (0, r.jsx)(u.nD, {
                        message: t,
                        messageClassname: h.spanCorrection,
                        className: a()(h.usernameContainer, h.spanCorrection, { [h.compact]: n }),
                        username: (0, r.jsxs)('div', {
                            className: h.spanCorrection,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: h.username,
                                    children: f.Z.Messages.GUILD_AUTOMOD_USERNAME
                                }),
                                (0, r.jsx)(s.Z, {
                                    type: E.Hb.SYSTEM_DM,
                                    className: h.systemTag
                                })
                            ]
                        }),
                        compact: n,
                        showTimestamp: !0
                    }),
                    (0, r.jsx)('div', {
                        className: a()(h.__invalid_messageContent, { [h.compact]: n }),
                        children:
                            t.type === _.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED
                                ? f.Z.Messages.GUILD_SERVER_LOCKDOWN_ENABLED_SYSTEM_MESSAGE_SHORT.format({
                                      username: p.nick,
                                      usernameHook: m,
                                      time: S
                                  })
                                : f.Z.Messages.GUILD_SERVER_LOCKDOWN_DISABLED_SYSTEM_MESSAGE.format({
                                      username: p.nick,
                                      usernameHook: m
                                  })
                    })
                ]
            })
        })
    });
}
