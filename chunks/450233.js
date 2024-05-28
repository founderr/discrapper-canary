"use strict";
s.r(t), s.d(t, {
  MessageStyles: function() {
    return i
  }
});
var n, a, r, l, i, u, o = s("735250"),
  d = s("470079"),
  c = s("442837"),
  I = s("570140"),
  T = s("16084"),
  E = s("855775"),
  f = s("689938");
(n = i || (i = {})).SHORT = "SHORT", n.LONG = "LONG";
class _ extends(u = d.PureComponent) {
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
    null != this.props.purchaseError && I.default.wait(() => T.clearPurchaseError())
  }
  render() {
    let {
      className: e,
      purchaseError: t,
      messageStyle: s
    } = this.props;
    return null == t ? null : (0, o.jsx)("div", {
      className: e,
      children: this.getText(t, s)
    })
  }
}
l = {
  messageStyle: "LONG"
}, (r = "defaultProps") in(a = _) ? Object.defineProperty(a, r, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[r] = l, t.default = c.default.connectStores([E.default], () => ({
  purchaseError: E.default.error
}))(_)