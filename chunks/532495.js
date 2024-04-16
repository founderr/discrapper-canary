"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
});
var a = s("735250");
s("470079");
var n = s("512722"),
  l = s.n(n),
  i = s("442837"),
  r = s("809206"),
  o = s("634894"),
  d = s("295474"),
  u = s("150039"),
  c = s("126631"),
  S = s("433411"),
  E = s("532432"),
  T = s("349177"),
  f = s("872736"),
  m = s("134795"),
  _ = s("610966"),
  g = s("513901"),
  I = s("451392"),
  h = s("906364"),
  N = s("676934"),
  p = s("350327"),
  C = s("621853"),
  A = s("318661"),
  O = s("619914"),
  x = s("25990"),
  R = s("594174"),
  M = s("74538"),
  v = s("689938"),
  D = s("602669");

function L() {
  var e, t, s, n, L, P, j, b;
  let U = (0, i.useStateFromStores)([R.default], () => {
      let e = R.default.getCurrentUser();
      return l()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e
    }),
    y = (0, i.useStateFromStores)([C.default], () => C.default.getUserProfile(U.id)),
    {
      pendingAvatar: B,
      pendingGlobalName: F,
      pendingBanner: G,
      pendingBio: k,
      pendingPronouns: H,
      pendingAccentColor: w,
      pendingThemeColors: V,
      errors: Y
    } = (0, i.useStateFromStoresObject)([x.default], () => {
      let e = x.default.getAllPending(),
        t = x.default.getErrors();
      return {
        ...e,
        errors: t
      }
    }),
    W = (0, d.useGuildAutomodProfileQuarantineErrors)(),
    K = M.default.canUsePremiumProfileCustomization(U),
    z = (0, u.showRemoveAvatar)(B, U.avatar),
    Q = (0, u.showRemoveBanner)(G, null == y ? void 0 : y.banner),
    q = "DefaultCustomizationSections";
  (0, o.useTriggerDebuggingAA)({
    location: q + " auto on",
    autoTrackExposure: !0
  }), (0, o.useTriggerDebuggingAA)({
    location: q + " auto off",
    autoTrackExposure: !1
  });
  let Z = (0, A.default)(U.id),
    X = null == Z ? void 0 : Z.getLegacyUsername(),
    J = (null !== (s = null === (e = Y.global_name) || void 0 === e ? void 0 : e.length) && void 0 !== s ? s : 0) > 0 ? Y.global_name : null !== (n = null == W ? void 0 : W.nick) && void 0 !== n ? n : [],
    $ = (null !== (L = null === (t = Y.bio) || void 0 === t ? void 0 : t.length) && void 0 !== L ? L : 0) > 0 ? Y.bio : null !== (P = null == W ? void 0 : W.bio) && void 0 !== P ? P : [],
    ee = (0, O.useUserIsRecentGamesExperimentEnabled)({
      location: "28tk0bf_7",
      autoTrackExposure: !0
    });
  return (0, a.jsxs)("div", {
    className: D.sectionsContainer,
    children: [(0, a.jsx)(T.default, {
      placeholder: U.username,
      errors: J,
      currentGlobalName: U.globalName,
      pendingGlobalName: F,
      onGlobalNameChange: r.setPendingGlobalNameName
    }), (0, a.jsx)(h.default, {
      sectionTitle: v.default.Messages.USER_SETTINGS_PRONOUNS,
      errors: Y.pronouns,
      onPronounsChange: p.setPendingPronouns,
      pendingPronouns: H,
      currentPronouns: null !== (j = null == y ? void 0 : y.pronouns) && void 0 !== j ? j : ""
    }, "pronouns"), (0, a.jsx)(E.default, {
      onAvatarChange: r.setPendingAvatar,
      showRemoveAvatarButton: z,
      errors: Y.avatar,
      sectionTitle: v.default.Messages.USER_SETTINGS_AVATAR,
      forcedDivider: !0
    }, "avatar"), (0, a.jsx)(S.default, {
      user: U,
      sectionTitle: v.default.Messages.USER_SETTINGS_AVATAR_DECORATION
    }, "decoration"), (0, a.jsx)(g.default, {
      user: U,
      sectionTitle: v.default.Messages.USER_SETTINGS_PROFILE_EFFECT
    }, "effect"), K ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(m.default, {
        showRemoveBannerButton: Q,
        errors: Y.banner,
        onBannerChange: p.setPendingBanner,
        forcedDivider: !0
      }, "banner"), (0, a.jsx)(I.default, {
        user: U,
        pendingAvatar: B,
        pendingColors: V,
        onThemeColorsChange: p.setPendingThemeColors,
        forcedDivider: !0
      })]
    }) : (0, a.jsx)(_.default, {
      user: U,
      savedUserColor: null == y ? void 0 : y.accentColor,
      pendingColor: w,
      setPendingAccentColor: p.setPendingAccentColor
    }, "color"), (0, a.jsx)(c.default, {
      sectionTitle: v.default.Messages.USER_SETTINGS_ABOUT_ME,
      errors: $,
      onBioChange: e => (0, u.setNewPendingUserBio)(e, null == y ? void 0 : y.bio),
      pendingBio: k,
      currentBio: null !== (b = null == y ? void 0 : y.bio) && void 0 !== b ? b : ""
    }, "bio"), ee && (0, a.jsx)(N.default, {}), null != X && (0, a.jsx)(f.default, {
      legacyUsername: X
    }, "legacy_username")]
  })
}