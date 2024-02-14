"use strict";
s.r(t), s.d(t, {
  getPageSize: function() {
    return M
  },
  default: function() {
    return L
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  i = s("730290"),
  r = s("90915"),
  l = s("446674"),
  o = s("971178"),
  u = s("850068"),
  d = s("901582"),
  c = s("984376"),
  _ = s("737960"),
  E = s("667247"),
  I = s("493765"),
  T = s("485328"),
  f = s("269936"),
  S = s("967889"),
  R = s("393414"),
  m = s("970366"),
  A = s("592433"),
  N = s("489749"),
  p = s("75576"),
  g = s("49111"),
  C = s("782340"),
  P = s("504659");
let O = (0, f.makeLazy)({
  createPromise: () => s.el("972119").then(s.bind(s, "972119")),
  webpackId: "972119"
});

function M(e) {
  return e < p.PAGE_WIDTH_THRESHOLD ? p.PageSizes.SMALL : p.PageSizes.LARGE
}
l.default.initialize();
class h extends n.PureComponent {
  componentDidMount() {
    (0, o.updateLocation)(this.props.location), this.stopListeningToHistory = (0, R.getHistory)().listen(e => {
      e.pathname.startsWith(g.Routes.APPLICATION_STORE) && (0, o.updateLocation)(e)
    }), this.props.isAuthenticated && (0, u.fetchPaymentSources)(), T.default.disable(), T.default.setLayout(E.APPLICATION_STORE_LAYOUT), T.default.enable(), (0, m.trackAppUIViewed)("application_store")
  }
  componentWillUnmount() {
    null != this.stopListeningToHistory && this.stopListeningToHistory(), T.default.disable(), T.default.setLayout(I.DEFAULT_LAYOUT), T.default.enable()
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
    }) : (0, a.jsx)(O, {
      className: P.applicationStore,
      location: t,
      render: this.renderContent
    });
    return (0, a.jsx)(S.default, {
      renderCustomMessage: this.renderCustomErrorMessage,
      children: s
    })
  }
  constructor(...e) {
    super(...e), this.renderStoreListing = e => {
      let {
        match: {
          params: {
            skuId: t,
            applicationId: s,
            slug: n
          }
        },
        location: r
      } = e, {
        width: l
      } = this.props, o = (0, i.parse)(r.search);
      return (0, a.jsx)(d.default, {
        page: g.AnalyticsPages.STORE_LISTING,
        root: !0,
        children: (0, a.jsx)(N.default, {
          skuId: t,
          applicationId: s,
          slug: n,
          location: r,
          storeListingId: o.store_listing_id,
          pageSize: M(l)
        })
      })
    }, this.renderContent = () => (0, a.jsxs)(r.Switch, {
      children: [(0, a.jsx)(r.Route, {
        path: g.Routes.APPLICATION_STORE,
        exact: !0,
        render: () => (0, a.jsx)(d.default, {
          page: g.AnalyticsPages.STORE_DIRECTORY_HOME,
          root: !0,
          children: (0, a.jsx)(A.default, {})
        })
      }), (0, a.jsx)(r.Route, {
        path: g.Routes.APPLICATION_STORE_LISTING_APPLICATION(":applicationId", ":slug"),
        render: this.renderStoreListing
      }), (0, a.jsx)(r.Route, {
        path: g.Routes.APPLICATION_STORE_LISTING_APPLICATION(":applicationId"),
        render: this.renderStoreListing
      }), (0, a.jsx)(r.Route, {
        path: g.Routes.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
        render: this.renderStoreListing
      }), (0, a.jsx)(r.Route, {
        path: g.Routes.APPLICATION_STORE_LISTING_SKU(":skuId"),
        render: this.renderStoreListing
      }), (0, a.jsx)(r.Redirect, {
        to: g.Routes.APP
      })]
    })
  }
}
var L = (0, r.withRouter)((0, c.default)((0, _.default)(h)))