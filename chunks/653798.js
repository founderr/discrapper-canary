"use strict";
i.r(n), i.d(n, {
  PremiumInvoiceDiscountedTableRow: function() {
    return m
  },
  PremiumInvoiceTable: function() {
    return c
  },
  PremiumInvoiceTableDivider: function() {
    return T
  },
  PremiumInvoiceTableFinePrint: function() {
    return _
  },
  PremiumInvoiceTableHeader: function() {
    return I
  },
  PremiumInvoiceTableRow: function() {
    return d
  },
  PremiumInvoiceTableTotalRow: function() {
    return P
  }
});
var t = i("735250");
i("470079");
var r = i("120356"),
  a = i.n(r),
  l = i("911969"),
  s = i("937615"),
  u = i("689938"),
  o = i("429939");

function c(e) {
  let {
    children: n,
    className: i
  } = e;
  return (0, t.jsx)("div", {
    className: a()(o.table, i),
    children: n
  })
}

function I(e) {
  let {
    children: n
  } = e;
  return (0, t.jsx)("div", {
    className: o.header,
    children: n
  })
}

function d(e) {
  let {
    label: n,
    value: i,
    className: r
  } = e;
  return (0, t.jsxs)("div", {
    className: a()(o.row, r),
    children: [(0, t.jsx)("div", {
      className: o.rowLabel,
      children: n
    }), (0, t.jsx)("div", {
      className: o.rowAmount,
      children: i
    })]
  })
}

function m(e) {
  let {
    label: n,
    value: i,
    discounts: r,
    originalAmount: a,
    interval: c,
    currency: I,
    className: m,
    intervalCount: T
  } = e, P = e => null != r ? r.find(n => n.type === e) : null, _ = P(l.InvoiceDiscountTypes.SUBSCRIPTION_PLAN), v = P(l.InvoiceDiscountTypes.ENTITLEMENT), M = null != _ ? Math.floor(_.amount / a * 100) : null, R = (0, s.formatPrice)(a, I);
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(d, {
      label: n,
      value: (0, t.jsxs)(t.Fragment, {
        children: [i, null != M ? (0, t.jsxs)("div", {
          className: o.rowPercentDiscount,
          children: ["-", M, "%"]
        }) : null]
      }),
      className: m
    }), null != M ? (0, t.jsxs)("div", {
      className: o.rowDiscountOriginalPrice,
      children: ["(", null != c && null != T ? (0, s.formatRate)(R, c, T) : R, ")"]
    }) : null, null != v ? (0, t.jsx)("div", {
      className: o.entitlementDiscountRow,
      children: u.default.Messages.BILLING_INVOICE_SUBSCRIPTION_CREDIT_APPLIED
    }) : null]
  })
}

function T(e) {
  let {
    extended: n = !1,
    negativeMarginTop: i = !1,
    negativeMarginBottom: r = !1
  } = e;
  return (0, t.jsx)("div", {
    className: a()(o.divider, {
      [o.dividerExtended]: n,
      [o.negativeMarginTop]: i,
      [o.negativeMarginBottom]: r
    })
  })
}

function P(e) {
  let {
    label: n,
    value: i,
    className: r
  } = e;
  return (0, t.jsxs)("div", {
    className: a()(o.totalRow, r),
    children: [(0, t.jsx)("div", {
      className: o.totalLabel,
      children: n
    }), (0, t.jsx)("div", {
      className: o.totalAmount,
      children: i
    })]
  })
}

function _(e) {
  let {
    children: n,
    className: i
  } = e;
  return (0, t.jsx)("div", {
    className: a()(o.finePrint, i),
    children: n
  })
}