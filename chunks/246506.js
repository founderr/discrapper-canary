"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  s = n.n(r),
  o = n("446674"),
  u = n("405645"),
  a = n("692038"),
  c = n("815297"),
  d = n("291655"),
  f = n("697218"),
  E = n("387111"),
  h = n("439932"),
  p = n("49111"),
  _ = n("782340"),
  v = n("515476");

function m(e) {
  var t;
  let {
    guildId: n,
    role: r,
    theme: m,
    content: C = _.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_PREVIEW_MESSAGE_TEXT,
    className: S
  } = e, L = (0, o.useStateFromStores)([f.default], () => f.default.getCurrentUser()), M = E.default.useName(n, null, L), I = (0, u.getRoleIconProps)(r), g = i.useMemo(() => (0, a.createMessageRecord)({
    ...(0, c.default)({
      channelId: "0",
      content: C,
      tts: void 0,
      type: void 0,
      messageReference: void 0,
      allowedMentions: void 0,
      author: L
    }),
    state: p.MessageStates.SENT,
    id: "0"
  }), [L, C]), T = {
    nick: M,
    colorString: null !== (t = r.colorString) && void 0 !== t ? t : void 0
  };
  return (0, l.jsx)("div", {
    className: s((0, h.getThemeClass)(m), v.container, S),
    children: (0, l.jsx)(d.default, {
      hideTimestamp: !0,
      author: T,
      roleIcon: I,
      message: g,
      isGroupStart: !0,
      disableInteraction: !0
    })
  })
}