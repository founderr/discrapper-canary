"use strict";
s.r(t), s("47120");
var a, n = s("735250"),
  i = s("470079"),
  l = s("512722"),
  r = s.n(l),
  u = s("442837"),
  o = s("481060"),
  d = s("893776"),
  c = s("468026"),
  f = s("594174"),
  E = s("689938");

function m(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class _ extends(a = i.Component) {
  render() {
    let {
      color: e,
      look: t,
      size: s
    } = this.props;
    return (0, n.jsx)(o.Button, {
      look: t,
      size: s,
      color: e,
      disabled: this.state.isSendingVerificationEmail,
      onClick: this.handleResendVerification,
      children: E.default.Messages.RESEND_VERIFICATION_EMAIL
    })
  }
  constructor(...e) {
    super(...e), m(this, "state", {
      isSendingVerificationEmail: !1
    }), m(this, "handleResendVerification", () => {
      let {
        currentUser: e,
        onClick: t
      } = this.props;
      null == t || t(), this.setState({
        isSendingVerificationEmail: !0
      }, () => {
        d.default.verifyResend().then(() => (0, o.openModal)(t => (0, n.jsx)(o.ConfirmModal, {
          header: E.default.Messages.VERIFICATION_EMAIL_TITLE,
          confirmText: E.default.Messages.OKAY,
          confirmButtonColor: o.Button.Colors.BRAND,
          ...t,
          children: (0, n.jsx)(o.Text, {
            variant: "text-md/normal",
            children: E.default.Messages.VERIFICATION_EMAIL_BODY.format({
              email: e.email
            })
          })
        }))).catch(e => {
          let {
            body: t
          } = e, s = E.default.Messages.VERIFICATION_EMAIL_ERROR_BODY;
          null != t && t.email && (s = t.email), (0, o.openModal)(e => (0, n.jsx)(c.default, {
            title: E.default.Messages.VERIFICATION_EMAIL_ERROR_TITLE,
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
m(_, "defaultProps", {
  size: o.Button.Sizes.MEDIUM,
  color: o.Button.Colors.BRAND
}), t.default = u.default.connectStores([f.default], () => {
  let e = f.default.getCurrentUser();
  return r()(null != e, "ResendEmailVerificationButton: currentUser cannot be undefined"), {
    currentUser: e
  }
})(_)