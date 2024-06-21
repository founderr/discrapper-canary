n.d(t, {
  Z: function() {
    return u
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(857395),
  a = n(702346),
  r = n(739566),
  o = n(689938);

function c(e) {
  let {
    children: t,
    messageReference: n
  } = e;
  if (null == n) return (0, s.jsx)(i.Anchor, {
    children: t
  });
  let {
    guild_id: a,
    channel_id: r,
    message_id: o
  } = n;
  return null == a ? (0, s.jsx)(i.Anchor, {
    children: t
  }) : (0, s.jsx)(l.Z, {
    guildId: a,
    channelId: r,
    messageId: o,
    children: e => {
      let {
        "aria-controls": n,
        "aria-expanded": l,
        ...a
      } = e;
      return (0, s.jsx)(i.Anchor, {
        ...a,
        children: t
      })
    }
  })
}

function u(e) {
  let {
    usernameHook: t,
    message: i,
    compact: l
  } = e, {
    content: u,
    timestamp: d,
    messageReference: E
  } = i, _ = (0, r.ZP)(i), I = t(_), T = o.Z.Messages.SYSTEM_MESSAGE_CHANNEL_FOLLOW_ADD_HOOK.format({
    username: _.nick,
    usernameHook: I,
    webhookName: u,
    webhookNameHook: (e, t) => (0, s.jsx)(c, {
      messageReference: E,
      children: e
    }, t)
  });
  return (0, s.jsx)(a.Z, {
    icon: n(570111),
    timestamp: d,
    compact: l,
    children: T
  })
}