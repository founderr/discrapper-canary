n.d(t, {
    Z: function () {
        return a;
    }
});
var o = n(626135),
    l = n(981631);
function a(e, t, n, a) {
    o.default.track(l.rMx.USER_REPORT_SUBMITTED, {
        report_name: 'Guild Leave',
        guild_id: e,
        reason: t,
        feedback: n,
        skipped: a
    });
}
