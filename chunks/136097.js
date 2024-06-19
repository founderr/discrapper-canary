t.d(s, {
  h: function() {
    return E
  },
  p: function() {
    return d
  }
}), t(47120);
var n = t(470079),
  i = t(913527),
  a = t.n(i),
  l = t(442837),
  r = t(314897),
  o = t(673096),
  c = t(689938);

function E() {
  let e = (0, l.cj)([o.Z], () => o.Z.getSessions());
  return n.useMemo(() => {
    let s = [...e],
      t = null,
      n = r.default.getAuthSessionIdHash();
    if (null != n) {
      let e = s.findIndex(e => e.id_hash === n);
      e >= 0 && (t = s.splice(e, 1)[0])
    }
    return s.sort((e, s) => s.approx_last_used_time.valueOf() - e.approx_last_used_time.valueOf()), {
      currentSession: t,
      otherSessions: s
    }
  }, [e])
}

function d(e) {
  return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? c.Z.Messages.AUTH_SESSIONS_ACTIVE_RECENTLY : a()(e).fromNow()
}