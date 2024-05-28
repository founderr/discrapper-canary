"use strict";
s.r(t), s.d(t, {
  getPageSize: function() {
    return m
  }
}), s("47120");
var n = s("735250"),
  a = s("470079"),
  r = s("593473"),
  l = s("613828"),
  i = s("442837"),
  u = s("930118"),
  o = s("355467"),
  d = s("410575"),
  c = s("666743"),
  I = s("112724"),
  T = s("447269"),
  E = s("612226"),
  f = s("714338"),
  _ = s("663993"),
  S = s("628123"),
  A = s("703656"),
  R = s("108427"),
  O = s("911314"),
  h = s("429899"),
  N = s("843445"),
  p = s("981631"),
  g = s("689938"),
  P = s("597589");

function L(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let C = (0, _.makeLazy)({
  createPromise: () => Promise.all([s.e("49237"), s.e("73206"), s.e("32886")]).then(s.bind(s, "496691")),
  webpackId: "496691"
});

function m(e) {
  return e < N.PAGE_WIDTH_THRESHOLD ? N.PageSizes.SMALL : N.PageSizes.LARGE
}
i.default.initialize();
class M extends a.PureComponent {
  componentDidMount() {
    (0, u.updateLocation)(this.props.location), this.stopListeningToHistory = (0, A.getHistory)().listen(e => {
      e.pathname.startsWith(p.Routes.APPLICATION_STORE) && (0, u.updateLocation)(e)
    }), this.props.isAuthenticated && (0, o.fetchPaymentSources)(), f.default.disable(), f.default.setLayout(T.APPLICATION_STORE_LAYOUT), f.default.enable(), (0, R.trackAppUIViewed)("application_store")
  }
  componentWillUnmount() {
    null != this.stopListeningToHistory && this.stopListeningToHistory(), f.default.disable(), f.default.setLayout(E.DEFAULT_LAYOUT), f.default.enable()
  }
  renderCustomErrorMessage() {
    return (0, n.jsxs)("div", {
      children: [(0, n.jsx)("p", {
        children: g.default.Messages.ERRORS_STORE_CRASH
      }), (0, n.jsx)("p", {
        children: g.default.Messages.ERRORS_ACTION_TO_TAKE
      })]
    })
  }
  render() {
    let {
      isAuthenticated: e,
      location: t
    } = this.props, s = e ? (0, n.jsx)("div", {
      className: P.applicationStore,
      children: this.renderContent()
    }) : (0, n.jsx)(C, {
      className: P.applicationStore,
      location: t,
      render: this.renderContent
    });
    return (0, n.jsx)(S.default, {
      renderCustomMessage: this.renderCustomErrorMessage,
      children: s
    })
  }
  constructor(...e) {
    super(...e), L(this, "stopListeningToHistory", void 0), L(this, "renderStoreListing", e => {
      let {
        match: {
          params: {
            skuId: t,
            applicationId: s,
            slug: a
          }
        },
        location: l
      } = e, {
        width: i
      } = this.props, u = (0, r.parse)(l.search);
      return (0, n.jsx)(d.default, {
        page: p.AnalyticsPages.STORE_LISTING,
        root: !0,
        children: (0, n.jsx)(h.default, {
          skuId: t,
          applicationId: s,
          slug: a,
          location: l,
          storeListingId: u.store_listing_id,
          pageSize: m(i)
        })
      })
    }), L(this, "renderContent", () => (0, n.jsxs)(l.Switch, {
      children: [(0, n.jsx)(l.Route, {
        path: p.Routes.APPLICATION_STORE,
        exact: !0,
        render: () => (0, n.jsx)(d.default, {
          page: p.AnalyticsPages.STORE_DIRECTORY_HOME,
          root: !0,
          children: (0, n.jsx)(O.default, {})
        })
      }), (0, n.jsx)(l.Route, {
        path: p.Routes.APPLICATION_STORE_LISTING_APPLICATION(":applicationId", ":slug"),
        render: this.renderStoreListing
      }), (0, n.jsx)(l.Route, {
        path: p.Routes.APPLICATION_STORE_LISTING_APPLICATION(":applicationId"),
        render: this.renderStoreListing
      }), (0, n.jsx)(l.Route, {
        path: p.Routes.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
        render: this.renderStoreListing
      }), (0, n.jsx)(l.Route, {
        path: p.Routes.APPLICATION_STORE_LISTING_SKU(":skuId"),
        render: this.renderStoreListing
      }), (0, n.jsx)(l.Redirect, {
        to: p.Routes.APP
      })]
    }))
  }
}
t.default = (0, l.withRouter)((0, c.default)((0, I.default)(M)))