n.d(t, {
  Z: function() {
    return N
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
  m = n(637091);

function N(e) {
  let t, n, i, {
      invite: N,
      currentUserId: h,
      guild: C,
      onTransitionToInviteChannel: S,
      onAcceptInstantInvite: A
    } = e,
    g = null == C ? void 0 : C.id,
    p = (0, a.e7)([u.Z], () => u.Z.getGuildId()),
    f = (0, a.e7)([c.Z], () => null != N && null != N.target_user ? c.Z.getActiveStreamForUser(N.target_user.id, g) : null, [N, g]),
    R = (0, a.e7)([c.Z], () => null != N && null != N.target_user ? c.Z.getStreamForUser(N.target_user.id, g) : null, [N, g]),
    O = null != N && N.target_type === I.Iq.STREAM && null != N.target_user && null != f,
    M = null != N && null != R && null != N.channel && null != N.guild && R.channelId === N.channel.id && R.guildId === N.guild.id;
  l()(null != N, "Invite cannot be null");
  let {
    target_type: x,
    target_user: v
  } = N;
  l()(x === I.Iq.STREAM && null != v, "invalid streaming invite");
  let L = h === v.id,
    Z = N.state === _.r2o.ACCEPTING,
    P = null != C;
  if (null == C) {
    if (null == N.guild) return (0, s.jsx)(E.Z, {});
    C = new o.ZP(N.guild)
  }
  let D = null != N.channel ? (0, r.jD)(N.channel) : null,
    j = O ? S : A;
  P && !M ? i = L ? T.Z.Messages.INVITE_BUTTON_STREAM_ENDED_STREAMER : T.Z.Messages.INVITE_BUTTON_STREAM_ENDED.format({
    name: v.username
  }) : (t = T.Z.Messages.WATCH, n = d.Z.Button.Colors.GREEN, O && (t = T.Z.Messages.INVITE_BUTTON_STREAM_WATCHING, n = d.Z.Button.Colors.PRIMARY), i = L ? T.Z.Messages.INVITE_BUTTON_STREAMER : T.Z.Messages.INVITE_BUTTON_STREAMING.format({
    name: v.username
  }));
  let U = p === C.id && null != D ? (0, s.jsx)(d.Z.Channel, {
    channel: D
  }) : T.Z.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({
    guildName: C.name
  });
  return (0, s.jsxs)(d.Z, {
    children: [(0, s.jsx)(d.Z.Header, {
      text: T.Z.Messages.INVITE_BUTTON_TITLE_STREAMING
    }), (0, s.jsxs)(d.Z.Body, {
      children: [(0, s.jsxs)("div", {
        className: m.headerLine,
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
        isDisabled: O && M,
        color: n,
        children: t
      }) : null]
    })]
  })
}