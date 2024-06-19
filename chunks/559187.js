t.d(n, {
  Z: function() {
    return l
  }
});
var a = t(626135),
  s = t(981631);

function l(e) {
  let {
    problem: n,
    feedback: t,
    reportType: l,
    reportId: r = null,
    rating: o = null,
    dontShowAgain: i
  } = e;
  a.default.track(s.rMx.IAR_FEEDBACK_SUBMITTED, {
    reason: n,
    report_type: l,
    report_id: r,
    rating: o,
    feedback: t,
    dont_show_again: i
  })
}