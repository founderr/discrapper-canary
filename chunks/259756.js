"use strict";
s.r(t), s.d(t, {
  useIsEligibleForFamilyCenterVCJoin: function() {
    return n
  }
});
let a = (0, s("818083").createExperiment)({
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

function n(e) {
  let {
    location: t,
    autoTrackExposure: s = !1
  } = e, {
    enabled: n
  } = a.useExperiment({
    location: t
  }, {
    autoTrackExposure: s
  });
  return n
}