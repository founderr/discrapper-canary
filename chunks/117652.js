t.d(n, {
    Dd: function () {
        return E;
    }
});
var i = t(200651),
    a = t(192379),
    r = t(442837),
    o = t(481060),
    l = t(335131),
    s = t(628952),
    d = t(225657),
    c = t(600164),
    u = t(109213),
    f = t(927699),
    p = t(987716),
    m = t(311821),
    g = t(251660),
    _ = t(703656),
    b = t(594174),
    h = t(855775),
    x = t(987209),
    C = t(563132),
    v = t(409813),
    S = t(614277),
    I = t(981631),
    j = t(474936),
    T = t(388032),
    y = t(721285);
let E = {
    key: v.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, i.jsx)(k, { ...e }),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => T.intl.string(T.t['W685+f'])
    }
};
function N(e) {
    let { onStepChange: n, onBackClick: t, showBackButton: a = !1, disabled: r = !1, loading: l = !1 } = e,
        { hasPaymentSources: s } = (0, C.usePaymentContext)(),
        d = s ? v.h8.REVIEW : v.h8.ADD_PAYMENT_STEPS;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.Button, {
                onClick: () => n(d),
                disabled: r,
                submitting: l,
                children: T.intl.string(T.t.XiOHRU)
            }),
            a ? (0, i.jsx)(m.Z, { onClick: t }) : null
        ]
    });
}
function k(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { customGiftMessage: m = '', setCustomGiftMessage: _, giftRecipientError: v, setGiftRecipientError: I, validatingGiftRecipient: E, giftRecipient: k, recommendedGiftSkuIds: B, giftingOrigin: A, setValidatingGiftRecipient: Z } = (0, x.wD)(),
        { selectedSkuId: w, setSelectedSkuId: O, selectedSkuPricePreview: M, paymentSourceId: R, skuPricePreviewsById: G } = (0, C.usePaymentContext)(),
        L = (0, r.e7)([b.default], () => b.default.getCurrentUser()),
        { enabled: D, giftRecommendationAlgorithm: H } = u.G.useExperiment({ location: 'CollectiblesPaymentModalGiftCustomizationStep' }, { autoTrackExposure: !1 }),
        F = D && A === j.Wt.DM_CHANNEL,
        W = H === u.u.POPULAR ? T.intl.string(T.t.Kwgrrq) : T.intl.string(T.t.r1huYW),
        z = async (e, n) => {
            Z(!0), null != v && I(), !(await (0, l.B1)(e.id, n)) && I(T.intl.string(T.t['4kgVqa'])), Z(!1);
        };
    a.useEffect(() => {
        null != w && null != k && z(k, w);
    }, []);
    let U = (e) => {
            null != k && z(k, e), O(e);
        },
        V = (e) => {
            let n = G[e],
                t = null != R ? R : h.c,
                a = null != n ? n[t] : null;
            if (null != a)
                return (0, i.jsx)(
                    s.Z,
                    {
                        skuId: e,
                        skuPricePreview: a,
                        isSelected: e === w,
                        onSelect: (e) => U(e),
                        className: y.recommendedGiftPreview
                    },
                    e
                );
        },
        Y = () =>
            (0, i.jsx)(f.Z, {
                sectionTitle: T.intl.string(T.t.B3miEx),
                onTextChange: (e) => (null == _ ? void 0 : _(e)),
                pendingText: m,
                currentText: m,
                disableThemedBackground: !0,
                className: y.customGiftMessageWrapper,
                innerClassName: y.customGiftMessage
            });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(S.C3, {
                children: (0, i.jsxs)('div', {
                    className: y.stepBody,
                    children: [
                        F
                            ? (0, i.jsxs)('div', {
                                  className: y.bodyColumnLeft,
                                  children: [
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-xs/bold',
                                          color: 'header-secondary',
                                          className: y.selectGiftTitle,
                                          children: W.toLocaleUpperCase()
                                      }),
                                      B.map((e) => V(e)),
                                      (0, i.jsx)(P, { handleClose: t })
                                  ]
                              })
                            : (0, i.jsx)('div', {
                                  className: y.bodyColumnMiddle,
                                  children: (0, i.jsx)(p.q, { isShopGift: !0 })
                              }),
                        F
                            ? (0, i.jsxs)('div', {
                                  className: y.bodyColumnRight,
                                  children: [
                                      (0, i.jsx)(g.s, { giftRecipient: k }),
                                      (0, i.jsx)(p.q, {
                                          isShopGift: !0,
                                          className: y.selectedGiftAnimation,
                                          optionsContainerClassName: y.giftAnimationOptionsContainer
                                      }),
                                      Y()
                                  ]
                              })
                            : (0, i.jsxs)('div', {
                                  className: y.bodyColumnRight,
                                  children: [
                                      (0, i.jsx)(d.Z, {
                                          selectedSkuId: w,
                                          className: y.sendTo,
                                          validateSelectedGift: z
                                      }),
                                      Y(),
                                      (0, i.jsx)(s.Z, {
                                          skuId: w,
                                          skuPricePreview: M,
                                          className: y.giftPreview,
                                          isSelected: !0,
                                          shouldDisplayHeader: !0
                                      })
                                  ]
                              })
                    ]
                })
            }),
            (0, i.jsx)(S.O3, {
                children: (0, i.jsx)(o.ModalFooter, {
                    justify: c.Z.Justify.BETWEEN,
                    align: c.Z.Align.CENTER,
                    children: (0, i.jsx)(N, {
                        onStepChange: n,
                        onBackClick: t,
                        disabled: null != v || null == k || k.id === (null == L ? void 0 : L.id) || m.length > j.$n,
                        loading: E
                    })
                })
            })
        ]
    });
}
function P(e) {
    let { handleClose: n } = e;
    return (0, i.jsx)(o.Clickable, {
        onClick: function () {
            n(), (0, o.closeAllModals)(), (0, _.uL)(I.Z5c.COLLECTIBLES_SHOP);
        },
        children: (0, i.jsxs)('div', {
            className: y.navigateToShopButton,
            children: [
                (0, i.jsxs)('div', {
                    className: y.navigateToShopBody,
                    children: [
                        (0, i.jsx)('div', {
                            className: y.shopIcon,
                            children: (0, i.jsx)(o.ShopIcon, {
                                size: 'custom',
                                width: 18,
                                height: 18,
                                color: 'var(--header-primary)'
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: y.navigateToShopTextWrapper,
                            children: [
                                (0, i.jsx)(o.Text, {
                                    color: 'header-primary',
                                    variant: 'text-md/semibold',
                                    children: T.intl.string(T.t['1+Co8P'])
                                }),
                                (0, i.jsx)(o.Heading, {
                                    color: 'header-secondary',
                                    variant: 'heading-sm/medium',
                                    children: T.intl.string(T.t.nYn52N)
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
