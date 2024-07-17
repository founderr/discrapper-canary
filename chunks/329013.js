t.d(s, {
  g: function() {
return f;
  },
  i: function() {
return D;
  }
});
var n = t(735250),
  a = t(470079),
  i = t(442837),
  r = t(704215),
  o = t(481060),
  l = t(37234),
  c = t(100527),
  d = t(906732),
  _ = t(238302),
  E = t(514361),
  u = t(705262),
  T = t(605236),
  I = t(104494),
  S = t(639119),
  N = t(165583),
  C = t(197115),
  m = t(504983),
  A = t(626135),
  h = t(981631),
  g = t(921944),
  O = t(474936),
  p = t(689938),
  R = t(823749),
  x = t(549856);
let M = () => {
(0, T.EW)(r.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
  dismissAction: g.L.PRIMARY,
  forceTrack: !0
}), (0, _.bM)(), (0, l.xf)();
  },
  D = () => {
var e, s;
let {
  analyticsLocations: t
} = (0, d.ZP)(c.Z.USER_SETTINGS), r = (0, i.e7)([E.Z], () => E.Z.isPreview), l = (null === (s = (0, S.N)()) || void 0 === s ? void 0 : null === (e = s.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === O.Si.TIER_2, _ = (0, I.Ng)(), T = (0, I.Wp)(_, O.Si.TIER_2);
return a.useEffect(() => {
  r && A.default.track(h.rMx.PREMIUM_UPSELL_VIEWED, {
    type: O.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
    location_stack: t
  });
}, [
  r,
  t
]), (0, n.jsxs)('div', {
  children: [
    (0, n.jsxs)(u.ZP, {
      type: u.yH.SETTINGS,
      children: [
        (0, n.jsx)(u.ZP.Basic, {
          className: R.basicThemeSelectors
        }),
        (0, n.jsxs)(m.Z, {
          className: R.featureBorder,
          isShown: r,
          type: m.Y.PREMIUM,
          children: [
            (0, n.jsx)(u.ZP.Gradient, {
              disabled: r,
              renderCTAButtons: () => !r || l ? null : (0, n.jsxs)('div', {
                className: R.tryItOutButtons,
                children: [
                  (0, n.jsx)(o.Button, {
                    color: o.Button.Colors.PRIMARY,
                    onClick: () => M(),
                    children: p.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_THEME_TITLE
                  }),
                  (0, n.jsx)(C.Z, {
                    subscriptionTier: O.Si.TIER_2,
                    buttonText: T ? p.Z.Messages.PREMIUM_DISCOUNT_CTA.format({
                      percent: null == _ ? void 0 : _.discount.amount
                    }) : p.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                    className: R.premiumCta
                  })
                ]
              })
            }),
            l && r && (0, n.jsxs)('div', {
              children: [
                (0, n.jsx)(o.Button, {
                  className: R.previewThemeButtonWide,
                  color: o.Button.Colors.PRIMARY,
                  onClick: () => M(),
                  children: p.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_THEME_TITLE
                }),
                (0, n.jsx)('div', {
                  className: R.premiumTier2Divider
                }),
                (0, n.jsx)(N.ZP, {
                  type: O.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
                  subscriptionTier: O.Si.TIER_2
                })
              ]
            })
          ]
        })
      ]
    }),
    (0, n.jsx)(o.FormDivider, {
      className: x.marginTop20
    })
  ]
});
  },
  f = () => (0, i.e7)([E.Z], () => E.Z.isPreview) ? null : (0, n.jsx)(o.Button, {
size: o.ButtonSizes.SMALL,
onClick: () => M(),
children: p.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_THEMES_TITLE
  });