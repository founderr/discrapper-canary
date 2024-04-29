"use strict";
s.r(t), s.d(t, {
  getPageSize: function() {
    return h
  }
}), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("593473"),
  n = s("613828"),
  l = s("442837"),
  o = s("930118"),
  u = s("355467"),
  d = s("410575"),
  c = s("666743"),
  _ = s("112724"),
  E = s("447269"),
  T = s("612226"),
  I = s("714338"),
  R = s("663993"),
  f = s("628123"),
  S = s("703656"),
  m = s("108427"),
  A = s("911314"),
  N = s("429899"),
  p = s("843445"),
  g = s("981631"),
  C = s("689938"),
  P = s("314865");

function O(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let M = (0, R.makeLazy)({
  createPromise: () => Promise.all([s.e("49237"), s.e("73206"), s.e("32886")]).then(s.bind(s, "496691")),
  webpackId: "496691"
});

function h(e) {
  return e < p.PAGE_WIDTH_THRESHOLD ? p.PageSizes.SMALL : p.PageSizes.LARGE
}
l.default.initialize();
class L extends r.PureComponent {
  componentDidMount() {
    (0, o.updateLocation)(this.props.location), this.stopListeningToHistory = (0, S.getHistory)().listen(e => {
      e.pathname.startsWith(g.Routes.APPLICATION_STORE) && (0, o.updateLocation)(e)
    }), this.props.isAuthenticated && (0, u.fetchPaymentSources)(), I.default.disable(), I.default.setLayout(E.APPLICATION_STORE_LAYOUT), I.default.enable(), (0, m.trackAppUIViewed)("application_store")
  }
  componentWillUnmount() {
    null != this.stopListeningToHistory && this.stopListeningToHistory(), I.default.disable(), I.default.setLayout(T.DEFAULT_LAYOUT), I.default.enable()
  }
  renderCustomErrorMessage() {
    return (0, a.jsxs)("div", {
      children: [(0, a.jsx)("p", {
        children: C.default.Messages.ERRORS_STORE_CRASH
      }), (0, a.jsx)("p", {
        children: C.default.Messages.ERRORS_ACTION_TO_TAKE
      })]
    })
  }
  render() {
    let {
      isAuthenticated: e,
      location: t
    } = this.props, s = e ? (0, a.jsx)("div", {
      className: P.applicationStore,
      children: this.renderContent()
    }) : (0, a.jsx)(M, {
      className: P.applicationStore,
      location: t,
      render: this.renderContent
    });
    return (0, a.jsx)(f.default, {
      renderCustomMessage: this.renderCustomErrorMessage,
      children: s
    })
  }
  constructor(...e) {
    super(...e), O(this, "stopListeningToHistory", void 0), O(this, "renderStoreListing", e => {
      let {
        match: {
          params: {
            skuId: t,
            applicationId: s,
            slug: r
          }
        },
        location: n
      } = e, {
        width: l
      } = this.props, o = (0, i.parse)(n.search);
      return (0, a.jsx)(d.default, {
        page: g.AnalyticsPages.STORE_LISTING,
        root: !0,
        children: (0, a.jsx)(N.default, {
          skuId: t,
          applicationId: s,
          slug: r,
          location: n,
          storeListingId: o.store_listing_id,
          pageSize: h(l)
        })
      })
    }), O(this, "renderContent", () => (0, a.jsxs)(n.Switch, {
      children: [(0, a.jsx)(n.Route, {
        path: g.Routes.APPLICATION_STORE,
        exact: !0,
        render: () => (0, a.jsx)(d.default, {
          page: g.AnalyticsPages.STORE_DIRECTORY_HOME,
          root: !0,
          children: (0, a.jsx)(A.default, {})
        })
      }), (0, a.jsx)(n.Route, {
        path: g.Routes.APPLICATION_STORE_LISTING_APPLICATION(":applicationId", ":slug"),
        render: this.renderStoreListing
      }), (0, a.jsx)(n.Route, {
        path: g.Routes.APPLICATION_STORE_LISTING_APPLICATION(":applicationId"),
        render: this.renderStoreListing
      }), (0, a.jsx)(n.Route, {
        path: g.Routes.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
        render: this.renderStoreListing
      }), (0, a.jsx)(n.Route, {
        path: g.Routes.APPLICATION_STORE_LISTING_SKU(":skuId"),
        render: this.renderStoreListing
      }), (0, a.jsx)(n.Redirect, {
        to: g.Routes.APP
      })]
    }))
  }
}
t.default = (0, n.withRouter)((0, c.default)((0, _.default)(L)))