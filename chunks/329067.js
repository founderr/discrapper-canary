"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
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
  m = s("63063"),
  p = s("937615"),
  S = s("598"),
  g = s("409813"),
  h = s("333867"),
  I = s("74179"),
  _ = s("981631"),
  T = s("689938"),
  x = s("834042");
let L = e => {
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
  N = e => {
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
    userIsEligible: null !== e && !_.REDIRECTED_PAYMENT_SOURCES.has(e.type)
  }
}

function A(e) {
  let {
    onPurchaseComplete: t,
    onError: s,
    onReviewPurchase: n,
    paymentSource: I,
    loadId: b,
    skuId: A,
    isGift: v = !1,
    baseAnalyticsData: R
  } = e, {
    step: P,
    setStep: O,
    paymentError: y,
    paymentAuthenticationState: j,
    application: M,
    skuPricePreviewsById: k
  } = (0, S.usePaymentContext)(), {
    analyticsLocations: B
  } = (0, f.default)(), [D, F] = l.useState(!1), U = l.useRef(null), H = k[A], w = null != H ? H[I.id] : null, G = null != w ? (0, p.formatPrice)(null == w ? void 0 : w.amount, null == w ? void 0 : w.currency) : null, W = l.useMemo(() => ({
    ...R,
    load_id: b,
    payment_type: _.PurchaseTypeToAnalyticsPaymentType[_.PurchaseTypes.ONE_TIME],
    price: null == w ? void 0 : w.amount,
    currency: null == w ? void 0 : w.currency
  }), [R, w, b]);
  l.useEffect(() => {
    P !== g.Step.REVIEW && O(g.Step.REVIEW)
  }), l.useEffect(() => {
    j === C.PaymentAuthenticationState.ERROR && s(y)
  }, [s, y, j]);
  let V = async () => {
    await E.default.track(_.AnalyticEvents.PAYMENT_FLOW_COMPLETED, W), r()(null != w, "skuPricePreview can't be null"), r()(null != M, "application can't be null");
    try {
      await (0, o.purchaseSKU)(M.id, A, {
        expectedAmount: w.amount,
        expectedCurrency: w.currency,
        isGift: v,
        paymentSource: I,
        loadId: b
      }), F(!1), t()
    } catch (t) {
      let e = t instanceof c.BillingError ? t : new c.BillingError(t);
      e.code !== d.ErrorCodes.CONFIRMATION_REQUIRED && e.code !== d.ErrorCodes.AUTHENTICATION_REQUIRED && s(t)
    }
  }, Y = l.useCallback(e => {
    E.default.track(_.AnalyticEvents.PAYMENT_FLOW_STEP, {
      ...W,
      to_step: e
    }), e === g.Step.CONFIRM && (F(!1), t()), O(e)
  }, [W, O, t]);
  return (0, C.usePaymentStepForAuthentication)(P, j, Y), (0, a.jsxs)("div", {
    className: x.reviewContainer,
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
      className: x.legalTerms,
      children: (0, a.jsx)("p", {
        children: T.default.Messages.LIGHTNING_CHECKOUT_NON_REFUNDABLE_DISCLAIMER.format({
          paidURL: m.default.getArticleURL(_.HelpdeskArticles.PAID_TERMS)
        })
      })
    }), (0, a.jsx)(L, {
      className: x.buyButton,
      submitting: D,
      submittingStartedLabel: "Payment Processing",
      onClick: async () => {
        F(!0), await V()
      },
      children: null !== G ? T.default.Messages.LIGHTNING_CHECKOUT_PAY_CTA.format({
        price: G
      }) : (0, a.jsx)(i.Spinner, {
        type: i.Spinner.Type.PULSING_ELLIPSIS
      })
    }), !D && (0, a.jsx)(N, {
      className: x.reviewButton,
      onClick: () => {
        n(), (0, h.default)({
          skuId: A,
          analyticsLocations: B,
          returnRef: U
        })
      },
      children: T.default.Messages.LIGHTNING_CHECKOUT_REVIEW_PURCHASE
    })]
  })
}