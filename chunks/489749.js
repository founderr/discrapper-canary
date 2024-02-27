"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
}), s("222007");
var a = s("37983"),
  i = s("884691"),
  r = s("55620"),
  n = s("294135");
class l extends i.Component {
  componentDidMount() {
    this.fetchStoreListing()
  }
  render() {
    let {
      skuId: e,
      applicationId: t,
      slug: s,
      storeListingId: i,
      pageSize: r,
      location: l
    } = this.props;
    return (0, a.jsx)(n.default, {
      inputSkuId: e,
      applicationId: t,
      fetchStoreListing: this.fetchStoreListing,
      slug: s,
      storeListingId: i,
      location: l,
      pageSize: r
    })
  }
  constructor(...e) {
    super(...e), this.fetchStoreListing = e => {
      let {
        storeListingId: t,
        skuId: s,
        applicationId: a
      } = this.props, i = null != e ? e : s;
      if (null != t) return (0, r.fetchStoreListingById)(t);
      if (null != i) return (0, r.fetchStoreListingForSku)(i);
      if (null != a) return (0, r.fetchStoreListingForApplication)(a)
    }
  }
}
var o = l