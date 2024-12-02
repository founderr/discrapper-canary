n.d(t, {
    b: function () {
        return _;
    }
});
var i = n(200651),
    l = n(192379),
    s = n(512722),
    r = n.n(s),
    a = n(881602),
    C = n(155491),
    o = n(317269),
    d = n(669079),
    u = n(296848),
    c = n(987209),
    p = n(563132),
    x = n(592627),
    h = n(614277),
    f = n(698708);
function _(e) {
    var t, n;
    let s,
        { handleClose: _, planGroup: j, onSubscriptionConfirmation: L, renderPurchaseConfirmation: m, postSuccessGuild: g, followupSKUInfo: E, continueSession: S } = e,
        { activeSubscription: y, paymentSources: M, paymentSourceId: Z, selectedPlan: I, selectedSkuId: v, step: P, updatedSubscription: T, startingPremiumSubscriptionPlanIdRef: N } = (0, p.usePaymentContext)(),
        { isGift: A, giftRecipient: U, giftCode: k, hasSentMessage: b, isSendingMessage: O, sendGiftMessage: R } = (0, c.wD)(),
        w = (0, C.Z2)();
    r()(null != I, 'Expected plan to selected'), r()(null != v, 'Expected selectedSkuId'), r()(null != P, 'Step should be set');
    let H = l.useCallback(() => {
        _(), null == L || L();
    }, [_, L]);
    return (
        l.useEffect(() => {
            if (!(!A || null == U || null == k || b || O || (0, d.pO)(U))) a.F.getCurrentConfig({ location: '36b986_1' }).enabled && R({ onSubscriptionConfirmation: L });
        }, [R, A, U, k, b, O, L]),
        (s =
            null != m
                ? m(I, H, T)
                : S
                  ? (0, i.jsx)(o.VY, {})
                  : A
                    ? (0, i.jsx)(o.TB, {
                          planId: I.id,
                          onClose: H,
                          halloweenDecoPurchase: w
                      })
                    : N.current === I.id
                      ? (0, i.jsx)(o.ZP, {
                            planId: I.id,
                            postSuccessGuild: g,
                            onClose: H,
                            paymentSourceType: null === (t = M[null != Z ? Z : '']) || void 0 === t ? void 0 : t.type
                        })
                      : (0, i.jsx)(o.ZP, {
                            followupSKUInfo: E,
                            startingPremiumSubscriptionPlanId: N.current,
                            planId: I.id,
                            onClose: H,
                            isDowngrade: null != y && (0, u.GY)(y, I.id, j),
                            paymentSourceType: null === (n = M[null != Z ? Z : '']) || void 0 === n ? void 0 : n.type
                        })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(h.C3, {
                    children: [(0, i.jsx)(f.Z, {}), s]
                }),
                A
                    ? (0, i.jsx)(x.Z, {
                          onClose: H,
                          halloweenDecoPurchase: w
                      })
                    : null
            ]
        })
    );
}
