n.d(t, {
    P: function () {
        return T;
    },
    e: function () {
        return g;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(481060),
    o = n(239091),
    s = n(739566),
    l = n(942951),
    u = n(834129),
    c = n(184301),
    d = n(347475),
    _ = n(594174),
    E = n(768581),
    f = n(91047),
    h = n(628566),
    p = n(693912),
    m = n(981631);
function I(e, t) {
    return i.useCallback(
        (i) => (s, l) => {
            var u;
            let p = E.ZP.getApplicationIconURL({
                    id: i.id,
                    icon: i.icon,
                    bot: i.bot,
                    botIconFirst: !0
                }),
                m = _.default.getUser(null === (u = i.bot) || void 0 === u ? void 0 : u.id),
                I = h.Z.getIntegration(e.id, i.id),
                T =
                    e.isPrivate() && null != I
                        ? (t) => {
                              (0, o.jW)(t, async () => {
                                  let { default: t } = await n.e('30887').then(n.bind(n, 496281));
                                  return (n) =>
                                      (0, r.jsx)(t, {
                                          ...n,
                                          channel: e,
                                          integration: I
                                      });
                              });
                          }
                        : null != m
                          ? (t) => (0, f.Pv)(t, m, e)
                          : void 0,
                { bot: g } = i;
            return null == g
                ? s
                : (0, r.jsx)(
                      a.Popout,
                      {
                          position: 'right',
                          preload: () =>
                              (0, c.Z)(g.id, p, {
                                  guildId: e.guild_id,
                                  channelId: e.id
                              }),
                          renderPopout: (n) =>
                              (0, r.jsx)(d.Z, {
                                  ...n,
                                  userId: g.id,
                                  guildId: e.guild_id,
                                  channelId: e.id,
                                  messageId: t.id
                              }),
                          children: (e) =>
                              (0, r.jsx)(a.Anchor, {
                                  ...e,
                                  onContextMenu: T,
                                  children: s
                              })
                      },
                      l
                  );
        },
        [e, t.id]
    );
}
function T(e) {
    let { message: t, channel: i, compact: a } = e,
        o = (0, s.ZP)(t),
        c = t.application,
        d = (0, l.l)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id
        }),
        _ = I(i, t);
    return (0, r.jsx)(u.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: a,
        children: (0, p.DS)({
            application: c,
            username: o.nick,
            usernameHook: d(o),
            applicationNameHook: null != c ? _(c) : m.dG4
        })
    });
}
function g(e) {
    let { message: t, channel: i, compact: a } = e,
        o = (0, s.ZP)(t),
        c = t.application,
        d = (0, l.l)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id
        }),
        _ = I(i, t);
    return (0, r.jsx)(u.Z, {
        icon: n(474019),
        timestamp: t.timestamp,
        compact: a,
        children: (0, p.nh)({
            application: c,
            username: o.nick,
            usernameHook: d(o),
            applicationNameHook: null != c ? _(c) : m.dG4
        })
    });
}
