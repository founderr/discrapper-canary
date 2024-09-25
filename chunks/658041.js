t.d(n, {
    M: function () {
        return a;
    }
});
var l = t(913527),
    i = t.n(l),
    u = t(709054),
    r = t(765305);
function a(e, n, t, l) {
    let a = i()(),
        d = new Date(e.scheduled_start_time).getTime(),
        o = {
            start: d - r.VF,
            end: d
        };
    if (a.isBetween(o.start, o.end)) {
        if (null != n) {
            let e = i()(n),
                t = e.isBetween(o.start, o.end),
                u = e.isBetween(i()(d).subtract(r.zV, 'days'), d);
            return t || (u && !l) ? void 0 : r.X_.EVENT_STARTING_SOON;
        }
        return r.X_.EVENT_STARTING_SOON;
    }
    let s = u.default.extractTimestamp(e.id),
        c = Math.min((null != t ? t : s) + r.Fc, d);
    if (a.isBetween(s, c) && null == n && !l) return r.X_.NEW_EVENT;
}
