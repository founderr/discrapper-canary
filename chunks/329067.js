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
  c = a("244526"),
  u = a("881052"),
  d = a("128069"),
  f = a("906732"),
  C = a("176919"),
  p = a("626135"),
  m = a("63063"),
  g = a("937615"),
  E = a("598"),
  h = a("409813"),
  b = a("333867"),
  x = a("74179"),
  S = a("981631"),
  v = a("689938"),
  I = a("834042");
let L = e => {
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
  T = e => {
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
  } = (0, x.default)({
    isGift: !1,
    activeSubscription: null
  });
  return {
    userIsEligible: null !== e && !S.REDIRECTED_PAYMENT_SOURCES.has(e.type)
  }
}

function _(e) {
  let {
    onPurchaseComplete: t,
    onError: a,
    onReviewPurchase: r,
    paymentSource: x,
    loadId: N,
    skuId: _,
    isGift: y = !1,
    baseAnalyticsData: A
  } = e, {
    step: j,
    setStep: O,
    paymentError: k,
    paymentAuthenticationState: P,
    application: R,
    skuPricePreviewsById: B
  } = (0, E.usePaymentContext)(), {
    analyticsLocations: M
  } = (0, f.default)(), [D, w] = s.useState(!1), F = s.useRef(null), H = B[_], U = null != H ? H[x.id] : null, W = null != U ? (0, g.formatPrice)(null == U ? void 0 : U.amount, null == U ? void 0 : U.currency) : null, G = s.useMemo(() => ({
    ...A,
    load_id: N,
    payment_type: S.PurchaseTypeToAnalyticsPaymentType[S.PurchaseTypes.ONE_TIME],
    price: null == U ? void 0 : U.amount,
    currency: null == U ? void 0 : U.currency
  }), [A, U, N]);
  s.useEffect(() => {
    j !== h.Step.REVIEW && O(h.Step.REVIEW)
  }), s.useEffect(() => {
    P === C.PaymentAuthenticationState.ERROR && a(k)
  }, [a, k, P]);
  let V = async () => {
    await p.default.track(S.AnalyticEvents.PAYMENT_FLOW_COMPLETED, G), n()(null != U, "skuPricePreview can't be null"), n()(null != R, "application can't be null");
    try {
      await (0, o.purchaseSKU)(R.id, _, {
        expectedAmount: U.amount,
        expectedCurrency: U.currency,
        isGift: y,
        paymentSource: x,
        loadId: N
      }), w(!1), t()
    } catch (t) {
      let e = t instanceof u.BillingError ? t : new u.BillingError(t);
      e.code !== d.ErrorCodes.CONFIRMATION_REQUIRED && e.code !== d.ErrorCodes.AUTHENTICATION_REQUIRED && a(t)
    }
  }, K = s.useCallback(e => {
    p.default.track(S.AnalyticEvents.PAYMENT_FLOW_STEP, {
      ...G,
      to_step: e
    }), e === h.Step.CONFIRM && (w(!1), t()), O(e)
  }, [G, O, t]);
  return (0, C.usePaymentStepForAuthentication)(j, P, K), (0, l.jsxs)("div", {
    className: I.reviewContainer,
    children: [(0, l.jsx)(i.FormSection, {
      children: (0, l.jsx)(i.FormItem, {
        children: (0, l.jsx)(c.default, {
          paymentSource: x,
          isDefault: !0,
          showSubtext: !1,
          showPaymentSourceIcon: !1,
          showLabels: !1,
          locale: "en-US"
        })
      })
    }), (0, l.jsx)("div", {
      className: I.legalTerms,
      children: (0, l.jsx)("p", {
        children: v.default.Messages.LIGHTNING_CHECKOUT_NON_REFUNDABLE_DISCLAIMER.format({
          paidURL: m.default.getArticleURL(S.HelpdeskArticles.PAID_TERMS)
        })
      })
    }), (0, l.jsx)(L, {
      className: I.buyButton,
      submitting: D,
      submittingStartedLabel: "Payment Processing",
      onClick: async () => {
        w(!0), await V()
      },
      children: null !== W ? v.default.Messages.LIGHTNING_CHECKOUT_PAY_CTA.format({
        price: W
      }) : (0, l.jsx)(i.Spinner, {
        type: i.Spinner.Type.PULSING_ELLIPSIS
      })
    }), !D && (0, l.jsx)(T, {
      className: I.reviewButton,
      onClick: () => {
        r(), (0, b.default)({
          skuId: _,
          analyticsLocations: M,
          returnRef: F
        })
      },
      children: v.default.Messages.LIGHTNING_CHECKOUT_REVIEW_PURCHASE
    })]
  })
}