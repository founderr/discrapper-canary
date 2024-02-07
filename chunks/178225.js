"use strict";
n.r(e), n.d(e, {
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

function s(t) {
  var e;
  let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default];
  return !!(null === (e = n.getGuild(t)) || void 0 === e ? void 0 : e.hasFeature(l.GuildFeatures.COMMUNITY))
}

function a(t) {
  return (0, i.useStateFromStores)([r.default], () => s(t, [r.default]), [t])
}