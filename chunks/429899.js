t(47120);
var n = t(735250),
  r = t(470079),
  i = t(558381),
  a = t(613311);
class l extends r.Component {
  componentDidMount() {
    this.fetchStoreListing()
  }
  render() {
    let {
      skuId: e,
      applicationId: s,
      slug: t,
      storeListingId: r,
      pageSize: i,
      location: l
    } = this.props;
    return (0, n.jsx)(a.Z, {
      inputSkuId: e,
      applicationId: s,
      fetchStoreListing: this.fetchStoreListing,
      slug: t,
      storeListingId: r,
      location: l,
      pageSize: i
    })
  }
  constructor(...e) {
    var s, t, n;
    super(...e), s = this, t = "fetchStoreListing", n = e => {
      let {
        storeListingId: s,
        skuId: t,
        applicationId: n
      } = this.props, r = null != e ? e : t;
      if (null != s) return (0, i.rV)(s);
      if (null != r) return (0, i.km)(r);
      if (null != n) return (0, i.Hq)(n)
    }, t in s ? Object.defineProperty(s, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : s[t] = n
  }
}
s.Z = l