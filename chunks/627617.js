"use strict";
n.r(t), n.d(t, {
  addUserVerification: function() {
    return c
  },
  clearAllUserVerifications: function() {
    return o
  },
  clearUserVerification: function() {
    return i
  },
  getSecureFramesUserVerifiedTimestamp: function() {
    return d
  }
});
var r = n("913527"),
  s = n.n(r),
  a = n("70956"),
  u = n("231338"),
  l = n("689938");

function o(e) {
  return u.NOOP
}

function i(e) {
  return u.NOOP
}

function c(e) {
  return u.NOOP
}

function d(e) {
  let t = s()(e),
    n = s()().diff(t, "s");
  if (n > 12 * a.default.Seconds.DAYS_30) {
    let e = Math.round(n / (12 * a.default.Seconds.DAYS_30));
    return l.default.Messages.E2EE_USER_VERIFIED_YEARS_AGO.format({
      count: e
    })
  }
  if (n > a.default.Seconds.DAYS_30) {
    let e = Math.round(n / a.default.Seconds.DAYS_30);
    return l.default.Messages.E2EE_USER_VERIFIED_MONTHS_AGO.format({
      count: e
    })
  }
  if (n > 7 * a.default.Seconds.DAY) {
    let e = Math.round(n / (7 * a.default.Seconds.DAY));
    return l.default.Messages.E2EE_USER_VERIFIED_WEEKS_AGO.format({
      count: e
    })
  } else if (n > a.default.Seconds.DAY) {
    let e = Math.round(n / a.default.Seconds.DAY);
    return l.default.Messages.E2EE_USER_VERIFIED_DAYS_AGO.format({
      count: e
    })
  } else if (n > a.default.Seconds.HOUR) {
    let e = Math.round(n / a.default.Seconds.HOUR);
    return l.default.Messages.E2EE_USER_VERIFIED_HOURS_AGO.format({
      count: e
    })
  } else {
    if (!(n > a.default.Seconds.MINUTE)) return l.default.Messages.E2EE_USER_VERIFIED_SECONDS_AGO.format({
      count: n
    });
    let e = Math.round(n / a.default.Seconds.MINUTE);
    return l.default.Messages.E2EE_USER_VERIFIED_MINUTES_AGO.format({
      count: e
    })
  }
}