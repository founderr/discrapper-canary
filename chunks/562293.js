n.d(t, {
    H: function () {
        return o;
    },
    Z: function () {
        return s;
    }
});
var r = n(913527),
    i = n.n(r),
    a = n(689938);
function o(e) {
    let t = i()();
    if (e <= t) return;
    let n = e.diff(t, 'days');
    if (n > 1) return a.Z.Messages.POLL_EXPIRY_DAYS_REMAINING.format({ days: n });
    let r = e.diff(t, 'hours');
    if (r > 1) return a.Z.Messages.POLL_EXPIRY_HOURS_REMAINING.format({ hours: r });
    let o = e.diff(t, 'minutes');
    return a.Z.Messages.POLL_EXPIRY_MINUTES_REMAINING.format({ minutes: o });
}
function s(e) {
    if (null != e) return o(e);
}
