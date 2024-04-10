"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var l = n("442837"),
  a = n("430824"),
  s = n("981631");

function i(e) {
  return (0, l.useStateFromStores)([a.default], () => {
    var t;
    if (null == e) return !1;
    let n = a.default.getGuild(e);
    return null !== (t = null == n ? void 0 : n.hasFeature(s.GuildFeatures.HUB)) && void 0 !== t && t
  }, [e])
}