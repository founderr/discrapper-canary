n.d(t, {
    Dd: function () {
        return S;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(335131),
    s = n(628952),
    c = n(225657),
    u = n(600164),
    d = n(109213),
    m = n(927699),
    f = n(987716),
    h = n(311821),
    p = n(251660),
    g = n(594174),
    _ = n(855775),
    C = n(987209),
    E = n(563132),
    I = n(409813),
    x = n(614277),
    v = n(474936),
    N = n(388032),
    T = n(829294);
let S = {
    key: I.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, i.jsx)(A, { ...e }),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => N.intl.string(N.t['W685+f'])
    }
};
function b(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: r = !1, disabled: l = !1, loading: o = !1 } = e,
        { hasPaymentSources: s } = (0, E.usePaymentContext)(),
        c = s ? I.h8.REVIEW : I.h8.ADD_PAYMENT_STEPS;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.Button, {
                onClick: () => t(c),
                disabled: l,
                submitting: o,
                children: N.intl.string(N.t.XiOHRU)
            }),
            r ? (0, i.jsx)(h.Z, { onClick: n }) : null
        ]
    });
}
function A(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { customGiftMessage: h = '', setCustomGiftMessage: I, giftRecipientError: S, setGiftRecipientError: A, validatingGiftRecipient: j, giftRecipient: Z, recommendedGiftSkuIds: R, giftingOrigin: P, setValidatingGiftRecipient: y } = (0, C.wD)(),
        { selectedSkuId: L, setSelectedSkuId: O, selectedSkuPricePreview: M, paymentSourceId: k, skuPricePreviewsById: D } = (0, E.usePaymentContext)(),
        B = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        { enabled: w, giftRecommendationAlgorithm: U } = d.G.useExperiment({ location: 'CollectiblesPaymentModalGiftCustomizationStep' }, { autoTrackExposure: !1 }),
        F = w && P === v.Wt.DM_CHANNEL,
        G = U === d.u.POPULAR ? N.intl.string(N.t.Kwgrrq) : N.intl.string(N.t.r1huYW),
        V = async (e, t) => {
            y(!0), null != S && A(), !(await (0, o.B1)(e.id, t)) && A(N.intl.string(N.t['4kgVqa'])), y(!1);
        };
    r.useEffect(() => {
        null != L && null != Z && V(Z, L);
    }, []);
    let H = (e) => {
            null != Z && V(Z, e), O(e);
        },
        z = (e) => {
            let t = D[e],
                n = null != k ? k : _.c,
                r = null != t ? t[n] : null;
            if (null != r)
                return (0, i.jsx)(
                    s.Z,
                    {
                        skuId: e,
                        skuPricePreview: r,
                        isSelected: e === L,
                        onSelect: (e) => H(e),
                        className: T.recommendedGiftPreview
                    },
                    e
                );
        },
        W = () =>
            (0, i.jsx)(m.Z, {
                sectionTitle: N.intl.string(N.t.B3miEx),
                onTextChange: (e) => (null == I ? void 0 : I(e)),
                pendingText: h,
                currentText: h,
                disableThemedBackground: !0,
                className: T.customGiftMessageWrapper,
                innerClassName: T.customGiftMessage
            });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(x.C3, {
                children: (0, i.jsxs)('div', {
                    className: T.stepBody,
                    children: [
                        F
                            ? (0, i.jsxs)('div', {
                                  className: T.bodyColumnLeft,
                                  children: [
                                      (0, i.jsx)(a.Text, {
                                          variant: 'text-xs/bold',
                                          color: 'header-secondary',
                                          className: T.selectGiftTitle,
                                          children: G.toLocaleUpperCase()
                                      }),
                                      R.map((e) => z(e))
                                  ]
                              })
                            : (0, i.jsx)('div', {
                                  className: T.bodyColumnMiddle,
                                  children: (0, i.jsx)(f.q, { isShopGift: !0 })
                              }),
                        F
                            ? (0, i.jsxs)('div', {
                                  className: T.bodyColumnRight,
                                  children: [
                                      (0, i.jsx)(p.s, { giftRecipient: Z }),
                                      (0, i.jsx)(f.q, {
                                          isShopGift: !0,
                                          className: T.selectedGiftAnimation,
                                          optionsContainerClassName: T.giftAnimationOptionsContainer
                                      }),
                                      W()
                                  ]
                              })
                            : (0, i.jsxs)('div', {
                                  className: T.bodyColumnRight,
                                  children: [
                                      (0, i.jsx)(c.Z, {
                                          selectedSkuId: L,
                                          className: T.sendTo,
                                          validateSelectedGift: V
                                      }),
                                      W(),
                                      (0, i.jsx)(s.Z, {
                                          skuId: L,
                                          skuPricePreview: M,
                                          className: T.giftPreview,
                                          isSelected: !0,
                                          shouldDisplayHeader: !0
                                      })
                                  ]
                              })
                    ]
                })
            }),
            (0, i.jsx)(x.O3, {
                children: (0, i.jsx)(a.ModalFooter, {
                    justify: u.Z.Justify.BETWEEN,
                    align: u.Z.Align.CENTER,
                    children: (0, i.jsx)(b, {
                        onStepChange: t,
                        onBackClick: n,
                        disabled: null != S || null == Z || Z.id === (null == B ? void 0 : B.id) || h.length > v.$n,
                        loading: j
                    })
                })
            })
        ]
    });
}
