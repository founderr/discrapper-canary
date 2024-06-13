"use strict";
n.r(t), n.d(t, {
  default: function() {
    return K
  }
}), n("47120");
var i = n("735250"),
  s = n("470079"),
  l = n("512722"),
  a = n.n(l),
  r = n("742280"),
  u = n("442837"),
  o = n("692547"),
  c = n("481060"),
  d = n("190947"),
  m = n("224550"),
  f = n("275850"),
  p = n("672971"),
  S = n("128069"),
  _ = n("987209"),
  I = n("598"),
  P = n("45572"),
  E = n("919778"),
  T = n("614223"),
  N = n("246946"),
  v = n("351402"),
  h = n("509545"),
  x = n("41542"),
  A = n("669079"),
  y = n("74538"),
  C = n("937615"),
  g = n("479446"),
  M = n("374649"),
  R = n("424082"),
  b = n("104494"),
  L = n("639119"),
  O = n("653798"),
  j = n("314182"),
  G = n("981632"),
  D = n("314404"),
  U = n("42818"),
  F = n("459965"),
  w = n("251660"),
  B = n("474936"),
  k = n("981631"),
  H = n("231338"),
  W = n("689938"),
  Y = n("507448");

function K(e) {
  var t, n, l, K;
  let V, Z, z, {
      selectedPlanId: J,
      paymentSources: X,
      priceOptions: q,
      currencies: Q,
      onCurrencyChange: $,
      onPaymentSourceChange: ee,
      handlePaymentSourceAdd: et,
      setHasAcceptedTerms: en,
      legalTermsNodeRef: ei,
      hasLegalTermsFlash: es,
      trialId: el,
      trialFooterMessageOverride: ea,
      reviewWarningMessage: er,
      metadata: eu,
      purchaseState: eo,
      hideSubscriptionDetails: ec,
      referralTrialOfferId: ed,
      isTrial: em = !1,
      isDiscount: ef = !1,
      handleClose: ep
    } = e,
    {
      isEmbeddedIAP: eS,
      activeSubscription: e_,
      selectedSkuId: eI,
      defaultPlanId: eP,
      isPremium: eE,
      startedPaymentFlowWithPaymentSourcesRef: eT,
      setInvoicePreview: eN,
      contextMetadata: ev
    } = (0, I.usePaymentContext)(),
    {
      isGift: eh,
      giftRecipient: ex,
      selectedGiftStyle: eA
    } = (0, _.useGiftContext)(),
    ey = (0, b.usePremiumDiscountOffer)(),
    eC = (0, L.usePremiumTrialOffer)(ed);
  (0, R.useAnnualDiscountExperiment)("PremiumSubscriptionReview", null == eC);
  let eg = null == ey ? void 0 : null === (t = ey.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => B.SubscriptionPlanInfo[e].skuId === eI),
    eM = !eh && null != ey && null != eI && eg,
    eR = (0, u.useStateFromStores)([h.default], () => h.default.get(J));
  a()(null != eR, "Missing plan");
  let eb = [{
      planId: eR.id,
      quantity: 1
    }],
    eL = eo === P.PurchaseState.PURCHASING || eo === P.PurchaseState.COMPLETED,
    eO = eh || eL,
    [ej, eG] = (0, M.useSubscriptionInvoicePreview)({
      items: eb,
      renewal: !1,
      preventFetch: eO,
      applyEntitlements: !0,
      paymentSourceId: q.paymentSourceId,
      currency: q.currency,
      trialId: el,
      metadata: eu
    }),
    [eD, eU] = (0, M.useSubscriptionInvoicePreview)({
      items: eb,
      renewal: !0,
      preventFetch: eO,
      trialId: el,
      paymentSourceId: q.paymentSourceId,
      currency: q.currency,
      metadata: eu
    }),
    [eF, ew] = (0, M.useSubscriptionInvoicePreview)({
      items: [{
        planId: B.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
        quantity: 1
      }],
      renewal: !0,
      preventFetch: !eM,
      trialId: el,
      paymentSourceId: q.paymentSourceId,
      currency: q.currency,
      metadata: eu
    }),
    [eB, ek] = (0, M.useOneTimePurchaseInvoicePreview)({
      paymentSourceId: q.paymentSourceId,
      skuId: eI,
      subscriptionPlanId: J,
      currency: q.currency,
      preventFetch: !eh || eL,
      loadId: ev.loadId
    });
  s.useEffect(() => {
    eN(eB)
  }, [eN, eB]);
  let eH = eh && (0, A.shouldShowCustomGiftExperience)(ex),
    eW = null !== (K = null !== (l = null != eG ? eG : eU) && void 0 !== l ? l : ew) && void 0 !== K ? K : ek,
    eY = (0, u.useStateFromStores)([N.default], () => N.default.enabled),
    eK = q.paymentSourceId,
    {
      hasEntitlements: eV,
      entitlements: eZ
    } = (0, F.useSubscriptionEntitlements)(eR.id, eh),
    ez = (0, y.isPrepaidPaymentSource)(q.paymentSourceId),
    eJ = (0, E.checkNoPaymentTrialEnabled)(el, eK, J),
    eX = (0, T.inOneStepSubscriptionCheckout)({
      isTrial: em,
      isGift: eh,
      selectedSkuId: eI,
      startedPaymentFlowWithPaymentSources: eT.current
    }),
    [eq, eQ] = s.useState(null == ej ? void 0 : ej.subscriptionPeriodEnd);
  s.useEffect(() => {
    null == eq && eQ(null == ej ? void 0 : ej.subscriptionPeriodEnd)
  }, [null == ej ? void 0 : ej.subscriptionPeriodEnd, eq]);
  let e$ = s.useMemo(() => (0, y.getPremiumPlanOptions)({
      skuId: eI,
      isPremium: eE,
      multiMonthPlans: [],
      currentSubscription: e_,
      isGift: eh,
      isEligibleForTrial: em,
      defaultPlanId: eP,
      defaultToMonthlyPlan: !1
    }), [eI, e_, eh, eP, eE, em]),
    e0 = (0, T.planSwitchLoadingShowSpinner)(eX, ej, eR);
  if (null != eW) {
    let e = eW.message;
    eW.code === S.ErrorCodes.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (e = W.default.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY), Z = (0, i.jsx)(c.FormErrorBlock, {
      children: e
    })
  } else if (eh && null != eB) z = (0, i.jsx)(U.SubscriptionInvoiceGift, {
    plan: eR,
    className: Y.invoice,
    isPrepaidPaymentSource: ez,
    isCustomGift: eH,
    invoicePreview: eB
  });
  else if (em && null != ej) z = (0, i.jsxs)("div", {
    children: [(0, i.jsx)(O.PremiumInvoiceTableDivider, {
      negativeMarginTop: !0
    }), (0, i.jsxs)(O.PremiumInvoiceTable, {
      className: Y.invoice,
      children: [(0, i.jsxs)("div", {
        className: Y.trialPriceLine,
        children: [(0, i.jsx)(c.Text, {
          variant: "text-md/bold",
          children: W.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
        }), (0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          children: W.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
            price: (0, C.formatPrice)(0, ej.currency, {
              maximumFractionDigits: 0
            })
          })
        })]
      }), (0, i.jsx)("div", {
        className: Y.afterTrialPriceLine,
        children: (0, i.jsx)(U.PremiumTrialInvoiceTableRow, {
          invoice: ej,
          plan: eR
        })
      })]
    })]
  });
  else {
    if (null == ej || null == eD || e0) return (0, i.jsx)("div", {
      className: Y.spinnerWrapper,
      children: (0, i.jsx)(c.Spinner, {})
    });
    em && ej.subscriptionPeriodEnd !== eD.subscriptionPeriodEnd && (V = ej.subscriptionPeriodEnd), z = (0, i.jsxs)(O.PremiumInvoiceTable, {
      className: Y.invoice,
      children: [(0, i.jsx)(O.PremiumInvoiceTableHeader, {
        children: W.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
      }), (0, i.jsx)(U.PremiumSubscriptionChangePlanInvoiceRows, {
        invoice: ej,
        newPlan: eR,
        isPrepaidPaymentSource: ez,
        referralTrialOfferId: ed
      }), ez ? null : (0, i.jsx)(U.SubscriptionInvoiceFooter, {
        renewalInvoice: eD,
        isTrial: em,
        priceOptions: q,
        overrideRenewalDate: V,
        trialFooterMessageOverride: ea,
        hideSubscriptionDetails: ec
      })]
    })
  }
  let e1 = r.CountryCodesSets.EEA_COUNTRIES.has(v.default.ipCountryCodeWithFallback),
    {
      checkboxLabel: e2,
      checkboxClassname: e9,
      checkboxLabelClassname: e4
    } = function(e, t, n) {
      let i = null,
        s = null,
        l = null;
      if (e && null != t) {
        let {
          intervalType: e,
          intervalCount: a
        } = y.default.getIntervalForInvoice(t), r = (0, C.formatRate)((0, C.formatPrice)(t.total, t.currency), e, a), u = null != n ? n : t.subscriptionPeriodEnd;
        i = W.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
          termsURL: k.MarketingURLs.TERMS,
          paidURL: k.MarketingURLs.PAID_TERMS,
          rate: r,
          renewalDate: u
        }), s = Y.trialCheckbox, l = Y.trialCheckboxLabel
      }
      return {
        checkboxLabel: i,
        checkboxClassname: s,
        checkboxLabelClassname: l
      }
    }(null != em && em, eD, V),
    e7 = W.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
      planName: eR.name
    });
  return eh && !eH ? e7 = W.default.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : eh && eH ? e7 = "" : (0, y.isPremiumSubscriptionPlan)(eR.id) && (e7 = y.default.getBillingReviewSubheader(null, eR)), eJ ? null : (0, i.jsxs)("div", {
    className: Y.stepBody,
    children: [null != er && (0, i.jsxs)("div", {
      className: Y.reviewWarningMessageContainer,
      children: [(0, i.jsx)(x.default, {
        color: o.default.unsafe_rawColors.YELLOW_300.css,
        width: 20,
        height: 20
      }), (0, i.jsx)(c.Text, {
        className: Y.reviewWarningMessage,
        variant: "text-sm/normal",
        children: er
      })]
    }), Z, eX && (0, i.jsxs)("div", {
      children: [(0, i.jsx)(O.PremiumInvoiceTableDivider, {
        negativeMarginTop: !0,
        negativeMarginBottom: !0
      }), (0, i.jsx)(D.PremiumSwitchPlanSelectBody, {
        planOptions: e$,
        eligibleForMultiMonthPlans: !1,
        referralTrialOfferId: void 0,
        selectedPlanId: J,
        subscriptionPeriodEnd: eq,
        showTotal: !1,
        discountInvoiceItems: eM ? null == eF ? void 0 : eF.invoiceItems : void 0,
        handleClose: ep
      }), (0, i.jsx)(O.PremiumInvoiceTableDivider, {})]
    }), !em && (0, i.jsx)(c.FormTitle, {
      tag: c.FormTitleTags.H5,
      children: e7
    }), eH && null != eA && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(G.default, {
        defaultAnimationState: g.AnimationState.LOOP,
        giftStyle: eA,
        shouldAnimate: !0,
        className: Y.__invalid_giftMainAnimation
      }), (0, i.jsx)(w.SendGiftToUser, {
        giftRecipient: ex
      })]
    }), z, (0, i.jsxs)("div", {
      className: Y.paymentSourceWrapper,
      children: [em ? (0, i.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H5,
        className: Y.formTitle,
        children: W.default.Messages.BILLING_STEP_PAYMENT_METHOD
      }) : (0, i.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H5,
        children: W.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }), (0, i.jsx)(f.default, {
        paymentSources: Object.values(X),
        selectedPaymentSourceId: eK,
        prependOption: eV && !em ? {
          label: W.default.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
          value: null
        } : null,
        onChange: ee,
        onPaymentSourceAdd: et,
        hidePersonalInformation: eY,
        isTrial: em
      }), eV && null == eK ? (0, i.jsx)("div", {
        className: Y.paymentSourceOptionalWarning,
        children: W.default.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
          months: eZ.length
        })
      }) : null, ef ? null : (0, i.jsxs)(d.CurrencyWrapper, {
        currencies: Q,
        className: Y.currencyWrapper,
        children: [(0, i.jsx)(c.FormTitle, {
          tag: c.FormTitleTags.H5,
          children: W.default.Messages.PAYMENT_CURRENCY
        }), (0, i.jsx)(d.default, {
          selectedCurrency: q.currency,
          currencies: Q,
          onChange: $
        })]
      })]
    }), (0, i.jsx)(j.default, {
      isActive: es,
      ref: ei,
      children: (0, i.jsx)(p.default, {
        onChange: en,
        forceShow: !0,
        checkboxLabel: e2,
        checkboxClassname: e9,
        checkboxLabelClassname: e4,
        finePrint: null != ea ? ea : (0, i.jsx)(m.default, {
          hide: em || ef,
          subscriptionPlan: eR,
          renewalInvoice: eD,
          isGift: eh,
          paymentSourceType: null === (n = X[null != eK ? eK : ""]) || void 0 === n ? void 0 : n.type,
          isEmbeddedIAP: eS,
          basePrice: (0, y.getPrice)(eR.id, !1, eh, q)
        }),
        showPricingLink: eR.currency !== H.CurrencyCodes.USD,
        showWithdrawalWaiver: e1,
        disabled: eL,
        isTrial: em && null == ea,
        isDiscount: ef,
        subscriptionPlan: eR,
        isGift: eh
      })
    })]
  })
}