"use strict";
a.r(t), a.d(t, {
  PremiumInvoiceDiscountedTableRow: function() {
    return m
  },
  PremiumInvoiceTable: function() {
    return T
  },
  PremiumInvoiceTableDivider: function() {
    return E
  },
  PremiumInvoiceTableFinePrint: function() {
    return S
  },
  PremiumInvoiceTableHeader: function() {
    return p
  },
  PremiumInvoiceTableRow: function() {
    return P
  },
  PremiumInvoiceTableTotalRow: function() {
    return A
  }
});
var n = a("735250");
a("470079");
var r = a("120356"),
  s = a.n(r),
  i = a("442837"),
  l = a("481060"),
  o = a("911969"),
  u = a("706454"),
  c = a("937615"),
  d = a("104494"),
  I = a("474936"),
  _ = a("689938"),
  f = a("975007");

function T(e) {
  let {
    children: t,
    className: a
  } = e;
  return (0, n.jsx)("div", {
    className: s()(f.table, a),
    children: t
  })
}

function p(e) {
  let {
    children: t
  } = e;
  return (0, n.jsx)("div", {
    className: f.header,
    children: t
  })
}

function P(e) {
  let {
    label: t,
    value: a,
    className: r
  } = e;
  return (0, n.jsxs)("div", {
    className: s()(f.row, r),
    children: [(0, n.jsx)("div", {
      className: f.rowLabel,
      children: t
    }), (0, n.jsx)("div", {
      className: f.rowAmount,
      children: a
    })]
  })
}

function m(e) {
  let {
    label: t,
    value: a,
    discounts: r,
    originalAmount: s,
    interval: T,
    currency: p,
    className: m,
    intervalCount: E,
    planId: A
  } = e, S = e => null != r ? r.find(t => t.type === e) : null, N = S(o.InvoiceDiscountTypes.SUBSCRIPTION_PLAN), R = S(o.InvoiceDiscountTypes.ENTITLEMENT), M = (0, d.usePremiumAnnualDiscountOffer)(), b = null != N && null != M && null != A && A === I.SubscriptionPlans.PREMIUM_YEAR_TIER_2, v = null == N || b ? null : Math.floor(N.amount / s * 100), L = (0, i.useStateFromStores)([u.default], () => u.default.locale), C = () => {
    var e;
    let t = (0, c.formatPercent)(L, I.ANNUAL_DISCOUNT_IDS_TO_PERCENTAGES[null !== (e = null == M ? void 0 : M.discount_id) && void 0 !== e ? e : "DEFAULT"]);
    return (0, n.jsx)(l.Text, {
      variant: "eyebrow",
      color: "always-white",
      className: f.annualPlanOptionDiscount,
      children: _.default.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
        discount: t
      })
    })
  }, y = (0, c.formatPrice)(s, p);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(P, {
      label: t,
      value: b ? (0, n.jsx)("div", {
        className: f.annualDiscountValues,
        children: (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsxs)("div", {
            className: f.annualPlanDiscountPriceSection,
            children: [C(), a]
          }), (0, n.jsx)(l.Text, {
            variant: "text-md/normal",
            color: "interactive-normal",
            children: _.default.Messages.BILLING_ANNUAL_DISCOUNT_YEARLY_PRICE_SUBTEXT.format({
              regularPrice: y
            })
          })]
        })
      }) : (0, n.jsxs)(n.Fragment, {
        children: [a, null != v ? (0, n.jsxs)("div", {
          className: f.rowPercentDiscount,
          children: ["-", v, "%"]
        }) : null]
      }),
      className: m
    }), null != v ? (0, n.jsxs)("div", {
      className: f.rowDiscountOriginalPrice,
      children: ["(", null != T && null != E ? (0, c.formatRate)(y, T, E) : y, ")"]
    }) : null, null != R ? (0, n.jsx)("div", {
      className: f.entitlementDiscountRow,
      children: _.default.Messages.BILLING_INVOICE_SUBSCRIPTION_CREDIT_APPLIED
    }) : null]
  })
}

function E(e) {
  let {
    extended: t = !1,
    negativeMarginTop: a = !1,
    negativeMarginBottom: r = !1
  } = e;
  return (0, n.jsx)("div", {
    className: s()(f.divider, {
      [f.dividerExtended]: t,
      [f.negativeMarginTop]: a,
      [f.negativeMarginBottom]: r
    })
  })
}

function A(e) {
  let {
    label: t,
    value: a,
    className: r
  } = e;
  return (0, n.jsxs)("div", {
    className: s()(f.totalRow, r),
    children: [(0, n.jsx)("div", {
      className: f.totalLabel,
      children: t
    }), (0, n.jsx)("div", {
      className: f.totalAmount,
      children: a
    })]
  })
}

function S(e) {
  let {
    children: t,
    className: a
  } = e;
  return (0, n.jsx)("div", {
    className: s()(f.finePrint, a),
    children: t
  })
}