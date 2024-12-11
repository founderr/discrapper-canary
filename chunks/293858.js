n.d(t, {
    b: function () {
        return L;
    }
});
var i = n(200651),
    l = n(192379),
    s = n(512722),
    r = n.n(s),
    a = n(605236),
    o = n(881602),
    C = n(717401),
    d = n(286961),
    u = n(317269),
    c = n(669079),
    p = n(296848),
    x = n(987209),
    h = n(563132),
    f = n(614277),
    _ = n(400981),
    j = n(698708),
    m = n(921944);
function L(e) {
    var t, n;
    let s,
        { handleClose: L, planGroup: g, onSubscriptionConfirmation: E, renderPurchaseConfirmation: S, postSuccessGuild: I, followupSKUInfo: M, continueSessionToInitialStep: v } = e,
        { activeSubscription: y, paymentSources: T, paymentSourceId: N, selectedPlan: P, selectedSkuId: Z, step: A, updatedSubscription: U, startingPremiumSubscriptionPlanIdRef: O } = (0, h.usePaymentContext)(),
        { isGift: k, giftRecipient: R, giftCode: b, hasSentMessage: w, isSendingMessage: H, sendGiftMessage: B, claimableRewards: F, selectedGiftingPromotionReward: G } = (0, x.wD)(),
        D = (0, C.id)(P, k, F),
        W = (0, d.Z)(),
        Y = (0, C.a5)(P),
        K = (0, C.tK)(null == G ? void 0 : G.skuId),
        V = k && null != G && Y;
    r()(null != P, 'Expected plan to selected'), r()(null != Z, 'Expected selectedSkuId'), r()(null != A, 'Step should be set');
    let X = l.useCallback(() => {
        L(), null == E || E();
    }, [L, E]);
    return (
        l.useEffect(() => {
            if (!(!k || null == R || null == b || w || H || (0, c.pO)(R))) o.F.getCurrentConfig({ location: '36b986_1' }).enabled && B({ onSubscriptionConfirmation: E });
        }, [B, k, R, b, w, H, E]),
        l.useEffect(() => {
            null != W && null != W.reminderNotice && D && (0, a.wH)(W.reminderNotice.dismissibleContent, W.dismissibleContentVersion, { dismissAction: m.L.INDIRECT_ACTION });
        }, [W, D]),
        (s =
            null != S
                ? S(P, X, U)
                : null != v
                  ? (0, i.jsx)(u.VY, {})
                  : k
                    ? (0, i.jsx)(u.TB, {
                          planId: P.id,
                          onClose: X
                      })
                    : O.current === P.id
                      ? (0, i.jsx)(u.ZP, {
                            planId: P.id,
                            postSuccessGuild: I,
                            onClose: X,
                            paymentSourceType: null === (t = T[null != N ? N : '']) || void 0 === t ? void 0 : t.type
                        })
                      : (0, i.jsx)(u.ZP, {
                            followupSKUInfo: M,
                            startingPremiumSubscriptionPlanId: O.current,
                            planId: P.id,
                            onClose: X,
                            isDowngrade: null != y && (0, p.GY)(y, P.id, g),
                            paymentSourceType: null === (n = T[null != N ? N : '']) || void 0 === n ? void 0 : n.type
                        })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(f.C3, {
                    children: [(0, i.jsx)(j.Z, {}), s]
                }),
                V &&
                    null != K &&
                    (0, i.jsx)(_.Z, {
                        onClose: X,
                        selectedPromotionalDecoPurchaseRecord: K,
                        selectedGiftingPromotionReward: G
                    })
            ]
        })
    );
}
