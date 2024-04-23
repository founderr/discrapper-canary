"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("558381"),
  n = s("613311");
class l extends r.Component {
  componentDidMount() {
    this.fetchStoreListing()
  }
  render() {
    let {
      skuId: e,
      applicationId: t,
      slug: s,
      storeListingId: r,
      pageSize: i,
      location: l
    } = this.props;
    return (0, a.jsx)(n.default, {
      inputSkuId: e,
      applicationId: t,
      fetchStoreListing: this.fetchStoreListing,
      slug: s,
      storeListingId: r,
      location: l,
      pageSize: i
    })
  }
  constructor(...e) {
    var t, s, a;
    super(...e), t = this, s = "fetchStoreListing", a = e => {
      let {
        storeListingId: t,
        skuId: s,
        applicationId: a
      } = this.props, r = null != e ? e : s;
      if (null != t) return (0, i.fetchStoreListingById)(t);
      if (null != r) return (0, i.fetchStoreListingForSku)(r);
      if (null != a) return (0, i.fetchStoreListingForApplication)(a)
    }, s in t ? Object.defineProperty(t, s, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[s] = a
  }
}
t.default = l