t.d(n, {
    b: function () {
        return h;
    }
});
var r = t(735250),
    a = t(470079),
    i = t(512722),
    s = t.n(i),
    o = t(881602),
    l = t(317269),
    C = t(669079),
    d = t(296848),
    c = t(987209),
    u = t(598),
    _ = t(164513),
    p = t(614277),
    f = t(698708);
function h(e) {
    var n, t;
    let i,
        { handleClose: h, planGroup: x, onSubscriptionConfirmation: L, renderPurchaseConfirmation: I, postSuccessGuild: g, followupSKUInfo: E, continueSession: m } = e,
        { activeSubscription: M, paymentSources: T, paymentSourceId: N, selectedPlan: b, selectedSkuId: j, step: S, updatedSubscription: A, startingPremiumSubscriptionPlanIdRef: R } = (0, u.usePaymentContext)(),
        { isGift: P, giftRecipient: O, giftCode: v, hasSentMessage: y, isSendingMessage: Z, sendGiftMessage: B } = (0, c.wD)();
    s()(null != b, 'Expected plan to selected'), s()(null != j, 'Expected selectedSkuId'), s()(null != S, 'Step should be set');
    let U = a.useCallback(() => {
        h(), null == L || L();
    }, [h, L]);
    return (
        a.useEffect(() => {
            if (!(!P || null == O || null == v || y || Z || (0, C.pO)(O))) o.F.getCurrentConfig({ location: '36b986_1' }).enabled && B({ onSubscriptionConfirmation: L });
        }, [B, P, O, v, y, Z, L]),
        (i =
            null != I
                ? I(b, U, A)
                : m
                  ? (0, r.jsx)(l.VY, {})
                  : P
                    ? (0, r.jsx)(l.TB, {
                          planId: b.id,
                          onClose: U
                      })
                    : R.current === b.id
                      ? (0, r.jsx)(l.ZP, {
                            planId: b.id,
                            postSuccessGuild: g,
                            onClose: U,
                            paymentSourceType: null === (n = T[null != N ? N : '']) || void 0 === n ? void 0 : n.type
                        })
                      : (0, r.jsx)(l.ZP, {
                            followupSKUInfo: E,
                            startingPremiumSubscriptionPlanId: R.current,
                            planId: b.id,
                            onClose: U,
                            isDowngrade: null != M && (0, d.GY)(M, b.id, x),
                            paymentSourceType: null === (t = T[null != N ? N : '']) || void 0 === t ? void 0 : t.type
                        })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(p.C3, {
                    children: [(0, r.jsx)(f.Z, {}), i]
                }),
                P && (0, r.jsx)(_.Z, { onClose: U })
            ]
        })
    );
}
