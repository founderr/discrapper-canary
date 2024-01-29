"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  n = s("55620"),
  l = s("294135");
class i extends r.Component {
  componentDidMount() {
    this.fetchStoreListing()
  }
  render() {
    let {
      skuId: e,
      applicationId: t,
      slug: s,
      storeListingId: r,
      pageSize: n,
      location: i
    } = this.props;
    return (0, a.jsx)(l.default, {
      inputSkuId: e,
      applicationId: t,
      fetchStoreListing: this.fetchStoreListing,
      slug: s,
      storeListingId: r,
      location: i,
      pageSize: n
    })
  }
  constructor(...e) {
    super(...e), this.fetchStoreListing = e => {
      let {
        storeListingId: t,
        skuId: s,
        applicationId: a
      } = this.props, r = null != e ? e : s;
      if (null != t) return (0, n.fetchStoreListingById)(t);
      if (null != r) return (0, n.fetchStoreListingForSku)(r);
      if (null != a) return (0, n.fetchStoreListingForApplication)(a)
    }
  }
}
var u = i