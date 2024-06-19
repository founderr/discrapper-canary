t(653041), t(47120);
var n = t(735250),
  r = t(470079),
  i = t(442837),
  a = t(481060),
  l = t(16084),
  o = t(730749),
  c = t(812206),
  u = t(984370),
  I = t(703656),
  T = t(55563),
  d = t(981631),
  _ = t(30284);

function E(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
class S extends r.PureComponent {
  componentDidMount() {
    let {
      sku: e,
      primarySkuId: s,
      isFetchingPrimarySku: t
    } = this.props;
    null != s && !t && null != e && (0, l.$N)(e.applicationId, s)
  }
  render() {
    let {
      sku: e,
      primarySku: s
    } = this.props, t = [], r = null;
    if (null != e) {
      let n = d.Z5c.APPLICATION_STORE_LISTING_SKU(e.id, e.slug);
      r = n, null != s && t.push({
        id: d.Z5c.APPLICATION_STORE_LISTING_SKU(s.id, s.slug),
        label: s.name
      }), t.push({
        id: n,
        label: e.name
      })
    }
    return (0, n.jsx)(a.Breadcrumbs, {
      renderCustomBreadcrumb: this.renderCustomBreadcrumb,
      onBreadcrumbClick: this.handleClick,
      breadcrumbs: t,
      activeId: r
    })
  }
  constructor(...e) {
    super(...e), E(this, "handleClick", e => {
      let {
        sku: s
      } = this.props;
      (0, I.uL)(e.id, {
        state: {
          analyticsSource: {
            object: d.qAy.NAVIGATION_LINK,
            section: d.jXE.NAVIGATION,
            page: null == s ? d.ZY5.STORE_DIRECTORY_BROWSE : d.ZY5.STORE_LISTING
          }
        }
      })
    }), E(this, "renderCustomBreadcrumb", (e, s) => (0, n.jsx)(u.Z.Title, {
      className: s ? null : _.breadcrumb,
      muted: !s,
      children: e.label
    }))
  }
}
s.Z = (0, o.Z)(i.ZP.connectStores([c.Z, T.Z], e => {
  let {
    sku: s
  } = e, t = null != s ? c.Z.getApplication(s.applicationId) : null, n = null != t && null != t.primarySkuId && t.primarySkuId !== s.id ? t.primarySkuId : null;
  return {
    primarySkuId: n,
    isFetchingPrimarySku: null != n && T.Z.isFetching(n),
    primarySku: null != n ? T.Z.get(n) : null
  }
})(S))