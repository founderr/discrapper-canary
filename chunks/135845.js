"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var s = n("735250");
n("470079");
var l = n("512722"),
  a = n.n(l),
  i = n("442837"),
  r = n("131704"),
  o = n("601964"),
  u = n("199902"),
  d = n("914010"),
  c = n("197409"),
  f = n("358595"),
  E = n("981631"),
  _ = n("245335"),
  m = n("689938"),
  T = n("558338");

function I(e) {
  let t, n, l, {
      invite: I,
      currentUserId: p,
      guild: h,
      onTransitionToInviteChannel: N,
      onAcceptInstantInvite: S
    } = e,
    C = null == h ? void 0 : h.id,
    A = (0, i.useStateFromStores)([d.default], () => d.default.getGuildId()),
    g = (0, i.useStateFromStores)([u.default], () => null != I && null != I.target_user ? u.default.getActiveStreamForUser(I.target_user.id, C) : null, [I, C]),
    M = (0, i.useStateFromStores)([u.default], () => null != I && null != I.target_user ? u.default.getStreamForUser(I.target_user.id, C) : null, [I, C]),
    R = null != I && I.target_type === _.InviteTargetTypes.STREAM && null != I.target_user && null != g,
    v = null != I && null != M && null != I.channel && null != I.guild && M.channelId === I.channel.id && M.guildId === I.guild.id;
  a()(null != I, "Invite cannot be null");
  let {
    target_type: O,
    target_user: x
  } = I;
  a()(O === _.InviteTargetTypes.STREAM && null != x, "invalid streaming invite");
  let L = p === x.id,
    D = I.state === E.InviteStates.ACCEPTING,
    P = null != h;
  if (null == h) {
    if (null == I.guild) return (0, s.jsx)(f.default, {});
    h = new o.default(I.guild)
  }
  let y = null != I.channel ? (0, r.createChannelRecordFromInvite)(I.channel) : null,
    U = R ? N : S;
  P && !v ? l = L ? m.default.Messages.INVITE_BUTTON_STREAM_ENDED_STREAMER : m.default.Messages.INVITE_BUTTON_STREAM_ENDED.format({
    name: x.username
  }) : (t = m.default.Messages.WATCH, n = c.default.Button.Colors.GREEN, R && (t = m.default.Messages.INVITE_BUTTON_STREAM_WATCHING, n = c.default.Button.Colors.PRIMARY), l = L ? m.default.Messages.INVITE_BUTTON_STREAMER : m.default.Messages.INVITE_BUTTON_STREAMING.format({
    name: x.username
  }));
  let j = A === h.id && null != y ? (0, s.jsx)(c.default.Channel, {
    channel: y
  }) : m.default.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({
    guildName: h.name
  });
  return (0, s.jsxs)(c.default, {
    children: [(0, s.jsx)(c.default.Header, {
      text: m.default.Messages.INVITE_BUTTON_TITLE_STREAMING
    }), (0, s.jsxs)(c.default.Body, {
      children: [(0, s.jsxs)("div", {
        className: T.headerLine,
        children: [(0, s.jsx)(c.default.Icon, {
          guild: h,
          onClick: P && v ? U : void 0
        }), (0, s.jsx)(c.default.Info, {
          title: l,
          onClick: P && v ? U : void 0,
          children: j
        })]
      }), v ? (0, s.jsx)(c.default.Button, {
        disabled: P && !v,
        onClick: U,
        submitting: D,
        isDisabled: R && v,
        color: n,
        children: t
      }) : null]
    })]
  })
}