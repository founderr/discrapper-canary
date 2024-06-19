n.d(t, {
  H: function() {
    return a
  },
  Z: function() {
    return r
  }
});
var s = n(913527),
  i = n.n(s),
  l = n(689938);

function a(e) {
  let t = i()();
  if (e <= t) return;
  let n = e.diff(t, "days");
  if (n > 1) return l.Z.Messages.POLL_EXPIRY_DAYS_REMAINING.format({
    days: n
  });
  let s = e.diff(t, "hours");
  if (s > 1) return l.Z.Messages.POLL_EXPIRY_HOURS_REMAINING.format({
    hours: s
  });
  let a = e.diff(t, "minutes");
  return l.Z.Messages.POLL_EXPIRY_MINUTES_REMAINING.format({
    minutes: a
  })
}

function r(e) {
  if (null != e) return a(e)
}