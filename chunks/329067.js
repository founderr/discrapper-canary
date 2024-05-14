"use strict";
l.r(t), l.d(t, {
  default: function() {
    return _
  },
  useLightningCheckoutEligibility: function() {
    return N
  }
}), l("47120");
var a = l("735250"),
  s = l("470079"),
  r = l("512722"),
  n = l.n(r),
  i = l("481060"),
  o = l("16084"),
  u = l("244526"),
  c = l("881052"),
  d = l("128069"),
  f = l("906732"),
  C = l("176919"),
  m = l("626135"),
  p = l("63063"),
  E = l("937615"),
  g = l("598"),
  h = l("409813"),
  b = l("333867"),
  x = l("74179"),
  T = l("981631"),
  L = l("689938"),
  v = l("834042");
let S = e => {
    let {
      children: t,
      style: l,
      className: s,
      ...r
    } = e;
    return (0, a.jsx)(i.Button, {
      size: i.ButtonSizes.SMALL,
      fullWidth: !0,
      look: i.Button.Looks.FILLED,
      color: i.ButtonColors.GREEN,
      style: l,
      className: s,
      ...r,
      children: t
    })
  },
  I = e => {
    let {
      children: t,
      className: l,
      ...s
    } = e;
    return (0, a.jsx)(i.Button, {
      size: i.ButtonSizes.SMALL,
      look: i.ButtonLooks.BLANK,
      color: i.ButtonColors.TRANSPARENT,
      className: l,
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
    userIsEligible: null !== e && !T.REDIRECTED_PAYMENT_SOURCES.has(e.type)
  }
}

function _(e) {
  let {
    onPurchaseComplete: t,
    onError: l,
    onReviewPurchase: r,
    paymentSource: x,
    loadId: N,
    skuId: _,
    isGift: O = !1,
    baseAnalyticsData: y
  } = e, {
    step: A,
    setStep: k,
    paymentError: R,
    paymentAuthenticationState: j,
    application: P,
    skuPricePreviewsById: B
  } = (0, g.usePaymentContext)(), {
    analyticsLocations: M
  } = (0, f.default)(), [D, F] = s.useState(!1), w = s.useRef(null), H = B[_], U = null != H ? H[x.id] : null, W = null != U ? (0, E.formatPrice)(null == U ? void 0 : U.amount, null == U ? void 0 : U.currency) : null, G = s.useMemo(() => ({
    ...y,
    load_id: N,
    payment_type: T.PurchaseTypeToAnalyticsPaymentType[T.PurchaseTypes.ONE_TIME],
    price: null == U ? void 0 : U.amount,
    currency: null == U ? void 0 : U.currency
  }), [y, U, N]);
  s.useEffect(() => {
    A !== h.Step.REVIEW && k(h.Step.REVIEW)
  }), s.useEffect(() => {
    j === C.PaymentAuthenticationState.ERROR && l(R)
  }, [l, R, j]);
  let V = async () => {
    await m.default.track(T.AnalyticEvents.PAYMENT_FLOW_COMPLETED, G), n()(null != U, "skuPricePreview can't be null"), n()(null != P, "application can't be null");
    try {
      await (0, o.purchaseSKU)(P.id, _, {
        expectedAmount: U.amount,
        expectedCurrency: U.currency,
        isGift: O,
        paymentSource: x,
        loadId: N
      }), F(!1), t()
    } catch (t) {
      let e = t instanceof c.BillingError ? t : new c.BillingError(t);
      e.code !== d.ErrorCodes.CONFIRMATION_REQUIRED && e.code !== d.ErrorCodes.AUTHENTICATION_REQUIRED && l(t)
    }
  }, z = s.useCallback(e => {
    m.default.track(T.AnalyticEvents.PAYMENT_FLOW_STEP, {
      ...G,
      to_step: e
    }), e === h.Step.CONFIRM && (F(!1), t()), k(e)
  }, [G, k, t]);
  return (0, C.usePaymentStepForAuthentication)(A, j, z), (0, a.jsxs)("div", {
    className: v.reviewContainer,
    children: [(0, a.jsx)(i.FormSection, {
      children: (0, a.jsx)(i.FormItem, {
        children: (0, a.jsx)(u.default, {
          paymentSource: x,
          isDefault: !0,
          showSubtext: !1,
          showPaymentSourceIcon: !1,
          showDefaultLabel: !1,
          locale: "en-US"
        })
      })
    }), (0, a.jsx)("div", {
      className: v.legalTerms,
      children: (0, a.jsx)("p", {
        children: L.default.Messages.LIGHTNING_CHECKOUT_NON_REFUNDABLE_DISCLAIMER.format({
          paidURL: p.default.getArticleURL(T.HelpdeskArticles.PAID_TERMS)
        })
      })
    }), (0, a.jsx)(S, {
      className: v.buyButton,
      submitting: D,
      submittingStartedLabel: "Payment Processing",
      onClick: async () => {
        F(!0), await V()
      },
      children: null !== W ? "Pay " + W : (0, a.jsx)(i.Spinner, {
        type: i.Spinner.Type.PULSING_ELLIPSIS
      })
    }), !D && (0, a.jsx)(I, {
      className: v.reviewButton,
      onClick: () => {
        r(), (0, b.default)({
          skuId: _,
          analyticsLocations: M,
          returnRef: w
        })
      },
      children: L.default.Messages.LIGHTNING_CHECKOUT_REVIEW_PURCHASE
    })]
  })
}