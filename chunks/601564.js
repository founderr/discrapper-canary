n.r(t), n.d(t, {
  getPageSize: function() {
    return v
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(593473),
  a = n(266067),
  r = n(442837),
  o = n(930118),
  c = n(355467),
  u = n(410575),
  d = n(666743),
  E = n(112724),
  h = n(447269),
  _ = n(612226),
  I = n(714338),
  m = n(663993),
  T = n(628123),
  g = n(703656),
  p = n(108427),
  N = n(911314),
  S = n(429899),
  C = n(843445),
  A = n(981631),
  f = n(689938),
  Z = n(595115);

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let O = (0, m.Un)({
  createPromise: () => Promise.all([n.e("49237"), n.e("68148"), n.e("32886")]).then(n.bind(n, 496691)),
  webpackId: 496691
});

function v(e) {
  return e < C.x ? C.b.SMALL : C.b.LARGE
}
r.ZP.initialize();
class R extends i.PureComponent {
  componentDidMount() {
    (0, o.Y)(this.props.location), this.stopListeningToHistory = (0, g.s1)().listen(e => {
      e.pathname.startsWith(A.Z5c.APPLICATION_STORE) && (0, o.Y)(e)
    }), this.props.isAuthenticated && (0, c.tZ)(), I.Z.disable(), I.Z.setLayout(h.r), I.Z.enable(), (0, p.e)("application_store")
  }
  componentWillUnmount() {
    null != this.stopListeningToHistory && this.stopListeningToHistory(), I.Z.disable(), I.Z.setLayout(_.oT), I.Z.enable()
  }
  renderCustomErrorMessage() {
    return (0, s.jsxs)("div", {
      children: [(0, s.jsx)("p", {
        children: f.Z.Messages.ERRORS_STORE_CRASH
      }), (0, s.jsx)("p", {
        children: f.Z.Messages.ERRORS_ACTION_TO_TAKE
      })]
    })
  }
  render() {
    let {
      isAuthenticated: e,
      location: t
    } = this.props, n = e ? (0, s.jsx)("div", {
      className: Z.applicationStore,
      children: this.renderContent()
    }) : (0, s.jsx)(O, {
      className: Z.applicationStore,
      location: t,
      render: this.renderContent
    });
    return (0, s.jsx)(T.Z, {
      renderCustomMessage: this.renderCustomErrorMessage,
      children: n
    })
  }
  constructor(...e) {
    super(...e), L(this, "stopListeningToHistory", void 0), L(this, "renderStoreListing", e => {
      let {
        match: {
          params: {
            skuId: t,
            applicationId: n,
            slug: i
          }
        },
        location: a
      } = e, {
        width: r
      } = this.props, o = (0, l.parse)(a.search);
      return (0, s.jsx)(u.Z, {
        page: A.ZY5.STORE_LISTING,
        root: !0,
        children: (0, s.jsx)(S.Z, {
          skuId: t,
          applicationId: n,
          slug: i,
          location: a,
          storeListingId: o.store_listing_id,
          pageSize: v(r)
        })
      })
    }), L(this, "renderContent", () => (0, s.jsxs)(a.rs, {
      children: [(0, s.jsx)(a.AW, {
        path: A.Z5c.APPLICATION_STORE,
        exact: !0,
        render: () => (0, s.jsx)(u.Z, {
          page: A.ZY5.STORE_DIRECTORY_HOME,
          root: !0,
          children: (0, s.jsx)(N.Z, {})
        })
      }), (0, s.jsx)(a.AW, {
        path: A.Z5c.APPLICATION_STORE_LISTING_APPLICATION(":applicationId", ":slug"),
        render: this.renderStoreListing
      }), (0, s.jsx)(a.AW, {
        path: A.Z5c.APPLICATION_STORE_LISTING_APPLICATION(":applicationId"),
        render: this.renderStoreListing
      }), (0, s.jsx)(a.AW, {
        path: A.Z5c.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
        render: this.renderStoreListing
      }), (0, s.jsx)(a.AW, {
        path: A.Z5c.APPLICATION_STORE_LISTING_SKU(":skuId"),
        render: this.renderStoreListing
      }), (0, s.jsx)(a.l_, {
        to: A.Z5c.APP
      })]
    }))
  }
}
t.default = (0, a.EN)((0, d.Z)((0, E.Z)(R)))