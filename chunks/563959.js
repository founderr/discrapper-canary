"use strict";
n.r(t), n.d(t, {
  PrivateChannelIntegrationAddedSystemMessage: function() {
    return N
  },
  PrivateChannelIntegrationRemovedSystemMessage: function() {
    return S
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("481060"),
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

function p(e, t) {
  return a.useCallback(a => (r, o) => {
    var E;
    let I = f.default.getApplicationIconURL({
        id: a.id,
        icon: a.icon,
        bot: a.bot,
        botIconFirst: !0
      }),
      m = c.default.getUser(null === (E = a.bot) || void 0 === E ? void 0 : E.id),
      p = T.default.getIntegration(e.id, a.id),
      N = e.isPrivate() && null != p ? t => {
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
      } : null != m ? t => (0, _.openUserContextMenu)(t, m, e) : void 0,
      {
        bot: S
      } = a;
    return null == S ? r : (0, s.jsx)(l.Popout, {
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
      children: e => (0, s.jsx)(l.Anchor, {
        ...e,
        onContextMenu: N,
        children: r
      })
    }, o)
  }, [e, t.id])
}

function N(e) {
  let {
    message: t,
    channel: a,
    compact: l
  } = e, i = (0, r.default)(t), u = t.application, d = (0, o.useUsernameHook)({
    user: t.author,
    channelId: a.id,
    guildId: a.guild_id,
    messageId: t.id
  }), c = p(a, t);
  return (0, s.jsx)(E.default, {
    icon: n("570111"),
    timestamp: t.timestamp,
    compact: l,
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
    channel: a,
    compact: l
  } = e, i = (0, r.default)(t), u = t.application, d = (0, o.useUsernameHook)({
    user: t.author,
    channelId: a.id,
    guildId: a.guild_id,
    messageId: t.id
  }), c = p(a, t);
  return (0, s.jsx)(E.default, {
    icon: n("474019"),
    timestamp: t.timestamp,
    compact: l,
    children: (0, I.getPrivateChannelIntegrationRemovedSystemMessageContent)({
      application: u,
      username: i.nick,
      usernameHook: d(i),
      applicationNameHook: null != u ? c(u) : m.NOOP
    })
  })
}