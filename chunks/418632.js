"use strict";
s.r(t), s("47120");
var n, o = s("735250"),
  i = s("470079"),
  l = s("512722"),
  a = s.n(l),
  r = s("442837"),
  d = s("481060"),
  u = s("893776"),
  c = s("468026"),
  f = s("594174"),
  I = s("689938");

function h(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class E extends(n = i.Component) {
  render() {
    let {
      color: e,
      look: t,
      size: s
    } = this.props;
    return (0, o.jsx)(d.Button, {
      look: t,
      size: s,
      color: e,
      disabled: this.state.isSendingVerificationEmail,
      onClick: this.handleResendVerification,
      children: I.default.Messages.RESEND_VERIFICATION_EMAIL
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
        u.default.verifyResend().then(() => (0, d.openModal)(t => (0, o.jsx)(d.ConfirmModal, {
          header: I.default.Messages.VERIFICATION_EMAIL_TITLE,
          confirmText: I.default.Messages.OKAY,
          confirmButtonColor: d.Button.Colors.BRAND,
          ...t,
          children: (0, o.jsx)(d.Text, {
            variant: "text-md/normal",
            children: I.default.Messages.VERIFICATION_EMAIL_BODY.format({
              email: e.email
            })
          })
        }))).catch(e => {
          let {
            body: t
          } = e, s = I.default.Messages.VERIFICATION_EMAIL_ERROR_BODY;
          null != t && t.email && (s = t.email), (0, d.openModal)(e => (0, o.jsx)(c.default, {
            title: I.default.Messages.VERIFICATION_EMAIL_ERROR_TITLE,
            body: s,
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
  size: d.Button.Sizes.MEDIUM,
  color: d.Button.Colors.BRAND
}), t.default = r.default.connectStores([f.default], () => {
  let e = f.default.getCurrentUser();
  return a()(null != e, "ResendEmailVerificationButton: currentUser cannot be undefined"), {
    currentUser: e
  }
})(E)