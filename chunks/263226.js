n.d(t, {
    Z: function () {
        return s;
    }
});
var a = n(626135),
    o = n(981631);
function s(e, t, n, s) {
    a.default.track(o.rMx.USER_REPORT_SUBMITTED, {
        report_name: 'Guild Leave',
        guild_id: e,
        reason: t,
        feedback: n,
        skipped: s
    });
}
