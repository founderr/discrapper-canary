n.d(t, {
    Z: function () {
        return o;
    }
});
var a = n(626135),
    r = n(981631);
function o(e) {
    let { problem: t, feedback: n, reportType: o, reportId: l = null, rating: s = null, dontShowAgain: i } = e;
    a.default.track(r.rMx.IAR_FEEDBACK_SUBMITTED, {
        reason: t,
        report_type: o,
        report_id: l,
        rating: s,
        feedback: n,
        dont_show_again: i
    });
}
