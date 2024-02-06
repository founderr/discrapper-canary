"use strict";
i.r(t), i.d(t, {
  useIsGamingVoiceActivityEnabled: function() {
    return l
  },
  isGamingVoiceActivityEnabled: function() {
    return r
  },
  default: function() {
    return a
  }
});
var n = i("862205");
let s = (0, n.createExperiment)({
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

function l(e, t) {
  let {
    showGamingVoiceActivity: i
  } = s.useExperiment({
    location: e
  }, {
    autoTrackExposure: t
  });
  return i
}

function r(e, t) {
  let {
    showGamingVoiceActivity: i
  } = s.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: t
  });
  return i
}
var a = s