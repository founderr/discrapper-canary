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
  p = a("376943");
class E extends s.PureComponent {
  componentDidMount() {
    null != this.props.venmoClient && o.tokenizeVenmo()
  }
  componentWillUnmount() {
    o.teardownVenmo().then(() => o.createVenmoClient())
  }
  render() {
    let {
      venmoUsername: e,
      className: t,
      venmoClient: a
    } = this.props, s = null != e && "" !== e;
    return (0, n.jsxs)("div", {
      className: t,
      children: [(0, n.jsx)(c.default, {
        type: c.default.Types.VENMO,
        size: c.IconSizes.MEDIUM,
        className: p.venmoIcon
      }), s ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(r.Heading, {
          variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
          className: p.connectionInstructions,
          children: d.default.Messages.PAYMENT_SOURCE_VENMO_CONNECTED_SUCCESS.format({
            venmoUsername: e
          })
        }), (0, n.jsx)(r.Text, {
          variant: "text-md/medium",
          className: p.connectionInstructions,
          children: d.default.Messages.PAYMENT_SOURCE_VENMO_CONNECTED_SUCCESS_INSTRUCTIONS
        })]
      }) : (0, n.jsx)(r.Text, {
        variant: "text-md/medium",
        className: p.connectionInstructions,
        children: null == a ? d.default.Messages.PAYMENT_SOURCE_VENMO_LOADING : d.default.Messages.PAYMENT_SOURCE_VENMO_CONNECTION_INSTRUCTIONS
      })]
    })
  }
}
t.default = l.default.connectStores([i.default, u.default], () => ({
  venmoUsername: u.default.venmoUsername,
  venmoClient: i.default.getVenmoClient()
}))(E)