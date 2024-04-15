"use strict";
n.r(e), n.d(e, {
  CustomNotificationSoundExperiment: function() {
    return i
  }
});
let i = (0, n("818083").createExperiment)({
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