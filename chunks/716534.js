"use strict";
n.r(t), n.d(t, {
  default: function() {
    return K
  }
}), n("47120");
var i = n("735250"),
  s = n("470079"),
  l = n("512722"),
  r = n.n(l),
  a = n("742280"),
  u = n("442837"),
  o = n("692547"),
  c = n("481060"),
  d = n("190947"),
  m = n("224550"),
  f = n("275850"),
  p = n("672971"),
  I = n("128069"),
  S = n("987209"),
  _ = n("598"),
  P = n("45572"),
  E = n("919778"),
  T = n("614223"),
  N = n("246946"),
  v = n("351402"),
  h = n("509545"),
  x = n("41542"),
  A = n("669079"),
  y = n("74538"),
  g = n("937615"),
  C = n("479446"),
  M = n("374649"),
  R = n("424082"),
  b = n("104494"),
  L = n("639119"),
  O = n("653798"),
  j = n("314182"),
  G = n("981632"),
  D = n("314404"),
  U = n("42818"),
  w = n("459965"),
  F = n("251660"),
  B = n("474936"),
  k = n("981631"),
  H = n("231338"),
  W = n("689938"),
  Y = n("422449");

function K(e) {
  var t, n, l;
  let K, V, {
      selectedPlanId: Z,
      paymentSources: z,
      priceOptions: J,
      currencies: X,
      onCurrencyChange: q,
      onPaymentSourceChange: Q,
      handlePaymentSourceAdd: $,
      setHasAcceptedTerms: ee,
      legalTermsNodeRef: et,
      hasLegalTermsFlash: en,
      trialId: ei,
      trialFooterMessageOverride: es,
      reviewWarningMessage: el,
      metadata: er,
      purchaseState: ea,
      hideSubscriptionDetails: eu,
      referralTrialOfferId: eo,
      isTrial: ec = !1,
      isDiscount: ed = !1,
      handleClose: em
    } = e,
    {
      isEmbeddedIAP: ef,
      activeSubscription: ep,
      selectedSkuId: eI,
      defaultPlanId: eS,
      isPremium: e_,
      startedPaymentFlowWithPaymentSourcesRef: eP,
      setInvoicePreview: eE,
      contextMetadata: eT
    } = (0, _.usePaymentContext)(),
    {
      isGift: eN,
      giftRecipient: ev,
      selectedGiftStyle: eh
    } = (0, S.useGiftContext)(),
    ex = (0, b.usePremiumDiscountOffer)(),
    eA = (0, L.usePremiumTrialOffer)(eo);
  (0, R.useAnnualDiscountExperiment)("PremiumSubscriptionReview", null == eA);
  let ey = null == ex ? void 0 : null === (t = ex.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => B.SubscriptionPlanInfo[e].skuId === eI),
    eg = !eN && null != ex && null != eI && ey,
    eC = (0, u.useStateFromStores)([h.default], () => h.default.get(Z));
  r()(null != eC, "Missing plan");
  let eM = [{
      planId: eC.id,
      quantity: 1
    }],
    eR = ea === P.PurchaseState.PURCHASING || ea === P.PurchaseState.COMPLETED,
    eb = eN || eR,
    [eL, eO] = (0, M.useSubscriptionInvoicePreview)({
      items: eM,
      renewal: !1,
      preventFetch: eb,
      applyEntitlements: !0,
      paymentSourceId: J.paymentSourceId,
      currency: J.currency,
      trialId: ei,
      metadata: er
    }),
    [ej, eG] = (0, M.useSubscriptionInvoicePreview)({
      items: eM,
      renewal: !0,
      preventFetch: eb,
      trialId: ei,
      paymentSourceId: J.paymentSourceId,
      currency: J.currency,
      metadata: er
    }),
    [eD, eU] = (0, M.useSubscriptionInvoicePreview)({
      items: [{
        planId: B.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
        quantity: 1
      }],
      renewal: !0,
      preventFetch: !eg,
      trialId: ei,
      paymentSourceId: J.paymentSourceId,
      currency: J.currency,
      metadata: er
    }),
    [ew, eF] = (0, M.useOneTimePurchaseInvoicePreview)({
      paymentSourceId: J.paymentSourceId,
      skuId: eI,
      subscriptionPlanId: Z,
      currency: J.currency,
      preventFetch: !eN || eR,
      loadId: eT.loadId
    });
  s.useEffect(() => {
    eE(ew)
  }, [eE, ew]);
  let eB = eN && (0, A.shouldShowCustomGiftExperience)(ev),
    ek = null !== (l = null != eO ? eO : eG) && void 0 !== l ? l : eU,
    eH = (0, u.useStateFromStores)([N.default], () => N.default.enabled),
    eW = J.paymentSourceId,
    {
      hasEntitlements: eY,
      entitlements: eK
    } = (0, w.useSubscriptionEntitlements)(eC.id, eN),
    eV = (0, y.isPrepaidPaymentSource)(J.paymentSourceId),
    eZ = (0, E.checkNoPaymentTrialEnabled)(ei, eW, Z),
    ez = (0, T.inOneStepSubscriptionCheckout)({
      isTrial: ec,
      isGift: eN,
      selectedSkuId: eI,
      startedPaymentFlowWithPaymentSources: eP.current
    }),
    [eJ, eX] = s.useState(null == eL ? void 0 : eL.subscriptionPeriodEnd);
  s.useEffect(() => {
    null == eJ && eX(null == eL ? void 0 : eL.subscriptionPeriodEnd)
  }, [null == eL ? void 0 : eL.subscriptionPeriodEnd, eJ]);
  let eq = s.useMemo(() => (0, y.getPremiumPlanOptions)({
      skuId: eI,
      isPremium: e_,
      multiMonthPlans: [],
      currentSubscription: ep,
      isGift: eN,
      isEligibleForTrial: ec,
      defaultPlanId: eS,
      defaultToMonthlyPlan: !1
    }), [eI, ep, eN, eS, e_, ec]),
    eQ = (0, T.planSwitchLoadingShowSpinner)(ez, eL, eC);
  if (null != ek) {
    let e = ek.message;
    return ek.code === I.ErrorCodes.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (e = W.default.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY), (0, i.jsx)(c.FormErrorBlock, {
      children: e
    })
  }
  if (eN && null != ew) V = (0, i.jsx)(U.SubscriptionInvoiceGift, {
    plan: eC,
    className: Y.invoice,
    isPrepaidPaymentSource: eV,
    isCustomGift: eB,
    invoicePreview: ew
  });
  else if (ec && null != eL) V = (0, i.jsxs)("div", {
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
            price: (0, g.formatPrice)(0, eL.currency, {
              maximumFractionDigits: 0
            })
          })
        })]
      }), (0, i.jsx)("div", {
        className: Y.afterTrialPriceLine,
        children: (0, i.jsx)(U.PremiumTrialInvoiceTableRow, {
          invoice: eL,
          plan: eC
        })
      })]
    })]
  });
  else {
    if (null == eL || null == ej || eQ) return (0, i.jsx)("div", {
      className: Y.spinnerWrapper,
      children: (0, i.jsx)(c.Spinner, {})
    });
    ec && eL.subscriptionPeriodEnd !== ej.subscriptionPeriodEnd && (K = eL.subscriptionPeriodEnd), V = (0, i.jsxs)(O.PremiumInvoiceTable, {
      className: Y.invoice,
      children: [(0, i.jsx)(O.PremiumInvoiceTableHeader, {
        children: W.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
      }), (0, i.jsx)(U.PremiumSubscriptionChangePlanInvoiceRows, {
        invoice: eL,
        newPlan: eC,
        isPrepaidPaymentSource: eV,
        referralTrialOfferId: eo
      }), eV ? null : (0, i.jsx)(U.SubscriptionInvoiceFooter, {
        renewalInvoice: ej,
        isTrial: ec,
        priceOptions: J,
        overrideRenewalDate: K,
        trialFooterMessageOverride: es,
        hideSubscriptionDetails: eu
      })]
    })
  }
  let e$ = a.CountryCodesSets.EEA_COUNTRIES.has(v.default.ipCountryCodeWithFallback),
    {
      checkboxLabel: e0,
      checkboxClassname: e1,
      checkboxLabelClassname: e2
    } = function(e, t, n) {
      let i = null,
        s = null,
        l = null;
      if (e && null != t) {
        let {
          intervalType: e,
          intervalCount: r
        } = y.default.getIntervalForInvoice(t), a = (0, g.formatRate)((0, g.formatPrice)(t.total, t.currency), e, r), u = null != n ? n : t.subscriptionPeriodEnd;
        i = W.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
          termsURL: k.MarketingURLs.TERMS,
          paidURL: k.MarketingURLs.PAID_TERMS,
          rate: a,
          renewalDate: u
        }), s = Y.trialCheckbox, l = Y.trialCheckboxLabel
      }
      return {
        checkboxLabel: i,
        checkboxClassname: s,
        checkboxLabelClassname: l
      }
    }(null != ec && ec, ej, K),
    e4 = W.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
      planName: eC.name
    });
  return eN && !eB ? e4 = W.default.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : eN && eB ? e4 = "" : (0, y.isPremiumSubscriptionPlan)(eC.id) && (e4 = y.default.getBillingReviewSubheader(null, eC)), eZ ? null : (0, i.jsxs)("div", {
    className: Y.stepBody,
    children: [null != el && (0, i.jsxs)("div", {
      className: Y.reviewWarningMessageContainer,
      children: [(0, i.jsx)(x.default, {
        color: o.default.unsafe_rawColors.YELLOW_300.css,
        width: 20,
        height: 20
      }), (0, i.jsx)(c.Text, {
        className: Y.reviewWarningMessage,
        variant: "text-sm/normal",
        children: el
      })]
    }), ez && (0, i.jsxs)("div", {
      children: [(0, i.jsx)(O.PremiumInvoiceTableDivider, {
        negativeMarginTop: !0,
        negativeMarginBottom: !0
      }), (0, i.jsx)(D.PremiumSwitchPlanSelectBody, {
        planOptions: eq,
        eligibleForMultiMonthPlans: !1,
        referralTrialOfferId: void 0,
        selectedPlanId: Z,
        subscriptionPeriodEnd: eJ,
        showTotal: !1,
        discountInvoiceItems: eg ? null == eD ? void 0 : eD.invoiceItems : void 0,
        handleClose: em
      }), (0, i.jsx)(O.PremiumInvoiceTableDivider, {})]
    }), !ec && (0, i.jsx)(c.FormTitle, {
      tag: c.FormTitleTags.H5,
      children: e4
    }), eB && null != eh && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(G.default, {
        defaultAnimationState: C.AnimationState.LOOP,
        giftStyle: eh,
        shouldAnimate: !0,
        className: Y.__invalid_giftMainAnimation
      }), (0, i.jsx)(F.SendGiftToUser, {
        giftRecipient: ev
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
      }), (0, i.jsx)(f.default, {
        paymentSources: Object.values(z),
        selectedPaymentSourceId: eW,
        prependOption: eY && !ec ? {
          label: W.default.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
          value: null
        } : null,
        onChange: Q,
        onPaymentSourceAdd: $,
        hidePersonalInformation: eH,
        isTrial: ec
      }), eY && null == eW ? (0, i.jsx)("div", {
        className: Y.paymentSourceOptionalWarning,
        children: W.default.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
          months: eK.length
        })
      }) : null, ed ? null : (0, i.jsxs)(d.CurrencyWrapper, {
        currencies: X,
        className: Y.currencyWrapper,
        children: [(0, i.jsx)(c.FormTitle, {
          tag: c.FormTitleTags.H5,
          children: W.default.Messages.PAYMENT_CURRENCY
        }), (0, i.jsx)(d.default, {
          selectedCurrency: J.currency,
          currencies: X,
          onChange: q
        })]
      })]
    }), (0, i.jsx)(j.default, {
      isActive: en,
      ref: et,
      children: (0, i.jsx)(p.default, {
        onChange: ee,
        forceShow: !0,
        checkboxLabel: e0,
        checkboxClassname: e1,
        checkboxLabelClassname: e2,
        finePrint: null != es ? es : (0, i.jsx)(m.default, {
          hide: ec || ed,
          subscriptionPlan: eC,
          renewalInvoice: ej,
          isGift: eN,
          paymentSourceType: null === (n = z[null != eW ? eW : ""]) || void 0 === n ? void 0 : n.type,
          isEmbeddedIAP: ef,
          basePrice: (0, y.getPrice)(eC.id, !1, eN, J)
        }),
        showPricingLink: eC.currency !== H.CurrencyCodes.USD,
        showWithdrawalWaiver: e$,
        disabled: eR,
        isTrial: ec && null == es,
        isDiscount: ed,
        subscriptionPlan: eC,
        isGift: eN
      })
    })]
  })
}