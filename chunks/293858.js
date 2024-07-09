n.d(t, {
    b: function () {
        return f;
    }
});
var i = n(735250), r = n(470079), o = n(512722), a = n.n(o), s = n(881602), l = n(317269), d = n(669079), c = n(296848), C = n(987209), u = n(598), _ = n(614277), p = n(698708);
function f(e) {
    var t, n;
    let o, {
            handleClose: f,
            planGroup: x,
            onSubscriptionConfirmation: h,
            renderPurchaseConfirmation: b,
            postSuccessGuild: g,
            followupSKUInfo: m,
            continueSession: L
        } = e, {
            activeSubscription: I,
            paymentSources: E,
            paymentSourceId: M,
            selectedPlan: T,
            selectedSkuId: S,
            step: N,
            updatedSubscription: j,
            startingPremiumSubscriptionPlanIdRef: A
        } = (0, u.usePaymentContext)(), {
            isGift: O,
            giftRecipient: R,
            giftCode: P,
            hasSentMessage: y,
            isSendingMessage: v,
            sendGiftMessage: B
        } = (0, C.wD)();
    a()(null != T, 'Expected plan to selected'), a()(null != S, 'Expected selectedSkuId'), a()(null != N, 'Step should be set');
    let k = r.useCallback(() => {
        f(), null == h || h();
    }, [
        f,
        h
    ]);
    return r.useEffect(() => {
        if (!(!O || null == R || null == P || y || v || (0, d.pO)(R)))
            s.F.getCurrentConfig({ location: '36b986_1' }).enabled && B({ onSubscriptionConfirmation: h });
    }, [
        B,
        O,
        R,
        P,
        y,
        v,
        h
    ]), o = null != b ? b(T, k, j) : L ? (0, i.jsx)(l.VY, {}) : O ? (0, i.jsx)(l.TB, {
        planId: T.id,
        onClose: k
    }) : A.current === T.id ? (0, i.jsx)(l.ZP, {
        planId: T.id,
        postSuccessGuild: g,
        onClose: k,
        paymentSourceType: null === (t = E[null != M ? M : '']) || void 0 === t ? void 0 : t.type
    }) : (0, i.jsx)(l.ZP, {
        followupSKUInfo: m,
        startingPremiumSubscriptionPlanId: A.current,
        planId: T.id,
        onClose: k,
        isDowngrade: null != I && (0, c.GY)(I, T.id, x),
        paymentSourceType: null === (n = E[null != M ? M : '']) || void 0 === n ? void 0 : n.type
    }), (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)(_.C3, {
            children: [
                (0, i.jsx)(p.Z, {}),
                o
            ]
        })
    });
}
