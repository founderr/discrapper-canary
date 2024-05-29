"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("442837"),
  r = a("481060"),
  o = a("873115"),
  i = a("618541"),
  u = a("975060"),
  c = a("912454"),
  d = a("689938"),
  p = a("802632");
class E extends s.PureComponent {
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
      title: d.default.Messages.PAYMENT_SOURCE_PAYPAL_ACCOUNT,
      children: (0, n.jsxs)("div", {
        className: p.inputWrapper,
        children: [(0, n.jsx)(c.default, {
          type: c.default.Types.PAYPAL,
          className: p.paypalIcon
        }), (0, n.jsx)(r.TextInput, {
          value: e,
          editable: !1,
          readOnly: !0,
          placeholder: null == a ? d.default.Messages.PAYMENT_SOURCE_PAYPAL_LOADING : d.default.Messages.PAYMENT_SOURCE_CONFIRM_PAYPAL_DETAILS,
          inputClassName: p.paypalInput
        })]
      })
    })
  }
}
t.default = l.default.connectStores([i.default, u.default], () => ({
  braintreeEmail: u.default.braintreeEmail,
  paypalClient: i.default.getPayPalClient()
}))(E)