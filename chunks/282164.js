"use strict";
a.r(t);
var n = a("735250"),
  l = a("470079"),
  s = a("442837"),
  r = a("481060"),
  o = a("873115"),
  u = a("618541"),
  i = a("975060"),
  d = a("912454"),
  c = a("689938"),
  E = a("278518");
class p extends l.PureComponent {
  componentDidMount() {
    null != this.props.paypalClient && o.tokenizePayPal()
  }
  componentWillUnmount() {
    o.teardownPaypal().then(() => o.createPayPalClient())
  }
  render() {
    let {
      braintreeEmail: e,
      className: t,
      paypalClient: a
    } = this.props;
    return (0, n.jsx)(r.FormSection, {
      className: t,
      title: c.default.Messages.PAYMENT_SOURCE_PAYPAL_ACCOUNT,
      children: (0, n.jsxs)("div", {
        className: E.inputWrapper,
        children: [(0, n.jsx)(d.default, {
          type: d.default.Types.PAYPAL,
          className: E.paypalIcon
        }), (0, n.jsx)(r.TextInput, {
          value: e,
          editable: !1,
          readOnly: !0,
          placeholder: null == a ? c.default.Messages.PAYMENT_SOURCE_PAYPAL_LOADING : c.default.Messages.PAYMENT_SOURCE_CONFIRM_PAYPAL_DETAILS,
          inputClassName: E.paypalInput
        })]
      })
    })
  }
}
t.default = s.default.connectStores([u.default, i.default], () => ({
  braintreeEmail: i.default.braintreeEmail,
  paypalClient: u.default.getPayPalClient()
}))(p)