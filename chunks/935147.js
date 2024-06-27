t.d(s, {
  Z: function() {
    return j
  }
});
var n = t(735250),
  a = t(470079),
  i = t(442837),
  r = t(481060),
  o = t(809206),
  l = t(634894),
  c = t(100527),
  d = t(906732),
  _ = t(588126),
  E = t(175756),
  u = t(104494),
  T = t(639119),
  S = t(165583),
  I = t(197115),
  N = t(350327),
  C = t(996073),
  m = t(25990),
  A = t(626135),
  g = t(74538),
  O = t(296810),
  h = t(921813),
  p = t(433411),
  R = t(532432),
  x = t(504983),
  M = t(134795),
  D = t(513901),
  f = t(451392),
  L = t(981631),
  P = t(474936),
  Z = t(526761),
  v = t(689938),
  b = t(460247);

function j(e) {
  var s, j, B;
  let {
    user: U
  } = e, {
    reducedMotion: G
  } = a.useContext(r.AccessibilityPreferencesContext), F = g.ZP.isPremium(U), {
    pendingAvatar: V,
    pendingBanner: y,
    pendingThemeColors: Y,
    pendingPronouns: H,
    pendingBio: k,
    tryItOutThemeColors: w,
    tryItOutAvatar: W,
    tryItOutBanner: K,
    tryItOutAvatarDecoration: z,
    tryItOutProfileEffectId: Q
  } = (0, i.cj)([m.Z], () => {
    let e = m.Z.getAllPending(),
      s = m.Z.getErrors(),
      t = m.Z.getAllTryItOut();
    return {
      ...e,
      ...t,
      errors: s
    }
  }), X = (0, _.Z)(z), q = (0, E.Z)(Q), J = a.useRef(null);
  (0, C.Z)(J, Z.Y_.TRY_IT_OUT);
  let {
    analyticsLocations: $,
    sourceAnalyticsLocations: ee
  } = (0, d.ZP)(c.Z.USER_SETTINGS_TRY_OUT_PREMIUM);
  a.useEffect(() => {
    A.default.track(L.rMx.PREMIUM_UPSELL_VIEWED, {
      type: P.cd.PREMIUM_PROFILE_TRY_IT_OUT,
      location: {
        page: L.ZY5.USER_SETTINGS
      },
      location_stack: ee
    })
  }, [ee, U]);
  let es = (null === (j = (0, T.N)()) || void 0 === j ? void 0 : null === (s = j.subscription_trial) || void 0 === s ? void 0 : s.sku_id) === P.Si.TIER_2,
    et = (0, u.Ng)(),
    en = (0, u.Wp)(et, P.Si.TIER_2),
    ea = "TryOutPremiumSection";
  return (0, l.j)({
    location: ea + " auto on",
    autoTrackExposure: !0
  }), (0, l.j)({
    location: ea + " auto off",
    autoTrackExposure: !1
  }), (0, n.jsx)(d.Gt, {
    value: $,
    children: (0, n.jsxs)(x.Z, {
      ref: J,
      className: b.tryItOutSection,
      type: x.Y.PREMIUM,
      isShown: !0,
      hasBackground: !0,
      children: [(0, n.jsx)(O.Z, {
        layoutClassName: b.tryItOutLayout,
        previewTitle: (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(r.NitroWheelIcon, {
            size: "md",
            color: "currentColor",
            className: b.premiumIcon
          }), v.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_PREVIEW]
        }),
        profilePreview: (0, n.jsx)(h.Z, {
          user: U,
          pendingPronouns: H,
          pendingBio: k,
          pendingBanner: null !== (B = null != K ? K : y) && void 0 !== B ? B : t(466045),
          pendingAvatar: null != W ? W : V,
          pendingThemeColors: null != w ? w : Y,
          pendingAvatarDecoration: X,
          pendingProfileEffectId: q,
          avatarClassName: null != W || null != V || G.enabled ? void 0 : b.spinningAvatar,
          canUsePremiumCustomization: !0,
          isTryItOutFlow: !0,
          hideExampleButton: !0
        }),
        children: (0, n.jsxs)("div", {
          className: b.editor,
          children: [(0, n.jsxs)("div", {
            children: [(0, n.jsx)(r.Heading, {
              variant: "heading-xl/extrabold",
              children: v.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_HEADER
            }), (0, n.jsx)(r.Text, {
              className: b.description,
              variant: "text-sm/normal",
              children: v.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_DESCRIPTION
            })]
          }), (0, n.jsx)(f.Z, {
            className: b.customizationSection,
            user: U,
            pendingAvatar: null != W ? W : V,
            pendingColors: null != w ? w : Y,
            onThemeColorsChange: N.rf,
            showPremiumIcon: !1,
            preventDisabled: !0
          }), (0, n.jsx)(M.Z, {
            className: b.customizationSection,
            isTryItOutFlow: !0,
            showRemoveBannerButton: null != K,
            onBannerChange: N.f4,
            showPremiumIcon: !1
          }), (0, n.jsx)(R.Z, {
            className: b.customizationSection,
            isTryItOutFlow: !0,
            onAvatarChange: N.c_,
            showRemoveAvatarButton: !1,
            changeAvatarButtonText: v.Z.Messages.USER_SETTINGS_ADD_ANIMATED_AVATAR,
            sectionTitle: v.Z.Messages.PREMIUM_TIER_0_FEATURE_AVATAR
          }), (0, n.jsx)(p.Z, {
            isTryItOutFlow: !0,
            className: b.customizationSection,
            user: U,
            sectionTitle: v.Z.Messages.USER_SETTINGS_AVATAR_DECORATION
          }, "decoration"), (0, n.jsx)(D.Z, {
            className: b.customizationSection,
            isTryItOutFlow: !0,
            initialSelectedEffectId: q,
            user: U,
            sectionTitle: v.Z.Messages.USER_SETTINGS_PROFILE_EFFECT
          }, "effect"), !es && (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(r.Text, {
              variant: "text-sm/normal",
              className: b.premiumPerksListTitle,
              children: v.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_ALSO_INCLUDES
            }), (0, n.jsx)(I.Z, {
              onSubscribeModalClose: e => {
                e && ((0, o.I5)(W), (0, N.g_)(K), (0, N.z5)(w))
              },
              subscriptionTier: P.Si.TIER_2,
              className: b.premiumSubscribeButton,
              size: r.Button.Sizes.MEDIUM,
              buttonText: F ? v.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : en ? v.Z.Messages.PREMIUM_DISCOUNT_CTA.format({
                percent: null == et ? void 0 : et.discount.amount
              }) : v.Z.Messages.PREMIUM_UPSELL_GET_NITRO
            })]
          })]
        })
      }), es && (0, n.jsxs)("div", {
        children: [(0, n.jsx)("div", {
          className: b.premiumTier2Divider
        }), (0, n.jsx)(S.ZP, {
          type: P.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL,
          subscriptionTier: P.Si.TIER_2
        })]
      })]
    })
  })
}