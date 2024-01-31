"use strict";
i.r(t), i.d(t, {
  useIsGamingVoiceActivityEnabled: function() {
    return s
  },
  isGamingVoiceActivityEnabled: function() {
    return a
  },
  default: function() {
    return r
  }
});
var n = i("862205");
let l = (0, n.createExperiment)({
  kind: "user",
  id: "2024-01_guild_gaming_voice_activity",
  label: "Guild Gaming Voice Activity",
  defaultConfig: {
    showGamingVoiceActivity: !1
  },
  treatments: [{
    id: 1,
    label: "Badge the server icon & show gamers in the tooltip if gamers are in VC",
    config: {
      showGamingVoiceActivity: !0
    }
  }]
});

function s(e, t) {
  let {
    showGamingVoiceActivity: i
  } = l.useExperiment({
    location: e
  }, {
    autoTrackExposure: t
  });
  return i
}

function a(e, t) {
  let {
    showGamingVoiceActivity: i
  } = l.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: t
  });
  return i
}
var r = l