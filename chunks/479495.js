n(757143);
var s,
    r = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(593473),
    c = n(873546),
    u = n(442837),
    d = n(570140),
    h = n(893776),
    p = n(129293),
    m = n(388905),
    f = n(17894),
    g = n(124860),
    x = n(108427),
    C = n(314897),
    v = n(585483),
    N = n(981631),
    j = n(388032),
    y = n(113207);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
u.ZP.initialize();
class k extends (s = i.PureComponent) {
    componentDidMount() {
        (0, x.e)('reset_password');
    }
    renderPasswordReset() {
        let { password: e, error: t, hasCancel: s } = this.state,
            i = this.isSubmitting(),
            o = null != t ? t : this.renderError('password');
        return (0, r.jsxs)(m.ZP, {
            onSubmit: this.handleSubmit,
            tag: 'form',
            children: [
                (0, r.jsx)('img', {
                    alt: '',
                    src: null == o ? n(26230) : n(935227),
                    className: y.marginBottom20
                }),
                (0, r.jsx)(m.Dx, { children: j.intl.string(j.t['1LV6Ki']) }),
                (0, r.jsxs)(m.gO, {
                    className: y.marginTop20,
                    children: [
                        (0, r.jsx)(m.II, {
                            label: j.intl.string(j.t['8dM4FB']),
                            className: y.marginBottom20,
                            name: 'password',
                            value: e,
                            onChange: (e) => this.setState({ password: e }),
                            error: o,
                            type: 'password'
                        }),
                        (0, r.jsx)(m.zx, {
                            type: 'submit',
                            submitting: i,
                            children: j.intl.string(j.t['FRep5+'])
                        }),
                        s
                            ? (0, r.jsx)(m.zx, {
                                  className: y.marginTop8,
                                  onClick: this.handleGoToLogin,
                                  submitting: i,
                                  color: m.zx.Colors.PRIMARY,
                                  children: j.intl.string(j.t['ETE/oK'])
                              })
                            : null
                    ]
                })
            ]
        });
    }
    renderMFA() {
        let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods
        };
        return (0, r.jsx)(m.ZP, {
            style: { padding: 0 },
            children: (0, r.jsx)(g.Cd, {
                mfaFinish: (e) => {
                    let { mfaType: t, data: n } = e;
                    return this.handleTokenSubmitMFAv2(t, n);
                },
                mfaChallenge: e,
                onEarlyClose: () => {
                    d.Z.dispatch({ type: 'LOGIN_RESET' });
                },
                width: 480
            })
        });
    }
    renderSucceeded() {
        return (0, r.jsxs)(m.ZP, {
            children: [
                (0, r.jsx)('img', {
                    alt: '',
                    src: n(26230),
                    className: l()(y.marginBottom20, c.tq ? y.marginTop20 : '')
                }),
                (0, r.jsx)(m.Dx, {
                    className: y.marginBottom40,
                    children: j.intl.string(j.t.WAUOoK)
                }),
                (0, r.jsx)(m.zx, {
                    onClick: this.handleOpenApp,
                    children: j.intl.string(j.t.uJWIj4)
                })
            ]
        });
    }
    render() {
        return this.state.success ? this.renderSucceeded() : null != this.props.mfaTicket && '' !== this.props.mfaTicket ? this.renderMFA() : this.renderPasswordReset();
    }
    constructor(e) {
        var t;
        super(e),
            E(this, 'handleSubmit', async (e) => {
                let { location: t, onLoginSuccess: n, source: s, resetToken: r } = this.props,
                    { password: i, error: o } = this.state;
                if ((null != e && e.preventDefault(), 0 === i.length)) {
                    this.setState({ error: j.intl.string(j.t.R98xDw) }), v.S.dispatch(N.CkL.WAVE_EMPHASIZE);
                    return;
                }
                null != o && this.setState({ error: null });
                let l = r;
                if ((null != t && (l = (0, p.Z)(t)), null != l)) {
                    this.setState({ working: !0 });
                    try {
                        let { result: e, sms: t, webauthn: r, ticket: o, token: a, totp: c, backup: u } = await h.Z.resetPassword(l, i, s);
                        e === h.c.MFA
                            ? d.Z.dispatch({
                                  type: 'LOGIN_MFA_STEP',
                                  ticket: o,
                                  sms: t,
                                  webauthn: r,
                                  totp: c,
                                  backup: u
                              })
                            : null != n
                              ? n(a)
                              : (d.Z.dispatch({
                                    type: 'LOGIN_SUCCESS',
                                    token: a
                                }),
                                this.handlePasswordChangeSuccess());
                    } catch (e) {}
                    this.setState({ working: !1 });
                }
            }),
            E(this, 'handleTokenSubmitMFAv2', (e, t) => {
                let { location: n, mfaTicket: s, onLoginSuccess: r, resetToken: i, source: o } = this.props,
                    { password: l } = this.state;
                if (0 === l.length) return d.Z.dispatch({ type: 'LOGIN_RESET' }), Promise.reject();
                let a = i;
                return (null != n && (a = (0, p.Z)(n)), null == a)
                    ? (d.Z.dispatch({ type: 'LOGIN_RESET' }), Promise.reject())
                    : h.Z.resetPasswordMFAv2({
                          method: e,
                          code: t,
                          ticket: s,
                          password: l,
                          token: a,
                          source: o
                      }).then((e) => {
                          null != r
                              ? r(e)
                              : (d.Z.dispatch({
                                    type: 'LOGIN_SUCCESS',
                                    token: e
                                }),
                                this.handlePasswordChangeSuccess());
                      });
            }),
            E(this, 'handlePasswordChangeSuccess', () => {
                let { replaceWith: e } = this.props;
                if (c.Em || c.tq) {
                    this.setState({ success: !0 });
                    return;
                }
                e(N.Z5c.APP);
            }),
            E(this, 'handleGoToLogin', () => {
                let { transitionTo: e } = this.props;
                h.Z.loginReset(), e(N.Z5c.LOGIN);
            }),
            E(this, 'isSubmitting', () => {
                let { loginStatus: e } = this.props,
                    { working: t } = this.state;
                return t || e === N.u34.LOGGING_IN_MFA;
            }),
            E(this, 'handleOpenApp', () => {
                (0, f.Z)('password_reset');
            }),
            E(this, 'hasError', (e) => null != this.props.errors[e] || null != this.state.error),
            E(this, 'renderError', (e) => {
                let { errors: t } = this.props;
                if (this.hasError(e)) {
                    let n = t[e];
                    return Array.isArray(n) ? n[0] : n;
                }
                return null;
            });
        let n = (null === (t = this.props.location) || void 0 === t ? void 0 : t.search) != null && '' !== this.props.location.search ? (0, a.parse)(this.props.location.search) : null;
        this.state = {
            method: '',
            password: '',
            code: '',
            error: null,
            hasCancel: null != n && null != n.from_login,
            working: !1,
            success: !1
        };
    }
}
E(k, 'defaultProps', {
    transitionTo: (e) => n.g.location.assign(e),
    replaceWith: (e) => n.g.location.replace(e)
});
t.Z = function (e) {
    let t = (0, u.cj)([C.default], () => ({
        loginStatus: C.default.getLoginStatus(),
        mfaTicket: C.default.getMFATicket(),
        errors: C.default.getErrors(),
        mfaMethods: C.default.getMFAMethods()
    }));
    return (0, r.jsx)(k, {
        ...e,
        ...t
    });
};
