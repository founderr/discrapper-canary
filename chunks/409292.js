"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("613828"),
  i = a("442837"),
  r = a("493683"),
  o = a("112724"),
  u = a("108427"),
  d = a("184107"),
  c = a("410575"),
  f = a("613311"),
  E = a("601564"),
  h = a("981631"),
  _ = a("314865");

function C(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
class m extends s.Component {
  componentDidMount() {
    this.fetchStoreListing(), (0, u.trackAppUIViewed)("channel_store_listing")
  }
  render() {
    return null != this.props.skuId ? (0, n.jsx)(c.default, {
      page: h.AnalyticsPages.CHANNEL_STORE_LISTING,
      root: !0,
      children: (0, n.jsx)("div", {
        className: _.applicationStore,
        children: (0, n.jsx)(l.Route, {
          path: "*",
          render: this.renderApplicationListing
        })
      })
    }) : null
  }
  constructor(...e) {
    super(...e), C(this, "fetchStoreListing", e => {
      let {
        channel: t,
        inputSkuId: a
      } = this.props;
      return null != e ? r.default.fetchChannelStoreListing(t.id, e) : null != a ? r.default.fetchChannelStoreListing(t.id, a) : r.default.fetchChannelStoreListing(t.id)
    }), C(this, "renderApplicationListing", e => {
      let {
        location: t
      } = e, {
        channel: a,
        skuId: s,
        width: l
      } = this.props;
      return (0, n.jsx)(f.default, {
        channel: a,
        inputSkuId: s,
        fetchStoreListing: this.fetchStoreListing,
        location: t,
        pageSize: (0, E.getPageSize)(l)
      })
    })
  }
}
t.default = (0, o.default)(i.default.connectStores([d.default], e => {
  let {
    channel: t,
    inputSkuId: a
  } = e;
  return {
    skuId: null != a ? a : d.default.getSkuIdForChannel(t.id)
  }
})(m))