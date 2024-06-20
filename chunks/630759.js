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
  s = t(594174),
  l = t(70956),
  u = t(51144),
  i = t(352954),
  c = t(231338),
  a = t(689938);

function d(e) {
  let n = s.default.getUser(e),
    t = u.ZP.getName(n);
  i.Z.openSecureFramesUpdateConfirmation({
    title: a.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_TITLE.format({
      username: t
    }),
    subtitle: a.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_SUBTITLE,
    onConfirm: c.dG
  })
}

function E(e, n) {
  i.Z.openSecureFramesUpdateConfirmation({
    title: a.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_TITLE,
    subtitle: a.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_SUBTITLE,
    onConfirm: c.dG
  })
}

function f(e, n) {
  return c.dG
}

function I(e) {
  let n = o()(e),
    t = o()().diff(n, "s");
  if (t > 12 * l.Z.Seconds.DAYS_30) {
    let e = Math.round(t / (12 * l.Z.Seconds.DAYS_30));
    return a.Z.Messages.E2EE_USER_VERIFIED_YEARS_AGO.format({
      count: e
    })
  }
  if (t > l.Z.Seconds.DAYS_30) {
    let e = Math.round(t / l.Z.Seconds.DAYS_30);
    return a.Z.Messages.E2EE_USER_VERIFIED_MONTHS_AGO.format({
      count: e
    })
  }
  if (t > 7 * l.Z.Seconds.DAY) {
    let e = Math.round(t / (7 * l.Z.Seconds.DAY));
    return a.Z.Messages.E2EE_USER_VERIFIED_WEEKS_AGO.format({
      count: e
    })
  } else if (t > l.Z.Seconds.DAY) {
    let e = Math.round(t / l.Z.Seconds.DAY);
    return a.Z.Messages.E2EE_USER_VERIFIED_DAYS_AGO.format({
      count: e
    })
  } else if (t > l.Z.Seconds.HOUR) {
    let e = Math.round(t / l.Z.Seconds.HOUR);
    return a.Z.Messages.E2EE_USER_VERIFIED_HOURS_AGO.format({
      count: e
    })
  } else {
    if (!(t > l.Z.Seconds.MINUTE)) return a.Z.Messages.E2EE_USER_VERIFIED_SECONDS_AGO.format({
      count: t
    });
    let e = Math.round(t / l.Z.Seconds.MINUTE);
    return a.Z.Messages.E2EE_USER_VERIFIED_MINUTES_AGO.format({
      count: e
    })
  }
}