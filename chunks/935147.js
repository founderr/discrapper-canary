t.d(s, {
  Z: function() {
    return B
  }
});
var n = t(735250),
  i = t(470079),
  a = t(442837),
  l = t(481060),
  r = t(809206),
  o = t(634894),
  c = t(100527),
  E = t(906732),
  d = t(588126),
  _ = t(175756),
  T = t(104494),
  S = t(639119),
  u = t(165583),
  I = t(197115),
  N = t(350327),
  A = t(318661),
  C = t(996073),
  O = t(25990),
  m = t(626135),
  h = t(74538),
  g = t(589266),
  R = t(296810),
  M = t(433411),
  x = t(532432),
  p = t(504983),
  D = t(134795),
  L = t(513901),
  P = t(451392),
  Z = t(981631),
  f = t(474936),
  v = t(526761),
  j = t(689938),
  U = t(460247);

function B(e) {
  var s, B, b;
  let {
    user: G
  } = e, {
    reducedMotion: F
  } = i.useContext(l.AccessibilityPreferencesContext), V = h.ZP.isPremium(G), {
    pendingAvatar: y,
    pendingBanner: Y,
    pendingThemeColors: H,
    pendingPronouns: k,
    pendingBio: w,
    tryItOutThemeColors: W,
    tryItOutAvatar: K,
    tryItOutBanner: z,
    tryItOutAvatarDecoration: Q,
    tryItOutProfileEffectId: X
  } = (0, a.cj)([O.Z], () => {
    let e = O.Z.getAllPending(),
      s = O.Z.getErrors(),
      t = O.Z.getAllTryItOut();
    return {
      ...e,
      ...t,
      errors: s
    }
  }), q = (0, d.Z)(Q), J = (0, _.Z)(X), $ = i.useRef(null);
  (0, C.Z)($, v.Y_.TRY_IT_OUT);
  let ee = (0, A.ZP)(G.id),
    es = null == ee ? void 0 : ee.getPreviewBio(w),
    {
      analyticsLocations: et,
      sourceAnalyticsLocations: en
    } = (0, E.ZP)(c.Z.USER_SETTINGS_TRY_OUT_PREMIUM);
  i.useEffect(() => {
    m.default.track(Z.rMx.PREMIUM_UPSELL_VIEWED, {
      type: f.cd.PREMIUM_PROFILE_TRY_IT_OUT,
      location: {
        page: Z.ZY5.USER_SETTINGS
      },
      location_stack: en
    })
  }, [en, G]);
  let ei = (null === (B = (0, S.N)()) || void 0 === B ? void 0 : null === (s = B.subscription_trial) || void 0 === s ? void 0 : s.sku_id) === f.Si.TIER_2,
    ea = (0, T.Ng)(),
    el = (0, T.Wp)(ea, f.Si.TIER_2),
    er = "TryOutPremiumSection";
  return (0, o.j)({
    location: er + " auto on",
    autoTrackExposure: !0
  }), (0, o.j)({
    location: er + " auto off",
    autoTrackExposure: !1
  }), (0, n.jsx)(E.Gt, {
    value: et,
    children: (0, n.jsxs)(p.Z, {
      ref: $,
      className: U.tryItOutSection,
      type: p.Y.PREMIUM,
      isShown: !0,
      hasBackground: !0,
      children: [(0, n.jsx)(R.Z, {
        layoutClassName: U.tryItOutLayout,
        previewTitle: (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(l.NitroWheelIcon, {
            size: "md",
            color: "currentColor",
            className: U.premiumIcon
          }), j.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_PREVIEW]
        }),
        profilePreview: (0, n.jsx)(g.Z, {
          location: "TryOutPremiumSection",
          user: G,
          onAvatarChange: N.c_,
          onBannerChange: N.f4,
          pendingPronouns: k,
          pendingBio: w,
          pendingBanner: null !== (b = null != z ? z : Y) && void 0 !== b ? b : t(466045),
          pendingAvatar: null != K ? K : y,
          pendingThemeColors: null != W ? W : H,
          pendingAvatarDecoration: q,
          pendingProfileEffectId: J,
          avatarClassName: null != K || null != y || F.enabled ? void 0 : U.spinningAvatar,
          canUsePremiumCustomization: !0,
          isTryItOutFlow: !0,
          hideExampleButton: !0,
          hideFakeActivity: !!(null == es ? void 0 : es.value)
        }),
        children: (0, n.jsxs)("div", {
          className: U.editor,
          children: [(0, n.jsxs)("div", {
            children: [(0, n.jsx)(l.Heading, {
              variant: "heading-xl/extrabold",
              children: j.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_HEADER
            }), (0, n.jsx)(l.Text, {
              className: U.description,
              variant: "text-sm/normal",
              children: j.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_DESCRIPTION
            })]
          }), (0, n.jsx)(P.Z, {
            className: U.customizationSection,
            user: G,
            pendingAvatar: null != K ? K : y,
            pendingColors: null != W ? W : H,
            onThemeColorsChange: N.rf,
            showPremiumIcon: !1,
            preventDisabled: !0
          }), (0, n.jsx)(D.Z, {
            className: U.customizationSection,
            isTryItOutFlow: !0,
            showRemoveBannerButton: null != z,
            onBannerChange: N.f4,
            showPremiumIcon: !1
          }), (0, n.jsx)(x.Z, {
            className: U.customizationSection,
            isTryItOutFlow: !0,
            onAvatarChange: N.c_,
            showRemoveAvatarButton: !1,
            changeAvatarButtonText: j.Z.Messages.USER_SETTINGS_ADD_ANIMATED_AVATAR,
            sectionTitle: j.Z.Messages.PREMIUM_TIER_0_FEATURE_AVATAR
          }), (0, n.jsx)(M.Z, {
            isTryItOutFlow: !0,
            className: U.customizationSection,
            user: G,
            sectionTitle: j.Z.Messages.USER_SETTINGS_AVATAR_DECORATION
          }, "decoration"), (0, n.jsx)(L.Z, {
            className: U.customizationSection,
            isTryItOutFlow: !0,
            initialSelectedEffectId: J,
            user: G,
            sectionTitle: j.Z.Messages.USER_SETTINGS_PROFILE_EFFECT
          }, "effect"), !ei && (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(l.Text, {
              variant: "text-sm/normal",
              className: U.premiumPerksListTitle,
              children: j.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_ALSO_INCLUDES
            }), (0, n.jsx)(I.Z, {
              onSubscribeModalClose: e => {
                e && ((0, r.I5)(K), (0, N.g_)(z), (0, N.z5)(W))
              },
              subscriptionTier: f.Si.TIER_2,
              className: U.premiumSubscribeButton,
              size: l.Button.Sizes.MEDIUM,
              buttonText: V ? j.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : el ? j.Z.Messages.PREMIUM_DISCOUNT_CTA.format({
                percent: null == ea ? void 0 : ea.discount.amount
              }) : j.Z.Messages.PREMIUM_UPSELL_GET_NITRO
            })]
          })]
        })
      }), ei && (0, n.jsxs)("div", {
        children: [(0, n.jsx)("div", {
          className: U.premiumTier2Divider
        }), (0, n.jsx)(u.ZP, {
          type: f.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL,
          subscriptionTier: f.Si.TIER_2
        })]
      })]
    })
  })
}