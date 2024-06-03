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
  d = s("954138"),
  u = s("891728"),
  c = s("328783"),
  S = s("295474"),
  E = s("150039"),
  T = s("126631"),
  _ = s("433411"),
  f = s("532432"),
  m = s("349177"),
  g = s("872736"),
  I = s("134795"),
  N = s("610966"),
  h = s("513901"),
  C = s("451392"),
  A = s("906364"),
  p = s("676934"),
  O = s("350327"),
  R = s("621853"),
  x = s("318661"),
  M = s("619914"),
  v = s("25990"),
  L = s("594174"),
  D = s("74538"),
  P = s("689938"),
  b = s("741129");

function j() {
  var e, t, s, n, j, U, y, G;
  let F = (0, i.useStateFromStores)([L.default], () => {
      let e = L.default.getCurrentUser();
      return l()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e
    }),
    B = (0, i.useStateFromStores)([R.default], () => R.default.getUserProfile(F.id)),
    {
      pendingAvatar: k,
      pendingGlobalName: H,
      pendingBanner: w,
      pendingBio: Y,
      pendingPronouns: V,
      pendingAccentColor: W,
      pendingThemeColors: K,
      errors: z
    } = (0, i.useStateFromStoresObject)([v.default], () => {
      let e = v.default.getAllPending(),
        t = v.default.getErrors();
      return {
        ...e,
        errors: t
      }
    }),
    Q = (0, S.useGuildAutomodProfileQuarantineErrors)(),
    q = D.default.canUsePremiumProfileCustomization(F),
    Z = (0, E.showRemoveAvatar)(k, F.avatar),
    X = (0, E.showRemoveBanner)(w, null == B ? void 0 : B.banner),
    J = "DefaultCustomizationSections";
  (0, o.useTriggerDebuggingAA)({
    location: J + " auto on",
    autoTrackExposure: !0
  }), (0, o.useTriggerDebuggingAA)({
    location: J + " auto off",
    autoTrackExposure: !1
  });
  let $ = (0, x.default)(F.id),
    ee = null == $ ? void 0 : $.getLegacyUsername(),
    et = (null !== (s = null === (e = z.global_name) || void 0 === e ? void 0 : e.length) && void 0 !== s ? s : 0) > 0 ? z.global_name : null !== (n = null == Q ? void 0 : Q.nick) && void 0 !== n ? n : [],
    es = (null !== (j = null === (t = z.bio) || void 0 === t ? void 0 : t.length) && void 0 !== j ? j : 0) > 0 ? z.bio : null !== (U = null == Q ? void 0 : Q.bio) && void 0 !== U ? U : [],
    ea = (0, M.useUserIsRecentGamesExperimentEnabled)({
      location: "28tk0bf_7",
      autoTrackExposure: !0
    }),
    en = (0, d.default)("user_profile"),
    el = (0, u.useCurrentUserAvailableClans)();
  return (0, a.jsxs)("div", {
    className: b.sectionsContainer,
    children: [(0, a.jsx)(m.default, {
      placeholder: F.username,
      errors: et,
      currentGlobalName: F.globalName,
      pendingGlobalName: H,
      onGlobalNameChange: r.setPendingGlobalNameName
    }), (0, a.jsx)(A.default, {
      sectionTitle: P.default.Messages.USER_SETTINGS_PRONOUNS,
      errors: z.pronouns,
      onPronounsChange: O.setPendingPronouns,
      pendingPronouns: V,
      currentPronouns: null !== (y = null == B ? void 0 : B.pronouns) && void 0 !== y ? y : ""
    }, "pronouns"), (0, a.jsx)(f.default, {
      onAvatarChange: r.setPendingAvatar,
      showRemoveAvatarButton: Z,
      errors: z.avatar,
      sectionTitle: P.default.Messages.USER_SETTINGS_AVATAR,
      forcedDivider: !0
    }, "avatar"), (0, a.jsx)(_.default, {
      user: F,
      sectionTitle: P.default.Messages.USER_SETTINGS_AVATAR_DECORATION
    }, "decoration"), (0, a.jsx)(h.default, {
      user: F,
      sectionTitle: P.default.Messages.USER_SETTINGS_PROFILE_EFFECT
    }, "effect"), q ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(I.default, {
        showRemoveBannerButton: X,
        errors: z.banner,
        onBannerChange: O.setPendingBanner,
        forcedDivider: !0
      }, "banner"), (0, a.jsx)(C.default, {
        user: F,
        pendingAvatar: k,
        pendingColors: K,
        onThemeColorsChange: O.setPendingThemeColors,
        forcedDivider: !0
      })]
    }) : (0, a.jsx)(N.default, {
      user: F,
      savedUserColor: null == B ? void 0 : B.accentColor,
      pendingColor: W,
      setPendingAccentColor: O.setPendingAccentColor
    }, "color"), (0, a.jsx)(T.default, {
      sectionTitle: P.default.Messages.USER_SETTINGS_ABOUT_ME,
      errors: es,
      onBioChange: e => (0, E.setNewPendingUserBio)(e, null == B ? void 0 : B.bio),
      pendingBio: Y,
      currentBio: null !== (G = null == B ? void 0 : B.bio) && void 0 !== G ? G : ""
    }, "bio"), en && el.length > 0 && (0, a.jsx)(c.default, {
      availableClans: el
    }), ea && (0, a.jsx)(p.default, {}), null != ee && (0, a.jsx)(g.default, {
      legacyUsername: ee
    }, "legacy_username")]
  })
}