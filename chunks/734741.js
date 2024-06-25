s.d(t, {
  ZR: function() {
    return p
  },
  e0: function() {
    return O
  },
  i3: function() {
    return f
  },
  l_: function() {
    return M
  },
  ph: function() {
    return h
  }
});
var n = s(442837),
  a = s(704215),
  i = s(605236),
  r = s(594174),
  l = s(74538),
  o = s(331119),
  c = s(575595),
  E = s(528865),
  _ = s(650032),
  u = s(781922),
  d = s(885462),
  T = s(474936),
  I = s(921944);
let R = "getWhatsNewBadgeCount",
  A = "useShouldShowWhatsNewBadge",
  N = () => {
    let e = (0, n.e7)([r.default], () => r.default.getCurrentUser()),
      t = l.ZP.isPremiumExactly(e, T.p9.TIER_2),
      {
        enabled: s
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
        enabled: i
      } = o.C.useExperiment({
        location: R
      }, {
        autoTrackExposure: !1
      });
    return !t && s && !a && !i
  },
  C = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      t = r.default.getCurrentUser(),
      s = l.ZP.isPremiumExactly(t, T.p9.TIER_2),
      {
        enabled: n
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
        enabled: i
      } = o.C.getCurrentConfig({
        location: R
      }, {
        autoTrackExposure: !1
      });
    return (e || !s) && n && !a && !i
  },
  g = () => {
    let {
      canFlipCard: e
    } = u.X.useExperiment({
      location: R
    }, {
      autoTrackExposure: !1
    }), t = N(), s = (0, i.wE)(a.z.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE);
    return t && e && !s
  },
  m = () => {
    let {
      canFlipCard: e
    } = u.X.getCurrentConfig({
      location: R
    }, {
      autoTrackExposure: !1
    }), t = C(), s = (0, i.un)(a.z.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE);
    return t && e && !s
  },
  M = () => {
    let {
      canFlipCard: e
    } = d.e.useExperiment({
      location: R
    }, {
      autoTrackExposure: !1
    }), t = (0, i.wE)(a.z.WHATS_NEW_SERVER_PROFILE_BADGE);
    return e && !t
  },
  S = () => {
    let {
      canFlipCard: e
    } = d.e.getCurrentConfig({
      location: R
    }, {
      autoTrackExposure: !1
    }), t = (0, i.un)(a.z.WHATS_NEW_SERVER_PROFILE_BADGE);
    return e && !t
  },
  p = () => {
    let e = g(),
      t = M();
    return t ? (d.e.trackExposure({
      location: A
    }), E.W.trackExposure({
      location: A
    })) : e && u.X.trackExposure({
      location: A
    }), e || t
  },
  h = () => {
    let e = g(),
      t = M();
    e && (0, i.EW)(a.z.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE, {
      dismissAction: I.L.TAKE_ACTION
    }), t && (0, i.EW)(a.z.WHATS_NEW_SERVER_PROFILE_BADGE, {
      dismissAction: I.L.TAKE_ACTION
    })
  },
  f = () => {
    let e = m(),
      t = S();
    return e || t
  },
  O = () => {
    let {
      canFlipCard: e
    } = u.X.getCurrentConfig({
      location: "shouldShowReferralProgramPlanComparisonRow"
    }, {
      autoTrackExposure: !1
    });
    return C(!0) && e
  }