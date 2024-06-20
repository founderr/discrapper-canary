t.d(s, {
  Z: function() {
    return Z
  }
}), t(47120);
var n, a = t(735250),
  i = t(470079),
  l = t(120356),
  r = t.n(l),
  o = t(512722),
  c = t.n(o),
  u = t(91192),
  d = t(442837),
  E = t(481060),
  _ = t(570140),
  p = t(355467),
  I = t(827837),
  m = t(821849),
  N = t(724757),
  C = t(818035),
  h = t(509545),
  P = t(78839),
  T = t(285952),
  A = t(884246),
  R = t(74538),
  S = t(807160),
  M = t(474936),
  f = t(231338),
  g = t(689938),
  L = t(631545),
  x = t(69630);

function O(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}

function D(e) {
  let {
    payments: s,
    locale: t,
    compactMode: n,
    numPages: l
  } = e, o = i.useRef(null), [c, d] = i.useState(0), [_, I] = i.useState(null), m = s.slice(10 * c, (c + 1) * 10);
  i.useEffect(() => {
    var e;
    null === (e = o.current) || void 0 === e || e.scrollTo({
      to: 0
    })
  }, [c]);
  let C = i.useCallback(e => {
      d(e);
      let t = s[s.length - 1].id;
      e >= l - 2 && _ !== t && ((0, p.cQ)(10, t), I(t))
    }, [s, l, _]),
    h = (0, N.Z)("billing-history", o);
  return (0, a.jsx)(u.bG, {
    navigator: h,
    children: (0, a.jsx)(u.SJ, {
      children: e => {
        let {
          ref: s,
          ...i
        } = e;
        return (0, a.jsx)(A.Z, {
          className: r()(L.verticalFit, L.paginator),
          currentPageIndex: c,
          onChangePage: C,
          numPages: l,
          showPageCount: !1,
          ref: s,
          ...i,
          children: (0, a.jsx)(E.AdvancedScroller, {
            className: L.bottomDivider,
            ref: o,
            children: m.map((e, s) => (0, a.jsx)(S.Z, {
              className: r()(L.paymentRow, L.bottomDivider),
              payment: e,
              locale: t,
              compactMode: n
            }, s))
          })
        })
      }
    })
  })
}
class y extends(n = i.PureComponent) {
  get numPages() {
    return Math.max(Math.ceil(this.props.payments.length / 10), 1)
  }
  componentDidMount() {
    _.Z.wait(() => {
      (0, I.N)(), (0, p.cQ)(30)
    })
  }
  renderPremiumExternalSubscription(e) {
    return c()(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"), (0, a.jsxs)(E.Card, {
      className: L.externalRow,
      children: [(0, a.jsx)("div", {
        className: L.externalRowHeader,
        children: g.Z.Messages.BILLING_EXTERNAL_HEADER.format({
          paymentGatewayName: f.Vz[e.paymentGateway]
        })
      }), (0, a.jsx)("div", {
        className: L.externalRowBody,
        children: g.Z.Messages.BILLING_EXTERNAL_DESCRIPTION.format({
          paymentGatewayName: f.Vz[e.paymentGateway],
          billingHistoryLink: (0, R.JE)(e.paymentGateway, "BILLING_HISTORY")
        })
      })]
    })
  }
  render() {
    let {
      compactMode: e,
      payments: s,
      subscription: t,
      locale: n
    } = this.props, i = null != t && t.isPurchasedExternally;
    return 0 !== s.length || i ? (0, a.jsxs)("div", {
      className: L.verticalFit,
      children: [null != t && i ? this.renderPremiumExternalSubscription(t) : null, s.length > 0 ? (0, a.jsxs)("div", {
        className: r()(L.paymentPane, L.verticalFit),
        children: [e ? null : (0, a.jsx)("div", {
          className: r()(L.paymentRow, L.bottomDivider),
          children: (0, a.jsxs)(T.Z, {
            className: L.paymentRowHeader,
            children: [(0, a.jsx)("div", {
              className: x.date,
              children: g.Z.Messages.BILLING_PAYMENT_TABLE_HEADER_DATE
            }), (0, a.jsx)("div", {
              className: L.paymentRowHeaderDescription,
              children: g.Z.Messages.BILLING_PAYMENT_TABLE_HEADER_DESCRIPTION
            }), (0, a.jsx)("div", {
              className: x.amount,
              children: g.Z.Messages.BILLING_PAYMENT_TABLE_HEADER_AMOUNT
            })]
          })
        }), (0, a.jsx)(D, {
          compactMode: e,
          locale: n,
          payments: s,
          numPages: this.numPages
        })]
      }) : null]
    }) : null
  }
  constructor(...e) {
    super(...e), O(this, "scrollerRef", i.createRef())
  }
}

function U(e) {
  var s;
  let t = e.skuId,
    n = null === (s = e.subscription) || void 0 === s ? void 0 : s.items[0].planId;
  return !(null == t || null == n || Object.values(M.Si).includes(t) || (0, R.PV)(n))
}

function Z(e) {
  let s = (0, d.e7)([C.Z], () => C.Z.getPayments()),
    t = (0, d.e7)([P.ZP], () => P.ZP.getPremiumTypeSubscription()),
    n = i.useMemo(() => new Set(s.filter(U).map(e => {
      let {
        subscription: s
      } = e;
      return null == s ? void 0 : s.items[0].planId
    })), [s]),
    l = i.useMemo(() => new Set(s.filter(U).map(e => {
      let {
        skuId: s
      } = e;
      return s
    })), [s]),
    r = (0, d.Wu)([h.Z], () => h.Z.getPlanIdsForSkus(Array.from(l))),
    o = i.useCallback(() => r.length === n.size, [r, n]);
  return i.useEffect(() => {
    !o() && _.Z.wait(() => {
      l.forEach(e => (0, m.GZ)(e, void 0, void 0, !0, void 0))
    })
  }, [o, l]), (0, a.jsx)(y, {
    ...e,
    payments: o() ? s : [],
    subscription: t
  })
}
O(y, "defaultProps", {
  compactMode: !1
})