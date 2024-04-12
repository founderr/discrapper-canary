"use strict";
a.r(t), a.d(t, {
  useIsEligibleForFamilyCenterVCJoin: function() {
    return s
  }
});
let n = (0, a("818083").createExperiment)({
  kind: "user",
  id: "2024-02_family_center_vc_join",
  label: "Family Center VC Join",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable VC Join in Family Center",
    config: {
      enabled: !0
    }
  }]
});

function s(e) {
  let {
    location: t,
    autoTrackExposure: a = !1
  } = e, {
    enabled: s
  } = n.useExperiment({
    location: t
  }, {
    autoTrackExposure: a
  });
  return s
}