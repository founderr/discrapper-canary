"use strict";
i.r(s), i.d(s, {
  default: function() {
    return T
  }
});
var t = i("735250"),
  n = i("470079"),
  E = i("120356"),
  r = i.n(E),
  S = i("442837"),
  o = i("518738"),
  _ = i("786761"),
  l = i("3148"),
  a = i("753206"),
  I = i("594174"),
  u = i("5192"),
  N = i("792125"),
  A = i("981631"),
  R = i("689938"),
  O = i("199225");

function T(e) {
  var s;
  let {
    guildId: i,
    role: E,
    theme: T,
    content: d = R.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_PREVIEW_MESSAGE_TEXT,
    className: M
  } = e, c = (0, S.useStateFromStores)([I.default], () => I.default.getCurrentUser()), P = u.default.useName(i, null, c), C = (0, o.getRoleIconProps)(E), f = n.useMemo(() => (0, _.createMessageRecord)({
    ...(0, l.default)({
      channelId: "0",
      content: d,
      tts: void 0,
      type: void 0,
      messageReference: void 0,
      allowedMentions: void 0,
      author: c
    }),
    state: A.MessageStates.SENT,
    id: "0"
  }), [c, d]), m = {
    nick: P,
    colorString: null !== (s = E.colorString) && void 0 !== s ? s : void 0
  };
  return (0, t.jsx)("div", {
    className: r()((0, N.getThemeClass)(T), O.container, M),
    children: (0, t.jsx)(a.default, {
      hideTimestamp: !0,
      author: m,
      roleIcon: C,
      message: f,
      isGroupStart: !0,
      disableInteraction: !0
    })
  })
}