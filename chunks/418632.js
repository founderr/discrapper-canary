t(47120);
var n, a = t(735250),
  i = t(470079),
  l = t(512722),
  r = t.n(l),
  o = t(442837),
  c = t(481060),
  u = t(893776),
  d = t(468026),
  E = t(594174),
  _ = t(689938);

function p(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
class I extends(n = i.Component) {
  render() {
    let {
      color: e,
      look: s,
      size: t
    } = this.props;
    return (0, a.jsx)(c.Button, {
      look: s,
      size: t,
      color: e,
      disabled: this.state.isSendingVerificationEmail,
      onClick: this.handleResendVerification,
      children: _.Z.Messages.RESEND_VERIFICATION_EMAIL
    })
  }
  constructor(...e) {
    super(...e), p(this, "state", {
      isSendingVerificationEmail: !1
    }), p(this, "handleResendVerification", () => {
      let {
        currentUser: e,
        onClick: s
      } = this.props;
      null == s || s(), this.setState({
        isSendingVerificationEmail: !0
      }, () => {
        u.Z.verifyResend().then(() => (0, c.openModal)(s => (0, a.jsx)(c.ConfirmModal, {
          header: _.Z.Messages.VERIFICATION_EMAIL_TITLE,
          confirmText: _.Z.Messages.OKAY,
          confirmButtonColor: c.Button.Colors.BRAND,
          ...s,
          children: (0, a.jsx)(c.Text, {
            variant: "text-md/normal",
            children: _.Z.Messages.VERIFICATION_EMAIL_BODY.format({
              email: e.email
            })
          })
        }))).catch(e => {
          let {
            body: s
          } = e, t = _.Z.Messages.VERIFICATION_EMAIL_ERROR_BODY;
          null != s && s.email && (t = s.email), (0, c.openModal)(e => (0, a.jsx)(d.default, {
            title: _.Z.Messages.VERIFICATION_EMAIL_ERROR_TITLE,
            body: t,
            ...e
          }))
        }).then(() => this.setState({
          isSendingVerificationEmail: !1
        }))
      })
    })
  }
}
p(I, "defaultProps", {
  size: c.Button.Sizes.MEDIUM,
  color: c.Button.Colors.BRAND
}), s.Z = o.ZP.connectStores([E.default], () => {
  let e = E.default.getCurrentUser();
  return r()(null != e, "ResendEmailVerificationButton: currentUser cannot be undefined"), {
    currentUser: e
  }
})(I)