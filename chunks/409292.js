n(47120);
var i = n(735250),
  s = n(470079),
  l = n(266067),
  a = n(442837),
  r = n(493683),
  o = n(112724),
  c = n(108427),
  u = n(184107),
  d = n(410575),
  E = n(613311),
  h = n(601564),
  _ = n(981631),
  I = n(595115);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class g extends s.Component {
  componentDidMount() {
    this.fetchStoreListing(), (0, c.e)("channel_store_listing")
  }
  render() {
    return null != this.props.skuId ? (0, i.jsx)(d.Z, {
      page: _.ZY5.CHANNEL_STORE_LISTING,
      root: !0,
      children: (0, i.jsx)("div", {
        className: I.applicationStore,
        children: (0, i.jsx)(l.AW, {
          path: "*",
          render: this.renderApplicationListing
        })
      })
    }) : null
  }
  constructor(...e) {
    super(...e), m(this, "fetchStoreListing", e => {
      let {
        channel: t,
        inputSkuId: n
      } = this.props;
      return null != e ? r.Z.fetchChannelStoreListing(t.id, e) : null != n ? r.Z.fetchChannelStoreListing(t.id, n) : r.Z.fetchChannelStoreListing(t.id)
    }), m(this, "renderApplicationListing", e => {
      let {
        location: t
      } = e, {
        channel: n,
        skuId: s,
        width: l
      } = this.props;
      return (0, i.jsx)(E.Z, {
        channel: n,
        inputSkuId: s,
        fetchStoreListing: this.fetchStoreListing,
        location: t,
        pageSize: (0, h.getPageSize)(l)
      })
    })
  }
}
t.Z = (0, o.Z)(a.ZP.connectStores([u.Z], e => {
  let {
    channel: t,
    inputSkuId: n
  } = e;
  return {
    skuId: null != n ? n : u.Z.getSkuIdForChannel(t.id)
  }
})(g))