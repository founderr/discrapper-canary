"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("808653"), n("222007"), n("424973");
var i = n("884691"),
  r = n("446674"),
  l = n("398604"),
  s = n("745049");

function a(e, t) {
  let n = (0, r.useStateFromStoresArray)([l.default], () => Object.values(l.default.getUsersForGuildEvent(e, null)), [e]),
    a = (0, r.useStateFromStoresArray)([l.default], () => Object.values(l.default.getUsersForGuildEvent(e, t)), [e, t]),
    u = (0, i.useMemo)(() => {
      let e = a.reduce((e, t) => (e[t.user_id] = t, e), {}),
        t = n.filter(t => {
          let n = e[t.user_id];
          return null == n || n.response === s.GuildScheduledEventUserResponses.INTERESTED
        }),
        i = a.filter(e => e.response === s.GuildScheduledEventUserResponses.INTERESTED),
        r = new Set,
        l = [],
        u = e => {
          !r.has(e.user_id) && (l.push(e), r.add(e.user_id))
        };
      return t.forEach(u), i.forEach(u), l
    }, [n, a]);
  return u
}