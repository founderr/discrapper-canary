"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  i = s("55620"),
  r = s("294135");
class l extends n.Component {
  componentDidMount() {
    this.fetchStoreListing()
  }
  render() {
    let {
      skuId: e,
      applicationId: t,
      slug: s,
      storeListingId: n,
      pageSize: i,
      location: l
    } = this.props;
    return (0, a.jsx)(r.default, {
      inputSkuId: e,
      applicationId: t,
      fetchStoreListing: this.fetchStoreListing,
      slug: s,
      storeListingId: n,
      location: l,
      pageSize: i
    })
  }
  constructor(...e) {
    super(...e), this.fetchStoreListing = e => {
      let {
        storeListingId: t,
        skuId: s,
        applicationId: a
      } = this.props, n = null != e ? e : s;
      if (null != t) return (0, i.fetchStoreListingById)(t);
      if (null != n) return (0, i.fetchStoreListingForSku)(n);
      if (null != a) return (0, i.fetchStoreListingForApplication)(a)
    }
  }
}
var o = l