"use strict";
n.r(t), n.d(t, {
  PrivateChannelIntegrationAddedSystemMessage: function() {
    return h
  },
  PrivateChannelIntegrationRemovedSystemMessage: function() {
    return N
  }
});
var s = n("735250"),
  l = n("470079"),
  a = n("481060"),
  i = n("239091"),
  r = n("739566"),
  o = n("942951"),
  u = n("484459"),
  d = n("103575"),
  c = n("594174"),
  f = n("702346"),
  E = n("768581"),
  _ = n("91047"),
  m = n("628566"),
  T = n("693912"),
  I = n("981631");

function p(e, t) {
  return l.useCallback(l => (r, o) => {
    var f;
    let T = E.default.getApplicationIconURL({
        id: l.id,
        icon: l.icon,
        bot: l.bot,
        botIconFirst: !0
      }),
      I = c.default.getUser(null === (f = l.bot) || void 0 === f ? void 0 : f.id),
      p = m.default.getIntegration(e.id, l.id),
      h = e.isPrivate() && null != p ? t => {
        (0, i.openContextMenuLazy)(t, async () => {
          let {
            default: t
          } = await n.e("37969").then(n.bind(n, "496281"));
          return n => (0, s.jsx)(t, {
            ...n,
            channel: e,
            integration: p
          })
        })
      } : null != I ? t => (0, _.openUserContextMenu)(t, I, e) : void 0,
      {
        bot: N
      } = l;
    return null == N ? r : (0, s.jsx)(a.Popout, {
      position: "right",
      preload: () => (0, u.default)(N.id, T, {
        guildId: e.guild_id,
        channelId: e.id
      }),
      renderPopout: n => (0, s.jsx)(d.default, {
        ...n,
        location: "PrivateChannelIntegrationSystemMessage",
        userId: N.id,
        guildId: e.guild_id,
        channelId: e.id,
        messageId: t.id
      }),
      children: e => (0, s.jsx)(a.Anchor, {
        ...e,
        onContextMenu: h,
        children: r
      })
    }, o)
  }, [e, t.id])
}

function h(e) {
  let {
    message: t,
    channel: l,
    compact: a
  } = e, i = (0, r.default)(t), u = t.application, d = (0, o.useUsernameHook)({
    user: t.author,
    channelId: l.id,
    guildId: l.guild_id,
    messageId: t.id
  }), c = p(l, t);
  return (0, s.jsx)(f.default, {
    icon: n("570111"),
    timestamp: t.timestamp,
    compact: a,
    children: (0, T.getPrivateChannelIntegrationAddedSystemMessageContent)({
      application: u,
      username: i.nick,
      usernameHook: d(i),
      applicationNameHook: null != u ? c(u) : I.NOOP
    })
  })
}

function N(e) {
  let {
    message: t,
    channel: l,
    compact: a
  } = e, i = (0, r.default)(t), u = t.application, d = (0, o.useUsernameHook)({
    user: t.author,
    channelId: l.id,
    guildId: l.guild_id,
    messageId: t.id
  }), c = p(l, t);
  return (0, s.jsx)(f.default, {
    icon: n("474019"),
    timestamp: t.timestamp,
    compact: a,
    children: (0, T.getPrivateChannelIntegrationRemovedSystemMessageContent)({
      application: u,
      username: i.nick,
      usernameHook: d(i),
      applicationNameHook: null != u ? c(u) : I.NOOP
    })
  })
}