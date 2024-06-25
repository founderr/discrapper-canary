n(653041), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(481060),
  r = n(16084),
  o = n(730749),
  c = n(812206),
  u = n(984370),
  d = n(703656),
  E = n(55563),
  h = n(981631),
  _ = n(30284);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class m extends i.PureComponent {
  componentDidMount() {
    let {
      sku: e,
      primarySkuId: t,
      isFetchingPrimarySku: n
    } = this.props;
    null != t && !n && null != e && (0, r.$N)(e.applicationId, t)
  }
  render() {
    let {
      sku: e,
      primarySku: t
    } = this.props, n = [], i = null;
    if (null != e) {
      let s = h.Z5c.APPLICATION_STORE_LISTING_SKU(e.id, e.slug);
      i = s, null != t && n.push({
        id: h.Z5c.APPLICATION_STORE_LISTING_SKU(t.id, t.slug),
        label: t.name
      }), n.push({
        id: s,
        label: e.name
      })
    }
    return (0, s.jsx)(a.Breadcrumbs, {
      renderCustomBreadcrumb: this.renderCustomBreadcrumb,
      onBreadcrumbClick: this.handleClick,
      breadcrumbs: n,
      activeId: i
    })
  }
  constructor(...e) {
    super(...e), I(this, "handleClick", e => {
      let {
        sku: t
      } = this.props;
      (0, d.uL)(e.id, {
        state: {
          analyticsSource: {
            object: h.qAy.NAVIGATION_LINK,
            section: h.jXE.NAVIGATION,
            page: null == t ? h.ZY5.STORE_DIRECTORY_BROWSE : h.ZY5.STORE_LISTING
          }
        }
      })
    }), I(this, "renderCustomBreadcrumb", (e, t) => (0, s.jsx)(u.Z.Title, {
      className: t ? null : _.breadcrumb,
      muted: !t,
      children: e.label
    }))
  }
}
t.Z = (0, o.Z)(l.ZP.connectStores([c.Z, E.Z], e => {
  let {
    sku: t
  } = e, n = null != t ? c.Z.getApplication(t.applicationId) : null, s = null != n && null != n.primarySkuId && n.primarySkuId !== t.id ? n.primarySkuId : null;
  return {
    primarySkuId: s,
    isFetchingPrimarySku: null != s && E.Z.isFetching(s),
    primarySku: null != s ? E.Z.get(s) : null
  }
})(m))