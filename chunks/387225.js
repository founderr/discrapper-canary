"use strict";
n.r(e), n.d(e, {
  default: function() {
    return h
  }
}), n("222007");
var o = n("37983"),
  r = n("884691"),
  u = n("627445"),
  i = n.n(u),
  s = n("446674"),
  a = n("77078"),
  l = n("437822"),
  c = n("135230"),
  d = n("697218"),
  f = n("782340");
class p extends r.Component {
  render() {
    let {
      color: t,
      look: e,
      size: n
    } = this.props;
    return (0, o.jsx)(a.Button, {
      look: e,
      size: n,
      color: t,
      disabled: this.state.isSendingVerificationEmail,
      onClick: this.handleResendVerification,
      children: f.default.Messages.RESEND_VERIFICATION_EMAIL
    })
  }
  constructor(...t) {
    super(...t), this.state = {
      isSendingVerificationEmail: !1
    }, this.handleResendVerification = () => {
      let {
        currentUser: t,
        onClick: e
      } = this.props;
      null == e || e(), this.setState({
        isSendingVerificationEmail: !0
      }, () => {
        l.default.verifyResend().then(() => (0, a.openModal)(e => (0, o.jsx)(a.ConfirmModal, {
          header: f.default.Messages.VERIFICATION_EMAIL_TITLE,
          confirmText: f.default.Messages.OKAY,
          confirmButtonColor: a.Button.Colors.BRAND,
          ...e,
          children: (0, o.jsx)(a.Text, {
            variant: "text-md/normal",
            children: f.default.Messages.VERIFICATION_EMAIL_BODY.format({
              email: t.email
            })
          })
        }))).catch(t => {
          let {
            body: e
          } = t, n = f.default.Messages.VERIFICATION_EMAIL_ERROR_BODY;
          null != e && e.email && (n = e.email), (0, a.openModal)(t => (0, o.jsx)(c.default, {
            title: f.default.Messages.VERIFICATION_EMAIL_ERROR_TITLE,
            body: n,
            ...t
          }))
        }).then(() => this.setState({
          isSendingVerificationEmail: !1
        }))
      })
    }
  }
}
p.defaultProps = {
  size: a.Button.Sizes.MEDIUM,
  color: a.Button.Colors.BRAND
};
var h = s.default.connectStores([d.default], () => {
  let t = d.default.getCurrentUser();
  return i(null != t, "ResendEmailVerificationButton: currentUser cannot be undefined"), {
    currentUser: t
  }
})(p)