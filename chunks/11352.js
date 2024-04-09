"use strict";
n.r(t), n.d(t, {
  CustomNotificationSoundExperiment: function() {
    return a
  }
});
let a = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2024-04_custom_notification_sound_web",
  label: "Custom Notification Sound for Desktop",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable custom notificstion sounds",
    config: {
      enabled: !0
    }
  }]
})