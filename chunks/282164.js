var n = t(735250),
  s = t(470079),
  l = t(442837),
  r = t(481060),
  o = t(873115),
  i = t(618541),
  c = t(975060),
  u = t(912454),
  E = t(689938),
  d = t(998183);
class A extends s.PureComponent {
  componentDidMount() {
    null != this.props.paypalClient && o.f6()
  }
  componentWillUnmount() {
    o.Nj().then(() => o.Dz())
  }
  render() {
    let {
      braintreeEmail: e,
      className: a,
      paypalClient: t
    } = this.props;
    return (0, n.jsx)(r.FormSection, {
      className: a,
      title: E.Z.Messages.PAYMENT_SOURCE_PAYPAL_ACCOUNT,
      children: (0, n.jsxs)("div", {
        className: d.inputWrapper,
        children: [(0, n.jsx)(u.ZP, {
          type: u.ZP.Types.PAYPAL,
          className: d.paypalIcon
        }), (0, n.jsx)(r.TextInput, {
          value: e,
          editable: !1,
          readOnly: !0,
          placeholder: null == t ? E.Z.Messages.PAYMENT_SOURCE_PAYPAL_LOADING : E.Z.Messages.PAYMENT_SOURCE_CONFIRM_PAYPAL_DETAILS,
          inputClassName: d.paypalInput
        })]
      })
    })
  }
}
a.Z = l.ZP.connectStores([i.Z, c.Z], () => ({
  braintreeEmail: c.Z.braintreeEmail,
  paypalClient: i.Z.getPayPalClient()
}))(A)