"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
}), a("47120");
var l = a("735250"),
  s = a("470079"),
  r = a("512722"),
  n = a.n(r),
  i = a("481060"),
  o = a("16084"),
  u = a("244526"),
  c = a("176919"),
  d = a("63063"),
  f = a("937615"),
  m = a("598"),
  C = a("409813"),
  p = a("333867"),
  h = a("981631"),
  E = a("893024");
let g = e => {
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
      style: a,
      className: s,
      ...r,
      children: t
    })
  },
  b = e => {
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

function S(e) {
  let {
    onPurchaseComplete: t,
    paymentSource: a,
    loadId: r,
    skuId: S,
    isGift: x = !1,
    customButtonStyle: T,
    analyticsLocations: L
  } = e, {
    step: v,
    setStep: I,
    paymentAuthenticationState: N,
    application: _,
    skuPricePreviewsById: y
  } = (0, m.usePaymentContext)(), [O, k] = s.useState(!1), A = s.useRef(null), j = y[S], R = null != j ? j[a.id] : null, P = null != R ? (0, f.formatPrice)(null == R ? void 0 : R.amount, null == R ? void 0 : R.currency) : "";
  s.useEffect(() => {
    v !== C.Step.REVIEW && I(C.Step.REVIEW)
  });
  let B = async () => {
    n()(null != R, "skuPricePreview can't be null"), n()(null != _, "application can't be null");
    try {
      await (0, o.purchaseSKU)(_.id, S, {
        expectedAmount: R.amount,
        expectedCurrency: R.currency,
        isGift: x,
        paymentSource: a,
        loadId: r
      }), k(!1), t()
    } catch (e) {}
  }, F = s.useCallback(e => {
    e === C.Step.CONFIRM && (k(!1), t()), I(e)
  }, [I, t]);
  return (0, c.usePaymentStepForAuthentication)(v, N, F), (0, l.jsxs)("div", {
    className: E.reviewContainer,
    children: [(0, l.jsx)(i.FormSection, {
      children: (0, l.jsx)(i.FormItem, {
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
      className: E.legalTerms,
      children: (0, l.jsxs)("p", {
        children: ["Non-refundable. By clicking, you are agreeing to our", " ", (0, l.jsx)(i.Anchor, {
          href: d.default.getArticleURL(h.HelpdeskArticles.PAID_TERMS),
          children: "Paid Services Terms."
        })]
      })
    }), (0, l.jsx)(g, {
      style: T,
      className: E.buyButton,
      submitting: O,
      submittingStartedLabel: "Payment Processing",
      onClick: async () => {
        k(!0), await B()
      },
      children: "Pay " + P
    }), !O && (0, l.jsx)(b, {
      className: E.reviewButton,
      onClick: () => {
        (0, p.default)({
          skuId: S,
          analyticsLocations: L,
          returnRef: A
        })
      },
      children: "Review Purchase"
    })]
  })
}