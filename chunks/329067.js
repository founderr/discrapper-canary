"use strict";
a.r(t), a.d(t, {
  default: function() {
    return _
  },
  useLightningCheckoutEligibility: function() {
    return N
  }
}), a("47120");
var l = a("735250"),
  s = a("470079"),
  r = a("512722"),
  n = a.n(r),
  i = a("481060"),
  o = a("16084"),
  u = a("244526"),
  c = a("881052"),
  d = a("128069"),
  f = a("906732"),
  C = a("176919"),
  m = a("626135"),
  p = a("63063"),
  E = a("937615"),
  h = a("598"),
  g = a("409813"),
  x = a("333867"),
  v = a("74179"),
  b = a("981631"),
  L = a("689938"),
  S = a("834042");
let T = e => {
    let {
      children: t,
      style: a,
      className: s,
      ...r
    } = e;
    return (0, l.jsx)(i.Button, {
      size: i.ButtonSizes.SMALL,
      fullWidth: !0,
      look: i.Button.Looks.FILLED,
      color: i.ButtonColors.GREEN,
      style: a,
      className: s,
      ...r,
      children: t
    })
  },
  I = e => {
    let {
      children: t,
      className: a,
      ...s
    } = e;
    return (0, l.jsx)(i.Button, {
      size: i.ButtonSizes.SMALL,
      look: i.ButtonLooks.BLANK,
      color: i.ButtonColors.TRANSPARENT,
      className: a,
      fullWidth: !0,
      ...s,
      children: t
    })
  };

function N() {
  let {
    defaultPaymentSource: e
  } = (0, v.default)({
    isGift: !1,
    activeSubscription: null
  });
  return {
    userIsEligible: null !== e && !b.REDIRECTED_PAYMENT_SOURCES.has(e.type)
  }
}

function _(e) {
  let {
    onPurchaseComplete: t,
    onError: a,
    onReviewPurchase: r,
    paymentSource: v,
    loadId: N,
    skuId: _,
    isGift: y = !1,
    baseAnalyticsData: O
  } = e, {
    step: A,
    setStep: j,
    paymentError: k,
    paymentAuthenticationState: R,
    application: P,
    skuPricePreviewsById: B
  } = (0, h.usePaymentContext)(), {
    analyticsLocations: M
  } = (0, f.default)(), [D, F] = s.useState(!1), H = s.useRef(null), w = B[_], U = null != w ? w[v.id] : null, W = null != U ? (0, E.formatPrice)(null == U ? void 0 : U.amount, null == U ? void 0 : U.currency) : null, V = s.useMemo(() => ({
    ...O,
    load_id: N,
    payment_type: b.PurchaseTypeToAnalyticsPaymentType[b.PurchaseTypes.ONE_TIME],
    price: null == U ? void 0 : U.amount,
    currency: null == U ? void 0 : U.currency
  }), [O, U, N]);
  s.useEffect(() => {
    A !== g.Step.REVIEW && j(g.Step.REVIEW)
  }), s.useEffect(() => {
    R === C.PaymentAuthenticationState.ERROR && a(k)
  }, [a, k, R]);
  let G = async () => {
    await m.default.track(b.AnalyticEvents.PAYMENT_FLOW_COMPLETED, V), n()(null != U, "skuPricePreview can't be null"), n()(null != P, "application can't be null");
    try {
      await (0, o.purchaseSKU)(P.id, _, {
        expectedAmount: U.amount,
        expectedCurrency: U.currency,
        isGift: y,
        paymentSource: v,
        loadId: N
      }), F(!1), t()
    } catch (t) {
      let e = t instanceof c.BillingError ? t : new c.BillingError(t);
      e.code !== d.ErrorCodes.CONFIRMATION_REQUIRED && e.code !== d.ErrorCodes.AUTHENTICATION_REQUIRED && a(t)
    }
  }, z = s.useCallback(e => {
    m.default.track(b.AnalyticEvents.PAYMENT_FLOW_STEP, {
      ...V,
      to_step: e
    }), e === g.Step.CONFIRM && (F(!1), t()), j(e)
  }, [V, j, t]);
  return (0, C.usePaymentStepForAuthentication)(A, R, z), (0, l.jsxs)("div", {
    className: S.reviewContainer,
    children: [(0, l.jsx)(i.FormSection, {
      children: (0, l.jsx)(i.FormItem, {
        children: (0, l.jsx)(u.default, {
          paymentSource: v,
          isDefault: !0,
          showSubtext: !1,
          showPaymentSourceIcon: !1,
          showLabels: !1,
          locale: "en-US"
        })
      })
    }), (0, l.jsx)("div", {
      className: S.legalTerms,
      children: (0, l.jsx)("p", {
        children: L.default.Messages.LIGHTNING_CHECKOUT_NON_REFUNDABLE_DISCLAIMER.format({
          paidURL: p.default.getArticleURL(b.HelpdeskArticles.PAID_TERMS)
        })
      })
    }), (0, l.jsx)(T, {
      className: S.buyButton,
      submitting: D,
      submittingStartedLabel: "Payment Processing",
      onClick: async () => {
        F(!0), await G()
      },
      children: null !== W ? L.default.Messages.LIGHTNING_CHECKOUT_PAY_CTA.format({
        price: W
      }) : (0, l.jsx)(i.Spinner, {
        type: i.Spinner.Type.PULSING_ELLIPSIS
      })
    }), !D && (0, l.jsx)(I, {
      className: S.reviewButton,
      onClick: () => {
        r(), (0, x.default)({
          skuId: _,
          analyticsLocations: M,
          returnRef: H
        })
      },
      children: L.default.Messages.LIGHTNING_CHECKOUT_REVIEW_PURCHASE
    })]
  })
}