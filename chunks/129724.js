t.d(s, {
  A: function() {
    return a
  }
});
var l = t(913527),
  n = t.n(l),
  i = t(689938);

function a(e) {
  let s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Z.Messages.FORM_LABEL_OFF,
    l = n().duration(e, "seconds");
  if (l.days() > 0) return (s ? i.Z.Messages.DURATION_DAYS_SHORT : i.Z.Messages.DURATION_DAYS).format({
    days: l.days()
  });
  if (l.hours() > 0) return (s ? i.Z.Messages.DURATION_HOURS_SHORT : i.Z.Messages.DURATION_HOURS).format({
    hours: l.hours()
  });
  if (l.minutes() > 0) return (s ? i.Z.Messages.DURATION_MINUTES_SHORT : i.Z.Messages.DURATION_MINUTES).format({
    minutes: l.minutes()
  });
  else if (e > 0) return (s ? i.Z.Messages.DURATION_SECONDS_SHORT : i.Z.Messages.DURATION_SECONDS).format({
    seconds: l.seconds()
  });
  else return s ? i.Z.Messages.FORM_LABEL_OFF : t
}