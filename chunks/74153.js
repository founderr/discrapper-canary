"use strict";
s.r(t), s("653041"), s("47120");
var n = s("735250"),
  a = s("470079"),
  r = s("442837"),
  l = s("16084"),
  i = s("730749"),
  u = s("812206"),
  o = s("984370"),
  d = s("703656"),
  c = s("55563"),
  I = s("66579"),
  T = s("981631"),
  E = s("62039");

function f(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class _ extends a.PureComponent {
  componentDidMount() {
    let {
      sku: e,
      primarySkuId: t,
      isFetchingPrimarySku: s
    } = this.props;
    null != t && !s && null != e && (0, l.fetchPublishedSKU)(e.applicationId, t)
  }
  render() {
    let {
      sku: e,
      primarySku: t
    } = this.props, s = [], a = null;
    if (null != e) {
      let n = T.Routes.APPLICATION_STORE_LISTING_SKU(e.id, e.slug);
      a = n, null != t && s.push({
        id: T.Routes.APPLICATION_STORE_LISTING_SKU(t.id, t.slug),
        label: t.name
      }), s.push({
        id: n,
        label: e.name
      })
    }
    return (0, n.jsx)(I.default, {
      renderCustomBreadcrumb: this.renderCustomBreadcrumb,
      onBreadcrumbClick: this.handleClick,
      breadcrumbs: s,
      activeId: a
    })
  }
  constructor(...e) {
    super(...e), f(this, "handleClick", e => {
      let {
        sku: t
      } = this.props;
      (0, d.transitionTo)(e.id, {
        state: {
          analyticsSource: {
            object: T.AnalyticsObjects.NAVIGATION_LINK,
            section: T.AnalyticsSections.NAVIGATION,
            page: null == t ? T.AnalyticsPages.STORE_DIRECTORY_BROWSE : T.AnalyticsPages.STORE_LISTING
          }
        }
      })
    }), f(this, "renderCustomBreadcrumb", (e, t) => (0, n.jsx)(o.default.Title, {
      className: t ? null : E.breadcrumb,
      muted: !t,
      children: e.label
    }))
  }
}
t.default = (0, i.default)(r.default.connectStores([u.default, c.default], e => {
  let {
    sku: t
  } = e, s = null != t ? u.default.getApplication(t.applicationId) : null, n = null != s && null != s.primarySkuId && s.primarySkuId !== t.id ? s.primarySkuId : null;
  return {
    primarySkuId: n,
    isFetchingPrimarySku: null != n && c.default.isFetching(n),
    primarySku: null != n ? c.default.get(n) : null
  }
})(_))