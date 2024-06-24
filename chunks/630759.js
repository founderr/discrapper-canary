t.d(n, {
  Dz: function() {
    return d
  },
  KF: function() {
    return E
  },
  TQ: function() {
    return f
  },
  bo: function() {
    return I
  }
});
var r = t(913527),
  o = t.n(r),
  u = t(594174),
  s = t(70956),
  l = t(51144),
  i = t(352954),
  a = t(231338),
  c = t(689938);

function d(e) {
  let n = u.default.getUser(e),
    t = l.ZP.getName(n);
  i.Z.openSecureFramesUpdateConfirmation({
    title: c.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_TITLE.format({
      username: t
    }),
    subtitle: c.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_SUBTITLE,
    onConfirm: a.dG
  })
}

function E(e, n) {
  i.Z.openSecureFramesUpdateConfirmation({
    title: c.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_TITLE,
    subtitle: c.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_SUBTITLE,
    onConfirm: a.dG
  })
}

function f(e, n) {
  return a.dG
}

function I(e) {
  let n = o()(e),
    t = o()().diff(n, "s");
  if (t > 12 * s.Z.Seconds.DAYS_30) {
    let e = Math.round(t / (12 * s.Z.Seconds.DAYS_30));
    return c.Z.Messages.E2EE_USER_VERIFIED_YEARS_AGO.format({
      count: e
    })
  }
  if (t > s.Z.Seconds.DAYS_30) {
    let e = Math.round(t / s.Z.Seconds.DAYS_30);
    return c.Z.Messages.E2EE_USER_VERIFIED_MONTHS_AGO.format({
      count: e
    })
  }
  if (t > 7 * s.Z.Seconds.DAY) {
    let e = Math.round(t / (7 * s.Z.Seconds.DAY));
    return c.Z.Messages.E2EE_USER_VERIFIED_WEEKS_AGO.format({
      count: e
    })
  } else if (t > s.Z.Seconds.DAY) {
    let e = Math.round(t / s.Z.Seconds.DAY);
    return c.Z.Messages.E2EE_USER_VERIFIED_DAYS_AGO.format({
      count: e
    })
  } else if (t > s.Z.Seconds.HOUR) {
    let e = Math.round(t / s.Z.Seconds.HOUR);
    return c.Z.Messages.E2EE_USER_VERIFIED_HOURS_AGO.format({
      count: e
    })
  } else {
    if (!(t > s.Z.Seconds.MINUTE)) return c.Z.Messages.E2EE_USER_VERIFIED_SECONDS_AGO.format({
      count: t
    });
    let e = Math.round(t / s.Z.Seconds.MINUTE);
    return c.Z.Messages.E2EE_USER_VERIFIED_MINUTES_AGO.format({
      count: e
    })
  }
}