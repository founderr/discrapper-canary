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
      setInvoicePreview: eI
    } = (0, I.usePaymentContext)(),
    {
      isGift: eE,
      giftRecipient: eP,
      selectedGiftStyle: eT
    } = (0, S.useGiftContext)(),
    eN = (0, R.usePremiumDiscountOffer)(),
    eh = null == eN ? void 0 : null === (t = eN.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => F.SubscriptionPlanInfo[e].skuId === ef),
    ev = !eE && null != eN && null != ef && eh,
    ex = (0, u.useStateFromStores)([v.default], () => v.default.get(K));
  r()(null != ex, "Missing plan");
  let eA = [{
      planId: ex.id,
      quantity: 1
    }],
    eC = ea === E.PurchaseState.PURCHASING || ea === E.PurchaseState.COMPLETED,
    eg = eE || eC,
    [ey, eM] = (0, M.useSubscriptionInvoicePreview)({
      items: eA,
      renewal: !1,
      preventFetch: eg,
      applyEntitlements: !0,
      paymentSourceId: Z.paymentSourceId,
      currency: Z.currency,
      trialId: et,
      metadata: es
    }),
    [eR, eb] = (0, M.useSubscriptionInvoicePreview)({
      items: eA,
      renewal: !0,
      preventFetch: eg,
      trialId: et,
      paymentSourceId: Z.paymentSourceId,
      currency: Z.currency,
      metadata: es
    }),
    [eL, eO] = (0, M.useSubscriptionInvoicePreview)({
      items: [{
        planId: F.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
        quantity: 1
      }],
      renewal: !0,
      preventFetch: !ev,
      trialId: et,
      paymentSourceId: Z.paymentSourceId,
      currency: Z.currency,
      metadata: es
    }),
    [ej, eG] = (0, M.useOneTimePurchaseInvoicePreview)({
      paymentSourceId: Z.paymentSourceId,
      skuId: ef,
      subscriptionPlanId: K,
      currency: Z.currency,
      preventFetch: !eE || eC
    });
  s.useEffect(() => {
    eI(ej)
  }, [eI, ej]);
  let eD = eE && (0, A.shouldShowCustomGiftExperience)(eP),
    eU = null !== (a = null != eM ? eM : eb) && void 0 !== a ? a : eO,
    eF = (0, u.useStateFromStores)([N.default], () => N.default.enabled),
    ew = Z.paymentSourceId,
    {
      hasEntitlements: eB,
      entitlements: ek
    } = (0, D.useSubscriptionEntitlements)(ex.id, eE),
    eH = (0, C.isPrepaidPaymentSource)(Z.paymentSourceId),
    eW = (0, P.checkNoPaymentTrialEnabled)(et, ew, K),
    eY = (0, T.inOneStepSubscriptionCheckout)({
      isTrial: eu,
      isGift: eE,
      selectedSkuId: ef,
      startedPaymentFlowWithPaymentSources: eS.current
    }),
    [eK, eV] = s.useState(null == ey ? void 0 : ey.subscriptionPeriodEnd);
  s.useEffect(() => {
    null == eK && eV(null == ey ? void 0 : ey.subscriptionPeriodEnd)
  }, [null == ey ? void 0 : ey.subscriptionPeriodEnd, eK]);
  let eZ = s.useMemo(() => (0, C.getPremiumPlanOptions)({
      skuId: ef,
      isPremium: e_,
      multiMonthPlans: [],
      currentSubscription: em,
      isGift: eE,
      isEligibleForTrial: eu,
      defaultPlanId: ep,
      defaultToMonthlyPlan: !1
    }), [ef, em, eE, ep, e_, eu]),
    ez = (0, T.planSwitchLoadingShowSpinner)(eY, ey, ex);
  if (null != eU) {
    let e = eU.message;
    return eU.code === _.ErrorCodes.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (e = k.default.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY), (0, i.jsx)(c.FormErrorBlock, {
      children: e
    })
  }
  if (eE && null != ej) Y = (0, i.jsx)(G.SubscriptionInvoiceGift, {
    plan: ex,
    className: H.invoice,
    isPrepaidPaymentSource: eH,
    isCustomGift: eD,
    invoicePreview: ej
  });
  else if (eu && null != ey) Y = (0, i.jsxs)("div", {
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
            price: (0, g.formatPrice)(0, ey.currency, {
              maximumFractionDigits: 0
            })
          })
        })]
      }), (0, i.jsx)("div", {
        className: H.afterTrialPriceLine,
        children: (0, i.jsx)(G.PremiumTrialInvoiceTableRow, {
          invoice: ey,
          plan: ex
        })
      })]
    })]
  });
  else {
    if (null == ey || null == eR || ez) return (0, i.jsx)("div", {
      className: H.spinnerWrapper,
      children: (0, i.jsx)(c.Spinner, {})
    });
    eu && ey.subscriptionPeriodEnd !== eR.subscriptionPeriodEnd && (W = ey.subscriptionPeriodEnd), Y = (0, i.jsxs)(b.PremiumInvoiceTable, {
      className: H.invoice,
      children: [(0, i.jsx)(b.PremiumInvoiceTableHeader, {
        children: k.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
      }), (0, i.jsx)(G.PremiumSubscriptionChangePlanInvoiceRows, {
        invoice: ey,
        newPlan: ex,
        isPrepaidPaymentSource: eH,
        referralTrialOfferId: el
      }), eH ? null : (0, i.jsx)(G.SubscriptionInvoiceFooter, {
        renewalInvoice: eR,
        isTrial: eu,
        priceOptions: Z,
        overrideRenewalDate: W,
        trialFooterMessageOverride: en,
        hideSubscriptionDetails: er
      })]
    })
  }
  let eJ = l.CountryCodesSets.EEA_COUNTRIES.has(h.default.ipCountryCodeWithFallback),
    {
      checkboxLabel: eX,
      checkboxClassname: eq,
      checkboxLabelClassname: eQ
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
    }(null != eu && eu, eR, W),
    e$ = k.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
      planName: ex.name
    });
  return eE && !eD ? e$ = k.default.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : eE && eD ? e$ = "" : (0, C.isPremiumSubscriptionPlan)(ex.id) && (e$ = C.default.getBillingReviewSubheader(null, ex)), eW ? null : (0, i.jsxs)("div", {
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
    }), eY && (0, i.jsxs)("div", {
      children: [(0, i.jsx)(b.PremiumInvoiceTableDivider, {
        negativeMarginTop: !0,
        negativeMarginBottom: !0
      }), (0, i.jsx)(j.PremiumSwitchPlanSelectBody, {
        planOptions: eZ,
        eligibleForMultiMonthPlans: !1,
        referralTrialOfferId: void 0,
        selectedPlanId: K,
        subscriptionPeriodEnd: eK,
        showTotal: !1,
        discountInvoiceItems: ev ? null == eL ? void 0 : eL.invoiceItems : void 0,
        handleClose: ec
      }), (0, i.jsx)(b.PremiumInvoiceTableDivider, {})]
    }), !eu && (0, i.jsx)(c.FormTitle, {
      tag: c.FormTitleTags.H5,
      children: e$
    }), eD && null != eT && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(O.default, {
        defaultAnimationState: y.AnimationState.LOOP,
        giftStyle: eT,
        shouldAnimate: !0,
        className: H.__invalid_giftMainAnimation
      }), (0, i.jsx)(U.SendGiftToUser, {
        giftRecipient: eP
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
        selectedPaymentSourceId: ew,
        prependOption: eB && !eu ? {
          label: k.default.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
          value: null
        } : null,
        onChange: X,
        onPaymentSourceAdd: q,
        hidePersonalInformation: eF,
        isTrial: eu
      }), eB && null == ew ? (0, i.jsx)("div", {
        className: H.paymentSourceOptionalWarning,
        children: k.default.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
          months: ek.length
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
        checkboxLabel: eX,
        checkboxClassname: eq,
        checkboxLabelClassname: eQ,
        finePrint: null != en ? en : (0, i.jsx)(m.default, {
          hide: eu || eo,
          subscriptionPlan: ex,
          renewalInvoice: eR,
          isGift: eE,
          paymentSourceType: null === (n = V[null != ew ? ew : ""]) || void 0 === n ? void 0 : n.type,
          isEmbeddedIAP: ed,
          basePrice: (0, C.getPrice)(ex.id, !1, eE, Z)
        }),
        showPricingLink: ex.currency !== B.CurrencyCodes.USD,
        showWithdrawalWaiver: eJ,
        disabled: eC,
        isTrial: eu && null == en,
        isDiscount: eo,
        subscriptionPlan: ex,
        isGift: eE
      })
    })]
  })
}