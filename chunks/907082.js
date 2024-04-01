"use strict";
n.r(t), n.d(t, {
  useIsEligibleForMemberListShareToChannel: function() {
    return l
  }
});
let a = (0, n("818083").createExperiment)({
    id: "2024-04_memberlist_share_to_channel",
    kind: "user",
    label: "Memberlist Share To Channel",
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
      label: "Share to Channel enabled",
      config: {
        enabled: !0
      }
    }]
  }),
  l = e => {
    let {
      location: t,
      autoTrackExposure: n = !0
    } = e, {
      enabled: l
    } = a.useExperiment({
      location: t
    }, {
      autoTrackExposure: n
    });
    return l
  }