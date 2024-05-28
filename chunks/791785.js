"use strict";
n.r(t), n.d(t, {
  PaymentModal: function() {
    return H
  },
  PaymentPredicateStep: function() {
    return G
  }
}), n("47120");
var u = n("735250"),
  i = n("470079"),
  l = n("120356"),
  s = n.n(l),
  a = n("207561"),
  r = n("399606"),
  o = n("481060"),
  c = n("496929"),
  d = n("975608"),
  _ = n("89057"),
  f = n("382577"),
  S = n("439017"),
  p = n("104494"),
  E = n("176919"),
  P = n("711007"),
  T = n("459965"),
  m = n("509545"),
  M = n("580130"),
  I = n("626135"),
  A = n("669079"),
  R = n("74538"),
  v = n("987209"),
  C = n("598"),
  h = n("409813"),
  O = n("45572"),
  U = n("784707"),
  N = n("614223"),
  L = n("48175"),
  y = n("928886"),
  k = n("456251"),
  g = n("614277"),
  b = n("981631"),
  x = n("474936"),
  D = n("689938"),
  Y = n("648161");

function H(e) {
  let {
    analyticsLocations: t,
    analyticsLocation: n,
    analyticsObject: l,
    analyticsSourceLocation: r,
    analyticsSubscriptionType: c = b.SubscriptionTypes.PREMIUM,
    onComplete: d,
    transitionState: _,
    initialPlanId: S,
    subscriptionTier: M,
    onClose: N,
    trialId: L,
    trialFooterMessageOverride: k,
    reviewWarningMessage: H,
    planGroup: G = x.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
    openInvoiceId: K,
    onSubscriptionConfirmation: j,
    renderPurchaseConfirmation: w,
    postSuccessGuild: F,
    followupSKUInfo: B,
    renderHeader: W,
    applicationId: V,
    guildId: z,
    referralTrialOfferId: J,
    skuId: q,
    onStepChange: Q,
    shakeWhilePurchasing: X = !1,
    isLargeModal: Z = !1,
    hideShadow: $ = !1,
    returnRef: ee,
    skipConfirm: et = !1
  } = e, {
    activitySessionId: en,
    purchaseState: eu,
    setPurchaseState: ei,
    selectedSkuId: el,
    setSelectedSkuId: es,
    selectedPlan: ea,
    setSelectedPlanId: er,
    setStep: eo,
    setPurchaseError: ec,
    paymentAuthenticationState: ed,
    step: e_,
    contextMetadata: ef,
    purchaseTokenAuthState: eS,
    activeSubscription: ep,
    priceOptions: eE,
    hasPaymentSources: eP,
    paymentSourceId: eT,
    paymentSources: em,
    purchaseType: eM
  } = (0, C.usePaymentContext)(), eI = (0, U.default)(), eA = Z || (null == eI ? void 0 : eI.isLargeModal) ? o.ModalSize.LARGE : o.ModalSize.SMALL, {
    isGift: eR,
    giftRecipient: ev,
    customGiftMessage: eC,
    emojiConfetti: eh,
    soundEffect: eO
  } = (0, v.useGiftContext)(), eU = (0, p.usePremiumDiscountOffer)(), eN = null != M && !eR && (0, p.discountOfferHasTier)(eU, M), [eL, ey] = i.useState({
    load_id: ef.loadId,
    payment_type: b.PurchaseTypeToAnalyticsPaymentType[eM],
    location: null != n ? n : l,
    source: r,
    subscription_type: c,
    subscription_plan_id: null == ea ? void 0 : ea.id,
    is_gift: eR,
    eligible_for_trial: null != L,
    location_stack: t,
    sku_id: q,
    application_id: V,
    guild_id: z,
    payment_modal_version: "v1",
    activity_session_id: en,
    eligible_for_discount: eN
  }), ek = null != eT ? em[eT] : null;
  i.useEffect(() => {
    ey(e => {
      let t = null != ea ? (0, R.getPrice)(ea.id, !1, eR, eE) : void 0;
      return {
        ...e,
        subscription_plan_id: null == ea ? void 0 : ea.id,
        price: null == t ? void 0 : t.amount,
        regular_price: null == ea ? void 0 : ea.price,
        currency: eE.currency,
        sku_id: el
      }
    })
  }, [ea, el, eR, eE]), i.useEffect(() => {
    I.default.track(b.AnalyticEvents.PAYMENT_FLOW_STARTED, {
      ...eL,
      has_saved_payment_source: eP
    })
  }, []), i.useEffect(() => {
    if (er(S), null != q) es(q);
    else if (null != S) {
      var e;
      es(null === (e = m.default.get(S)) || void 0 === e ? void 0 : e.skuId)
    }
  }, [er, es, S, q]);
  let eg = i.useCallback(() => {
      let e = (0, A.getGiftExperience)(ev) === A.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        t = Date.now();
      I.default.track(b.AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, {
        ...eL,
        is_custom_message_edited: eR && e && null != eC ? eC !== D.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : void 0,
        is_custom_emoji_sound_available: eR && e,
        emoji_name: eR && e && (null == eh ? void 0 : eh.id) == null ? null == eh ? void 0 : eh.surrogates : void 0,
        sound_id: eR && e ? null == eO ? void 0 : eO.soundId : void 0,
        duration_ms: t - ef.startTime,
        payment_source_type: null == ek ? void 0 : ek.type
      })
    }, [eL, eh, eC, ev, eR, eO, ef.startTime, ek]),
    eb = i.useMemo(() => () => null == N ? void 0 : N(eu === O.PurchaseState.COMPLETED, el), [N, eu, el]),
    ex = (0, a.useStableMemo)(() => Date.now(), [e_]),
    eD = i.useCallback(function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
          trackedFromStep: n,
          analyticsDataOverride: u,
          fulfillment: i
        } = t,
        l = Date.now();
      if (e === h.Step.CONFIRM && (eg(), null == d || d(i), et)) {
        eb();
        return
      }
      eo(e), null == Q || Q(e), ec(null);
      let s = null != n ? n : e_;
      if (null === s) {
        I.default.track(b.AnalyticEvents.PAYMENT_FLOW_LOADED, {
          ...eL,
          initial_step: e,
          has_saved_payment_source: eP
        });
        return
      }
      I.default.track(b.AnalyticEvents.PAYMENT_FLOW_STEP, {
        ...eL,
        ...u,
        from_step: s,
        to_step: e === h.Step.ADD_PAYMENT_STEPS ? h.Step.PAYMENT_TYPE : e,
        step_duration_ms: l - ex,
        flow_duration_ms: l - ef.startTime
      })
    }, [eo, Q, ec, e_, eL, ex, ef.startTime, eg, d, et, eb, eP]);
  (0, E.usePaymentStepForAuthentication)(e_, ed, eD), (0, h.usePurchaseStateForStep)(e_, eu, ei), (0, P.usePurchaseTokenAuthStep)(e_, eS, eD), (0, f.default)(eb), (0, T.useUnsupportedExternalSubscriptionModalHandler)(ep, () => N(!1), eR), (0, E.usePaymentAuthenticationPoller)(ed);
  let eY = (0, y.PaymentModalHeader)({
    renderHeader: W,
    referralTrialOfferId: J,
    handleClose: eb
  });
  return (0, u.jsx)(o.Shaker, {
    className: Y.shaker,
    isShaking: X && eu === O.PurchaseState.PURCHASING,
    intensity: 2,
    children: (0, u.jsx)(o.ModalRoot, {
      className: s()(Y.root, {
        [Y.withHeader]: null != eY
      }),
      transitionState: _,
      hideShadow: $,
      returnRef: ee,
      size: eA,
      children: (0, u.jsx)(g.default, {
        header: eY,
        isLargeModal: Z || (null == eI ? void 0 : eI.isLargeModal),
        initialPlanId: S,
        subscriptionTier: M,
        handleStepChange: eD,
        handleClose: eb,
        analyticsData: eL,
        setAnalyticsData: ey,
        trialId: L,
        trialFooterMessageOverride: k,
        reviewWarningMessage: H,
        planGroup: G,
        openInvoiceId: K,
        analyticsLocation: n,
        onSubscriptionConfirmation: j,
        renderPurchaseConfirmation: w,
        postSuccessGuild: F,
        followupSKUInfo: B,
        referralTrialOfferId: J,
        skipConfirm: et
      })
    })
  })
}

