n(47120);
var s, i = n(735250),
  r = n(470079),
  a = n(120356),
  l = n.n(a),
  o = n(442837),
  c = n(893776),
  u = n(129293),
  d = n(388905),
  _ = n(17894),
  E = n(108427),
  I = n(314897),
  h = n(626135),
  p = n(981631),
  g = n(689938),
  f = n(870941),
  N = n(331651);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
o.ZP.initialize();
class T extends(s = r.PureComponent) {
  componentDidMount() {
    this.handleVerify(), (0, E.e)("verify_email")
  }
  renderVerifyFailed() {
    return (0, i.jsxs)(d.ZP, {
      children: [(0, i.jsx)(d.Ee, {
        src: n(375673),
        className: l()(f.image, N.marginBottom20)
      }), (0, i.jsx)(d.Dx, {
        className: N.marginBottom8,
        children: g.Z.Messages.VERFICATION_EXPIRED
      }), (0, i.jsx)(d.DK, {
        className: N.marginBottom40,
        children: g.Z.Messages._AUTH_VERFICATION_EXPIRED_SUGGESTION
      }), (0, i.jsx)(d.zx, {
        onClick: this.handleLogin,
        children: g.Z.Messages._LOGIN
      })]
    })
  }
  renderVerifySucceeded() {
    return (0, i.jsxs)(d.ZP, {
      children: [(0, i.jsx)(d.Ee, {
        src: n(73962),
        className: l()(f.image, N.marginBottom20)
      }), (0, i.jsx)(d.Dx, {
        className: N.marginBottom40,
        children: g.Z.Messages.VERIFICATION_VERIFIED
      }), (0, i.jsx)(d.zx, {
        onClick: this.handleOpenApp,
        children: g.Z.Messages.VERIFICATION_OPEN_DISCORD
      })]
    })
  }
  renderVerifying() {
    return (0, i.jsxs)(d.ZP, {
      children: [(0, i.jsx)(d.Ee, {
        src: n(892235),
        className: l()(f.image, N.marginBottom20)
      }), (0, i.jsx)(d.Dx, {
        className: N.marginBottom8,
        children: g.Z.Messages.VERIFICATION_VERIFYING
      }), (0, i.jsx)(d.DK, {
        className: N.marginBottom40,
        children: g.Z.Messages.ACTION_MAY_TAKE_A_MOMENT
      }), (0, i.jsx)(d.zx, {
        submitting: !0,
        color: d.zx.Colors.PRIMARY
      })]
    })
  }
  render() {
    let {
      verifyFailed: e,
      verifySucceeded: t
    } = this.props;
    return e ? this.renderVerifyFailed() : t ? this.renderVerifySucceeded() : this.renderVerifying()
  }
  constructor(...e) {
    super(...e), m(this, "handleVerify", () => {
      let e = (0, u.Z)(this.props.location);
      null != e && c.Z.verify(e)
    }), m(this, "handleLogin", () => {
      let {
        transitionTo: e
      } = this.props;
      e(p.Z5c.LOGIN)
    }), m(this, "handleOpenApp", () => {
      let {
        verifyingUserId: e
      } = this.props;
      h.default.track(p.rMx.VERIFY_ACCOUNT_APP_OPENED, {
        verifying_user_id: e
      }), (0, _.Z)("verify_email")
    })
  }
}
m(T, "defaultProps", {
  transitionTo: e => n.g.location.assign(e)
}), t.Z = o.ZP.connectStores([I.default], () => ({
  verifyFailed: I.default.didVerifyFail(),
  verifyErrors: I.default.getVerifyErrors(),
  verifySucceeded: I.default.didVerifySucceed(),
  fingerprint: I.default.getFingerprint(),
  verifyingUserId: I.default.getVerifyingUserId()
}))(T)