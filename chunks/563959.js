n.d(t, {
    P: function () {
        return N;
    },
    e: function () {
        return p;
    }
});
var i = n(200651),
    a = n(192379),
    s = n(481060),
    r = n(239091),
    l = n(739566),
    o = n(942951),
    c = n(834129),
    u = n(184301),
    d = n(347475),
    _ = n(594174),
    E = n(768581),
    I = n(91047),
    m = n(628566),
    T = n(693912),
    f = n(981631);
function h(e, t) {
    return a.useCallback(
        (a) => (l, o) => {
            var c;
            let T = E.ZP.getApplicationIconURL({
                    id: a.id,
                    icon: a.icon,
                    bot: a.bot,
                    botIconFirst: !0
                }),
                f = _.default.getUser(null === (c = a.bot) || void 0 === c ? void 0 : c.id),
                h = m.Z.getIntegration(e.id, a.id),
                N =
                    e.isPrivate() && null != h
                        ? (t) => {
                              (0, r.jW)(t, async () => {
                                  let { default: t } = await n.e('30887').then(n.bind(n, 496281));
                                  return (n) =>
                                      (0, i.jsx)(t, {
                                          ...n,
                                          channel: e,
                                          integration: h
                                      });
                              });
                          }
                        : null != f
                          ? (t) => (0, I.Pv)(t, f, e)
                          : void 0,
                { bot: p } = a;
            return null == p
                ? l
                : (0, i.jsx)(
                      s.Popout,
                      {
                          position: 'right',
                          preload: () =>
                              (0, u.Z)(p.id, T, {
                                  guildId: e.guild_id,
                                  channelId: e.id
                              }),
                          renderPopout: (n) =>
                              (0, i.jsx)(d.Z, {
                                  ...n,
                                  userId: p.id,
                                  guildId: e.guild_id,
                                  channelId: e.id,
                                  messageId: t.id
                              }),
                          children: (e) =>
                              (0, i.jsx)(s.Anchor, {
                                  ...e,
                                  onContextMenu: N,
                                  children: l
                              })
                      },
                      o
                  );
        },
        [e, t.id]
    );
}
function N(e) {
    let { message: t, channel: a, compact: s } = e,
        r = (0, l.ZP)(t),
        u = t.application,
        d = (0, o.l)({
            user: t.author,
            channelId: a.id,
            guildId: a.guild_id,
            messageId: t.id
        }),
        _ = h(a, t);
    return (0, i.jsx)(c.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: s,
        children: (0, T.DS)({
            application: u,
            username: r.nick,
            usernameHook: d(r),
            applicationNameHook: null != u ? _(u) : f.dG4
        })
    });
}
function p(e) {
    let { message: t, channel: a, compact: s } = e,
        r = (0, l.ZP)(t),
        u = t.application,
        d = (0, o.l)({
            user: t.author,
            channelId: a.id,
            guildId: a.guild_id,
            messageId: t.id
        }),
        _ = h(a, t);
    return (0, i.jsx)(c.Z, {
        icon: n(474019),
        timestamp: t.timestamp,
        compact: s,
        children: (0, T.nh)({
            application: u,
            username: r.nick,
            usernameHook: d(r),
            applicationNameHook: null != u ? _(u) : f.dG4
        })
    });
}
