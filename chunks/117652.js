n.d(t, {
    Dd: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var a = n(442837),
    s = n(481060),
    r = n(628952),
    l = n(225657),
    o = n(600164),
    c = n(927699),
    u = n(987716),
    d = n(311821),
    _ = n(594174),
    E = n(987209),
    I = n(598),
    m = n(409813),
    f = n(614277),
    T = n(474936),
    h = n(689938),
    N = n(829294);
let p = {
    key: m.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, i.jsx)(g, { ...e }),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => h.Z.Messages.GIFT_CARD_SELECTION
    }
};
function C(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: a = !1, disabled: r = !1, loading: l = !1 } = e,
        { hasPaymentSources: o } = (0, I.usePaymentContext)(),
        c = o ? m.h8.REVIEW : m.h8.ADD_PAYMENT_STEPS;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.Button, {
                onClick: () => t(c),
                disabled: r,
                submitting: l,
                children: h.Z.Messages.PAGINATION_NEXT
            }),
            a ? (0, i.jsx)(d.Z, { onClick: n }) : null
        ]
    });
}
function g(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { customGiftMessage: d = '', setCustomGiftMessage: m, giftRecipientError: p, validatingGiftRecipient: g, giftRecipient: S } = (0, E.wD)(),
        { selectedSkuId: A, selectedSkuPricePreview: x } = (0, I.usePaymentContext)(),
        R = (0, a.e7)([_.default], () => _.default.getCurrentUser());
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(f.C3, {
                children: (0, i.jsxs)('div', {
                    className: N.stepBody,
                    children: [
                        (0, i.jsx)('div', {
                            className: N.bodyColumnMiddle,
                            children: (0, i.jsx)(u.q, { isShopGift: !0 })
                        }),
                        (0, i.jsxs)('div', {
                            className: N.bodyColumnRight,
                            children: [
                                (0, i.jsx)(l.Z, {
                                    selectedSkuId: A,
                                    className: N.sendTo
                                }),
                                (0, i.jsx)(c.Z, {
                                    sectionTitle: h.Z.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: (e) => (null == m ? void 0 : m(e)),
                                    pendingText: d,
                                    currentText: d,
                                    disableThemedBackground: !0,
                                    className: N.customGiftMessageWrapper,
                                    innerClassName: N.customGiftMessage
                                }),
                                (0, i.jsx)(r.Z, {
                                    selectedSkuId: A,
                                    selectedSkuPricePreview: x,
                                    className: N.giftPreview
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, i.jsx)(f.O3, {
                children: (0, i.jsx)(s.ModalFooter, {
                    justify: o.Z.Justify.BETWEEN,
                    align: o.Z.Align.CENTER,
                    children: (0, i.jsx)(C, {
                        onStepChange: t,
                        onBackClick: n,
                        disabled: null != p || null == S || S.id === (null == R ? void 0 : R.id) || d.length > T.$n,
                        loading: g
                    })
                })
            })
        ]
    });
}
