t.d(s, {
  Z: function() {
    return Z
  }
});
var n = t(735250);
t(470079);
var a = t(512722),
  i = t.n(a),
  r = t(442837),
  o = t(809206),
  l = t(634894),
  c = t(954138),
  d = t(891728),
  _ = t(328783),
  E = t(295474),
  u = t(150039),
  T = t(126631),
  S = t(433411),
  I = t(532432),
  N = t(349177),
  C = t(872736),
  m = t(134795),
  A = t(610966),
  g = t(513901),
  O = t(451392),
  h = t(906364),
  p = t(350327),
  R = t(621853),
  x = t(318661),
  M = t(25990),
  D = t(594174),
  f = t(74538),
  L = t(689938),
  P = t(141767);

function Z() {
  var e, s, t, a, Z, v, b, j;
  let B = (0, r.e7)([D.default], () => {
      let e = D.default.getCurrentUser();
      return i()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e
    }),
    U = (0, r.e7)([R.Z], () => R.Z.getUserProfile(B.id)),
    {
      pendingAvatar: G,
      pendingGlobalName: F,
      pendingBanner: V,
      pendingBio: y,
      pendingPronouns: Y,
      pendingAccentColor: H,
      pendingThemeColors: k,
      errors: w
    } = (0, r.cj)([M.Z], () => {
      let e = M.Z.getAllPending(),
        s = M.Z.getErrors();
      return {
        ...e,
        errors: s
      }
    }),
    W = (0, E.gS)(),
    K = f.ZP.canUsePremiumProfileCustomization(B),
    z = (0, u.gd)(G, B.avatar),
    Q = (0, u.f$)(V, null == U ? void 0 : U.banner),
    X = "DefaultCustomizationSections";
  (0, l.j)({
    location: X + " auto on",
    autoTrackExposure: !0
  }), (0, l.j)({
    location: X + " auto off",
    autoTrackExposure: !1
  });
  let q = (0, x.ZP)(B.id),
    J = null == q ? void 0 : q.getLegacyUsername(),
    $ = (null !== (t = null === (e = w.global_name) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0) > 0 ? w.global_name : null !== (a = null == W ? void 0 : W.nick) && void 0 !== a ? a : [],
    ee = (null !== (Z = null === (s = w.bio) || void 0 === s ? void 0 : s.length) && void 0 !== Z ? Z : 0) > 0 ? w.bio : null !== (v = null == W ? void 0 : W.bio) && void 0 !== v ? v : [],
    es = (0, c.Z)("user_profile"),
    et = (0, d.V)();
  return (0, n.jsxs)("div", {
    className: P.sectionsContainer,
    children: [(0, n.jsx)(N.Z, {
      placeholder: B.username,
      errors: $,
      currentGlobalName: B.globalName,
      pendingGlobalName: F,
      onGlobalNameChange: o.UZ
    }), (0, n.jsx)(h.Z, {
      sectionTitle: L.Z.Messages.USER_SETTINGS_PRONOUNS,
      errors: w.pronouns,
      onPronounsChange: p.ID,
      pendingPronouns: Y,
      currentPronouns: null !== (b = null == U ? void 0 : U.pronouns) && void 0 !== b ? b : ""
    }, "pronouns"), (0, n.jsx)(I.Z, {
      onAvatarChange: o.I5,
      showRemoveAvatarButton: z,
      errors: w.avatar,
      sectionTitle: L.Z.Messages.USER_SETTINGS_AVATAR,
      forcedDivider: !0
    }, "avatar"), (0, n.jsx)(S.Z, {
      user: B,
      sectionTitle: L.Z.Messages.USER_SETTINGS_AVATAR_DECORATION
    }, "decoration"), (0, n.jsx)(g.Z, {
      user: B,
      sectionTitle: L.Z.Messages.USER_SETTINGS_PROFILE_EFFECT
    }, "effect"), K ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(m.Z, {
        showRemoveBannerButton: Q,
        errors: w.banner,
        onBannerChange: p.g_,
        forcedDivider: !0
      }, "banner"), (0, n.jsx)(O.Z, {
        user: B,
        pendingAvatar: G,
        pendingColors: k,
        onThemeColorsChange: p.z5,
        forcedDivider: !0
      })]
    }) : (0, n.jsx)(A.Z, {
      user: B,
      savedUserColor: null == U ? void 0 : U.accentColor,
      pendingColor: H,
      setPendingAccentColor: p.CM
    }, "color"), (0, n.jsx)(T.Z, {
      sectionTitle: L.Z.Messages.USER_SETTINGS_ABOUT_ME,
      errors: ee,
      onBioChange: e => (0, u.xQ)(e, null == U ? void 0 : U.bio),
      pendingBio: y,
      currentBio: null !== (j = null == U ? void 0 : U.bio) && void 0 !== j ? j : ""
    }, "bio"), es && et.length > 0 && (0, n.jsx)(_.Z, {
      availableClans: et
    }), null != J && (0, n.jsx)(C.Z, {
      legacyUsername: J
    }, "legacy_username")]
  })
}