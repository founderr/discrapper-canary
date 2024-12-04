n.d(t, {
    Z: function () {
        return U;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(809206),
    o = n(634894),
    c = n(100527),
    d = n(906732),
    u = n(335131),
    m = n(597688),
    h = n(1870),
    g = n(884697),
    p = n(175756),
    x = n(104494),
    S = n(639119),
    T = n(211712),
    E = n(629654),
    _ = n(53691),
    C = n(165583),
    I = n(267717),
    f = n(350327),
    N = n(996073),
    A = n(25990),
    b = n(626135),
    v = n(74538),
    j = n(296810),
    O = n(433411),
    R = n(532432),
    P = n(504983),
    D = n(134795),
    y = n(513901),
    B = n(451392),
    L = n(490220),
    Z = n(981631),
    F = n(474936),
    M = n(526761),
    k = n(388032),
    w = n(195657);
function U(e) {
    var t, n;
    let { user: U, isVisible: V, shouldShow: G } = e,
        Y = v.ZP.isPremium(U),
        {
            pendingAvatar: H,
            pendingThemeColors: z,
            tryItOutThemeColors: W,
            tryItOutAvatar: K,
            tryItOutBanner: q,
            tryItOutProfileEffectId: X,
            tryItOutAvatarDecoration: Q
        } = (0, r.cj)([A.Z], () => {
            let e = A.Z.getAllPending(),
                t = A.Z.getErrors(),
                n = A.Z.getAllTryItOut();
            return {
                ...e,
                ...n,
                errors: t
            };
        }),
        J = (0, p.Z)(X),
        $ = s.useRef(null);
    (0, N.Z)($, M.Y_.TRY_IT_OUT);
    let { analyticsLocations: ee, sourceAnalyticsLocations: et } = (0, d.ZP)(c.Z.USER_SETTINGS_TRY_OUT_PREMIUM),
        [en, ei] = s.useState(Math.floor(Math.random() * T.J2.length)),
        es = (e) => {
            if (e) {
                if (((0, a.I5)(K), (0, f.z5)(W), (0, f.ho)(q), null != Q)) {
                    let e = m.Z.getProduct(Q.skuId);
                    null != e && (0, g.G1)(e) ? (0, u.fK)(e.skuId).then(() => (0, a.cV)(Q)) : null != h.Z.getPurchase(Q.skuId) && (0, a.cV)(Q);
                }
                b.default.track(Z.rMx.TRY_IT_OUT_PRESET_SELECTED, { preset: T.J2[en].presetName });
            }
        };
    s.useEffect(() => {
        if (!!V)
            b.default.track(Z.rMx.PREMIUM_UPSELL_VIEWED, {
                type: F.cd.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: Z.ZY5.USER_SETTINGS },
                location_stack: et
            });
    }, [et, U, V]);
    let er = (null === (n = (0, S.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === F.Si.TIER_2,
        el = (0, x.Ng)(),
        ea = (0, x.Wp)(el, F.Si.TIER_2),
        eo = 'TryOutPremiumSection';
    return ((0, o.j)({
        location: eo + ' auto on',
        autoTrackExposure: !0
    }),
    (0, o.j)({
        location: eo + ' auto off',
        autoTrackExposure: !1
    }),
    G)
        ? (0, i.jsx)(d.Gt, {
              value: ee,
              children: (0, i.jsxs)(P.Z, {
                  ref: $,
                  className: w.tryItOutSection,
                  type: P.Y.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, i.jsx)(j.Z, {
                          layoutClassName: w.tryItOutLayout,
                          previewTitle: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(l.NitroWheelIcon, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: w.premiumIcon
                                  }),
                                  k.intl.string(k.t.gMlDNT)
                              ]
                          }),
                          profilePreview: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(E.Z, {
                                      selectedIndex: en,
                                      setSelectedIndex: ei
                                  }),
                                  (0, i.jsx)(L.Z, { user: U })
                              ]
                          }),
                          children: (0, i.jsxs)('div', {
                              className: w.editor,
                              children: [
                                  (0, i.jsxs)('div', {
                                      children: [
                                          (0, i.jsx)(l.Heading, {
                                              variant: 'heading-xl/extrabold',
                                              children: k.intl.string(k.t['2zGdAQ'])
                                          }),
                                          (0, i.jsx)(l.Text, {
                                              className: w.description,
                                              variant: 'text-sm/normal',
                                              children: k.intl.string(k.t.xeEC29)
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(B.Z, {
                                      className: w.customizationSection,
                                      user: U,
                                      pendingAvatar: null != K ? K : H,
                                      pendingColors: null != W ? W : z,
                                      onThemeColorsChange: f.rf,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0
                                  }),
                                  (0, i.jsx)(D.Z, {
                                      className: w.customizationSection,
                                      isTryItOutFlow: !0,
                                      showRemoveBannerButton: null != q,
                                      onBannerChange: f.f4,
                                      showPremiumIcon: !1
                                  }),
                                  (0, i.jsx)(R.Z, {
                                      className: w.customizationSection,
                                      isTryItOutFlow: !0,
                                      onAvatarChange: f.c_,
                                      showRemoveAvatarButton: !1,
                                      changeAvatarButtonText: k.intl.string(k.t['7z0D1d']),
                                      sectionTitle: k.intl.string(k.t.vtFfPT)
                                  }),
                                  (0, i.jsx)(
                                      O.Z,
                                      {
                                          isTryItOutFlow: !0,
                                          className: w.customizationSection,
                                          user: U,
                                          sectionTitle: k.intl.string(k.t['7v0T9P'])
                                      },
                                      'decoration'
                                  ),
                                  (0, i.jsx)(
                                      y.Z,
                                      {
                                          className: w.customizationSection,
                                          isTryItOutFlow: !0,
                                          initialSelectedEffectId: J,
                                          user: U,
                                          sectionTitle: k.intl.string(k.t.wR5wOj)
                                      },
                                      'effect'
                                  ),
                                  !er &&
                                      (0, i.jsx)(l.Text, {
                                          variant: 'text-sm/normal',
                                          children: k.intl.string(k.t['smo74+'])
                                      })
                              ]
                          })
                      }),
                      !er &&
                          (0, i.jsx)(_.p, {
                              onSubscribeModalClose: es,
                              className: w.floatingUpsell,
                              showUpsell: !0,
                              text: k.intl.format(k.t.TmfgIy, { onClick: () => (0, I.openPremiumTryItOutProfileUpsell)(es) }),
                              button: Y ? k.intl.string(k.t.AfRWIy) : ea ? k.intl.formatToPlainString(k.t.bkQ4bG, { percent: null == el ? void 0 : el.discount.amount }) : k.intl.string(k.t.pj0XBA),
                              position: 'inline',
                              showShadow: !1
                          }),
                      er &&
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)('div', { className: w.premiumTier2Divider }),
                                  (0, i.jsx)(C.ZP, {
                                      type: F.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: F.Si.TIER_2
                                  })
                              ]
                          })
                  ]
              })
          })
        : null;
}
