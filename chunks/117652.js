t.d(n, {
    Dd: function () {
        return m;
    }
});
var s = t(735250);
t(470079);
var a = t(442837),
    l = t(481060),
    i = t(628952),
    r = t(225657),
    o = t(600164),
    d = t(927699),
    c = t(987716),
    u = t(311821),
    E = t(594174),
    C = t(987209),
    h = t(598),
    x = t(409813),
    f = t(614277),
    T = t(474936),
    p = t(689938),
    I = t(829294);
let m = {
    key: x.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, s.jsx)(g, { ...e }),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => p.Z.Messages.GIFT_CARD_SELECTION
    }
};
function S(e) {
    let { onStepChange: n, onBackClick: t, showBackButton: a = !1, disabled: i = !1, loading: r = !1 } = e,
        { hasPaymentSources: o } = (0, h.usePaymentContext)(),
        d = o ? x.h8.REVIEW : x.h8.ADD_PAYMENT_STEPS;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(l.Button, {
                onClick: () => n(d),
                disabled: i,
                submitting: r,
                children: p.Z.Messages.PAGINATION_NEXT
            }),
            a ? (0, s.jsx)(u.Z, { onClick: t }) : null
        ]
    });
}
function g(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { customGiftMessage: u = '', setCustomGiftMessage: x, giftRecipientError: m, validatingGiftRecipient: g, giftRecipient: _ } = (0, C.wD)(),
        { selectedSkuId: N, selectedSkuPricePreview: v } = (0, h.usePaymentContext)(),
        A = (0, a.e7)([E.default], () => E.default.getCurrentUser());
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(f.C3, {
                children: (0, s.jsxs)('div', {
                    className: I.stepBody,
                    children: [
                        (0, s.jsx)('div', {
                            className: I.bodyColumnMiddle,
                            children: (0, s.jsx)(c.q, { isShopGift: !0 })
                        }),
                        (0, s.jsxs)('div', {
                            className: I.bodyColumnRight,
                            children: [
                                (0, s.jsx)(r.Z, {
                                    selectedSkuId: N,
                                    className: I.sendTo
                                }),
                                (0, s.jsx)(d.Z, {
                                    sectionTitle: p.Z.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: (e) => (null == x ? void 0 : x(e)),
                                    pendingText: u,
                                    currentText: u,
                                    disableThemedBackground: !0,
                                    className: I.customGiftMessageWrapper,
                                    innerClassName: I.customGiftMessage
                                }),
                                (0, s.jsx)(i.Z, {
                                    selectedSkuId: N,
                                    selectedSkuPricePreview: v,
                                    className: I.giftPreview
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, s.jsx)(f.O3, {
                children: (0, s.jsx)(l.ModalFooter, {
                    justify: o.Z.Justify.BETWEEN,
                    align: o.Z.Align.CENTER,
                    children: (0, s.jsx)(S, {
                        onStepChange: n,
                        onBackClick: t,
                        disabled: null != m || null == _ || _.id === (null == A ? void 0 : A.id) || u.length > T.$n,
                        loading: g
                    })
                })
            })
        ]
    });
}
