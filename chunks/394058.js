"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("37983");
s("884691");
var i = s("174727"),
  r = s("915639"),
  n = s("782340");

function l(e) {
  return e.toLocaleString(r.default.locale, {
    minimumIntegerDigits: 2,
    useGrouping: !1
  })
}
var o = function(e) {
  let {
    endDate: t
  } = e, s = (0, i.default)(t, 1e3);
  return (0, a.jsx)(a.Fragment, {
    children: s.days > 0 ? n.default.Messages.BOGO_UNTIL_OFFER_ENDS_DAYS.format({
      days: s.days
    }) : n.default.Messages.BOGO_UNTIL_OFFER_ENDS.format({
      hours: l(s.hours),
      minutes: l(s.minutes),
      seconds: l(s.seconds)
    })
  })
}