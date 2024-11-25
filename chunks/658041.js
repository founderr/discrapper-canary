e.d(t, {
    M: function () {
        return d;
    }
});
var i = e(913527),
    r = e.n(i),
    l = e(709054),
    a = e(765305);
function d(n, t, e, i) {
    let d = r()(),
        c = new Date(n.scheduled_start_time).getTime(),
        u = {
            start: c - a.VF,
            end: c
        };
    if (d.isBetween(u.start, u.end)) {
        if (null != t) {
            let n = r()(t),
                e = n.isBetween(u.start, u.end),
                l = n.isBetween(r()(c).subtract(a.zV, 'days'), c);
            return e || (l && !i) ? void 0 : a.X_.EVENT_STARTING_SOON;
        }
        return a.X_.EVENT_STARTING_SOON;
    }
    let o = l.default.extractTimestamp(n.id),
        _ = Math.min((null != e ? e : o) + a.Fc, c);
    if (d.isBetween(o, _) && null == t && !i) return a.X_.NEW_EVENT;
}
