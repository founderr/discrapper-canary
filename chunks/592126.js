"use strict";
l.r(t), l.d(t, {
  default: function() {
    return r
  }
});
var n = l("442837"),
  i = l("241155"),
  a = l("430824");

function r(e, t) {
  return (0, n.useStateFromStoresObject)([a.default, i.default], () => {
    let l = a.default.getGuild(e),
      n = null != l;
    return null == l && null != t && (l = i.default.getCachedGuildByEventId(t)), {
      isMember: n,
      guild: l
    }
  }, [e, t])
}