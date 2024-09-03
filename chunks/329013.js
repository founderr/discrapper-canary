t.d(s, {
    g: function () {
        return P;
    },
    i: function () {
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
    u = t(238302),
    _ = t(514361),
    E = t(705262),
    T = t(605236),
    I = t(104494),
    S = t(639119),
    N = t(311476),
    m = t(165583),
    C = t(197115),
    g = t(504983),
    A = t(626135),
    h = t(981631),
    O = t(921944),
    p = t(474936),
    R = t(689938),
    x = t(582889),
    f = t(224499);
let M = () => {
        (0, T.EW)(r.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
            dismissAction: O.L.PRIMARY,
            forceTrack: !0
        }),
            (0, u.Kq)(),
            (0, l.xf)();
    },
    D = () => {
        var e, s;
        let { analyticsLocations: t } = (0, d.ZP)(c.Z.USER_SETTINGS),
            r = (0, i.e7)([_.Z], () => _.Z.isPreview),
            l = (null === (s = (0, S.N)()) || void 0 === s ? void 0 : null === (e = s.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === p.Si.TIER_2,
            u = (0, I.Ng)(),
            T = (0, I.Wp)(u, p.Si.TIER_2),
            O = !r || l,
            { enabled: D } = N.Z.getCurrentConfig(
                { location: 'UserSettingsAppearanceClientThemes' },
                {
                    autoTrackExposure: !O,
                    disable: O
                }
            ),
            P = () =>
                !r || l
                    ? null
                    : (0, n.jsxs)('div', {
                          className: x.tryItOutButtons,
                          children: [
                              (0, n.jsx)(o.Button, {
                                  color: D ? o.Button.Colors.BRAND : o.Button.Colors.PRIMARY,
                                  onClick: () => M(),
                                  children: D ? R.Z.Messages.PREVIEW : R.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_THEME_TITLE
                              }),
                              (0, n.jsx)(C.Z, {
                                  showGradient: D,
                                  subscriptionTier: p.Si.TIER_2,
                                  buttonText: D ? R.Z.Messages.PREMIUM_UPSELL_GET_NITRO : T ? R.Z.Messages.PREMIUM_DISCOUNT_CTA.format({ percent: null == u ? void 0 : u.discount.amount }) : R.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                                  className: x.premiumCta
                              })
                          ]
                      });
        return (
            a.useEffect(() => {
                r &&
                    A.default.track(h.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: p.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                        location_stack: t
                    });
            }, [r, t]),
            (0, n.jsxs)('div', {
                children: [
                    (0, n.jsx)(E.ZP, {
                        type: E.yH.SETTINGS,
                        children: D
                            ? (0, n.jsx)(E.ZP.BasicAndGradient, {
                                  className: x.basicThemeSelectors,
                                  renderCTAButtons: P
                              })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(E.ZP.Basic, { className: x.basicThemeSelectors }),
                                      (0, n.jsxs)(g.Z, {
                                          className: x.featureBorder,
                                          isShown: r,
                                          type: g.Y.PREMIUM,
                                          children: [
                                              (0, n.jsx)(E.ZP.Gradient, {
                                                  disabled: r,
                                                  renderCTAButtons: P
                                              }),
                                              l &&
                                                  r &&
                                                  (0, n.jsxs)('div', {
                                                      children: [
                                                          (0, n.jsx)(o.Button, {
                                                              className: x.previewThemeButtonWide,
                                                              color: o.Button.Colors.PRIMARY,
                                                              onClick: () => M(),
                                                              children: R.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_THEME_TITLE
                                                          }),
                                                          (0, n.jsx)('div', { className: x.premiumTier2Divider }),
                                                          (0, n.jsx)(m.ZP, {
                                                              type: p.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
                                                              subscriptionTier: p.Si.TIER_2
                                                          })
                                                      ]
                                                  })
                                          ]
                                      })
                                  ]
                              })
                    }),
                    (0, n.jsx)(o.FormDivider, { className: f.marginTop20 })
                ]
            })
        );
    },
    P = () =>
        (0, i.e7)([_.Z], () => _.Z.isPreview)
            ? null
            : (0, n.jsx)(o.Button, {
                  size: o.ButtonSizes.SMALL,
                  onClick: () => M(),
                  children: R.Z.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_THEMES_TITLE
              });
