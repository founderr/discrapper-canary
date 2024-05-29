"use strict";
t.r(n), t.d(n, {
  PremiumInvoiceDiscountedTableRow: function() {
    return v
  },
  PremiumInvoiceTable: function() {
    return m
  },
  PremiumInvoiceTableDivider: function() {
    return N
  },
  PremiumInvoiceTableFinePrint: function() {
    return R
  },
  PremiumInvoiceTableHeader: function() {
    return P
  },
  PremiumInvoiceTableRow: function() {
    return f
  },
  PremiumInvoiceTableTotalRow: function() {
    return E
  }
});
var a = t("735250");
t("470079");
var i = t("120356"),
  l = t.n(i),
  r = t("442837"),
  s = t("481060"),
  u = t("911969"),
  o = t("706454"),
  c = t("937615"),
  I = t("104494"),
  d = t("474936"),
  T = t("689938"),
  _ = t("975007");

function m(e) {
  let {
    children: n,
    className: t
  } = e;
  return (0, a.jsx)("div", {
    className: l()(_.table, t),
    children: n
  })
}

function P(e) {
  let {
    children: n
  } = e;
  return (0, a.jsx)("div", {
    className: _.header,
    children: n
  })
}

function f(e) {
  let {
    label: n,
    value: t,
    className: i
  } = e;
  return (0, a.jsxs)("div", {
    className: l()(_.row, i),
    children: [(0, a.jsx)("div", {
      className: _.rowLabel,
      children: n
    }), (0, a.jsx)("div", {
      className: _.rowAmount,
      children: t
    })]
  })
}

function v(e) {
  let {
    label: n,
    value: t,
    discounts: i,
    originalAmount: l,
    interval: m,
    currency: P,
    className: v,
    intervalCount: N,
    planId: E
  } = e, R = e => null != i ? i.find(n => n.type === e) : null, S = R(u.InvoiceDiscountTypes.SUBSCRIPTION_PLAN), M = R(u.InvoiceDiscountTypes.ENTITLEMENT), p = (0, I.usePremiumAnnualDiscountOffer)(), b = null != S && null != p && null != E && E === d.SubscriptionPlans.PREMIUM_YEAR_TIER_2, A = null == S || b ? null : Math.floor(S.amount / l * 100), U = (0, r.useStateFromStores)([o.default], () => o.default.locale), L = () => {
    var e;
    let n = (0, c.formatPercent)(U, d.ANNUAL_DISCOUNT_IDS_TO_PERCENTAGES[null !== (e = null == p ? void 0 : p.discount_id) && void 0 !== e ? e : "DEFAULT"]);
    return (0, a.jsx)(s.Text, {
      variant: "eyebrow",
      color: "always-white",
      className: _.annualPlanOptionDiscount,
      children: T.default.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
        discount: n
      })
    })
  }, O = (0, c.formatPrice)(l, P);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(f, {
      label: n,
      value: b ? (0, a.jsx)("div", {
        className: _.annualDiscountValues,
        children: (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsxs)("div", {
            className: _.annualPlanDiscountPriceSection,
            children: [L(), t]
          }), (0, a.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "interactive-normal",
            children: T.default.Messages.BILLING_ANNUAL_DISCOUNT_YEARLY_PRICE_SUBTEXT.format({
              regularPrice: O
            })
          })]
        })
      }) : (0, a.jsxs)(a.Fragment, {
        children: [t, null != A ? (0, a.jsxs)("div", {
          className: _.rowPercentDiscount,
          children: ["-", A, "%"]
        }) : null]
      }),
      className: v
    }), null != A ? (0, a.jsxs)("div", {
      className: _.rowDiscountOriginalPrice,
      children: ["(", null != m && null != N ? (0, c.formatRate)(O, m, N) : O, ")"]
    }) : null, null != M ? (0, a.jsx)("div", {
      className: _.entitlementDiscountRow,
      children: T.default.Messages.BILLING_INVOICE_SUBSCRIPTION_CREDIT_APPLIED
    }) : null]
  })
}

function N(e) {
  let {
    extended: n = !1,
    negativeMarginTop: t = !1,
    negativeMarginBottom: i = !1
  } = e;
  return (0, a.jsx)("div", {
    className: l()(_.divider, {
      [_.dividerExtended]: n,
      [_.negativeMarginTop]: t,
      [_.negativeMarginBottom]: i
    })
  })
}

function E(e) {
  let {
    label: n,
    value: t,
    className: i
  } = e;
  return (0, a.jsxs)("div", {
    className: l()(_.totalRow, i),
    children: [(0, a.jsx)("div", {
      className: _.totalLabel,
      children: n
    }), (0, a.jsx)("div", {
      className: _.totalAmount,
      children: t
    })]
  })
}

function R(e) {
  let {
    children: n,
    className: t
  } = e;
  return (0, a.jsx)("div", {
    className: l()(_.finePrint, t),
    children: n
  })
}