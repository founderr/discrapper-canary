t.d(s, {
    Z: function () {
        return W;
    }
}),
    t(47120);
var n = t(200651),
    a = t(192379),
    i = t(120356),
    r = t.n(i),
    o = t(442837),
    l = t(481060),
    c = t(809206),
    d = t(634894),
    _ = t(100527),
    u = t(906732),
    E = t(335131),
    T = t(597688),
    S = t(1870),
    I = t(884697),
    N = t(175756),
    m = t(104494),
    A = t(639119),
    C = t(211712),
    g = t(31590),
    h = t(81245),
    O = t(629654),
    p = t(53691),
    R = t(165583),
    x = t(197115),
    M = t(267717),
    f = t(350327),
    D = t(996073),
    L = t(25990),
    P = t(626135),
    b = t(74538),
    Z = t(296810),
    v = t(433411),
    j = t(532432),
    B = t(504983),
    U = t(134795),
    G = t(513901),
    F = t(451392),
    y = t(649700),
    V = t(981631),
    Y = t(474936),
    k = t(526761),
    w = t(689938),
    H = t(232335);
function W(e) {
    var s, t;
    let { user: i, isVisible: W, shouldShow: K } = e,
        z = b.ZP.isPremium(i),
        {
            pendingAvatar: Q,
            pendingThemeColors: X,
            tryItOutThemeColors: q,
            tryItOutAvatar: J,
            tryItOutBanner: $,
            tryItOutProfileEffectId: ee,
            tryItOutAvatarDecoration: es
        } = (0, o.cj)([L.Z], () => {
            let e = L.Z.getAllPending(),
                s = L.Z.getErrors(),
                t = L.Z.getAllTryItOut();
            return {
                ...e,
                ...t,
                errors: s
            };
        }),
        et = (0, N.Z)(ee),
        en = a.useRef(null);
    (0, D.Z)(en, k.Y_.TRY_IT_OUT);
    let { analyticsLocations: ea, sourceAnalyticsLocations: ei } = (0, u.ZP)(_.Z.USER_SETTINGS_TRY_OUT_PREMIUM),
        [er, eo] = a.useState(Math.floor(Math.random() * C.J2.length)),
        el = (e) => {
            if (e) {
                if (((0, c.I5)(J), (0, f.z5)(q), (0, f.ho)($), null != es)) {
                    let e = T.Z.getProduct(es.skuId);
                    null != e && (0, I.G1)(e) ? (0, E.fK)(e.skuId).then(() => (0, c.cV)(es)) : null != S.Z.getPurchase(es.skuId) && (0, c.cV)(es);
                }
                P.default.track(V.rMx.TRY_IT_OUT_PRESET_SELECTED, { preset: C.J2[er].presetName });
            }
        };
    a.useEffect(() => {
        if (!!W)
            P.default.track(V.rMx.PREMIUM_UPSELL_VIEWED, {
                type: Y.cd.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: V.ZY5.USER_SETTINGS },
                location_stack: ei
            });
    }, [ei, i, W]);
    let ec = (null === (t = (0, A.N)()) || void 0 === t ? void 0 : null === (s = t.subscription_trial) || void 0 === s ? void 0 : s.sku_id) === Y.Si.TIER_2,
        ed = (0, m.Ng)(),
        e_ = (0, m.Wp)(ed, Y.Si.TIER_2),
        eu = 'TryOutPremiumSection';
    (0, d.j)({
        location: eu + ' auto on',
        autoTrackExposure: !0
    }),
        (0, d.j)({
            location: eu + ' auto off',
            autoTrackExposure: !1
        });
    let eE = (0, h.Mu)('TryOutPremiumSection'),
        { enabled: eT } = g.Z.useExperiment({ location: 'UserSettingsProfileCustomization' }, { autoTrackExposure: !1 });
    return K
        ? (0, n.jsx)(u.Gt, {
              value: ea,
              children: (0, n.jsxs)(B.Z, {
                  ref: en,
                  className: H.tryItOutSection,
                  type: B.Y.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, n.jsx)(Z.Z, {
                          layoutClassName: H.tryItOutLayout,
                          previewTitle: (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(l.NitroWheelIcon, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: H.premiumIcon
                                  }),
                                  w.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_PREVIEW
                              ]
                          }),
                          profilePreview: (0, n.jsxs)(n.Fragment, {
                              children: [
                                  eT &&
                                      (0, n.jsx)(O.Z, {
                                          selectedIndex: er,
                                          setSelectedIndex: eo
                                      }),
                                  (0, n.jsx)(y.Z, { user: i })
                              ]
                          }),
                          children: (0, n.jsxs)('div', {
                              className: H.editor,
                              children: [
                                  (0, n.jsxs)('div', {
                                      children: [
                                          (0, n.jsx)(l.Heading, {
                                              variant: 'heading-xl/extrabold',
                                              children: w.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_HEADER
                                          }),
                                          (0, n.jsx)(l.Text, {
                                              className: H.description,
                                              variant: 'text-sm/normal',
                                              children: w.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_DESCRIPTION
                                          })
                                      ]
                                  }),
                                  (0, n.jsx)(F.Z, {
                                      className: H.customizationSection,
                                      user: i,
                                      pendingAvatar: null != J ? J : Q,
                                      pendingColors: null != q ? q : X,
                                      onThemeColorsChange: f.rf,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0
                                  }),
                                  (0, n.jsx)(U.Z, {
                                      className: H.customizationSection,
                                      isTryItOutFlow: !0,
                                      showRemoveBannerButton: null != $,
                                      onBannerChange: f.f4,
                                      showPremiumIcon: !1
                                  }),
                                  (0, n.jsx)(j.Z, {
                                      className: H.customizationSection,
                                      isTryItOutFlow: !0,
                                      onAvatarChange: f.c_,
                                      showRemoveAvatarButton: !1,
                                      changeAvatarButtonText: w.Z.Messages.USER_SETTINGS_ADD_ANIMATED_AVATAR,
                                      sectionTitle: w.Z.Messages.PREMIUM_TIER_0_FEATURE_AVATAR
                                  }),
                                  (0, n.jsx)(
                                      v.Z,
                                      {
                                          isTryItOutFlow: !0,
                                          className: H.customizationSection,
                                          user: i,
                                          sectionTitle: w.Z.Messages.USER_SETTINGS_AVATAR_DECORATION
                                      },
                                      'decoration'
                                  ),
                                  (0, n.jsx)(
                                      G.Z,
                                      {
                                          className: H.customizationSection,
                                          isTryItOutFlow: !0,
                                          initialSelectedEffectId: et,
                                          user: i,
                                          sectionTitle: w.Z.Messages.USER_SETTINGS_PROFILE_EFFECT
                                      },
                                      'effect'
                                  ),
                                  !ec &&
                                      (0, n.jsxs)(n.Fragment, {
                                          children: [
                                              (0, n.jsx)(l.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: r()({ [H.premiumPerksListTitle]: !eE }),
                                                  children: w.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_ALSO_INCLUDES
                                              }),
                                              !eE &&
                                                  (0, n.jsx)(x.Z, {
                                                      onSubscribeModalClose: el,
                                                      subscriptionTier: Y.Si.TIER_2,
                                                      className: H.premiumSubscribeButton,
                                                      size: l.Button.Sizes.MEDIUM,
                                                      buttonText: z ? w.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : e_ ? w.Z.Messages.PREMIUM_DISCOUNT_CTA.format({ percent: null == ed ? void 0 : ed.discount.amount }) : w.Z.Messages.PREMIUM_UPSELL_GET_NITRO
                                                  })
                                          ]
                                      })
                              ]
                          })
                      }),
                      eE &&
                          (0, n.jsx)(p.p, {
                              onSubscribeModalClose: el,
                              className: H.floatingUpsell,
                              showUpsell: !0,
                              text: w.Z.Messages.PREMIUM_UPSELL_PROFILE_TRY_IT_OUT_UPSELL.format({ onClick: () => (0, M.openPremiumTryItOutProfileUpsell)(el) }),
                              button: w.Z.Messages.PREMIUM_UPSELL_GET_NITRO,
                              position: 'inline',
                              showShadow: !1
                          }),
                      ec &&
                          (0, n.jsxs)('div', {
                              children: [
                                  (0, n.jsx)('div', { className: H.premiumTier2Divider }),
                                  (0, n.jsx)(R.ZP, {
                                      type: Y.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: Y.Si.TIER_2
                                  })
                              ]
                          })
                  ]
              })
          })
        : null;
}
