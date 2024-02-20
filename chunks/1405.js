"use strict";
n.r(t), n.d(t, {
  isEligibleForContentInventoryV1: function() {
    return l
  }
});
var i = n("862205");
let a = (0, i.createExperiment)({
  kind: "user",
  id: "2024-02_v1_content_inventory_feed",
  label: "V1 Feed of the content inventory",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Show feed",
    config: {
      enabled: !0
    }
  }]
});

function l(e) {
  let {
    enabled: t
  } = a.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: !0
  });
  return t
}