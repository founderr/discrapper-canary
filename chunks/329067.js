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
  m = a("626135"),
  p = a("63063"),
  g = a("937615"),
  E = a("598"),
  h = a("409813"),
  b = a("333867"),
  x = a("74179"),
  v = a("981631"),
  S = a("689938"),
  I = a("834042");
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
  L = e => {
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
    userIsEligible: null !== e && !v.REDIRECTED_PAYMENT_SOURCES.has(e.type)
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
    step: O,
    setStep: j,
    paymentError: R,
    paymentAuthenticationState: k,
    application: P,
    skuPricePreviewsById: M
  } = (0, E.usePaymentContext)(), {
    analyticsLocations: B
  } = (0, f.default)(), [D, F] = s.useState(!1), H = s.useRef(null), w = M[_], U = null != w ? w[x.id] : null, W = null != U ? (0, g.formatPrice)(null == U ? void 0 : U.amount, null == U ? void 0 : U.currency) : null, V = s.useMemo(() => ({
    ...A,
    load_id: N,
    payment_type: v.PurchaseTypeToAnalyticsPaymentType[v.PurchaseTypes.ONE_TIME],
    price: null == U ? void 0 : U.amount,
    currency: null == U ? void 0 : U.currency
  }), [A, U, N]);
  s.useEffect(() => {
    O !== h.Step.REVIEW && j(h.Step.REVIEW)
  }), s.useEffect(() => {
    k === C.PaymentAuthenticationState.ERROR && a(R)
  }, [a, R, k]);
  let G = async () => {
    await m.default.track(v.AnalyticEvents.PAYMENT_FLOW_COMPLETED, V), n()(null != U, "skuPricePreview can't be null"), n()(null != P, "application can't be null");
    try {
      await (0, o.purchaseSKU)(P.id, _, {
        expectedAmount: U.amount,
        expectedCurrency: U.currency,
        isGift: y,
        paymentSource: x,
        loadId: N
      }), F(!1), t()
    } catch (t) {
      let e = t instanceof u.BillingError ? t : new u.BillingError(t);
      e.code !== d.ErrorCodes.CONFIRMATION_REQUIRED && e.code !== d.ErrorCodes.AUTHENTICATION_REQUIRED && a(t)
    }
  }, K = s.useCallback(e => {
    m.default.track(v.AnalyticEvents.PAYMENT_FLOW_STEP, {
      ...V,
      to_step: e
    }), e === h.Step.CONFIRM && (F(!1), t()), j(e)
  }, [V, j, t]);
  return (0, C.usePaymentStepForAuthentication)(O, k, K), (0, l.jsxs)("div", {
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
        children: S.default.Messages.LIGHTNING_CHECKOUT_NON_REFUNDABLE_DISCLAIMER.format({
          paidURL: p.default.getArticleURL(v.HelpdeskArticles.PAID_TERMS)
        })
      })
    }), (0, l.jsx)(T, {
      className: I.buyButton,
      submitting: D,
      submittingStartedLabel: "Payment Processing",
      onClick: async () => {
        F(!0), await G()
      },
      children: null !== W ? S.default.Messages.LIGHTNING_CHECKOUT_PAY_CTA.format({
        price: W
      }) : (0, l.jsx)(i.Spinner, {
        type: i.Spinner.Type.PULSING_ELLIPSIS
      })
    }), !D && (0, l.jsx)(L, {
      className: I.reviewButton,
      onClick: () => {
        r(), (0, b.default)({
          skuId: _,
          analyticsLocations: B,
          returnRef: H
        })
      },
      children: S.default.Messages.LIGHTNING_CHECKOUT_REVIEW_PURCHASE
    })]
  })
}