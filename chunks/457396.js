n.d(t, {
  g: function() {
    return G
  }
});
var s, i, l = n(735250);
n(470079);
var a = n(91192),
  r = n(442837),
  o = n(704215),
  c = n(481060),
  u = n(515753),
  d = n(605236),
  E = n(594174),
  h = n(351402),
  _ = n(78839),
  I = n(626135),
  m = n(74538),
  T = n(502087),
  g = n(647265),
  p = n(650032),
  N = n(104494),
  S = n(639119),
  C = n(655525),
  A = n(314684),
  f = n(52188),
  Z = n(248042),
  L = n(924540),
  O = n(649765),
  v = n(565626),
  R = n(734741),
  P = n(701910),
  x = n(487980),
  M = n(474936),
  D = n(981631),
  b = n(921944),
  y = n(689938),
  j = n(613235);
let U = "NitroTabButton";
(s = i || (i = {}))[s.BOGO_PROMOTION = 0] = "BOGO_PROMOTION", s[s.TENURE_REWARD = 1] = "TENURE_REWARD", s[s.NEW_PERKS_BADGE = 2] = "NEW_PERKS_BADGE", s[s.DISCOUNT_OFFER = 3] = "DISCOUNT_OFFER", s[s.TRIAL_OFFER = 4] = "TRIAL_OFFER", s[s.LOCALIZED_PRICING = 5] = "LOCALIZED_PRICING", s[s.REFERRAL_PROGRAM = 6] = "REFERRAL_PROGRAM";
let G = e => {
  let t, n, s, {
      selected: i,
      route: G,
      locationState: w,
      ...k
    } = e,
    B = (0, r.e7)([E.default], () => E.default.getCurrentUser()),
    H = (0, r.e7)([_.ZP], () => _.ZP.getPremiumTypeSubscription()),
    V = (0, m.Qo)(B, H),
    F = (0, a.JA)("nitro"),
    Y = (0, S.N)(),
    z = (0, N.Ng)(),
    W = (0, r.e7)([h.Z], () => h.Z.isLocalizedPromoEnabled) && null == Y,
    K = (0, Z.Vi)(),
    q = (0, v.ZP)(),
    Q = (0, R.ZR)(),
    X = (0, A.$_)(),
    J = (0, x.K)(U),
    $ = (0, r.e7)([T.Z], () => T.Z.getCreatedAtOverride()),
    ee = null != $ ? $ : null == B ? void 0 : B.createdAt,
    et = i || null != Y || null != z || K || q || Q || null != X || V,
    {
      enabled: en
    } = p._.useExperiment({
      location: U
    }, {
      autoTrackExposure: !1
    }),
    es = en && (null == Y ? void 0 : Y.trial_id) === M.a7,
    ei = (0, g.N9)({
      location: "NitroTabButton",
      showTabForOtherReasons: et
    });
  if (!(et = et || null != B && null != ee && Date.now() - ee.getTime() > ei)) return null;
  Q ? (n = (0, l.jsx)(P.g, {}), s = 2) : K ? (n = (0, l.jsx)(C.Z, {
    isNitroTab: !0
  }), s = 0) : null != X ? (n = (0, l.jsx)(P.Z, {
    copy: X
  }), s = 1) : q ? (n = (0, l.jsx)(P.Z, {}), s = 2) : null != z ? (n = (0, l.jsx)(L.GN, {
    userDiscount: z,
    isTabSelected: i,
    includesAmountOff: !1
  }), s = 3) : null == Y || es ? J ? (n = (0, l.jsx)(O.Z, {
    isSelected: i,
    onSelect: () => (0, d.EW)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
      dismissAction: b.L.TAKE_ACTION
    })
  }), s = 6) : W && (n = (0, l.jsx)(f.k, {
    entryPoint: f.U.PrivateMessages
  }), !i && (t = j.localizeBadge), s = 5) : (n = (0, l.jsx)(L.$H, {
    trialOffer: Y,
    isTabSelected: i
  }), s = 4);
  let el = (0, l.jsx)(u.Qj, {
    selected: i,
    route: G,
    icon: c.NitroWheelIcon,
    text: y.Z.Messages.PREMIUM,
    locationState: w,
    onClick: () => {
      I.default.track(D.rMx.NITRO_TAB_VISITED, {
        badge_decorator: s,
        has_premium: V
      })
    },
    ...k,
    ...F,
    className: t,
    children: n
  });
  return J ? (0, l.jsx)(O.E, {
    children: el
  }) : el
}