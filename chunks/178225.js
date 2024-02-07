"use strict";
n.r(t), n.d(t, {
  isGuildEligibleForStageChannels: function() {
    return a
  },
  useGuildEligibleForStageChannels: function() {
    return s
  }
}), n("222007");
var i = n("446674"),
  r = n("305961"),
  l = n("49111");

function a(e) {
  var t;
  let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default];
  return !!(null === (t = n.getGuild(e)) || void 0 === t ? void 0 : t.hasFeature(l.GuildFeatures.COMMUNITY))
}

function s(e) {
  return (0, i.useStateFromStores)([r.default], () => a(e, [r.default]), [e])
}