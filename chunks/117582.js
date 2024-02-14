"use strict";
n.r(t), n.d(t, {
  VcTileActivityExperimentType: function() {
    return a
  },
  VcTileActivitiesEntryPointExperiment: function() {
    return i
  }
});
var l, a, s = n("862205");
(l = a || (a = {})).CONTROL = "CONTROL", l.ONE_OR_TWO_USERS = "ONE_OR_TWO_USERS", l.ANY_NUMBER_OF_USERS = "ANY_NUMBER_OF_USERS";
let i = (0, s.createExperiment)({
  kind: "user",
  id: "2023-01_vc_tile_activities_entry_point",
  label: "VC Tile Activities Entry Point",
  defaultConfig: {
    vcTileActivityExperimentType: "CONTROL"
  },
  treatments: [{
    id: 1,
    label: "Enable one or two users VC Tile Activities Entry Point",
    config: {
      vcTileActivityExperimentType: "ONE_OR_TWO_USERS"
    }
  }, {
    id: 2,
    label: "Enable any number of users VC Tile Activities Entry Point",
    config: {
      vcTileActivityExperimentType: "ANY_NUMBER_OF_USERS"
    }
  }]
})