function G(e) {
  let {
    subscriptionTier: t,
    initialPlanId: n,
    handleStepChange: l,
    referralTrialOfferId: s,
    handleClose: a
  } = e, {
    activeSubscription: o,
    blockedPayments: f,
    hasFetchedSubscriptions: p,
    hasFetchedSubscriptionPlans: E,
    currencyLoading: P,
    selectedSkuId: T,
    setSelectedPlanId: m,
    defaultPlanId: I,
    startedPaymentFlowWithPaymentSourcesRef: A
  } = (0, C.usePaymentContext)(), {
    isGift: R
  } = (0, v.useGiftContext)(), O = A.current, U = (0, L.default)({
    isGift: R,
    skuId: T,
    referralTrialOfferId: s
  }), {
    defaultToMonthlyPlan: y
  } = S.TrialRedemptionDefaultPlanExperiment.getCurrentConfig({
    location: "055ec5_1"
  }, {
    autoTrackExposure: !1
  }), [g, b] = i.useState(!0), D = (0, r.useStateFromStores)([M.default], () => M.default.applicationIdsFetched.has(x.PREMIUM_SUBSCRIPTION_APPLICATION));
  return (i.useEffect(() => {
    b(!p || !E || P)
  }, [P, E, p]), (0, d.default)("Payment Modal", g, 5, {
    hasFetchedSubscriptions: p,
    hasFetchedSubscriptionPlans: E,
    currencyLoading: P
  }, {
    tags: {
      app_context: "billing"
    }
  }), i.useEffect(() => {
    if (!D && (0, c.fetchUserEntitlementsForApplication)(x.PREMIUM_SUBSCRIPTION_APPLICATION), g || f) return;
    let e = (0, N.inOneStepSubscriptionCheckout)({
      isTrial: U,
      isGift: R,
      selectedSkuId: T,
      startedPaymentFlowWithPaymentSources: O
    });
    null != n ? l(h.Step.REVIEW) : e ? (m((0, N.getDefaultPlanOneStepCheckout)(T, o, I)), l(h.Step.REVIEW)) : null != t ? l(h.Step.PLAN_SELECT) : l(h.Step.SKU_SELECT)
  }, [o, f, D, n, g, l, t, T, m, y, U, I, R, O]), g) ? (0, u.jsx)(k.default, {}) : f ? (0, u.jsx)(_.BlockedPaymentsContentModal, {
    onClose: a
  }) : null
}