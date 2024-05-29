"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("442837"),
  r = a("481060"),
  o = a("975060"),
  i = a("912454"),
  u = a("559725"),
  c = a("439041"),
  d = a("689938"),
  p = a("142520");
class E extends s.PureComponent {
  componentDidMount() {
    null == this.props.adyenPaymentData && u.reopenCashAppPayWindow()
  }
  render() {
    var e, t;
    let {
      className: a,
      cashAppPayComponent: s
    } = this.props, l = this.props.adyenPaymentData, o = null !== (t = null == l ? void 0 : null === (e = l.paymentMethod) || void 0 === e ? void 0 : e.cashtag) && void 0 !== t ? t : "", u = null != l && "" !== o;
    return (0, n.jsxs)("div", {
      className: a,
      children: [(0, n.jsx)(i.default, {
        type: i.default.Types.CASH_APP,
        size: i.IconSizes.MEDIUM,
        className: p.icon
      }), u ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(r.Heading, {
          variant: o.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
          className: p.connectionInstructions,
          children: d.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY_CONNECTED_SUCCESS.format({
            cashtag: o
          })
        }), (0, n.jsx)(r.Text, {
          variant: "text-md/medium",
          className: p.connectionInstructions,
          children: d.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY_CONNECTED_SUCCESS_INSTRUCTIONS
        })]
      }) : (0, n.jsx)(r.Text, {
        variant: "text-md/medium",
        className: p.connectionInstructions,
        children: null == s ? d.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY_LOADING : d.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY_CONNECTION_INSTRUCTIONS
      })]
    })
  }
}
t.default = l.default.connectStores([c.default, o.default], () => ({
  cashAppPayComponent: c.default.cashAppPayComponent,
  adyenPaymentData: o.default.adyenPaymentData
}))(E)