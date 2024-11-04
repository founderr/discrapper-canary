n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(192379),
    l = n(442837),
    r = n(661111),
    s = n(706454),
    a = n(306680),
    o = n(626135),
    c = n(802098),
    u = n(193701),
    d = n(702321),
    h = n(981631);
function m(e) {
    let t = (0, u.Z)(e),
        n = (0, l.e7)([s.default], () => s.default.locale),
        m = (0, l.e7)([c.Z], () => c.Z.getChangelog(null != t ? t : '', n), [t, n]),
        p = (0, d.Z)(e),
        f = i.useRef(p ? Date.now() : null),
        g = (0, l.e7)([a.ZP], () => a.ZP.getUnreadCount(e), [e]);
    i.useEffect(() => {
        f.current = Date.now();
    }, [p]),
        i.useEffect(() => {
            p && null != t && r.Z.fetchChangelog(t, n, !0);
        }, [t, n, p]),
        i.useEffect(() => {
            p &&
                null != m &&
                o.default.track(h.rMx.CHANGE_LOG_OPENED, {
                    change_log_id: ''.concat(m.date, ':').concat(m.revision),
                    unread_count: g
                });
        }, [p, m]),
        i.useEffect(() => {
            let e = f.current;
            return () => {
                p &&
                    null != m &&
                    null != e &&
                    (o.default.track(h.rMx.CHANGE_LOG_CLOSED, {
                        seconds_open: Math.round((Date.now() - e) / 1000),
                        change_log_id: ''.concat(m.date, ':').concat(m.revision),
                        unread_count: g
                    }),
                    (f.current = 0));
            };
        }, [p, m]);
}
