"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var u = n("442837"),
  l = n("430824"),
  i = n("981631");

function r(e) {
  return (0, u.useStateFromStores)([l.default], () => {
    var t;
    if (null == e) return !1;
    let n = l.default.getGuild(e);
    return null !== (t = null == n ? void 0 : n.hasFeature(i.GuildFeatures.HUB)) && void 0 !== t && t
  }, [e])
}