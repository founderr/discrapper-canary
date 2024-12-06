n.d(t, {
    b: function () {
        return m;
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
    L = n(921944);
function m(e) {
    var t, n;
    let s,
        { handleClose: m, planGroup: g, onSubscriptionConfirmation: E, renderPurchaseConfirmation: S, postSuccessGuild: y, followupSKUInfo: M, continueSessionToInitialStep: I } = e,
        { activeSubscription: Z, paymentSources: v, paymentSourceId: P, selectedPlan: T, selectedSkuId: N, step: A, updatedSubscription: U, startingPremiumSubscriptionPlanIdRef: k } = (0, h.usePaymentContext)(),
        { isGift: b, giftRecipient: R, giftCode: O, hasSentMessage: w, isSendingMessage: H, sendGiftMessage: B, claimableRewards: F, selectedGiftingPromotionReward: G } = (0, x.wD)(),
        W = (0, C.id)(T, b, F),
        D = (0, d.Z)(),
        Y = (0, C.a5)(T),
        K = (0, C.tK)(null == G ? void 0 : G.skuId),
        V = b && null != G && Y;
    r()(null != T, 'Expected plan to selected'), r()(null != N, 'Expected selectedSkuId'), r()(null != A, 'Step should be set');
    let X = l.useCallback(() => {
        m(), null == E || E();
    }, [m, E]);
    return (
        l.useEffect(() => {
            if (!(!b || null == R || null == O || w || H || (0, c.pO)(R))) o.F.getCurrentConfig({ location: '36b986_1' }).enabled && B({ onSubscriptionConfirmation: E });
        }, [B, b, R, O, w, H, E]),
        l.useEffect(() => {
            null != D && null != D.reminderNotice && W && (0, a.wH)(D.reminderNotice.dismissibleContent, D.dismissibleContentVersion, { dismissAction: L.L.INDIRECT_ACTION });
        }, [D, W]),
        (s =
            null != S
                ? S(T, X, U)
                : null != I
                  ? (0, i.jsx)(u.VY, {})
                  : b
                    ? (0, i.jsx)(u.TB, {
                          planId: T.id,
                          onClose: X
                      })
                    : k.current === T.id
                      ? (0, i.jsx)(u.ZP, {
                            planId: T.id,
                            postSuccessGuild: y,
                            onClose: X,
                            paymentSourceType: null === (t = v[null != P ? P : '']) || void 0 === t ? void 0 : t.type
                        })
                      : (0, i.jsx)(u.ZP, {
                            followupSKUInfo: M,
                            startingPremiumSubscriptionPlanId: k.current,
                            planId: T.id,
                            onClose: X,
                            isDowngrade: null != Z && (0, p.GY)(Z, T.id, g),
                            paymentSourceType: null === (n = v[null != P ? P : '']) || void 0 === n ? void 0 : n.type
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
