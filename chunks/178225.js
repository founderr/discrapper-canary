"use strict";
n.r(t), n.d(t, {
  isGuildEligibleForStageChannels: function() {
    return o
  },
  useGuildEligibleForStageChannels: function() {
    return a
  }
}), n("222007");
var i = n("446674"),
  l = n("305961"),
  r = n("49111");

function o(e) {
  var t;
  let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.default];
  return !!(null === (t = n.getGuild(e)) || void 0 === t ? void 0 : t.hasFeature(r.GuildFeatures.COMMUNITY))
}

function a(e) {
  return (0, i.useStateFromStores)([l.default], () => o(e, [l.default]), [e])
}