t.d(n, {
  NV: function() {
    return i
  },
  bo: function() {
    return d
  },
  td: function() {
    return c
  },
  uz: function() {
    return a
  }
});
var r = t(913527),
  o = t.n(r),
  s = t(70956),
  l = t(231338),
  u = t(689938);

function i(e) {
  return l.dG
}

function c(e, n) {
  return l.dG
}

function a(e, n) {
  return l.dG
}

function d(e) {
  let n = o()(e),
    t = o()().diff(n, "s");
  if (t > 12 * s.Z.Seconds.DAYS_30) {
    let e = Math.round(t / (12 * s.Z.Seconds.DAYS_30));
    return u.Z.Messages.E2EE_USER_VERIFIED_YEARS_AGO.format({
      count: e
    })
  }
  if (t > s.Z.Seconds.DAYS_30) {
    let e = Math.round(t / s.Z.Seconds.DAYS_30);
    return u.Z.Messages.E2EE_USER_VERIFIED_MONTHS_AGO.format({
      count: e
    })
  }
  if (t > 7 * s.Z.Seconds.DAY) {
    let e = Math.round(t / (7 * s.Z.Seconds.DAY));
    return u.Z.Messages.E2EE_USER_VERIFIED_WEEKS_AGO.format({
      count: e
    })
  } else if (t > s.Z.Seconds.DAY) {
    let e = Math.round(t / s.Z.Seconds.DAY);
    return u.Z.Messages.E2EE_USER_VERIFIED_DAYS_AGO.format({
      count: e
    })
  } else if (t > s.Z.Seconds.HOUR) {
    let e = Math.round(t / s.Z.Seconds.HOUR);
    return u.Z.Messages.E2EE_USER_VERIFIED_HOURS_AGO.format({
      count: e
    })
  } else {
    if (!(t > s.Z.Seconds.MINUTE)) return u.Z.Messages.E2EE_USER_VERIFIED_SECONDS_AGO.format({
      count: t
    });
    let e = Math.round(t / s.Z.Seconds.MINUTE);
    return u.Z.Messages.E2EE_USER_VERIFIED_MINUTES_AGO.format({
      count: e
    })
  }
}