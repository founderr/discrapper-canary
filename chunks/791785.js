n.r(t),
    n.d(t, {
        PaymentModal: function () {
            return V;
        },
        PaymentPredicateStep: function () {
            return Y;
        }
    }),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    o = n(252759),
    s = n(399606),
    u = n(481060),
    c = n(496929),
    d = n(975608),
    f = n(89057),
    C = n(232127),
    _ = n(382577),
    m = n(522558),
    L = n(522489),
    S = n(439017),
    p = n(795448),
    T = n(317271),
    E = n(857039),
    h = n(104494),
    N = n(176919),
    g = n(711007),
    A = n(459965),
    v = n(509545),
    R = n(580130),
    x = n(626135),
    I = n(669079),
    P = n(74538),
    M = n(987209),
    y = n(563132),
    b = n(409813),
    O = n(45572),
    Z = n(784707),
    D = n(614223),
    k = n(48175),
    F = n(928886),
    w = n(456251),
    j = n(614277),
    H = n(981631),
    U = n(474936),
    B = n(388032),
    W = n(293803);
function V(e) {
    let { analyticsLocations: t, analyticsLocation: n, analyticsObject: a, analyticsSourceLocation: s, analyticsSubscriptionType: c = H.NYc.PREMIUM, onComplete: d, transitionState: f, initialPlanId: L, subscriptionTier: S, onClose: R, trialId: D, trialFooterMessageOverride: k, reviewWarningMessage: w, planGroup: V = U.Y1, openInvoiceId: Y, onSubscriptionConfirmation: z, renderPurchaseConfirmation: G, postSuccessGuild: K, followupSKUInfo: Q, renderHeader: $, applicationId: q, guildId: J, referralTrialOfferId: X, skuId: ee, onStepChange: et, shakeWhilePurchasing: en = !1, isLargeModal: ei = !1, hideShadow: el = !1, returnRef: ea, skipConfirm: er = !1, continueSessionToInitialStep: eo } = e,
        { activitySessionId: es, purchaseState: eu, setPurchaseState: ec, selectedSkuId: ed, setSelectedSkuId: ef, selectedPlan: eC, setSelectedPlanId: e_, setStep: em, setPurchaseError: eL, paymentAuthenticationState: eS, step: ep, contextMetadata: eT, purchaseTokenAuthState: eE, activeSubscription: eh, priceOptions: eN, hasPaymentSources: eg, paymentSourceId: eA, paymentSources: ev, purchaseType: eR, defaultPlanId: ex } = (0, y.usePaymentContext)(),
        eI = (0, Z.Z)(),
        eP = u.ModalSize.SMALL;
    ei || (null == eI ? void 0 : eI.isLargeModal) ? (eP = u.ModalSize.LARGE) : (null == eI ? void 0 : eI.isDynamicModal) && (eP = u.ModalSize.DYNAMIC);
    let { isGift: eM, giftRecipient: ey, customGiftMessage: eb, emojiConfetti: eO, soundEffect: eZ } = (0, M.wD)(),
        eD = (0, E.Z)({ location: 'Payment Modal' }),
        ek = (0, h.Ng)(),
        eF = null != S && !eM && (0, h.Wp)(ek, S),
        [ew, ej] = l.useState({
            continue_session_initial_step: eo,
            load_id: eT.loadId,
            payment_type: H.Zuq[eR],
            location: null != n ? n : a,
            source: s,
            subscription_type: c,
            subscription_plan_id: null == eC ? void 0 : eC.id,
            is_gift: eM,
            eligible_for_trial: null != D,
            location_stack: t,
            sku_id: ee,
            application_id: q,
            guild_id: J,
            payment_modal_version: 'v1',
            activity_session_id: es,
            eligible_for_discount: eF
        }),
        eH = null != eA ? ev[eA] : null;
    l.useEffect(() => {
        ej((e) => {
            let t = null != eC ? (0, P.aS)(eC.id, !1, eM, eN) : void 0;
            return {
                ...e,
                subscription_plan_id: null == eC ? void 0 : eC.id,
                price: null == t ? void 0 : t.amount,
                regular_price: null == eC ? void 0 : eC.price,
                currency: eN.currency,
                sku_id: ed
            };
        });
    }, [eC, ed, eM, eN]),
        l.useEffect(() => {
            (0, C.U)({
                ...ew,
                has_saved_payment_source: eg
            });
        }, []),
        l.useEffect(() => {
            if ((null != ex && null != eo ? e_(ex) : e_(L), null != ee)) ef(ee);
            else if (null != L) {
                var e;
                ef(null === (e = v.Z.get(L)) || void 0 === e ? void 0 : e.skuId);
            }
        }, [e_, ef, L, ee, ex, eo]);
    let eU = l.useCallback(() => {
            let e = (0, I.MY)(ey) === I.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            x.default.track(H.rMx.PAYMENT_FLOW_SUCCEEDED, {
                ...ew,
                is_custom_message_edited: eM && e && null != eb ? eb !== B.intl.string(B.t.ZkOo1d) : void 0,
                is_custom_emoji_sound_available: eM && e,
                emoji_name: eM && e && (null == eO ? void 0 : eO.id) == null ? (null == eO ? void 0 : eO.surrogates) : void 0,
                sound_id: eM && e ? (null == eZ ? void 0 : eZ.soundId) : void 0,
                duration_ms: t - eT.startTime,
                payment_source_type: null == eH ? void 0 : eH.type
            });
            let { enabled: i } = m.w.getCurrentConfig({ location: 'PaymentModal emitPaymentFlowSuccess' }, { autoTrackExposure: !1 });
            eM && null != ey && null != n && i && (0, T.n)(n) && (0, p.Ni)(ey.id);
        }, [ew, eO, eb, ey, eM, eZ, eT.startTime, eH, n]),
        eB = l.useMemo(() => () => (null == R ? void 0 : R(eu === O.A.COMPLETED, ed)), [R, eu, ed]),
        eW = (0, o.Z)(() => Date.now(), [ep]),
        eV = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: l, emitPaymentFlowLoadedEvent: a } = t,
                    r = Date.now();
                if (e === b.h8.CONFIRM && (eU(), null == d || d(l), er)) {
                    eB();
                    return;
                }
                em(e), null == et || et(e), eL(null);
                let o = null != n ? n : ep;
                if (null === o || a) {
                    x.default.track(H.rMx.PAYMENT_FLOW_LOADED, {
                        ...ew,
                        initial_step: null != o ? o : e,
                        has_saved_payment_source: eg
                    });
                    return;
                }
                x.default.track(H.rMx.PAYMENT_FLOW_STEP, {
                    ...ew,
                    ...i,
                    from_step: o,
                    to_step: e === b.h8.ADD_PAYMENT_STEPS ? b.h8.PAYMENT_TYPE : e,
                    step_duration_ms: r - eW,
                    flow_duration_ms: r - eT.startTime
                });
            },
            [em, et, eL, ep, ew, eW, eT.startTime, eU, d, er, eB, eg]
        );
    (0, N.bp)(ep, eS, eV, ec), (0, b.dZ)(ep, eu, ec), (0, g.p)(ep, eE, eV), (0, _.Z)(eB), (0, A.w)(eh, () => R(!1), eM), (0, N.D6)(eS);
    let eY = (0, F.U)({
        renderHeader: $,
        referralTrialOfferId: X,
        handleClose: eB
    });
    return (0, i.jsx)(u.Shaker, {
        className: r()(W.shaker, { [W.halloweenModalHeight]: eD }),
        isShaking: en && eu === O.A.PURCHASING,
        intensity: 2,
        children: (0, i.jsx)(u.ModalRoot, {
            className: r()(W.root, {
                [W.withHeader]: null != eY,
                [W.halloweenModalHeight]: eD
            }),
            transitionState: f,
            hideShadow: el,
            returnRef: ea,
            size: eP,
            children: (0, i.jsx)(j.ZP, {
                header: eY,
                isLargeModal: ei || (null == eI ? void 0 : eI.isLargeModal),
                isDynamicModal: null == eI ? void 0 : eI.isDynamicModal,
                initialPlanId: L,
                subscriptionTier: S,
                handleStepChange: eV,
                handleClose: eB,
                analyticsData: ew,
                setAnalyticsData: ej,
                trialId: D,
                trialFooterMessageOverride: k,
                reviewWarningMessage: w,
                planGroup: V,
                openInvoiceId: Y,
                analyticsLocation: n,
                onSubscriptionConfirmation: z,
                renderPurchaseConfirmation: G,
                postSuccessGuild: K,
                followupSKUInfo: Q,
                referralTrialOfferId: X,
                skipConfirm: er,
                continueSessionToInitialStep: eo
            })
        })
    });
}
function Y(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: a, referralTrialOfferId: r, handleClose: o, continueSessionToInitialStep: u } = e,
        { activeSubscription: C, blockedPayments: _, hasFetchedSubscriptions: m, hasFetchedSubscriptionPlans: p, currencyLoading: T, selectedSkuId: E, setSelectedPlanId: h, defaultPlanId: N, startedPaymentFlowWithPaymentSourcesRef: g, repeatPurchase: A } = (0, y.usePaymentContext)(),
        { isGift: v } = (0, M.wD)(),
        x = g.current,
        I = (0, k.Z)({
            isGift: v,
            skuId: E,
            referralTrialOfferId: r
        }),
        { defaultToMonthlyPlan: P } = S.k.getCurrentConfig({ location: '055ec5_1' }, { autoTrackExposure: !1 }),
        { redirectToPlanSelectStep: O } = L.m.useExperiment({ location: 'PaymentPredicateStep' }, { autoTrackExposure: !1 }),
        [Z, F] = l.useState(!0),
        j = (0, s.e7)([R.Z], () => R.Z.applicationIdsFetched.has(U.CL));
    return (l.useEffect(() => {
        F(!m || !p || T);
    }, [T, p, m]),
    (0, d.Z)(
        'Payment Modal',
        Z,
        5,
        {
            hasFetchedSubscriptions: m,
            hasFetchedSubscriptionPlans: p,
            currencyLoading: T
        },
        { tags: { app_context: 'billing' } }
    ),
    l.useEffect(() => {
        if ((!j && (0, c.yD)(U.CL), Z || _)) return;
        let e = (0, D.Kp)({
            isTrial: I,
            isGift: v,
            selectedSkuId: E,
            startedPaymentFlowWithPaymentSources: x
        });
        null != u
            ? a(b.h8.ADD_PAYMENT_STEPS, {
                  emitPaymentFlowLoadedEvent: !0,
                  trackedFromStep: u
              })
            : null != n
              ? a(A && O ? b.h8.PLAN_SELECT : b.h8.REVIEW)
              : e
                ? (h((0, D.nA)(E, C, N)), a(b.h8.REVIEW))
                : null != t
                  ? a(b.h8.PLAN_SELECT)
                  : a(b.h8.SKU_SELECT);
    }, [u, C, _, j, n, Z, a, t, E, h, P, I, N, v, x, A, O]),
    Z)
        ? (0, i.jsx)(w.Z, {})
        : _
          ? (0, i.jsx)(f.Vq, { onClose: o })
          : null;
}
