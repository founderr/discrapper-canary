n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(857395),
    o = n(739566),
    s = n(834129),
    l = n(689938);
function u(e) {
    let { children: t, messageReference: n } = e;
    if (null == n) return (0, r.jsx)(i.Anchor, { children: t });
    let { guild_id: o, channel_id: s, message_id: l } = n;
    return null == o
        ? (0, r.jsx)(i.Anchor, { children: t })
        : (0, r.jsx)(a.Z, {
              guildId: o,
              channelId: s,
              messageId: l,
              children: (e) => {
                  let { 'aria-controls': n, 'aria-expanded': a, ...o } = e;
                  return (0, r.jsx)(i.Anchor, {
                      ...o,
                      children: t
                  });
              }
          });
}
function c(e) {
    let { usernameHook: t, message: i, compact: a } = e,
        { content: c, timestamp: d, messageReference: _ } = i,
        E = (0, o.ZP)(i),
        f = t(E),
        h = l.Z.Messages.SYSTEM_MESSAGE_CHANNEL_FOLLOW_ADD_HOOK.format({
            username: E.nick,
            usernameHook: f,
            webhookName: c,
            webhookNameHook: (e, t) =>
                (0, r.jsx)(
                    u,
                    {
                        messageReference: _,
                        children: e
                    },
                    t
                )
        });
    return (0, r.jsx)(s.Z, {
        icon: n(570111),
        timestamp: d,
        compact: a,
        children: h
    });
}
