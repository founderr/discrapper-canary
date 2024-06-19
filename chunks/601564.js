t.r(s), t.d(s, {
  getPageSize: function() {
    return Z
  }
}), t(47120);
var n = t(735250),
  r = t(470079),
  i = t(593473),
  a = t(266067),
  l = t(442837),
  o = t(930118),
  c = t(355467),
  u = t(410575),
  I = t(666743),
  T = t(112724),
  d = t(447269),
  _ = t(612226),
  E = t(714338),
  S = t(663993),
  O = t(628123),
  A = t(703656),
  N = t(108427),
  R = t(911314),
  h = t(429899),
  P = t(843445),
  p = t(981631),
  g = t(689938),
  C = t(595115);

function L(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
let m = (0, S.Un)({
  createPromise: () => Promise.all([t.e("49237"), t.e("72355"), t.e("32886")]).then(t.bind(t, 496691)),
  webpackId: 496691
});

function Z(e) {
  return e < P.x ? P.b.SMALL : P.b.LARGE
}
l.ZP.initialize();
class f extends r.PureComponent {
  componentDidMount() {
    (0, o.Y)(this.props.location), this.stopListeningToHistory = (0, A.s1)().listen(e => {
      e.pathname.startsWith(p.Z5c.APPLICATION_STORE) && (0, o.Y)(e)
    }), this.props.isAuthenticated && (0, c.tZ)(), E.Z.disable(), E.Z.setLayout(d.r), E.Z.enable(), (0, N.e)("application_store")
  }
  componentWillUnmount() {
    null != this.stopListeningToHistory && this.stopListeningToHistory(), E.Z.disable(), E.Z.setLayout(_.oT), E.Z.enable()
  }
  renderCustomErrorMessage() {
    return (0, n.jsxs)("div", {
      children: [(0, n.jsx)("p", {
        children: g.Z.Messages.ERRORS_STORE_CRASH
      }), (0, n.jsx)("p", {
        children: g.Z.Messages.ERRORS_ACTION_TO_TAKE
      })]
    })
  }
  render() {
    let {
      isAuthenticated: e,
      location: s
    } = this.props, t = e ? (0, n.jsx)("div", {
      className: C.applicationStore,
      children: this.renderContent()
    }) : (0, n.jsx)(m, {
      className: C.applicationStore,
      location: s,
      render: this.renderContent
    });
    return (0, n.jsx)(O.Z, {
      renderCustomMessage: this.renderCustomErrorMessage,
      children: t
    })
  }
  constructor(...e) {
    super(...e), L(this, "stopListeningToHistory", void 0), L(this, "renderStoreListing", e => {
      let {
        match: {
          params: {
            skuId: s,
            applicationId: t,
            slug: r
          }
        },
        location: a
      } = e, {
        width: l
      } = this.props, o = (0, i.parse)(a.search);
      return (0, n.jsx)(u.Z, {
        page: p.ZY5.STORE_LISTING,
        root: !0,
        children: (0, n.jsx)(h.Z, {
          skuId: s,
          applicationId: t,
          slug: r,
          location: a,
          storeListingId: o.store_listing_id,
          pageSize: Z(l)
        })
      })
    }), L(this, "renderContent", () => (0, n.jsxs)(a.rs, {
      children: [(0, n.jsx)(a.AW, {
        path: p.Z5c.APPLICATION_STORE,
        exact: !0,
        render: () => (0, n.jsx)(u.Z, {
          page: p.ZY5.STORE_DIRECTORY_HOME,
          root: !0,
          children: (0, n.jsx)(R.Z, {})
        })
      }), (0, n.jsx)(a.AW, {
        path: p.Z5c.APPLICATION_STORE_LISTING_APPLICATION(":applicationId", ":slug"),
        render: this.renderStoreListing
      }), (0, n.jsx)(a.AW, {
        path: p.Z5c.APPLICATION_STORE_LISTING_APPLICATION(":applicationId"),
        render: this.renderStoreListing
      }), (0, n.jsx)(a.AW, {
        path: p.Z5c.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
        render: this.renderStoreListing
      }), (0, n.jsx)(a.AW, {
        path: p.Z5c.APPLICATION_STORE_LISTING_SKU(":skuId"),
        render: this.renderStoreListing
      }), (0, n.jsx)(a.l_, {
        to: p.Z5c.APP
      })]
    }))
  }
}
s.default = (0, a.EN)((0, I.Z)((0, T.Z)(f)))