S.d(e, {
  Z: function() {
    return P
  }
});
var _ = S(735250),
  t = S(470079),
  n = S(120356),
  i = S.n(n),
  l = S(442837),
  I = S(518738),
  r = S(786761),
  s = S(3148),
  N = S(753206),
  o = S(594174),
  A = S(5192),
  R = S(792125),
  O = S(981631),
  u = S(689938),
  a = S(580219);

function P(E) {
  var e;
  let {
    guildId: S,
    role: n,
    theme: P,
    content: M = u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_PREVIEW_MESSAGE_TEXT,
    className: T
  } = E, C = (0, l.e7)([o.default], () => o.default.getCurrentUser()), L = A.ZP.useName(S, null, C), c = (0, I.Kz)(n), D = t.useMemo(() => (0, r.e5)({
    ...(0, s.ZP)({
      channelId: "0",
      content: M,
      tts: void 0,
      type: void 0,
      messageReference: void 0,
      allowedMentions: void 0,
      author: C
    }),
    state: O.yb.SENT,
    id: "0"
  }), [C, M]), d = {
    nick: L,
    colorString: null !== (e = n.colorString) && void 0 !== e ? e : void 0
  };
  return (0, _.jsx)("div", {
    className: i()((0, R.Q)(P), a.container, T),
    children: (0, _.jsx)(N.Z, {
      hideTimestamp: !0,
      author: d,
      roleIcon: c,
      message: D,
      isGroupStart: !0,
      disableInteraction: !0
    })
  })
}