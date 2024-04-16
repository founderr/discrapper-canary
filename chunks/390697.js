"use strict";
a.r(t), a.d(t, {
  useIsClearIncomingFriendRequestsEnabled: function() {
    return s
  }
});
let n = (0, a("818083").createExperiment)({
  kind: "user",
  id: "2023-05_clear_pending_incoming_friend_requests",
  label: "Enable ability to clear incoming friend requests",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: !0
    }
  }]
});

function s() {
  return n.useExperiment({
    location: "ca2288_1"
  }, {
    autoTrackExposure: !0
  }).enabled
}