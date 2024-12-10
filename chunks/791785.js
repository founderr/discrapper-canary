n.r(t),
    n.d(t, {
        PaymentModal: function () {
            return W;
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
    u = n(399606),
    s = n(481060),
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
    N = n(104494),
    h = n(176919),
    g = n(711007),
    A = n(459965),
    v = n(509545),
    R = n(580130),
    x = n(626135),
    P = n(669079),
    I = n(74538),
    M = n(987209),
    b = n(563132),
    y = n(409813),
    O = n(45572),
    D = n(784707),
    Z = n(614223),
    k = n(48175),
    F = n(928886),
    w = n(456251),
    j = n(614277),
    H = n(981631),
    U = n(474936),
    B = n(388032),
    V = n(293803);
function W(e) {
    let { analyticsLocations: t, analyticsLocation: n, analyticsObject: a, analyticsSourceLocation: u, analyticsSubscriptionType: c = H.NYc.PREMIUM, onComplete: d, transitionState: f, initialPlanId: L, subscriptionTier: S, onClose: R, trialId: Z, trialFooterMessageOverride: k, reviewWarningMessage: w, planGroup: W = U.Y1, openInvoiceId: Y, onSubscriptionConfirmation: z, renderPurchaseConfirmation: G, postSuccessGuild: K, followupSKUInfo: $, renderHeader: Q, applicationId: q, guildId: J, referralTrialOfferId: X, skuId: ee, onStepChange: et, shakeWhilePurchasing: en = !1, isLargeModal: ei = !1, hideShadow: el = !1, returnRef: ea, skipConfirm: er = !1, continueSessionToInitialStep: eo } = e,
        { activitySessionId: eu, purchaseState: es, setPurchaseState: ec, selectedSkuId: ed, setSelectedSkuId: ef, selectedPlan: eC, setSelectedPlanId: e_, setSelectedPlanNotification: em, setStep: eL, setPurchaseError: eS, paymentAuthenticationState: ep, step: eT, contextMetadata: eE, purchaseTokenAuthState: eN, activeSubscription: eh, priceOptions: eg, hasPaymentSources: eA, paymentSourceId: ev, paymentSources: eR, purchaseType: ex, defaultPlanId: eP } = (0, b.usePaymentContext)(),
        eI = (0, D.Z)(),
        eM = s.ModalSize.SMALL;
    ei || (null == eI ? void 0 : eI.isLargeModal) ? (eM = s.ModalSize.LARGE) : (null == eI ? void 0 : eI.isDynamicModal) && (eM = s.ModalSize.DYNAMIC);
    let { isGift: eb, giftRecipient: ey, customGiftMessage: eO, emojiConfetti: eD, soundEffect: eZ } = (0, M.wD)(),
        ek = (0, E.Z)({ location: 'Payment Modal' }),
        eF = (0, N.Ng)(),
        ew = null != S && !eb && (0, N.Wp)(eF, S),
        [ej, eH] = l.useState({
            continue_session_initial_step: eo,
            load_id: eE.loadId,
            payment_type: H.Zuq[ex],
            location: null != n ? n : a,
            source: u,
            subscription_type: c,
            subscription_plan_id: null == eC ? void 0 : eC.id,
            is_gift: eb,
            eligible_for_trial: null != Z,
            location_stack: t,
            sku_id: ee,
            application_id: q,
            guild_id: J,
            payment_modal_version: 'v1',
            activity_session_id: eu,
            eligible_for_discount: ew
        }),
        eU = null != ev ? eR[ev] : null;
    l.useEffect(() => {
        eH((e) => {
            let t = null != eC ? (0, I.aS)(eC.id, !1, eb, eg) : void 0;
            return {
                ...e,
                subscription_plan_id: null == eC ? void 0 : eC.id,
                price: null == t ? void 0 : t.amount,
                regular_price: null == eC ? void 0 : eC.price,
                currency: eg.currency,
                sku_id: ed
            };
        });
    }, [eC, ed, eb, eg]),
        l.useEffect(() => {
            (0, C.U)({
                ...ej,
                has_saved_payment_source: eA
            });
        }, []),
        l.useEffect(() => {
            if ((null != eP && null != eo ? e_(eP) : e_(L), null != ee)) ef(ee);
            else if (null != L) {
                var e;
                ef(null === (e = v.Z.get(L)) || void 0 === e ? void 0 : e.skuId);
            }
        }, [e_, ef, L, ee, eP, eo]);
    let eB = l.useCallback(() => {
            let e = (0, P.MY)(ey) === P.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            x.default.track(H.rMx.PAYMENT_FLOW_SUCCEEDED, {
                ...ej,
                is_custom_message_edited: eb && e && null != eO ? eO !== B.intl.string(B.t.ZkOo1d) : void 0,
                is_custom_emoji_sound_available: eb && e,
                emoji_name: eb && e && (null == eD ? void 0 : eD.id) == null ? (null == eD ? void 0 : eD.surrogates) : void 0,
                sound_id: eb && e ? (null == eZ ? void 0 : eZ.soundId) : void 0,
                duration_ms: t - eE.startTime,
                payment_source_type: null == eU ? void 0 : eU.type
            });
            let { enabled: i } = m.w.getCurrentConfig({ location: 'PaymentModal emitPaymentFlowSuccess' }, { autoTrackExposure: !1 });
            eb && null != ey && null != n && i && (0, T.n)(n) && (0, p.Ni)(ey.id);
        }, [ej, eD, eO, ey, eb, eZ, eE.startTime, eU, n]),
        eV = l.useMemo(() => () => (null == R ? void 0 : R(es === O.A.COMPLETED, ed)), [R, es, ed]),
        eW = (0, o.Z)(() => Date.now(), [eT]),
        eY = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: l, emitPaymentFlowLoadedEvent: a } = t,
                    r = Date.now();
                if (e === y.h8.CONFIRM && (eB(), null == d || d(l), er)) {
                    eV();
                    return;
                }
                eL(e), null == et || et(e), eS(null), em(null);
                let o = null != n ? n : eT;
                if (null === o || a) {
                    x.default.track(H.rMx.PAYMENT_FLOW_LOADED, {
                        ...ej,
                        initial_step: null != o ? o : e,
                        has_saved_payment_source: eA
                    });
                    return;
                }
                x.default.track(H.rMx.PAYMENT_FLOW_STEP, {
                    ...ej,
                    ...i,
                    from_step: o,
                    to_step: e === y.h8.ADD_PAYMENT_STEPS ? y.h8.PAYMENT_TYPE : e,
                    step_duration_ms: r - eW,
                    flow_duration_ms: r - eE.startTime
                });
            },
            [eL, et, eS, em, eT, ej, eW, eE.startTime, eB, d, er, eV, eA]
        );
    (0, h.bp)(eT, ep, eY, ec), (0, y.dZ)(eT, es, ec), (0, g.p)(eT, eN, eY), (0, _.Z)(eV), (0, A.w)(eh, () => R(!1), eb), (0, h.D6)(ep);
    let ez = (0, F.U)({
        renderHeader: Q,
        referralTrialOfferId: X,
        handleClose: eV
    });
    return (0, i.jsx)(s.Shaker, {
        className: r()(V.shaker, { [V.halloweenModalHeight]: ek }),
        isShaking: en && es === O.A.PURCHASING,
        intensity: 2,
        children: (0, i.jsx)(s.ModalRoot, {
            className: r()(V.root, {
                [V.withHeader]: null != ez,
                [V.halloweenModalHeight]: ek
            }),
            transitionState: f,
            hideShadow: el,
            returnRef: ea,
            size: eM,
            children: (0, i.jsx)(j.ZP, {
                header: ez,
                isLargeModal: ei || (null == eI ? void 0 : eI.isLargeModal),
                isDynamicModal: null == eI ? void 0 : eI.isDynamicModal,
                initialPlanId: L,
                subscriptionTier: S,
                handleStepChange: eY,
                handleClose: eV,
                analyticsData: ej,
                setAnalyticsData: eH,
                trialId: Z,
                trialFooterMessageOverride: k,
                reviewWarningMessage: w,
                planGroup: W,
                openInvoiceId: Y,
                analyticsLocation: n,
                onSubscriptionConfirmation: z,
                renderPurchaseConfirmation: G,
                postSuccessGuild: K,
                followupSKUInfo: $,
                referralTrialOfferId: X,
                skipConfirm: er,
                continueSessionToInitialStep: eo
            })
        })
    });
}
function Y(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: a, referralTrialOfferId: r, handleClose: o, continueSessionToInitialStep: s } = e,
        { activeSubscription: C, blockedPayments: _, hasFetchedSubscriptions: m, hasFetchedSubscriptionPlans: p, currencyLoading: T, selectedSkuId: E, setSelectedPlanId: N, defaultPlanId: h, startedPaymentFlowWithPaymentSourcesRef: g, repeatPurchase: A } = (0, b.usePaymentContext)(),
        { isGift: v } = (0, M.wD)(),
        x = g.current,
        P = (0, k.Z)({
            isGift: v,
            skuId: E,
            referralTrialOfferId: r
        }),
        { defaultToMonthlyPlan: I } = S.k.getCurrentConfig({ location: '055ec5_1' }, { autoTrackExposure: !1 }),
        { redirectToPlanSelectStep: O } = L.m.useExperiment({ location: 'PaymentPredicateStep' }, { autoTrackExposure: !1 }),
        [D, F] = l.useState(!0),
        j = (0, u.e7)([R.Z], () => R.Z.applicationIdsFetched.has(U.CL));
    return (l.useEffect(() => {
        F(!m || !p || T);
    }, [T, p, m]),
    (0, d.Z)(
        'Payment Modal',
        D,
        5,
        {
            hasFetchedSubscriptions: m,
            hasFetchedSubscriptionPlans: p,
            currencyLoading: T
        },
        { tags: { app_context: 'billing' } }
    ),
    l.useEffect(() => {
        if ((!j && (0, c.yD)(U.CL), D || _)) return;
        let e = (0, Z.Kp)({
            isTrial: P,
            isGift: v,
            selectedSkuId: E,
            startedPaymentFlowWithPaymentSources: x
        });
        null != s
            ? a(y.h8.ADD_PAYMENT_STEPS, {
                  emitPaymentFlowLoadedEvent: !0,
                  trackedFromStep: s
              })
            : null != n
              ? a(A && O ? y.h8.PLAN_SELECT : y.h8.REVIEW)
              : e
                ? (N((0, Z.nA)(E, C, h)), a(y.h8.REVIEW))
                : null != t
                  ? a(y.h8.PLAN_SELECT)
                  : a(y.h8.SKU_SELECT);
    }, [s, C, _, j, n, D, a, t, E, N, I, P, h, v, x, A, O]),
    D)
        ? (0, i.jsx)(w.Z, {})
        : _
          ? (0, i.jsx)(f.Vq, { onClose: o })
          : null;
}
