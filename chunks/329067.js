"use strict";
a.r(t), a.d(t, {
  default: function() {
    return g
  }
}), a("47120");
var l = a("735250"),
  s = a("470079"),
  r = a("512722"),
  n = a.n(r),
  i = a("481060"),
  o = a("16084"),
  u = a("244526"),
  c = a("63063"),
  d = a("937615"),
  f = a("598"),
  m = a("333867"),
  C = a("981631"),
  p = a("893024");
let h = e => {
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
  E = e => {
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

function g(e) {
  let {
    onPurchaseComplete: t,
    paymentSource: a,
    loadId: r,
    skuId: g,
    isGift: S = !1,
    customButtonStyle: b,
    analyticsLocations: x
  } = e, {
    application: T,
    skuPricePreviewsById: v
  } = (0, f.usePaymentContext)(), [L, I] = s.useState(!1), N = s.useRef(null), _ = v[g], y = null != _ ? _[a.id] : null, O = null != y ? (0, d.formatPrice)(null == y ? void 0 : y.amount, null == y ? void 0 : y.currency) : "";
  return (0, l.jsxs)("div", {
    className: p.reviewContainer,
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
      className: p.legalTerms,
      children: (0, l.jsxs)("p", {
        children: ["Non-refundable. By clicking, you are agreeing to our", " ", (0, l.jsx)(i.Anchor, {
          href: c.default.getArticleURL(C.HelpdeskArticles.PAID_TERMS),
          children: "Paid Services Terms."
        })]
      })
    }), (0, l.jsx)(h, {
      style: b,
      className: p.buyButton,
      submitting: L,
      submittingStartedLabel: "Payment Processing",
      onClick: async () => {
        n()(null != y, "skuPricePreview can't be null"), n()(null != T, "application can't be null"), I(!0), await (0, o.purchaseSKU)(T.id, g, {
          expectedAmount: y.amount,
          expectedCurrency: y.currency,
          isGift: S,
          paymentSource: a,
          loadId: r
        }), I(!1), t()
      },
      children: "Pay " + O
    }), !L && (0, l.jsx)(E, {
      className: p.reviewButton,
      onClick: () => {
        (0, m.default)({
          skuId: g,
          analyticsLocations: x,
          returnRef: N
        })
      },
      children: "Review Purchase"
    })]
  })
}