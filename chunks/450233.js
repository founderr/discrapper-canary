n.d(t, {
  G: function() {
    return r
  }
});
var s, i, l, a, r, o, c = n(735250),
  u = n(470079),
  d = n(442837),
  E = n(570140),
  h = n(16084),
  _ = n(855775),
  I = n(689938);
(s = r || (r = {})).SHORT = "SHORT", s.LONG = "LONG";
class m extends(o = u.PureComponent) {
  getText(e, t) {
    if (429 === e.status) switch (t) {
      case "SHORT":
        return I.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT;
      case "LONG":
        return I.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR
    }
    switch (t) {
      case "SHORT":
        return I.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR_SHORT;
      case "LONG":
        return I.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR
    }
  }
  componentWillUnmount() {
    null != this.props.purchaseError && E.Z.wait(() => h.pB())
  }
  render() {
    let {
      className: e,
      purchaseError: t,
      messageStyle: n
    } = this.props;
    return null == t ? null : (0, c.jsx)("div", {
      className: e,
      children: this.getText(t, n)
    })
  }
}
a = {
  messageStyle: "LONG"
}, (l = "defaultProps") in(i = m) ? Object.defineProperty(i, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[l] = a, t.Z = d.ZP.connectStores([_.Z], () => ({
  purchaseError: _.Z.error
}))(m)