"use strict";
s.r(t), s.d(t, {
  useIsEligibleForFamilyCenterVCJoin: function() {
    return a
  }
});
let n = (0, s("818083").createExperiment)({
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

function a(e) {
  let {
    location: t,
    autoTrackExposure: s = !1
  } = e, {
    enabled: a
  } = n.useExperiment({
    location: t
  }, {
    autoTrackExposure: s
  });
  return a
}