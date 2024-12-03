n.d(t, {
    b: function () {
        return g;
    }
});
var i = n(200651),
    l = n(192379),
    s = n(512722),
    r = n.n(s),
    a = n(605236),
    C = n(881602),
    o = n(155491),
    d = n(717401),
    u = n(286961),
    c = n(317269),
    p = n(669079),
    x = n(296848),
    h = n(987209),
    f = n(563132),
    _ = n(592627),
    j = n(614277),
    L = n(698708),
    m = n(921944);
function g(e) {
    var t, n;
    let s,
        { handleClose: g, planGroup: E, onSubscriptionConfirmation: S, renderPurchaseConfirmation: y, postSuccessGuild: M, followupSKUInfo: Z, continueSession: I } = e,
        { activeSubscription: v, paymentSources: P, paymentSourceId: T, selectedPlan: N, selectedSkuId: A, step: U, updatedSubscription: k, startingPremiumSubscriptionPlanIdRef: b } = (0, f.usePaymentContext)(),
        { isGift: O, giftRecipient: R, giftCode: w, hasSentMessage: H, isSendingMessage: B, sendGiftMessage: F } = (0, h.wD)(),
        G = (0, d.id)(N, O),
        W = (0, u.Z)(),
        D = (0, o.Z2)();
    r()(null != N, 'Expected plan to selected'), r()(null != A, 'Expected selectedSkuId'), r()(null != U, 'Step should be set');
    let Y = l.useCallback(() => {
        g(), null == S || S();
    }, [g, S]);
    return (
        l.useEffect(() => {
            if (!(!O || null == R || null == w || H || B || (0, p.pO)(R))) C.F.getCurrentConfig({ location: '36b986_1' }).enabled && F({ onSubscriptionConfirmation: S });
        }, [F, O, R, w, H, B, S]),
        l.useEffect(() => {
            null != W && null != W.reminderNotice && G && (0, a.wH)(W.reminderNotice.dismissibleContent, W.dismissibleContentVersion, { dismissAction: m.L.INDIRECT_ACTION });
        }, [W, G]),
        (s =
            null != y
                ? y(N, Y, k)
                : I
                  ? (0, i.jsx)(c.VY, {})
                  : O
                    ? (0, i.jsx)(c.TB, {
                          planId: N.id,
                          onClose: Y,
                          halloweenDecoPurchase: D
                      })
                    : b.current === N.id
                      ? (0, i.jsx)(c.ZP, {
                            planId: N.id,
                            postSuccessGuild: M,
                            onClose: Y,
                            paymentSourceType: null === (t = P[null != T ? T : '']) || void 0 === t ? void 0 : t.type
                        })
                      : (0, i.jsx)(c.ZP, {
                            followupSKUInfo: Z,
                            startingPremiumSubscriptionPlanId: b.current,
                            planId: N.id,
                            onClose: Y,
                            isDowngrade: null != v && (0, x.GY)(v, N.id, E),
                            paymentSourceType: null === (n = P[null != T ? T : '']) || void 0 === n ? void 0 : n.type
                        })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(j.C3, {
                    children: [(0, i.jsx)(L.Z, {}), s]
                }),
                O
                    ? (0, i.jsx)(_.Z, {
                          onClose: Y,
                          halloweenDecoPurchase: D
                      })
                    : null
            ]
        })
    );
}
