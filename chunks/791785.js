t.r(n),
    t.d(n, {
        PaymentModal: function () {
            return j;
        },
        PaymentPredicateStep: function () {
            return K;
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
    m = t(522558),
    T = t(522489),
    p = t(439017),
    g = t(795448),
    A = t(317271),
    P = t(857039),
    S = t(104494),
    M = t(176919),
    h = t(711007),
    v = t(459965),
    y = t(509545),
    I = t(580130),
    N = t(626135),
    C = t(669079),
    R = t(74538),
    L = t(987209),
    k = t(598),
    Z = t(409813),
    O = t(45572),
    b = t(784707),
    w = t(614223),
    x = t(48175),
    D = t(928886),
    U = t(456251),
    G = t(614277),
    Y = t(981631),
    W = t(474936),
    F = t(689938),
    H = t(677825);
function j(e) {
    let { analyticsLocations: n, analyticsLocation: t, analyticsObject: u, analyticsSourceLocation: r, analyticsSubscriptionType: d = Y.NYc.PREMIUM, onComplete: c, transitionState: _, initialPlanId: T, subscriptionTier: p, onClose: I, trialId: w, trialFooterMessageOverride: x, reviewWarningMessage: U, planGroup: j = W.Y1, openInvoiceId: K, onSubscriptionConfirmation: B, renderPurchaseConfirmation: V, postSuccessGuild: X, followupSKUInfo: $, renderHeader: z, applicationId: q, guildId: J, referralTrialOfferId: Q, skuId: ee, onStepChange: en, shakeWhilePurchasing: et = !1, isLargeModal: el = !1, hideShadow: ei = !1, returnRef: eu, skipConfirm: eo = !1, continueSession: ea = !1 } = e,
        { activitySessionId: er, purchaseState: es, setPurchaseState: ed, selectedSkuId: ec, setSelectedSkuId: e_, selectedPlan: ef, setSelectedPlanId: eE, setStep: em, setPurchaseError: eT, paymentAuthenticationState: ep, step: eg, contextMetadata: eA, purchaseTokenAuthState: eP, activeSubscription: eS, priceOptions: eM, hasPaymentSources: eh, paymentSourceId: ev, paymentSources: ey, purchaseType: eI, defaultPlanId: eN } = (0, k.usePaymentContext)(),
        eC = (0, b.Z)(),
        eR = el || (null == eC ? void 0 : eC.isLargeModal) ? s.ModalSize.LARGE : s.ModalSize.SMALL,
        { isGift: eL, giftRecipient: ek, customGiftMessage: eZ, emojiConfetti: eO, soundEffect: eb } = (0, L.wD)(),
        ew = (0, P.Z)({ location: 'Payment Modal' }),
        ex = (0, S.Ng)(),
        eD = null != p && !eL && (0, S.Wp)(ex, p),
        [eU, eG] = i.useState({
            load_id: eA.loadId,
            payment_type: Y.Zuq[eI],
            location: null != t ? t : u,
            source: r,
            subscription_type: d,
            subscription_plan_id: null == ef ? void 0 : ef.id,
            is_gift: eL,
            eligible_for_trial: null != w,
            location_stack: n,
            sku_id: ee,
            application_id: q,
            guild_id: J,
            payment_modal_version: 'v1',
            activity_session_id: er,
            eligible_for_discount: eD
        }),
        eY = null != ev ? ey[ev] : null;
    i.useEffect(() => {
        eG((e) => {
            let n = null != ef ? (0, R.aS)(ef.id, !1, eL, eM) : void 0;
            return {
                ...e,
                subscription_plan_id: null == ef ? void 0 : ef.id,
                price: null == n ? void 0 : n.amount,
                regular_price: null == ef ? void 0 : ef.price,
                currency: eM.currency,
                sku_id: ec
            };
        });
    }, [ef, ec, eL, eM]),
        i.useEffect(() => {
            (0, f.U)({
                ...eU,
                has_saved_payment_source: eh
            });
        }, []),
        i.useEffect(() => {
            if ((null != eN && ea ? eE(eN) : eE(T), null != ee)) e_(ee);
            else if (null != T) {
                var e;
                e_(null === (e = y.Z.get(T)) || void 0 === e ? void 0 : e.skuId);
            }
        }, [eE, e_, T, ee, eN, ea]);
    let eW = i.useCallback(() => {
            let e = (0, C.MY)(ek) === C.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                n = Date.now();
            N.default.track(Y.rMx.PAYMENT_FLOW_SUCCEEDED, {
                ...eU,
                is_custom_message_edited: eL && e && null != eZ ? eZ !== F.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : void 0,
                is_custom_emoji_sound_available: eL && e,
                emoji_name: eL && e && (null == eO ? void 0 : eO.id) == null ? (null == eO ? void 0 : eO.surrogates) : void 0,
                sound_id: eL && e ? (null == eb ? void 0 : eb.soundId) : void 0,
                duration_ms: n - eA.startTime,
                payment_source_type: null == eY ? void 0 : eY.type
            });
            let { enabled: l } = m.w.getCurrentConfig({ location: 'PaymentModal emitPaymentFlowSuccess' }, { autoTrackExposure: !1 });
            eL && null != ek && null != t && l && (0, A.n)(t) && (0, g.Ni)(ek.id);
        }, [eU, eO, eZ, ek, eL, eb, eA.startTime, eY, t]),
        eF = i.useMemo(() => () => (null == I ? void 0 : I(es === O.A.COMPLETED, ec)), [I, es, ec]),
        eH = (0, a.Z)(() => Date.now(), [eg]),
        ej = i.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: t, analyticsDataOverride: l, fulfillment: i } = n,
                    u = Date.now();
                if (e === Z.h8.CONFIRM && (eW(), null == c || c(i), eo)) {
                    eF();
                    return;
                }
                em(e), null == en || en(e), eT(null);
                let o = null != t ? t : eg;
                if (null === o) {
                    N.default.track(Y.rMx.PAYMENT_FLOW_LOADED, {
                        ...eU,
                        initial_step: e,
                        has_saved_payment_source: eh
                    });
                    return;
                }
                N.default.track(Y.rMx.PAYMENT_FLOW_STEP, {
                    ...eU,
                    ...l,
                    from_step: o,
                    to_step: e === Z.h8.ADD_PAYMENT_STEPS ? Z.h8.PAYMENT_TYPE : e,
                    step_duration_ms: u - eH,
                    flow_duration_ms: u - eA.startTime
                });
            },
            [em, en, eT, eg, eU, eH, eA.startTime, eW, c, eo, eF, eh]
        );
    (0, M.bp)(eg, ep, ej, ed), (0, Z.dZ)(eg, es, ed), (0, h.p)(eg, eP, ej), (0, E.Z)(eF), (0, v.w)(eS, () => I(!1), eL), (0, M.D6)(ep);
    let eK = (0, D.U)({
        renderHeader: z,
        referralTrialOfferId: Q,
        handleClose: eF
    });
    return (0, l.jsx)(s.Shaker, {
        className: o()(H.shaker, { [H.halloweenModalHeight]: ew }),
        isShaking: et && es === O.A.PURCHASING,
        intensity: 2,
        children: (0, l.jsx)(s.ModalRoot, {
            className: o()(H.root, {
                [H.withHeader]: null != eK,
                [H.halloweenModalHeight]: ew
            }),
            transitionState: _,
            hideShadow: ei,
            returnRef: eu,
            size: eR,
            children: (0, l.jsx)(G.ZP, {
                header: eK,
                isLargeModal: el || (null == eC ? void 0 : eC.isLargeModal),
                initialPlanId: T,
                subscriptionTier: p,
                handleStepChange: ej,
                handleClose: eF,
                analyticsData: eU,
                setAnalyticsData: eG,
                trialId: w,
                trialFooterMessageOverride: x,
                reviewWarningMessage: U,
                planGroup: j,
                openInvoiceId: K,
                analyticsLocation: t,
                onSubscriptionConfirmation: B,
                renderPurchaseConfirmation: V,
                postSuccessGuild: X,
                followupSKUInfo: $,
                referralTrialOfferId: Q,
                skipConfirm: eo,
                continueSession: ea
            })
        })
    });
}
function K(e) {
    let { subscriptionTier: n, initialPlanId: t, handleStepChange: u, referralTrialOfferId: o, handleClose: a, continueSession: s } = e,
        { activeSubscription: f, blockedPayments: E, hasFetchedSubscriptions: m, hasFetchedSubscriptionPlans: g, currencyLoading: A, selectedSkuId: P, setSelectedPlanId: S, defaultPlanId: M, startedPaymentFlowWithPaymentSourcesRef: h, repeatPurchase: v } = (0, k.usePaymentContext)(),
        { isGift: y } = (0, L.wD)(),
        N = h.current,
        C = (0, x.Z)({
            isGift: y,
            skuId: P,
            referralTrialOfferId: o
        }),
        { defaultToMonthlyPlan: R } = p.k.getCurrentConfig({ location: '055ec5_1' }, { autoTrackExposure: !1 }),
        { redirectToPlanSelectStep: O } = T.m.useExperiment({ location: 'PaymentPredicateStep' }, { autoTrackExposure: !1 }),
        [b, D] = i.useState(!0),
        G = (0, r.e7)([I.Z], () => I.Z.applicationIdsFetched.has(W.CL));
    return (i.useEffect(() => {
        D(!m || !g || A);
    }, [A, g, m]),
    (0, c.Z)(
        'Payment Modal',
        b,
        5,
        {
            hasFetchedSubscriptions: m,
            hasFetchedSubscriptionPlans: g,
            currencyLoading: A
        },
        { tags: { app_context: 'billing' } }
    ),
    i.useEffect(() => {
        if ((!G && (0, d.yD)(W.CL), b || E)) return;
        let e = (0, w.Kp)({
            isTrial: C,
            isGift: y,
            selectedSkuId: P,
            startedPaymentFlowWithPaymentSources: N
        });
        s ? u(Z.h8.ADD_PAYMENT_STEPS) : null != t ? u(v && O ? Z.h8.PLAN_SELECT : Z.h8.REVIEW) : e ? (S((0, w.nA)(P, f, M)), u(Z.h8.REVIEW)) : null != n ? u(Z.h8.PLAN_SELECT) : u(Z.h8.SKU_SELECT);
    }, [f, E, G, t, b, u, n, P, S, R, C, M, y, N, s, v, O]),
    b)
        ? (0, l.jsx)(U.Z, {})
        : E
          ? (0, l.jsx)(_.Vq, { onClose: a })
          : null;
}
