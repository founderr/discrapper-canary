"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("512722"),
  i = s.n(l),
  r = s("442837"),
  o = s("570140"),
  d = s("232567"),
  u = s("809206"),
  c = s("497321"),
  S = s("634894"),
  E = s("100527"),
  T = s("906732"),
  _ = s("475977"),
  f = s("957730"),
  m = s("962746"),
  g = s("296810"),
  I = s("935147"),
  N = s("350327"),
  h = s("246946"),
  C = s("25990"),
  A = s("594174"),
  p = s("74538"),
  O = s("695346"),
  R = s("265159"),
  x = s("532495");

function M() {
  let e = (0, r.useStateFromStores)([A.default], () => {
    let e = A.default.getCurrentUser();
    return i()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e
  });
  n.useEffect(() => {
    (0, d.fetchProfile)(e.id)
  }, [e.id]);
  let t = (0, r.useStateFromStores)([h.default], () => h.default.hidePersonalInformation),
    {
      pendingAvatar: s,
      pendingBanner: l,
      pendingBio: M,
      pendingPronouns: v,
      pendingGlobalName: L,
      pendingAccentColor: D,
      pendingAvatarDecoration: P,
      pendingThemeColors: b,
      pendingProfileEffectId: j
    } = (0, r.useStateFromStoresObject)([C.default], () => {
      let e = C.default.getAllPending(),
        t = C.default.getErrors();
      return {
        ...e,
        errors: t
      }
    }),
    U = O.UseLegacyChatInput.useSetting() && null != M ? f.default.parse(void 0, M).content : M,
    y = p.default.canUsePremiumProfileCustomization(e),
    {
      analyticsLocations: F
    } = (0, T.default)(E.default.PROFILE),
    G = {
      user: e,
      canUsePremiumCustomization: y,
      onUpsellClick: R.default,
      onAvatarChange: u.setPendingAvatar,
      onBannerChange: N.setPendingBanner,
      pendingBanner: l,
      pendingBio: U,
      pendingPronouns: v,
      pendingAvatar: s,
      pendingGlobalName: L,
      pendingAvatarDecoration: P,
      pendingProfileEffectId: j
    };
  n.useEffect(() => () => o.default.wait(u.resetAllPending), []);
  let B = "UserSettingsProfileCustomization";
  return ((0, S.useTriggerDebuggingAA)({
    location: B + " auto on",
    autoTrackExposure: !0
  }), (0, S.useTriggerDebuggingAA)({
    location: B + " auto off",
    autoTrackExposure: !1
  }), t) ? (0, a.jsx)(c.default, {}) : (0, a.jsx)(T.AnalyticsLocationProvider, {
    value: F,
    children: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(_.default, {}), (0, a.jsx)(g.default, {
        profilePreview: (0, a.jsx)(m.default, {
          ...G,
          pendingThemeColors: b,
          pendingAccentColor: D
        }),
        children: (0, a.jsx)(x.default, {})
      }), !p.default.canUsePremiumProfileCustomization(e) && (0, a.jsx)(I.default, {
        user: e
      })]
    })
  })
}