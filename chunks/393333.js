n.d(t, {
  P: function() {
    return E
  }
});
var i = n(735250);
n(470079);
var s = n(399606),
  l = n(607070),
  a = n(970731),
  r = n(810090),
  o = n(111653),
  c = n(921944),
  u = n(689938),
  d = n(675627);
let E = e => {
  let {
    markAsDismissed: t
  } = e, n = (0, s.e7)([l.Z], () => l.Z.useReducedMotion);
  return (0, o.t)() ? (0, i.jsx)(a.ZP, {
    asset: (0, i.jsx)(r.Z, {
      src: "https://cdn.discordapp.com/attachments/1063579271815245944/1095089224421740695/CEC_Reporting_Animation_v03_EN_1x1_Music_1.mp4",
      loop: !0,
      autoPlay: !n,
      className: d.video,
      width: "100%"
    }),
    header: u.Z.Messages.SAFETY_CONSUMER_EDUCATION_REPORTING_HEADER,
    content: u.Z.Messages.SAFETY_CONSUMER_EDUCATION_REPORTING_CONTENT,
    buttonCTA: u.Z.Messages.GOT_IT,
    onClick: e => {
      e.stopPropagation(), t(c.L.UNKNOWN)
    },
    markAsDismissed: t,
    caretPosition: a.DF.BOTTOM_CENTER,
    headerClassName: d.header
  }) : null
}