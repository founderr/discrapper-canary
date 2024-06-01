"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var s = n("735250");
n("470079");
var a = n("512722"),
  l = n.n(a),
  i = n("442837"),
  r = n("131704"),
  o = n("601964"),
  u = n("199902"),
  d = n("914010"),
  c = n("197409"),
  E = n("358595"),
  f = n("981631"),
  _ = n("245335"),
  T = n("689938"),
  m = n("798719");

function I(e) {
  let t, n, a, {
      invite: I,
      currentUserId: N,
      guild: p,
      onTransitionToInviteChannel: S,
      onAcceptInstantInvite: C
    } = e,
    A = null == p ? void 0 : p.id,
    h = (0, i.useStateFromStores)([d.default], () => d.default.getGuildId()),
    g = (0, i.useStateFromStores)([u.default], () => null != I && null != I.target_user ? u.default.getActiveStreamForUser(I.target_user.id, A) : null, [I, A]),
    M = (0, i.useStateFromStores)([u.default], () => null != I && null != I.target_user ? u.default.getStreamForUser(I.target_user.id, A) : null, [I, A]),
    O = null != I && I.target_type === _.InviteTargetTypes.STREAM && null != I.target_user && null != g,
    R = null != I && null != M && null != I.channel && null != I.guild && M.channelId === I.channel.id && M.guildId === I.guild.id;
  l()(null != I, "Invite cannot be null");
  let {
    target_type: v,
    target_user: L
  } = I;
  l()(v === _.InviteTargetTypes.STREAM && null != L, "invalid streaming invite");
  let x = N === L.id,
    P = I.state === f.InviteStates.ACCEPTING,
    D = null != p;
  if (null == p) {
    if (null == I.guild) return (0, s.jsx)(E.default, {});
    p = new o.default(I.guild)
  }
  let y = null != I.channel ? (0, r.createChannelRecordFromInvite)(I.channel) : null,
    U = O ? S : C;
  D && !R ? a = x ? T.default.Messages.INVITE_BUTTON_STREAM_ENDED_STREAMER : T.default.Messages.INVITE_BUTTON_STREAM_ENDED.format({
    name: L.username
  }) : (t = T.default.Messages.WATCH, n = c.default.Button.Colors.GREEN, O && (t = T.default.Messages.INVITE_BUTTON_STREAM_WATCHING, n = c.default.Button.Colors.PRIMARY), a = x ? T.default.Messages.INVITE_BUTTON_STREAMER : T.default.Messages.INVITE_BUTTON_STREAMING.format({
    name: L.username
  }));
  let j = h === p.id && null != y ? (0, s.jsx)(c.default.Channel, {
    channel: y
  }) : T.default.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({
    guildName: p.name
  });
  return (0, s.jsxs)(c.default, {
    children: [(0, s.jsx)(c.default.Header, {
      text: T.default.Messages.INVITE_BUTTON_TITLE_STREAMING
    }), (0, s.jsxs)(c.default.Body, {
      children: [(0, s.jsxs)("div", {
        className: m.headerLine,
        children: [(0, s.jsx)(c.default.Icon, {
          guild: p,
          onClick: D && R ? U : void 0
        }), (0, s.jsx)(c.default.Info, {
          title: a,
          onClick: D && R ? U : void 0,
          children: j
        })]
      }), R ? (0, s.jsx)(c.default.Button, {
        disabled: D && !R,
        onClick: U,
        submitting: P,
        isDisabled: O && R,
        color: n,
        children: t
      }) : null]
    })]
  })
}