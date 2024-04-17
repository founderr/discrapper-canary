"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
  }
}), s("47120");
var a, n = s("735250"),
  i = s("470079"),
  l = s("120356"),
  r = s.n(l),
  o = s("512722"),
  u = s.n(o),
  d = s("924826"),
  c = s("442837"),
  p = s("481060"),
  f = s("570140"),
  E = s("355467"),
  m = s("827837"),
  _ = s("821849"),
  S = s("724757"),
  I = s("818035"),
  N = s("509545"),
  P = s("78839"),
  C = s("285952"),
  T = s("884246"),
  h = s("74538"),
  A = s("807160"),
  R = s("474936"),
  y = s("231338"),
  M = s("689938"),
  L = s("472009"),
  g = s("486158");

function x(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function D(e) {
  let {
    payments: t,
    locale: s,
    compactMode: a,
    numPages: l
  } = e, o = i.useRef(null), [u, c] = i.useState(0), [f, m] = i.useState(null), _ = t.slice(10 * u, (u + 1) * 10);
  i.useEffect(() => {
    var e;
    null === (e = o.current) || void 0 === e || e.scrollTo({
      to: 0
    })
  }, [u]);
  let I = i.useCallback(e => {
      c(e);
      let s = t[t.length - 1].id;
      e === l - 1 && f !== s && ((0, E.fetchPayments)(10, s), m(s))
    }, [t, l, f]),
    N = (0, S.default)("billing-history", o);
  return (0, n.jsx)(d.ListNavigatorProvider, {
    navigator: N,
    children: (0, n.jsx)(d.ListNavigatorContainer, {
      children: e => {
        let {
          ref: t,
          ...i
        } = e;
        return (0, n.jsx)(T.default, {
          className: r()(L.verticalFit, L.paginator),
          currentPageIndex: u,
          onChangePage: I,
          numPages: l,
          ref: t,
          ...i,
          children: (0, n.jsx)(p.AdvancedScroller, {
            className: L.bottomDivider,
            ref: o,
            children: _.map((e, t) => (0, n.jsx)(A.default, {
              className: r()(L.paymentRow, L.bottomDivider),
              payment: e,
              locale: s,
              compactMode: a
            }, t))
          })
        })
      }
    })
  })
}
class U extends(a = i.PureComponent) {
  get numPages() {
    return Math.max(Math.ceil(this.props.payments.length / 10), 1)
  }
  componentDidMount() {
    f.default.wait(() => {
      (0, m.fetchActivityStatistics)(), (0, E.fetchPayments)(20)
    })
  }
  renderPremiumExternalSubscription(e) {
    return u()(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"), (0, n.jsxs)(p.Card, {
      className: L.externalRow,
      children: [(0, n.jsx)("div", {
        className: L.externalRowHeader,
        children: M.default.Messages.BILLING_EXTERNAL_HEADER.format({
          paymentGatewayName: y.PaymentGatewayToFriendlyName[e.paymentGateway]
        })
      }), (0, n.jsx)("div", {
        className: L.externalRowBody,
        children: M.default.Messages.BILLING_EXTERNAL_DESCRIPTION.format({
          paymentGatewayName: y.PaymentGatewayToFriendlyName[e.paymentGateway],
          billingHistoryLink: (0, h.getExternalSubscriptionMethodUrl)(e.paymentGateway, "BILLING_HISTORY")
        })
      })]
    })
  }
  render() {
    let {
      compactMode: e,
      payments: t,
      subscription: s,
      locale: a
    } = this.props, i = null != s && s.isPurchasedExternally;
    return 0 !== t.length || i ? (0, n.jsxs)("div", {
      className: L.verticalFit,
      children: [null != s && i ? this.renderPremiumExternalSubscription(s) : null, t.length > 0 ? (0, n.jsxs)("div", {
        className: r()(L.paymentPane, L.verticalFit),
        children: [e ? null : (0, n.jsx)("div", {
          className: r()(L.paymentRow, L.bottomDivider),
          children: (0, n.jsxs)(C.default, {
            className: L.paymentRowHeader,
            children: [(0, n.jsx)("div", {
              className: g.date,
              children: M.default.Messages.BILLING_PAYMENT_TABLE_HEADER_DATE
            }), (0, n.jsx)("div", {
              className: L.paymentRowHeaderDescription,
              children: M.default.Messages.BILLING_PAYMENT_TABLE_HEADER_DESCRIPTION
            }), (0, n.jsx)("div", {
              className: g.amount,
              children: M.default.Messages.BILLING_PAYMENT_TABLE_HEADER_AMOUNT
            })]
          })
        }), (0, n.jsx)(D, {
          compactMode: e,
          locale: a,
          payments: t,
          numPages: this.numPages
        })]
      }) : null]
    }) : null
  }
  constructor(...e) {
    super(...e), x(this, "scrollerRef", i.createRef())
  }
}

function b(e) {
  var t;
  let s = e.skuId,
    a = null === (t = e.subscription) || void 0 === t ? void 0 : t.items[0].planId;
  return !(null == s || null == a || Object.values(R.PremiumSubscriptionSKUs).includes(s) || (0, h.isPremiumSubscriptionPlan)(a))
}

function O(e) {
  let t = (0, c.useStateFromStores)([I.default], () => I.default.getPayments()),
    s = (0, c.useStateFromStores)([P.default], () => P.default.getPremiumTypeSubscription()),
    a = i.useMemo(() => new Set(t.filter(b).map(e => {
      let {
        subscription: t
      } = e;
      return null == t ? void 0 : t.items[0].planId
    })), [t]),
    l = i.useMemo(() => new Set(t.filter(b).map(e => {
      let {
        skuId: t
      } = e;
      return t
    })), [t]),
    r = (0, c.useStateFromStoresArray)([N.default], () => N.default.getPlanIdsForSkus(Array.from(l))),
    o = i.useCallback(() => r.length === a.size, [r, a]);
  return i.useEffect(() => {
    !o() && f.default.wait(() => {
      l.forEach(e => (0, _.fetchSubscriptionPlansForSKU)(e, void 0, void 0, !0, void 0))
    })
  }, [o, l]), (0, n.jsx)(U, {
    ...e,
    payments: o() ? t : [],
    subscription: s
  })
}
x(U, "defaultProps", {
  compactMode: !1
})