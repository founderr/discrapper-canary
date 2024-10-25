n.d(t, {
    P: function () {
        return m;
    },
    e: function () {
        return f;
    }
});
var i = n(200651),
    a = n(192379),
    s = n(481060),
    r = n(739566),
    l = n(942951),
    o = n(834129),
    c = n(184301),
    u = n(347475),
    d = n(768581),
    _ = n(693912),
    E = n(981631);
function I(e, t) {
    return a.useCallback(
        (n) => (a, r) => {
            let l = d.ZP.getApplicationIconURL({
                    id: n.id,
                    icon: n.icon,
                    bot: n.bot,
                    botIconFirst: !0
                }),
                { bot: o } = n;
            return null == o
                ? a
                : (0, i.jsx)(
                      s.Popout,
                      {
                          position: 'right',
                          preload: () =>
                              (0, c.Z)(o.id, l, {
                                  guildId: e.guild_id,
                                  channelId: e.id
                              }),
                          renderPopout: (n) =>
                              (0, i.jsx)(u.Z, {
                                  ...n,
                                  userId: o.id,
                                  guildId: e.guild_id,
                                  channelId: e.id,
                                  messageId: t.id
                              }),
                          children: (e) =>
                              (0, i.jsx)(s.Anchor, {
                                  ...e,
                                  children: a
                              })
                      },
                      r
                  );
        },
        [e, t.id]
    );
}
function m(e) {
    let { message: t, channel: a, compact: s } = e,
        c = (0, r.ZP)(t),
        u = t.application,
        d = (0, l.l)({
            user: t.author,
            channelId: a.id,
            guildId: a.guild_id,
            messageId: t.id
        }),
        m = I(a, t);
    return (0, i.jsx)(o.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: s,
        children: (0, _.DS)({
            application: u,
            username: c.nick,
            usernameHook: d(c),
            applicationNameHook: null != u ? m(u) : E.dG4
        })
    });
}
function f(e) {
    let { message: t, channel: a, compact: s } = e,
        c = (0, r.ZP)(t),
        u = t.application,
        d = (0, l.l)({
            user: t.author,
            channelId: a.id,
            guildId: a.guild_id,
            messageId: t.id
        }),
        m = I(a, t);
    return (0, i.jsx)(o.Z, {
        icon: n(474019),
        timestamp: t.timestamp,
        compact: s,
        children: (0, _.nh)({
            application: u,
            username: c.nick,
            usernameHook: d(c),
            applicationNameHook: null != u ? m(u) : E.dG4
        })
    });
}
