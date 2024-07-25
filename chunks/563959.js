n.d(t, {
  P: function() {
return f;
  },
  e: function() {
return C;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(481060),
  r = n(239091),
  l = n(739566),
  o = n(942951),
  c = n(484459),
  u = n(103575),
  d = n(594174),
  _ = n(702346),
  E = n(768581),
  I = n(91047),
  m = n(628566),
  T = n(693912),
  h = n(981631);

function N(e, t) {
  return a.useCallback(a => (l, o) => {
var _;
let T = E.ZP.getApplicationIconURL({
    id: a.id,
    icon: a.icon,
    bot: a.bot,
    botIconFirst: !0
  }),
  h = d.default.getUser(null === (_ = a.bot) || void 0 === _ ? void 0 : _.id),
  N = m.Z.getIntegration(e.id, a.id),
  f = e.isPrivate() && null != N ? t => {
    (0, r.jW)(t, async () => {
      let {
        default: t
      } = await n.e('30887').then(n.bind(n, 496281));
      return n => (0, i.jsx)(t, {
        ...n,
        channel: e,
        integration: N
      });
    });
  } : null != h ? t => (0, I.Pv)(t, h, e) : void 0,
  {
    bot: C
  } = a;
return null == C ? l : (0, i.jsx)(s.Popout, {
  position: 'right',
  preload: () => (0, c.W)(C.id, T, {
    guildId: e.guild_id,
    channelId: e.id
  }),
  renderPopout: n => (0, i.jsx)(u.Z, {
    ...n,
    location: 'PrivateChannelIntegrationSystemMessage',
    userId: C.id,
    guildId: e.guild_id,
    channelId: e.id,
    messageId: t.id
  }),
  children: e => (0, i.jsx)(s.Anchor, {
    ...e,
    onContextMenu: f,
    children: l
  })
}, o);
  }, [
e,
t.id
  ]);
}

function f(e) {
  let {
message: t,
channel: a,
compact: s
  } = e, r = (0, l.ZP)(t), c = t.application, u = (0, o.l)({
user: t.author,
channelId: a.id,
guildId: a.guild_id,
messageId: t.id
  }), d = N(a, t);
  return (0, i.jsx)(_.Z, {
icon: n(570111),
timestamp: t.timestamp,
compact: s,
children: (0, T.DS)({
  application: c,
  username: r.nick,
  usernameHook: u(r),
  applicationNameHook: null != c ? d(c) : h.dG4
})
  });
}

function C(e) {
  let {
message: t,
channel: a,
compact: s
  } = e, r = (0, l.ZP)(t), c = t.application, u = (0, o.l)({
user: t.author,
channelId: a.id,
guildId: a.guild_id,
messageId: t.id
  }), d = N(a, t);
  return (0, i.jsx)(_.Z, {
icon: n(474019),
timestamp: t.timestamp,
compact: s,
children: (0, T.nh)({
  application: c,
  username: r.nick,
  usernameHook: u(r),
  applicationNameHook: null != c ? d(c) : h.dG4
})
  });
}