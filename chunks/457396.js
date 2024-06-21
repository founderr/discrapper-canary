n.d(t, {
  g: function() {
    return G
  }
});
var i, s, l = n(735250);
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
  g = n(502087),
  p = n(647265),
  N = n(650032),
  T = n(104494),
  C = n(639119),
  S = n(655525),
  A = n(314684),
  f = n(52188),
  Z = n(248042),
  v = n(924540),
  L = n(649765),
  O = n(565626),
  R = n(734741),
  x = n(701910),
  M = n(487980),
  P = n(474936),
  D = n(981631),
  b = n(921944),
  y = n(689938),
  j = n(613235);
let U = "NitroTabButton";
(i = s || (s = {}))[i.BOGO_PROMOTION = 0] = "BOGO_PROMOTION", i[i.TENURE_REWARD = 1] = "TENURE_REWARD", i[i.NEW_PERKS_BADGE = 2] = "NEW_PERKS_BADGE", i[i.DISCOUNT_OFFER = 3] = "DISCOUNT_OFFER", i[i.TRIAL_OFFER = 4] = "TRIAL_OFFER", i[i.LOCALIZED_PRICING = 5] = "LOCALIZED_PRICING", i[i.REFERRAL_PROGRAM = 6] = "REFERRAL_PROGRAM";
let G = e => {
  let t, n, i, {
      selected: s,
      route: G,
      locationState: w,
      ...k
    } = e,
    B = (0, r.e7)([E.default], () => E.default.getCurrentUser()),
    H = (0, r.e7)([_.ZP], () => _.ZP.getPremiumTypeSubscription()),
    V = (0, m.Qo)(B, H),
    F = (0, a.JA)("nitro"),
    Y = (0, C.N)(),
    z = (0, T.Ng)(),
    W = (0, r.e7)([h.Z], () => h.Z.isLocalizedPromoEnabled) && null == Y,
    K = (0, Z.Vi)(),
    q = (0, O.ZP)(),
    Q = (0, R.ZR)(),
    X = (0, A.$_)(),
    J = (0, M.K)(U),
    $ = (0, r.e7)([g.Z], () => g.Z.getCreatedAtOverride()),
    ee = null != $ ? $ : null == B ? void 0 : B.createdAt,
    et = s || null != Y || null != z || K || q || Q || null != X || V,
    {
      enabled: en
    } = N._.useExperiment({
      location: U
    }, {
      autoTrackExposure: !1
    }),
    ei = en && (null == Y ? void 0 : Y.trial_id) === P.a7,
    es = (0, p.N9)({
      location: "NitroTabButton",
      showTabForOtherReasons: et
    });
  if (!(et = et || null != B && null != ee && Date.now() - ee.getTime() > es)) return null;
  Q ? (n = (0, l.jsx)(x.g, {}), i = 2) : K ? (n = (0, l.jsx)(S.Z, {
    isNitroTab: !0
  }), i = 0) : null != X ? (n = (0, l.jsx)(x.Z, {
    copy: X
  }), i = 1) : q ? (n = (0, l.jsx)(x.Z, {}), i = 2) : null != z ? (n = (0, l.jsx)(v.GN, {
    userDiscount: z,
    isTabSelected: s,
    includesAmountOff: !1
  }), i = 3) : null == Y || ei ? J ? (n = (0, l.jsx)(L.Z, {
    isSelected: s,
    onSelect: () => (0, d.EW)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
      dismissAction: b.L.TAKE_ACTION
    })
  }), i = 6) : W && (n = (0, l.jsx)(f.k, {
    entryPoint: f.U.PrivateMessages
  }), !s && (t = j.localizeBadge), i = 5) : (n = (0, l.jsx)(v.$H, {
    trialOffer: Y,
    isTabSelected: s
  }), i = 4);
  let el = (0, l.jsx)(u.Qj, {
    selected: s,
    route: G,
    icon: c.NitroWheelIcon,
    text: y.Z.Messages.PREMIUM,
    locationState: w,
    onClick: () => {
      I.default.track(D.rMx.NITRO_TAB_VISITED, {
        badge_decorator: i,
        has_premium: V
      })
    },
    ...k,
    ...F,
    className: t,
    children: n
  });
  return J ? (0, l.jsx)(L.E, {
    children: el
  }) : el
}