"use strict";
a.r(t), a.d(t, {
  default: function() {
    return L
  },
  useLightningCheckoutEligibility: function() {
    return I
  }
}), a("47120");
var s = a("735250"),
  r = a("470079"),
  n = a("512722"),
  l = a.n(n),
  o = a("481060"),
  i = a("16084"),
  c = a("244526"),
  u = a("881052"),
  d = a("128069"),
  f = a("906732"),
  C = a("176919"),
  p = a("626135"),
  m = a("63063"),
  g = a("937615"),
  E = a("598"),
  b = a("409813"),
  h = a("333867"),
  S = a("74179"),
  T = a("981631"),
  v = a("689938"),
  y = a("834042");
let x = e => {
    let {
      children: t,
      style: a,
      className: r,
      ...n
    } = e;
    return (0, s.jsx)(o.Button, {
      size: o.ButtonSizes.SMALL,
      fullWidth: !0,
      look: o.Button.Looks.FILLED,
      color: o.ButtonColors.GREEN,
      style: a,
      className: r,
      ...n,
      children: t
    })
  },
  _ = e => {
    let {
      children: t,
      className: a,
      ...r
    } = e;
    return (0, s.jsx)(o.Button, {
      size: o.ButtonSizes.SMALL,
      look: o.ButtonLooks.BLANK,
      color: o.ButtonColors.TRANSPARENT,
      className: a,
      fullWidth: !0,
      ...r,
      children: t
    })
  };

function I() {
  let {
    defaultPaymentSource: e
  } = (0, S.default)({
    isGift: !1,
    activeSubscription: null
  });
  return {
    userIsEligible: null !== e && !T.REDIRECTED_PAYMENT_SOURCES.has(e.type)
  }
}

function L(e) {
  let {
    onPurchaseComplete: t,
    onError: a,
    onReviewPurchase: n,
    paymentSource: S,
    loadId: I,
    skuId: L,
    isGift: A = !1,
    baseAnalyticsData: N
  } = e, {
    step: P,
    setStep: R,
    paymentError: O,
    paymentAuthenticationState: k,
    application: M,
    skuPricePreviewsById: j
  } = (0, E.usePaymentContext)(), {
    analyticsLocations: B
  } = (0, f.default)(), [D, F] = r.useState(!1), w = r.useRef(null), H = j[L], U = null != H ? H[S.id] : null, G = null != U ? (0, g.formatPrice)(null == U ? void 0 : U.amount, null == U ? void 0 : U.currency) : null, W = r.useMemo(() => ({
    ...N,
    load_id: I,
    payment_type: T.PurchaseTypeToAnalyticsPaymentType[T.PurchaseTypes.ONE_TIME],
    price: null == U ? void 0 : U.amount,
    currency: null == U ? void 0 : U.currency
  }), [N, U, I]);
  r.useEffect(() => {
    P !== b.Step.REVIEW && R(b.Step.REVIEW)
  }), r.useEffect(() => {
    k === C.PaymentAuthenticationState.ERROR && a(O)
  }, [a, O, k]);
  let Y = async () => {
    await p.default.track(T.AnalyticEvents.PAYMENT_FLOW_COMPLETED, W), l()(null != U, "skuPricePreview can't be null"), l()(null != M, "application can't be null");
    try {
      await (0, i.purchaseSKU)(M.id, L, {
        expectedAmount: U.amount,
        expectedCurrency: U.currency,
        isGift: A,
        paymentSource: S,
        loadId: I
      }), F(!1), t()
    } catch (t) {
      let e = t instanceof u.BillingError ? t : new u.BillingError(t);
      e.code !== d.ErrorCodes.CONFIRMATION_REQUIRED && e.code !== d.ErrorCodes.AUTHENTICATION_REQUIRED && a(t)
    }
  }, V = r.useCallback(e => {
    p.default.track(T.AnalyticEvents.PAYMENT_FLOW_STEP, {
      ...W,
      to_step: e
    }), e === b.Step.CONFIRM && (F(!1), t()), R(e)
  }, [W, R, t]);
  return (0, C.usePaymentStepForAuthentication)(P, k, V), (0, s.jsxs)("div", {
    className: y.reviewContainer,
    children: [(0, s.jsx)(o.FormSection, {
      children: (0, s.jsx)(o.FormItem, {
        children: (0, s.jsx)(c.default, {
          paymentSource: S,
          isDefault: !0,
          showSubtext: !1,
          showPaymentSourceIcon: !1,
          showLabels: !1,
          locale: "en-US"
        })
      })
    }), (0, s.jsx)("div", {
      className: y.legalTerms,
      children: (0, s.jsx)("p", {
        children: v.default.Messages.LIGHTNING_CHECKOUT_NON_REFUNDABLE_DISCLAIMER.format({
          paidURL: m.default.getArticleURL(T.HelpdeskArticles.PAID_TERMS)
        })
      })
    }), (0, s.jsx)(x, {
      className: y.buyButton,
      submitting: D,
      submittingStartedLabel: "Payment Processing",
      onClick: async () => {
        F(!0), await Y()
      },
      children: null !== G ? v.default.Messages.LIGHTNING_CHECKOUT_PAY_CTA.format({
        price: G
      }) : (0, s.jsx)(o.Spinner, {
        type: o.Spinner.Type.PULSING_ELLIPSIS
      })
    }), !D && (0, s.jsx)(_, {
      className: y.reviewButton,
      onClick: () => {
        n(), (0, h.default)({
          skuId: L,
          analyticsLocations: B,
          returnRef: w
        })
      },
      children: v.default.Messages.LIGHTNING_CHECKOUT_REVIEW_PURCHASE
    })]
  })
}