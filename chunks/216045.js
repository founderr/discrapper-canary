"use strict";
s.r(t), s.d(t, {
  default: function() {
    return D
  }
});
var a = s("735250"),
  n = s("470079"),
  i = s("512722"),
  l = s.n(i),
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
  g = s("296810"),
  f = s("935147"),
  m = s("350327"),
  A = s("246946"),
  C = s("25990"),
  O = s("594174"),
  h = s("74538"),
  R = s("695346"),
  p = s("265159"),
  M = s("532495");

function D() {
  let e = (0, r.useStateFromStores)([O.default], () => {
    let e = O.default.getCurrentUser();
    return l()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e
  });
  n.useEffect(() => {
    (0, d.fetchProfile)(e.id)
  }, [e.id]);
  let t = (0, r.useStateFromStores)([A.default], () => A.default.hidePersonalInformation),
    {
      pendingAvatar: s,
      pendingBanner: i,
      pendingBio: D,
      pendingPronouns: x,
      pendingGlobalName: L,
      pendingAccentColor: P,
      pendingAvatarDecoration: b,
      pendingThemeColors: v,
      pendingProfileEffectId: U
    } = (0, r.useStateFromStoresObject)([C.default], () => {
      let e = C.default.getAllPending(),
        t = C.default.getErrors();
      return {
        ...e,
        errors: t
      }
    }),
    j = R.UseLegacyChatInput.useSetting() && null != D ? I.default.parse(void 0, D).content : D,
    G = h.default.canUsePremiumProfileCustomization(e),
    {
      analyticsLocations: F
    } = (0, T.default)(E.default.PROFILE),
    B = {
      user: e,
      canUsePremiumCustomization: G,
      onUpsellClick: p.default,
      onAvatarChange: u.setPendingAvatar,
      onBannerChange: m.setPendingBanner,
      pendingBanner: i,
      pendingBio: j,
      pendingPronouns: x,
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
      children: [(0, a.jsx)(_.default, {}), (0, a.jsx)(g.default, {
        profilePreview: (0, a.jsx)(N.default, {
          ...B,
          location: "UserSettingsProfileCustomization",
          pendingThemeColors: v,
          pendingAccentColor: P
        }),
        children: (0, a.jsx)(M.default, {})
      }), !h.default.canUsePremiumProfileCustomization(e) && (0, a.jsx)(f.default, {
        user: e
      })]
    })
  })
}