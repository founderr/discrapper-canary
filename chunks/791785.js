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
    M = n(74538),
    P = n(987209),
    y = n(563132),
    b = n(409813),
    O = n(45572),
    Z = n(784707),
    D = n(614223),
    k = n(48175),
    w = n(928886),
    F = n(456251),
    j = n(614277),
    H = n(981631),
    U = n(474936),
    B = n(388032),
    W = n(293803);
function V(e) {
    let { analyticsLocations: t, analyticsLocation: n, analyticsObject: a, analyticsSourceLocation: s, analyticsSubscriptionType: c = H.NYc.PREMIUM, onComplete: d, transitionState: f, initialPlanId: L, subscriptionTier: S, onClose: R, trialId: D, trialFooterMessageOverride: k, reviewWarningMessage: F, planGroup: V = U.Y1, openInvoiceId: Y, onSubscriptionConfirmation: z, renderPurchaseConfirmation: G, postSuccessGuild: K, followupSKUInfo: Q, renderHeader: $, applicationId: q, guildId: J, referralTrialOfferId: X, skuId: ee, onStepChange: et, shakeWhilePurchasing: en = !1, isLargeModal: ei = !1, hideShadow: el = !1, returnRef: ea, skipConfirm: er = !1, continueSession: eo = !1, continueSessionInitialStep: es } = e,
        { activitySessionId: eu, purchaseState: ec, setPurchaseState: ed, selectedSkuId: ef, setSelectedSkuId: eC, selectedPlan: e_, setSelectedPlanId: em, setStep: eL, setPurchaseError: eS, paymentAuthenticationState: ep, step: eT, contextMetadata: eE, purchaseTokenAuthState: eh, activeSubscription: eN, priceOptions: eg, hasPaymentSources: eA, paymentSourceId: ev, paymentSources: eR, purchaseType: ex, defaultPlanId: eI } = (0, y.usePaymentContext)(),
        eM = (0, Z.Z)(),
        eP = u.ModalSize.SMALL;
    ei || (null == eM ? void 0 : eM.isLargeModal) ? (eP = u.ModalSize.LARGE) : (null == eM ? void 0 : eM.isDynamicModal) && (eP = u.ModalSize.DYNAMIC);
    let { isGift: ey, giftRecipient: eb, customGiftMessage: eO, emojiConfetti: eZ, soundEffect: eD } = (0, P.wD)(),
        ek = (0, E.Z)({ location: 'Payment Modal' }),
        ew = (0, h.Ng)(),
        eF = null != S && !ey && (0, h.Wp)(ew, S),
        [ej, eH] = l.useState({
            continue_session_initial_step: es,
            load_id: eE.loadId,
            payment_type: H.Zuq[ex],
            location: null != n ? n : a,
            source: s,
            subscription_type: c,
            subscription_plan_id: null == e_ ? void 0 : e_.id,
            is_gift: ey,
            eligible_for_trial: null != D,
            location_stack: t,
            sku_id: ee,
            application_id: q,
            guild_id: J,
            payment_modal_version: 'v1',
            activity_session_id: eu,
            eligible_for_discount: eF
        }),
        eU = null != ev ? eR[ev] : null;
    l.useEffect(() => {
        eH((e) => {
            let t = null != e_ ? (0, M.aS)(e_.id, !1, ey, eg) : void 0;
            return {
                ...e,
                subscription_plan_id: null == e_ ? void 0 : e_.id,
                price: null == t ? void 0 : t.amount,
                regular_price: null == e_ ? void 0 : e_.price,
                currency: eg.currency,
                sku_id: ef
            };
        });
    }, [e_, ef, ey, eg]),
        l.useEffect(() => {
            (0, C.U)({
                ...ej,
                has_saved_payment_source: eA
            });
        }, []),
        l.useEffect(() => {
            if ((null != eI && eo ? em(eI) : em(L), null != ee)) eC(ee);
            else if (null != L) {
                var e;
                eC(null === (e = v.Z.get(L)) || void 0 === e ? void 0 : e.skuId);
            }
        }, [em, eC, L, ee, eI, eo]);
    let eB = l.useCallback(() => {
            let e = (0, I.MY)(eb) === I.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            x.default.track(H.rMx.PAYMENT_FLOW_SUCCEEDED, {
                ...ej,
                is_custom_message_edited: ey && e && null != eO ? eO !== B.intl.string(B.t.ZkOo1d) : void 0,
                is_custom_emoji_sound_available: ey && e,
                emoji_name: ey && e && (null == eZ ? void 0 : eZ.id) == null ? (null == eZ ? void 0 : eZ.surrogates) : void 0,
                sound_id: ey && e ? (null == eD ? void 0 : eD.soundId) : void 0,
                duration_ms: t - eE.startTime,
                payment_source_type: null == eU ? void 0 : eU.type
            });
            let { enabled: i } = m.w.getCurrentConfig({ location: 'PaymentModal emitPaymentFlowSuccess' }, { autoTrackExposure: !1 });
            ey && null != eb && null != n && i && (0, T.n)(n) && (0, p.Ni)(eb.id);
        }, [ej, eZ, eO, eb, ey, eD, eE.startTime, eU, n]),
        eW = l.useMemo(() => () => (null == R ? void 0 : R(ec === O.A.COMPLETED, ef)), [R, ec, ef]),
        eV = (0, o.Z)(() => Date.now(), [eT]),
        eY = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: l } = t,
                    a = Date.now();
                if (e === b.h8.CONFIRM && (eB(), null == d || d(l), er)) {
                    eW();
                    return;
                }
                eL(e), null == et || et(e), eS(null);
                let r = null != n ? n : eT;
                if (null === r) {
                    x.default.track(H.rMx.PAYMENT_FLOW_LOADED, {
                        ...ej,
                        initial_step: e,
                        has_saved_payment_source: eA
                    });
                    return;
                }
                x.default.track(H.rMx.PAYMENT_FLOW_STEP, {
                    ...ej,
                    ...i,
                    from_step: r,
                    to_step: e === b.h8.ADD_PAYMENT_STEPS ? b.h8.PAYMENT_TYPE : e,
                    step_duration_ms: a - eV,
                    flow_duration_ms: a - eE.startTime
                });
            },
            [eL, et, eS, eT, ej, eV, eE.startTime, eB, d, er, eW, eA]
        );
    (0, N.bp)(eT, ep, eY, ed), (0, b.dZ)(eT, ec, ed), (0, g.p)(eT, eh, eY), (0, _.Z)(eW), (0, A.w)(eN, () => R(!1), ey), (0, N.D6)(ep);
    let ez = (0, w.U)({
        renderHeader: $,
        referralTrialOfferId: X,
        handleClose: eW
    });
    return (0, i.jsx)(u.Shaker, {
        className: r()(W.shaker, { [W.halloweenModalHeight]: ek }),
        isShaking: en && ec === O.A.PURCHASING,
        intensity: 2,
        children: (0, i.jsx)(u.ModalRoot, {
            className: r()(W.root, {
                [W.withHeader]: null != ez,
                [W.halloweenModalHeight]: ek
            }),
            transitionState: f,
            hideShadow: el,
            returnRef: ea,
            size: eP,
            children: (0, i.jsx)(j.ZP, {
                header: ez,
                isLargeModal: ei || (null == eM ? void 0 : eM.isLargeModal),
                isDynamicModal: null == eM ? void 0 : eM.isDynamicModal,
                initialPlanId: L,
                subscriptionTier: S,
                handleStepChange: eY,
                handleClose: eW,
                analyticsData: ej,
                setAnalyticsData: eH,
                trialId: D,
                trialFooterMessageOverride: k,
                reviewWarningMessage: F,
                planGroup: V,
                openInvoiceId: Y,
                analyticsLocation: n,
                onSubscriptionConfirmation: z,
                renderPurchaseConfirmation: G,
                postSuccessGuild: K,
                followupSKUInfo: Q,
                referralTrialOfferId: X,
                skipConfirm: er,
                continueSession: eo,
                continueSessionInitialStep: es
            })
        })
    });
}
function Y(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: a, referralTrialOfferId: r, handleClose: o, continueSession: u } = e,
        { activeSubscription: C, blockedPayments: _, hasFetchedSubscriptions: m, hasFetchedSubscriptionPlans: p, currencyLoading: T, selectedSkuId: E, setSelectedPlanId: h, defaultPlanId: N, startedPaymentFlowWithPaymentSourcesRef: g, repeatPurchase: A } = (0, y.usePaymentContext)(),
        { isGift: v } = (0, P.wD)(),
        x = g.current,
        I = (0, k.Z)({
            isGift: v,
            skuId: E,
            referralTrialOfferId: r
        }),
        { defaultToMonthlyPlan: M } = S.k.getCurrentConfig({ location: '055ec5_1' }, { autoTrackExposure: !1 }),
        { redirectToPlanSelectStep: O } = L.m.useExperiment({ location: 'PaymentPredicateStep' }, { autoTrackExposure: !1 }),
        [Z, w] = l.useState(!0),
        j = (0, s.e7)([R.Z], () => R.Z.applicationIdsFetched.has(U.CL));
    return (l.useEffect(() => {
        w(!m || !p || T);
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
        u ? a(b.h8.ADD_PAYMENT_STEPS) : null != n ? a(A && O ? b.h8.PLAN_SELECT : b.h8.REVIEW) : e ? (h((0, D.nA)(E, C, N)), a(b.h8.REVIEW)) : null != t ? a(b.h8.PLAN_SELECT) : a(b.h8.SKU_SELECT);
    }, [C, _, j, n, Z, a, t, E, h, M, I, N, v, x, u, A, O]),
    Z)
        ? (0, i.jsx)(F.Z, {})
        : _
          ? (0, i.jsx)(f.Vq, { onClose: o })
          : null;
}
