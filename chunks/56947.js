"use strict";
n.r(t), n.d(t, {
  ClipsExperiment: function() {
    return u
  },
  areClipsEnabled: function() {
    return d
  },
  useEnableClips: function() {
    return f
  },
  useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock: function() {
    return E
  },
  useShouldSeeClipsPremiumEarlyAccessAnnouncementCoachmark: function() {
    return p
  },
  isUserPremiumTypeForClipsEarlyAccess: function() {
    return h
  }
});
var i = n("862205"),
  r = n("584687"),
  s = n("42887"),
  a = n("719923"),
  o = n("18346"),
  l = n("646718");
let u = (0, i.createExperiment)({
    kind: "user",
    id: "2022-11_clips_experiment",
    label: "Clips Experiment",
    defaultConfig: {
      enableClips: !1,
      ignorePlatformRestriction: !1,
      showClipsHeaderEntrypoint: !1
    },
    treatments: [{
      id: 1,
      label: "Clips without upsells",
      config: {
        enableClips: !0,
        ignorePlatformRestriction: !1,
        showClipsHeaderEntrypoint: !0
      }
    }, {
      id: 2,
      label: "Clips with upsells",
      config: {
        enableClips: !0,
        ignorePlatformRestriction: !1,
        showClipsHeaderEntrypoint: !0
      }
    }, {
      id: 99,
      label: "Clips 4 da Developerz",
      config: {
        enableClips: !0,
        ignorePlatformRestriction: !0,
        showClipsHeaderEntrypoint: !0
      }
    }]
  }),
  c = (0, i.createExperiment)({
    kind: "user",
    id: "2023-09_clips_nitro_early_access",
    label: "Clips (Nitro EA)",
    defaultConfig: {
      enableClips: !1,
      enablePremiumEarlyAccessAnnouncementCoachmark: !1,
      enablePremiumEarlyAccessGoLiveRoadblock: !1
    },
    treatments: [{
      id: 1,
      label: "Clips Nitro EA Upsells Visible",
      config: {
        enableClips: !1,
        enablePremiumEarlyAccessAnnouncementCoachmark: !0,
        enablePremiumEarlyAccessGoLiveRoadblock: !0
      }
    }, {
      id: 2,
      label: "Clips Enabled (Nitro)",
      config: {
        enableClips: !0,
        enablePremiumEarlyAccessAnnouncementCoachmark: !0,
        enablePremiumEarlyAccessGoLiveRoadblock: !1
      }
    }]
  });

function d() {
  if (!(0, o.default)(s.default)) return !1;
  let {
    enableClips: e
  } = c.getCurrentConfig({
    location: "areClipsEnabled"
  }, {
    autoTrackExposure: !1
  }), {
    enableClips: t
  } = u.getCurrentConfig({
    location: "areClipsEnabled"
  }, {
    autoTrackExposure: !1
  }), {
    enableDecoupledGameClipping: n
  } = r.default.getCurrentConfig({
    location: "areClipsEnabled"
  }, {
    autoTrackExposure: !1
  });
  return e || t || n
}

function f() {
  let e = (0, o.default)(s.default),
    {
      enableClips: t
    } = c.useExperiment({
      location: "useEnableClips"
    }, {
      autoTrackExposure: !1
    }),
    {
      enableClips: n
    } = u.useExperiment({
      location: "useEnableClips"
    }, {
      autoTrackExposure: !1
    }),
    {
      enableDecoupledGameClipping: i
    } = r.default.useExperiment({
      location: "useEnableClips"
    }, {
      autoTrackExposure: !1
    });
  return (n || t || i) && e
}
let E = e => {
    let {
      autoTrackExposure: t
    } = e, n = (0, o.default)(s.default), {
      enablePremiumEarlyAccessGoLiveRoadblock: i
    } = c.useExperiment({
      location: "useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock"
    }, {
      autoTrackExposure: t && n
    });
    return !!n && i
  },
  p = e => {
    let {
      autoTrackExposure: t
    } = e, n = (0, o.default)(s.default), {
      enablePremiumEarlyAccessAnnouncementCoachmark: i
    } = c.useExperiment({
      location: "useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock"
    }, {
      autoTrackExposure: t && n
    });
    return !!n && i
  };

function h(e) {
  return a.default.isPremiumAtLeast(e.premiumType, l.PremiumTypes.TIER_2)
}