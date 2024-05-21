"use strict";
l.r(t), l.d(t, {
  getSecondsSliderLabel: function() {
    return i
  }
});
var s = l("913527"),
  a = l.n(s),
  n = l("689938");

function i(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.default.Messages.FORM_LABEL_OFF,
    s = a().duration(e, "seconds");
  if (s.days() > 0) return (t ? n.default.Messages.DURATION_DAYS_SHORT : n.default.Messages.DURATION_DAYS).format({
    days: s.days()
  });
  if (s.hours() > 0) return (t ? n.default.Messages.DURATION_HOURS_SHORT : n.default.Messages.DURATION_HOURS).format({
    hours: s.hours()
  });
  if (s.minutes() > 0) return (t ? n.default.Messages.DURATION_MINUTES_SHORT : n.default.Messages.DURATION_MINUTES).format({
    minutes: s.minutes()
  });
  else if (e > 0) return (t ? n.default.Messages.DURATION_SECONDS_SHORT : n.default.Messages.DURATION_SECONDS).format({
    seconds: s.seconds()
  });
  else return t ? n.default.Messages.FORM_LABEL_OFF : l
}