"use strict";
n.r(t), n.d(t, {
  PaxVcTileActivitiesExperiment: function() {
    return a
  }
});
var l = n("862205");
let a = (0, l.createExperiment)({
  kind: "user",
  id: "2023-03_pax_vc_tile_activities",
  label: "PAX VC Tile Activities",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable PAX VC Tile Activities",
    config: {
      enabled: !0
    }
  }]
})