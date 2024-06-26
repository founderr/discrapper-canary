t.d(s, {
  Dz: function() {
    return _
  },
  KF: function() {
    return E
  },
  TQ: function() {
    return u
  },
  bo: function() {
    return T
  }
});
var n = t(913527),
  a = t.n(n),
  i = t(594174),
  r = t(70956),
  o = t(51144),
  l = t(352954);
t(981631);
var c = t(231338),
  d = t(689938);

function _(e) {
  let s = i.default.getUser(e),
    t = o.ZP.getName(s);
  l.Z.openSecureFramesUpdateConfirmation({
    title: d.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_TITLE.format({
      username: t
    }),
    subtitle: d.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_SUBTITLE,
    onConfirm: c.dG
  })
}

function E(e, s) {
  l.Z.openSecureFramesUpdateConfirmation({
    title: d.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_TITLE,
    subtitle: d.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_SUBTITLE,
    onConfirm: c.dG
  })
}

function u(e, s) {
  return c.dG
}

function T(e) {
  let s = a()(e),
    t = a()().diff(s, "s");
  if (t > 12 * r.Z.Seconds.DAYS_30) {
    let e = Math.round(t / (12 * r.Z.Seconds.DAYS_30));
    return d.Z.Messages.E2EE_USER_VERIFIED_YEARS_AGO.format({
      count: e
    })
  }
  if (t > r.Z.Seconds.DAYS_30) {
    let e = Math.round(t / r.Z.Seconds.DAYS_30);
    return d.Z.Messages.E2EE_USER_VERIFIED_MONTHS_AGO.format({
      count: e
    })
  }
  if (t > 7 * r.Z.Seconds.DAY) {
    let e = Math.round(t / (7 * r.Z.Seconds.DAY));
    return d.Z.Messages.E2EE_USER_VERIFIED_WEEKS_AGO.format({
      count: e
    })
  } else if (t > r.Z.Seconds.DAY) {
    let e = Math.round(t / r.Z.Seconds.DAY);
    return d.Z.Messages.E2EE_USER_VERIFIED_DAYS_AGO.format({
      count: e
    })
  } else if (t > r.Z.Seconds.HOUR) {
    let e = Math.round(t / r.Z.Seconds.HOUR);
    return d.Z.Messages.E2EE_USER_VERIFIED_HOURS_AGO.format({
      count: e
    })
  } else {
    if (!(t > r.Z.Seconds.MINUTE)) return d.Z.Messages.E2EE_USER_VERIFIED_SECONDS_AGO.format({
      count: t
    });
    let e = Math.round(t / r.Z.Seconds.MINUTE);
    return d.Z.Messages.E2EE_USER_VERIFIED_MINUTES_AGO.format({
      count: e
    })
  }
}