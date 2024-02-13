"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("37983");
s("884691");
var n = s("174727"),
  i = s("915639"),
  r = s("782340");

function l(e) {
  return e.toLocaleString(i.default.locale, {
    minimumIntegerDigits: 2,
    useGrouping: !1
  })
}
var o = function(e) {
  let {
    endDate: t
  } = e, s = (0, n.default)(t, 1e3);
  return (0, a.jsx)(a.Fragment, {
    children: s.days > 0 ? r.default.Messages.BOGO_UNTIL_OFFER_ENDS_DAYS.format({
      days: s.days
    }) : r.default.Messages.BOGO_UNTIL_OFFER_ENDS.format({
      hours: l(s.hours),
      minutes: l(s.minutes),
      seconds: l(s.seconds)
    })
  })
}