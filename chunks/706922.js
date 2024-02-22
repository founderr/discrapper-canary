"use strict";
s.r(t), s.d(t, {
  AllPerksExperiment: function() {
    return i
  },
  default: function() {
    return n
  }
});
var a = s("862205");
let i = (0, a.createExperiment)({
  kind: "user",
  id: "2024-01_all_perks",
  label: "All Perks",
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
var n = function() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return i.useExperiment({
    location: "experiment_hook"
  }, {
    autoTrackExposure: e,
    disable: t
  })
}