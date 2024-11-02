e.d(n, {
    M: function () {
        return a;
    }
});
var i = e(913527),
    l = e.n(i),
    r = e(709054),
    d = e(765305);
function a(t, n, e, i) {
    let a = l()(),
        u = new Date(t.scheduled_start_time).getTime(),
        s = {
            start: u - d.VF,
            end: u
        };
    if (a.isBetween(s.start, s.end)) {
        if (null != n) {
            let t = l()(n),
                e = t.isBetween(s.start, s.end),
                r = t.isBetween(l()(u).subtract(d.zV, 'days'), u);
            return e || (r && !i) ? void 0 : d.X_.EVENT_STARTING_SOON;
        }
        return d.X_.EVENT_STARTING_SOON;
    }
    let o = r.default.extractTimestamp(t.id),
        _ = Math.min((null != e ? e : o) + d.Fc, u);
    if (a.isBetween(o, _) && null == n && !i) return d.X_.NEW_EVENT;
}
