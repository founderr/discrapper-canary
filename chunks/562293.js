n.d(t, {
    H: function () {
        return a;
    },
    Z: function () {
        return o;
    }
});
var i = n(913527),
    r = n.n(i),
    l = n(388032);
function a(e) {
    let t = r()();
    if (e <= t) return;
    let n = e.diff(t, 'days');
    if (n > 1) return l.intl.formatToPlainString(l.t.dex68f, { days: n });
    let i = e.diff(t, 'hours');
    if (i > 1) return l.intl.formatToPlainString(l.t.BWqf0d, { hours: i });
    let a = e.diff(t, 'minutes');
    return l.intl.formatToPlainString(l.t['3SLXAw'], { minutes: a });
}
function o(e) {
    if (null != e) return a(e);
}
