"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("399606"),
  i = n("607070"),
  l = n("970731"),
  r = n("810090"),
  o = n("19199"),
  u = n("921944"),
  d = n("689938"),
  c = n("28613");
t.default = e => {
  let {
    markAsDismissed: t
  } = e, n = (0, s.useStateFromStores)([i.default], () => i.default.useReducedMotion);
  return (0, o.useCanSeeSafetyEducationBlockMuteCoachmark)() ? (0, a.jsx)(l.default, {
    asset: (0, a.jsx)(r.default, {
      className: c.video,
      src: "https://cdn.discordapp.com/attachments/1067194967979733053/1067195118026772480/Safety_MUTE_Coachmark.mp4",
      loop: !0,
      autoPlay: !n,
      width: "100%"
    }),
    header: d.default.Messages.SAFETY_CONSUMER_EDUCATION_MUTE_HEADER,
    content: d.default.Messages.SAFETY_CONSUMER_EDUCATION_MUTE_CONTENT,
    buttonCTA: d.default.Messages.GOT_IT,
    className: c.__invalid_coachmark,
    onClick: e => {
      e.stopPropagation(), t(u.ContentDismissActionType.UNKNOWN)
    },
    markAsDismissed: t,
    caretPosition: l.CaretPosition.BOTTOM_CENTER,
    headerClassName: c.header
  }) : null
}