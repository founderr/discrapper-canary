"use strict";
n.r(t), n.d(t, {
  AppLauncherDesktopExperiment: function() {
    return r
  },
  DesktopAppLauncherInActivitiesShelfExperiment: function() {
    return s
  }
});
var i = n("818083");
let r = (0, i.createExperiment)({
    kind: "user",
    id: "2023-11_app_launcher_desktop",
    label: "App Launcher - Desktop",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enable the app launcher feature on desktop",
      config: {
        enabled: !0
      }
    }]
  }),
  s = (0, i.createExperiment)({
    kind: "user",
    id: "2024-06_desktop_app_launcher_in_activities_shelf",
    label: "Desktop App Launcher In Activities Shelf",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enable the desktop app launcher in activities shelf",
      config: {
        enabled: !0
      }
    }]
  })