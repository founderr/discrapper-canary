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
    r = n(120356),
    a = n.n(r),
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
    k = n(614223),
    w = n(48175),
    D = n(928886),
    F = n(456251),
    j = n(614277),
    H = n(981631),
    U = n(474936),
    B = n(388032),
    W = n(293803);
function V(e) {
    let { analyticsLocations: t, analyticsLocation: n, analyticsObject: r, analyticsSourceLocation: s, analyticsSubscriptionType: c = H.NYc.PREMIUM, onComplete: d, transitionState: f, initialPlanId: L, subscriptionTier: S, onClose: R, trialId: k, trialFooterMessageOverride: w, reviewWarningMessage: F, planGroup: V = U.Y1, openInvoiceId: Y, onSubscriptionConfirmation: z, renderPurchaseConfirmation: G, postSuccessGuild: K, followupSKUInfo: Q, renderHeader: $, applicationId: q, guildId: J, referralTrialOfferId: X, skuId: ee, onStepChange: et, shakeWhilePurchasing: en = !1, isLargeModal: ei = !1, hideShadow: el = !1, returnRef: er, skipConfirm: ea = !1, continueSession: eo = !1, continueSessionInitialStep: es } = e,
        { activitySessionId: eu, purchaseState: ec, setPurchaseState: ed, selectedSkuId: ef, setSelectedSkuId: eC, selectedPlan: e_, setSelectedPlanId: em, setStep: eL, setPurchaseError: eS, paymentAuthenticationState: ep, step: eT, contextMetadata: eE, purchaseTokenAuthState: eh, activeSubscription: eN, priceOptions: eg, hasPaymentSources: eA, paymentSourceId: ev, paymentSources: eR, purchaseType: ex, defaultPlanId: eI } = (0, y.usePaymentContext)(),
        eP = (0, Z.Z)(),
        eM = ei || (null == eP ? void 0 : eP.isLargeModal) ? u.ModalSize.LARGE : u.ModalSize.SMALL,
        { isGift: ey, giftRecipient: eb, customGiftMessage: eO, emojiConfetti: eZ, soundEffect: ek } = (0, M.wD)(),
        ew = (0, E.Z)({ location: 'Payment Modal' }),
        eD = (0, h.Ng)(),
        eF = null != S && !ey && (0, h.Wp)(eD, S),
        [ej, eH] = l.useState({
            continue_session_initial_step: es,
            load_id: eE.loadId,
            payment_type: H.Zuq[ex],
            location: null != n ? n : r,
            source: s,
            subscription_type: c,
            subscription_plan_id: null == e_ ? void 0 : e_.id,
            is_gift: ey,
            eligible_for_trial: null != k,
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
            let t = null != e_ ? (0, P.aS)(e_.id, !1, ey, eg) : void 0;
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
                sound_id: ey && e ? (null == ek ? void 0 : ek.soundId) : void 0,
                duration_ms: t - eE.startTime,
                payment_source_type: null == eU ? void 0 : eU.type
            });
            let { enabled: i } = m.w.getCurrentConfig({ location: 'PaymentModal emitPaymentFlowSuccess' }, { autoTrackExposure: !1 });
            ey && null != eb && null != n && i && (0, T.n)(n) && (0, p.Ni)(eb.id);
        }, [ej, eZ, eO, eb, ey, ek, eE.startTime, eU, n]),
        eW = l.useMemo(() => () => (null == R ? void 0 : R(ec === O.A.COMPLETED, ef)), [R, ec, ef]),
        eV = (0, o.Z)(() => Date.now(), [eT]),
        eY = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: l } = t,
                    r = Date.now();
                if (e === b.h8.CONFIRM && (eB(), null == d || d(l), ea)) {
                    eW();
                    return;
                }
                eL(e), null == et || et(e), eS(null);
                let a = null != n ? n : eT;
                if (null === a) {
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
                    from_step: a,
                    to_step: e === b.h8.ADD_PAYMENT_STEPS ? b.h8.PAYMENT_TYPE : e,
                    step_duration_ms: r - eV,
                    flow_duration_ms: r - eE.startTime
                });
            },
            [eL, et, eS, eT, ej, eV, eE.startTime, eB, d, ea, eW, eA]
        );
    (0, N.bp)(eT, ep, eY, ed), (0, b.dZ)(eT, ec, ed), (0, g.p)(eT, eh, eY), (0, _.Z)(eW), (0, A.w)(eN, () => R(!1), ey), (0, N.D6)(ep);
    let ez = (0, D.U)({
        renderHeader: $,
        referralTrialOfferId: X,
        handleClose: eW
    });
    return (0, i.jsx)(u.Shaker, {
        className: a()(W.shaker, { [W.halloweenModalHeight]: ew }),
        isShaking: en && ec === O.A.PURCHASING,
        intensity: 2,
        children: (0, i.jsx)(u.ModalRoot, {
            className: a()(W.root, {
                [W.withHeader]: null != ez,
                [W.halloweenModalHeight]: ew
            }),
            transitionState: f,
            hideShadow: el,
            returnRef: er,
            size: eM,
            children: (0, i.jsx)(j.ZP, {
                header: ez,
                isLargeModal: ei || (null == eP ? void 0 : eP.isLargeModal),
                initialPlanId: L,
                subscriptionTier: S,
                handleStepChange: eY,
                handleClose: eW,
                analyticsData: ej,
                setAnalyticsData: eH,
                trialId: k,
                trialFooterMessageOverride: w,
                reviewWarningMessage: F,
                planGroup: V,
                openInvoiceId: Y,
                analyticsLocation: n,
                onSubscriptionConfirmation: z,
                renderPurchaseConfirmation: G,
                postSuccessGuild: K,
                followupSKUInfo: Q,
                referralTrialOfferId: X,
                skipConfirm: ea,
                continueSession: eo,
                continueSessionInitialStep: es
            })
        })
    });
}
function Y(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: r, referralTrialOfferId: a, handleClose: o, continueSession: u } = e,
        { activeSubscription: C, blockedPayments: _, hasFetchedSubscriptions: m, hasFetchedSubscriptionPlans: p, currencyLoading: T, selectedSkuId: E, setSelectedPlanId: h, defaultPlanId: N, startedPaymentFlowWithPaymentSourcesRef: g, repeatPurchase: A } = (0, y.usePaymentContext)(),
        { isGift: v } = (0, M.wD)(),
        x = g.current,
        I = (0, w.Z)({
            isGift: v,
            skuId: E,
            referralTrialOfferId: a
        }),
        { defaultToMonthlyPlan: P } = S.k.getCurrentConfig({ location: '055ec5_1' }, { autoTrackExposure: !1 }),
        { redirectToPlanSelectStep: O } = L.m.useExperiment({ location: 'PaymentPredicateStep' }, { autoTrackExposure: !1 }),
        [Z, D] = l.useState(!0),
        j = (0, s.e7)([R.Z], () => R.Z.applicationIdsFetched.has(U.CL));
    return (l.useEffect(() => {
        D(!m || !p || T);
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
        let e = (0, k.Kp)({
            isTrial: I,
            isGift: v,
            selectedSkuId: E,
            startedPaymentFlowWithPaymentSources: x
        });
        u ? r(b.h8.ADD_PAYMENT_STEPS) : null != n ? r(A && O ? b.h8.PLAN_SELECT : b.h8.REVIEW) : e ? (h((0, k.nA)(E, C, N)), r(b.h8.REVIEW)) : null != t ? r(b.h8.PLAN_SELECT) : r(b.h8.SKU_SELECT);
    }, [C, _, j, n, Z, r, t, E, h, P, I, N, v, x, u, A, O]),
    Z)
        ? (0, i.jsx)(F.Z, {})
        : _
          ? (0, i.jsx)(f.Vq, { onClose: o })
          : null;
}
