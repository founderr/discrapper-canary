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
  c = l("244526"),
  u = l("881052"),
  d = l("128069"),
  f = l("906732"),
  C = l("176919"),
  m = l("626135"),
  p = l("63063"),
  g = l("937615"),
  E = l("598"),
  h = l("409813"),
  b = l("333867"),
  x = l("74179"),
  v = l("981631"),
  S = l("689938"),
  I = l("834042");
let L = e => {
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
  T = e => {
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
    userIsEligible: null !== e && !v.REDIRECTED_PAYMENT_SOURCES.has(e.type)
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
    isGift: y = !1,
    baseAnalyticsData: A
  } = e, {
    step: j,
    setStep: O,
    paymentError: k,
    paymentAuthenticationState: R,
    application: P,
    skuPricePreviewsById: B
  } = (0, E.usePaymentContext)(), {
    analyticsLocations: M
  } = (0, f.default)(), [D, F] = s.useState(!1), H = s.useRef(null), w = B[_], U = null != w ? w[x.id] : null, W = null != U ? (0, g.formatPrice)(null == U ? void 0 : U.amount, null == U ? void 0 : U.currency) : null, G = s.useMemo(() => ({
    ...A,
    load_id: N,
    payment_type: v.PurchaseTypeToAnalyticsPaymentType[v.PurchaseTypes.ONE_TIME],
    price: null == U ? void 0 : U.amount,
    currency: null == U ? void 0 : U.currency
  }), [A, U, N]);
  s.useEffect(() => {
    j !== h.Step.REVIEW && O(h.Step.REVIEW)
  }), s.useEffect(() => {
    R === C.PaymentAuthenticationState.ERROR && l(k)
  }, [l, k, R]);
  let V = async () => {
    await m.default.track(v.AnalyticEvents.PAYMENT_FLOW_COMPLETED, G), n()(null != U, "skuPricePreview can't be null"), n()(null != P, "application can't be null");
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
      e.code !== d.ErrorCodes.CONFIRMATION_REQUIRED && e.code !== d.ErrorCodes.AUTHENTICATION_REQUIRED && l(t)
    }
  }, K = s.useCallback(e => {
    m.default.track(v.AnalyticEvents.PAYMENT_FLOW_STEP, {
      ...G,
      to_step: e
    }), e === h.Step.CONFIRM && (F(!1), t()), O(e)
  }, [G, O, t]);
  return (0, C.usePaymentStepForAuthentication)(j, R, K), (0, a.jsxs)("div", {
    className: I.reviewContainer,
    children: [(0, a.jsx)(i.FormSection, {
      children: (0, a.jsx)(i.FormItem, {
        children: (0, a.jsx)(c.default, {
          paymentSource: x,
          isDefault: !0,
          showSubtext: !1,
          showPaymentSourceIcon: !1,
          showLabels: !1,
          locale: "en-US"
        })
      })
    }), (0, a.jsx)("div", {
      className: I.legalTerms,
      children: (0, a.jsx)("p", {
        children: S.default.Messages.LIGHTNING_CHECKOUT_NON_REFUNDABLE_DISCLAIMER.format({
          paidURL: p.default.getArticleURL(v.HelpdeskArticles.PAID_TERMS)
        })
      })
    }), (0, a.jsx)(L, {
      className: I.buyButton,
      submitting: D,
      submittingStartedLabel: "Payment Processing",
      onClick: async () => {
        F(!0), await V()
      },
      children: null !== W ? S.default.Messages.LIGHTNING_CHECKOUT_PAY_CTA.format({
        price: W
      }) : (0, a.jsx)(i.Spinner, {
        type: i.Spinner.Type.PULSING_ELLIPSIS
      })
    }), !D && (0, a.jsx)(T, {
      className: I.reviewButton,
      onClick: () => {
        r(), (0, b.default)({
          skuId: _,
          analyticsLocations: M,
          returnRef: H
        })
      },
      children: S.default.Messages.LIGHTNING_CHECKOUT_REVIEW_PURCHASE
    })]
  })
}