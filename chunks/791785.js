t.r(n),
    t.d(n, {
        PaymentModal: function () {
            return W;
        },
        PaymentPredicateStep: function () {
            return F;
        }
    }),
    t(47120);
var l = t(735250),
    i = t(470079),
    u = t(120356),
    o = t.n(u),
    a = t(792986),
    r = t(399606),
    s = t(481060),
    d = t(496929),
    c = t(975608),
    _ = t(89057),
    f = t(232127),
    E = t(382577),
    m = t(522489),
    T = t(439017),
    p = t(857039),
    g = t(104494),
    A = t(176919),
    P = t(711007),
    S = t(459965),
    M = t(509545),
    h = t(580130),
    v = t(626135),
    I = t(669079),
    y = t(74538),
    N = t(987209),
    R = t(598),
    C = t(409813),
    k = t(45572),
    Z = t(784707),
    L = t(614223),
    O = t(48175),
    b = t(928886),
    w = t(456251),
    x = t(614277),
    D = t(981631),
    U = t(474936),
    G = t(689938),
    Y = t(677825);
function W(e) {
    let { analyticsLocations: n, analyticsLocation: t, analyticsObject: u, analyticsSourceLocation: r, analyticsSubscriptionType: d = D.NYc.PREMIUM, onComplete: c, transitionState: _, initialPlanId: m, subscriptionTier: T, onClose: h, trialId: L, trialFooterMessageOverride: O, reviewWarningMessage: w, planGroup: W = U.Y1, openInvoiceId: F, onSubscriptionConfirmation: H, renderPurchaseConfirmation: j, postSuccessGuild: K, followupSKUInfo: B, renderHeader: V, applicationId: X, guildId: $, referralTrialOfferId: z, skuId: Q, onStepChange: q, shakeWhilePurchasing: J = !1, isLargeModal: ee = !1, hideShadow: en = !1, returnRef: et, skipConfirm: el = !1, continueSession: ei = !1 } = e,
        { activitySessionId: eu, purchaseState: eo, setPurchaseState: ea, selectedSkuId: er, setSelectedSkuId: es, selectedPlan: ed, setSelectedPlanId: ec, setStep: e_, setPurchaseError: ef, paymentAuthenticationState: eE, step: em, contextMetadata: eT, purchaseTokenAuthState: ep, activeSubscription: eg, priceOptions: eA, hasPaymentSources: eP, paymentSourceId: eS, paymentSources: eM, purchaseType: eh, defaultPlanId: ev } = (0, R.usePaymentContext)(),
        eI = (0, Z.Z)(),
        ey = ee || (null == eI ? void 0 : eI.isLargeModal) ? s.ModalSize.LARGE : s.ModalSize.SMALL,
        { isGift: eN, giftRecipient: eR, customGiftMessage: eC, emojiConfetti: ek, soundEffect: eZ } = (0, N.wD)(),
        eL = (0, p.Z)({ location: 'Payment Modal' }),
        eO = (0, g.Ng)(),
        eb = null != T && !eN && (0, g.Wp)(eO, T),
        [ew, ex] = i.useState({
            load_id: eT.loadId,
            payment_type: D.Zuq[eh],
            location: null != t ? t : u,
            source: r,
            subscription_type: d,
            subscription_plan_id: null == ed ? void 0 : ed.id,
            is_gift: eN,
            eligible_for_trial: null != L,
            location_stack: n,
            sku_id: Q,
            application_id: X,
            guild_id: $,
            payment_modal_version: 'v1',
            activity_session_id: eu,
            eligible_for_discount: eb
        }),
        eD = null != eS ? eM[eS] : null;
    i.useEffect(() => {
        ex((e) => {
            let n = null != ed ? (0, y.aS)(ed.id, !1, eN, eA) : void 0;
            return {
                ...e,
                subscription_plan_id: null == ed ? void 0 : ed.id,
                price: null == n ? void 0 : n.amount,
                regular_price: null == ed ? void 0 : ed.price,
                currency: eA.currency,
                sku_id: er
            };
        });
    }, [ed, er, eN, eA]),
        i.useEffect(() => {
            (0, f.U)({
                ...ew,
                has_saved_payment_source: eP
            });
        }, []),
        i.useEffect(() => {
            if ((null != ev && ei ? ec(ev) : ec(m), null != Q)) es(Q);
            else if (null != m) {
                var e;
                es(null === (e = M.Z.get(m)) || void 0 === e ? void 0 : e.skuId);
            }
        }, [ec, es, m, Q, ev, ei]);
    let eU = i.useCallback(() => {
            let e = (0, I.MY)(eR) === I.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                n = Date.now();
            v.default.track(D.rMx.PAYMENT_FLOW_SUCCEEDED, {
                ...ew,
                is_custom_message_edited: eN && e && null != eC ? eC !== G.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : void 0,
                is_custom_emoji_sound_available: eN && e,
                emoji_name: eN && e && (null == ek ? void 0 : ek.id) == null ? (null == ek ? void 0 : ek.surrogates) : void 0,
                sound_id: eN && e ? (null == eZ ? void 0 : eZ.soundId) : void 0,
                duration_ms: n - eT.startTime,
                payment_source_type: null == eD ? void 0 : eD.type
            });
        }, [ew, ek, eC, eR, eN, eZ, eT.startTime, eD]),
        eG = i.useMemo(() => () => (null == h ? void 0 : h(eo === k.A.COMPLETED, er)), [h, eo, er]),
        eY = (0, a.Z)(() => Date.now(), [em]),
        eW = i.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: t, analyticsDataOverride: l, fulfillment: i } = n,
                    u = Date.now();
                if (e === C.h8.CONFIRM && (eU(), null == c || c(i), el)) {
                    eG();
                    return;
                }
                e_(e), null == q || q(e), ef(null);
                let o = null != t ? t : em;
                if (null === o) {
                    v.default.track(D.rMx.PAYMENT_FLOW_LOADED, {
                        ...ew,
                        initial_step: e,
                        has_saved_payment_source: eP
                    });
                    return;
                }
                v.default.track(D.rMx.PAYMENT_FLOW_STEP, {
                    ...ew,
                    ...l,
                    from_step: o,
                    to_step: e === C.h8.ADD_PAYMENT_STEPS ? C.h8.PAYMENT_TYPE : e,
                    step_duration_ms: u - eY,
                    flow_duration_ms: u - eT.startTime
                });
            },
            [e_, q, ef, em, ew, eY, eT.startTime, eU, c, el, eG, eP]
        );
    (0, A.bp)(em, eE, eW, ea), (0, C.dZ)(em, eo, ea), (0, P.p)(em, ep, eW), (0, E.Z)(eG), (0, S.w)(eg, () => h(!1), eN), (0, A.D6)(eE);
    let eF = (0, b.U)({
        renderHeader: V,
        referralTrialOfferId: z,
        handleClose: eG
    });
    return (0, l.jsx)(s.Shaker, {
        className: o()(Y.shaker, { [Y.halloweenModalHeight]: eL }),
        isShaking: J && eo === k.A.PURCHASING,
        intensity: 2,
        children: (0, l.jsx)(s.ModalRoot, {
            className: o()(Y.root, {
                [Y.withHeader]: null != eF,
                [Y.halloweenModalHeight]: eL
            }),
            transitionState: _,
            hideShadow: en,
            returnRef: et,
            size: ey,
            children: (0, l.jsx)(x.ZP, {
                header: eF,
                isLargeModal: ee || (null == eI ? void 0 : eI.isLargeModal),
                initialPlanId: m,
                subscriptionTier: T,
                handleStepChange: eW,
                handleClose: eG,
                analyticsData: ew,
                setAnalyticsData: ex,
                trialId: L,
                trialFooterMessageOverride: O,
                reviewWarningMessage: w,
                planGroup: W,
                openInvoiceId: F,
                analyticsLocation: t,
                onSubscriptionConfirmation: H,
                renderPurchaseConfirmation: j,
                postSuccessGuild: K,
                followupSKUInfo: B,
                referralTrialOfferId: z,
                skipConfirm: el,
                continueSession: ei
            })
        })
    });
}
function F(e) {
    let { subscriptionTier: n, initialPlanId: t, handleStepChange: u, referralTrialOfferId: o, handleClose: a, continueSession: s } = e,
        { activeSubscription: f, blockedPayments: E, hasFetchedSubscriptions: p, hasFetchedSubscriptionPlans: g, currencyLoading: A, selectedSkuId: P, setSelectedPlanId: S, defaultPlanId: M, startedPaymentFlowWithPaymentSourcesRef: v, repeatPurchase: I } = (0, R.usePaymentContext)(),
        { isGift: y } = (0, N.wD)(),
        k = v.current,
        Z = (0, O.Z)({
            isGift: y,
            skuId: P,
            referralTrialOfferId: o
        }),
        { defaultToMonthlyPlan: b } = T.k.getCurrentConfig({ location: '055ec5_1' }, { autoTrackExposure: !1 }),
        { redirectToPlanSelectStep: x } = m.m.useExperiment({ location: 'PaymentPredicateStep' }, { autoTrackExposure: !1 }),
        [D, G] = i.useState(!0),
        Y = (0, r.e7)([h.Z], () => h.Z.applicationIdsFetched.has(U.RQ));
    return (i.useEffect(() => {
        G(!p || !g || A);
    }, [A, g, p]),
    (0, c.Z)(
        'Payment Modal',
        D,
        5,
        {
            hasFetchedSubscriptions: p,
            hasFetchedSubscriptionPlans: g,
            currencyLoading: A
        },
        { tags: { app_context: 'billing' } }
    ),
    i.useEffect(() => {
        if ((!Y && (0, d.yD)(U.RQ), D || E)) return;
        let e = (0, L.Kp)({
            isTrial: Z,
            isGift: y,
            selectedSkuId: P,
            startedPaymentFlowWithPaymentSources: k
        });
        s ? u(C.h8.ADD_PAYMENT_STEPS) : null != t ? u(I && x ? C.h8.PLAN_SELECT : C.h8.REVIEW) : e ? (S((0, L.nA)(P, f, M)), u(C.h8.REVIEW)) : null != n ? u(C.h8.PLAN_SELECT) : u(C.h8.SKU_SELECT);
    }, [f, E, Y, t, D, u, n, P, S, b, Z, M, y, k, s, I, x]),
    D)
        ? (0, l.jsx)(w.Z, {})
        : E
          ? (0, l.jsx)(_.Vq, { onClose: a })
          : null;
}
