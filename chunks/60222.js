"use strict";
s.r(S), s.d(S, {
  isGuildEligibleForStageChannels: function() {
    return n
  },
  useGuildEligibleForStageChannels: function() {
    return I
  }
}), s("47120");
var e = s("442837"),
  i = s("430824"),
  _ = s("981631");

function n(E) {
  var S;
  let [s] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default];
  return !!(null === (S = s.getGuild(E)) || void 0 === S ? void 0 : S.hasFeature(_.GuildFeatures.COMMUNITY))
}

function I(E) {
  return (0, e.useStateFromStores)([i.default], () => n(E, [i.default]), [E])
}