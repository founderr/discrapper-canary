"use strict";
l.r(t), l.d(t, {
  default: function() {
    return s
  }
}), l("724458"), l("47120"), l("653041");
var n = l("470079"),
  i = l("442837"),
  a = l("924301"),
  r = l("765305");

function s(e, t) {
  let l = (0, i.useStateFromStoresArray)([a.default], () => Object.values(a.default.getUsersForGuildEvent(e, null)), [e]),
    s = (0, i.useStateFromStoresArray)([a.default], () => Object.values(a.default.getUsersForGuildEvent(e, t)), [e, t]);
  return (0, n.useMemo)(() => {
    let e = s.reduce((e, t) => (e[t.user_id] = t, e), {}),
      t = l.filter(t => {
        let l = e[t.user_id];
        return null == l || l.response === r.GuildScheduledEventUserResponses.INTERESTED
      }),
      n = s.filter(e => e.response === r.GuildScheduledEventUserResponses.INTERESTED),
      i = new Set,
      a = [],
      u = e => {
        !i.has(e.user_id) && (a.push(e), i.add(e.user_id))
      };
    return t.forEach(u), n.forEach(u), a
  }, [l, s])
}