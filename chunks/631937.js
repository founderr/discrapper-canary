n.d(t, {
  Z: function() {
    return m
  }
});
var l = n(470079),
  i = n(442837),
  s = n(661111),
  a = n(706454),
  r = n(306680),
  o = n(626135),
  c = n(802098),
  u = n(193701),
  d = n(702321),
  h = n(981631);

function m(e) {
  let t = (0, u.Z)(e),
    n = (0, i.e7)([a.default], () => a.default.locale),
    m = (0, i.e7)([c.Z], () => c.Z.getChangelog(null != t ? t : "", n), [t, n]),
    E = (0, d.Z)(e),
    p = l.useRef(E ? Date.now() : null),
    g = (0, i.e7)([r.ZP], () => r.ZP.getUnreadCount(e), [e]);
  l.useEffect(() => {
    p.current = Date.now()
  }, [E]), l.useEffect(() => {
    E && null != t && s.Z.fetchChangelog(t, n, !0)
  }, [t, n, E]), l.useEffect(() => {
    E && null != m && o.default.track(h.rMx.CHANGE_LOG_OPENED, {
      change_log_id: "".concat(m.date, ":").concat(m.revision),
      unread_count: g
    })
  }, [E, m]), l.useEffect(() => {
    let e = p.current;
    return () => {
      E && null != m && null != e && (o.default.track(h.rMx.CHANGE_LOG_CLOSED, {
        seconds_open: Math.round((Date.now() - e) / 1e3),
        change_log_id: "".concat(m.date, ":").concat(m.revision),
        unread_count: g
      }), p.current = 0)
    }
  }, [E, m])
}