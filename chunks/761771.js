"use strict";
n.r(t), n.d(t, {
  isEligibleForInappropriateConversationWarning: function() {
    return s
  },
  useIsEligibleForInappropriateConversationWarning: function() {
    return i
  }
});
var a = n("862205");
let r = (0, a.createExperiment)({
  kind: "user",
  id: "2024-01_inappropriate_conversation_warning",
  label: "Inappropriate Conversation Warning",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable Inappropriate Conversation Warning",
    config: {
      enabled: !0
    }
  }]
});

function s(e) {
  let {
    location: t,
    autoTrackExposure: n = !1
  } = e, {
    enabled: a
  } = r.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  });
  return a
}

function i(e) {
  let {
    location: t,
    autoTrackExposure: n = !1
  } = e, {
    enabled: a
  } = r.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return a
}