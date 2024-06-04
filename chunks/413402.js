"use strict";
n.r(t), n.d(t, {
  isRTCVoiceStateDesyncExperimentEnabled: function() {
    return l
  }
});
let a = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2024-06_rtc_voice_state_sync_experiment",
  label: "RTC and Voice State Desync Fixes",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Desync fixes enabled",
    config: {
      enabled: !0
    }
  }]
});

function l() {
  let {
    enabled: e
  } = a.getCurrentConfig({
    location: "is_enabled"
  });
  return e
}