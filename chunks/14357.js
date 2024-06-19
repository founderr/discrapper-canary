var i = n(735250);
n(470079);
var s = n(399606),
  l = n(607070),
  a = n(970731),
  r = n(810090),
  o = n(19199),
  c = n(921944),
  u = n(689938),
  d = n(59864);
t.Z = e => {
  let {
    markAsDismissed: t
  } = e, n = (0, s.e7)([l.Z], () => l.Z.useReducedMotion);
  return (0, o.D)() ? (0, i.jsx)(a.ZP, {
    asset: (0, i.jsx)(r.Z, {
      className: d.video,
      src: "https://cdn.discordapp.com/attachments/1067194967979733053/1067195118026772480/Safety_MUTE_Coachmark.mp4",
      loop: !0,
      autoPlay: !n,
      width: "100%"
    }),
    header: u.Z.Messages.SAFETY_CONSUMER_EDUCATION_MUTE_HEADER,
    content: u.Z.Messages.SAFETY_CONSUMER_EDUCATION_MUTE_CONTENT,
    buttonCTA: u.Z.Messages.GOT_IT,
    className: d.__invalid_coachmark,
    onClick: e => {
      e.stopPropagation(), t(c.L.UNKNOWN)
    },
    markAsDismissed: t,
    caretPosition: a.DF.BOTTOM_CENTER,
    headerClassName: d.header
  }) : null
}