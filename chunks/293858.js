n.d(t, {
    b: function () {
        return f;
    }
});
var i = n(200651),
    l = n(192379),
    s = n(512722),
    r = n.n(s),
    C = n(881602),
    a = n(155491),
    o = n(317269),
    d = n(669079),
    u = n(296848),
    c = n(987209),
    p = n(563132),
    x = n(592627),
    h = n(614277),
    _ = n(698708);
function f(e) {
    var t, n;
    let s,
        { handleClose: f, planGroup: j, onSubscriptionConfirmation: L, renderPurchaseConfirmation: m, postSuccessGuild: g, followupSKUInfo: E, continueSession: S } = e,
        { activeSubscription: y, paymentSources: M, paymentSourceId: Z, selectedPlan: P, selectedSkuId: T, step: I, updatedSubscription: U, startingPremiumSubscriptionPlanIdRef: v } = (0, p.usePaymentContext)(),
        { isGift: A, giftRecipient: N, giftCode: k, hasSentMessage: b, isSendingMessage: w, sendGiftMessage: H } = (0, c.wD)(),
        O = (0, a.Z2)();
    r()(null != P, 'Expected plan to selected'), r()(null != T, 'Expected selectedSkuId'), r()(null != I, 'Step should be set');
    let R = l.useCallback(() => {
        f(), null == L || L();
    }, [f, L]);
    return (
        l.useEffect(() => {
            if (!(!A || null == N || null == k || b || w || (0, d.pO)(N))) C.F.getCurrentConfig({ location: '36b986_1' }).enabled && H({ onSubscriptionConfirmation: L });
        }, [H, A, N, k, b, w, L]),
        (s =
            null != m
                ? m(P, R, U)
                : S
                  ? (0, i.jsx)(o.VY, {})
                  : A
                    ? (0, i.jsx)(o.TB, {
                          planId: P.id,
                          onClose: R,
                          halloweenDecoPurchase: O
                      })
                    : v.current === P.id
                      ? (0, i.jsx)(o.ZP, {
                            planId: P.id,
                            postSuccessGuild: g,
                            onClose: R,
                            paymentSourceType: null === (t = M[null != Z ? Z : '']) || void 0 === t ? void 0 : t.type
                        })
                      : (0, i.jsx)(o.ZP, {
                            followupSKUInfo: E,
                            startingPremiumSubscriptionPlanId: v.current,
                            planId: P.id,
                            onClose: R,
                            isDowngrade: null != y && (0, u.GY)(y, P.id, j),
                            paymentSourceType: null === (n = M[null != Z ? Z : '']) || void 0 === n ? void 0 : n.type
                        })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(h.C3, {
                    children: [(0, i.jsx)(_.Z, {}), s]
                }),
                A
                    ? (0, i.jsx)(x.Z, {
                          onClose: R,
                          halloweenDecoPurchase: O
                      })
                    : null
            ]
        })
    );
}
