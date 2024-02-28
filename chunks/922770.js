"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("446674"),
  u = n("305961"),
  i = n("49111");

function d(e) {
  return (0, l.useStateFromStores)([u.default], () => {
    var t;
    if (null == e) return !1;
    let n = u.default.getGuild(e);
    return null !== (t = null == n ? void 0 : n.hasFeature(i.GuildFeatures.HUB)) && void 0 !== t && t
  }, [e])
}