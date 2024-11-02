e.d(n, {
    Z: function () {
        return m;
    }
}),
    e(47120);
var l = e(192379),
    i = e(392711),
    o = e.n(i),
    s = e(442837),
    r = e(699682),
    u = e(70956),
    c = e(709054),
    a = e(897285),
    d = e(924301),
    h = e(854698);
function m(t, n, e) {
    let i = (0, s.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(t)),
        m = (0, r.Z)(e),
        [C, g] = l.useState(null != e && null != i ? (0, h.PJ)(4, (0, h.Ho)(e), new Date(i.scheduled_start_time)) : []);
    l.useEffect(() => {
        if (null == m || null == e || null == i || o().isEqual(m, e)) return;
        let t = (0, h.Ho)(e);
        g((0, h.PJ)(C.length, t, new Date(i.scheduled_start_time)));
    }, [e, C.length, i, m]),
        l.useEffect(() => {
            if (null == n) return;
            let e = C.map((t) => c.default.fromTimestamp(Math.floor(t.getTime() / u.Z.Millis.SECOND) * u.Z.Millis.SECOND));
            a.Z.getGuildEventUserCounts(n, t, e);
        }, [t, n, C]);
    let x = l.useMemo(() => {
        if (null == e || 0 === C.length || (null == i ? void 0 : i.scheduled_start_time) == null) return !1;
        let t = new Date();
        t.setFullYear(t.getFullYear() + h.hn);
        let n = C[C.length - 1],
            l = (0, h.Ho)(e).after(n);
        return null != l && l <= t;
    }, [e, C, null == i ? void 0 : i.scheduled_start_time]);
    return {
        recurrenceStartTimes: C,
        canViewMoreRecurrences: x,
        updateRecurrenceStartTimes: () => {
            if (null == e || null == i) return;
            let t = (0, h.Ho)(e),
                n = C[C.length - 1];
            g([...C, ...(0, h.PJ)(4, t, n, !0)]);
        }
    };
}
