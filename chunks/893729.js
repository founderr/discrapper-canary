t.d(n, {
  Z: function() {
    return m
  }
});
var i = t(735250),
  r = t(470079),
  o = t(120356),
  l = t.n(o),
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
  p = t(580219);

function m(e) {
  var n;
  let {
    guildId: t,
    role: o,
    theme: m,
    content: S = g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_PREVIEW_MESSAGE_TEXT,
    className: C
  } = e, T = (0, u.e7)([_.default], () => _.default.getCurrentUser()), N = f.ZP.useName(t, null, T), h = (0, s.Kz)(o), v = r.useMemo(() => (0, a.e5)({
    ...(0, c.ZP)({
      channelId: "0",
      content: S,
      tts: void 0,
      type: void 0,
      messageReference: void 0,
      allowedMentions: void 0,
      author: T
    }),
    state: I.yb.SENT,
    id: "0"
  }), [T, S]), A = {
    nick: N,
    colorString: null !== (n = o.colorString) && void 0 !== n ? n : void 0
  };
  return (0, i.jsx)("div", {
    className: l()((0, E.Q)(m), p.container, C),
    children: (0, i.jsx)(d.Z, {
      hideTimestamp: !0,
      author: A,
      roleIcon: h,
      message: v,
      isGroupStart: !0,
      disableInteraction: !0
    })
  })
}