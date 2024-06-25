t.d(s, {
  Z: function() {
    return U
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
  A = t(996073),
  C = t(25990),
  O = t(626135),
  m = t(74538),
  h = t(296810),
  g = t(25373),
  R = t(433411),
  M = t(532432),
  x = t(504983),
  D = t(134795),
  p = t(513901),
  L = t(451392),
  P = t(981631),
  Z = t(474936),
  f = t(526761),
  v = t(689938),
  j = t(460247);

function U(e) {
  var s, U, B;
  let {
    user: b
  } = e, {
    reducedMotion: G
  } = i.useContext(l.AccessibilityPreferencesContext), F = m.ZP.isPremium(b), {
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
  } = (0, a.cj)([C.Z], () => {
    let e = C.Z.getAllPending(),
      s = C.Z.getErrors(),
      t = C.Z.getAllTryItOut();
    return {
      ...e,
      ...t,
      errors: s
    }
  }), X = (0, d.Z)(z), q = (0, _.Z)(Q), J = i.useRef(null);
  (0, A.Z)(J, f.Y_.TRY_IT_OUT);
  let {
    analyticsLocations: $,
    sourceAnalyticsLocations: ee
  } = (0, E.ZP)(c.Z.USER_SETTINGS_TRY_OUT_PREMIUM);
  i.useEffect(() => {
    O.default.track(P.rMx.PREMIUM_UPSELL_VIEWED, {
      type: Z.cd.PREMIUM_PROFILE_TRY_IT_OUT,
      location: {
        page: P.ZY5.USER_SETTINGS
      },
      location_stack: ee
    })
  }, [ee, b]);
  let es = (null === (U = (0, S.N)()) || void 0 === U ? void 0 : null === (s = U.subscription_trial) || void 0 === s ? void 0 : s.sku_id) === Z.Si.TIER_2,
    et = (0, T.Ng)(),
    en = (0, T.Wp)(et, Z.Si.TIER_2),
    ei = "TryOutPremiumSection";
  return (0, o.j)({
    location: ei + " auto on",
    autoTrackExposure: !0
  }), (0, o.j)({
    location: ei + " auto off",
    autoTrackExposure: !1
  }), (0, n.jsx)(E.Gt, {
    value: $,
    children: (0, n.jsxs)(x.Z, {
      ref: J,
      className: j.tryItOutSection,
      type: x.Y.PREMIUM,
      isShown: !0,
      hasBackground: !0,
      children: [(0, n.jsx)(h.Z, {
        layoutClassName: j.tryItOutLayout,
        previewTitle: (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(l.NitroWheelIcon, {
            size: "md",
            color: "currentColor",
            className: j.premiumIcon
          }), v.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_PREVIEW]
        }),
        profilePreview: (0, n.jsx)(g.Z, {
          user: b,
          pendingPronouns: H,
          pendingBio: k,
          pendingBanner: null !== (B = null != K ? K : y) && void 0 !== B ? B : t(466045),
          pendingAvatar: null != W ? W : V,
          pendingThemeColors: null != w ? w : Y,
          pendingAvatarDecoration: X,
          pendingProfileEffectId: q,
          avatarClassName: null != W || null != V || G.enabled ? void 0 : j.spinningAvatar,
          canUsePremiumCustomization: !0,
          isTryItOutFlow: !0,
          hideExampleButton: !0
        }),
        children: (0, n.jsxs)("div", {
          className: j.editor,
          children: [(0, n.jsxs)("div", {
            children: [(0, n.jsx)(l.Heading, {
              variant: "heading-xl/extrabold",
              children: v.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_HEADER
            }), (0, n.jsx)(l.Text, {
              className: j.description,
              variant: "text-sm/normal",
              children: v.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_DESCRIPTION
            })]
          }), (0, n.jsx)(L.Z, {
            className: j.customizationSection,
            user: b,
            pendingAvatar: null != W ? W : V,
            pendingColors: null != w ? w : Y,
            onThemeColorsChange: N.rf,
            showPremiumIcon: !1,
            preventDisabled: !0
          }), (0, n.jsx)(D.Z, {
            className: j.customizationSection,
            isTryItOutFlow: !0,
            showRemoveBannerButton: null != K,
            onBannerChange: N.f4,
            showPremiumIcon: !1
          }), (0, n.jsx)(M.Z, {
            className: j.customizationSection,
            isTryItOutFlow: !0,
            onAvatarChange: N.c_,
            showRemoveAvatarButton: !1,
            changeAvatarButtonText: v.Z.Messages.USER_SETTINGS_ADD_ANIMATED_AVATAR,
            sectionTitle: v.Z.Messages.PREMIUM_TIER_0_FEATURE_AVATAR
          }), (0, n.jsx)(R.Z, {
            isTryItOutFlow: !0,
            className: j.customizationSection,
            user: b,
            sectionTitle: v.Z.Messages.USER_SETTINGS_AVATAR_DECORATION
          }, "decoration"), (0, n.jsx)(p.Z, {
            className: j.customizationSection,
            isTryItOutFlow: !0,
            initialSelectedEffectId: q,
            user: b,
            sectionTitle: v.Z.Messages.USER_SETTINGS_PROFILE_EFFECT
          }, "effect"), !es && (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(l.Text, {
              variant: "text-sm/normal",
              className: j.premiumPerksListTitle,
              children: v.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_ALSO_INCLUDES
            }), (0, n.jsx)(I.Z, {
              onSubscribeModalClose: e => {
                e && ((0, r.I5)(W), (0, N.g_)(K), (0, N.z5)(w))
              },
              subscriptionTier: Z.Si.TIER_2,
              className: j.premiumSubscribeButton,
              size: l.Button.Sizes.MEDIUM,
              buttonText: F ? v.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : en ? v.Z.Messages.PREMIUM_DISCOUNT_CTA.format({
                percent: null == et ? void 0 : et.discount.amount
              }) : v.Z.Messages.PREMIUM_UPSELL_GET_NITRO
            })]
          })]
        })
      }), es && (0, n.jsxs)("div", {
        children: [(0, n.jsx)("div", {
          className: j.premiumTier2Divider
        }), (0, n.jsx)(u.ZP, {
          type: Z.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL,
          subscriptionTier: Z.Si.TIER_2
        })]
      })]
    })
  })
}