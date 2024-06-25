n(47120);
var s, i = n(735250),
  o = n(470079),
  a = n(512722),
  r = n.n(a),
  l = n(442837),
  c = n(481060),
  d = n(893776),
  u = n(468026),
  f = n(594174),
  I = n(689938);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class E extends(s = o.Component) {
  render() {
    let {
      color: e,
      look: t,
      size: n
    } = this.props;
    return (0, i.jsx)(c.Button, {
      look: t,
      size: n,
      color: e,
      disabled: this.state.isSendingVerificationEmail,
      onClick: this.handleResendVerification,
      children: I.Z.Messages.RESEND_VERIFICATION_EMAIL
    })
  }
  constructor(...e) {
    super(...e), h(this, "state", {
      isSendingVerificationEmail: !1
    }), h(this, "handleResendVerification", () => {
      let {
        currentUser: e,
        onClick: t
      } = this.props;
      null == t || t(), this.setState({
        isSendingVerificationEmail: !0
      }, () => {
        d.Z.verifyResend().then(() => (0, c.openModal)(t => (0, i.jsx)(c.ConfirmModal, {
          header: I.Z.Messages.VERIFICATION_EMAIL_TITLE,
          confirmText: I.Z.Messages.OKAY,
          confirmButtonColor: c.Button.Colors.BRAND,
          ...t,
          children: (0, i.jsx)(c.Text, {
            variant: "text-md/normal",
            children: I.Z.Messages.VERIFICATION_EMAIL_BODY.format({
              email: e.email
            })
          })
        }))).catch(e => {
          let {
            body: t
          } = e, n = I.Z.Messages.VERIFICATION_EMAIL_ERROR_BODY;
          null != t && t.email && (n = t.email), (0, c.openModal)(e => (0, i.jsx)(u.default, {
            title: I.Z.Messages.VERIFICATION_EMAIL_ERROR_TITLE,
            body: n,
            ...e
          }))
        }).then(() => this.setState({
          isSendingVerificationEmail: !1
        }))
      })
    })
  }
}
h(E, "defaultProps", {
  size: c.Button.Sizes.MEDIUM,
  color: c.Button.Colors.BRAND
}), t.Z = l.ZP.connectStores([f.default], () => {
  let e = f.default.getCurrentUser();
  return r()(null != e, "ResendEmailVerificationButton: currentUser cannot be undefined"), {
    currentUser: e
  }
})(E)