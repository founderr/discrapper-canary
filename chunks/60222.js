"use strict";
i.r(s), i.d(s, {
  isGuildEligibleForStageChannels: function() {
    return r
  },
  useGuildEligibleForStageChannels: function() {
    return S
  }
}), i("47120");
var t = i("442837"),
  n = i("430824"),
  E = i("981631");

function r(e) {
  var s;
  let [i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [n.default];
  return !!(null === (s = i.getGuild(e)) || void 0 === s ? void 0 : s.hasFeature(E.GuildFeatures.COMMUNITY))
}

function S(e) {
  return (0, t.useStateFromStores)([n.default], () => r(e, [n.default]), [e])
}