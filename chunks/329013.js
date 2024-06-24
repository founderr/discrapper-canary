t.d(s, {
  g: function() {
    return L
  },
  i: function() {
    return D
  }
});
var n = t(735250),
  i = t(470079),
  a = t(442837),
  l = t(704215),
  r = t(481060),
  o = t(37234),
  c = t(100527),
  E = t(906732),
  d = t(238302),
  _ = t(514361),
  T = t(705262),
  S = t(605236),
  u = t(104494),
  I = t(639119),
  N = t(165583),
  A = t(197115),
  C = t(504983),
  O = t(626135),
  m = t(981631),
  h = t(921944),
  g = t(474936),
  R = t(689938),
  M = t(610275),
  x = t(331651);
let p = () => {
    (0, S.EW)(l.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
      dismissAction: h.L.PRIMARY,
      forceTrack: !0
    }), (0, d.bM)(), (0, o.xf)()
  },
  D = () => {
    var e, s;
    let {
      analyticsLocations: t
    } = (0, E.ZP)(c.Z.USER_SETTINGS), l = (0, a.e7)([_.Z], () => _.Z.isPreview), o = (null === (s = (0, I.N)()) || void 0 === s ? void 0 : null === (e = s.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === g.Si.TIER_2, d = (0, u.Ng)(), S = (0, u.Wp)(d, g.Si.TIER_2);
    return i.useEffect(() => {
      l && O.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
        type: g.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
        location_stack: t
      })
    }, [l, t]), (0, n.jsxs)("div", {
      children: [(0, n.jsxs)(T.ZP, {
        type: T.yH.SETTINGS,
        children: [(0, n.jsx)(T.ZP.Basic, {
          className: M.basicThemeSelectors
        }), (0, n.jsxs)(C.Z, {
          className: M.featureBorder,
          isShown: l,
          type: C.Y.PREMIUM,
          children: [(0, n.jsx)(T.ZP.Gradient, {
            disabled: l,
            renderCTAButtons: () => !l || o ? null : (0, n.jsxs)("div", {
              className: M.tryItOutButtons,
              children: [(0, n.jsx)(r.Button, {
                color: r.Button.Colors.PRIMARY,
                onClick: () => p(),
                children: R.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_THEME_TITLE
              }), (0, n.jsx)(A.Z, {
                subscriptionTier: g.Si.TIER_2,
                buttonText: S ? R.Z.Messages.PREMIUM_DISCOUNT_CTA.format({
                  percent: null == d ? void 0 : d.discount.amount
                }) : R.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                className: M.premiumCta
              })]
            })
          }), o && l && (0, n.jsxs)("div", {
            children: [(0, n.jsx)(r.Button, {
              className: M.previewThemeButtonWide,
              color: r.Button.Colors.PRIMARY,
              onClick: () => p(),
              children: R.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_THEME_TITLE
            }), (0, n.jsx)("div", {
              className: M.premiumTier2Divider
            }), (0, n.jsx)(N.ZP, {
              type: g.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
              subscriptionTier: g.Si.TIER_2
            })]
          })]
        })]
      }), (0, n.jsx)(r.FormDivider, {
        className: x.marginTop20
      })]
    })
  },
  L = () => (0, a.e7)([_.Z], () => _.Z.isPreview) ? null : (0, n.jsx)(r.Button, {
    size: r.ButtonSizes.SMALL,
    onClick: () => p(),
    children: R.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_THEMES_TITLE
  })