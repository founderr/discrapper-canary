"use strict";
n.r(e), n.d(e, {
  isGuildEligibleForStageChannels: function() {
    return a
  },
  useGuildEligibleForStageChannels: function() {
    return l
  }
}), n("47120");
var i = n("442837"),
  r = n("430824"),
  o = n("981631");

function a(t) {
  var e;
  let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default];
  return !!(null === (e = n.getGuild(t)) || void 0 === e ? void 0 : e.hasFeature(o.GuildFeatures.COMMUNITY))
}

function l(t) {
  return (0, i.useStateFromStores)([r.default], () => a(t, [r.default]), [t])
}