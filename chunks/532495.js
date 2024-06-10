"use strict";
s.r(t), s.d(t, {
  default: function() {
    return b
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
  N = s("349177"),
  g = s("872736"),
  f = s("134795"),
  m = s("610966"),
  C = s("513901"),
  A = s("451392"),
  h = s("906364"),
  O = s("350327"),
  p = s("621853"),
  R = s("318661"),
  M = s("25990"),
  x = s("594174"),
  D = s("74538"),
  L = s("689938"),
  P = s("741129");

function b() {
  var e, t, s, n, b, v, U, j;
  let G = (0, i.useStateFromStores)([x.default], () => {
      let e = x.default.getCurrentUser();
      return l()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e
    }),
    F = (0, i.useStateFromStores)([p.default], () => p.default.getUserProfile(G.id)),
    {
      pendingAvatar: B,
      pendingGlobalName: y,
      pendingBanner: V,
      pendingBio: H,
      pendingPronouns: Y,
      pendingAccentColor: k,
      pendingThemeColors: w,
      errors: W
    } = (0, i.useStateFromStoresObject)([M.default], () => {
      let e = M.default.getAllPending(),
        t = M.default.getErrors();
      return {
        ...e,
        errors: t
      }
    }),
    K = (0, S.useGuildAutomodProfileQuarantineErrors)(),
    z = D.default.canUsePremiumProfileCustomization(G),
    Q = (0, E.showRemoveAvatar)(B, G.avatar),
    q = (0, E.showRemoveBanner)(V, null == F ? void 0 : F.banner),
    X = "DefaultCustomizationSections";
  (0, o.useTriggerDebuggingAA)({
    location: X + " auto on",
    autoTrackExposure: !0
  }), (0, o.useTriggerDebuggingAA)({
    location: X + " auto off",
    autoTrackExposure: !1
  });
  let Z = (0, R.default)(G.id),
    J = null == Z ? void 0 : Z.getLegacyUsername(),
    $ = (null !== (s = null === (e = W.global_name) || void 0 === e ? void 0 : e.length) && void 0 !== s ? s : 0) > 0 ? W.global_name : null !== (n = null == K ? void 0 : K.nick) && void 0 !== n ? n : [],
    ee = (null !== (b = null === (t = W.bio) || void 0 === t ? void 0 : t.length) && void 0 !== b ? b : 0) > 0 ? W.bio : null !== (v = null == K ? void 0 : K.bio) && void 0 !== v ? v : [],
    et = (0, d.default)("user_profile"),
    es = (0, u.useCurrentUserAvailableClans)();
  return (0, a.jsxs)("div", {
    className: P.sectionsContainer,
    children: [(0, a.jsx)(N.default, {
      placeholder: G.username,
      errors: $,
      currentGlobalName: G.globalName,
      pendingGlobalName: y,
      onGlobalNameChange: r.setPendingGlobalNameName
    }), (0, a.jsx)(h.default, {
      sectionTitle: L.default.Messages.USER_SETTINGS_PRONOUNS,
      errors: W.pronouns,
      onPronounsChange: O.setPendingPronouns,
      pendingPronouns: Y,
      currentPronouns: null !== (U = null == F ? void 0 : F.pronouns) && void 0 !== U ? U : ""
    }, "pronouns"), (0, a.jsx)(I.default, {
      onAvatarChange: r.setPendingAvatar,
      showRemoveAvatarButton: Q,
      errors: W.avatar,
      sectionTitle: L.default.Messages.USER_SETTINGS_AVATAR,
      forcedDivider: !0
    }, "avatar"), (0, a.jsx)(_.default, {
      user: G,
      sectionTitle: L.default.Messages.USER_SETTINGS_AVATAR_DECORATION
    }, "decoration"), (0, a.jsx)(C.default, {
      user: G,
      sectionTitle: L.default.Messages.USER_SETTINGS_PROFILE_EFFECT
    }, "effect"), z ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(f.default, {
        showRemoveBannerButton: q,
        errors: W.banner,
        onBannerChange: O.setPendingBanner,
        forcedDivider: !0
      }, "banner"), (0, a.jsx)(A.default, {
        user: G,
        pendingAvatar: B,
        pendingColors: w,
        onThemeColorsChange: O.setPendingThemeColors,
        forcedDivider: !0
      })]
    }) : (0, a.jsx)(m.default, {
      user: G,
      savedUserColor: null == F ? void 0 : F.accentColor,
      pendingColor: k,
      setPendingAccentColor: O.setPendingAccentColor
    }, "color"), (0, a.jsx)(T.default, {
      sectionTitle: L.default.Messages.USER_SETTINGS_ABOUT_ME,
      errors: ee,
      onBioChange: e => (0, E.setNewPendingUserBio)(e, null == F ? void 0 : F.bio),
      pendingBio: H,
      currentBio: null !== (j = null == F ? void 0 : F.bio) && void 0 !== j ? j : ""
    }, "bio"), et && es.length > 0 && (0, a.jsx)(c.default, {
      availableClans: es
    }), null != J && (0, a.jsx)(g.default, {
      legacyUsername: J
    }, "legacy_username")]
  })
}