"use strict";
s.r(t), s("47120");
var n = s("735250"),
  a = s("470079"),
  r = s("558381"),
  l = s("613311");
class i extends a.Component {
  componentDidMount() {
    this.fetchStoreListing()
  }
  render() {
    let {
      skuId: e,
      applicationId: t,
      slug: s,
      storeListingId: a,
      pageSize: r,
      location: i
    } = this.props;
    return (0, n.jsx)(l.default, {
      inputSkuId: e,
      applicationId: t,
      fetchStoreListing: this.fetchStoreListing,
      slug: s,
      storeListingId: a,
      location: i,
      pageSize: r
    })
  }
  constructor(...e) {
    var t, s, n;
    super(...e), t = this, s = "fetchStoreListing", n = e => {
      let {
        storeListingId: t,
        skuId: s,
        applicationId: n
      } = this.props, a = null != e ? e : s;
      if (null != t) return (0, r.fetchStoreListingById)(t);
      if (null != a) return (0, r.fetchStoreListingForSku)(a);
      if (null != n) return (0, r.fetchStoreListingForApplication)(n)
    }, s in t ? Object.defineProperty(t, s, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[s] = n
  }
}
t.default = i