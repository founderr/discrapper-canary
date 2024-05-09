"use strict";
a.r(t), a.d(t, {
  default: function() {
    return I
  },
  useLightningCheckoutEligibility: function() {
    return v
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
  f = a("176919"),
  m = a("63063"),
  C = a("937615"),
  p = a("563132"),
  E = a("409813"),
  h = a("333867"),
  g = a("74179"),
  x = a("981631"),
  b = a("689938"),
  T = a("255094");
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

function v() {
  let {
    defaultPaymentSource: e
  } = (0, g.default)({
    isGift: !1,
    activeSubscription: null
  });
  return {
    userIsEligible: null !== e && !x.REDIRECTED_PAYMENT_SOURCES.has(e.type)
  }
}

function I(e) {
  let {
    onPurchaseComplete: t,
    onError: a,
    onReviewPurchase: r,
    paymentSource: g,
    loadId: v,
    skuId: I,
    isGift: N = !1,
    analyticsLocations: _
  } = e, {
    step: O,
    setStep: y,
    paymentError: R,
    paymentAuthenticationState: k,
    application: A,
    skuPricePreviewsById: j
  } = (0, p.usePaymentContext)(), [P, B] = s.useState(!1), M = s.useRef(null), D = j[I], F = null != D ? D[g.id] : null, w = null != F ? (0, C.formatPrice)(null == F ? void 0 : F.amount, null == F ? void 0 : F.currency) : null;
  s.useEffect(() => {
    O !== E.Step.REVIEW && y(E.Step.REVIEW)
  }), s.useEffect(() => {
    k === f.PaymentAuthenticationState.ERROR && a(R)
  }, [a, R, k]);
  let H = async () => {
    n()(null != F, "skuPricePreview can't be null"), n()(null != A, "application can't be null");
    try {
      await (0, o.purchaseSKU)(A.id, I, {
        expectedAmount: F.amount,
        expectedCurrency: F.currency,
        isGift: N,
        paymentSource: g,
        loadId: v
      }), B(!1), t()
    } catch (t) {
      let e = t instanceof c.BillingError ? t : new c.BillingError(t);
      e.code !== d.ErrorCodes.CONFIRMATION_REQUIRED && e.code !== d.ErrorCodes.AUTHENTICATION_REQUIRED && a(t)
    }
  }, U = s.useCallback(e => {
    e === E.Step.CONFIRM && (B(!1), t()), y(e)
  }, [y, t]);
  return (0, f.usePaymentStepForAuthentication)(O, k, U), (0, l.jsxs)("div", {
    className: T.reviewContainer,
    children: [(0, l.jsx)(i.FormSection, {
      children: (0, l.jsx)(i.FormItem, {
        children: (0, l.jsx)(u.default, {
          paymentSource: g,
          isDefault: !0,
          showSubtext: !1,
          showPaymentSourceIcon: !1,
          showDefaultLabel: !1,
          locale: "en-US"
        })
      })
    }), (0, l.jsx)("div", {
      className: T.legalTerms,
      children: (0, l.jsx)("p", {
        children: b.default.Messages.LIGHTNING_CHECKOUT_NON_REFUNDABLE_DISCLAIMER.format({
          paidURL: m.default.getArticleURL(x.HelpdeskArticles.PAID_TERMS)
        })
      })
    }), (0, l.jsx)(S, {
      className: T.buyButton,
      submitting: P,
      submittingStartedLabel: "Payment Processing",
      onClick: async () => {
        B(!0), await H()
      },
      children: null !== w ? "Pay " + w : (0, l.jsx)(i.Spinner, {
        type: i.Spinner.Type.PULSING_ELLIPSIS
      })
    }), !P && (0, l.jsx)(L, {
      className: T.reviewButton,
      onClick: () => {
        r(), (0, h.default)({
          skuId: I,
          analyticsLocations: _,
          returnRef: M
        })
      },
      children: b.default.Messages.LIGHTNING_CHECKOUT_REVIEW_PURCHASE
    })]
  })
}