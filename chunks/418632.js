t(47120);
var n,
    a = t(735250),
    i = t(470079),
    r = t(512722),
    o = t.n(r),
    l = t(442837),
    c = t(481060),
    d = t(893776),
    _ = t(468026),
    u = t(594174),
    E = t(689938);
function T(e, s, t) {
    return (
        s in e
            ? Object.defineProperty(e, s, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[s] = t),
        e
    );
}
class S extends (n = i.Component) {
    render() {
        let { color: e, look: s, size: t } = this.props;
        return (0, a.jsx)(c.Button, {
            look: s,
            size: t,
            color: e,
            disabled: this.state.isSendingVerificationEmail,
            onClick: this.handleResendVerification,
            children: E.Z.Messages.RESEND_VERIFICATION_EMAIL
        });
    }
    constructor(...e) {
        super(...e),
            T(this, 'state', { isSendingVerificationEmail: !1 }),
            T(this, 'handleResendVerification', () => {
                let { currentUser: e, onClick: s } = this.props;
                null == s || s(),
                    this.setState({ isSendingVerificationEmail: !0 }, () => {
                        d.Z.verifyResend()
                            .then(() =>
                                (0, c.openModal)((s) =>
                                    (0, a.jsx)(c.ConfirmModal, {
                                        header: E.Z.Messages.VERIFICATION_EMAIL_TITLE,
                                        confirmText: E.Z.Messages.OKAY,
                                        confirmButtonColor: c.Button.Colors.BRAND,
                                        ...s,
                                        children: (0, a.jsx)(c.Text, {
                                            variant: 'text-md/normal',
                                            children: E.Z.Messages.VERIFICATION_EMAIL_BODY.format({ email: e.email })
                                        })
                                    })
                                )
                            )
                            .catch((e) => {
                                let { body: s } = e,
                                    t = E.Z.Messages.VERIFICATION_EMAIL_ERROR_BODY;
                                null != s && s.email && (t = s.email),
                                    (0, c.openModal)((e) =>
                                        (0, a.jsx)(_.default, {
                                            title: E.Z.Messages.VERIFICATION_EMAIL_ERROR_TITLE,
                                            body: t,
                                            ...e
                                        })
                                    );
                            })
                            .then(() => this.setState({ isSendingVerificationEmail: !1 }));
                    });
            });
    }
}
T(S, 'defaultProps', {
    size: c.Button.Sizes.MEDIUM,
    color: c.Button.Colors.BRAND
}),
    (s.Z = l.ZP.connectStores([u.default], () => {
        let e = u.default.getCurrentUser();
        return o()(null != e, 'ResendEmailVerificationButton: currentUser cannot be undefined'), { currentUser: e };
    })(S));
