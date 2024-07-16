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
  d = n(199902),
  u = n(914010),
  _ = n(358595),
  E = n(981631),
  I = n(245335),
  m = n(689938),
  T = n(182578);

function h(e) {
  let t, n, a, {
  invite: h,
  currentUserId: N,
  guild: p,
  onTransitionToInviteChannel: f,
  onAcceptInstantInvite: C
} = e,
g = null == p ? void 0 : p.id,
S = (0, r.e7)([u.Z], () => u.Z.getGuildId()),
A = (0, r.e7)([d.Z], () => null != h && null != h.target_user ? d.Z.getActiveStreamForUser(h.target_user.id, g) : null, [
  h,
  g
]),
R = (0, r.e7)([d.Z], () => null != h && null != h.target_user ? d.Z.getStreamForUser(h.target_user.id, g) : null, [
  h,
  g
]),
O = null != h && h.target_type === I.Iq.STREAM && null != h.target_user && null != A,
x = null != h && null != R && null != h.channel && null != h.guild && R.channelId === h.channel.id && R.guildId === h.guild.id;
  s()(null != h, 'Invite cannot be null');
  let {
target_type: M,
target_user: v
  } = h;
  s()(M === I.Iq.STREAM && null != v, 'invalid streaming invite');
  let L = N === v.id,
Z = h.state === E.r2o.ACCEPTING,
P = null != p;
  if (null == p) {
if (null == h.guild)
  return (0, i.jsx)(_.Z, {});
p = new c.ZP(h.guild);
  }
  let b = null != h.channel ? (0, o.jD)(h.channel) : null,
D = O ? f : C;
  P && !x ? a = L ? m.Z.Messages.INVITE_BUTTON_STREAM_ENDED_STREAMER : m.Z.Messages.INVITE_BUTTON_STREAM_ENDED.format({
name: v.username
  }) : (t = m.Z.Messages.WATCH, n = l.Z.Button.Colors.GREEN, O && (t = m.Z.Messages.INVITE_BUTTON_STREAM_WATCHING, n = l.Z.Button.Colors.PRIMARY), a = L ? m.Z.Messages.INVITE_BUTTON_STREAMER : m.Z.Messages.INVITE_BUTTON_STREAMING.format({
name: v.username
  }));
  let j = S === p.id && null != b ? (0, i.jsx)(l.Z.Channel, {
channel: b
  }) : m.Z.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({
guildName: p.name
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
            guild: p,
            onClick: P && x ? D : void 0
          }),
          (0, i.jsx)(l.Z.Info, {
            title: a,
            onClick: P && x ? D : void 0,
            children: j
          })
        ]
      }),
      x ? (0, i.jsx)(l.Z.Button, {
        disabled: P && !x,
        onClick: D,
        submitting: Z,
        isDisabled: O && x,
        color: n,
        children: t
      }) : null
    ]
  })
]
  });
}