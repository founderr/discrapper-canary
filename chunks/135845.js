n.d(t, {
  Z: function() {
    return m
  }
});
var s = n(735250);
n(470079);
var i = n(512722),
  l = n.n(i),
  a = n(442837),
  r = n(131704),
  o = n(601964),
  c = n(199902),
  u = n(914010),
  d = n(197409),
  E = n(358595),
  _ = n(981631),
  I = n(245335),
  T = n(689938),
  N = n(637091);

function m(e) {
  let t, n, i, {
      invite: m,
      currentUserId: h,
      guild: C,
      onTransitionToInviteChannel: S,
      onAcceptInstantInvite: A
    } = e,
    p = null == C ? void 0 : C.id,
    g = (0, a.e7)([u.Z], () => u.Z.getGuildId()),
    f = (0, a.e7)([c.Z], () => null != m && null != m.target_user ? c.Z.getActiveStreamForUser(m.target_user.id, p) : null, [m, p]),
    O = (0, a.e7)([c.Z], () => null != m && null != m.target_user ? c.Z.getStreamForUser(m.target_user.id, p) : null, [m, p]),
    R = null != m && m.target_type === I.Iq.STREAM && null != m.target_user && null != f,
    M = null != m && null != O && null != m.channel && null != m.guild && O.channelId === m.channel.id && O.guildId === m.guild.id;
  l()(null != m, "Invite cannot be null");
  let {
    target_type: x,
    target_user: v
  } = m;
  l()(x === I.Iq.STREAM && null != v, "invalid streaming invite");
  let L = h === v.id,
    Z = m.state === _.r2o.ACCEPTING,
    P = null != C;
  if (null == C) {
    if (null == m.guild) return (0, s.jsx)(E.Z, {});
    C = new o.ZP(m.guild)
  }
  let D = null != m.channel ? (0, r.jD)(m.channel) : null,
    j = R ? S : A;
  P && !M ? i = L ? T.Z.Messages.INVITE_BUTTON_STREAM_ENDED_STREAMER : T.Z.Messages.INVITE_BUTTON_STREAM_ENDED.format({
    name: v.username
  }) : (t = T.Z.Messages.WATCH, n = d.Z.Button.Colors.GREEN, R && (t = T.Z.Messages.INVITE_BUTTON_STREAM_WATCHING, n = d.Z.Button.Colors.PRIMARY), i = L ? T.Z.Messages.INVITE_BUTTON_STREAMER : T.Z.Messages.INVITE_BUTTON_STREAMING.format({
    name: v.username
  }));
  let U = g === C.id && null != D ? (0, s.jsx)(d.Z.Channel, {
    channel: D
  }) : T.Z.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({
    guildName: C.name
  });
  return (0, s.jsxs)(d.Z, {
    children: [(0, s.jsx)(d.Z.Header, {
      text: T.Z.Messages.INVITE_BUTTON_TITLE_STREAMING
    }), (0, s.jsxs)(d.Z.Body, {
      children: [(0, s.jsxs)("div", {
        className: N.headerLine,
        children: [(0, s.jsx)(d.Z.Icon, {
          guild: C,
          onClick: P && M ? j : void 0
        }), (0, s.jsx)(d.Z.Info, {
          title: i,
          onClick: P && M ? j : void 0,
          children: U
        })]
      }), M ? (0, s.jsx)(d.Z.Button, {
        disabled: P && !M,
        onClick: j,
        submitting: Z,
        isDisabled: R && M,
        color: n,
        children: t
      }) : null]
    })]
  })
}