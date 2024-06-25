t.d(n, {
  Z: function() {
    return p
  }
});
var i = t(735250),
  r = t(470079),
  l = t(120356),
  o = t.n(l),
  u = t(442837),
  s = t(518738),
  a = t(786761),
  c = t(3148),
  d = t(753206),
  _ = t(594174),
  f = t(5192),
  E = t(792125),
  I = t(981631),
  g = t(689938),
  S = t(580219);

function p(e) {
  var n;
  let {
    guildId: t,
    role: l,
    theme: p,
    content: m = g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_PREVIEW_MESSAGE_TEXT,
    className: C
  } = e, T = (0, u.e7)([_.default], () => _.default.getCurrentUser()), N = f.ZP.useName(t, null, T), A = (0, s.Kz)(l), v = r.useMemo(() => (0, a.e5)({
    ...(0, c.ZP)({
      channelId: "0",
      content: m,
      tts: void 0,
      type: void 0,
      messageReference: void 0,
      allowedMentions: void 0,
      author: T
    }),
    state: I.yb.SENT,
    id: "0"
  }), [T, m]), h = {
    nick: N,
    colorString: null !== (n = l.colorString) && void 0 !== n ? n : void 0
  };
  return (0, i.jsx)("div", {
    className: o()((0, E.Q)(p), S.container, C),
    children: (0, i.jsx)(d.Z, {
      hideTimestamp: !0,
      author: h,
      roleIcon: A,
      message: v,
      isGroupStart: !0,
      disableInteraction: !0
    })
  })
}