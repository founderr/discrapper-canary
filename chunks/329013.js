n.d(t, {
    g: function () {
        return R;
    },
    i: function () {
        return O;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(704215),
    a = n(481060),
    o = n(37234),
    c = n(100527),
    d = n(906732),
    u = n(238302),
    m = n(514361),
    h = n(705262),
    g = n(605236),
    p = n(104494),
    x = n(639119),
    S = n(311476),
    T = n(165583),
    C = n(197115),
    _ = n(504983),
    E = n(626135),
    I = n(981631),
    f = n(921944),
    N = n(474936),
    A = n(388032),
    b = n(394246),
    v = n(113207);
let j = () => {
        (0, g.EW)(l.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
            dismissAction: f.L.PRIMARY,
            forceTrack: !0
        }),
            (0, u.Kq)(),
            (0, o.xf)();
    },
    O = () => {
        var e, t;
        let { analyticsLocations: n } = (0, d.ZP)(c.Z.USER_SETTINGS),
            l = (0, r.e7)([m.Z], () => m.Z.isPreview),
            o = (null === (t = (0, x.N)()) || void 0 === t ? void 0 : null === (e = t.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === N.Si.TIER_2,
            u = (0, p.Ng)(),
            g = (0, p.Wp)(u, N.Si.TIER_2),
            f = !l || o,
            { enabled: O } = S.Z.getCurrentConfig(
                { location: 'UserSettingsAppearanceClientThemes' },
                {
                    autoTrackExposure: !f,
                    disable: f
                }
            ),
            R = () =>
                !l || o
                    ? null
                    : (0, i.jsxs)('div', {
                          className: b.tryItOutButtons,
                          children: [
                              (0, i.jsx)(a.Button, {
                                  color: O ? a.Button.Colors.BRAND : a.Button.Colors.PRIMARY,
                                  onClick: () => j(),
                                  children: O ? A.intl.string(A.t.SKNnqq) : A.intl.string(A.t['E+COuL'])
                              }),
                              (0, i.jsx)(C.Z, {
                                  showGradient: O,
                                  subscriptionTier: N.Si.TIER_2,
                                  buttonText: O ? A.intl.string(A.t.pj0XBA) : g ? A.intl.formatToPlainString(A.t.bkQ4bG, { percent: null == u ? void 0 : u.discount.amount }) : A.intl.string(A.t.mr4K7O),
                                  className: b.premiumCta
                              })
                          ]
                      });
        return (
            s.useEffect(() => {
                l &&
                    E.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: N.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                        location_stack: n
                    });
            }, [l, n]),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(h.ZP, {
                        type: h.yH.SETTINGS,
                        children: O
                            ? (0, i.jsx)(h.ZP.BasicAndGradient, {
                                  className: b.basicThemeSelectors,
                                  renderCTAButtons: R
                              })
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(h.ZP.Basic, { className: b.basicThemeSelectors }),
                                      (0, i.jsxs)(_.Z, {
                                          className: b.featureBorder,
                                          isShown: l,
                                          type: _.Y.PREMIUM,
                                          children: [
                                              (0, i.jsx)(h.ZP.Gradient, {
                                                  disabled: l,
                                                  renderCTAButtons: R
                                              }),
                                              o &&
                                                  l &&
                                                  (0, i.jsxs)('div', {
                                                      children: [
                                                          (0, i.jsx)(a.Button, {
                                                              className: b.previewThemeButtonWide,
                                                              color: a.Button.Colors.PRIMARY,
                                                              onClick: () => j(),
                                                              children: A.intl.string(A.t['E+COuL'])
                                                          }),
                                                          (0, i.jsx)('div', { className: b.premiumTier2Divider }),
                                                          (0, i.jsx)(T.ZP, {
                                                              type: N.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
                                                              subscriptionTier: N.Si.TIER_2
                                                          })
                                                      ]
                                                  })
                                          ]
                                      })
                                  ]
                              })
                    }),
                    (0, i.jsx)(a.FormDivider, { className: v.marginTop20 })
                ]
            })
        );
    },
    R = () =>
        (0, r.e7)([m.Z], () => m.Z.isPreview)
            ? null
            : (0, i.jsx)(a.Button, {
                  size: a.ButtonSizes.SMALL,
                  onClick: () => j(),
                  children: A.intl.string(A.t.qYXrkZ)
              });
