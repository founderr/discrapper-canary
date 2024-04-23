"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  },
  formatExpirationLabel: function() {
    return i
  }
});
var s = n("913527"),
  l = n.n(s),
  a = n("689938");

function i(e) {
  let t = l()();
  if (e <= t) return;
  let n = e.diff(t, "days");
  if (n > 1) return a.default.Messages.POLL_EXPIRY_DAYS_REMAINING.format({
    days: n
  });
  let s = e.diff(t, "hours");
  if (s > 1) return a.default.Messages.POLL_EXPIRY_HOURS_REMAINING.format({
    hours: s
  });
  let i = e.diff(t, "minutes");
  return a.default.Messages.POLL_EXPIRY_MINUTES_REMAINING.format({
    minutes: i
  })
}

function r(e) {
  if (null != e) return i(e)
}