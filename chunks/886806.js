n(47120);
var s, r = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  o = n(442837),
  c = n(893776),
  u = n(129293),
  d = n(388905),
  E = n(17894),
  _ = n(108427),
  I = n(314897),
  h = n(626135),
  N = n(981631),
  p = n(689938),
  g = n(870941),
  m = n(331651);

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
o.ZP.initialize();
class Z extends(s = i.PureComponent) {
  componentDidMount() {
    this.handleVerify(), (0, _.e)("verify_email")
  }
  renderVerifyFailed() {
    return (0, r.jsxs)(d.ZP, {
      children: [(0, r.jsx)(d.Ee, {
        src: n(375673),
        className: a()(g.image, m.marginBottom20)
      }), (0, r.jsx)(d.Dx, {
        className: m.marginBottom8,
        children: p.Z.Messages.VERFICATION_EXPIRED
      }), (0, r.jsx)(d.DK, {
        className: m.marginBottom40,
        children: p.Z.Messages._AUTH_VERFICATION_EXPIRED_SUGGESTION
      }), (0, r.jsx)(d.zx, {
        onClick: this.handleLogin,
        children: p.Z.Messages._LOGIN
      })]
    })
  }
  renderVerifySucceeded() {
    return (0, r.jsxs)(d.ZP, {
      children: [(0, r.jsx)(d.Ee, {
        src: n(73962),
        className: a()(g.image, m.marginBottom20)
      }), (0, r.jsx)(d.Dx, {
        className: m.marginBottom40,
        children: p.Z.Messages.VERIFICATION_VERIFIED
      }), (0, r.jsx)(d.zx, {
        onClick: this.handleOpenApp,
        children: p.Z.Messages.VERIFICATION_OPEN_DISCORD
      })]
    })
  }
  renderVerifying() {
    return (0, r.jsxs)(d.ZP, {
      children: [(0, r.jsx)(d.Ee, {
        src: n(892235),
        className: a()(g.image, m.marginBottom20)
      }), (0, r.jsx)(d.Dx, {
        className: m.marginBottom8,
        children: p.Z.Messages.VERIFICATION_VERIFYING
      }), (0, r.jsx)(d.DK, {
        className: m.marginBottom40,
        children: p.Z.Messages.ACTION_MAY_TAKE_A_MOMENT
      }), (0, r.jsx)(d.zx, {
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
    super(...e), T(this, "handleVerify", () => {
      let e = (0, u.Z)(this.props.location);
      null != e && c.Z.verify(e)
    }), T(this, "handleLogin", () => {
      let {
        transitionTo: e
      } = this.props;
      e(N.Z5c.LOGIN)
    }), T(this, "handleOpenApp", () => {
      let {
        verifyingUserId: e
      } = this.props;
      h.default.track(N.rMx.VERIFY_ACCOUNT_APP_OPENED, {
        verifying_user_id: e
      }), (0, E.Z)("verify_email")
    })
  }
}
T(Z, "defaultProps", {
  transitionTo: e => n.g.location.assign(e)
}), t.Z = o.ZP.connectStores([I.default], () => ({
  verifyFailed: I.default.didVerifyFail(),
  verifyErrors: I.default.getVerifyErrors(),
  verifySucceeded: I.default.didVerifySucceed(),
  fingerprint: I.default.getFingerprint(),
  verifyingUserId: I.default.getVerifyingUserId()
}))(Z)