"use strict";
a.r(t), a.d(t, {
  getSecureFramesUserVerifiedTimestamp: function() {
    return o
  },
  openSecureFramesUserVerificationModal: function() {
    return i
  }
});
var u = a("735250"),
  l = a("913527"),
  s = a.n(l),
  d = a("481060"),
  n = a("70956"),
  r = a("689938");

function i(e, t) {
  (0, d.openModalLazy)(async () => {
    let l = (await Promise.all([a.e("99387"), a.e("71121")]).then(a.bind(a, "269319"))).default;
    return a => (0, u.jsx)(l, {
      userId: e,
      channelId: t,
      ...a
    })
  })
}

function o(e) {
  let t = s()(e),
    a = s()().diff(t, "s");
  if (a > 12 * n.default.Seconds.DAYS_30) {
    let e = Math.round(a / (12 * n.default.Seconds.DAYS_30));
    return r.default.Messages.E2EE_USER_VERIFIED_YEARS_AGO.format({
      count: e
    })
  }
  if (a > n.default.Seconds.DAYS_30) {
    let e = Math.round(a / n.default.Seconds.DAYS_30);
    return r.default.Messages.E2EE_USER_VERIFIED_MONTHS_AGO.format({
      count: e
    })
  }
  if (a > 7 * n.default.Seconds.DAY) {
    let e = Math.round(a / (7 * n.default.Seconds.DAY));
    return r.default.Messages.E2EE_USER_VERIFIED_WEEKS_AGO.format({
      count: e
    })
  } else if (a > n.default.Seconds.DAY) {
    let e = Math.round(a / n.default.Seconds.DAY);
    return r.default.Messages.E2EE_USER_VERIFIED_DAYS_AGO.format({
      count: e
    })
  } else if (a > n.default.Seconds.HOUR) {
    let e = Math.round(a / n.default.Seconds.HOUR);
    return r.default.Messages.E2EE_USER_VERIFIED_HOURS_AGO.format({
      count: e
    })
  } else {
    if (!(a > n.default.Seconds.MINUTE)) return r.default.Messages.E2EE_USER_VERIFIED_SECONDS_AGO.format({
      count: a
    });
    let e = Math.round(a / n.default.Seconds.MINUTE);
    return r.default.Messages.E2EE_USER_VERIFIED_MINUTES_AGO.format({
      count: e
    })
  }
}