"use strict";
n.r(t), n.d(t, {
  PrivateChannelIntegrationAddedSystemMessage: function() {
    return p
  },
  PrivateChannelIntegrationRemovedSystemMessage: function() {
    return S
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
  E = n("702346"),
  f = n("768581"),
  _ = n("91047"),
  T = n("628566"),
  I = n("693912"),
  m = n("981631");

function N(e, t) {
  return l.useCallback(l => (r, o) => {
    var E;
    let I = f.default.getApplicationIconURL({
        id: l.id,
        icon: l.icon,
        bot: l.bot,
        botIconFirst: !0
      }),
      m = c.default.getUser(null === (E = l.bot) || void 0 === E ? void 0 : E.id),
      N = T.default.getIntegration(e.id, l.id),
      p = e.isPrivate() && null != N ? t => {
        (0, i.openContextMenuLazy)(t, async () => {
          let {
            default: t
          } = await n.e("37969").then(n.bind(n, "496281"));
          return n => (0, s.jsx)(t, {
            ...n,
            channel: e,
            integration: N
          })
        })
      } : null != m ? t => (0, _.openUserContextMenu)(t, m, e) : void 0,
      {
        bot: S
      } = l;
    return null == S ? r : (0, s.jsx)(a.Popout, {
      position: "right",
      preload: () => (0, u.default)(S.id, I, {
        guildId: e.guild_id,
        channelId: e.id
      }),
      renderPopout: n => (0, s.jsx)(d.default, {
        ...n,
        location: "PrivateChannelIntegrationSystemMessage",
        userId: S.id,
        guildId: e.guild_id,
        channelId: e.id,
        messageId: t.id
      }),
      children: e => (0, s.jsx)(a.Anchor, {
        ...e,
        onContextMenu: p,
        children: r
      })
    }, o)
  }, [e, t.id])
}

function p(e) {
  let {
    message: t,
    channel: l,
    compact: a
  } = e, i = (0, r.default)(t), u = t.application, d = (0, o.useUsernameHook)({
    user: t.author,
    channelId: l.id,
    guildId: l.guild_id,
    messageId: t.id
  }), c = N(l, t);
  return (0, s.jsx)(E.default, {
    icon: n("570111"),
    timestamp: t.timestamp,
    compact: a,
    children: (0, I.getPrivateChannelIntegrationAddedSystemMessageContent)({
      application: u,
      username: i.nick,
      usernameHook: d(i),
      applicationNameHook: null != u ? c(u) : m.NOOP
    })
  })
}

function S(e) {
  let {
    message: t,
    channel: l,
    compact: a
  } = e, i = (0, r.default)(t), u = t.application, d = (0, o.useUsernameHook)({
    user: t.author,
    channelId: l.id,
    guildId: l.guild_id,
    messageId: t.id
  }), c = N(l, t);
  return (0, s.jsx)(E.default, {
    icon: n("474019"),
    timestamp: t.timestamp,
    compact: a,
    children: (0, I.getPrivateChannelIntegrationRemovedSystemMessageContent)({
      application: u,
      username: i.nick,
      usernameHook: d(i),
      applicationNameHook: null != u ? c(u) : m.NOOP
    })
  })
}