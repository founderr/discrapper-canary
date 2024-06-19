n.d(t, {
  M: function() {
    return u
  }
});
var l = n(913527),
  r = n.n(l),
  i = n(709054),
  s = n(765305);

function u(e, t, n, l) {
  let u = r()(),
    a = new Date(e.scheduled_start_time).getTime(),
    E = {
      start: a - s.VF,
      end: a
    };
  if (u.isBetween(E.start, E.end)) {
    if (null != t) {
      let e = r()(t),
        n = e.isBetween(E.start, E.end),
        i = e.isBetween(r()(a).subtract(s.zV, "days"), a);
      return n || i && !l ? void 0 : s.X_.EVENT_STARTING_SOON
    }
    return s.X_.EVENT_STARTING_SOON
  }
  let d = i.default.extractTimestamp(e.id),
    o = Math.min((null != n ? n : d) + s.Fc, a);
  if (u.isBetween(d, o) && null == t && !l) return s.X_.NEW_EVENT
}