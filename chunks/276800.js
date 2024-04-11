"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("774078"),
  r = s("706454"),
  l = s("689938");

function n(e) {
  return e.toLocaleString(r.default.locale, {
    minimumIntegerDigits: 2,
    useGrouping: !1
  })
}
t.default = function(e) {
  let {
    endDate: t
  } = e, s = (0, i.default)(t, 1e3);
  return (0, a.jsx)(a.Fragment, {
    children: s.days > 0 ? l.default.Messages.BOGO_UNTIL_OFFER_ENDS_DAYS.format({
      days: s.days
    }) : l.default.Messages.BOGO_UNTIL_OFFER_ENDS.format({
      hours: n(s.hours),
      minutes: n(s.minutes),
      seconds: n(s.seconds)
    })
  })
}