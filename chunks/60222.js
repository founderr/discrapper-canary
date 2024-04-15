"use strict";
S.r(s), S.d(s, {
  isGuildEligibleForStageChannels: function() {
    return n
  },
  useGuildEligibleForStageChannels: function() {
    return I
  }
}), S("47120");
var e = S("442837"),
  i = S("430824"),
  _ = S("981631");

function n(E) {
  var s;
  let [S] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default];
  return !!(null === (s = S.getGuild(E)) || void 0 === s ? void 0 : s.hasFeature(_.GuildFeatures.COMMUNITY))
}

function I(E) {
  return (0, e.useStateFromStores)([i.default], () => n(E, [i.default]), [E])
}