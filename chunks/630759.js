t.d(s, {
  Dz: function() {
return E;
  },
  KF: function() {
return u;
  },
  TQ: function() {
return T;
  },
  bo: function() {
return I;
  }
});
var n = t(913527),
  a = t.n(n),
  i = t(594174),
  r = t(70956),
  o = t(51144),
  l = t(352954),
  c = t(571826);
t(760373), t(981631);
var d = t(231338),
  _ = t(689938);

function E(e) {
  let s = i.default.getUser(e),
t = o.ZP.getName(s);
  l.Z.openSecureFramesUpdateConfirmation({
title: _.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_TITLE.format({
  username: t
}),
subtitle: _.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_SUBTITLE,
onConfirm: () => {
  (0, c.DF)();
}
  });
}

function u(e, s) {
  l.Z.openSecureFramesUpdateConfirmation({
title: _.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_TITLE,
subtitle: _.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_SUBTITLE,
onConfirm: () => {
  (0, c.Pn)();
}
  });
}

function T(e, s, t, n) {
  return (0, c.M1)({
channelId: t,
userId: e,
analyticsLocation: n
  }), d.dG;
}

function I(e) {
  let s = a()(e),
t = a()().diff(s, 's');
  if (t > 12 * r.Z.Seconds.DAYS_30) {
let e = Math.round(t / (12 * r.Z.Seconds.DAYS_30));
return _.Z.Messages.E2EE_USER_VERIFIED_YEARS_AGO.format({
  count: e
});
  }
  if (t > r.Z.Seconds.DAYS_30) {
let e = Math.round(t / r.Z.Seconds.DAYS_30);
return _.Z.Messages.E2EE_USER_VERIFIED_MONTHS_AGO.format({
  count: e
});
  }
  if (t > 7 * r.Z.Seconds.DAY) {
let e = Math.round(t / (7 * r.Z.Seconds.DAY));
return _.Z.Messages.E2EE_USER_VERIFIED_WEEKS_AGO.format({
  count: e
});
  } else if (t > r.Z.Seconds.DAY) {
let e = Math.round(t / r.Z.Seconds.DAY);
return _.Z.Messages.E2EE_USER_VERIFIED_DAYS_AGO.format({
  count: e
});
  } else if (t > r.Z.Seconds.HOUR) {
let e = Math.round(t / r.Z.Seconds.HOUR);
return _.Z.Messages.E2EE_USER_VERIFIED_HOURS_AGO.format({
  count: e
});
  } else {
if (!(t > r.Z.Seconds.MINUTE))
  return _.Z.Messages.E2EE_USER_VERIFIED_SECONDS_AGO.format({
    count: t
  });
let e = Math.round(t / r.Z.Seconds.MINUTE);
return _.Z.Messages.E2EE_USER_VERIFIED_MINUTES_AGO.format({
  count: e
});
  }
}