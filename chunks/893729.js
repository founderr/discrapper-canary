"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
});
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  E = s.n(i),
  l = s("442837"),
  _ = s("518738"),
  r = s("786761"),
  u = s("3148"),
  o = s("753206"),
  T = s("594174"),
  d = s("5192"),
  A = s("792125"),
  I = s("981631"),
  L = s("689938"),
  c = s("779165");

function N(e) {
  var t;
  let {
    guildId: s,
    role: i,
    theme: N,
    content: S = L.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_PREVIEW_MESSAGE_TEXT,
    className: g
  } = e, D = (0, l.useStateFromStores)([T.default], () => T.default.getCurrentUser()), C = d.default.useName(s, null, D), f = (0, _.getRoleIconProps)(i), O = n.useMemo(() => (0, r.createMessageRecord)({
    ...(0, u.default)({
      channelId: "0",
      content: S,
      tts: void 0,
      type: void 0,
      messageReference: void 0,
      allowedMentions: void 0,
      author: D
    }),
    state: I.MessageStates.SENT,
    id: "0"
  }), [D, S]), G = {
    nick: C,
    colorString: null !== (t = i.colorString) && void 0 !== t ? t : void 0
  };
  return (0, a.jsx)("div", {
    className: E()((0, A.getThemeClass)(N), c.container, g),
    children: (0, a.jsx)(o.default, {
      hideTimestamp: !0,
      author: G,
      roleIcon: f,
      message: O,
      isGroupStart: !0,
      disableInteraction: !0
    })
  })
}