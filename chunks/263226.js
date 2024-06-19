s.d(n, {
  Z: function() {
    return l
  }
});
var t = s(626135),
  a = s(981631);

function l(e, n, s, l) {
  t.default.track(a.rMx.USER_REPORT_SUBMITTED, {
    report_name: "Guild Leave",
    guild_id: e,
    reason: n,
    feedback: s,
    skipped: l
  })
}