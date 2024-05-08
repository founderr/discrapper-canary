"use strict";
l.r(t), l.d(t, {
  default: function() {
    return r
  }
});
var n = l("442837"),
  i = l("430824"),
  a = l("981631");

function r(e) {
  return (0, n.useStateFromStores)([i.default], () => {
    var t;
    if (null == e) return !1;
    let l = i.default.getGuild(e);
    return null !== (t = null == l ? void 0 : l.hasFeature(a.GuildFeatures.HUB)) && void 0 !== t && t
  }, [e])
}