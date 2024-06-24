t.d(s, {
  Z: function() {
    return D
  }
});
var n = t(735250),
  i = t(470079),
  a = t(512722),
  l = t.n(a),
  r = t(442837),
  o = t(570140),
  c = t(232567),
  E = t(809206),
  d = t(497321),
  _ = t(634894),
  T = t(100527),
  S = t(906732),
  u = t(475977),
  I = t(957730),
  N = t(589266),
  A = t(296810),
  C = t(935147),
  O = t(350327),
  m = t(246946),
  h = t(25990),
  g = t(594174),
  R = t(74538),
  M = t(695346),
  x = t(265159),
  p = t(532495);

function D() {
  let e = (0, r.e7)([g.default], () => {
    let e = g.default.getCurrentUser();
    return l()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e
  });
  i.useEffect(() => {
    (0, c.In)(e.id)
  }, [e.id]);
  let s = (0, r.e7)([m.Z], () => m.Z.hidePersonalInformation),
    {
      pendingAvatar: t,
      pendingBanner: a,
      pendingBio: D,
      pendingPronouns: L,
      pendingGlobalName: P,
      pendingAccentColor: Z,
      pendingAvatarDecoration: f,
      pendingThemeColors: j,
      pendingProfileEffectId: v
    } = (0, r.cj)([h.Z], () => {
      let e = h.Z.getAllPending(),
        s = h.Z.getErrors();
      return {
        ...e,
        errors: s
      }
    }),
    U = M.dN.useSetting() && null != D ? I.ZP.parse(void 0, D).content : D,
    B = R.ZP.canUsePremiumProfileCustomization(e),
    {
      analyticsLocations: b
    } = (0, S.ZP)(T.Z.PROFILE),
    G = {
      user: e,
      canUsePremiumCustomization: B,
      onUpsellClick: x.Z,
      onAvatarChange: E.I5,
      onBannerChange: O.g_,
      pendingBanner: a,
      pendingBio: U,
      pendingPronouns: L,
      pendingAvatar: t,
      pendingGlobalName: P,
      pendingAvatarDecoration: f,
      pendingProfileEffectId: v
    };
  i.useEffect(() => () => o.Z.wait(E.W3), []);
  let F = "UserSettingsProfileCustomization";
  return ((0, _.j)({
    location: F + " auto on",
    autoTrackExposure: !0
  }), (0, _.j)({
    location: F + " auto off",
    autoTrackExposure: !1
  }), s) ? (0, n.jsx)(d.Z, {}) : (0, n.jsx)(S.Gt, {
    value: b,
    children: (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(u.Z, {}), (0, n.jsx)(A.Z, {
        profilePreview: (0, n.jsx)(N.Z, {
          ...G,
          location: "UserSettingsProfileCustomization",
          pendingThemeColors: j,
          pendingAccentColor: Z
        }),
        children: (0, n.jsx)(p.Z, {})
      }), !R.ZP.canUsePremiumProfileCustomization(e) && (0, n.jsx)(C.Z, {
        user: e
      })]
    })
  })
}