"use strict";
s.r(t), s.d(t, {
  default: function() {
    return j
  }
});
var a = s("735250");
s("470079");
var n = s("512722"),
  l = s.n(n),
  i = s("442837"),
  r = s("809206"),
  o = s("634894"),
  d = s("963202"),
  u = s("328783"),
  c = s("295474"),
  S = s("150039"),
  E = s("126631"),
  T = s("433411"),
  m = s("532432"),
  f = s("349177"),
  _ = s("872736"),
  g = s("134795"),
  I = s("610966"),
  h = s("513901"),
  N = s("451392"),
  p = s("906364"),
  C = s("676934"),
  A = s("350327"),
  O = s("621853"),
  x = s("318661"),
  R = s("619914"),
  M = s("25990"),
  v = s("594174"),
  D = s("74538"),
  L = s("689938"),
  P = s("602669");

function j() {
  var e, t, s, n, j, b, U, y;
  let B = (0, i.useStateFromStores)([v.default], () => {
      let e = v.default.getCurrentUser();
      return l()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e
    }),
    G = (0, i.useStateFromStores)([O.default], () => O.default.getUserProfile(B.id)),
    {
      pendingAvatar: F,
      pendingGlobalName: k,
      pendingBanner: w,
      pendingBio: H,
      pendingPronouns: V,
      pendingAccentColor: Y,
      pendingThemeColors: K,
      errors: W
    } = (0, i.useStateFromStoresObject)([M.default], () => {
      let e = M.default.getAllPending(),
        t = M.default.getErrors();
      return {
        ...e,
        errors: t
      }
    }),
    z = (0, c.useGuildAutomodProfileQuarantineErrors)(),
    Q = D.default.canUsePremiumProfileCustomization(B),
    q = (0, S.showRemoveAvatar)(F, B.avatar),
    Z = (0, S.showRemoveBanner)(w, null == G ? void 0 : G.banner),
    X = "DefaultCustomizationSections";
  (0, o.useTriggerDebuggingAA)({
    location: X + " auto on",
    autoTrackExposure: !0
  }), (0, o.useTriggerDebuggingAA)({
    location: X + " auto off",
    autoTrackExposure: !1
  });
  let J = (0, x.default)(B.id),
    $ = null == J ? void 0 : J.getLegacyUsername(),
    ee = (null !== (s = null === (e = W.global_name) || void 0 === e ? void 0 : e.length) && void 0 !== s ? s : 0) > 0 ? W.global_name : null !== (n = null == z ? void 0 : z.nick) && void 0 !== n ? n : [],
    et = (null !== (j = null === (t = W.bio) || void 0 === t ? void 0 : t.length) && void 0 !== j ? j : 0) > 0 ? W.bio : null !== (b = null == z ? void 0 : z.bio) && void 0 !== b ? b : [],
    es = (0, R.useUserIsRecentGamesExperimentEnabled)({
      location: "28tk0bf_7",
      autoTrackExposure: !0
    }),
    ea = (0, d.useIsInUserClanExperiment)();
  return (0, a.jsxs)("div", {
    className: P.sectionsContainer,
    children: [(0, a.jsx)(f.default, {
      placeholder: B.username,
      errors: ee,
      currentGlobalName: B.globalName,
      pendingGlobalName: k,
      onGlobalNameChange: r.setPendingGlobalNameName
    }), (0, a.jsx)(p.default, {
      sectionTitle: L.default.Messages.USER_SETTINGS_PRONOUNS,
      errors: W.pronouns,
      onPronounsChange: A.setPendingPronouns,
      pendingPronouns: V,
      currentPronouns: null !== (U = null == G ? void 0 : G.pronouns) && void 0 !== U ? U : ""
    }, "pronouns"), (0, a.jsx)(m.default, {
      onAvatarChange: r.setPendingAvatar,
      showRemoveAvatarButton: q,
      errors: W.avatar,
      sectionTitle: L.default.Messages.USER_SETTINGS_AVATAR,
      forcedDivider: !0
    }, "avatar"), (0, a.jsx)(T.default, {
      user: B,
      sectionTitle: L.default.Messages.USER_SETTINGS_AVATAR_DECORATION
    }, "decoration"), (0, a.jsx)(h.default, {
      user: B,
      sectionTitle: L.default.Messages.USER_SETTINGS_PROFILE_EFFECT
    }, "effect"), Q ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(g.default, {
        showRemoveBannerButton: Z,
        errors: W.banner,
        onBannerChange: A.setPendingBanner,
        forcedDivider: !0
      }, "banner"), (0, a.jsx)(N.default, {
        user: B,
        pendingAvatar: F,
        pendingColors: K,
        onThemeColorsChange: A.setPendingThemeColors,
        forcedDivider: !0
      })]
    }) : (0, a.jsx)(I.default, {
      user: B,
      savedUserColor: null == G ? void 0 : G.accentColor,
      pendingColor: Y,
      setPendingAccentColor: A.setPendingAccentColor
    }, "color"), (0, a.jsx)(E.default, {
      sectionTitle: L.default.Messages.USER_SETTINGS_ABOUT_ME,
      errors: et,
      onBioChange: e => (0, S.setNewPendingUserBio)(e, null == G ? void 0 : G.bio),
      pendingBio: H,
      currentBio: null !== (y = null == G ? void 0 : G.bio) && void 0 !== y ? y : ""
    }, "bio"), ea && (0, a.jsx)(u.default, {}), es && (0, a.jsx)(C.default, {}), null != $ && (0, a.jsx)(_.default, {
      legacyUsername: $
    }, "legacy_username")]
  })
}