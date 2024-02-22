"use strict";
n.r(t), n.d(t, {
  isGuildEligibleForStageChannels: function() {
    return s
  },
  useGuildEligibleForStageChannels: function() {
    return a
  }
}), n("222007");
var i = n("446674"),
  r = n("305961"),
  l = n("49111");

function s(e) {
  var t;
  let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default];
  return !!(null === (t = n.getGuild(e)) || void 0 === t ? void 0 : t.hasFeature(l.GuildFeatures.COMMUNITY))
}

function a(e) {
  return (0, i.useStateFromStores)([r.default], () => s(e, [r.default]), [e])
}