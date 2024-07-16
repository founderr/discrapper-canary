a.d(n, {
  HE: function() {
return A;
  },
  Ji: function() {
return T;
  },
  KU: function() {
return E;
  },
  PO: function() {
return u;
  },
  R$: function() {
return _;
  },
  i$: function() {
return I;
  },
  q9: function() {
return d;
  }
});
var s = a(735250);
a(470079);
var t = a(120356),
  r = a.n(t),
  l = a(911969),
  i = a(937615),
  o = a(689938),
  c = a(30695);

function u(e) {
  let {
children: n,
className: a
  } = e;
  return (0, s.jsx)('div', {
className: r()(c.table, a),
children: n
  });
}

function d(e) {
  let {
children: n
  } = e;
  return (0, s.jsx)('div', {
className: c.header,
children: n
  });
}

function _(e) {
  let {
label: n,
value: a,
className: t
  } = e;
  return (0, s.jsxs)('div', {
className: r()(c.row, t),
children: [
  (0, s.jsx)('div', {
    className: c.rowLabel,
    children: n
  }),
  (0, s.jsx)('div', {
    className: c.rowAmount,
    children: a
  })
]
  });
}

function I(e) {
  let {
label: n,
value: a,
discounts: t,
originalAmount: r,
interval: u,
currency: d,
className: I,
intervalCount: E
  } = e, T = e => null != t ? t.find(n => n.type === e) : null, A = T(l.eW.SUBSCRIPTION_PLAN), N = T(l.eW.ENTITLEMENT), P = null != A ? Math.floor(A.amount / r * 100) : null, M = (0, i.T4)(r, d);
  return (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)(_, {
    label: n,
    value: (0, s.jsxs)(s.Fragment, {
      children: [
        a,
        null != P ? (0, s.jsxs)('div', {
          className: c.rowPercentDiscount,
          children: [
            '-',
            P,
            '%'
          ]
        }) : null
      ]
    }),
    className: I
  }),
  null != P ? (0, s.jsxs)('div', {
    className: c.rowDiscountOriginalPrice,
    children: [
      '(',
      null != u && null != E ? (0, i.og)(M, u, E) : M,
      ')'
    ]
  }) : null,
  null != N ? (0, s.jsx)('div', {
    className: c.entitlementDiscountRow,
    children: o.Z.Messages.BILLING_INVOICE_SUBSCRIPTION_CREDIT_APPLIED
  }) : null
]
  });
}

function E(e) {
  let {
extended: n = !1,
negativeMarginTop: a = !1,
negativeMarginBottom: t = !1
  } = e;
  return (0, s.jsx)('div', {
className: r()(c.divider, {
  [c.dividerExtended]: n,
  [c.negativeMarginTop]: a,
  [c.negativeMarginBottom]: t
})
  });
}

function T(e) {
  let {
label: n,
value: a,
className: t
  } = e;
  return (0, s.jsxs)('div', {
className: r()(c.totalRow, t),
children: [
  (0, s.jsx)('div', {
    className: c.totalLabel,
    children: n
  }),
  (0, s.jsx)('div', {
    className: c.totalAmount,
    children: a
  })
]
  });
}

function A(e) {
  let {
children: n,
className: a
  } = e;
  return (0, s.jsx)('div', {
className: r()(c.finePrint, a),
children: n
  });
}