n.d(t, {
    Z: function () {
        return a;
    }
});
var l = n(626135),
    o = n(981631);
function a(e) {
    let { problem: t, feedback: n, reportType: a, reportId: r = null, rating: i = null, dontShowAgain: s } = e;
    l.default.track(o.rMx.IAR_FEEDBACK_SUBMITTED, {
        reason: t,
        report_type: a,
        report_id: r,
        rating: i,
        feedback: n,
        dont_show_again: s
    });
}
