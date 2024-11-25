t.d(n, {
    Dd: function () {
        return _;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(442837),
    a = t(481060),
    s = t(100527),
    o = t(906732),
    d = t(335131),
    c = t(628952),
    u = t(225657),
    h = t(600164),
    m = t(109213),
    x = t(927699),
    f = t(987716),
    v = t(311821),
    p = t(251660),
    g = t(594174),
    C = t(855775),
    j = t(626135),
    I = t(987209),
    T = t(563132),
    E = t(409813),
    N = t(614277),
    S = t(981631),
    Z = t(474936),
    y = t(388032),
    P = t(463313),
    A = t(461405);
let _ = {
    key: E.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, i.jsx)(O, { ...e }),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => y.intl.string(y.t['W685+f'])
    }
};
function k(e) {
    let { onStepChange: n, onBackClick: t, showBackButton: l = !1, disabled: r = !1, loading: s = !1 } = e,
        { hasPaymentSources: o } = (0, T.usePaymentContext)(),
        d = o ? E.h8.REVIEW : E.h8.ADD_PAYMENT_STEPS;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.Button, {
                onClick: () => n(d),
                disabled: r,
                submitting: s,
                children: y.intl.string(y.t.XiOHRU)
            }),
            l ? (0, i.jsx)(v.Z, { onClick: t }) : null
        ]
    });
}
function O(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { customGiftMessage: s = '', setCustomGiftMessage: o, giftRecipientError: v, setGiftRecipientError: E, validatingGiftRecipient: _, giftRecipient: O, recommendedGiftSkuIds: M, giftingOrigin: w, setValidatingGiftRecipient: L } = (0, I.wD)(),
        { selectedSkuId: R, setSelectedSkuId: D, selectedSkuPricePreview: B, paymentSourceId: F, skuPricePreviewsById: G } = (0, T.usePaymentContext)(),
        U = (0, r.e7)([g.default], () => g.default.getCurrentUser()),
        { enabled: H, giftRecommendationAlgorithm: W } = m.G.useExperiment({ location: 'CollectiblesPaymentModalGiftCustomizationStep' }, { autoTrackExposure: !1 }),
        z = H && w === Z.Wt.DM_CHANNEL,
        V = W === m.u.POPULAR ? y.intl.string(y.t.Kwgrrq) : y.intl.string(y.t.r1huYW),
        Y = async (e, n) => {
            L(!0), null != v && E(), !(await (0, d.B1)(e.id, n)) && E(y.intl.string(y.t['4kgVqa'])), L(!1);
        };
    l.useEffect(() => {
        null != R && null != O && (j.default.track(S.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: R }), Y(O, R));
    }, []);
    let K = (e) => {
            j.default.track(S.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: e }), null != O && Y(O, e), D(e);
        },
        q = (e) => {
            let n = G[e],
                t = null;
            if (null != n) {
                var l;
                t = null != F && null !== (l = n[F]) && void 0 !== l ? l : n[C.c];
            }
            if (null != t)
                return (0, i.jsx)(
                    c.Z,
                    {
                        skuId: e,
                        skuPricePreview: t,
                        isSelected: e === R,
                        onSelect: (e) => K(e),
                        className: P.recommendedGiftPreview
                    },
                    e
                );
        },
        J = () =>
            (0, i.jsx)(x.Z, {
                sectionTitle: y.intl.string(y.t.B3miEx),
                onTextChange: (e) => (null == o ? void 0 : o(e)),
                pendingText: s,
                currentText: s,
                disableThemedBackground: !0,
                className: P.customGiftMessageWrapper,
                innerClassName: P.customGiftMessage
            });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(N.C3, {
                children: (0, i.jsxs)('div', {
                    className: P.stepBody,
                    children: [
                        z
                            ? (0, i.jsxs)('div', {
                                  className: P.bodyColumnLeft,
                                  children: [
                                      (0, i.jsx)(a.Text, {
                                          variant: 'text-xs/bold',
                                          color: 'header-secondary',
                                          className: P.selectGiftTitle,
                                          children: V.toLocaleUpperCase()
                                      }),
                                      M.map((e) => q(e)),
                                      (0, i.jsx)(b, { handleClose: t })
                                  ]
                              })
                            : (0, i.jsx)('div', {
                                  className: P.bodyColumnMiddle,
                                  children: (0, i.jsx)(f.q, { isShopGift: !0 })
                              }),
                        z
                            ? (0, i.jsxs)('div', {
                                  className: P.bodyColumnRight,
                                  children: [
                                      (0, i.jsx)(p.s, { giftRecipient: O }),
                                      (0, i.jsx)(f.q, {
                                          isShopGift: !0,
                                          className: A.adjustedGiftMainAnimation,
                                          optionsContainerClassName: A.adjustedGiftBoxOptionContainer
                                      }),
                                      J()
                                  ]
                              })
                            : (0, i.jsxs)('div', {
                                  className: P.bodyColumnRight,
                                  children: [
                                      (0, i.jsx)(u.Z, {
                                          selectedSkuId: R,
                                          className: P.sendTo,
                                          validateSelectedGift: Y
                                      }),
                                      J(),
                                      (0, i.jsx)(c.Z, {
                                          skuId: R,
                                          skuPricePreview: B,
                                          className: P.giftPreview,
                                          isSelected: !0,
                                          shouldDisplayHeader: !0
                                      })
                                  ]
                              })
                    ]
                })
            }),
            (0, i.jsx)(N.O3, {
                children: (0, i.jsx)(a.ModalFooter, {
                    justify: h.Z.Justify.BETWEEN,
                    align: h.Z.Align.CENTER,
                    children: (0, i.jsx)(k, {
                        onStepChange: n,
                        onBackClick: t,
                        disabled: null != v || null == O || O.id === (null == U ? void 0 : U.id) || s.length > Z.$n,
                        loading: _
                    })
                })
            })
        ]
    });
}
function b(e) {
    let { handleClose: n } = e,
        { analyticsLocations: t } = (0, o.ZP)(s.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, i.jsx)(a.Clickable, {
        onClick: function () {
            n(),
                (0, a.closeAllModals)(),
                (0, d.mK)({
                    openInLayer: !1,
                    analyticsLocations: t,
                    analyticsSource: s.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL
                });
        },
        children: (0, i.jsxs)('div', {
            className: P.navigateToShopButton,
            children: [
                (0, i.jsxs)('div', {
                    className: P.navigateToShopBody,
                    children: [
                        (0, i.jsx)('div', {
                            className: P.shopIcon,
                            children: (0, i.jsx)(a.ShopIcon, {
                                size: 'custom',
                                width: 18,
                                height: 18,
                                color: 'var(--header-primary)'
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: P.navigateToShopTextWrapper,
                            children: [
                                (0, i.jsx)(a.Text, {
                                    color: 'header-primary',
                                    variant: 'text-md/semibold',
                                    children: y.intl.string(y.t['1+Co8P'])
                                }),
                                (0, i.jsx)(a.Heading, {
                                    color: 'header-secondary',
                                    variant: 'heading-sm/medium',
                                    children: y.intl.string(y.t.nYn52N)
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    children: (0, i.jsx)(a.ArrowLargeRightIcon, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: 'var(--header-primary)'
                    })
                })
            ]
        })
    });
}
