"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var l = n("446674"),
  i = n("305961"),
  u = n("49111");

function a(e) {
  return (0, l.useStateFromStores)([i.default], () => {
    var t;
    if (null == e) return !1;
    let n = i.default.getGuild(e);
    return null !== (t = null == n ? void 0 : n.hasFeature(u.GuildFeatures.HUB)) && void 0 !== t && t
  }, [e])
}