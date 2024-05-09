"use strict";
n.r(t), n.d(t, {
  isGuildEligibleForStageChannels: function() {
    return u
  },
  useGuildEligibleForStageChannels: function() {
    return a
  }
}), n("47120");
var i = n("442837"),
  l = n("430824"),
  r = n("981631");

function u(e) {
  var t;
  let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.default];
  return !!(null === (t = n.getGuild(e)) || void 0 === t ? void 0 : t.hasFeature(r.GuildFeatures.COMMUNITY))
}

function a(e) {
  return (0, i.useStateFromStores)([l.default], () => u(e, [l.default]), [e])
}