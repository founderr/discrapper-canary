n.d(t, {
  Z: function() {
    return l
  }
});
var s = n(626135),
  a = n(981631);

function l(e, t, n, l) {
  s.default.track(a.rMx.USER_REPORT_SUBMITTED, {
    report_name: "Guild Deletion",
    guild_id: e,
    reason: t,
    feedback: n,
    skipped: l
  })
}