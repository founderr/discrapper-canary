n.d(t, {
    Dd: function () {
        return x;
    }
});
var i = n(200651),
    a = n(192379),
    s = n(442837),
    r = n(481060),
    l = n(335131),
    o = n(628952),
    c = n(225657),
    u = n(600164),
    d = n(109213),
    _ = n(927699),
    E = n(987716),
    I = n(311821),
    m = n(251660),
    f = n(594174),
    T = n(855775),
    h = n(987209),
    N = n(598),
    p = n(409813),
    C = n(614277),
    g = n(474936),
    S = n(689938),
    A = n(829294);
let x = {
    key: p.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, i.jsx)(v, { ...e }),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => S.Z.Messages.GIFT_CARD_SELECTION
    }
};
function R(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: a = !1, disabled: s = !1, loading: l = !1 } = e,
        { hasPaymentSources: o } = (0, N.usePaymentContext)(),
        c = o ? p.h8.REVIEW : p.h8.ADD_PAYMENT_STEPS;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.Button, {
                onClick: () => t(c),
                disabled: s,
                submitting: l,
                children: S.Z.Messages.PAGINATION_NEXT
            }),
            a ? (0, i.jsx)(I.Z, { onClick: n }) : null
        ]
    });
}
function v(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { customGiftMessage: I = '', setCustomGiftMessage: p, giftRecipientError: x, setGiftRecipientError: v, validatingGiftRecipient: M, giftRecipient: O, recommendedGiftSkuIds: L, giftingOrigin: Z, setValidatingGiftRecipient: b } = (0, h.wD)(),
        { selectedSkuId: P, setSelectedSkuId: D, selectedSkuPricePreview: j, paymentSourceId: U, skuPricePreviewsById: y } = (0, N.usePaymentContext)(),
        B = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
        { enabled: k, giftRecommendationAlgorithm: G } = d.G.useExperiment({ location: 'CollectiblesPaymentModalGiftCustomizationStep' }, { autoTrackExposure: !1 }),
        F = k && Z === g.Wt.DM_CHANNEL,
        w = G === d.u.POPULAR ? S.Z.Messages.GIFT_COLLECTIBLES_MODAL_TITLE : S.Z.Messages.GIFT_COLLECTIBLES_MODAL_TITLE_V2,
        V = async (e, t) => {
            b(!0), null != x && v(), !(await (0, l.B1)(e.id, t)) && v(S.Z.Messages.GIFT_COLLECTIBLES_MODAL_ALREADY_HAS_ITEM_ERROR), b(!1);
        };
    a.useEffect(() => {
        null != P && null != O && V(O, P);
    }, []);
    let H = (e) => {
            null != O && V(O, e), D(e);
        },
        Y = (e) => {
            let t = y[e],
                n = null != U ? U : T.c,
                a = null != t ? t[n] : null;
            if (null != a)
                return (0, i.jsx)(
                    o.Z,
                    {
                        skuId: e,
                        skuPricePreview: a,
                        isSelected: e === P,
                        onSelect: (e) => H(e),
                        className: A.recommendedGiftPreview
                    },
                    e
                );
        },
        W = () =>
            (0, i.jsx)(_.Z, {
                sectionTitle: S.Z.Messages.GIFT_OPTIONAL_MESSAGE,
                onTextChange: (e) => (null == p ? void 0 : p(e)),
                pendingText: I,
                currentText: I,
                disableThemedBackground: !0,
                className: A.customGiftMessageWrapper,
                innerClassName: A.customGiftMessage
            });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(C.C3, {
                children: (0, i.jsxs)('div', {
                    className: A.stepBody,
                    children: [
                        F
                            ? (0, i.jsxs)('div', {
                                  className: A.bodyColumnLeft,
                                  children: [
                                      (0, i.jsx)(r.Text, {
                                          variant: 'text-xs/bold',
                                          color: 'header-secondary',
                                          className: A.selectGiftTitle,
                                          children: w.toLocaleUpperCase()
                                      }),
                                      L.map((e) => Y(e))
                                  ]
                              })
                            : (0, i.jsx)('div', {
                                  className: A.bodyColumnMiddle,
                                  children: (0, i.jsx)(E.q, { isShopGift: !0 })
                              }),
                        F
                            ? (0, i.jsxs)('div', {
                                  className: A.bodyColumnRight,
                                  children: [
                                      (0, i.jsx)(m.s, { giftRecipient: O }),
                                      (0, i.jsx)(E.q, {
                                          isShopGift: !0,
                                          className: A.selectedGiftAnimation,
                                          optionsContainerClassName: A.giftAnimationOptionsContainer
                                      }),
                                      W()
                                  ]
                              })
                            : (0, i.jsxs)('div', {
                                  className: A.bodyColumnRight,
                                  children: [
                                      (0, i.jsx)(c.Z, {
                                          selectedSkuId: P,
                                          className: A.sendTo,
                                          validateSelectedGift: V
                                      }),
                                      W(),
                                      (0, i.jsx)(o.Z, {
                                          skuId: P,
                                          skuPricePreview: j,
                                          className: A.giftPreview,
                                          isSelected: !0,
                                          shouldDisplayHeader: !0
                                      })
                                  ]
                              })
                    ]
                })
            }),
            (0, i.jsx)(C.O3, {
                children: (0, i.jsx)(r.ModalFooter, {
                    justify: u.Z.Justify.BETWEEN,
                    align: u.Z.Align.CENTER,
                    children: (0, i.jsx)(R, {
                        onStepChange: t,
                        onBackClick: n,
                        disabled: null != x || null == O || O.id === (null == B ? void 0 : B.id) || I.length > g.$n,
                        loading: M
                    })
                })
            })
        ]
    });
}
