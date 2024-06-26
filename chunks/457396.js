n.d(t, {
  g: function() {
    return G
  }
});
var i, s, a = n(735250);
n(470079);
var r = n(91192),
  l = n(442837),
  o = n(704215),
  c = n(481060),
  d = n(515753),
  u = n(605236),
  _ = n(594174),
  E = n(351402),
  h = n(78839),
  I = n(626135),
  m = n(74538),
  p = n(502087),
  g = n(647265),
  T = n(650032),
  C = n(104494),
  S = n(639119),
  f = n(655525),
  N = n(314684),
  A = n(52188),
  Z = n(248042),
  L = n(924540),
  v = n(649765),
  O = n(565626),
  R = n(734741),
  x = n(701910),
  P = n(487980),
  b = n(474936),
  M = n(981631),
  D = n(921944),
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
    B = (0, l.e7)([_.default], () => _.default.getCurrentUser()),
    H = (0, l.e7)([h.ZP], () => h.ZP.getPremiumTypeSubscription()),
    V = (0, m.Qo)(B, H),
    F = (0, r.JA)("nitro"),
    Y = (0, S.N)(),
    W = (0, C.Ng)(),
    z = (0, l.e7)([E.Z], () => E.Z.isLocalizedPromoEnabled) && null == Y,
    K = (0, Z.Vi)(),
    q = (0, O.ZP)(),
    Q = (0, R.ZR)(),
    X = (0, N.$_)(),
    J = (0, P.K)(U),
    $ = (0, l.e7)([p.Z], () => p.Z.getCreatedAtOverride()),
    ee = null != $ ? $ : null == B ? void 0 : B.createdAt,
    et = s || null != Y || null != W || K || q || Q || null != X || V,
    {
      enabled: en
    } = T._.useExperiment({
      location: U
    }, {
      autoTrackExposure: !1
    }),
    ei = en && (null == Y ? void 0 : Y.trial_id) === b.a7,
    es = (0, g.N9)({
      location: "NitroTabButton",
      showTabForOtherReasons: et
    });
  if (!(et = et || null != B && null != ee && Date.now() - ee.getTime() > es)) return null;
  Q ? (n = (0, a.jsx)(x.g, {}), i = 2) : K ? (n = (0, a.jsx)(f.Z, {
    isNitroTab: !0
  }), i = 0) : null != X ? (n = (0, a.jsx)(x.Z, {
    copy: X
  }), i = 1) : q ? (n = (0, a.jsx)(x.Z, {}), i = 2) : null != W ? (n = (0, a.jsx)(L.GN, {
    userDiscount: W,
    isTabSelected: s,
    includesAmountOff: !1
  }), i = 3) : null == Y || ei ? J ? (n = (0, a.jsx)(v.Z, {
    isSelected: s,
    onSelect: () => (0, u.EW)(o.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
      dismissAction: D.L.TAKE_ACTION
    })
  }), i = 6) : z && (n = (0, a.jsx)(A.k, {
    entryPoint: A.U.PrivateMessages
  }), !s && (t = j.localizeBadge), i = 5) : (n = (0, a.jsx)(L.$H, {
    trialOffer: Y,
    isTabSelected: s
  }), i = 4);
  let ea = (0, a.jsx)(d.Qj, {
    selected: s,
    route: G,
    icon: c.NitroWheelIcon,
    text: y.Z.Messages.PREMIUM,
    locationState: w,
    onClick: () => {
      I.default.track(M.rMx.NITRO_TAB_VISITED, {
        badge_decorator: i,
        has_premium: V
      })
    },
    ...k,
    ...F,
    className: t,
    children: n
  });
  return J ? (0, a.jsx)(v.E, {
    children: ea
  }) : ea
}