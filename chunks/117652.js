t.d(n, {
    Dd: function () {
        return P;
    }
});
var i = t(200651),
    a = t(192379),
    r = t(442837),
    o = t(481060),
    l = t(100527),
    s = t(906732),
    d = t(335131),
    c = t(628952),
    u = t(225657),
    f = t(600164),
    p = t(109213),
    m = t(927699),
    _ = t(987716),
    g = t(311821),
    b = t(251660),
    h = t(594174),
    x = t(855775),
    C = t(626135),
    v = t(987209),
    I = t(563132),
    S = t(409813),
    T = t(614277),
    j = t(981631),
    y = t(474936),
    E = t(388032),
    N = t(463313),
    k = t(461405);
let P = {
    key: S.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, i.jsx)(A, { ...e }),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => E.intl.string(E.t['W685+f'])
    }
};
function B(e) {
    let { onStepChange: n, onBackClick: t, showBackButton: a = !1, disabled: r = !1, loading: l = !1 } = e,
        { hasPaymentSources: s } = (0, I.usePaymentContext)(),
        d = s ? S.h8.REVIEW : S.h8.ADD_PAYMENT_STEPS;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.Button, {
                onClick: () => n(d),
                disabled: r,
                submitting: l,
                children: E.intl.string(E.t.XiOHRU)
            }),
            a ? (0, i.jsx)(g.Z, { onClick: t }) : null
        ]
    });
}
function A(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { customGiftMessage: l = '', setCustomGiftMessage: s, giftRecipientError: g, setGiftRecipientError: S, validatingGiftRecipient: P, giftRecipient: A, recommendedGiftSkuIds: w, giftingOrigin: O, setValidatingGiftRecipient: M } = (0, v.wD)(),
        { selectedSkuId: R, setSelectedSkuId: G, selectedSkuPricePreview: L, paymentSourceId: D, skuPricePreviewsById: H } = (0, I.usePaymentContext)(),
        F = (0, r.e7)([h.default], () => h.default.getCurrentUser()),
        { enabled: W, giftRecommendationAlgorithm: U } = p.G.useExperiment({ location: 'CollectiblesPaymentModalGiftCustomizationStep' }, { autoTrackExposure: !1 }),
        z = W && O === y.Wt.DM_CHANNEL,
        V = U === p.u.POPULAR ? E.intl.string(E.t.Kwgrrq) : E.intl.string(E.t.r1huYW),
        Y = async (e, n) => {
            M(!0), null != g && S(), !(await (0, d.B1)(e.id, n)) && S(E.intl.string(E.t['4kgVqa'])), M(!1);
        };
    a.useEffect(() => {
        null != R && null != A && (C.default.track(j.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: R }), Y(A, R));
    }, []);
    let K = (e) => {
            C.default.track(j.rMx.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: e }), null != A && Y(A, e), G(e);
        },
        q = (e) => {
            let n = H[e],
                t = null;
            if (null != n) {
                var a;
                t = null != D && null !== (a = n[D]) && void 0 !== a ? a : n[x.c];
            }
            if (null != t)
                return (0, i.jsx)(
                    c.Z,
                    {
                        skuId: e,
                        skuPricePreview: t,
                        isSelected: e === R,
                        onSelect: (e) => K(e),
                        className: N.recommendedGiftPreview
                    },
                    e
                );
        },
        J = () =>
            (0, i.jsx)(m.Z, {
                sectionTitle: E.intl.string(E.t.B3miEx),
                onTextChange: (e) => (null == s ? void 0 : s(e)),
                pendingText: l,
                currentText: l,
                disableThemedBackground: !0,
                className: N.customGiftMessageWrapper,
                innerClassName: N.customGiftMessage
            });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(T.C3, {
                children: (0, i.jsxs)('div', {
                    className: N.stepBody,
                    children: [
                        z
                            ? (0, i.jsxs)('div', {
                                  className: N.bodyColumnLeft,
                                  children: [
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-xs/bold',
                                          color: 'header-secondary',
                                          className: N.selectGiftTitle,
                                          children: V.toLocaleUpperCase()
                                      }),
                                      w.map((e) => q(e)),
                                      (0, i.jsx)(Z, { handleClose: t })
                                  ]
                              })
                            : (0, i.jsx)('div', {
                                  className: N.bodyColumnMiddle,
                                  children: (0, i.jsx)(_.q, { isShopGift: !0 })
                              }),
                        z
                            ? (0, i.jsxs)('div', {
                                  className: N.bodyColumnRight,
                                  children: [
                                      (0, i.jsx)(b.s, { giftRecipient: A }),
                                      (0, i.jsx)(_.q, {
                                          isShopGift: !0,
                                          className: k.adjustedGiftMainAnimation,
                                          optionsContainerClassName: k.adjustedGiftBoxOptionContainer
                                      }),
                                      J()
                                  ]
                              })
                            : (0, i.jsxs)('div', {
                                  className: N.bodyColumnRight,
                                  children: [
                                      (0, i.jsx)(u.Z, {
                                          selectedSkuId: R,
                                          className: N.sendTo,
                                          validateSelectedGift: Y
                                      }),
                                      J(),
                                      (0, i.jsx)(c.Z, {
                                          skuId: R,
                                          skuPricePreview: L,
                                          className: N.giftPreview,
                                          isSelected: !0,
                                          shouldDisplayHeader: !0
                                      })
                                  ]
                              })
                    ]
                })
            }),
            (0, i.jsx)(T.O3, {
                children: (0, i.jsx)(o.ModalFooter, {
                    justify: f.Z.Justify.BETWEEN,
                    align: f.Z.Align.CENTER,
                    children: (0, i.jsx)(B, {
                        onStepChange: n,
                        onBackClick: t,
                        disabled: null != g || null == A || A.id === (null == F ? void 0 : F.id) || l.length > y.$n,
                        loading: P
                    })
                })
            })
        ]
    });
}
function Z(e) {
    let { handleClose: n } = e,
        { analyticsLocations: t } = (0, s.ZP)(l.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, i.jsx)(o.Clickable, {
        onClick: function () {
            n(),
                (0, o.closeAllModals)(),
                (0, d.mK)({
                    openInLayer: !1,
                    analyticsLocations: t,
                    analyticsSource: l.Z.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL
                });
        },
        children: (0, i.jsxs)('div', {
            className: N.navigateToShopButton,
            children: [
                (0, i.jsxs)('div', {
                    className: N.navigateToShopBody,
                    children: [
                        (0, i.jsx)('div', {
                            className: N.shopIcon,
                            children: (0, i.jsx)(o.ShopIcon, {
                                size: 'custom',
                                width: 18,
                                height: 18,
                                color: 'var(--header-primary)'
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: N.navigateToShopTextWrapper,
                            children: [
                                (0, i.jsx)(o.Text, {
                                    color: 'header-primary',
                                    variant: 'text-md/semibold',
                                    children: E.intl.string(E.t['1+Co8P'])
                                }),
                                (0, i.jsx)(o.Heading, {
                                    color: 'header-secondary',
                                    variant: 'heading-sm/medium',
                                    children: E.intl.string(E.t.nYn52N)
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    children: (0, i.jsx)(o.ArrowLargeRightIcon, {
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
