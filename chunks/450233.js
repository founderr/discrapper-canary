"use strict";
s.r(t), s.d(t, {
  MessageStyles: function() {
    return n
  }
});
var a, i, r, l, n, o, u = s("735250"),
  d = s("470079"),
  c = s("442837"),
  _ = s("570140"),
  E = s("16084"),
  C = s("855775"),
  f = s("689938");
(a = n || (n = {})).SHORT = "SHORT", a.LONG = "LONG";
class T extends(o = d.PureComponent) {
  getText(e, t) {
    if (429 === e.status) switch (t) {
      case "SHORT":
        return f.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT;
      case "LONG":
        return f.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR
    }
    switch (t) {
      case "SHORT":
        return f.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR_SHORT;
      case "LONG":
        return f.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR
    }
  }
  componentWillUnmount() {
    null != this.props.purchaseError && _.default.wait(() => E.clearPurchaseError())
  }
  render() {
    let {
      className: e,
      purchaseError: t,
      messageStyle: s
    } = this.props;
    return null == t ? null : (0, u.jsx)("div", {
      className: e,
      children: this.getText(t, s)
    })
  }
}
l = {
  messageStyle: "LONG"
}, (r = "defaultProps") in(i = T) ? Object.defineProperty(i, r, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = l, t.default = c.default.connectStores([C.default], () => ({
  purchaseError: C.default.error
}))(T)