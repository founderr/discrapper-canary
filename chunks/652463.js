a.d(t, {
    Z: function () {
        return s;
    }
});
var n = a(626135),
    o = a(981631);
function s(e, t, a, s) {
    n.default.track(o.rMx.USER_REPORT_SUBMITTED, {
        report_name: 'Guild Deletion',
        guild_id: e,
        reason: t,
        feedback: a,
        skipped: s
    });
}
