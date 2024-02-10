"use strict";
n.r(t), n.d(t, {
  default: function() {
    return H
  }
}), n("222007");
var s = n("37983"),
  r = n("884691"),
  a = n("627445"),
  l = n.n(a),
  i = n("976979"),
  u = n("446674"),
  c = n("669491"),
  o = n("77078"),
  d = n("335430"),
  f = n("703332"),
  m = n("740055"),
  _ = n("545876"),
  E = n("736978"),
  p = n("635357"),
  I = n("642906"),
  S = n("286350"),
  P = n("102492"),
  N = n("176108"),
  T = n("102985"),
  C = n("160299"),
  A = n("10514"),
  O = n("68238"),
  h = n("659632"),
  R = n("719923"),
  g = n("153160"),
  M = n("210721"),
  x = n("809071"),
  v = n("154889"),
  y = n("883662"),
  L = n("623003"),
  b = n("65324"),
  j = n("570727"),
  G = n("146163"),
  D = n("661128"),
  U = n("617223"),
  B = n("646718"),
  F = n("49111"),
  k = n("843455"),
  Y = n("782340"),
  w = n("615689");

function H(e) {
  var t, n, a;
  let H, W, {
      selectedPlanId: Z,
      paymentSources: K,
      priceOptions: V,
      currencies: z,
      onCurrencyChange: X,
      onPaymentSourceChange: J,
      handlePaymentSourceAdd: q,
      setHasAcceptedTerms: Q,
      legalTermsNodeRef: $,
      hasLegalTermsFlash: ee,
      trialId: et,
      trialFooterMessageOverride: en,
      reviewWarningMessage: es,
      metadata: er,
      purchaseState: ea,
      hideSubscriptionDetails: el,
      referralTrialOfferId: ei,
      isTrial: eu = !1,
      isDiscount: ec = !1,
      handleClose: eo
    } = e,
    {
      isEmbeddedIAP: ed,
      activeSubscription: ef,
      selectedSkuId: em,
      defaultPlanId: e_,
      isPremium: eE,
      startedPaymentFlowWithPaymentSourcesRef: ep
    } = (0, I.usePaymentContext)(),
    {
      isGift: eI,
      giftRecipient: eS,
      selectedGiftStyle: eP
    } = (0, p.useGiftContext)(),
    eN = (0, v.usePremiumDiscountOffer)(),
    eT = null == eN ? void 0 : null === (t = eN.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => B.SubscriptionPlanInfo[e].skuId === em),
    eC = !eI && null != eN && null != em && eT,
    eA = (0, u.useStateFromStores)([A.default], () => A.default.get(Z));
  l(null != eA, "Missing plan");
  let eO = [{
      planId: eA.id,
      quantity: 1
    }],
    eh = ea === S.PurchaseState.PURCHASING || ea === S.PurchaseState.COMPLETED,
    eR = eI || eh,
    [eg, eM] = (0, x.useSubscriptionInvoicePreview)({
      items: eO,
      renewal: !1,
      preventFetch: eR,
      applyEntitlements: !0,
      paymentSourceId: V.paymentSourceId,
      currency: V.currency,
      trialId: et,
      metadata: er
    }),
    [ex, ev] = (0, x.useSubscriptionInvoicePreview)({
      items: eO,
      renewal: !0,
      preventFetch: eR,
      trialId: et,
      paymentSourceId: V.paymentSourceId,
      currency: V.currency,
      metadata: er
    }),
    [ey, eL] = (0, x.useSubscriptionInvoicePreview)({
      items: [{
        planId: B.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
        quantity: 1
      }],
      renewal: !0,
      preventFetch: !eC,
      trialId: et,
      paymentSourceId: V.paymentSourceId,
      currency: V.currency,
      metadata: er
    }),
    eb = eI && (0, h.shouldShowCustomGiftExperience)(eS, !0, "PremiumSubscriptionReview"),
    ej = null !== (a = null != eM ? eM : ev) && void 0 !== a ? a : eL,
    eG = (0, u.useStateFromStores)([T.default], () => T.default.enabled),
    eD = V.paymentSourceId,
    {
      hasEntitlements: eU,
      entitlements: eB
    } = (0, D.useSubscriptionEntitlements)(eA.id, eI),
    eF = (0, R.isPrepaidPaymentSource)(V.paymentSourceId),
    ek = (0, P.checkNoPaymentTrialEnabled)(et, eD, Z),
    eY = (0, N.inOneStepSubscriptionCheckout)({
      isTrial: eu,
      isGift: eI,
      selectedSkuId: em,
      startedPaymentFlowWithPaymentSources: ep.current
    }),
    [ew, eH] = r.useState(null == eg ? void 0 : eg.subscriptionPeriodEnd);
  r.useEffect(() => {
    null == ew && eH(null == eg ? void 0 : eg.subscriptionPeriodEnd)
  }, [null == eg ? void 0 : eg.subscriptionPeriodEnd, ew]);
  let eW = r.useMemo(() => (0, R.getPremiumPlanOptions)({
      skuId: em,
      isPremium: eE,
      multiMonthPlans: [],
      currentSubscription: ef,
      isGift: eI,
      isEligibleForTrial: eu,
      defaultPlanId: e_,
      defaultToMonthlyPlan: !1
    }), [em, ef, eI, e_, eE, eu]),
    eZ = (0, N.planSwitchLoadingShowSpinner)(eY, eg, eA);
  if (null != ej) {
    let e = ej.message;
    return ej.code === E.ErrorCodes.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (e = Y.default.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY), (0, s.jsx)(o.FormErrorBlock, {
      children: e
    })
  }
  if (eI) W = (0, s.jsx)(G.SubscriptionInvoiceGift, {
    paymentSourceId: V.paymentSourceId,
    plan: eA,
    className: w.invoice,
    isPrepaidPaymentSource: eF,
    isCustomGift: eb
  });
  else if (eu && null != eg) W = (0, s.jsxs)("div", {
    children: [(0, s.jsx)(y.PremiumInvoiceTableDivider, {
      negativeMarginTop: !0
    }), (0, s.jsxs)(y.PremiumInvoiceTable, {
      className: w.invoice,
      children: [(0, s.jsxs)("div", {
        className: w.trialPriceLine,
        children: [(0, s.jsx)(o.Text, {
          variant: "text-md/bold",
          children: Y.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
        }), (0, s.jsx)(o.Text, {
          variant: "text-md/normal",
          children: Y.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
            price: (0, g.formatPrice)(0, eg.currency, {
              maximumFractionDigits: 0
            })
          })
        })]
      }), (0, s.jsx)("div", {
        className: w.afterTrialPriceLine,
        children: (0, s.jsx)(G.PremiumTrialInvoiceTableRow, {
          invoice: eg,
          plan: eA
        })
      })]
    })]
  });
  else {
    if (null == eg || null == ex || eZ) return (0, s.jsx)("div", {
      className: w.spinnerWrapper,
      children: (0, s.jsx)(o.Spinner, {})
    });
    eu && eg.subscriptionPeriodEnd !== ex.subscriptionPeriodEnd && (H = eg.subscriptionPeriodEnd), W = (0, s.jsxs)(y.PremiumInvoiceTable, {
      className: w.invoice,
      children: [(0, s.jsx)(y.PremiumInvoiceTableHeader, {
        children: Y.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
      }), (0, s.jsx)(G.PremiumSubscriptionChangePlanInvoiceRows, {
        invoice: eg,
        newPlan: eA,
        isPrepaidPaymentSource: eF,
        referralTrialOfferId: ei
      }), eF ? null : (0, s.jsx)(G.SubscriptionInvoiceFooter, {
        renewalInvoice: ex,
        isTrial: eu,
        priceOptions: V,
        overrideRenewalDate: H,
        trialFooterMessageOverride: en,
        hideSubscriptionDetails: el
      })]
    })
  }
  let eK = i.CountryCodesSets.EEA_COUNTRIES.has(C.default.ipCountryCodeWithFallback),
    {
      checkboxLabel: eV,
      checkboxClassname: ez,
      checkboxLabelClassname: eX
    } = function(e, t, n) {
      let s = null,
        r = null,
        a = null;
      if (e && null != t) {
        let {
          intervalType: e,
          intervalCount: l
        } = R.default.getIntervalForInvoice(t), i = (0, g.formatRate)((0, g.formatPrice)(t.total, t.currency), e, l), u = null != n ? n : t.subscriptionPeriodEnd;
        s = Y.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
          termsURL: F.MarketingURLs.TERMS,
          paidURL: F.MarketingURLs.PAID_TERMS,
          rate: i,
          renewalDate: u
        }), r = w.trialCheckbox, a = w.trialCheckboxLabel
      }
      return {
        checkboxLabel: s,
        checkboxClassname: r,
        checkboxLabelClassname: a
      }
    }(null != eu && eu, ex, H),
    eJ = Y.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
      planName: eA.name
    });
  return eI && !eb ? eJ = Y.default.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : eI && eb ? eJ = "" : (0, R.isPremiumSubscriptionPlan)(eA.id) && (eJ = R.default.getBillingReviewSubheader(null, eA)), ek ? null : (0, s.jsxs)("div", {
    className: w.stepBody,
    children: [null != es && (0, s.jsxs)("div", {
      className: w.reviewWarningMessageContainer,
      children: [(0, s.jsx)(O.default, {
        color: c.default.unsafe_rawColors.YELLOW_300.css,
        width: 20,
        height: 20
      }), (0, s.jsx)(o.Text, {
        className: w.reviewWarningMessage,
        variant: "text-sm/normal",
        children: es
      })]
    }), eY && (0, s.jsxs)("div", {
      children: [(0, s.jsx)(y.PremiumInvoiceTableDivider, {
        negativeMarginTop: !0,
        negativeMarginBottom: !0
      }), (0, s.jsx)(j.PremiumSwitchPlanSelectBody, {
        planOptions: eW,
        eligibleForMultiMonthPlans: !1,
        referralTrialOfferId: void 0,
        selectedPlanId: Z,
        subscriptionPeriodEnd: ew,
        showTotal: !1,
        discountInvoiceItems: eC ? null == ey ? void 0 : ey.invoiceItems : void 0,
        handleClose: eo
      }), (0, s.jsx)(y.PremiumInvoiceTableDivider, {})]
    }), !eu && (0, s.jsx)(o.FormTitle, {
      tag: o.FormTitleTags.H5,
      children: eJ
    }), eb && null != eP && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(b.default, {
        defaultAnimationState: M.AnimationState.LOOP,
        giftStyle: eP,
        shouldAnimate: !0,
        className: w.giftMainAnimation
      }), (0, s.jsx)(U.SendGiftToUser, {
        giftRecipient: eS
      })]
    }), W, (0, s.jsxs)("div", {
      className: w.paymentSourceWrapper,
      children: [eu ? (0, s.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        className: w.formTitle,
        children: Y.default.Messages.BILLING_STEP_PAYMENT_METHOD
      }) : (0, s.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        children: Y.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }), (0, s.jsx)(m.default, {
        paymentSources: Object.values(K),
        selectedPaymentSourceId: eD,
        prependOption: eU && !eu ? {
          label: Y.default.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
          value: null
        } : null,
        onChange: J,
        onPaymentSourceAdd: q,
        hidePersonalInformation: eG,
        isTrial: eu
      }), eU && null == eD ? (0, s.jsx)("div", {
        className: w.paymentSourceOptionalWarning,
        children: Y.default.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
          months: eB.length
        })
      }) : null, ec ? null : (0, s.jsxs)(d.CurrencyWrapper, {
        currencies: z,
        className: w.currencyWrapper,
        children: [(0, s.jsx)(o.FormTitle, {
          tag: o.FormTitleTags.H5,
          children: Y.default.Messages.PAYMENT_CURRENCY
        }), (0, s.jsx)(d.default, {
          selectedCurrency: V.currency,
          currencies: z,
          onChange: X
        })]
      })]
    }), (0, s.jsx)(L.default, {
      isActive: ee,
      ref: $,
      children: (0, s.jsx)(_.default, {
        onChange: Q,
        forceShow: !0,
        checkboxLabel: eV,
        checkboxClassname: ez,
        checkboxLabelClassname: eX,
        finePrint: null != en ? en : (0, s.jsx)(f.default, {
          hide: eu || ec,
          subscriptionPlan: eA,
          renewalInvoice: ex,
          isGift: eI,
          paymentSourceType: null === (n = K[null != eD ? eD : ""]) || void 0 === n ? void 0 : n.type,
          isEmbeddedIAP: ed,
          basePrice: (0, R.getPrice)(eA.id, !1, eI, V)
        }),
        showPricingLink: eA.currency !== k.CurrencyCodes.USD,
        showWithdrawalWaiver: eK,
        disabled: eh,
        isTrial: eu && null == en,
        isDiscount: ec,
        subscriptionPlan: eA,
        isGift: eI
      })
    })]
  })
}