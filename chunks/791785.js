"use strict";
n.r(t), n.d(t, {
  PaymentModal: function() {
    return Y
  },
  PaymentPredicateStep: function() {
    return w
  }
}), n("47120");
var u = n("735250"),
  l = n("470079"),
  i = n("120356"),
  a = n.n(i),
  r = n("207561"),
  s = n("399606"),
  o = n("481060"),
  c = n("496929"),
  d = n("975608"),
  f = n("89057"),
  _ = n("382577"),
  E = n("439017"),
  S = n("104494"),
  p = n("176919"),
  m = n("711007"),
  P = n("459965"),
  T = n("509545"),
  M = n("580130"),
  I = n("626135"),
  A = n("669079"),
  y = n("74538"),
  R = n("987209"),
  v = n("598"),
  N = n("409813"),
  h = n("45572"),
  C = n("784707"),
  O = n("614223"),
  L = n("48175"),
  U = n("928886"),
  g = n("456251"),
  k = n("614277"),
  b = n("981631"),
  x = n("474936"),
  G = n("689938"),
  D = n("648161");

function Y(e) {
  let {
    analyticsLocations: t,
    analyticsLocation: n,
    analyticsObject: i,
    analyticsSourceLocation: s,
    analyticsSubscriptionType: c = b.SubscriptionTypes.PREMIUM,
    onComplete: d,
    transitionState: f,
    initialPlanId: E,
    subscriptionTier: M,
    onClose: O,
    trialId: L,
    trialFooterMessageOverride: g,
    reviewWarningMessage: Y,
    planGroup: w = x.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
    openInvoiceId: H,
    onSubscriptionConfirmation: F,
    renderPurchaseConfirmation: K,
    postSuccessGuild: B,
    followupSKUInfo: j,
    renderHeader: W,
    applicationId: V,
    guildId: z,
    referralTrialOfferId: X,
    skuId: J,
    onStepChange: q,
    shakeWhilePurchasing: Q = !1,
    isLargeModal: Z = !1,
    hideShadow: $ = !1,
    returnRef: ee,
    skipConfirm: et = !1,
    continueSession: en = !1
  } = e, {
    activitySessionId: eu,
    purchaseState: el,
    setPurchaseState: ei,
    selectedSkuId: ea,
    setSelectedSkuId: er,
    selectedPlan: es,
    setSelectedPlanId: eo,
    setStep: ec,
    setPurchaseError: ed,
    paymentAuthenticationState: ef,
    step: e_,
    contextMetadata: eE,
    purchaseTokenAuthState: eS,
    activeSubscription: ep,
    priceOptions: em,
    hasPaymentSources: eP,
    paymentSourceId: eT,
    paymentSources: eM,
    purchaseType: eI,
    defaultPlanId: eA
  } = (0, v.usePaymentContext)(), ey = (0, C.default)(), eR = Z || (null == ey ? void 0 : ey.isLargeModal) ? o.ModalSize.LARGE : o.ModalSize.SMALL, {
    isGift: ev,
    giftRecipient: eN,
    customGiftMessage: eh,
    emojiConfetti: eC,
    soundEffect: eO
  } = (0, R.useGiftContext)(), eL = (0, S.usePremiumDiscountOffer)(), eU = null != M && !ev && (0, S.discountOfferHasTier)(eL, M), [eg, ek] = l.useState({
    load_id: eE.loadId,
    payment_type: b.PurchaseTypeToAnalyticsPaymentType[eI],
    location: null != n ? n : i,
    source: s,
    subscription_type: c,
    subscription_plan_id: null == es ? void 0 : es.id,
    is_gift: ev,
    eligible_for_trial: null != L,
    location_stack: t,
    sku_id: J,
    application_id: V,
    guild_id: z,
    payment_modal_version: "v1",
    activity_session_id: eu,
    eligible_for_discount: eU
  }), eb = null != eT ? eM[eT] : null;
  l.useEffect(() => {
    ek(e => {
      let t = null != es ? (0, y.getPrice)(es.id, !1, ev, em) : void 0;
      return {
        ...e,
        subscription_plan_id: null == es ? void 0 : es.id,
        price: null == t ? void 0 : t.amount,
        regular_price: null == es ? void 0 : es.price,
        currency: em.currency,
        sku_id: ea
      }
    })
  }, [es, ea, ev, em]), l.useEffect(() => {
    I.default.track(b.AnalyticEvents.PAYMENT_FLOW_STARTED, {
      ...eg,
      has_saved_payment_source: eP
    })
  }, []), l.useEffect(() => {
    if (null != eA && en ? eo(eA) : eo(E), null != J) er(J);
    else if (null != E) {
      var e;
      er(null === (e = T.default.get(E)) || void 0 === e ? void 0 : e.skuId)
    }
  }, [eo, er, E, J, eA, en]);
  let ex = l.useCallback(() => {
      let e = (0, A.getGiftExperience)(eN) === A.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        t = Date.now();
      I.default.track(b.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, {
        ...eg,
        is_custom_message_edited: ev && e && null != eh ? eh !== G.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : void 0,
        is_custom_emoji_sound_available: ev && e,
        emoji_name: ev && e && (null == eC ? void 0 : eC.id) == null ? null == eC ? void 0 : eC.surrogates : void 0,
        sound_id: ev && e ? null == eO ? void 0 : eO.soundId : void 0,
        duration_ms: t - eE.startTime,
        payment_source_type: null == eb ? void 0 : eb.type
      })
    }, [eg, eC, eh, eN, ev, eO, eE.startTime, eb]),
    eG = l.useMemo(() => () => null == O ? void 0 : O(el === h.PurchaseState.COMPLETED, ea), [O, el, ea]),
    eD = (0, r.useStableMemo)(() => Date.now(), [e_]),
    eY = l.useCallback(function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
          trackedFromStep: n,
          analyticsDataOverride: u,
          fulfillment: l
        } = t,
        i = Date.now();
      if (e === N.Step.CONFIRM && (ex(), null == d || d(l), et)) {
        eG();
        return
      }
      ec(e), null == q || q(e), ed(null);
      let a = null != n ? n : e_;
      if (null === a) {
        I.default.track(b.AnalyticEvents.PAYMENT_FLOW_LOADED, {
          ...eg,
          initial_step: e,
          has_saved_payment_source: eP
        });
        return
      }
      I.default.track(b.AnalyticEvents.PAYMENT_FLOW_STEP, {
        ...eg,
        ...u,
        from_step: a,
        to_step: e === N.Step.ADD_PAYMENT_STEPS ? N.Step.PAYMENT_TYPE : e,
        step_duration_ms: i - eD,
        flow_duration_ms: i - eE.startTime
      })
    }, [ec, q, ed, e_, eg, eD, eE.startTime, ex, d, et, eG, eP]);
  (0, p.usePaymentStepForAuthentication)(e_, ef, eY), (0, N.usePurchaseStateForStep)(e_, el, ei), (0, m.usePurchaseTokenAuthStep)(e_, eS, eY), (0, _.default)(eG), (0, P.useUnsupportedExternalSubscriptionModalHandler)(ep, () => O(!1), ev), (0, p.usePaymentAuthenticationPoller)(ef);
  let ew = (0, U.PaymentModalHeader)({
    renderHeader: W,
    referralTrialOfferId: X,
    handleClose: eG
  });
  return (0, u.jsx)(o.Shaker, {
    className: D.shaker,
    isShaking: Q && el === h.PurchaseState.PURCHASING,
    intensity: 2,
    children: (0, u.jsx)(o.ModalRoot, {
      className: a()(D.root, {
        [D.withHeader]: null != ew
      }),
      transitionState: f,
      hideShadow: $,
      returnRef: ee,
      size: eR,
      children: (0, u.jsx)(k.default, {
        header: ew,
        isLargeModal: Z || (null == ey ? void 0 : ey.isLargeModal),
        initialPlanId: E,
        subscriptionTier: M,
        handleStepChange: eY,
        handleClose: eG,
        analyticsData: eg,
        setAnalyticsData: ek,
        trialId: L,
        trialFooterMessageOverride: g,
        reviewWarningMessage: Y,
        planGroup: w,
        openInvoiceId: H,
        analyticsLocation: n,
        onSubscriptionConfirmation: F,
        renderPurchaseConfirmation: K,
        postSuccessGuild: B,
        followupSKUInfo: j,
        referralTrialOfferId: X,
        skipConfirm: et,
        continueSession: en
      })
    })
  })
}

