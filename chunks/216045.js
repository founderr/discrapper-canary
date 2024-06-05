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
  f = s("589266"),
  m = s("296810"),
  N = s("935147"),
  g = s("350327"),
  h = s("246946"),
  C = s("25990"),
  O = s("594174"),
  A = s("74538"),
  p = s("695346"),
  R = s("265159"),
  x = s("532495");

function M() {
  let e = (0, r.useStateFromStores)([O.default], () => {
    let e = O.default.getCurrentUser();
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
      pendingPronouns: D,
      pendingGlobalName: L,
      pendingAccentColor: P,
      pendingAvatarDecoration: v,
      pendingThemeColors: b,
      pendingProfileEffectId: U
    } = (0, r.useStateFromStoresObject)([C.default], () => {
      let e = C.default.getAllPending(),
        t = C.default.getErrors();
      return {
        ...e,
        errors: t
      }
    }),
    j = p.UseLegacyChatInput.useSetting() && null != M ? I.default.parse(void 0, M).content : M,
    F = A.default.canUsePremiumProfileCustomization(e),
    {
      analyticsLocations: G
    } = (0, T.default)(E.default.PROFILE),
    B = {
      user: e,
      canUsePremiumCustomization: F,
      onUpsellClick: R.default,
      onAvatarChange: u.setPendingAvatar,
      onBannerChange: g.setPendingBanner,
      pendingBanner: l,
      pendingBio: j,
      pendingPronouns: D,
      pendingAvatar: s,
      pendingGlobalName: L,
      pendingAvatarDecoration: v,
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
    value: G,
    children: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(_.default, {}), (0, a.jsx)(m.default, {
        profilePreview: (0, a.jsx)(f.default, {
          ...B,
          location: "UserSettingsProfileCustomization",
          pendingThemeColors: b,
          pendingAccentColor: P
        }),
        children: (0, a.jsx)(x.default, {})
      }), !A.default.canUsePremiumProfileCustomization(e) && (0, a.jsx)(N.default, {
        user: e
      })]
    })
  })
}