"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
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
  I = n("635357"),
  p = n("642906"),
  N = n("286350"),
  S = n("102492"),
  P = n("176108"),
  T = n("102985"),
  A = n("160299"),
  C = n("10514"),
  O = n("68238"),
  h = n("659632"),
  M = n("719923"),
  R = n("153160"),
  g = n("210721"),
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
  H = n("193692");

function w(e) {
  var t, n, a;
  let w, W, {
      selectedPlanId: Z,
      paymentSources: K,
      priceOptions: V,
      currencies: z,
      onCurrencyChange: J,
      onPaymentSourceChange: X,
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
      startedPaymentFlowWithPaymentSourcesRef: eI
    } = (0, p.usePaymentContext)(),
    {
      isGift: ep,
      giftRecipient: eN,
      selectedGiftStyle: eS
    } = (0, I.useGiftContext)(),
    eP = (0, v.usePremiumDiscountOffer)(),
    eT = null == eP ? void 0 : null === (t = eP.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => B.SubscriptionPlanInfo[e].skuId === em),
    eA = !ep && null != eP && null != em && eT,
    eC = (0, u.useStateFromStores)([C.default], () => C.default.get(Z));
  l(null != eC, "Missing plan");
  let eO = [{
      planId: eC.id,
      quantity: 1
    }],
    eh = ea === N.PurchaseState.PURCHASING || ea === N.PurchaseState.COMPLETED,
    eM = ep || eh,
    [eR, eg] = (0, x.useSubscriptionInvoicePreview)({
      items: eO,
      renewal: !1,
      preventFetch: eM,
      applyEntitlements: !0,
      paymentSourceId: V.paymentSourceId,
      currency: V.currency,
      trialId: et,
      metadata: er
    }),
    [ex, ev] = (0, x.useSubscriptionInvoicePreview)({
      items: eO,
      renewal: !0,
      preventFetch: eM,
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
      preventFetch: !eA,
      trialId: et,
      paymentSourceId: V.paymentSourceId,
      currency: V.currency,
      metadata: er
    }),
    eb = ep && (0, h.shouldShowCustomGiftExperience)(eN),
    ej = null !== (a = null != eg ? eg : ev) && void 0 !== a ? a : eL,
    eG = (0, u.useStateFromStores)([T.default], () => T.default.enabled),
    eD = V.paymentSourceId,
    {
      hasEntitlements: eU,
      entitlements: eB
    } = (0, D.useSubscriptionEntitlements)(eC.id, ep),
    eF = (0, M.isPrepaidPaymentSource)(V.paymentSourceId),
    ek = (0, S.checkNoPaymentTrialEnabled)(et, eD, Z),
    eY = (0, P.inOneStepSubscriptionCheckout)({
      isTrial: eu,
      isGift: ep,
      selectedSkuId: em,
      startedPaymentFlowWithPaymentSources: eI.current
    }),
    [eH, ew] = r.useState(null == eR ? void 0 : eR.subscriptionPeriodEnd);
  r.useEffect(() => {
    null == eH && ew(null == eR ? void 0 : eR.subscriptionPeriodEnd)
  }, [null == eR ? void 0 : eR.subscriptionPeriodEnd, eH]);
  let eW = r.useMemo(() => (0, M.getPremiumPlanOptions)({
      skuId: em,
      isPremium: eE,
      multiMonthPlans: [],
      currentSubscription: ef,
      isGift: ep,
      isEligibleForTrial: eu,
      defaultPlanId: e_,
      defaultToMonthlyPlan: !1
    }), [em, ef, ep, e_, eE, eu]),
    eZ = (0, P.planSwitchLoadingShowSpinner)(eY, eR, eC);
  if (null != ej) {
    let e = ej.message;
    return ej.code === E.ErrorCodes.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (e = Y.default.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY), (0, s.jsx)(o.FormErrorBlock, {
      children: e
    })
  }
  if (ep) W = (0, s.jsx)(G.SubscriptionInvoiceGift, {
    paymentSourceId: V.paymentSourceId,
    plan: eC,
    className: H.invoice,
    isPrepaidPaymentSource: eF,
    isCustomGift: eb
  });
  else if (eu && null != eR) W = (0, s.jsxs)("div", {
    children: [(0, s.jsx)(y.PremiumInvoiceTableDivider, {
      negativeMarginTop: !0
    }), (0, s.jsxs)(y.PremiumInvoiceTable, {
      className: H.invoice,
      children: [(0, s.jsxs)("div", {
        className: H.trialPriceLine,
        children: [(0, s.jsx)(o.Text, {
          variant: "text-md/bold",
          children: Y.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
        }), (0, s.jsx)(o.Text, {
          variant: "text-md/normal",
          children: Y.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
            price: (0, R.formatPrice)(0, eR.currency, {
              maximumFractionDigits: 0
            })
          })
        })]
      }), (0, s.jsx)("div", {
        className: H.afterTrialPriceLine,
        children: (0, s.jsx)(G.PremiumTrialInvoiceTableRow, {
          invoice: eR,
          plan: eC
        })
      })]
    })]
  });
  else {
    if (null == eR || null == ex || eZ) return (0, s.jsx)("div", {
      className: H.spinnerWrapper,
      children: (0, s.jsx)(o.Spinner, {})
    });
    eu && eR.subscriptionPeriodEnd !== ex.subscriptionPeriodEnd && (w = eR.subscriptionPeriodEnd), W = (0, s.jsxs)(y.PremiumInvoiceTable, {
      className: H.invoice,
      children: [(0, s.jsx)(y.PremiumInvoiceTableHeader, {
        children: Y.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
      }), (0, s.jsx)(G.PremiumSubscriptionChangePlanInvoiceRows, {
        invoice: eR,
        newPlan: eC,
        isPrepaidPaymentSource: eF,
        referralTrialOfferId: ei
      }), eF ? null : (0, s.jsx)(G.SubscriptionInvoiceFooter, {
        renewalInvoice: ex,
        isTrial: eu,
        priceOptions: V,
        overrideRenewalDate: w,
        trialFooterMessageOverride: en,
        hideSubscriptionDetails: el
      })]
    })
  }
  let eK = i.CountryCodesSets.EEA_COUNTRIES.has(A.default.ipCountryCodeWithFallback),
    {
      checkboxLabel: eV,
      checkboxClassname: ez,
      checkboxLabelClassname: eJ
    } = function(e, t, n) {
      let s = null,
        r = null,
        a = null;
      if (e && null != t) {
        let {
          intervalType: e,
          intervalCount: l
        } = M.default.getIntervalForInvoice(t), i = (0, R.formatRate)((0, R.formatPrice)(t.total, t.currency), e, l), u = null != n ? n : t.subscriptionPeriodEnd;
        s = Y.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
          termsURL: F.MarketingURLs.TERMS,
          paidURL: F.MarketingURLs.PAID_TERMS,
          rate: i,
          renewalDate: u
        }), r = H.trialCheckbox, a = H.trialCheckboxLabel
      }
      return {
        checkboxLabel: s,
        checkboxClassname: r,
        checkboxLabelClassname: a
      }
    }(null != eu && eu, ex, w),
    eX = Y.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
      planName: eC.name
    });
  return ep && !eb ? eX = Y.default.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : ep && eb ? eX = "" : (0, M.isPremiumSubscriptionPlan)(eC.id) && (eX = M.default.getBillingReviewSubheader(null, eC)), ek ? null : (0, s.jsxs)("div", {
    className: H.stepBody,
    children: [null != es && (0, s.jsxs)("div", {
      className: H.reviewWarningMessageContainer,
      children: [(0, s.jsx)(O.default, {
        color: c.default.unsafe_rawColors.YELLOW_300.css,
        width: 20,
        height: 20
      }), (0, s.jsx)(o.Text, {
        className: H.reviewWarningMessage,
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
        subscriptionPeriodEnd: eH,
        showTotal: !1,
        discountInvoiceItems: eA ? null == ey ? void 0 : ey.invoiceItems : void 0,
        handleClose: eo
      }), (0, s.jsx)(y.PremiumInvoiceTableDivider, {})]
    }), !eu && (0, s.jsx)(o.FormTitle, {
      tag: o.FormTitleTags.H5,
      children: eX
    }), eb && null != eS && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(b.default, {
        defaultAnimationState: g.AnimationState.LOOP,
        giftStyle: eS,
        shouldAnimate: !0,
        className: H.giftMainAnimation
      }), (0, s.jsx)(U.SendGiftToUser, {
        giftRecipient: eN
      })]
    }), W, (0, s.jsxs)("div", {
      className: H.paymentSourceWrapper,
      children: [eu ? (0, s.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        className: H.formTitle,
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
        onChange: X,
        onPaymentSourceAdd: q,
        hidePersonalInformation: eG,
        isTrial: eu
      }), eU && null == eD ? (0, s.jsx)("div", {
        className: H.paymentSourceOptionalWarning,
        children: Y.default.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
          months: eB.length
        })
      }) : null, ec ? null : (0, s.jsxs)(d.CurrencyWrapper, {
        currencies: z,
        className: H.currencyWrapper,
        children: [(0, s.jsx)(o.FormTitle, {
          tag: o.FormTitleTags.H5,
          children: Y.default.Messages.PAYMENT_CURRENCY
        }), (0, s.jsx)(d.default, {
          selectedCurrency: V.currency,
          currencies: z,
          onChange: J
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
        checkboxLabelClassname: eJ,
        finePrint: null != en ? en : (0, s.jsx)(f.default, {
          hide: eu || ec,
          subscriptionPlan: eC,
          renewalInvoice: ex,
          isGift: ep,
          paymentSourceType: null === (n = K[null != eD ? eD : ""]) || void 0 === n ? void 0 : n.type,
          isEmbeddedIAP: ed,
          basePrice: (0, M.getPrice)(eC.id, !1, ep, V)
        }),
        showPricingLink: eC.currency !== k.CurrencyCodes.USD,
        showWithdrawalWaiver: eK,
        disabled: eh,
        isTrial: eu && null == en,
        isDiscount: ec,
        subscriptionPlan: eC,
        isGift: ep
      })
    })]
  })
}