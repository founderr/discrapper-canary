"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("446674"),
  a = n("962199"),
  i = n("305961");

function u(e, t) {
  return (0, l.useStateFromStoresObject)([i.default, a.default], () => {
    let n = i.default.getGuild(e),
      l = null != n;
    return null == n && null != t && (n = a.default.getCachedGuildByEventId(t)), {
      isMember: l,
      guild: n
    }
  }, [e, t])
}