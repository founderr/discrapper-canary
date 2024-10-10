n.d(t, {
    P: function () {
        return C;
    },
    e: function () {
        return f;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(481060),
    l = n(239091),
    r = n(739566),
    o = n(942951),
    c = n(834129),
    d = n(184301),
    u = n(347475),
    _ = n(594174),
    E = n(768581),
    I = n(91047),
    m = n(628566),
    T = n(693912),
    N = n(981631);
function h(e, t) {
    return a.useCallback(
        (a) => (r, o) => {
            var c;
            let T = E.ZP.getApplicationIconURL({
                    id: a.id,
                    icon: a.icon,
                    bot: a.bot,
                    botIconFirst: !0
                }),
                N = _.default.getUser(null === (c = a.bot) || void 0 === c ? void 0 : c.id),
                h = m.Z.getIntegration(e.id, a.id),
                C =
                    e.isPrivate() && null != h
                        ? (t) => {
                              (0, l.jW)(t, async () => {
                                  let { default: t } = await n.e('30887').then(n.bind(n, 496281));
                                  return (n) =>
                                      (0, i.jsx)(t, {
                                          ...n,
                                          channel: e,
                                          integration: h
                                      });
                              });
                          }
                        : null != N
                          ? (t) => (0, I.Pv)(t, N, e)
                          : void 0,
                { bot: f } = a;
            return null == f
                ? r
                : (0, i.jsx)(
                      s.Popout,
                      {
                          position: 'right',
                          preload: () =>
                              (0, d.Z)(f.id, T, {
                                  guildId: e.guild_id,
                                  channelId: e.id
                              }),
                          renderPopout: (n) =>
                              (0, i.jsx)(u.Z, {
                                  ...n,
                                  userId: f.id,
                                  guildId: e.guild_id,
                                  channelId: e.id,
                                  messageId: t.id
                              }),
                          children: (e) =>
                              (0, i.jsx)(s.Anchor, {
                                  ...e,
                                  onContextMenu: C,
                                  children: r
                              })
                      },
                      o
                  );
        },
        [e, t.id]
    );
}
function C(e) {
    let { message: t, channel: a, compact: s } = e,
        l = (0, r.ZP)(t),
        d = t.application,
        u = (0, o.l)({
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
            application: d,
            username: l.nick,
            usernameHook: u(l),
            applicationNameHook: null != d ? _(d) : N.dG4
        })
    });
}
function f(e) {
    let { message: t, channel: a, compact: s } = e,
        l = (0, r.ZP)(t),
        d = t.application,
        u = (0, o.l)({
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
            application: d,
            username: l.nick,
            usernameHook: u(l),
            applicationNameHook: null != d ? _(d) : N.dG4
        })
    });
}
