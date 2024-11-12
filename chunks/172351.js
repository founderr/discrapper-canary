n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(367907),
    s = n(10718),
    o = n(69626),
    l = n(626135),
    u = n(785717),
    c = n(678738),
    d = n(981631),
    f = n(388032),
    _ = n(987352);
function p(e) {
    let { applicationId: t, commandIds: n, guildId: p, channel: h, onClick: m } = e,
        { trackUserProfileAction: g } = (0, u.KZ)(),
        { commands: E } = s.Qm(h, t, n),
        v = i.useMemo(
            () =>
                null == E
                    ? void 0
                    : E.filter((e) => {
                          let { nsfw: t } = e;
                          return !0 !== t;
                      }),
            [E]
        );
    if (null == v || 0 === v.length) return null;
    let I = (e) => {
        null == m || m(),
            g({ action: 'PRESS_APP_COMMAND' }),
            l.default.track(d.rMx.POPULAR_APPLICATION_COMMAND_CLICKED, {
                application_id: t,
                command_id: e,
                guild_id: p,
                ...(0, a.JS)(h.id)
            });
    };
    return (0, r.jsx)(c.Z, {
        heading: f.intl.string(f.t['0hKkS0']),
        children: (0, r.jsx)('ul', {
            className: _.list,
            children: v.map((e) =>
                (0, r.jsx)(
                    'li',
                    {
                        children: (0, r.jsx)(o.wz, {
                            commandId: e.id,
                            commandName: e.displayName,
                            commandDescription: e.displayDescription,
                            onClick: I,
                            guildId: p,
                            channelId: h.id,
                            applicationId: e.applicationId
                        })
                    },
                    e.id
                )
            )
        })
    });
}
