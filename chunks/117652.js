t.d(n, {
    Dd: function () {
        return I;
    }
});
var s = t(735250);
t(470079);
var a = t(442837),
    l = t(481060),
    r = t(628952),
    i = t(225657),
    o = t(600164),
    d = t(927699),
    c = t(987716),
    u = t(311821),
    E = t(594174),
    h = t(987209),
    C = t(598),
    f = t(409813),
    x = t(614277),
    p = t(474936),
    m = t(689938),
    T = t(21954);
let I = {
    key: f.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, s.jsx)(v, { ...e }),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => m.Z.Messages.GIFT_CARD_SELECTION
    }
};
function S(e) {
    let { onStepChange: n, onBackClick: t, showBackButton: a = !1, disabled: r = !1, loading: i = !1 } = e,
        { hasPaymentSources: o } = (0, C.usePaymentContext)(),
        d = o ? f.h8.REVIEW : f.h8.ADD_PAYMENT_STEPS;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(l.Button, {
                onClick: () => n(d),
                disabled: r,
                submitting: i,
                children: m.Z.Messages.PAGINATION_NEXT
            }),
            a ? (0, s.jsx)(u.Z, { onClick: t }) : null
        ]
    });
}
function v(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { customGiftMessage: u = '', setCustomGiftMessage: f, giftRecipientError: I, validatingGiftRecipient: v, giftRecipient: g } = (0, h.wD)(),
        { selectedSkuId: _, selectedSkuPricePreview: N } = (0, C.usePaymentContext)(),
        A = (0, a.e7)([E.default], () => E.default.getCurrentUser());
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(x.C3, {
                children: (0, s.jsxs)('div', {
                    className: T.stepBody,
                    children: [
                        (0, s.jsx)('div', {
                            className: T.bodyColumnMiddle,
                            children: (0, s.jsx)(c.q, { isShopGift: !0 })
                        }),
                        (0, s.jsxs)('div', {
                            className: T.bodyColumnRight,
                            children: [
                                (0, s.jsx)(i.Z, {
                                    selectedSkuId: _,
                                    className: T.sendTo
                                }),
                                (0, s.jsx)(d.Z, {
                                    sectionTitle: m.Z.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: (e) => (null == f ? void 0 : f(e)),
                                    pendingText: u,
                                    currentText: u,
                                    disableThemedBackground: !0,
                                    className: T.customGiftMessageWrapper,
                                    innerClassName: T.customGiftMessage
                                }),
                                (0, s.jsx)(r.Z, {
                                    selectedSkuId: _,
                                    selectedSkuPricePreview: N,
                                    className: T.giftPreview
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, s.jsx)(x.O3, {
                children: (0, s.jsx)(l.ModalFooter, {
                    justify: o.Z.Justify.BETWEEN,
                    align: o.Z.Align.CENTER,
                    children: (0, s.jsx)(S, {
                        onStepChange: n,
                        onBackClick: t,
                        disabled: null != I || null == g || g.id === (null == A ? void 0 : A.id) || u.length > p.$n,
                        loading: v
                    })
                })
            })
        ]
    });
}
