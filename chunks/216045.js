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
  I = s("957730"),
  N = s("589266"),
  f = s("296810"),
  g = s("935147"),
  m = s("350327"),
  C = s("246946"),
  A = s("25990"),
  h = s("594174"),
  O = s("74538"),
  p = s("695346"),
  R = s("265159"),
  x = s("532495");

function M() {
  let e = (0, r.useStateFromStores)([h.default], () => {
    let e = h.default.getCurrentUser();
    return i()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e
  });
  n.useEffect(() => {
    (0, d.fetchProfile)(e.id)
  }, [e.id]);
  let t = (0, r.useStateFromStores)([C.default], () => C.default.hidePersonalInformation),
    {
      pendingAvatar: s,
      pendingBanner: l,
      pendingBio: M,
      pendingPronouns: D,
      pendingGlobalName: L,
      pendingAccentColor: P,
      pendingAvatarDecoration: b,
      pendingThemeColors: v,
      pendingProfileEffectId: U
    } = (0, r.useStateFromStoresObject)([A.default], () => {
      let e = A.default.getAllPending(),
        t = A.default.getErrors();
      return {
        ...e,
        errors: t
      }
    }),
    j = p.UseLegacyChatInput.useSetting() && null != M ? I.default.parse(void 0, M).content : M,
    G = O.default.canUsePremiumProfileCustomization(e),
    {
      analyticsLocations: F
    } = (0, T.default)(E.default.PROFILE),
    B = {
      user: e,
      canUsePremiumCustomization: G,
      onUpsellClick: R.default,
      onAvatarChange: u.setPendingAvatar,
      onBannerChange: m.setPendingBanner,
      pendingBanner: l,
      pendingBio: j,
      pendingPronouns: D,
      pendingAvatar: s,
      pendingGlobalName: L,
      pendingAvatarDecoration: b,
      pendingProfileEffectId: U
    };
  n.useEffect(() => () => o.default.wait(u.resetAllPending), []);
  let y = "UserSettingsProfileCustomization";
  return ((0, S.useTriggerDebuggingAA)({
    location: y + " auto on",
    autoTrackExposure: !0
  }), (0, S.useTriggerDebuggingAA)({
    location: y + " auto off",
    autoTrackExposure: !1
  }), t) ? (0, a.jsx)(c.default, {}) : (0, a.jsx)(T.AnalyticsLocationProvider, {
    value: F,
    children: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(_.default, {}), (0, a.jsx)(f.default, {
        profilePreview: (0, a.jsx)(N.default, {
          ...B,
          location: "UserSettingsProfileCustomization",
          pendingThemeColors: v,
          pendingAccentColor: P
        }),
        children: (0, a.jsx)(x.default, {})
      }), !O.default.canUsePremiumProfileCustomization(e) && (0, a.jsx)(g.default, {
        user: e
      })]
    })
  })
}