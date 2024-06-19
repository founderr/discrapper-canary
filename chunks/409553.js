t.d(n, {
  Z: function() {
    return C
  }
});
var o = t(735250);
t(470079);
var s = t(481060),
  r = t(63063),
  i = t(921869),
  a = t(514161),
  c = t(981631),
  l = t(689938),
  d = t(932508);

function u() {
  return (0, o.jsxs)(a.yC, {
    children: [(0, o.jsx)(a.Ux, {
      text: l.Z.Messages.CONNECT_XBOX_TRANSFER_VOICE_VALUE_PROP,
      children: (0, o.jsx)(s.VoiceNormalIcon, {
        size: "md",
        color: "currentColor"
      })
    }), (0, o.jsx)(a.Ux, {
      text: l.Z.Messages.CONNECT_XBOX_DISPLAY_GAME_VALUE_PROP,
      children: (0, o.jsx)(s.GameControllerIcon, {
        size: "md",
        color: "currentColor"
      })
    })]
  })
}

function C(e) {
  let {
    onContinue: n,
    onClose: t
  } = e, s = r.Z.getArticleURL(c.BhN.XBOX_CONNECTION);
  return (0, o.jsx)(i.m, {
    platformType: c.ABu.XBOX,
    headerConnect: l.Z.Messages.CONNECT_XBOX_LANDING_TITLE,
    headerReconnect: l.Z.Messages.RECONNECT_XBOX_LANDING_TITLE,
    body: l.Z.Messages.CONNECT_XBOX_LANDING_BODY,
    learnMoreLink: s,
    onClose: t,
    onContinue: n,
    img: (0, o.jsx)("img", {
      src: d,
      width: 234,
      height: 152,
      alt: ""
    }),
    valueProps: (0, o.jsx)(u, {})
  })
}