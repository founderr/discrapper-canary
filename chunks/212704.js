"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("399606"),
  l = a("607070"),
  i = a("970731"),
  r = a("810090"),
  o = a("19199"),
  u = a("921944"),
  d = a("689938"),
  c = a("555562");
t.default = e => {
  let {
    markAsDismissed: t
  } = e, a = (0, s.useStateFromStores)([l.default], () => l.default.useReducedMotion);
  return (0, o.useCanSeeSafetyEducationBlockMuteCoachmark)() ? (0, n.jsx)(i.default, {
    asset: (0, n.jsx)(r.default, {
      className: c.video,
      src: "https://cdn.discordapp.com/attachments/1067194967979733053/1067195117439557712/Safety_BLOCK_Coachmark.mp4",
      loop: !0,
      autoPlay: !a,
      width: "100%"
    }),
    header: d.default.Messages.SAFETY_CONSUMER_EDUCATION_BLOCK_HEADER,
    content: d.default.Messages.SAFETY_CONSUMER_EDUCATION_BLOCK_CONTENT,
    buttonCTA: d.default.Messages.GOT_IT,
    className: c.__invalid_coachmark,
    onClick: e => {
      e.stopPropagation(), t(u.ContentDismissActionType.UNKNOWN)
    },
    markAsDismissed: t,
    caretPosition: i.CaretPosition.BOTTOM_CENTER,
    headerClassName: c.header
  }) : null
}