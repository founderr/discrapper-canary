"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("446674"),
  r = n("962199"),
  l = n("305961");

function u(e, t) {
  return (0, i.useStateFromStoresObject)([l.default, r.default], () => {
    let n = l.default.getGuild(e),
      i = null != n;
    return null == n && null != t && (n = r.default.getCachedGuildByEventId(t)), {
      isMember: i,
      guild: n
    }
  }, [e, t])
}