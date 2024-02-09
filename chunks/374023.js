"use strict";
E.r(_), E.d(_, {
  getIsEligibleForQuests: function() {
    return r
  },
  useIsEligibleForQuests: function() {
    return i
  }
});
var t = E("619935"),
  o = E("862205");
let n = (0, o.createExperiment)({
    id: "2023-12_quests",
    kind: "user",
    label: "Quests",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 0,
      label: "Control",
      config: {
        enabled: !1
      }
    }, {
      id: 1,
      label: "Quests enabled",
      config: {
        enabled: !0
      }
    }]
  }),
  r = e => {
    let {
      location: _,
      autoTrackExposure: E
    } = e, o = n.getCurrentConfig({
      location: _
    }, {
      autoTrackExposure: E
    }), r = t.default.getCurrentConfig({
      location: _
    }, {
      autoTrackExposure: E
    });
    return o.enabled && !r.paymentsBlocked
  },
  i = e => {
    let {
      location: _,
      autoTrackExposure: E
    } = e, o = n.useExperiment({
      location: _
    }, {
      autoTrackExposure: E
    }), r = t.default.useExperiment({
      location: _
    }, {
      autoTrackExposure: E
    });
    return o.enabled && !r.paymentsBlocked
  }