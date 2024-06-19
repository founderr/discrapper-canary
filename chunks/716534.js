s.d(n, {
  Z: function() {
    return W
  }
}), s(47120);
var l = s(735250),
  t = s(470079),
  i = s(512722),
  r = s.n(i),
  a = s(742280),
  c = s(442837),
  o = s(692547),
  u = s(481060),
  d = s(190947),
  _ = s(224550),
  m = s(275850),
  I = s(672971),
  E = s(128069),
  p = s(987209),
  N = s(598),
  T = s(45572),
  S = s(919778),
  x = s(614223),
  h = s(246946),
  P = s(351402),
  v = s(509545),
  A = s(669079),
  f = s(74538),
  M = s(937615),
  g = s(479446),
  C = s(374649),
  L = s(424082),
  R = s(104494),
  O = s(639119),
  j = s(653798),
  y = s(314182),
  Z = s(981632),
  b = s(314404),
  D = s(42818),
  G = s(459965),
  U = s(251660),
  w = s(474936),
  F = s(981631),
  B = s(231338),
  H = s(689938),
  k = s(473571);

function W(e) {
  var n, s, i, W;
  let Y, K, V, {
      selectedPlanId: z,
      paymentSources: X,
      priceOptions: J,
      currencies: q,
      onCurrencyChange: Q,
      onPaymentSourceChange: $,
      handlePaymentSourceAdd: ee,
      setHasAcceptedTerms: en,
      legalTermsNodeRef: es,
      hasLegalTermsFlash: el,
      trialId: et,
      trialFooterMessageOverride: ei,
      reviewWarningMessage: er,
      metadata: ea,
      purchaseState: ec,
      hideSubscriptionDetails: eo,
      referralTrialOfferId: eu,
      isTrial: ed = !1,
      isDiscount: e_ = !1,
      handleClose: em
    } = e,
    {
      isEmbeddedIAP: eI,
      activeSubscription: eE,
      selectedSkuId: ep,
      defaultPlanId: eN,
      isPremium: eT,
      startedPaymentFlowWithPaymentSourcesRef: eS,
      setInvoicePreview: ex,
      contextMetadata: eh
    } = (0, N.usePaymentContext)(),
    {
      isGift: eP,
      giftRecipient: ev,
      selectedGiftStyle: eA
    } = (0, p.wD)(),
    ef = (0, R.Ng)(),
    eM = (0, O.N)(eu);
  (0, L.Uh)("PremiumSubscriptionReview", null == eM);
  let eg = null == ef ? void 0 : null === (n = ef.discount) || void 0 === n ? void 0 : n.plan_ids.some(e => w.GP[e].skuId === ep),
    eC = !eP && null != ef && null != ep && eg,
    eL = (0, c.e7)([v.Z], () => v.Z.get(z));
  r()(null != eL, "Missing plan");
  let eR = [{
      planId: eL.id,
      quantity: 1
    }],
    eO = ec === T.A.PURCHASING || ec === T.A.COMPLETED,
    ej = eP || eO,
    [ey, eZ] = (0, C.ED)({
      items: eR,
      renewal: !1,
      preventFetch: ej,
      applyEntitlements: !0,
      paymentSourceId: J.paymentSourceId,
      currency: J.currency,
      trialId: et,
      metadata: ea
    }),
    [eb, eD] = (0, C.ED)({
      items: eR,
      renewal: !0,
      preventFetch: ej,
      trialId: et,
      paymentSourceId: J.paymentSourceId,
      currency: J.currency,
      metadata: ea
    }),
    [eG, eU] = (0, C.ED)({
      items: [{
        planId: w.Xh.PREMIUM_MONTH_TIER_2,
        quantity: 1
      }],
      renewal: !0,
      preventFetch: !eC,
      trialId: et,
      paymentSourceId: J.paymentSourceId,
      currency: J.currency,
      metadata: ea
    }),
    [ew, eF] = (0, C.o5)({
      paymentSourceId: J.paymentSourceId,
      skuId: ep,
      subscriptionPlanId: z,
      currency: J.currency,
      preventFetch: !eP || eO,
      loadId: eh.loadId
    });
  t.useEffect(() => {
    ex(ew)
  }, [ex, ew]);
  let eB = eP && (0, A.pO)(ev),
    eH = null !== (W = null !== (i = null != eZ ? eZ : eD) && void 0 !== i ? i : eU) && void 0 !== W ? W : eF,
    ek = (0, c.e7)([h.Z], () => h.Z.enabled),
    eW = J.paymentSourceId,
    {
      hasEntitlements: eY,
      entitlements: eK
    } = (0, G.H)(eL.id, eP),
    eV = (0, f.Ap)(J.paymentSourceId),
    ez = (0, S.sE)(et, eW, z),
    eX = (0, x.Kp)({
      isTrial: ed,
      isGift: eP,
      selectedSkuId: ep,
      startedPaymentFlowWithPaymentSources: eS.current
    }),
    [eJ, eq] = t.useState(null == ey ? void 0 : ey.subscriptionPeriodEnd);
  t.useEffect(() => {
    null == eJ && eq(null == ey ? void 0 : ey.subscriptionPeriodEnd)
  }, [null == ey ? void 0 : ey.subscriptionPeriodEnd, eJ]);
  let eQ = t.useMemo(() => (0, f.V7)({
      skuId: ep,
      isPremium: eT,
      multiMonthPlans: [],
      currentSubscription: eE,
      isGift: eP,
      isEligibleForTrial: ed,
      defaultPlanId: eN,
      defaultToMonthlyPlan: !1
    }), [ep, eE, eP, eN, eT, ed]),
    e$ = (0, x.$g)(eX, ey, eL);
  if (null != eH) {
    let e = eH.message;
    eH.code === E.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (e = H.Z.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY), K = (0, l.jsx)(u.FormErrorBlock, {
      children: e
    })
  } else if (eP && null != ew) V = (0, l.jsx)(D.e9, {
    plan: eL,
    className: k.invoice,
    isPrepaidPaymentSource: eV,
    isCustomGift: eB,
    invoicePreview: ew
  });
  else if (ed && null != ey) V = (0, l.jsxs)("div", {
    children: [(0, l.jsx)(j.KU, {
      negativeMarginTop: !0
    }), (0, l.jsxs)(j.PO, {
      className: k.invoice,
      children: [(0, l.jsxs)("div", {
        className: k.trialPriceLine,
        children: [(0, l.jsx)(u.Text, {
          variant: "text-md/bold",
          children: H.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
        }), (0, l.jsx)(u.Text, {
          variant: "text-md/normal",
          children: H.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
            price: (0, M.T4)(0, ey.currency, {
              maximumFractionDigits: 0
            })
          })
        })]
      }), (0, l.jsx)("div", {
        className: k.afterTrialPriceLine,
        children: (0, l.jsx)(D.yT, {
          invoice: ey,
          plan: eL
        })
      })]
    })]
  });
  else {
    if (null == ey || null == eb || e$) return (0, l.jsx)("div", {
      className: k.spinnerWrapper,
      children: (0, l.jsx)(u.Spinner, {})
    });
    ed && ey.subscriptionPeriodEnd !== eb.subscriptionPeriodEnd && (Y = ey.subscriptionPeriodEnd), V = (0, l.jsxs)(j.PO, {
      className: k.invoice,
      children: [(0, l.jsx)(j.q9, {
        children: H.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
      }), (0, l.jsx)(D.Lu, {
        invoice: ey,
        newPlan: eL,
        isPrepaidPaymentSource: eV,
        referralTrialOfferId: eu
      }), eV ? null : (0, l.jsx)(D.nd, {
        renewalInvoice: eb,
        isTrial: ed,
        priceOptions: J,
        overrideRenewalDate: Y,
        trialFooterMessageOverride: ei,
        hideSubscriptionDetails: eo
      })]
    })
  }
  let e0 = a.M.EEA_COUNTRIES.has(P.Z.ipCountryCodeWithFallback),
    {
      checkboxLabel: e1,
      checkboxClassname: e4,
      checkboxLabelClassname: e7
    } = function(e, n, s) {
      let l = null,
        t = null,
        i = null;
      if (e && null != n) {
        let {
          intervalType: e,
          intervalCount: r
        } = f.ZP.getIntervalForInvoice(n), a = (0, M.og)((0, M.T4)(n.total, n.currency), e, r), c = null != s ? s : n.subscriptionPeriodEnd;
        l = H.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
          termsURL: F.EYA.TERMS,
          paidURL: F.EYA.PAID_TERMS,
          rate: a,
          renewalDate: c
        }), t = k.trialCheckbox, i = k.trialCheckboxLabel
      }
      return {
        checkboxLabel: l,
        checkboxClassname: t,
        checkboxLabelClassname: i
      }
    }(null != ed && ed, eb, Y),
    e2 = H.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
      planName: eL.name
    });
  return eP && !eB ? e2 = H.Z.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : eP && eB ? e2 = "" : (0, f.PV)(eL.id) && (e2 = f.ZP.getBillingReviewSubheader(null, eL)), ez ? null : (0, l.jsxs)("div", {
    className: k.stepBody,
    children: [null != er && (0, l.jsxs)("div", {
      className: k.reviewWarningMessageContainer,
      children: [(0, l.jsx)(u.CircleInformationIcon, {
        size: "custom",
        color: o.Z.unsafe_rawColors.YELLOW_300.css,
        width: 20,
        height: 20
      }), (0, l.jsx)(u.Text, {
        className: k.reviewWarningMessage,
        variant: "text-sm/normal",
        children: er
      })]
    }), K, eX && (0, l.jsxs)("div", {
      children: [(0, l.jsx)(j.KU, {
        negativeMarginTop: !0,
        negativeMarginBottom: !0
      }), (0, l.jsx)(b.O, {
        planOptions: eQ,
        eligibleForMultiMonthPlans: !1,
        referralTrialOfferId: void 0,
        selectedPlanId: z,
        subscriptionPeriodEnd: eJ,
        showTotal: !1,
        discountInvoiceItems: eC ? null == eG ? void 0 : eG.invoiceItems : void 0,
        handleClose: em
      }), (0, l.jsx)(j.KU, {})]
    }), !ed && (0, l.jsx)(u.FormTitle, {
      tag: u.FormTitleTags.H5,
      children: e2
    }), eB && null != eA && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(Z.Z, {
        defaultAnimationState: g.S.LOOP,
        giftStyle: eA,
        shouldAnimate: !0,
        className: k.__invalid_giftMainAnimation
      }), (0, l.jsx)(U.s, {
        giftRecipient: ev
      })]
    }), V, (0, l.jsxs)("div", {
      className: k.paymentSourceWrapper,
      children: [ed ? (0, l.jsx)(u.FormTitle, {
        tag: u.FormTitleTags.H5,
        className: k.formTitle,
        children: H.Z.Messages.BILLING_STEP_PAYMENT_METHOD
      }) : (0, l.jsx)(u.FormTitle, {
        tag: u.FormTitleTags.H5,
        children: H.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }), (0, l.jsx)(m.Z, {
        paymentSources: Object.values(X),
        selectedPaymentSourceId: eW,
        prependOption: eY && !ed ? {
          label: H.Z.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
          value: null
        } : null,
        onChange: $,
        onPaymentSourceAdd: ee,
        hidePersonalInformation: ek,
        isTrial: ed
      }), eY && null == eW ? (0, l.jsx)("div", {
        className: k.paymentSourceOptionalWarning,
        children: H.Z.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
          months: eK.length
        })
      }) : null, e_ ? null : (0, l.jsxs)(d.b, {
        currencies: q,
        className: k.currencyWrapper,
        children: [(0, l.jsx)(u.FormTitle, {
          tag: u.FormTitleTags.H5,
          children: H.Z.Messages.PAYMENT_CURRENCY
        }), (0, l.jsx)(d.Z, {
          selectedCurrency: J.currency,
          currencies: q,
          onChange: Q
        })]
      })]
    }), (0, l.jsx)(y.Z, {
      isActive: el,
      ref: es,
      children: (0, l.jsx)(I.Z, {
        onChange: en,
        forceShow: !0,
        checkboxLabel: e1,
        checkboxClassname: e4,
        checkboxLabelClassname: e7,
        finePrint: null != ei ? ei : (0, l.jsx)(_.Z, {
          hide: ed || e_,
          subscriptionPlan: eL,
          renewalInvoice: eb,
          isGift: eP,
          paymentSourceType: null === (s = X[null != eW ? eW : ""]) || void 0 === s ? void 0 : s.type,
          isEmbeddedIAP: eI,
          basePrice: (0, f.aS)(eL.id, !1, eP, J)
        }),
        showPricingLink: eL.currency !== B.pK.USD,
        showWithdrawalWaiver: e0,
        disabled: eO,
        isTrial: ed && null == ei,
        isDiscount: e_,
        subscriptionPlan: eL,
        isGift: eP
      })
    })]
  })
}