s(47120);
var n,
    i = s(735250),
    o = s(470079),
    a = s(512722),
    r = s.n(a),
    l = s(442837),
    c = s(481060),
    d = s(893776),
    u = s(468026),
    f = s(594174),
    I = s(689938);
function h(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
class E extends (n = o.Component) {
    render() {
        let { color: e, look: t, size: s } = this.props;
        return (0, i.jsx)(c.Button, {
            look: t,
            size: s,
            color: e,
            disabled: this.state.isSendingVerificationEmail,
            onClick: this.handleResendVerification,
            children: I.Z.Messages.RESEND_VERIFICATION_EMAIL
        });
    }
    constructor(...e) {
        super(...e),
            h(this, 'state', { isSendingVerificationEmail: !1 }),
            h(this, 'handleResendVerification', () => {
                let { currentUser: e, onClick: t } = this.props;
                null == t || t(),
                    this.setState({ isSendingVerificationEmail: !0 }, () => {
                        d.Z.verifyResend()
                            .then(() =>
                                (0, c.openModal)((t) =>
                                    (0, i.jsx)(c.ConfirmModal, {
                                        header: I.Z.Messages.VERIFICATION_EMAIL_TITLE,
                                        confirmText: I.Z.Messages.OKAY,
                                        confirmButtonColor: c.Button.Colors.BRAND,
                                        ...t,
                                        children: (0, i.jsx)(c.Text, {
                                            variant: 'text-md/normal',
                                            children: I.Z.Messages.VERIFICATION_EMAIL_BODY.format({ email: e.email })
                                        })
                                    })
                                )
                            )
                            .catch((e) => {
                                let { body: t } = e,
                                    s = I.Z.Messages.VERIFICATION_EMAIL_ERROR_BODY;
                                null != t && t.email && (s = t.email),
                                    (0, c.openModal)((e) =>
                                        (0, i.jsx)(u.default, {
                                            title: I.Z.Messages.VERIFICATION_EMAIL_ERROR_TITLE,
                                            body: s,
                                            ...e
                                        })
                                    );
                            })
                            .then(() => this.setState({ isSendingVerificationEmail: !1 }));
                    });
            });
    }
}
h(E, 'defaultProps', {
    size: c.Button.Sizes.MEDIUM,
    color: c.Button.Colors.BRAND
}),
    (t.Z = l.ZP.connectStores([f.default], () => {
        let e = f.default.getCurrentUser();
        return r()(null != e, 'ResendEmailVerificationButton: currentUser cannot be undefined'), { currentUser: e };
    })(E));
