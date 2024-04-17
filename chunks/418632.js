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
  p = s("594174"),
  m = s("689938");

function E(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class f extends(a = i.Component) {
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
      children: m.default.Messages.RESEND_VERIFICATION_EMAIL
    })
  }
  constructor(...e) {
    super(...e), E(this, "state", {
      isSendingVerificationEmail: !1
    }), E(this, "handleResendVerification", () => {
      let {
        currentUser: e,
        onClick: t
      } = this.props;
      null == t || t(), this.setState({
        isSendingVerificationEmail: !0
      }, () => {
        d.default.verifyResend().then(() => (0, o.openModal)(t => (0, n.jsx)(o.ConfirmModal, {
          header: m.default.Messages.VERIFICATION_EMAIL_TITLE,
          confirmText: m.default.Messages.OKAY,
          confirmButtonColor: o.Button.Colors.BRAND,
          ...t,
          children: (0, n.jsx)(o.Text, {
            variant: "text-md/normal",
            children: m.default.Messages.VERIFICATION_EMAIL_BODY.format({
              email: e.email
            })
          })
        }))).catch(e => {
          let {
            body: t
          } = e, s = m.default.Messages.VERIFICATION_EMAIL_ERROR_BODY;
          null != t && t.email && (s = t.email), (0, o.openModal)(e => (0, n.jsx)(c.default, {
            title: m.default.Messages.VERIFICATION_EMAIL_ERROR_TITLE,
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
E(f, "defaultProps", {
  size: o.Button.Sizes.MEDIUM,
  color: o.Button.Colors.BRAND
}), t.default = u.default.connectStores([p.default], () => {
  let e = p.default.getCurrentUser();
  return r()(null != e, "ResendEmailVerificationButton: currentUser cannot be undefined"), {
    currentUser: e
  }
})(f)