n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    d = n(481060),
    u = n(570140),
    m = n(496929),
    h = n(37234),
    g = n(230711),
    p = n(410030),
    x = n(454585),
    S = n(163684),
    T = n(178100),
    C = n(518638),
    _ = n(725727),
    E = n(454982),
    f = n(197115),
    I = n(504983),
    N = n(703656),
    A = n(594174),
    b = n(580130),
    v = n(669079),
    j = n(74538),
    O = n(317941),
    R = n(981631),
    P = n(474936),
    D = n(388032),
    y = n(360360);
function B(e) {
    let t,
        { outboundPromotion: n, code: r, addClaimedOutboundPromotionCode: a, disabled: o } = e,
        [c, u] = s.useState(!1),
        [m, h] = s.useState(!1),
        g = () => u((e) => !e),
        S = (0, p.ZP)(),
        _ = (0, C.Pz)(n.id, S),
        f = null != r,
        I = (0, T.Z)(n, f);
    f && c
        ? (t = D.intl.format(D.t.pkxVx8, {
              endDate: I,
              onClickDetails: g
          }))
        : f && !c
          ? (t = D.intl.format(D.t['4sFeoa'], {
                endDate: I,
                onClickDetails: g
            }))
          : !f && c
            ? (t = D.intl.format(D.t['RBnE+v'], {
                  endDate: I,
                  onClickDetails: g
              }))
            : !f &&
              !c &&
              (t = D.intl.format(D.t['57+7Qk'], {
                  endDate: I,
                  onClickDetails: g
              }));
    let N = f ? D.intl.string(D.t['2cHUtr']) : D.intl.string(D.t.O13yh4),
        A = s.useCallback(() => h(!1), []),
        { outboundTitle: b, outboundTermsAndConditions: v } = n;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: l()(y.skuCard, y.promotionCard),
                children: [
                    (0, i.jsxs)('div', {
                        className: y.mainPromotionCardContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: y.promotionCardLeftContainer,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: y.promotionIcon,
                                        children: (0, i.jsx)('img', {
                                            alt: '',
                                            src: _,
                                            className: y.promotionIconImage
                                        })
                                    }),
                                    (0, i.jsxs)('div', {
                                        children: [
                                            (0, i.jsx)(d.Heading, {
                                                variant: 'heading-md/semibold',
                                                children: b
                                            }),
                                            (0, i.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                color: 'text-normal',
                                                className: y.__invalid_promotionText,
                                                children: t
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)(d.Button, {
                                className: y.promotionCardButton,
                                color: d.Button.Colors.BRAND,
                                size: d.Button.Sizes.SMALL,
                                onClick: () => h(!0),
                                disabled: !0 === o,
                                children: N
                            })
                        ]
                    }),
                    c &&
                        (0, i.jsx)(d.Text, {
                            className: y.promotionLegalese,
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: x.Z.parse(v, !1, { allowLinks: !0 })
                        })
                ]
            }),
            m &&
                (0, i.jsx)(d.Modal, {
                    renderModal: (e) =>
                        (0, i.jsx)(E.Z, {
                            ...e,
                            onClose: A,
                            onClaim: a,
                            code: r,
                            outboundPromotion: n
                        }),
                    onCloseRequest: A
                })
        ]
    });
}
t.Z = function () {
    let e = (0, c.Wu)([b.Z], () => b.Z.getGiftable()),
        [t, n] = o().partition(e, (e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        r = (0, c.e7)([A.default], () => j.ZP.isPremiumExactly(A.default.getCurrentUser(), P.p9.TIER_2)),
        a = o().groupBy(t, (e) => (0, v.Bg)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [p, x] = s.useState(!1);
    s.useEffect(() => {
        u.Z.wait(() => {
            (0, m.Qv)().then(() => x(!0));
        });
    }, []);
    let { promotionsLoaded: T, activeOutboundPromotions: C, claimedEndedOutboundPromotions: E, claimedOutboundPromotionCodeMap: L, addClaimedOutboundPromotionCode: Z } = (0, _.lG)(),
        F = C.length + E.length > 0,
        M =
            S.g.useExperiment(
                { location: 'EntitlementGifts' },
                {
                    autoTrackExposure: !1,
                    disable: r
                }
            ).enabled && F;
    function k() {
        g.Z.open(R.oAB.PREMIUM);
    }
    return p && T
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (function () {
                      var e;
                      let t = n.find((e) => e.giftCodeBatchId === P.m8 && !e.consumed),
                          s = null !== (e = n.filter((e) => e.giftCodeBatchId === P.rX && !e.consumed)) && void 0 !== e ? e : [],
                          [a, c] = o().partition(s, (e) => {
                              let { subscriptionPlanId: t } = e;
                              return t === P.Xh.PREMIUM_YEAR_TIER_2;
                          }),
                          u = M
                              ? (0, i.jsxs)('div', {
                                    className: y.promoHeaderContainer,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            children: [
                                                (0, i.jsx)(d.Heading, {
                                                    variant: 'heading-md/semibold',
                                                    children: F ? D.intl.string(D.t.wFsj3N) : void 0
                                                }),
                                                (0, i.jsx)(d.Heading, {
                                                    variant: 'text-sm/normal',
                                                    className: y.promoDescription,
                                                    children: D.intl.format(D.t.G4fwxM, {
                                                        onClick: () => {
                                                            (0, h.xf)(), (0, N.uL)(R.Z5c.APPLICATION_STORE);
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        (0, i.jsx)(f.Z, {
                                            showGradient: !0,
                                            className: y.promoNitroButton,
                                            subscriptionTier: P.Si.TIER_2,
                                            buttonText: D.intl.string(D.t.mr4K7O)
                                        })
                                    ]
                                })
                              : (0, i.jsx)(d.Heading, {
                                    variant: 'heading-md/semibold',
                                    children: F ? D.intl.string(D.t.wFsj3N) : void 0
                                });
                      return (0, i.jsx)(I.Z, {
                          className: y.containerWithMargin,
                          isShown: M,
                          type: I.Y.PREMIUM,
                          hasBackground: !0,
                          children: (0, i.jsxs)(d.FormSection, {
                              className: l()({ [y.containerWithMargin]: !M }),
                              children: [
                                  u,
                                  F ? (0, i.jsx)(d.FormDivider, { className: y.divider }) : null,
                                  E.map((e) => {
                                      let { code: t, promotion: n } = e;
                                      return (0, i.jsx)(
                                          B,
                                          {
                                              outboundPromotion: n,
                                              code: t,
                                              addClaimedOutboundPromotionCode: Z,
                                              disabled: !r
                                          },
                                          n.id
                                      );
                                  }),
                                  C.map((e) =>
                                      (0, i.jsx)(
                                          B,
                                          {
                                              outboundPromotion: e,
                                              code: L[e.id],
                                              addClaimedOutboundPromotionCode: Z,
                                              disabled: !r
                                          },
                                          e.id
                                      )
                                  ),
                                  null != t
                                      ? (0, i.jsx)(
                                            O.Z,
                                            {
                                                className: y.skuCard,
                                                skuId: t.skuId,
                                                subscriptionPlanId: t.subscriptionPlanId,
                                                entitlements: [t],
                                                giftCodeBatchId: P.m8
                                            },
                                            (0, v.Bg)(t.skuId, t.subscriptionPlanId)
                                        )
                                      : null,
                                  a.length > 0
                                      ? (0, i.jsx)(
                                            O.Z,
                                            {
                                                className: y.skuCard,
                                                skuId: a[0].skuId,
                                                subscriptionPlanId: a[0].subscriptionPlanId,
                                                entitlements: a,
                                                giftCodeBatchId: P.rX
                                            },
                                            (0, v.Bg)(a[0].skuId, a[0].subscriptionPlanId)
                                        )
                                      : null,
                                  c.length > 0
                                      ? (0, i.jsx)(
                                            O.Z,
                                            {
                                                className: y.skuCard,
                                                skuId: c[0].skuId,
                                                subscriptionPlanId: c[0].subscriptionPlanId,
                                                entitlements: c,
                                                giftCodeBatchId: P.rX
                                            },
                                            (0, v.Bg)(c[0].skuId, c[0].subscriptionPlanId)
                                        )
                                      : null
                              ]
                          })
                      });
                  })(),
                  (0, i.jsx)(d.FormSection, {
                      className: y.containerWithMargin,
                      children: (0, i.jsxs)(d.HeadingLevel, {
                          component: (0, i.jsx)(d.Heading, {
                              variant: 'heading-md/semibold',
                              children: D.intl.string(D.t['9KeUbW'])
                          }),
                          children: [
                              (0, i.jsx)(d.FormDivider, { className: y.divider }),
                              0 === Object.keys(a).length
                                  ? (0, i.jsxs)('div', {
                                        className: y.emptyState,
                                        children: [
                                            (0, i.jsx)('div', { className: y.emptyStateImage }),
                                            (0, i.jsx)(d.H, {
                                                className: y.emptyStateHeader,
                                                children: D.intl.string(D.t.B1qgZm)
                                            }),
                                            (0, i.jsx)('p', {
                                                className: y.emptyStateSubtext,
                                                children: D.intl.format(D.t.HezvJy, { onClick: k })
                                            })
                                        ]
                                    })
                                  : o()
                                        .keys(a)
                                        .map((e) => {
                                            let { skuId: t, subscriptionPlanId: n, giftStyle: s } = (0, v.Z0)(e);
                                            return (0, i.jsx)(
                                                O.Z,
                                                {
                                                    className: y.skuCard,
                                                    skuId: t,
                                                    subscriptionPlanId: n,
                                                    entitlements: a[e],
                                                    giftStyle: s
                                                },
                                                e
                                            );
                                        })
                          ]
                      })
                  })
              ]
          })
        : (0, i.jsx)(d.Spinner, { className: y.loading });
};
