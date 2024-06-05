"use strict";
l.r(a), l.d(a, {
  default: function() {
    return b
  }
});
var t = l("735250");
l("470079");
var i = l("120356"),
  n = l.n(i),
  r = l("442837"),
  s = l("481060"),
  o = l("680295"),
  u = l("318661"),
  d = l("721987"),
  c = l("502762"),
  f = l("138394"),
  m = l("790711"),
  v = l("19836"),
  p = l("538564"),
  g = l("319300"),
  h = l("584045"),
  S = l("204197"),
  I = l("271383"),
  A = l("158776"),
  y = l("246946"),
  T = l("51144"),
  x = l("414666"),
  P = l("654904"),
  E = l("985425"),
  j = l("813454"),
  N = l("981631"),
  U = l("228168"),
  C = l("455108");

function b(e) {
  var a;
  let {
    user: l,
    guild: i,
    canUsePremiumCustomization: b,
    onUpsellClick: w,
    onBannerChange: M,
    pendingAccentColor: _,
    pendingBanner: k,
    pendingBio: B,
    pendingPronouns: R,
    pendingAvatar: O,
    pendingAvatarDecoration: z,
    pendingNickname: L,
    pendingGlobalName: F,
    pendingThemeColors: D,
    pendingProfileEffectId: G,
    avatarClassName: W,
    activityName: Z,
    activityCharacter: H,
    isTryItOutFlow: V = !1,
    disabledInputs: Y = !1,
    hideExampleButton: K = !1,
    hideFakeActivity: X = !1,
    hideBioSection: q = !1,
    forProfileEffectModal: J = !1,
    hideMemberStatusSection: Q = !0,
    bodyClassName: $
  } = e, ee = (0, r.useStateFromStores)([I.default], () => null == i ? null : I.default.getMember(i.id, l.id)), ea = (0, r.useStateFromStores)([A.default], () => A.default.findActivity(l.id, e => e.type === N.ActivityTypes.CUSTOM_STATUS)), el = (0, r.useStateFromStores)([y.default], () => y.default.hidePersonalInformation), et = (0, u.default)(l.id, null == i ? void 0 : i.id), {
    avatarSrc: ei,
    avatarDecorationSrc: en
  } = (0, S.default)({
    user: l,
    guildId: null == i ? void 0 : i.id,
    avatarDecorationOverride: z,
    avatarOverride: O,
    size: s.AvatarSizes.SIZE_80,
    showPending: !0
  }), er = null == et ? void 0 : et.getPreviewBanner(k, !1), es = (0, P.getPreviewProfileEffectId)({
    pendingProfileEffectId: G,
    displayProfile: et
  }), {
    theme: eo,
    primaryColor: eu
  } = (0, d.default)({
    user: l,
    displayProfile: et,
    pendingThemeColors: D,
    isPreview: b
  }), ed = null !== (a = (0, P.getPreviewNickname)(L, null == ee ? void 0 : ee.nick)) && void 0 !== a ? a : (0, P.getPreviewDisplayName)(F, T.default.getName(l));
  return (0, t.jsxs)(c.default, {
    user: l,
    displayProfile: et,
    profileType: U.UserProfileTypes.BITE_SIZE,
    pendingThemeColors: D,
    pendingProfileEffectId: es,
    className: n()(C.container, {
      [C.profileEffectPreview]: J
    }),
    forceShowPremium: b,
    children: [null != es && (0, t.jsx)(o.default, {
      profileEffectId: es
    }), (0, t.jsxs)(s.HeadingLevel, {
      children: [(0, t.jsx)(j.default, {
        displayProfile: et,
        canUsePremiumCustomization: b,
        previewAvatar: ei,
        previewBanner: er,
        previewPrimaryColor: eu,
        previewProfileEffectId: es,
        pendingAccentColor: _,
        isTryItOutFlow: V,
        disabledInputs: Y,
        forProfileEffectModal: J,
        onBannerChange: M,
        onUpsellClick: () => null == w ? void 0 : w({
          object: N.AnalyticsObjects.EDIT_PROFILE_BANNER
        })
      }), (0, t.jsx)(E.default, {
        user: l,
        guild: i,
        displayProfile: et,
        canUsePremiumCustomization: b,
        previewAvatar: ei,
        previewAvatarDecoration: en,
        previewTheme: eo,
        previewPrimaryColor: eu,
        className: W,
        disabledInputs: Y,
        isTryItOutFlow: V,
        onUpsellClick: () => null == w ? void 0 : w({
          object: N.AnalyticsObjects.AVATAR
        })
      }), function() {
        let e = null == et ? void 0 : et.getPreviewBio(B);
        return (0, t.jsxs)(c.default.Overlay, {
          className: n()(C.body, $),
          children: [(0, t.jsx)(h.default, {
            isTryItOut: V,
            user: l,
            nickname: null != ed ? ed : l.username,
            pronouns: null != R ? R : null == et ? void 0 : et.pronouns,
            usernameIcon: (() => {
              if (!!(null != ee) && null !== O) {
                if (!(null == ee.avatar && null == O)) return (0, t.jsx)(m.default, {
                  user: l,
                  nickname: ed
                })
              }
            })()
          }), !J && (0, t.jsx)(p.default, {
            customStatusActivity: ea
          }), (0, t.jsx)(f.default, {}), !q && (0, t.jsx)(v.default, {
            isUsingGuildBio: null == e ? void 0 : e.isUsingGuildValue,
            guild: i,
            bio: null == e ? void 0 : e.value,
            hidePersonalInformation: el,
            lastSection: X,
            lineClamp: J ? 3 : void 0
          }), !Q && (0, t.jsx)(g.default, {
            userId: l.id,
            guildId: null == i ? void 0 : i.id
          }), !X && (0, t.jsx)(x.default, {
            activityName: Z,
            activityCharacter: H,
            showExampleButton: null == i && !K
          })]
        })
      }()]
    })]
  })
}