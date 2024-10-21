n.r(t),
    n.d(t, {
        PaymentModal: function () {
            return W;
        },
        PaymentPredicateStep: function () {
            return V;
        }
    }),
    n(47120);
var i = n(735250),
    l = n(470079),
    a = n(120356),
    r = n.n(a),
    s = n(792986),
    o = n(399606),
    u = n(481060),
    c = n(496929),
    d = n(975608),
    _ = n(89057),
    f = n(232127),
    C = n(382577),
    L = n(522558),
    m = n(522489),
    T = n(439017),
    E = n(795448),
    S = n(317271),
    p = n(857039),
    N = n(104494),
    h = n(176919),
    A = n(711007),
    g = n(459965),
    R = n(509545),
    I = n(580130),
    M = n(626135),
    v = n(669079),
    x = n(74538),
    P = n(987209),
    O = n(598),
    Z = n(409813),
    y = n(45572),
    b = n(784707),
    F = n(614223),
    D = n(48175),
    k = n(928886),
    w = n(456251),
    j = n(614277),
    H = n(981631),
    U = n(474936),
    B = n(689938),
    G = n(677825);
function W(e) {
    let { analyticsLocations: t, analyticsLocation: n, analyticsObject: a, analyticsSourceLocation: o, analyticsSubscriptionType: c = H.NYc.PREMIUM, onComplete: d, transitionState: _, initialPlanId: m, subscriptionTier: T, onClose: I, trialId: F, trialFooterMessageOverride: D, reviewWarningMessage: w, planGroup: W = U.Y1, openInvoiceId: V, onSubscriptionConfirmation: Y, renderPurchaseConfirmation: z, postSuccessGuild: K, followupSKUInfo: Q, renderHeader: $, applicationId: q, guildId: J, referralTrialOfferId: X, skuId: ee, onStepChange: et, shakeWhilePurchasing: en = !1, isLargeModal: ei = !1, hideShadow: el = !1, returnRef: ea, skipConfirm: er = !1, continueSession: es = !1 } = e,
        { activitySessionId: eo, purchaseState: eu, setPurchaseState: ec, selectedSkuId: ed, setSelectedSkuId: e_, selectedPlan: ef, setSelectedPlanId: eC, setStep: eL, setPurchaseError: em, paymentAuthenticationState: eT, step: eE, contextMetadata: eS, purchaseTokenAuthState: ep, activeSubscription: eN, priceOptions: eh, hasPaymentSources: eA, paymentSourceId: eg, paymentSources: eR, purchaseType: eI, defaultPlanId: eM } = (0, O.usePaymentContext)(),
        ev = (0, b.Z)(),
        ex = ei || (null == ev ? void 0 : ev.isLargeModal) ? u.ModalSize.LARGE : u.ModalSize.SMALL,
        { isGift: eP, giftRecipient: eO, customGiftMessage: eZ, emojiConfetti: ey, soundEffect: eb } = (0, P.wD)(),
        eF = (0, p.Z)({ location: 'Payment Modal' }),
        eD = (0, N.Ng)(),
        ek = null != T && !eP && (0, N.Wp)(eD, T),
        [ew, ej] = l.useState({
            load_id: eS.loadId,
            payment_type: H.Zuq[eI],
            location: null != n ? n : a,
            source: o,
            subscription_type: c,
            subscription_plan_id: null == ef ? void 0 : ef.id,
            is_gift: eP,
            eligible_for_trial: null != F,
            location_stack: t,
            sku_id: ee,
            application_id: q,
            guild_id: J,
            payment_modal_version: 'v1',
            activity_session_id: eo,
            eligible_for_discount: ek
        }),
        eH = null != eg ? eR[eg] : null;
    l.useEffect(() => {
        ej((e) => {
            let t = null != ef ? (0, x.aS)(ef.id, !1, eP, eh) : void 0;
            return {
                ...e,
                subscription_plan_id: null == ef ? void 0 : ef.id,
                price: null == t ? void 0 : t.amount,
                regular_price: null == ef ? void 0 : ef.price,
                currency: eh.currency,
                sku_id: ed
            };
        });
    }, [ef, ed, eP, eh]),
        l.useEffect(() => {
            (0, f.U)({
                ...ew,
                has_saved_payment_source: eA
            });
        }, []),
        l.useEffect(() => {
            if ((null != eM && es ? eC(eM) : eC(m), null != ee)) e_(ee);
            else if (null != m) {
                var e;
                e_(null === (e = R.Z.get(m)) || void 0 === e ? void 0 : e.skuId);
            }
        }, [eC, e_, m, ee, eM, es]);
    let eU = l.useCallback(() => {
            let e = (0, v.MY)(eO) === v.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            M.default.track(H.rMx.PAYMENT_FLOW_SUCCEEDED, {
                ...ew,
                is_custom_message_edited: eP && e && null != eZ ? eZ !== B.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : void 0,
                is_custom_emoji_sound_available: eP && e,
                emoji_name: eP && e && (null == ey ? void 0 : ey.id) == null ? (null == ey ? void 0 : ey.surrogates) : void 0,
                sound_id: eP && e ? (null == eb ? void 0 : eb.soundId) : void 0,
                duration_ms: t - eS.startTime,
                payment_source_type: null == eH ? void 0 : eH.type
            });
            let { enabled: i } = L.w.getCurrentConfig({ location: 'PaymentModal emitPaymentFlowSuccess' }, { autoTrackExposure: !1 });
            eP && null != eO && null != n && i && (0, S.n)(n) && (0, E.Ni)(eO.id);
        }, [ew, ey, eZ, eO, eP, eb, eS.startTime, eH, n]),
        eB = l.useMemo(() => () => (null == I ? void 0 : I(eu === y.A.COMPLETED, ed)), [I, eu, ed]),
        eG = (0, s.Z)(() => Date.now(), [eE]),
        eW = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: l } = t,
                    a = Date.now();
                if (e === Z.h8.CONFIRM && (eU(), null == d || d(l), er)) {
                    eB();
                    return;
                }
                eL(e), null == et || et(e), em(null);
                let r = null != n ? n : eE;
                if (null === r) {
                    M.default.track(H.rMx.PAYMENT_FLOW_LOADED, {
                        ...ew,
                        initial_step: e,
                        has_saved_payment_source: eA
                    });
                    return;
                }
                M.default.track(H.rMx.PAYMENT_FLOW_STEP, {
                    ...ew,
                    ...i,
                    from_step: r,
                    to_step: e === Z.h8.ADD_PAYMENT_STEPS ? Z.h8.PAYMENT_TYPE : e,
                    step_duration_ms: a - eG,
                    flow_duration_ms: a - eS.startTime
                });
            },
            [eL, et, em, eE, ew, eG, eS.startTime, eU, d, er, eB, eA]
        );
    (0, h.bp)(eE, eT, eW, ec), (0, Z.dZ)(eE, eu, ec), (0, A.p)(eE, ep, eW), (0, C.Z)(eB), (0, g.w)(eN, () => I(!1), eP), (0, h.D6)(eT);
    let eV = (0, k.U)({
        renderHeader: $,
        referralTrialOfferId: X,
        handleClose: eB
    });
    return (0, i.jsx)(u.Shaker, {
        className: r()(G.shaker, { [G.halloweenModalHeight]: eF }),
        isShaking: en && eu === y.A.PURCHASING,
        intensity: 2,
        children: (0, i.jsx)(u.ModalRoot, {
            className: r()(G.root, {
                [G.withHeader]: null != eV,
                [G.halloweenModalHeight]: eF
            }),
            transitionState: _,
            hideShadow: el,
            returnRef: ea,
            size: ex,
            children: (0, i.jsx)(j.ZP, {
                header: eV,
                isLargeModal: ei || (null == ev ? void 0 : ev.isLargeModal),
                initialPlanId: m,
                subscriptionTier: T,
                handleStepChange: eW,
                handleClose: eB,
                analyticsData: ew,
                setAnalyticsData: ej,
                trialId: F,
                trialFooterMessageOverride: D,
                reviewWarningMessage: w,
                planGroup: W,
                openInvoiceId: V,
                analyticsLocation: n,
                onSubscriptionConfirmation: Y,
                renderPurchaseConfirmation: z,
                postSuccessGuild: K,
                followupSKUInfo: Q,
                referralTrialOfferId: X,
                skipConfirm: er,
                continueSession: es
            })
        })
    });
}
function V(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: a, referralTrialOfferId: r, handleClose: s, continueSession: u } = e,
        { activeSubscription: f, blockedPayments: C, hasFetchedSubscriptions: L, hasFetchedSubscriptionPlans: E, currencyLoading: S, selectedSkuId: p, setSelectedPlanId: N, defaultPlanId: h, startedPaymentFlowWithPaymentSourcesRef: A, repeatPurchase: g } = (0, O.usePaymentContext)(),
        { isGift: R } = (0, P.wD)(),
        M = A.current,
        v = (0, D.Z)({
            isGift: R,
            skuId: p,
            referralTrialOfferId: r
        }),
        { defaultToMonthlyPlan: x } = T.k.getCurrentConfig({ location: '055ec5_1' }, { autoTrackExposure: !1 }),
        { redirectToPlanSelectStep: y } = m.m.useExperiment({ location: 'PaymentPredicateStep' }, { autoTrackExposure: !1 }),
        [b, k] = l.useState(!0),
        j = (0, o.e7)([I.Z], () => I.Z.applicationIdsFetched.has(U.CL));
    return (l.useEffect(() => {
        k(!L || !E || S);
    }, [S, E, L]),
    (0, d.Z)(
        'Payment Modal',
        b,
        5,
        {
            hasFetchedSubscriptions: L,
            hasFetchedSubscriptionPlans: E,
            currencyLoading: S
        },
        { tags: { app_context: 'billing' } }
    ),
    l.useEffect(() => {
        if ((!j && (0, c.yD)(U.CL), b || C)) return;
        let e = (0, F.Kp)({
            isTrial: v,
            isGift: R,
            selectedSkuId: p,
            startedPaymentFlowWithPaymentSources: M
        });
        u ? a(Z.h8.ADD_PAYMENT_STEPS) : null != n ? a(g && y ? Z.h8.PLAN_SELECT : Z.h8.REVIEW) : e ? (N((0, F.nA)(p, f, h)), a(Z.h8.REVIEW)) : null != t ? a(Z.h8.PLAN_SELECT) : a(Z.h8.SKU_SELECT);
    }, [f, C, j, n, b, a, t, p, N, x, v, h, R, M, u, g, y]),
    b)
        ? (0, i.jsx)(w.Z, {})
        : C
          ? (0, i.jsx)(_.Vq, { onClose: s })
          : null;
}
