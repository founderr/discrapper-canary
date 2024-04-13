"use strict";
n.r(t), n.d(t, {
  isInMentionRaidExperiment: function() {
    return a
  },
  useIsMentionRaidExperimentEnabled: function() {
    return l
  }
});
var i = n("460083");

function a(e) {
  let {
    enabled: t
  } = i.AutomodMentionRaidLimit.getCurrentConfig({
    guildId: e,
    location: "988d4e_3"
  });
  return t
}

function l(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    {
      enabled: n
    } = i.AutomodMentionRaidLimit.useExperiment({
      guildId: e,
      location: "988d4e_4"
    }, {
      autoTrackExposure: t
    });
  return n
}