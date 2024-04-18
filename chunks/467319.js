"use strict";
n.r(t), n.d(t, {
  isInMentionRaidExperiment: function() {
    return i
  },
  useIsMentionRaidExperimentEnabled: function() {
    return d
  }
});
var a = n("460083");

function i(e) {
  let {
    enabled: t
  } = a.AutomodMentionRaidLimit.getCurrentConfig({
    guildId: e,
    location: "988d4e_3"
  });
  return t
}

function d(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    {
      enabled: n
    } = a.AutomodMentionRaidLimit.useExperiment({
      guildId: e,
      location: "988d4e_4"
    }, {
      autoTrackExposure: t
    });
  return n
}