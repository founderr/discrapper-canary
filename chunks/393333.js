"use strict";
a.r(t), a.d(t, {
  UserSafetyEducationReportingCoachmark: function() {
    return f
  }
});
var n = a("735250");
a("470079");
var s = a("399606"),
  l = a("607070"),
  i = a("970731"),
  r = a("810090"),
  o = a("111653"),
  u = a("921944"),
  d = a("689938"),
  c = a("152366");
let f = e => {
  let {
    markAsDismissed: t
  } = e, a = (0, s.useStateFromStores)([l.default], () => l.default.useReducedMotion);
  return (0, o.useCanSeeSafetyEducationReportingCoachmark)() ? (0, n.jsx)(i.default, {
    asset: (0, n.jsx)(r.default, {
      src: "https://cdn.discordapp.com/attachments/1063579271815245944/1095089224421740695/CEC_Reporting_Animation_v03_EN_1x1_Music_1.mp4",
      loop: !0,
      autoPlay: !a,
      className: c.video,
      width: "100%"
    }),
    header: d.default.Messages.SAFETY_CONSUMER_EDUCATION_REPORTING_HEADER,
    content: d.default.Messages.SAFETY_CONSUMER_EDUCATION_REPORTING_CONTENT,
    buttonCTA: d.default.Messages.GOT_IT,
    onClick: e => {
      e.stopPropagation(), t(u.ContentDismissActionType.UNKNOWN)
    },
    markAsDismissed: t,
    caretPosition: i.CaretPosition.BOTTOM_CENTER,
    headerClassName: c.header
  }) : null
}