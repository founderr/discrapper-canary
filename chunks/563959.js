n.d(t, {
  P: function() {
    return C
  },
  e: function() {
    return S
  }
});
var s = n(735250),
  i = n(470079),
  l = n(481060),
  a = n(239091),
  r = n(739566),
  o = n(942951),
  c = n(484459),
  u = n(103575),
  d = n(594174),
  E = n(702346),
  _ = n(768581),
  I = n(91047),
  T = n(628566),
  m = n(693912),
  N = n(981631);

function h(e, t) {
  return i.useCallback(i => (r, o) => {
    var E;
    let m = _.ZP.getApplicationIconURL({
        id: i.id,
        icon: i.icon,
        bot: i.bot,
        botIconFirst: !0
      }),
      N = d.default.getUser(null === (E = i.bot) || void 0 === E ? void 0 : E.id),
      h = T.Z.getIntegration(e.id, i.id),
      C = e.isPrivate() && null != h ? t => {
        (0, a.jW)(t, async () => {
          let {
            default: t
          } = await n.e("30887").then(n.bind(n, 496281));
          return n => (0, s.jsx)(t, {
            ...n,
            channel: e,
            integration: h
          })
        })
      } : null != N ? t => (0, I.Pv)(t, N, e) : void 0,
      {
        bot: S
      } = i;
    return null == S ? r : (0, s.jsx)(l.Popout, {
      position: "right",
      preload: () => (0, c.W)(S.id, m, {
        guildId: e.guild_id,
        channelId: e.id
      }),
      renderPopout: n => (0, s.jsx)(u.Z, {
        ...n,
        location: "PrivateChannelIntegrationSystemMessage",
        userId: S.id,
        guildId: e.guild_id,
        channelId: e.id,
        messageId: t.id
      }),
      children: e => (0, s.jsx)(l.Anchor, {
        ...e,
        onContextMenu: C,
        children: r
      })
    }, o)
  }, [e, t.id])
}

function C(e) {
  let {
    message: t,
    channel: i,
    compact: l
  } = e, a = (0, r.ZP)(t), c = t.application, u = (0, o.l)({
    user: t.author,
    channelId: i.id,
    guildId: i.guild_id,
    messageId: t.id
  }), d = h(i, t);
  return (0, s.jsx)(E.Z, {
    icon: n(570111),
    timestamp: t.timestamp,
    compact: l,
    children: (0, m.DS)({
      application: c,
      username: a.nick,
      usernameHook: u(a),
      applicationNameHook: null != c ? d(c) : N.dG4
    })
  })
}

function S(e) {
  let {
    message: t,
    channel: i,
    compact: l
  } = e, a = (0, r.ZP)(t), c = t.application, u = (0, o.l)({
    user: t.author,
    channelId: i.id,
    guildId: i.guild_id,
    messageId: t.id
  }), d = h(i, t);
  return (0, s.jsx)(E.Z, {
    icon: n(474019),
    timestamp: t.timestamp,
    compact: l,
    children: (0, m.nh)({
      application: c,
      username: a.nick,
      usernameHook: u(a),
      applicationNameHook: null != c ? d(c) : N.dG4
    })
  })
}