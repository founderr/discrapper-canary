"use strict";
s.r(t), s.d(t, {
  useForceMigration: function() {
    return l
  }
});
var a = s("862205");
let n = (0, a.createExperiment)({
    kind: "user",
    id: "2024-01_uu_forced_migration",
    label: "Unique Username Forced Migration UI",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enable Forced Migration UI",
      config: {
        enabled: !0
      }
    }]
  }),
  l = () => {
    let {
      enabled: e
    } = n.useExperiment({
      location: "force_migration"
    }, {
      autoTrackExposure: !1
    });
    return e
  }