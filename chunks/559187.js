n.d(t, {
    Z: function () {
        return s;
    }
});
var a = n(626135),
    o = n(981631);
function s(e) {
    let { problem: t, feedback: n, reportType: s, reportId: l = null, rating: r = null, dontShowAgain: i } = e;
    a.default.track(o.rMx.IAR_FEEDBACK_SUBMITTED, {
        reason: t,
        report_type: s,
        report_id: l,
        rating: r,
        feedback: n,
        dont_show_again: i
    });
}
