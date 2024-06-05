"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  },
  useLightningCheckoutEligibility: function() {
    return N
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  r = s("512722"),
  n = s.n(r),
  i = s("481060"),
  o = s("16084"),
  c = s("244526"),
  u = s("881052"),
  d = s("128069"),
  f = s("906732"),
  C = s("176919"),
  p = s("626135"),
  m = s("63063"),
  g = s("937615"),
  E = s("598"),
  h = s("409813"),
  b = s("333867"),
  x = s("74179"),
  S = s("981631"),
  v = s("689938"),
  I = s("834042");
let L = e => {
    let {
      children: t,
      style: s,
      className: l,
      ...r
    } = e;
    return (0, a.jsx)(i.Button, {
      size: i.ButtonSizes.SMALL,
      fullWidth: !0,
      look: i.Button.Looks.FILLED,
      color: i.ButtonColors.GREEN,
      style: s,
      className: l,
      ...r,
      children: t
    })
  },
  T = e => {
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
    onError: s,
    onReviewPurchase: r,
    paymentSource: x,
    loadId: N,
    skuId: _,
    isGift: y = !1,
    baseAnalyticsData: j
  } = e, {
    step: A,
    setStep: O,
    paymentError: P,
    paymentAuthenticationState: k,
    application: R,
    skuPricePreviewsById: B
  } = (0, E.usePaymentContext)(), {
    analyticsLocations: M
  } = (0, f.default)(), [D, F] = l.useState(!1), w = l.useRef(null), H = B[_], U = null != H ? H[x.id] : null, W = null != U ? (0, g.formatPrice)(null == U ? void 0 : U.amount, null == U ? void 0 : U.currency) : null, G = l.useMemo(() => ({
    ...j,
    load_id: N,
    payment_type: S.PurchaseTypeToAnalyticsPaymentType[S.PurchaseTypes.ONE_TIME],
    price: null == U ? void 0 : U.amount,
    currency: null == U ? void 0 : U.currency
  }), [j, U, N]);
  l.useEffect(() => {
    A !== h.Step.REVIEW && O(h.Step.REVIEW)
  }), l.useEffect(() => {
    k === C.PaymentAuthenticationState.ERROR && s(P)
  }, [s, P, k]);
  let V = async () => {
    await p.default.track(S.AnalyticEvents.PAYMENT_FLOW_COMPLETED, G), n()(null != U, "skuPricePreview can't be null"), n()(null != R, "application can't be null");
    try {
      await (0, o.purchaseSKU)(R.id, _, {
        expectedAmount: U.amount,
        expectedCurrency: U.currency,
        isGift: y,
        paymentSource: x,
        loadId: N
      }), F(!1), t()
    } catch (t) {
      let e = t instanceof u.BillingError ? t : new u.BillingError(t);
      e.code !== d.ErrorCodes.CONFIRMATION_REQUIRED && e.code !== d.ErrorCodes.AUTHENTICATION_REQUIRED && s(t)
    }
  }, K = l.useCallback(e => {
    p.default.track(S.AnalyticEvents.PAYMENT_FLOW_STEP, {
      ...G,
      to_step: e
    }), e === h.Step.CONFIRM && (F(!1), t()), O(e)
  }, [G, O, t]);
  return (0, C.usePaymentStepForAuthentication)(A, k, K), (0, a.jsxs)("div", {
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
        children: v.default.Messages.LIGHTNING_CHECKOUT_NON_REFUNDABLE_DISCLAIMER.format({
          paidURL: m.default.getArticleURL(S.HelpdeskArticles.PAID_TERMS)
        })
      })
    }), (0, a.jsx)(L, {
      className: I.buyButton,
      submitting: D,
      submittingStartedLabel: "Payment Processing",
      onClick: async () => {
        F(!0), await V()
      },
      children: null !== W ? v.default.Messages.LIGHTNING_CHECKOUT_PAY_CTA.format({
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
          returnRef: w
        })
      },
      children: v.default.Messages.LIGHTNING_CHECKOUT_REVIEW_PURCHASE
    })]
  })
}