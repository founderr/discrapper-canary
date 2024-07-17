t.d(s, {
  Z: function() {
return v;
  }
}), t(47120);
var n, a = t(735250),
  i = t(470079),
  r = t(120356),
  o = t.n(r),
  l = t(512722),
  c = t.n(l),
  d = t(91192),
  _ = t(442837),
  E = t(481060),
  u = t(570140),
  T = t(355467),
  I = t(827837),
  S = t(821849),
  N = t(724757),
  C = t(239827),
  m = t(818035),
  A = t(509545),
  h = t(78839),
  g = t(285952),
  O = t(74538),
  p = t(807160),
  R = t(474936),
  x = t(231338),
  M = t(689938),
  D = t(134379),
  f = t(450770);

function P(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[s] = t, e;
}

function L(e) {
  let {
payments: s,
locale: t,
compactMode: n,
numPages: r
  } = e, l = i.useRef(null), [c, _] = i.useState(0), [u, I] = i.useState(null), S = s.slice(10 * c, (c + 1) * 10);
  i.useEffect(() => {
var e;
null === (e = l.current) || void 0 === e || e.scrollTo({
  to: 0
});
  }, [c]);
  let m = i.useCallback(e => {
  _(e);
  let t = s[s.length - 1].id;
  e >= r - 2 && u !== t && ((0, T.cQ)(10, t), I(t));
}, [
  s,
  r,
  u
]),
A = (0, N.Z)('billing-history', l);
  return (0, a.jsx)(d.bG, {
navigator: A,
children: (0, a.jsx)(d.SJ, {
  children: e => {
    let {
      ref: s,
      ...i
    } = e;
    return (0, a.jsx)(C.Z, {
      className: o()(D.verticalFit, D.paginator),
      currentPageIndex: c,
      onChangePage: m,
      numPages: r,
      showPageCount: !1,
      ref: s,
      ...i,
      children: (0, a.jsx)(E.AdvancedScroller, {
        className: D.bottomDivider,
        ref: l,
        children: S.map((e, s) => (0, a.jsx)(p.Z, {
          className: o()(D.paymentRow, D.bottomDivider),
          payment: e,
          locale: t,
          compactMode: n
        }, s))
      })
    });
  }
})
  });
}
class Z extends(n = i.PureComponent) {
  get numPages() {
return Math.max(Math.ceil(this.props.payments.length / 10), 1);
  }
  componentDidMount() {
u.Z.wait(() => {
  (0, I.N)(), (0, T.cQ)(30);
});
  }
  renderPremiumExternalSubscription(e) {
return c()(null != e.paymentGateway, 'Expected payment gateway when rendering for external subscription'), (0, a.jsxs)(E.Card, {
  className: D.externalRow,
  children: [
    (0, a.jsx)('div', {
      className: D.externalRowHeader,
      children: M.Z.Messages.BILLING_EXTERNAL_HEADER.format({
        paymentGatewayName: x.Vz[e.paymentGateway]
      })
    }),
    (0, a.jsx)('div', {
      className: D.externalRowBody,
      children: M.Z.Messages.BILLING_EXTERNAL_DESCRIPTION.format({
        paymentGatewayName: x.Vz[e.paymentGateway],
        billingHistoryLink: (0, O.JE)(e.paymentGateway, 'BILLING_HISTORY')
      })
    })
  ]
});
  }
  render() {
let {
  compactMode: e,
  payments: s,
  subscription: t,
  locale: n
} = this.props, i = null != t && t.isPurchasedExternally;
return 0 !== s.length || i ? (0, a.jsxs)('div', {
  className: D.verticalFit,
  children: [
    null != t && i ? this.renderPremiumExternalSubscription(t) : null,
    s.length > 0 ? (0, a.jsxs)('div', {
      className: o()(D.paymentPane, D.verticalFit),
      children: [
        e ? null : (0, a.jsx)('div', {
          className: o()(D.paymentRow, D.bottomDivider),
          children: (0, a.jsxs)(g.Z, {
            className: D.paymentRowHeader,
            children: [
              (0, a.jsx)('div', {
                className: f.date,
                children: M.Z.Messages.BILLING_PAYMENT_TABLE_HEADER_DATE
              }),
              (0, a.jsx)('div', {
                className: D.paymentRowHeaderDescription,
                children: M.Z.Messages.BILLING_PAYMENT_TABLE_HEADER_DESCRIPTION
              }),
              (0, a.jsx)('div', {
                className: f.amount,
                children: M.Z.Messages.BILLING_PAYMENT_TABLE_HEADER_AMOUNT
              })
            ]
          })
        }),
        (0, a.jsx)(L, {
          compactMode: e,
          locale: n,
          payments: s,
          numPages: this.numPages
        })
      ]
    }) : null
  ]
}) : null;
  }
  constructor(...e) {
super(...e), P(this, 'scrollerRef', i.createRef());
  }
}

function b(e) {
  var s;
  let t = e.skuId,
n = null === (s = e.subscription) || void 0 === s ? void 0 : s.items[0].planId;
  return !(null == t || null == n || Object.values(R.Si).includes(t) || (0, O.PV)(n));
}

function v(e) {
  let s = (0, _.e7)([m.Z], () => m.Z.getPayments()),
t = (0, _.e7)([h.ZP], () => h.ZP.getPremiumTypeSubscription()),
n = i.useMemo(() => new Set(s.filter(b).map(e => {
  let {
    subscription: s
  } = e;
  return null == s ? void 0 : s.items[0].planId;
})), [s]),
r = i.useMemo(() => new Set(s.filter(b).map(e => {
  let {
    skuId: s
  } = e;
  return s;
})), [s]),
o = (0, _.Wu)([A.Z], () => A.Z.getPlanIdsForSkus(Array.from(r))),
l = i.useCallback(() => o.length === n.size, [
  o,
  n
]);
  return i.useEffect(() => {
!l() && u.Z.wait(() => {
  r.forEach(e => (0, S.GZ)(e, void 0, void 0, !0, void 0));
});
  }, [
l,
r
  ]), (0, a.jsx)(Z, {
...e,
payments: l() ? s : [],
subscription: t
  });
}
P(Z, 'defaultProps', {
  compactMode: !1
});