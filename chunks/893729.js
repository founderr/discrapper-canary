t.d(n, {
  Z: function() {
    return v
  }
});
var i = t(735250),
  l = t(470079),
  r = t(120356),
  u = t.n(r),
  o = t(442837),
  s = t(518738),
  a = t(786761),
  c = t(3148),
  _ = t(753206),
  d = t(594174),
  E = t(5192),
  f = t(792125),
  A = t(981631),
  I = t(689938),
  L = t(580219);

function v(e) {
  var n;
  let {
    guildId: t,
    role: r,
    theme: v,
    content: m = I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_PREVIEW_MESSAGE_TEXT,
    className: C
  } = e, g = (0, o.e7)([d.default], () => d.default.getCurrentUser()), N = E.ZP.useName(t, null, g), S = (0, s.Kz)(r), p = l.useMemo(() => (0, a.e5)({
    ...(0, c.ZP)({
      channelId: "0",
      content: m,
      tts: void 0,
      type: void 0,
      messageReference: void 0,
      allowedMentions: void 0,
      author: g
    }),
    state: A.yb.SENT,
    id: "0"
  }), [g, m]), Z = {
    nick: N,
    colorString: null !== (n = r.colorString) && void 0 !== n ? n : void 0
  };
  return (0, i.jsx)("div", {
    className: u()((0, f.Q)(v), L.container, C),
    children: (0, i.jsx)(_.Z, {
      hideTimestamp: !0,
      author: Z,
      roleIcon: S,
      message: p,
      isGroupStart: !0,
      disableInteraction: !0
    })
  })
}