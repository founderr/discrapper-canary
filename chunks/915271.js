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
  E = a("364762");
class p extends l.PureComponent {
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
    } = this.props, l = null != e && "" !== e;
    return (0, n.jsxs)("div", {
      className: t,
      children: [(0, n.jsx)(d.default, {
        type: d.default.Types.VENMO,
        size: d.IconSizes.MEDIUM,
        className: E.venmoIcon
      }), l ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(r.Heading, {
          variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
          className: E.connectionInstructions,
          children: c.default.Messages.PAYMENT_SOURCE_VENMO_CONNECTED_SUCCESS.format({
            venmoUsername: e
          })
        }), (0, n.jsx)(r.Text, {
          variant: "text-md/medium",
          className: E.connectionInstructions,
          children: c.default.Messages.PAYMENT_SOURCE_VENMO_CONNECTED_SUCCESS_INSTRUCTIONS
        })]
      }) : (0, n.jsx)(r.Text, {
        variant: "text-md/medium",
        className: E.connectionInstructions,
        children: null == a ? c.default.Messages.PAYMENT_SOURCE_VENMO_LOADING : c.default.Messages.PAYMENT_SOURCE_VENMO_CONNECTION_INSTRUCTIONS
      })]
    })
  }
}
t.default = s.default.connectStores([u.default, i.default], () => ({
  venmoUsername: i.default.venmoUsername,
  venmoClient: u.default.getVenmoClient()
}))(p)