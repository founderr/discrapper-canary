"use strict";
s.r(t), s.d(t, {
  default: function() {
    return v
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
  m = s("355467"),
  E = s("827837"),
  _ = s("821849"),
  S = s("724757"),
  I = s("818035"),
  N = s("509545"),
  P = s("78839"),
  C = s("285952"),
  h = s("884246"),
  T = s("74538"),
  A = s("807160"),
  R = s("474936"),
  M = s("231338"),
  y = s("689938"),
  g = s("961988"),
  L = s("511700");

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
  } = e, o = i.useRef(null), [u, c] = i.useState(0), [f, E] = i.useState(null), _ = t.slice(10 * u, (u + 1) * 10);
  i.useEffect(() => {
    var e;
    null === (e = o.current) || void 0 === e || e.scrollTo({
      to: 0
    })
  }, [u]);
  let I = i.useCallback(e => {
      c(e);
      let s = t[t.length - 1].id;
      e === l - 1 && f !== s && ((0, m.fetchPayments)(10, s), E(s))
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
        return (0, n.jsx)(h.default, {
          className: r()(g.verticalFit, g.paginator),
          currentPageIndex: u,
          onChangePage: I,
          numPages: l,
          ref: t,
          ...i,
          children: (0, n.jsx)(p.AdvancedScroller, {
            className: g.bottomDivider,
            ref: o,
            children: _.map((e, t) => (0, n.jsx)(A.default, {
              className: r()(g.paymentRow, g.bottomDivider),
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
class b extends(a = i.PureComponent) {
  get numPages() {
    return Math.max(Math.ceil(this.props.payments.length / 10), 1)
  }
  componentDidMount() {
    f.default.wait(() => {
      (0, E.fetchActivityStatistics)(), (0, m.fetchPayments)(20)
    })
  }
  renderPremiumExternalSubscription(e) {
    return u()(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"), (0, n.jsxs)(p.Card, {
      className: g.externalRow,
      children: [(0, n.jsx)("div", {
        className: g.externalRowHeader,
        children: y.default.Messages.BILLING_EXTERNAL_HEADER.format({
          paymentGatewayName: M.PaymentGatewayToFriendlyName[e.paymentGateway]
        })
      }), (0, n.jsx)("div", {
        className: g.externalRowBody,
        children: y.default.Messages.BILLING_EXTERNAL_DESCRIPTION.format({
          paymentGatewayName: M.PaymentGatewayToFriendlyName[e.paymentGateway],
          billingHistoryLink: (0, T.getExternalSubscriptionMethodUrl)(e.paymentGateway, "BILLING_HISTORY")
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
      className: g.verticalFit,
      children: [null != s && i ? this.renderPremiumExternalSubscription(s) : null, t.length > 0 ? (0, n.jsxs)("div", {
        className: r()(g.paymentPane, g.verticalFit),
        children: [e ? null : (0, n.jsx)("div", {
          className: r()(g.paymentRow, g.bottomDivider),
          children: (0, n.jsxs)(C.default, {
            className: g.paymentRowHeader,
            children: [(0, n.jsx)("div", {
              className: L.date,
              children: y.default.Messages.BILLING_PAYMENT_TABLE_HEADER_DATE
            }), (0, n.jsx)("div", {
              className: g.paymentRowHeaderDescription,
              children: y.default.Messages.BILLING_PAYMENT_TABLE_HEADER_DESCRIPTION
            }), (0, n.jsx)("div", {
              className: L.amount,
              children: y.default.Messages.BILLING_PAYMENT_TABLE_HEADER_AMOUNT
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

function U(e) {
  var t;
  let s = e.skuId,
    a = null === (t = e.subscription) || void 0 === t ? void 0 : t.items[0].planId;
  return !(null == s || null == a || Object.values(R.PremiumSubscriptionSKUs).includes(s) || (0, T.isPremiumSubscriptionPlan)(a))
}

function v(e) {
  let t = (0, c.useStateFromStores)([I.default], () => I.default.getPayments()),
    s = (0, c.useStateFromStores)([P.default], () => P.default.getPremiumTypeSubscription()),
    a = i.useMemo(() => new Set(t.filter(U).map(e => {
      let {
        subscription: t
      } = e;
      return null == t ? void 0 : t.items[0].planId
    })), [t]),
    l = i.useMemo(() => new Set(t.filter(U).map(e => {
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
  }, [o, l]), (0, n.jsx)(b, {
    ...e,
    payments: o() ? t : [],
    subscription: s
  })
}
x(b, "defaultProps", {
  compactMode: !1
})