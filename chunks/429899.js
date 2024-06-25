n(47120);
var s = n(735250),
  i = n(470079),
  l = n(558381),
  a = n(613311);
class r extends i.Component {
  componentDidMount() {
    this.fetchStoreListing()
  }
  render() {
    let {
      skuId: e,
      applicationId: t,
      slug: n,
      storeListingId: i,
      pageSize: l,
      location: r
    } = this.props;
    return (0, s.jsx)(a.Z, {
      inputSkuId: e,
      applicationId: t,
      fetchStoreListing: this.fetchStoreListing,
      slug: n,
      storeListingId: i,
      location: r,
      pageSize: l
    })
  }
  constructor(...e) {
    var t, n, s;
    super(...e), t = this, n = "fetchStoreListing", s = e => {
      let {
        storeListingId: t,
        skuId: n,
        applicationId: s
      } = this.props, i = null != e ? e : n;
      if (null != t) return (0, l.rV)(t);
      if (null != i) return (0, l.km)(i);
      if (null != s) return (0, l.Hq)(s)
    }, n in t ? Object.defineProperty(t, n, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = s
  }
}
t.Z = r