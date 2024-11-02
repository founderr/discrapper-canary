n.d(t, {
    Z: function () {
        return a;
    }
});
var o = n(626135),
    r = n(981631);
function a(e, t, n, a) {
    o.default.track(r.rMx.USER_REPORT_SUBMITTED, {
        report_name: 'Guild Deletion',
        guild_id: e,
        reason: t,
        feedback: n,
        skipped: a
    });
}
