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
  E = a("63063"),
  p = a("937615"),
  h = a("598"),
  g = a("409813"),
  x = a("333867"),
  T = a("74179"),
  L = a("981631"),
  v = a("689938"),
  b = a("834042");
let S = e => {
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
  } = (0, T.default)({
    isGift: !1,
    activeSubscription: null
  });
  return {
    userIsEligible: null !== e && !L.REDIRECTED_PAYMENT_SOURCES.has(e.type)
  }
}

function _(e) {
  let {
    onPurchaseComplete: t,
    onError: a,
    onReviewPurchase: r,
    paymentSource: T,
    loadId: N,
    skuId: _,
    isGift: O = !1,
    baseAnalyticsData: y
  } = e, {
    step: A,
    setStep: R,
    paymentError: k,
    paymentAuthenticationState: j,
    application: P,
    skuPricePreviewsById: B
  } = (0, h.usePaymentContext)(), {
    analyticsLocations: M
  } = (0, f.default)(), [D, F] = s.useState(!1), w = s.useRef(null), H = B[_], U = null != H ? H[T.id] : null, W = null != U ? (0, p.formatPrice)(null == U ? void 0 : U.amount, null == U ? void 0 : U.currency) : null, G = s.useMemo(() => ({
    ...y,
    load_id: N,
    payment_type: L.PurchaseTypeToAnalyticsPaymentType[L.PurchaseTypes.ONE_TIME],
    price: null == U ? void 0 : U.amount,
    currency: null == U ? void 0 : U.currency
  }), [y, U, N]);
  s.useEffect(() => {
    A !== g.Step.REVIEW && R(g.Step.REVIEW)
  }), s.useEffect(() => {
    j === C.PaymentAuthenticationState.ERROR && a(k)
  }, [a, k, j]);
  let V = async () => {
    await m.default.track(L.AnalyticEvents.PAYMENT_FLOW_COMPLETED, G), n()(null != U, "skuPricePreview can't be null"), n()(null != P, "application can't be null");
    try {
      await (0, o.purchaseSKU)(P.id, _, {
        expectedAmount: U.amount,
        expectedCurrency: U.currency,
        isGift: O,
        paymentSource: T,
        loadId: N
      }), F(!1), t()
    } catch (t) {
      let e = t instanceof c.BillingError ? t : new c.BillingError(t);
      e.code !== d.ErrorCodes.CONFIRMATION_REQUIRED && e.code !== d.ErrorCodes.AUTHENTICATION_REQUIRED && a(t)
    }
  }, z = s.useCallback(e => {
    m.default.track(L.AnalyticEvents.PAYMENT_FLOW_STEP, {
      ...G,
      to_step: e
    }), e === g.Step.CONFIRM && (F(!1), t()), R(e)
  }, [G, R, t]);
  return (0, C.usePaymentStepForAuthentication)(A, j, z), (0, l.jsxs)("div", {
    className: b.reviewContainer,
    children: [(0, l.jsx)(i.FormSection, {
      children: (0, l.jsx)(i.FormItem, {
        children: (0, l.jsx)(u.default, {
          paymentSource: T,
          isDefault: !0,
          showSubtext: !1,
          showPaymentSourceIcon: !1,
          showDefaultLabel: !1,
          locale: "en-US"
        })
      })
    }), (0, l.jsx)("div", {
      className: b.legalTerms,
      children: (0, l.jsx)("p", {
        children: v.default.Messages.LIGHTNING_CHECKOUT_NON_REFUNDABLE_DISCLAIMER.format({
          paidURL: E.default.getArticleURL(L.HelpdeskArticles.PAID_TERMS)
        })
      })
    }), (0, l.jsx)(S, {
      className: b.buyButton,
      submitting: D,
      submittingStartedLabel: "Payment Processing",
      onClick: async () => {
        F(!0), await V()
      },
      children: null !== W ? "Pay " + W : (0, l.jsx)(i.Spinner, {
        type: i.Spinner.Type.PULSING_ELLIPSIS
      })
    }), !D && (0, l.jsx)(I, {
      className: b.reviewButton,
      onClick: () => {
        r(), (0, x.default)({
          skuId: _,
          analyticsLocations: M,
          returnRef: w
        })
      },
      children: v.default.Messages.LIGHTNING_CHECKOUT_REVIEW_PURCHASE
    })]
  })
}