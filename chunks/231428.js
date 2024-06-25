n.d(t, {
  Z: function() {
    return O
  }
}), n(47120);
var s, a = n(735250),
  i = n(470079),
  o = n(120356),
  r = n.n(o),
  l = n(512722),
  c = n.n(l),
  d = n(91192),
  u = n(442837),
  _ = n(481060),
  p = n(570140),
  m = n(355467),
  f = n(827837),
  E = n(821849),
  I = n(724757),
  C = n(818035),
  h = n(509545),
  N = n(78839),
  P = n(285952),
  g = n(884246),
  T = n(74538),
  S = n(807160),
  R = n(474936),
  A = n(231338),
  b = n(689938),
  x = n(631545),
  M = n(69630);

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function y(e) {
  let {
    payments: t,
    locale: n,
    compactMode: s,
    numPages: o
  } = e, l = i.useRef(null), [c, u] = i.useState(0), [p, f] = i.useState(null), E = t.slice(10 * c, (c + 1) * 10);
  i.useEffect(() => {
    var e;
    null === (e = l.current) || void 0 === e || e.scrollTo({
      to: 0
    })
  }, [c]);
  let C = i.useCallback(e => {
      u(e);
      let n = t[t.length - 1].id;
      e >= o - 2 && p !== n && ((0, m.cQ)(10, n), f(n))
    }, [t, o, p]),
    h = (0, I.Z)("billing-history", l);
  return (0, a.jsx)(d.bG, {
    navigator: h,
    children: (0, a.jsx)(d.SJ, {
      children: e => {
        let {
          ref: t,
          ...i
        } = e;
        return (0, a.jsx)(g.Z, {
          className: r()(x.verticalFit, x.paginator),
          currentPageIndex: c,
          onChangePage: C,
          numPages: o,
          showPageCount: !1,
          ref: t,
          ...i,
          children: (0, a.jsx)(_.AdvancedScroller, {
            className: x.bottomDivider,
            ref: l,
            children: E.map((e, t) => (0, a.jsx)(S.Z, {
              className: r()(x.paymentRow, x.bottomDivider),
              payment: e,
              locale: n,
              compactMode: s
            }, t))
          })
        })
      }
    })
  })
}
class B extends(s = i.PureComponent) {
  get numPages() {
    return Math.max(Math.ceil(this.props.payments.length / 10), 1)
  }
  componentDidMount() {
    p.Z.wait(() => {
      (0, f.N)(), (0, m.cQ)(30)
    })
  }
  renderPremiumExternalSubscription(e) {
    return c()(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"), (0, a.jsxs)(_.Card, {
      className: x.externalRow,
      children: [(0, a.jsx)("div", {
        className: x.externalRowHeader,
        children: b.Z.Messages.BILLING_EXTERNAL_HEADER.format({
          paymentGatewayName: A.Vz[e.paymentGateway]
        })
      }), (0, a.jsx)("div", {
        className: x.externalRowBody,
        children: b.Z.Messages.BILLING_EXTERNAL_DESCRIPTION.format({
          paymentGatewayName: A.Vz[e.paymentGateway],
          billingHistoryLink: (0, T.JE)(e.paymentGateway, "BILLING_HISTORY")
        })
      })]
    })
  }
  render() {
    let {
      compactMode: e,
      payments: t,
      subscription: n,
      locale: s
    } = this.props, i = null != n && n.isPurchasedExternally;
    return 0 !== t.length || i ? (0, a.jsxs)("div", {
      className: x.verticalFit,
      children: [null != n && i ? this.renderPremiumExternalSubscription(n) : null, t.length > 0 ? (0, a.jsxs)("div", {
        className: r()(x.paymentPane, x.verticalFit),
        children: [e ? null : (0, a.jsx)("div", {
          className: r()(x.paymentRow, x.bottomDivider),
          children: (0, a.jsxs)(P.Z, {
            className: x.paymentRowHeader,
            children: [(0, a.jsx)("div", {
              className: M.date,
              children: b.Z.Messages.BILLING_PAYMENT_TABLE_HEADER_DATE
            }), (0, a.jsx)("div", {
              className: x.paymentRowHeaderDescription,
              children: b.Z.Messages.BILLING_PAYMENT_TABLE_HEADER_DESCRIPTION
            }), (0, a.jsx)("div", {
              className: M.amount,
              children: b.Z.Messages.BILLING_PAYMENT_TABLE_HEADER_AMOUNT
            })]
          })
        }), (0, a.jsx)(y, {
          compactMode: e,
          locale: s,
          payments: t,
          numPages: this.numPages
        })]
      }) : null]
    }) : null
  }
  constructor(...e) {
    super(...e), L(this, "scrollerRef", i.createRef())
  }
}

function D(e) {
  var t;
  let n = e.skuId,
    s = null === (t = e.subscription) || void 0 === t ? void 0 : t.items[0].planId;
  return !(null == n || null == s || Object.values(R.Si).includes(n) || (0, T.PV)(s))
}

function O(e) {
  let t = (0, u.e7)([C.Z], () => C.Z.getPayments()),
    n = (0, u.e7)([N.ZP], () => N.ZP.getPremiumTypeSubscription()),
    s = i.useMemo(() => new Set(t.filter(D).map(e => {
      let {
        subscription: t
      } = e;
      return null == t ? void 0 : t.items[0].planId
    })), [t]),
    o = i.useMemo(() => new Set(t.filter(D).map(e => {
      let {
        skuId: t
      } = e;
      return t
    })), [t]),
    r = (0, u.Wu)([h.Z], () => h.Z.getPlanIdsForSkus(Array.from(o))),
    l = i.useCallback(() => r.length === s.size, [r, s]);
  return i.useEffect(() => {
    !l() && p.Z.wait(() => {
      o.forEach(e => (0, E.GZ)(e, void 0, void 0, !0, void 0))
    })
  }, [l, o]), (0, a.jsx)(B, {
    ...e,
    payments: l() ? t : [],
    subscription: n
  })
}
L(B, "defaultProps", {
  compactMode: !1
})