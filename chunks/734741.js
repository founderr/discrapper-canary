n.d(t, {
  ZR: function() {
    return f
  },
  e0: function() {
    return x
  },
  i3: function() {
    return M
  },
  l_: function() {
    return m
  },
  ph: function() {
    return h
  }
});
var s = n(442837),
  a = n(704215),
  r = n(605236),
  i = n(594174),
  l = n(74538),
  o = n(331119),
  c = n(575595),
  d = n(528865),
  _ = n(650032),
  E = n(781922),
  u = n(885462),
  T = n(474936),
  I = n(921944);
let R = "getWhatsNewBadgeCount",
  C = "useShouldShowWhatsNewBadge",
  g = () => {
    let e = (0, s.e7)([i.default], () => i.default.getCurrentUser()),
      t = l.ZP.isPremiumExactly(e, T.p9.TIER_2),
      {
        enabled: n
      } = _._.useExperiment({
        location: R
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: a
      } = c.r.useExperiment({
        location: R
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: r
      } = o.C.useExperiment({
        location: R
      }, {
        autoTrackExposure: !1
      });
    return !t && n && !a && !r
  },
  p = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      t = i.default.getCurrentUser(),
      n = l.ZP.isPremiumExactly(t, T.p9.TIER_2),
      {
        enabled: s
      } = _._.getCurrentConfig({
        location: R
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: a
      } = c.r.getCurrentConfig({
        location: R
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: r
      } = o.C.getCurrentConfig({
        location: R
      }, {
        autoTrackExposure: !1
      });
    return (e || !n) && s && !a && !r
  },
  A = () => {
    let {
      canFlipCard: e
    } = E.X.useExperiment({
      location: R
    }, {
      autoTrackExposure: !1
    }), t = g(), n = (0, r.wE)(a.z.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE);
    return t && e && !n
  },
  N = () => {
    let {
      canFlipCard: e
    } = E.X.getCurrentConfig({
      location: R
    }, {
      autoTrackExposure: !1
    }), t = p(), n = (0, r.un)(a.z.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE);
    return t && e && !n
  },
  m = () => {
    let {
      canFlipCard: e
    } = u.e.useExperiment({
      location: R
    }, {
      autoTrackExposure: !1
    }), t = (0, r.wE)(a.z.WHATS_NEW_SERVER_PROFILE_BADGE);
    return e && !t
  },
  S = () => {
    let {
      canFlipCard: e
    } = u.e.getCurrentConfig({
      location: R
    }, {
      autoTrackExposure: !1
    }), t = (0, r.un)(a.z.WHATS_NEW_SERVER_PROFILE_BADGE);
    return e && !t
  },
  f = () => {
    let e = A(),
      t = m();
    return t ? (u.e.trackExposure({
      location: C
    }), d.W.trackExposure({
      location: C
    })) : e && E.X.trackExposure({
      location: C
    }), e || t
  },
  h = () => {
    let e = A(),
      t = m();
    e && (0, r.EW)(a.z.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE, {
      dismissAction: I.L.TAKE_ACTION
    }), t && (0, r.EW)(a.z.WHATS_NEW_SERVER_PROFILE_BADGE, {
      dismissAction: I.L.TAKE_ACTION
    })
  },
  M = () => {
    let e = N(),
      t = S();
    return e || t
  },
  x = () => {
    let {
      canFlipCard: e
    } = E.X.getCurrentConfig({
      location: "shouldShowReferralProgramPlanComparisonRow"
    }, {
      autoTrackExposure: !1
    });
    return p(!0) && e
  }