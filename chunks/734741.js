t.d(s, {
  ZR: function() {
    return C
  },
  e0: function() {
    return O
  },
  i3: function() {
    return P
  },
  l_: function() {
    return m
  },
  ph: function() {
    return f
  }
});
var n = t(442837),
  a = t(704215),
  r = t(605236),
  i = t(594174),
  l = t(74538),
  o = t(331119),
  _ = t(575595),
  c = t(528865),
  E = t(650032),
  u = t(781922),
  d = t(885462),
  R = t(474936),
  I = t(921944);
let T = "getWhatsNewBadgeCount",
  A = "useShouldShowWhatsNewBadge",
  M = () => {
    let e = (0, n.e7)([i.default], () => i.default.getCurrentUser()),
      s = l.ZP.isPremiumExactly(e, R.p9.TIER_2),
      {
        enabled: t
      } = E._.useExperiment({
        location: T
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: a
      } = _.r.useExperiment({
        location: T
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: r
      } = o.C.useExperiment({
        location: T
      }, {
        autoTrackExposure: !1
      });
    return !s && t && !a && !r
  },
  S = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      s = i.default.getCurrentUser(),
      t = l.ZP.isPremiumExactly(s, R.p9.TIER_2),
      {
        enabled: n
      } = E._.getCurrentConfig({
        location: T
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: a
      } = _.r.getCurrentConfig({
        location: T
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: r
      } = o.C.getCurrentConfig({
        location: T
      }, {
        autoTrackExposure: !1
      });
    return (e || !t) && n && !a && !r
  },
  N = () => {
    let {
      canFlipCard: e
    } = u.X.useExperiment({
      location: T
    }, {
      autoTrackExposure: !1
    }), s = M(), t = (0, r.wE)(a.z.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE);
    return s && e && !t
  },
  p = () => {
    let {
      canFlipCard: e
    } = u.X.getCurrentConfig({
      location: T
    }, {
      autoTrackExposure: !1
    }), s = S(), t = (0, r.un)(a.z.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE);
    return s && e && !t
  },
  m = () => {
    let {
      canFlipCard: e
    } = d.e.useExperiment({
      location: T
    }, {
      autoTrackExposure: !1
    }), s = (0, r.wE)(a.z.WHATS_NEW_SERVER_PROFILE_BADGE);
    return e && !s
  },
  g = () => {
    let {
      canFlipCard: e
    } = d.e.getCurrentConfig({
      location: T
    }, {
      autoTrackExposure: !1
    }), s = (0, r.un)(a.z.WHATS_NEW_SERVER_PROFILE_BADGE);
    return e && !s
  },
  C = () => {
    let e = N(),
      s = m();
    return s ? (d.e.trackExposure({
      location: A
    }), c.W.trackExposure({
      location: A
    })) : e && u.X.trackExposure({
      location: A
    }), e || s
  },
  f = () => {
    let e = N(),
      s = m();
    e && (0, r.EW)(a.z.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE, {
      dismissAction: I.L.TAKE_ACTION
    }), s && (0, r.EW)(a.z.WHATS_NEW_SERVER_PROFILE_BADGE, {
      dismissAction: I.L.TAKE_ACTION
    })
  },
  P = () => {
    let e = p(),
      s = g();
    return e || s
  },
  O = () => {
    let {
      canFlipCard: e
    } = u.X.getCurrentConfig({
      location: "shouldShowReferralProgramPlanComparisonRow"
    }, {
      autoTrackExposure: !1
    });
    return S(!0) && e
  }