function w(e) {
  let {
    subscriptionTier: t,
    initialPlanId: n,
    handleStepChange: i,
    referralTrialOfferId: a,
    handleClose: r,
    continueSession: o
  } = e, {
    activeSubscription: _,
    blockedPayments: S,
    hasFetchedSubscriptions: p,
    hasFetchedSubscriptionPlans: m,
    currencyLoading: P,
    selectedSkuId: T,
    setSelectedPlanId: I,
    defaultPlanId: A,
    startedPaymentFlowWithPaymentSourcesRef: y
  } = (0, v.usePaymentContext)(), {
    isGift: h
  } = (0, R.useGiftContext)(), C = y.current, U = (0, L.default)({
    isGift: h,
    skuId: T,
    referralTrialOfferId: a
  }), {
    defaultToMonthlyPlan: k
  } = E.TrialRedemptionDefaultPlanExperiment.getCurrentConfig({
    location: "055ec5_1"
  }, {
    autoTrackExposure: !1
  }), [b, G] = l.useState(!0), D = (0, s.useStateFromStores)([M.default], () => M.default.applicationIdsFetched.has(x.PREMIUM_SUBSCRIPTION_APPLICATION));
  return (l.useEffect(() => {
    G(!p || !m || P)
  }, [P, m, p]), (0, d.default)("Payment Modal", b, 5, {
    hasFetchedSubscriptions: p,
    hasFetchedSubscriptionPlans: m,
    currencyLoading: P
  }, {
    tags: {
      app_context: "billing"
    }
  }), l.useEffect(() => {
    if (!D && (0, c.fetchUserEntitlementsForApplication)(x.PREMIUM_SUBSCRIPTION_APPLICATION), b || S) return;
    let e = (0, O.inOneStepSubscriptionCheckout)({
      isTrial: U,
      isGift: h,
      selectedSkuId: T,
      startedPaymentFlowWithPaymentSources: C
    });
    null != n ? i(N.Step.REVIEW) : e ? (I((0, O.getDefaultPlanOneStepCheckout)(T, _, A)), i(N.Step.REVIEW)) : o ? i(N.Step.ADD_PAYMENT_STEPS) : null != t ? i(N.Step.PLAN_SELECT) : i(N.Step.SKU_SELECT)
  }, [_, S, D, n, b, i, t, T, I, k, U, A, h, C, o]), b) ? (0, u.jsx)(g.default, {}) : S ? (0, u.jsx)(f.BlockedPaymentsContentModal, {
    onClose: r
  }) : null
}