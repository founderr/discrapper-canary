var s, i, r, a, l = n(735250),
  o = n(470079),
  c = n(525654),
  u = n.n(c),
  d = n(442837),
  _ = n(893776),
  E = n(129293),
  I = n(388905),
  h = n(108427),
  p = n(314897),
  g = n(981631),
  f = n(689938),
  N = n(331651);
d.ZP.initialize();
class m extends(a = o.PureComponent) {
  componentDidMount() {
    let e = (0, E.Z)(this.props.location);
    null != e && _.Z.authorizeIPAddress(e), (0, h.e)("authorize_ip")
  }
  renderLoginButton() {
    if ("Android" === u().os.family || "iOS" === u().os.family) return null;
    let {
      transitionTo: e
    } = this.props;
    return (0, l.jsx)(I.zx, {
      onClick: () => e(g.Z5c.LOGIN),
      children: f.Z.Messages._LOGIN
    })
  }
  renderFailed() {
    return (0, l.jsxs)(I.ZP, {
      children: [(0, l.jsx)("img", {
        alt: "",
        src: n(211095),
        className: N.marginBottom20
      }), (0, l.jsx)(I.Dx, {
        className: N.marginBottom8,
        children: f.Z.Messages.AUTHORIZATION_EXPIRED
      }), (0, l.jsx)(I.DK, {
        className: N.marginBottom40,
        children: f.Z.Messages._AUTH_EXPIRED_SUGGESTION
      }), this.renderLoginButton()]
    })
  }
  renderSucceeded() {
    return (0, l.jsxs)(I.ZP, {
      children: [(0, l.jsx)("img", {
        alt: "",
        src: n(640356),
        className: N.marginBottom20
      }), (0, l.jsx)(I.Dx, {
        className: N.marginBottom8,
        children: f.Z.Messages.IP_AUTHORIZATION_SUCCEEDED
      }), (0, l.jsx)(I.DK, {
        className: N.marginBottom40,
        children: f.Z.Messages._AUTH_IP_AUTH_SUCCEEDED_SUGGESTION
      }), this.renderLoginButton()]
    })
  }
  renderDefault() {
    return (0, l.jsxs)(I.ZP, {
      children: [(0, l.jsx)(I.Hh, {}), (0, l.jsx)(I.Dx, {
        children: f.Z.Messages.AUTHORIZING
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
s = m, i = "defaultProps", r = {
  transitionTo: e => n.g.location.assign(e)
}, i in s ? Object.defineProperty(s, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = r, t.Z = d.ZP.connectStores([p.default], () => ({
  verifyFailed: p.default.didVerifyFail(),
  verifySucceeded: p.default.didVerifySucceed()
}))(m)