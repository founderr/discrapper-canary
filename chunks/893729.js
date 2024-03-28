"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
});
var E = s("735250"),
  _ = s("470079"),
  a = s("803997"),
  n = s.n(a),
  T = s("442837"),
  A = s("518738"),
  u = s("786761"),
  i = s("3148"),
  l = s("753206"),
  I = s("594174"),
  L = s("5192"),
  o = s("792125"),
  r = s("981631"),
  d = s("689938"),
  N = s("857179");

function S(e) {
  var t;
  let {
    guildId: s,
    role: a,
    theme: S,
    content: g = d.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_PREVIEW_MESSAGE_TEXT,
    className: D
  } = e, G = (0, T.useStateFromStores)([I.default], () => I.default.getCurrentUser()), O = L.default.useName(s, null, G), c = (0, A.getRoleIconProps)(a), U = _.useMemo(() => (0, u.createMessageRecord)({
    ...(0, i.default)({
      channelId: "0",
      content: g,
      tts: void 0,
      type: void 0,
      messageReference: void 0,
      allowedMentions: void 0,
      author: G
    }),
    state: r.MessageStates.SENT,
    id: "0"
  }), [G, g]), C = {
    nick: O,
    colorString: null !== (t = a.colorString) && void 0 !== t ? t : void 0
  };
  return (0, E.jsx)("div", {
    className: n()((0, o.getThemeClass)(S), N.container, D),
    children: (0, E.jsx)(l.default, {
      hideTimestamp: !0,
      author: C,
      roleIcon: c,
      message: U,
      isGroupStart: !0,
      disableInteraction: !0
    })
  })
}