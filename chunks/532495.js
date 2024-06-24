t.d(s, {
  Z: function() {
    return f
  }
});
var n = t(735250);
t(470079);
var i = t(512722),
  a = t.n(i),
  l = t(442837),
  r = t(809206),
  o = t(634894),
  c = t(954138),
  E = t(891728),
  d = t(328783),
  _ = t(295474),
  T = t(150039),
  S = t(126631),
  u = t(433411),
  I = t(532432),
  N = t(349177),
  A = t(872736),
  C = t(134795),
  O = t(610966),
  m = t(513901),
  h = t(451392),
  g = t(906364),
  R = t(350327),
  M = t(621853),
  x = t(318661),
  p = t(25990),
  D = t(594174),
  L = t(74538),
  P = t(689938),
  Z = t(141767);

function f() {
  var e, s, t, i, f, j, v, U;
  let B = (0, l.e7)([D.default], () => {
      let e = D.default.getCurrentUser();
      return a()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e
    }),
    b = (0, l.e7)([M.Z], () => M.Z.getUserProfile(B.id)),
    {
      pendingAvatar: G,
      pendingGlobalName: F,
      pendingBanner: V,
      pendingBio: y,
      pendingPronouns: Y,
      pendingAccentColor: H,
      pendingThemeColors: k,
      errors: w
    } = (0, l.cj)([p.Z], () => {
      let e = p.Z.getAllPending(),
        s = p.Z.getErrors();
      return {
        ...e,
        errors: s
      }
    }),
    W = (0, _.gS)(),
    K = L.ZP.canUsePremiumProfileCustomization(B),
    z = (0, T.gd)(G, B.avatar),
    Q = (0, T.f$)(V, null == b ? void 0 : b.banner),
    X = "DefaultCustomizationSections";
  (0, o.j)({
    location: X + " auto on",
    autoTrackExposure: !0
  }), (0, o.j)({
    location: X + " auto off",
    autoTrackExposure: !1
  });
  let q = (0, x.ZP)(B.id),
    J = null == q ? void 0 : q.getLegacyUsername(),
    $ = (null !== (t = null === (e = w.global_name) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0) > 0 ? w.global_name : null !== (i = null == W ? void 0 : W.nick) && void 0 !== i ? i : [],
    ee = (null !== (f = null === (s = w.bio) || void 0 === s ? void 0 : s.length) && void 0 !== f ? f : 0) > 0 ? w.bio : null !== (j = null == W ? void 0 : W.bio) && void 0 !== j ? j : [],
    es = (0, c.Z)("user_profile"),
    et = (0, E.V)();
  return (0, n.jsxs)("div", {
    className: Z.sectionsContainer,
    children: [(0, n.jsx)(N.Z, {
      placeholder: B.username,
      errors: $,
      currentGlobalName: B.globalName,
      pendingGlobalName: F,
      onGlobalNameChange: r.UZ
    }), (0, n.jsx)(g.Z, {
      sectionTitle: P.Z.Messages.USER_SETTINGS_PRONOUNS,
      errors: w.pronouns,
      onPronounsChange: R.ID,
      pendingPronouns: Y,
      currentPronouns: null !== (v = null == b ? void 0 : b.pronouns) && void 0 !== v ? v : ""
    }, "pronouns"), (0, n.jsx)(I.Z, {
      onAvatarChange: r.I5,
      showRemoveAvatarButton: z,
      errors: w.avatar,
      sectionTitle: P.Z.Messages.USER_SETTINGS_AVATAR,
      forcedDivider: !0
    }, "avatar"), (0, n.jsx)(u.Z, {
      user: B,
      sectionTitle: P.Z.Messages.USER_SETTINGS_AVATAR_DECORATION
    }, "decoration"), (0, n.jsx)(m.Z, {
      user: B,
      sectionTitle: P.Z.Messages.USER_SETTINGS_PROFILE_EFFECT
    }, "effect"), K ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(C.Z, {
        showRemoveBannerButton: Q,
        errors: w.banner,
        onBannerChange: R.g_,
        forcedDivider: !0
      }, "banner"), (0, n.jsx)(h.Z, {
        user: B,
        pendingAvatar: G,
        pendingColors: k,
        onThemeColorsChange: R.z5,
        forcedDivider: !0
      })]
    }) : (0, n.jsx)(O.Z, {
      user: B,
      savedUserColor: null == b ? void 0 : b.accentColor,
      pendingColor: H,
      setPendingAccentColor: R.CM
    }, "color"), (0, n.jsx)(S.Z, {
      sectionTitle: P.Z.Messages.USER_SETTINGS_ABOUT_ME,
      errors: ee,
      onBioChange: e => (0, T.xQ)(e, null == b ? void 0 : b.bio),
      pendingBio: y,
      currentBio: null !== (U = null == b ? void 0 : b.bio) && void 0 !== U ? U : ""
    }, "bio"), es && et.length > 0 && (0, n.jsx)(d.Z, {
      availableClans: et
    }), null != J && (0, n.jsx)(A.Z, {
      legacyUsername: J
    }, "legacy_username")]
  })
}