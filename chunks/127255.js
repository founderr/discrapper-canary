"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
}), l("789020"), l("47120"), l("653041");
var i = l("470079"),
  n = l("442837"),
  a = l("630388"),
  u = l("115130"),
  d = l("844797"),
  r = l("694312"),
  o = l("405625"),
  s = l("664097"),
  c = l("981631");

function f(e) {
  let {
    guildId: t,
    enableFilter: l = !1,
    channel: f
  } = e, {
    filter: p
  } = (0, n.useStateFromStoresObject)([u.default], () => ({
    filter: u.default.getFilter()
  })), v = (0, r.useActivityShelfData)(t), E = (0, o.default)(v), A = (0, s.useDeveloperActivityShelfItems)(), m = (0, d.useIsActivityInTextChannel)(f);
  return i.useMemo(() => {
    function e(e) {
      return !!(!l || "" === p || e.application.name.toLowerCase().includes(p.toLowerCase())) || !1
    }

    function t(e) {
      return !m || (0, a.hasFlag)(e.application.flags, c.ApplicationFlags.EMBEDDED_RELEASED)
    }
    let i = [...A].filter(e).filter(t),
      n = new Set(i.map(e => e.application.id));
    for (let l of E) !n.has(l.application.id) && e(l) && t(l) && i.push(l);
    return i
  }, [A, l, p, E, m])
}