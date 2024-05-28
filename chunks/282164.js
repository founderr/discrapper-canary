"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("442837"),
  r = a("481060"),
  o = a("873115"),
  i = a("618541"),
  u = a("975060"),
  d = a("912454"),
  c = a("689938"),
  E = a("802632");
class m extends s.PureComponent {
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
t.default = l.default.connectStores([i.default, u.default], () => ({
  braintreeEmail: u.default.braintreeEmail,
  paypalClient: i.default.getPayPalClient()
}))(m)