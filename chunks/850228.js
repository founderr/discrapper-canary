var n = t(735250),
  s = t(470079),
  l = t(442837),
  r = t(481060),
  o = t(975060),
  i = t(912454),
  c = t(559725),
  u = t(439041),
  d = t(689938),
  E = t(260628);
class A extends s.PureComponent {
  componentDidMount() {
    null == this.props.adyenPaymentData && c.cp()
  }
  render() {
    var e, a;
    let {
      className: t,
      cashAppPayComponent: s
    } = this.props, l = this.props.adyenPaymentData, o = null !== (a = null == l ? void 0 : null === (e = l.paymentMethod) || void 0 === e ? void 0 : e.cashtag) && void 0 !== a ? a : "", c = null != l && "" !== o;
    return (0, n.jsxs)("div", {
      className: t,
      children: [(0, n.jsx)(i.ZP, {
        type: i.ZP.Types.CASH_APP,
        size: i.Uy.MEDIUM,
        className: E.icon
      }), c ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(r.Heading, {
          variant: o.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
          className: E.connectionInstructions,
          children: d.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY_CONNECTED_SUCCESS.format({
            cashtag: o
          })
        }), (0, n.jsx)(r.Text, {
          variant: "text-md/medium",
          className: E.connectionInstructions,
          children: d.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY_CONNECTED_SUCCESS_INSTRUCTIONS
        })]
      }) : (0, n.jsx)(r.Text, {
        variant: "text-md/medium",
        className: E.connectionInstructions,
        children: null == s ? d.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY_LOADING : d.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY_CONNECTION_INSTRUCTIONS
      })]
    })
  }
}
a.Z = l.ZP.connectStores([u.Z, o.Z], () => ({
  cashAppPayComponent: u.Z.cashAppPayComponent,
  adyenPaymentData: o.Z.adyenPaymentData
}))(A)