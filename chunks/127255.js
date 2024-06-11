"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("789020"), n("47120"), n("653041");
var i = n("470079"),
  r = n("442837"),
  s = n("630388"),
  a = n("115130"),
  o = n("844797"),
  l = n("694312"),
  u = n("405625"),
  d = n("664097"),
  _ = n("981631");

function c(e) {
  let {
    guildId: t,
    enableFilter: n = !1,
    channel: c
  } = e, {
    filter: E
  } = (0, r.useStateFromStoresObject)([a.default], () => ({
    filter: a.default.getFilter()
  })), I = (0, l.useActivityShelfData)(t), T = (0, u.default)(I), f = (0, d.useDeveloperActivityShelfItems)(), S = (0, o.useIsActivityInTextChannel)(c);
  return i.useMemo(() => {
    function e(e) {
      return !!(!n || "" === E || e.application.name.toLowerCase().includes(E.toLowerCase())) || !1
    }

    function t(e) {
      return !S || (0, s.hasFlag)(e.application.flags, _.ApplicationFlags.EMBEDDED_RELEASED)
    }
    let i = [...f].filter(e).filter(t),
      r = new Set(i.map(e => e.application.id));
    for (let n of T) !r.has(n.application.id) && e(n) && t(n) && i.push(n);
    return i
  }, [f, n, E, T, S])
}