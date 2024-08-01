t.d(n, {
  Z: function() {
return A;
  }
});
var r = t(735250),
  i = t(470079),
  o = t(120356),
  l = t.n(o),
  u = t(442837),
  a = t(518738),
  s = t(786761),
  c = t(3148),
  d = t(753206),
  _ = t(594174),
  E = t(5192),
  f = t(792125),
  I = t(981631),
  T = t(689938),
  S = t(630787);

function A(e) {
  var n;
  let {
guildId: t,
role: o,
theme: A,
content: N = T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_PREVIEW_MESSAGE_TEXT,
className: g
  } = e, p = (0, u.e7)([_.default], () => _.default.getCurrentUser()), O = E.ZP.useName(t, null, p), C = (0, a.Kz)(o), M = i.useMemo(() => (0, s.e5)({
...(0, c.ZP)({
  channelId: '0',
  content: N,
  tts: void 0,
  type: void 0,
  messageReference: void 0,
  allowedMentions: void 0,
  author: p
}),
state: I.yb.SENT,
id: '0'
  }), [
p,
N
  ]), R = {
nick: O,
colorString: null !== (n = o.colorString) && void 0 !== n ? n : void 0
  };
  return (0, r.jsx)('div', {
className: l()((0, f.Q)(A), S.container, g),
children: (0, r.jsx)(d.Z, {
  hideTimestamp: !0,
  author: R,
  roleIcon: C,
  message: M,
  isGroupStart: !0,
  disableInteraction: !0
})
  });
}