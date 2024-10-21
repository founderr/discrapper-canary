n.d(s, {
    b: function () {
        return I;
    }
});
var t = n(200651),
    l = n(192379),
    i = n(512722),
    C = n.n(i),
    r = n(881602),
    a = n(155491),
    o = n(317269),
    _ = n(669079),
    d = n(296848),
    u = n(987209),
    c = n(598),
    p = n(592627),
    x = n(614277),
    L = n(698708);
function I(e) {
    var s, n;
    let i,
        { handleClose: I, planGroup: E, onSubscriptionConfirmation: h, renderPurchaseConfirmation: f, postSuccessGuild: M, followupSKUInfo: T, continueSession: N } = e,
        { activeSubscription: j, paymentSources: A, paymentSourceId: S, selectedPlan: g, selectedSkuId: P, step: R, updatedSubscription: m, startingPremiumSubscriptionPlanIdRef: O } = (0, c.usePaymentContext)(),
        { isGift: Z, giftRecipient: y, giftCode: U, hasSentMessage: H, isSendingMessage: G, sendGiftMessage: B } = (0, u.wD)(),
        v = (0, a.Z2)();
    C()(null != g, 'Expected plan to selected'), C()(null != P, 'Expected selectedSkuId'), C()(null != R, 'Step should be set');
    let F = l.useCallback(() => {
        I(), null == h || h();
    }, [I, h]);
    return (
        l.useEffect(() => {
            if (!(!Z || null == y || null == U || H || G || (0, _.pO)(y))) r.F.getCurrentConfig({ location: '36b986_1' }).enabled && B({ onSubscriptionConfirmation: h });
        }, [B, Z, y, U, H, G, h]),
        (i =
            null != f
                ? f(g, F, m)
                : N
                  ? (0, t.jsx)(o.VY, {})
                  : Z
                    ? (0, t.jsx)(o.TB, {
                          planId: g.id,
                          onClose: F,
                          halloweenDecoPurchase: v
                      })
                    : O.current === g.id
                      ? (0, t.jsx)(o.ZP, {
                            planId: g.id,
                            postSuccessGuild: M,
                            onClose: F,
                            paymentSourceType: null === (s = A[null != S ? S : '']) || void 0 === s ? void 0 : s.type
                        })
                      : (0, t.jsx)(o.ZP, {
                            followupSKUInfo: T,
                            startingPremiumSubscriptionPlanId: O.current,
                            planId: g.id,
                            onClose: F,
                            isDowngrade: null != j && (0, d.GY)(j, g.id, E),
                            paymentSourceType: null === (n = A[null != S ? S : '']) || void 0 === n ? void 0 : n.type
                        })),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsxs)(x.C3, {
                    children: [(0, t.jsx)(L.Z, {}), i]
                }),
                Z
                    ? (0, t.jsx)(p.Z, {
                          onClose: F,
                          halloweenDecoPurchase: v
                      })
                    : null
            ]
        })
    );
}
