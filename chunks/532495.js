"use strict";
s.r(t), s.d(t, {
  default: function() {
    return U
  }
});
var a = s("735250");
s("470079");
var n = s("512722"),
  l = s.n(n),
  i = s("442837"),
  r = s("809206"),
  o = s("634894"),
  d = s("954138"),
  u = s("891728"),
  c = s("328783"),
  S = s("295474"),
  E = s("150039"),
  T = s("126631"),
  _ = s("433411"),
  I = s("532432"),
  f = s("349177"),
  m = s("872736"),
  N = s("134795"),
  g = s("610966"),
  h = s("513901"),
  C = s("451392"),
  O = s("906364"),
  A = s("676934"),
  p = s("350327"),
  R = s("621853"),
  x = s("318661"),
  M = s("619914"),
  D = s("25990"),
  L = s("594174"),
  P = s("74538"),
  v = s("689938"),
  b = s("741129");

function U() {
  var e, t, s, n, U, j, F, G;
  let B = (0, i.useStateFromStores)([L.default], () => {
      let e = L.default.getCurrentUser();
      return l()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e
    }),
    y = (0, i.useStateFromStores)([R.default], () => R.default.getUserProfile(B.id)),
    {
      pendingAvatar: V,
      pendingGlobalName: H,
      pendingBanner: k,
      pendingBio: w,
      pendingPronouns: Y,
      pendingAccentColor: W,
      pendingThemeColors: K,
      errors: z
    } = (0, i.useStateFromStoresObject)([D.default], () => {
      let e = D.default.getAllPending(),
        t = D.default.getErrors();
      return {
        ...e,
        errors: t
      }
    }),
    Q = (0, S.useGuildAutomodProfileQuarantineErrors)(),
    q = P.default.canUsePremiumProfileCustomization(B),
    X = (0, E.showRemoveAvatar)(V, B.avatar),
    Z = (0, E.showRemoveBanner)(k, null == y ? void 0 : y.banner),
    J = "DefaultCustomizationSections";
  (0, o.useTriggerDebuggingAA)({
    location: J + " auto on",
    autoTrackExposure: !0
  }), (0, o.useTriggerDebuggingAA)({
    location: J + " auto off",
    autoTrackExposure: !1
  });
  let $ = (0, x.default)(B.id),
    ee = null == $ ? void 0 : $.getLegacyUsername(),
    et = (null !== (s = null === (e = z.global_name) || void 0 === e ? void 0 : e.length) && void 0 !== s ? s : 0) > 0 ? z.global_name : null !== (n = null == Q ? void 0 : Q.nick) && void 0 !== n ? n : [],
    es = (null !== (U = null === (t = z.bio) || void 0 === t ? void 0 : t.length) && void 0 !== U ? U : 0) > 0 ? z.bio : null !== (j = null == Q ? void 0 : Q.bio) && void 0 !== j ? j : [],
    ea = (0, M.useUserIsRecentGamesExperimentEnabled)({
      location: "28tk0bf_7",
      autoTrackExposure: !0
    }),
    en = (0, d.default)("user_profile"),
    el = (0, u.useCurrentUserAvailableClans)();
  return (0, a.jsxs)("div", {
    className: b.sectionsContainer,
    children: [(0, a.jsx)(f.default, {
      placeholder: B.username,
      errors: et,
      currentGlobalName: B.globalName,
      pendingGlobalName: H,
      onGlobalNameChange: r.setPendingGlobalNameName
    }), (0, a.jsx)(O.default, {
      sectionTitle: v.default.Messages.USER_SETTINGS_PRONOUNS,
      errors: z.pronouns,
      onPronounsChange: p.setPendingPronouns,
      pendingPronouns: Y,
      currentPronouns: null !== (F = null == y ? void 0 : y.pronouns) && void 0 !== F ? F : ""
    }, "pronouns"), (0, a.jsx)(I.default, {
      onAvatarChange: r.setPendingAvatar,
      showRemoveAvatarButton: X,
      errors: z.avatar,
      sectionTitle: v.default.Messages.USER_SETTINGS_AVATAR,
      forcedDivider: !0
    }, "avatar"), (0, a.jsx)(_.default, {
      user: B,
      sectionTitle: v.default.Messages.USER_SETTINGS_AVATAR_DECORATION
    }, "decoration"), (0, a.jsx)(h.default, {
      user: B,
      sectionTitle: v.default.Messages.USER_SETTINGS_PROFILE_EFFECT
    }, "effect"), q ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(N.default, {
        showRemoveBannerButton: Z,
        errors: z.banner,
        onBannerChange: p.setPendingBanner,
        forcedDivider: !0
      }, "banner"), (0, a.jsx)(C.default, {
        user: B,
        pendingAvatar: V,
        pendingColors: K,
        onThemeColorsChange: p.setPendingThemeColors,
        forcedDivider: !0
      })]
    }) : (0, a.jsx)(g.default, {
      user: B,
      savedUserColor: null == y ? void 0 : y.accentColor,
      pendingColor: W,
      setPendingAccentColor: p.setPendingAccentColor
    }, "color"), (0, a.jsx)(T.default, {
      sectionTitle: v.default.Messages.USER_SETTINGS_ABOUT_ME,
      errors: es,
      onBioChange: e => (0, E.setNewPendingUserBio)(e, null == y ? void 0 : y.bio),
      pendingBio: w,
      currentBio: null !== (G = null == y ? void 0 : y.bio) && void 0 !== G ? G : ""
    }, "bio"), en && el.length > 0 && (0, a.jsx)(c.default, {
      availableClans: el
    }), ea && (0, a.jsx)(A.default, {}), null != ee && (0, a.jsx)(m.default, {
      legacyUsername: ee
    }, "legacy_username")]
  })
}