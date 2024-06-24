var n = t(735250),
  s = t(470079),
  l = t(442837),
  r = t(481060),
  o = t(873115),
  i = t(618541),
  c = t(975060),
  u = t(912454),
  E = t(689938),
  d = t(981853);
class A extends s.PureComponent {
  componentDidMount() {
    null != this.props.venmoClient && o.by()
  }
  componentWillUnmount() {
    o.RS().then(() => o.ib())
  }
  render() {
    let {
      venmoUsername: e,
      className: a,
      venmoClient: t
    } = this.props, s = null != e && "" !== e;
    return (0, n.jsxs)("div", {
      className: a,
      children: [(0, n.jsx)(u.ZP, {
        type: u.ZP.Types.VENMO,
        size: u.Uy.MEDIUM,
        className: d.venmoIcon
      }), s ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(r.Heading, {
          variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
          className: d.connectionInstructions,
          children: E.Z.Messages.PAYMENT_SOURCE_VENMO_CONNECTED_SUCCESS.format({
            venmoUsername: e
          })
        }), (0, n.jsx)(r.Text, {
          variant: "text-md/medium",
          className: d.connectionInstructions,
          children: E.Z.Messages.PAYMENT_SOURCE_VENMO_CONNECTED_SUCCESS_INSTRUCTIONS
        })]
      }) : (0, n.jsx)(r.Text, {
        variant: "text-md/medium",
        className: d.connectionInstructions,
        children: null == t ? E.Z.Messages.PAYMENT_SOURCE_VENMO_LOADING : E.Z.Messages.PAYMENT_SOURCE_VENMO_CONNECTION_INSTRUCTIONS
      })]
    })
  }
}
a.Z = l.ZP.connectStores([i.Z, c.Z], () => ({
  venmoUsername: c.Z.venmoUsername,
  venmoClient: i.Z.getVenmoClient()
}))(A)