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
    _ = n(614277),
    h = n(698708);
function f(e) {
    var t, n;
    let s,
        { handleClose: f, planGroup: j, onSubscriptionConfirmation: L, renderPurchaseConfirmation: m, postSuccessGuild: g, followupSKUInfo: E, continueSession: S } = e,
        { activeSubscription: y, paymentSources: M, paymentSourceId: Z, selectedPlan: P, selectedSkuId: I, step: T, updatedSubscription: v, startingPremiumSubscriptionPlanIdRef: A } = (0, p.usePaymentContext)(),
        { isGift: U, giftRecipient: N, giftCode: k, hasSentMessage: b, isSendingMessage: w, sendGiftMessage: O } = (0, c.wD)(),
        H = (0, a.Z2)();
    r()(null != P, 'Expected plan to selected'), r()(null != I, 'Expected selectedSkuId'), r()(null != T, 'Step should be set');
    let R = l.useCallback(() => {
        f(), null == L || L();
    }, [f, L]);
    return (
        l.useEffect(() => {
            if (!(!U || null == N || null == k || b || w || (0, d.pO)(N))) C.F.getCurrentConfig({ location: '36b986_1' }).enabled && O({ onSubscriptionConfirmation: L });
        }, [O, U, N, k, b, w, L]),
        (s =
            null != m
                ? m(P, R, v)
                : S
                  ? (0, i.jsx)(o.VY, {})
                  : U
                    ? (0, i.jsx)(o.TB, {
                          planId: P.id,
                          onClose: R,
                          halloweenDecoPurchase: H
                      })
                    : A.current === P.id
                      ? (0, i.jsx)(o.ZP, {
                            planId: P.id,
                            postSuccessGuild: g,
                            onClose: R,
                            paymentSourceType: null === (t = M[null != Z ? Z : '']) || void 0 === t ? void 0 : t.type
                        })
                      : (0, i.jsx)(o.ZP, {
                            followupSKUInfo: E,
                            startingPremiumSubscriptionPlanId: A.current,
                            planId: P.id,
                            onClose: R,
                            isDowngrade: null != y && (0, u.GY)(y, P.id, j),
                            paymentSourceType: null === (n = M[null != Z ? Z : '']) || void 0 === n ? void 0 : n.type
                        })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(_.C3, {
                    children: [(0, i.jsx)(h.Z, {}), s]
                }),
                U
                    ? (0, i.jsx)(x.Z, {
                          onClose: R,
                          halloweenDecoPurchase: H
                      })
                    : null
            ]
        })
    );
}
