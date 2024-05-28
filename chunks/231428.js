"use strict";
s.r(t), s.d(t, {
  default: function() {
    return v
  }
}), s("47120");
var a, n = s("735250"),
  i = s("470079"),
  r = s("120356"),
  l = s.n(r),
  u = s("512722"),
  o = s.n(u),
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
    numPages: r
  } = e, u = i.useRef(null), [o, c] = i.useState(0), [f, m] = i.useState(null), _ = t.slice(10 * o, (o + 1) * 10);
  i.useEffect(() => {
    var e;
    null === (e = u.current) || void 0 === e || e.scrollTo({
      to: 0
    })
  }, [o]);
  let I = i.useCallback(e => {
      c(e);
      let s = t[t.length - 1].id;
      e === r - 1 && f !== s && ((0, E.fetchPayments)(10, s), m(s))
    }, [t, r, f]),
    N = (0, S.default)("billing-history", u);
  return (0, n.jsx)(d.ListNavigatorProvider, {
    navigator: N,
    children: (0, n.jsx)(d.ListNavigatorContainer, {
      children: e => {
        let {
          ref: t,
          ...i
        } = e;
        return (0, n.jsx)(T.default, {
          className: l()(g.verticalFit, g.paginator),
          currentPageIndex: o,
          onChangePage: I,
          numPages: r,
          ref: t,
          ...i,
          children: (0, n.jsx)(p.AdvancedScroller, {
            className: g.bottomDivider,
            ref: u,
            children: _.map((e, t) => (0, n.jsx)(A.default, {
              className: l()(g.paymentRow, g.bottomDivider),
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
      (0, m.fetchActivityStatistics)(), (0, E.fetchPayments)(20)
    })
  }
  renderPremiumExternalSubscription(e) {
    return o()(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"), (0, n.jsxs)(p.Card, {
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
      className: g.verticalFit,
      children: [null != s && i ? this.renderPremiumExternalSubscription(s) : null, t.length > 0 ? (0, n.jsxs)("div", {
        className: l()(g.paymentPane, g.verticalFit),
        children: [e ? null : (0, n.jsx)("div", {
          className: l()(g.paymentRow, g.bottomDivider),
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
  return !(null == s || null == a || Object.values(R.PremiumSubscriptionSKUs).includes(s) || (0, h.isPremiumSubscriptionPlan)(a))
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
    r = i.useMemo(() => new Set(t.filter(U).map(e => {
      let {
        skuId: t
      } = e;
      return t
    })), [t]),
    l = (0, c.useStateFromStoresArray)([N.default], () => N.default.getPlanIdsForSkus(Array.from(r))),
    u = i.useCallback(() => l.length === a.size, [l, a]);
  return i.useEffect(() => {
    !u() && f.default.wait(() => {
      r.forEach(e => (0, _.fetchSubscriptionPlansForSKU)(e, void 0, void 0, !0, void 0))
    })
  }, [u, r]), (0, n.jsx)(b, {
    ...e,
    payments: u() ? t : [],
    subscription: s
  })
}
x(b, "defaultProps", {
  compactMode: !1
})