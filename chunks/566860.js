"use strict";
n.r(t), n.d(t, {
  AppLauncherRecommendationsExperiment: function() {
    return i
  }
});
let i = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2024-04_app_launcher_recommendation",
  label: "App Recommendations in App Launcher",
  defaultConfig: {
    enabled: !1,
    recentsDropdownEnabled: !1,
    hideActivities: !1
  },
  treatments: [{
    id: 1,
    label: "Enable the app recommendations in the App Launcher",
    config: {
      enabled: !0,
      recentsDropdownEnabled: !1,
      hideActivities: !1
    }
  }, {
    id: 2,
    label: "Enable the app recommendations in the App Launcher, with Recents dropdown",
    config: {
      enabled: !0,
      recentsDropdownEnabled: !0,
      hideActivities: !1
    }
  }, {
    id: 3,
    label: "No app recommendations in the App Launcher and hide activities.",
    config: {
      enabled: !1,
      recentsDropdownEnabled: !1,
      hideActivities: !0
    }
  }]
})