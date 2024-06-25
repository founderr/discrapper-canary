var s = n(735250);
n(470079);
var i = n(481060),
  l = n(561716),
  a = n(51596),
  r = n(82950),
  o = n(981631),
  c = n(921944),
  u = n(689938),
  d = n(932478);
t.Z = e => {
  let t = l.$.binds["0"].split("+").map(e => null != i.PRETTY_KEYS[e] ? i.PRETTY_KEYS[e]() : e).join(" + ").toUpperCase();
  return (0, s.jsx)(r.Z, {
    guild: e.guild,
    onDismissed: () => e.markAsDismissed(c.L.UNKNOWN),
    onClick: () => (0, a.$Z)("CHANNEL_NOTICE"),
    message: u.Z.Messages.QUICKSWITCHER_NOTICE,
    cta: t,
    trackingSource: o.PsQ.QUICK_SWITCHER_NOTICE,
    type: o.vID.QUICKSWITCHER,
    image: d,
    imageMarginX: 50
  })
}