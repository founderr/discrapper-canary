n.r(s);
var t = n(735250),
  l = n(470079),
  o = n(512722),
  a = n.n(o),
  r = n(442837),
  i = n(233787),
  c = n(594174),
  d = n(74538),
  u = n(689938);
class E extends l.Component {
  render() {
    let {
      user: e,
      transitionState: s,
      onClose: n
    } = this.props;
    return (0, t.jsxs)(i.Z, {
      transitionState: s,
      "aria-label": u.Z.Messages.PREMIUM_REQUIRED,
      children: [(0, t.jsx)(i.Z.Header, {
        onClose: () => n(!1),
        children: u.Z.Messages.PREMIUM_REQUIRED
      }), (0, t.jsx)(i.Z.Content, {
        type: i.Z.Types.UPGRADE,
        children: d.ZP.isPremium(e) && !d.ZP.canInstallPremiumApplications(e) ? u.Z.Messages.PREMIUM_UPGRADE_REQUIRED_BODY : u.Z.Messages.PREMIUM_SUBSCRIPTION_REQUIRED_BODY
      }), (0, t.jsx)(i.Z.Footer, {
        primary: {
          onClick: () => n(!0),
          label: u.Z.Messages.PREMIUM_REQUIRED_GET_NITRO
        }
      })]
    })
  }
}
s.default = r.ZP.connectStores([c.default], () => {
  let e = c.default.getCurrentUser();
  return a()(null != e, "PremiumRequiredModal: user cannot be null"), {
    user: e
  }
})(E)