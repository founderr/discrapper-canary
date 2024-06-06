"use strict";
s.r(t), s.d(t, {
  default: function() {
    return v
  },
  useLightningCheckoutEligibility: function() {
    return b
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("512722"),
  r = s.n(n),
  i = s("481060"),
  o = s("16084"),
  u = s("244526"),
  c = s("881052"),
  d = s("128069"),
  f = s("906732"),
  C = s("176919"),
  E = s("626135"),
  p = s("63063"),
  m = s("937615"),
  g = s("598"),
  S = s("409813"),
  h = s("333867"),
  I = s("74179"),
  T = s("981631"),
  x = s("689938"),
  _ = s("834042");
let N = e => {
    let {
      children: t,
      style: s,
      className: l,
      ...n
    } = e;
    return (0, a.jsx)(i.Button, {
      size: i.ButtonSizes.SMALL,
      fullWidth: !0,
      look: i.Button.Looks.FILLED,
      color: i.ButtonColors.GREEN,
      style: s,
      className: l,
      ...n,
      children: t
    })
  },
  L = e => {
    let {
      children: t,
      className: s,
      ...l
    } = e;
    return (0, a.jsx)(i.Button, {
      size: i.ButtonSizes.SMALL,
      look: i.ButtonLooks.BLANK,
      color: i.ButtonColors.TRANSPARENT,
      className: s,
      fullWidth: !0,
      ...l,
      children: t
    })
  };

function b() {
  let {
    defaultPaymentSource: e
  } = (0, I.default)({
    isGift: !1,
    activeSubscription: null
  });
  return {
    userIsEligible: null !== e && !T.REDIRECTED_PAYMENT_SOURCES.has(e.type)
  }
}

function v(e) {
  let {
    onPurchaseComplete: t,
    onError: s,
    onReviewPurchase: n,
    paymentSource: I,
    loadId: b,
    skuId: v,
    isGift: R = !1,
    baseAnalyticsData: A
  } = e, {
    step: P,
    setStep: O,
    paymentError: j,
    paymentAuthenticationState: y,
    application: M,
    skuPricePreviewsById: k
  } = (0, g.usePaymentContext)(), {
    analyticsLocations: B
  } = (0, f.default)(), [F, D] = l.useState(!1), U = l.useRef(null), H = k[v], w = null != H ? H[I.id] : null, G = null != w ? (0, m.formatPrice)(null == w ? void 0 : w.amount, null == w ? void 0 : w.currency) : null, W = l.useMemo(() => ({
    ...A,
    load_id: b,
    payment_type: T.PurchaseTypeToAnalyticsPaymentType[T.PurchaseTypes.ONE_TIME],
    price: null == w ? void 0 : w.amount,
    currency: null == w ? void 0 : w.currency
  }), [A, w, b]);
  l.useEffect(() => {
    P !== S.Step.REVIEW && O(S.Step.REVIEW)
  }), l.useEffect(() => {
    y === C.PaymentAuthenticationState.ERROR && s(j)
  }, [s, j, y]);
  let Y = async () => {
    await E.default.track(T.AnalyticEvents.PAYMENT_FLOW_COMPLETED, W), r()(null != w, "skuPricePreview can't be null"), r()(null != M, "application can't be null");
    try {
      await (0, o.purchaseSKU)(M.id, v, {
        expectedAmount: w.amount,
        expectedCurrency: w.currency,
        isGift: R,
        paymentSource: I,
        loadId: b
      }), D(!1), t()
    } catch (t) {
      let e = t instanceof c.BillingError ? t : new c.BillingError(t);
      e.code !== d.ErrorCodes.CONFIRMATION_REQUIRED && e.code !== d.ErrorCodes.AUTHENTICATION_REQUIRED && s(t)
    }
  }, V = l.useCallback(e => {
    E.default.track(T.AnalyticEvents.PAYMENT_FLOW_STEP, {
      ...W,
      to_step: e
    }), e === S.Step.CONFIRM && (D(!1), t()), O(e)
  }, [W, O, t]);
  return (0, C.usePaymentStepForAuthentication)(P, y, V), (0, a.jsxs)("div", {
    className: _.reviewContainer,
    children: [(0, a.jsx)(i.FormSection, {
      children: (0, a.jsx)(i.FormItem, {
        children: (0, a.jsx)(u.default, {
          paymentSource: I,
          isDefault: !0,
          showSubtext: !1,
          showPaymentSourceIcon: !1,
          showLabels: !1,
          locale: "en-US"
        })
      })
    }), (0, a.jsx)("div", {
      className: _.legalTerms,
      children: (0, a.jsx)("p", {
        children: x.default.Messages.LIGHTNING_CHECKOUT_NON_REFUNDABLE_DISCLAIMER.format({
          paidURL: p.default.getArticleURL(T.HelpdeskArticles.PAID_TERMS)
        })
      })
    }), (0, a.jsx)(N, {
      className: _.buyButton,
      submitting: F,
      submittingStartedLabel: "Payment Processing",
      onClick: async () => {
        D(!0), await Y()
      },
      children: null !== G ? x.default.Messages.LIGHTNING_CHECKOUT_PAY_CTA.format({
        price: G
      }) : (0, a.jsx)(i.Spinner, {
        type: i.Spinner.Type.PULSING_ELLIPSIS
      })
    }), !F && (0, a.jsx)(L, {
      className: _.reviewButton,
      onClick: () => {
        n(), (0, h.default)({
          skuId: v,
          analyticsLocations: B,
          returnRef: U
        })
      },
      children: x.default.Messages.LIGHTNING_CHECKOUT_REVIEW_PURCHASE
    })]
  })
}