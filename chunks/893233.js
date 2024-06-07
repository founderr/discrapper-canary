"use strict";
n.r(t), n.d(t, {
  MessageSendFailureExperiment: function() {
    return i
  }
});
let i = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2024-06_message_send_failure",
  label: "Message Send Failure Experiment",
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
})