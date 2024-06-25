var n = s(735250);
s(470079);
var a = s(774078),
  i = s(706454),
  r = s(689938);

function l(e) {
  return e.toLocaleString(i.default.locale, {
    minimumIntegerDigits: 2,
    useGrouping: !1
  })
}
t.Z = function(e) {
  let {
    endDate: t
  } = e, s = (0, a.Z)(t, 1e3);
  return (0, n.jsx)(n.Fragment, {
    children: s.days > 0 ? r.Z.Messages.BOGO_UNTIL_OFFER_ENDS_DAYS.format({
      days: s.days
    }) : r.Z.Messages.BOGO_UNTIL_OFFER_ENDS.format({
      hours: l(s.hours),
      minutes: l(s.minutes),
      seconds: l(s.seconds)
    })
  })
}