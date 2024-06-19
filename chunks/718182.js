var s, r, i, l, a = n(735250),
  o = n(470079),
  c = n(525654),
  u = n.n(c),
  d = n(442837),
  E = n(893776),
  _ = n(129293),
  h = n(388905),
  I = n(108427),
  p = n(314897),
  N = n(981631),
  g = n(689938),
  m = n(331651);
d.ZP.initialize();
class T extends(l = o.PureComponent) {
  componentDidMount() {
    let e = (0, _.Z)(this.props.location);
    null != e && E.Z.authorizeIPAddress(e), (0, I.e)("authorize_ip")
  }
  renderLoginButton() {
    if ("Android" === u().os.family || "iOS" === u().os.family) return null;
    let {
      transitionTo: e
    } = this.props;
    return (0, a.jsx)(h.zx, {
      onClick: () => e(N.Z5c.LOGIN),
      children: g.Z.Messages._LOGIN
    })
  }
  renderFailed() {
    return (0, a.jsxs)(h.ZP, {
      children: [(0, a.jsx)("img", {
        alt: "",
        src: n(211095),
        className: m.marginBottom20
      }), (0, a.jsx)(h.Dx, {
        className: m.marginBottom8,
        children: g.Z.Messages.AUTHORIZATION_EXPIRED
      }), (0, a.jsx)(h.DK, {
        className: m.marginBottom40,
        children: g.Z.Messages._AUTH_EXPIRED_SUGGESTION
      }), this.renderLoginButton()]
    })
  }
  renderSucceeded() {
    return (0, a.jsxs)(h.ZP, {
      children: [(0, a.jsx)("img", {
        alt: "",
        src: n(640356),
        className: m.marginBottom20
      }), (0, a.jsx)(h.Dx, {
        className: m.marginBottom8,
        children: g.Z.Messages.IP_AUTHORIZATION_SUCCEEDED
      }), (0, a.jsx)(h.DK, {
        className: m.marginBottom40,
        children: g.Z.Messages._AUTH_IP_AUTH_SUCCEEDED_SUGGESTION
      }), this.renderLoginButton()]
    })
  }
  renderDefault() {
    return (0, a.jsxs)(h.ZP, {
      children: [(0, a.jsx)(h.Hh, {}), (0, a.jsx)(h.Dx, {
        children: g.Z.Messages.AUTHORIZING
      })]
    })
  }
  render() {
    let {
      verifyFailed: e,
      verifySucceeded: t
    } = this.props;
    return e ? this.renderFailed() : t ? this.renderSucceeded() : this.renderDefault()
  }
}
s = T, r = "defaultProps", i = {
  transitionTo: e => n.g.location.assign(e)
}, r in s ? Object.defineProperty(s, r, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[r] = i, t.Z = d.ZP.connectStores([p.default], () => ({
  verifyFailed: p.default.didVerifyFail(),
  verifySucceeded: p.default.didVerifySucceed()
}))(T)