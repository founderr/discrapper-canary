n.d(t, {
  Z: function() {
return h;
  }
});
var i = n(735250);
n(470079);
var a = n(512722),
  s = n.n(a),
  r = n(442837),
  l = n(955415),
  o = n(131704),
  c = n(601964),
  u = n(199902),
  d = n(914010),
  _ = n(358595),
  E = n(981631),
  I = n(245335),
  m = n(689938),
  T = n(182578);

function h(e) {
  let t, n, a, {
  invite: h,
  currentUserId: N,
  guild: f,
  onTransitionToInviteChannel: C,
  onAcceptInstantInvite: p
} = e,
g = null == f ? void 0 : f.id,
S = (0, r.e7)([d.Z], () => d.Z.getGuildId()),
A = (0, r.e7)([u.Z], () => null != h && null != h.target_user ? u.Z.getActiveStreamForUser(h.target_user.id, g) : null, [
  h,
  g
]),
M = (0, r.e7)([u.Z], () => null != h && null != h.target_user ? u.Z.getStreamForUser(h.target_user.id, g) : null, [
  h,
  g
]),
R = null != h && h.target_type === I.Iq.STREAM && null != h.target_user && null != A,
O = null != h && null != M && null != h.channel && null != h.guild && M.channelId === h.channel.id && M.guildId === h.guild.id;
  s()(null != h, 'Invite cannot be null');
  let {
target_type: x,
target_user: v
  } = h;
  s()(x === I.Iq.STREAM && null != v, 'invalid streaming invite');
  let Z = N === v.id,
L = h.state === E.r2o.ACCEPTING,
P = null != f;
  if (null == f) {
if (null == h.guild)
  return (0, i.jsx)(_.Z, {});
f = new c.ZP(h.guild);
  }
  let D = null != h.channel ? (0, o.jD)(h.channel) : null,
b = R ? C : p;
  P && !O ? a = Z ? m.Z.Messages.INVITE_BUTTON_STREAM_ENDED_STREAMER : m.Z.Messages.INVITE_BUTTON_STREAM_ENDED.format({
name: v.username
  }) : (t = m.Z.Messages.WATCH, n = l.Z.Button.Colors.GREEN, R && (t = m.Z.Messages.INVITE_BUTTON_STREAM_WATCHING, n = l.Z.Button.Colors.PRIMARY), a = Z ? m.Z.Messages.INVITE_BUTTON_STREAMER : m.Z.Messages.INVITE_BUTTON_STREAMING.format({
name: v.username
  }));
  let j = S === f.id && null != D ? (0, i.jsx)(l.Z.Channel, {
channel: D
  }) : m.Z.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({
guildName: f.name
  });
  return (0, i.jsxs)(l.Z, {
children: [
  (0, i.jsx)(l.Z.Header, {
    text: m.Z.Messages.INVITE_BUTTON_TITLE_STREAMING
  }),
  (0, i.jsxs)(l.Z.Body, {
    children: [
      (0, i.jsxs)('div', {
        className: T.headerLine,
        children: [
          (0, i.jsx)(l.Z.Icon, {
            guild: f,
            onClick: P && O ? b : void 0
          }),
          (0, i.jsx)(l.Z.Info, {
            title: a,
            onClick: P && O ? b : void 0,
            children: j
          })
        ]
      }),
      O ? (0, i.jsx)(l.Z.Button, {
        disabled: P && !O,
        onClick: b,
        submitting: L,
        isDisabled: R && O,
        color: n,
        children: t
      }) : null
    ]
  })
]
  });
}