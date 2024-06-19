n.d(t, {
  M: function() {
    return s
  },
  i: function() {
    return i
  }
});
let l = (0, n(818083).B)({
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

function i() {
  let {
    enabled: e
  } = l.getCurrentConfig({
    location: "isRTCVoiceStateDesyncExperimentEnabled"
  });
  return e
}

function s() {
  let {
    enabled: e
  } = l.useExperiment({
    location: "useIsRTCVoiceStateDesyncExperimentEnabled"
  });
  return e
}