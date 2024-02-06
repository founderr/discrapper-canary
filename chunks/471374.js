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
    shouldSubscribeToGuildMemberUpdates: !1,
    showGamingVoiceActivity: !1
  },
  treatments: [{
    id: 0,
    label: "Control",
    config: {
      shouldSubscribeToGuildMemberUpdates: !0,
      showGamingVoiceActivity: !1
    }
  }, {
    id: 1,
    label: "Badge the server icon & show gamers in the tooltip if gamers are in VC",
    config: {
      shouldSubscribeToGuildMemberUpdates: !0,
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