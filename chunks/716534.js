"use strict";
n.r(t), n.d(t, {
  default: function() {
    return W
  }
}), n("47120");
var i = n("735250"),
  s = n("470079"),
  a = n("512722"),
  r = n.n(a),
  l = n("742280"),
  u = n("442837"),
  o = n("692547"),
  c = n("481060"),
  d = n("190947"),
  m = n("224550"),
  f = n("275850"),
  p = n("672971"),
  _ = n("128069"),
  S = n("987209"),
  I = n("598"),
  E = n("45572"),
  P = n("919778"),
  T = n("614223"),
  N = n("246946"),
  h = n("351402"),
  v = n("509545"),
  x = n("41542"),
  A = n("669079"),
  C = n("74538"),
  g = n("937615"),
  y = n("479446"),
  M = n("374649"),
  R = n("104494"),
  b = n("653798"),
  L = n("314182"),
  O = n("981632"),
  j = n("314404"),
  G = n("42818"),
  D = n("459965"),
  U = n("251660"),
  F = n("474936"),
  w = n("981631"),
  B = n("231338"),
  k = n("689938"),
  H = n("422449");

function W(e) {
  var t, n, a;
  let W, Y, {
      selectedPlanId: K,
      paymentSources: V,
      priceOptions: Z,
      currencies: z,
      onCurrencyChange: J,
      onPaymentSourceChange: X,
      handlePaymentSourceAdd: q,
      setHasAcceptedTerms: Q,
      legalTermsNodeRef: $,
      hasLegalTermsFlash: ee,
      trialId: et,
      trialFooterMessageOverride: en,
      reviewWarningMessage: ei,
      metadata: es,
      purchaseState: ea,
      hideSubscriptionDetails: er,
      referralTrialOfferId: el,
      isTrial: eu = !1,
      isDiscount: eo = !1,
      handleClose: ec
    } = e,
    {
      isEmbeddedIAP: ed,
      activeSubscription: em,
      selectedSkuId: ef,
      defaultPlanId: ep,
      isPremium: e_,
      startedPaymentFlowWithPaymentSourcesRef: eS,
      setInvoicePreview: eI,
      contextMetadata: eE
    } = (0, I.usePaymentContext)(),
    {
      isGift: eP,
      giftRecipient: eT,
      selectedGiftStyle: eN
    } = (0, S.useGiftContext)(),
    eh = (0, R.usePremiumDiscountOffer)(),
    ev = null == eh ? void 0 : null === (t = eh.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => F.SubscriptionPlanInfo[e].skuId === ef),
    ex = !eP && null != eh && null != ef && ev,
    eA = (0, u.useStateFromStores)([v.default], () => v.default.get(K));
  r()(null != eA, "Missing plan");
  let eC = [{
      planId: eA.id,
      quantity: 1
    }],
    eg = ea === E.PurchaseState.PURCHASING || ea === E.PurchaseState.COMPLETED,
    ey = eP || eg,
    [eM, eR] = (0, M.useSubscriptionInvoicePreview)({
      items: eC,
      renewal: !1,
      preventFetch: ey,
      applyEntitlements: !0,
      paymentSourceId: Z.paymentSourceId,
      currency: Z.currency,
      trialId: et,
      metadata: es
    }),
    [eb, eL] = (0, M.useSubscriptionInvoicePreview)({
      items: eC,
      renewal: !0,
      preventFetch: ey,
      trialId: et,
      paymentSourceId: Z.paymentSourceId,
      currency: Z.currency,
      metadata: es
    }),
    [eO, ej] = (0, M.useSubscriptionInvoicePreview)({
      items: [{
        planId: F.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
        quantity: 1
      }],
      renewal: !0,
      preventFetch: !ex,
      trialId: et,
      paymentSourceId: Z.paymentSourceId,
      currency: Z.currency,
      metadata: es
    }),
    [eG, eD] = (0, M.useOneTimePurchaseInvoicePreview)({
      paymentSourceId: Z.paymentSourceId,
      skuId: ef,
      subscriptionPlanId: K,
      currency: Z.currency,
      preventFetch: !eP || eg,
      loadId: eE.loadId
    });
  s.useEffect(() => {
    eI(eG)
  }, [eI, eG]);
  let eU = eP && (0, A.shouldShowCustomGiftExperience)(eT),
    eF = null !== (a = null != eR ? eR : eL) && void 0 !== a ? a : ej,
    ew = (0, u.useStateFromStores)([N.default], () => N.default.enabled),
    eB = Z.paymentSourceId,
    {
      hasEntitlements: ek,
      entitlements: eH
    } = (0, D.useSubscriptionEntitlements)(eA.id, eP),
    eW = (0, C.isPrepaidPaymentSource)(Z.paymentSourceId),
    eY = (0, P.checkNoPaymentTrialEnabled)(et, eB, K),
    eK = (0, T.inOneStepSubscriptionCheckout)({
      isTrial: eu,
      isGift: eP,
      selectedSkuId: ef,
      startedPaymentFlowWithPaymentSources: eS.current
    }),
    [eV, eZ] = s.useState(null == eM ? void 0 : eM.subscriptionPeriodEnd);
  s.useEffect(() => {
    null == eV && eZ(null == eM ? void 0 : eM.subscriptionPeriodEnd)
  }, [null == eM ? void 0 : eM.subscriptionPeriodEnd, eV]);
  let ez = s.useMemo(() => (0, C.getPremiumPlanOptions)({
      skuId: ef,
      isPremium: e_,
      multiMonthPlans: [],
      currentSubscription: em,
      isGift: eP,
      isEligibleForTrial: eu,
      defaultPlanId: ep,
      defaultToMonthlyPlan: !1
    }), [ef, em, eP, ep, e_, eu]),
    eJ = (0, T.planSwitchLoadingShowSpinner)(eK, eM, eA);
  if (null != eF) {
    let e = eF.message;
    return eF.code === _.ErrorCodes.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (e = k.default.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY), (0, i.jsx)(c.FormErrorBlock, {
      children: e
    })
  }
  if (eP && null != eG) Y = (0, i.jsx)(G.SubscriptionInvoiceGift, {
    plan: eA,
    className: H.invoice,
    isPrepaidPaymentSource: eW,
    isCustomGift: eU,
    invoicePreview: eG
  });
  else if (eu && null != eM) Y = (0, i.jsxs)("div", {
    children: [(0, i.jsx)(b.PremiumInvoiceTableDivider, {
      negativeMarginTop: !0
    }), (0, i.jsxs)(b.PremiumInvoiceTable, {
      className: H.invoice,
      children: [(0, i.jsxs)("div", {
        className: H.trialPriceLine,
        children: [(0, i.jsx)(c.Text, {
          variant: "text-md/bold",
          children: k.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
        }), (0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          children: k.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
            price: (0, g.formatPrice)(0, eM.currency, {
              maximumFractionDigits: 0
            })
          })
        })]
      }), (0, i.jsx)("div", {
        className: H.afterTrialPriceLine,
        children: (0, i.jsx)(G.PremiumTrialInvoiceTableRow, {
          invoice: eM,
          plan: eA
        })
      })]
    })]
  });
  else {
    if (null == eM || null == eb || eJ) return (0, i.jsx)("div", {
      className: H.spinnerWrapper,
      children: (0, i.jsx)(c.Spinner, {})
    });
    eu && eM.subscriptionPeriodEnd !== eb.subscriptionPeriodEnd && (W = eM.subscriptionPeriodEnd), Y = (0, i.jsxs)(b.PremiumInvoiceTable, {
      className: H.invoice,
      children: [(0, i.jsx)(b.PremiumInvoiceTableHeader, {
        children: k.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
      }), (0, i.jsx)(G.PremiumSubscriptionChangePlanInvoiceRows, {
        invoice: eM,
        newPlan: eA,
        isPrepaidPaymentSource: eW,
        referralTrialOfferId: el
      }), eW ? null : (0, i.jsx)(G.SubscriptionInvoiceFooter, {
        renewalInvoice: eb,
        isTrial: eu,
        priceOptions: Z,
        overrideRenewalDate: W,
        trialFooterMessageOverride: en,
        hideSubscriptionDetails: er
      })]
    })
  }
  let eX = l.CountryCodesSets.EEA_COUNTRIES.has(h.default.ipCountryCodeWithFallback),
    {
      checkboxLabel: eq,
      checkboxClassname: eQ,
      checkboxLabelClassname: e$
    } = function(e, t, n) {
      let i = null,
        s = null,
        a = null;
      if (e && null != t) {
        let {
          intervalType: e,
          intervalCount: r
        } = C.default.getIntervalForInvoice(t), l = (0, g.formatRate)((0, g.formatPrice)(t.total, t.currency), e, r), u = null != n ? n : t.subscriptionPeriodEnd;
        i = k.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
          termsURL: w.MarketingURLs.TERMS,
          paidURL: w.MarketingURLs.PAID_TERMS,
          rate: l,
          renewalDate: u
        }), s = H.trialCheckbox, a = H.trialCheckboxLabel
      }
      return {
        checkboxLabel: i,
        checkboxClassname: s,
        checkboxLabelClassname: a
      }
    }(null != eu && eu, eb, W),
    e0 = k.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
      planName: eA.name
    });
  return eP && !eU ? e0 = k.default.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : eP && eU ? e0 = "" : (0, C.isPremiumSubscriptionPlan)(eA.id) && (e0 = C.default.getBillingReviewSubheader(null, eA)), eY ? null : (0, i.jsxs)("div", {
    className: H.stepBody,
    children: [null != ei && (0, i.jsxs)("div", {
      className: H.reviewWarningMessageContainer,
      children: [(0, i.jsx)(x.default, {
        color: o.default.unsafe_rawColors.YELLOW_300.css,
        width: 20,
        height: 20
      }), (0, i.jsx)(c.Text, {
        className: H.reviewWarningMessage,
        variant: "text-sm/normal",
        children: ei
      })]
    }), eK && (0, i.jsxs)("div", {
      children: [(0, i.jsx)(b.PremiumInvoiceTableDivider, {
        negativeMarginTop: !0,
        negativeMarginBottom: !0
      }), (0, i.jsx)(j.PremiumSwitchPlanSelectBody, {
        planOptions: ez,
        eligibleForMultiMonthPlans: !1,
        referralTrialOfferId: void 0,
        selectedPlanId: K,
        subscriptionPeriodEnd: eV,
        showTotal: !1,
        discountInvoiceItems: ex ? null == eO ? void 0 : eO.invoiceItems : void 0,
        handleClose: ec
      }), (0, i.jsx)(b.PremiumInvoiceTableDivider, {})]
    }), !eu && (0, i.jsx)(c.FormTitle, {
      tag: c.FormTitleTags.H5,
      children: e0
    }), eU && null != eN && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(O.default, {
        defaultAnimationState: y.AnimationState.LOOP,
        giftStyle: eN,
        shouldAnimate: !0,
        className: H.__invalid_giftMainAnimation
      }), (0, i.jsx)(U.SendGiftToUser, {
        giftRecipient: eT
      })]
    }), Y, (0, i.jsxs)("div", {
      className: H.paymentSourceWrapper,
      children: [eu ? (0, i.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H5,
        className: H.formTitle,
        children: k.default.Messages.BILLING_STEP_PAYMENT_METHOD
      }) : (0, i.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H5,
        children: k.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }), (0, i.jsx)(f.default, {
        paymentSources: Object.values(V),
        selectedPaymentSourceId: eB,
        prependOption: ek && !eu ? {
          label: k.default.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
          value: null
        } : null,
        onChange: X,
        onPaymentSourceAdd: q,
        hidePersonalInformation: ew,
        isTrial: eu
      }), ek && null == eB ? (0, i.jsx)("div", {
        className: H.paymentSourceOptionalWarning,
        children: k.default.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
          months: eH.length
        })
      }) : null, eo ? null : (0, i.jsxs)(d.CurrencyWrapper, {
        currencies: z,
        className: H.currencyWrapper,
        children: [(0, i.jsx)(c.FormTitle, {
          tag: c.FormTitleTags.H5,
          children: k.default.Messages.PAYMENT_CURRENCY
        }), (0, i.jsx)(d.default, {
          selectedCurrency: Z.currency,
          currencies: z,
          onChange: J
        })]
      })]
    }), (0, i.jsx)(L.default, {
      isActive: ee,
      ref: $,
      children: (0, i.jsx)(p.default, {
        onChange: Q,
        forceShow: !0,
        checkboxLabel: eq,
        checkboxClassname: eQ,
        checkboxLabelClassname: e$,
        finePrint: null != en ? en : (0, i.jsx)(m.default, {
          hide: eu || eo,
          subscriptionPlan: eA,
          renewalInvoice: eb,
          isGift: eP,
          paymentSourceType: null === (n = V[null != eB ? eB : ""]) || void 0 === n ? void 0 : n.type,
          isEmbeddedIAP: ed,
          basePrice: (0, C.getPrice)(eA.id, !1, eP, Z)
        }),
        showPricingLink: eA.currency !== B.CurrencyCodes.USD,
        showWithdrawalWaiver: eX,
        disabled: eg,
        isTrial: eu && null == en,
        isDiscount: eo,
        subscriptionPlan: eA,
        isGift: eP
      })
    })]
  })
}