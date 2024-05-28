"use strict";
n.r(t), n.d(t, {
  default: function() {
    return K
  }
}), n("47120");
var i = n("735250"),
  l = n("470079"),
  s = n("512722"),
  a = n.n(s),
  r = n("742280"),
  u = n("442837"),
  o = n("692547"),
  c = n("481060"),
  d = n("190947"),
  m = n("224550"),
  p = n("275850"),
  f = n("672971"),
  S = n("128069"),
  I = n("987209"),
  _ = n("598"),
  P = n("45572"),
  E = n("919778"),
  T = n("614223"),
  v = n("246946"),
  h = n("351402"),
  N = n("509545"),
  x = n("41542"),
  A = n("669079"),
  y = n("74538"),
  C = n("937615"),
  R = n("479446"),
  b = n("374649"),
  g = n("424082"),
  O = n("104494"),
  M = n("639119"),
  L = n("653798"),
  j = n("314182"),
  G = n("981632"),
  U = n("314404"),
  D = n("42818"),
  w = n("459965"),
  F = n("251660"),
  B = n("474936"),
  H = n("981631"),
  k = n("231338"),
  W = n("689938"),
  Y = n("507448");

function K(e) {
  var t, n, s;
  let K, V, {
      selectedPlanId: z,
      paymentSources: Z,
      priceOptions: X,
      currencies: J,
      onCurrencyChange: q,
      onPaymentSourceChange: Q,
      handlePaymentSourceAdd: $,
      setHasAcceptedTerms: ee,
      legalTermsNodeRef: et,
      hasLegalTermsFlash: en,
      trialId: ei,
      trialFooterMessageOverride: el,
      reviewWarningMessage: es,
      metadata: ea,
      purchaseState: er,
      hideSubscriptionDetails: eu,
      referralTrialOfferId: eo,
      isTrial: ec = !1,
      isDiscount: ed = !1,
      handleClose: em
    } = e,
    {
      isEmbeddedIAP: ep,
      activeSubscription: ef,
      selectedSkuId: eS,
      defaultPlanId: eI,
      isPremium: e_,
      startedPaymentFlowWithPaymentSourcesRef: eP,
      setInvoicePreview: eE,
      contextMetadata: eT
    } = (0, _.usePaymentContext)(),
    {
      isGift: ev,
      giftRecipient: eh,
      selectedGiftStyle: eN
    } = (0, I.useGiftContext)(),
    ex = (0, O.usePremiumDiscountOffer)(),
    eA = (0, M.usePremiumTrialOffer)(eo);
  (0, g.useAnnualDiscountExperiment)("PremiumSubscriptionReview", null == eA);
  let ey = null == ex ? void 0 : null === (t = ex.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => B.SubscriptionPlanInfo[e].skuId === eS),
    eC = !ev && null != ex && null != eS && ey,
    eR = (0, u.useStateFromStores)([N.default], () => N.default.get(z));
  a()(null != eR, "Missing plan");
  let eb = [{
      planId: eR.id,
      quantity: 1
    }],
    eg = er === P.PurchaseState.PURCHASING || er === P.PurchaseState.COMPLETED,
    eO = ev || eg,
    [eM, eL] = (0, b.useSubscriptionInvoicePreview)({
      items: eb,
      renewal: !1,
      preventFetch: eO,
      applyEntitlements: !0,
      paymentSourceId: X.paymentSourceId,
      currency: X.currency,
      trialId: ei,
      metadata: ea
    }),
    [ej, eG] = (0, b.useSubscriptionInvoicePreview)({
      items: eb,
      renewal: !0,
      preventFetch: eO,
      trialId: ei,
      paymentSourceId: X.paymentSourceId,
      currency: X.currency,
      metadata: ea
    }),
    [eU, eD] = (0, b.useSubscriptionInvoicePreview)({
      items: [{
        planId: B.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
        quantity: 1
      }],
      renewal: !0,
      preventFetch: !eC,
      trialId: ei,
      paymentSourceId: X.paymentSourceId,
      currency: X.currency,
      metadata: ea
    }),
    [ew, eF] = (0, b.useOneTimePurchaseInvoicePreview)({
      paymentSourceId: X.paymentSourceId,
      skuId: eS,
      subscriptionPlanId: z,
      currency: X.currency,
      preventFetch: !ev || eg,
      loadId: eT.loadId
    });
  l.useEffect(() => {
    eE(ew)
  }, [eE, ew]);
  let eB = ev && (0, A.shouldShowCustomGiftExperience)(eh),
    eH = null !== (s = null != eL ? eL : eG) && void 0 !== s ? s : eD,
    ek = (0, u.useStateFromStores)([v.default], () => v.default.enabled),
    eW = X.paymentSourceId,
    {
      hasEntitlements: eY,
      entitlements: eK
    } = (0, w.useSubscriptionEntitlements)(eR.id, ev),
    eV = (0, y.isPrepaidPaymentSource)(X.paymentSourceId),
    ez = (0, E.checkNoPaymentTrialEnabled)(ei, eW, z),
    eZ = (0, T.inOneStepSubscriptionCheckout)({
      isTrial: ec,
      isGift: ev,
      selectedSkuId: eS,
      startedPaymentFlowWithPaymentSources: eP.current
    }),
    [eX, eJ] = l.useState(null == eM ? void 0 : eM.subscriptionPeriodEnd);
  l.useEffect(() => {
    null == eX && eJ(null == eM ? void 0 : eM.subscriptionPeriodEnd)
  }, [null == eM ? void 0 : eM.subscriptionPeriodEnd, eX]);
  let eq = l.useMemo(() => (0, y.getPremiumPlanOptions)({
      skuId: eS,
      isPremium: e_,
      multiMonthPlans: [],
      currentSubscription: ef,
      isGift: ev,
      isEligibleForTrial: ec,
      defaultPlanId: eI,
      defaultToMonthlyPlan: !1
    }), [eS, ef, ev, eI, e_, ec]),
    eQ = (0, T.planSwitchLoadingShowSpinner)(eZ, eM, eR);
  if (null != eH) {
    let e = eH.message;
    return eH.code === S.ErrorCodes.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (e = W.default.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY), (0, i.jsx)(c.FormErrorBlock, {
      children: e
    })
  }
  if (ev && null != ew) V = (0, i.jsx)(D.SubscriptionInvoiceGift, {
    plan: eR,
    className: Y.invoice,
    isPrepaidPaymentSource: eV,
    isCustomGift: eB,
    invoicePreview: ew
  });
  else if (ec && null != eM) V = (0, i.jsxs)("div", {
    children: [(0, i.jsx)(L.PremiumInvoiceTableDivider, {
      negativeMarginTop: !0
    }), (0, i.jsxs)(L.PremiumInvoiceTable, {
      className: Y.invoice,
      children: [(0, i.jsxs)("div", {
        className: Y.trialPriceLine,
        children: [(0, i.jsx)(c.Text, {
          variant: "text-md/bold",
          children: W.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
        }), (0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          children: W.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
            price: (0, C.formatPrice)(0, eM.currency, {
              maximumFractionDigits: 0
            })
          })
        })]
      }), (0, i.jsx)("div", {
        className: Y.afterTrialPriceLine,
        children: (0, i.jsx)(D.PremiumTrialInvoiceTableRow, {
          invoice: eM,
          plan: eR
        })
      })]
    })]
  });
  else {
    if (null == eM || null == ej || eQ) return (0, i.jsx)("div", {
      className: Y.spinnerWrapper,
      children: (0, i.jsx)(c.Spinner, {})
    });
    ec && eM.subscriptionPeriodEnd !== ej.subscriptionPeriodEnd && (K = eM.subscriptionPeriodEnd), V = (0, i.jsxs)(L.PremiumInvoiceTable, {
      className: Y.invoice,
      children: [(0, i.jsx)(L.PremiumInvoiceTableHeader, {
        children: W.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
      }), (0, i.jsx)(D.PremiumSubscriptionChangePlanInvoiceRows, {
        invoice: eM,
        newPlan: eR,
        isPrepaidPaymentSource: eV,
        referralTrialOfferId: eo
      }), eV ? null : (0, i.jsx)(D.SubscriptionInvoiceFooter, {
        renewalInvoice: ej,
        isTrial: ec,
        priceOptions: X,
        overrideRenewalDate: K,
        trialFooterMessageOverride: el,
        hideSubscriptionDetails: eu
      })]
    })
  }
  let e$ = r.CountryCodesSets.EEA_COUNTRIES.has(h.default.ipCountryCodeWithFallback),
    {
      checkboxLabel: e0,
      checkboxClassname: e1,
      checkboxLabelClassname: e9
    } = function(e, t, n) {
      let i = null,
        l = null,
        s = null;
      if (e && null != t) {
        let {
          intervalType: e,
          intervalCount: a
        } = y.default.getIntervalForInvoice(t), r = (0, C.formatRate)((0, C.formatPrice)(t.total, t.currency), e, a), u = null != n ? n : t.subscriptionPeriodEnd;
        i = W.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
          termsURL: H.MarketingURLs.TERMS,
          paidURL: H.MarketingURLs.PAID_TERMS,
          rate: r,
          renewalDate: u
        }), l = Y.trialCheckbox, s = Y.trialCheckboxLabel
      }
      return {
        checkboxLabel: i,
        checkboxClassname: l,
        checkboxLabelClassname: s
      }
    }(null != ec && ec, ej, K),
    e4 = W.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
      planName: eR.name
    });
  return ev && !eB ? e4 = W.default.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : ev && eB ? e4 = "" : (0, y.isPremiumSubscriptionPlan)(eR.id) && (e4 = y.default.getBillingReviewSubheader(null, eR)), ez ? null : (0, i.jsxs)("div", {
    className: Y.stepBody,
    children: [null != es && (0, i.jsxs)("div", {
      className: Y.reviewWarningMessageContainer,
      children: [(0, i.jsx)(x.default, {
        color: o.default.unsafe_rawColors.YELLOW_300.css,
        width: 20,
        height: 20
      }), (0, i.jsx)(c.Text, {
        className: Y.reviewWarningMessage,
        variant: "text-sm/normal",
        children: es
      })]
    }), eZ && (0, i.jsxs)("div", {
      children: [(0, i.jsx)(L.PremiumInvoiceTableDivider, {
        negativeMarginTop: !0,
        negativeMarginBottom: !0
      }), (0, i.jsx)(U.PremiumSwitchPlanSelectBody, {
        planOptions: eq,
        eligibleForMultiMonthPlans: !1,
        referralTrialOfferId: void 0,
        selectedPlanId: z,
        subscriptionPeriodEnd: eX,
        showTotal: !1,
        discountInvoiceItems: eC ? null == eU ? void 0 : eU.invoiceItems : void 0,
        handleClose: em
      }), (0, i.jsx)(L.PremiumInvoiceTableDivider, {})]
    }), !ec && (0, i.jsx)(c.FormTitle, {
      tag: c.FormTitleTags.H5,
      children: e4
    }), eB && null != eN && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(G.default, {
        defaultAnimationState: R.AnimationState.LOOP,
        giftStyle: eN,
        shouldAnimate: !0,
        className: Y.__invalid_giftMainAnimation
      }), (0, i.jsx)(F.SendGiftToUser, {
        giftRecipient: eh
      })]
    }), V, (0, i.jsxs)("div", {
      className: Y.paymentSourceWrapper,
      children: [ec ? (0, i.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H5,
        className: Y.formTitle,
        children: W.default.Messages.BILLING_STEP_PAYMENT_METHOD
      }) : (0, i.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H5,
        children: W.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }), (0, i.jsx)(p.default, {
        paymentSources: Object.values(Z),
        selectedPaymentSourceId: eW,
        prependOption: eY && !ec ? {
          label: W.default.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
          value: null
        } : null,
        onChange: Q,
        onPaymentSourceAdd: $,
        hidePersonalInformation: ek,
        isTrial: ec
      }), eY && null == eW ? (0, i.jsx)("div", {
        className: Y.paymentSourceOptionalWarning,
        children: W.default.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
          months: eK.length
        })
      }) : null, ed ? null : (0, i.jsxs)(d.CurrencyWrapper, {
        currencies: J,
        className: Y.currencyWrapper,
        children: [(0, i.jsx)(c.FormTitle, {
          tag: c.FormTitleTags.H5,
          children: W.default.Messages.PAYMENT_CURRENCY
        }), (0, i.jsx)(d.default, {
          selectedCurrency: X.currency,
          currencies: J,
          onChange: q
        })]
      })]
    }), (0, i.jsx)(j.default, {
      isActive: en,
      ref: et,
      children: (0, i.jsx)(f.default, {
        onChange: ee,
        forceShow: !0,
        checkboxLabel: e0,
        checkboxClassname: e1,
        checkboxLabelClassname: e9,
        finePrint: null != el ? el : (0, i.jsx)(m.default, {
          hide: ec || ed,
          subscriptionPlan: eR,
          renewalInvoice: ej,
          isGift: ev,
          paymentSourceType: null === (n = Z[null != eW ? eW : ""]) || void 0 === n ? void 0 : n.type,
          isEmbeddedIAP: ep,
          basePrice: (0, y.getPrice)(eR.id, !1, ev, X)
        }),
        showPricingLink: eR.currency !== k.CurrencyCodes.USD,
        showWithdrawalWaiver: e$,
        disabled: eg,
        isTrial: ec && null == el,
        isDiscount: ed,
        subscriptionPlan: eR,
        isGift: ev
      })
    })]
  })
}