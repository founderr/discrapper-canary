var n = t(735250);
t(470079);
var a = t(774078),
  r = t(706454),
  i = t(689938);

function l(e) {
  return e.toLocaleString(r.default.locale, {
    minimumIntegerDigits: 2,
    useGrouping: !1
  })
}
s.Z = function(e) {
  let {
    endDate: s
  } = e, t = (0, a.Z)(s, 1e3);
  return (0, n.jsx)(n.Fragment, {
    children: t.days > 0 ? i.Z.Messages.BOGO_UNTIL_OFFER_ENDS_DAYS.format({
      days: t.days
    }) : i.Z.Messages.BOGO_UNTIL_OFFER_ENDS.format({
      hours: l(t.hours),
      minutes: l(t.minutes),
      seconds: l(t.seconds)
    })
  })
}