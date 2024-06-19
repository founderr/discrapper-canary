t.d(s, {
  G: function() {
    return l
  }
});
var n, r, i, a, l, o, c = t(735250),
  u = t(470079),
  I = t(442837),
  T = t(570140),
  d = t(16084),
  _ = t(855775),
  E = t(689938);
(n = l || (l = {})).SHORT = "SHORT", n.LONG = "LONG";
class S extends(o = u.PureComponent) {
  getText(e, s) {
    if (429 === e.status) switch (s) {
      case "SHORT":
        return E.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT;
      case "LONG":
        return E.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR
    }
    switch (s) {
      case "SHORT":
        return E.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR_SHORT;
      case "LONG":
        return E.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR
    }
  }
  componentWillUnmount() {
    null != this.props.purchaseError && T.Z.wait(() => d.pB())
  }
  render() {
    let {
      className: e,
      purchaseError: s,
      messageStyle: t
    } = this.props;
    return null == s ? null : (0, c.jsx)("div", {
      className: e,
      children: this.getText(s, t)
    })
  }
}
a = {
  messageStyle: "LONG"
}, (i = "defaultProps") in(r = S) ? Object.defineProperty(r, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[i] = a, s.Z = I.ZP.connectStores([_.Z], () => ({
  purchaseError: _.Z.error
}))(S)