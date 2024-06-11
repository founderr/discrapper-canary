"use strict";
s.r(t), s("653041"), s("47120");
var n = s("735250"),
  a = s("470079"),
  r = s("442837"),
  l = s("481060"),
  i = s("16084"),
  u = s("730749"),
  o = s("812206"),
  d = s("984370"),
  c = s("703656"),
  I = s("55563"),
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
    null != t && !s && null != e && (0, i.fetchPublishedSKU)(e.applicationId, t)
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
    return (0, n.jsx)(l.Breadcrumbs, {
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
      (0, c.transitionTo)(e.id, {
        state: {
          analyticsSource: {
            object: T.AnalyticsObjects.NAVIGATION_LINK,
            section: T.AnalyticsSections.NAVIGATION,
            page: null == t ? T.AnalyticsPages.STORE_DIRECTORY_BROWSE : T.AnalyticsPages.STORE_LISTING
          }
        }
      })
    }), f(this, "renderCustomBreadcrumb", (e, t) => (0, n.jsx)(d.default.Title, {
      className: t ? null : E.breadcrumb,
      muted: !t,
      children: e.label
    }))
  }
}
t.default = (0, u.default)(r.default.connectStores([o.default, I.default], e => {
  let {
    sku: t
  } = e, s = null != t ? o.default.getApplication(t.applicationId) : null, n = null != s && null != s.primarySkuId && s.primarySkuId !== t.id ? s.primarySkuId : null;
  return {
    primarySkuId: n,
    isFetchingPrimarySku: null != n && I.default.isFetching(n),
    primarySku: null != n ? I.default.get(n) : null
  }
})(_))