"use strict";
a.r(t), a.d(t, {
  default: function() {
    return T
  },
  useLightningCheckoutEligibility: function() {
    return x
  }
}), a("47120");
var l = a("735250"),
  s = a("470079"),
  r = a("512722"),
  i = a.n(r),
  n = a("481060"),
  o = a("16084"),
  u = a("244526"),
  c = a("176919"),
  d = a("63063"),
  f = a("937615"),
  m = a("598"),
  C = a("409813"),
  p = a("333867"),
  h = a("74179"),
  E = a("981631"),
  g = a("893024");
let b = e => {
    let {
      children: t,
      style: a,
      className: s,
      ...r
    } = e;
    return (0, l.jsx)(n.Button, {
      size: n.ButtonSizes.SMALL,
      fullWidth: !0,
      look: n.Button.Looks.FILLED,
      style: a,
      className: s,
      ...r,
      children: t
    })
  },
  S = e => {
    let {
      children: t,
      className: a,
      ...s
    } = e;
    return (0, l.jsx)(n.Button, {
      size: n.ButtonSizes.SMALL,
      look: n.ButtonLooks.BLANK,
      color: n.ButtonColors.TRANSPARENT,
      className: a,
      fullWidth: !0,
      ...s,
      children: t
    })
  };

function x() {
  let {
    defaultPaymentSource: e
  } = (0, h.default)({
    isGift: !1,
    activeSubscription: null
  });
  return {
    userIsEligible: null !== e && !E.REDIRECTED_PAYMENT_SOURCES.has(e.type)
  }
}

function T(e) {
  let {
    onPurchaseComplete: t,
    paymentSource: a,
    loadId: r,
    skuId: h,
    isGift: x = !1,
    customButtonStyle: T,
    analyticsLocations: L
  } = e, {
    step: v,
    setStep: I,
    paymentAuthenticationState: N,
    application: _,
    skuPricePreviewsById: y
  } = (0, m.usePaymentContext)(), [O, k] = s.useState(!1), A = s.useRef(null), R = y[h], j = null != R ? R[a.id] : null, P = null != j ? (0, f.formatPrice)(null == j ? void 0 : j.amount, null == j ? void 0 : j.currency) : "";
  s.useEffect(() => {
    v !== C.Step.REVIEW && I(C.Step.REVIEW)
  });
  let B = async () => {
    i()(null != j, "skuPricePreview can't be null"), i()(null != _, "application can't be null");
    try {
      await (0, o.purchaseSKU)(_.id, h, {
        expectedAmount: j.amount,
        expectedCurrency: j.currency,
        isGift: x,
        paymentSource: a,
        loadId: r
      }), k(!1), t()
    } catch (e) {}
  }, F = s.useCallback(e => {
    e === C.Step.CONFIRM && (k(!1), t()), I(e)
  }, [I, t]);
  return (0, c.usePaymentStepForAuthentication)(v, N, F), (0, l.jsxs)("div", {
    className: g.reviewContainer,
    children: [(0, l.jsx)(n.FormSection, {
      children: (0, l.jsx)(n.FormItem, {
        children: (0, l.jsx)(u.default, {
          paymentSource: a,
          isDefault: !0,
          showSubtext: !1,
          showPaymentSourceIcon: !1,
          showDefaultLabel: !1,
          locale: "en-US"
        })
      })
    }), (0, l.jsx)("div", {
      color: "always-white",
      className: g.legalTerms,
      children: (0, l.jsxs)("p", {
        children: ["Non-refundable. By clicking, you are agreeing to our", " ", (0, l.jsx)(n.Anchor, {
          href: d.default.getArticleURL(E.HelpdeskArticles.PAID_TERMS),
          children: "Paid Services Terms."
        })]
      })
    }), (0, l.jsx)(b, {
      style: T,
      className: g.buyButton,
      submitting: O,
      submittingStartedLabel: "Payment Processing",
      onClick: async () => {
        k(!0), await B()
      },
      children: "Pay " + P
    }), !O && (0, l.jsx)(S, {
      className: g.reviewButton,
      onClick: () => {
        (0, p.default)({
          skuId: h,
          analyticsLocations: L,
          returnRef: A
        })
      },
      children: "Review Purchase"
    })]
  })
}