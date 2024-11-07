n.d(t, {
    Z: function () {
        return eo;
    }
}),
    n(757143),
    n(47120),
    n(627341);
var i,
    r = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(593473),
    c = n(278074),
    u = n(990547),
    d = n(442837),
    h = n(846519),
    g = n(481060),
    f = n(893776),
    m = n(899370),
    p = n(224841),
    _ = n(13430),
    x = n(213609),
    E = n(882037),
    v = n(201207),
    I = n(481230),
    N = n(388905),
    b = n(853268),
    C = n(639946),
    S = n(616952),
    T = n(792766),
    A = n(692483),
    Z = n(100159),
    j = n(473855),
    R = n(726745),
    O = n(929809),
    L = n(541692),
    y = n(986197),
    P = n(135200),
    D = n(219496),
    k = n(794099),
    M = n(807369),
    w = n(180529),
    B = n(108427),
    G = n(314897),
    U = n(480294),
    F = n(896797),
    z = n(626135),
    V = n(585483),
    K = n(70956),
    H = n(624138),
    W = n(481153),
    q = n(588705),
    Y = n(163671),
    J = n(981631),
    X = n(355142),
    Q = n(188785),
    $ = n(701476),
    ee = n(801461),
    et = n(388032),
    en = n(730181),
    ei = n(971436);
function er(e, t, n) {
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
d.ZP.initialize();
let es = /\.$/,
    ea = (e) =>
        Array.isArray(e)
            ? e
                  .map((e) => e.replace(es, ''))
                  .join('. ')
                  .trim()
            : e;
class el extends (i = s.PureComponent) {
    get registrationSource() {
        let { giftCode: e, guildTemplate: t, invite: n } = this.props;
        if (null != e) return 'gift';
        if (null != t) return 'guild_template';
        if (null != n) {
            if (null != n.guild) return 'guild_invite';
            if (null != n.channel) return 'dm_invite';
            else if (null != n.inviter) return 'friend_invite';
        }
        return null;
    }
    hasConsent() {
        let { consentRequired: e } = this.props,
            { consent: t } = this.state;
        return null != e && t;
    }
    componentDidMount() {
        this.redirectIfAuthenticated(), v.Z.trackExposure({ location: '0ba758_1' });
        let { giftCodeSKU: e, invite: t } = this.props;
        z.default.track(
            J.rMx.REGISTER_VIEWED,
            {
                location: null != t ? 'Invite Register Page' : 'Non-Invite Register Page',
                registration_source: this.registrationSource,
                ...(null != e ? (0, Z.Z)(e, !1, !1) : {})
            },
            { flush: !0 }
        ),
            null == this.props.consentRequired && f.Z.getLocationMetadata(),
            (0, B.e)('register');
    }
    componentWillUnmount() {
        this._retryTimer.stop();
    }
    static getDerivedStateFromProps(e, t) {
        let { consentRequired: n } = e,
            { consentRequiredProp: i } = t;
        return null == i && null != n
            ? {
                  consent: !n,
                  consentRequiredProp: n
              }
            : { consentRequiredProp: n };
    }
    componentDidUpdate(e, t) {
        let { apiErrors: n, authenticated: i, isUnderage: r, invite: s, onChangeStep: a } = this.props,
            { parsedDateOfBirth: l } = this.state;
        (e.apiErrors !== n || t.parsedDateOfBirth !== l) &&
            (this.hasError('email') || this.hasError('phone')
                ? null != this.emailRef && this.emailRef.focus()
                : this.hasError('username')
                  ? null != this.usernameRef && this.usernameRef.focus()
                  : this.hasError('global_name')
                    ? null != this.globalNameRef && this.globalNameRef.focus()
                    : this.hasError('password')
                      ? null != this.passwordRef && this.passwordRef.focus()
                      : null == this.state.parsedDateOfBirth
                        ? null != this.dateOfBirthRef.current && this.dateOfBirthRef.current.focus()
                        : this.hasError('retry_after') &&
                          'number' == typeof this.props.apiErrors.retry_after &&
                          (this.setState({ isRateLimited: !0 }),
                          this._retryTimer.start(this.props.apiErrors.retry_after * K.Z.Millis.SECOND, () => {
                              this.setState({ isRateLimited: !1 });
                          }))),
            i && !e.authenticated && ((0, O.c)($.M5.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
        let o = X.EW.FULL;
        r || this.hasError('date_of_birth') ? (o = X.EW.AGE_GATE) : null != s && (null != s.guild || null != s.channel) && (o = X.EW.INVITE), a(o);
    }
    redirectIfAuthenticated() {
        let { authenticated: e, transitionTo: t, redirectTo: n } = this.props;
        if (!!e) t(null != n ? n : F.Z.defaultRoute);
    }
    async handleRegister() {
        let { email: e, username: t, globalName: n, password: i, consent: r, parsedDateOfBirth: s } = this.state,
            { invite: a, guildTemplate: l, giftCode: o, onRegister: c, usernameSuggestion: u, isMobileWebInviteRegistration: d } = this.props,
            h = null != a ? a.code : null,
            g = null != o ? o.skuId : null,
            f = E.MD.getState(),
            m = (0, H.Ew)(u) ? null : t === u,
            p = Q.a ? await (0, A.K)(t) : t,
            _ = Q.a ? await (0, A.K)(n) : n;
        V.S.dispatch(J.CkL.WAVE_EMPHASIZE);
        try {
            d || null == a
                ? await (0, I.R$)({
                      email: e,
                      username: p,
                      globalName: _,
                      consent: r,
                      password: i,
                      invite: h,
                      usedUsernameSuggestion: m,
                      guildTemplateCode: null == l ? void 0 : l.code,
                      giftCodeSKUId: g,
                      birthday: s,
                      promoEmailConsent: f.required ? f : null
                  })
                : await (0, I.ZP)({
                      consent: r,
                      invite: h,
                      giftCodeSKUId: g,
                      usedUsernameSuggestion: m,
                      globalName: _
                  }),
                null == c || c();
        } catch (e) {}
    }
    hasError(e) {
        return null != this.props.apiErrors[e];
    }
    renderConsentComponents() {
        let { consent: e } = this.state,
            {
                consentRequired: t,
                registrationCopyExperimentConfig: { enableNewCopy: n, hasProminentCopy: i }
            } = this.props,
            s = null,
            a = null;
        return (
            t
                ? (a = (0, r.jsx)(b.Z, {
                      value: e,
                      onChange: (e) => this.setState({ consent: e }),
                      subText: et.intl.format(et.t.qMDAPz, {
                          termsURL: J.EYA.TERMS,
                          privacyURL: J.EYA.PRIVACY
                      })
                  }))
                : (s = (0, r.jsx)(N.i_, {
                      isProminent: !!i,
                      className: ei.marginTop8,
                      children: n
                          ? et.intl.format(et.t.oRFxPj, {
                                buttonText: et.intl.string(et.t['3PatS0']),
                                termsURL: J.EYA.TERMS,
                                privacyURL: J.EYA.PRIVACY
                            })
                          : et.intl.format(et.t['F+0zT0'], {
                                termsURL: J.EYA.TERMS,
                                privacyURL: J.EYA.PRIVACY
                            })
                  })),
            {
                subText: s,
                consentText: a
            }
        );
    }
    renderInviteResolving() {
        let { authBoxClassName: e } = this.props,
            t = (e) => {
                this.setState({ globalName: e });
            },
            n = this.state.globalName;
        return (0, r.jsxs)(N.ZP, {
            className: e,
            children: [
                (0, r.jsx)(q.R, {}),
                (0, r.jsxs)(N.gO, {
                    className: ei.marginTop40,
                    children: [
                        (0, r.jsx)(g.FormTitle, { children: et.intl.string(et.t.TWzdWl) }),
                        (0, r.jsx)(g.Tooltip, {
                            text: et.intl.string(et.t['hBB85+']),
                            position: 'right',
                            color: g.Tooltip.Colors.BRAND,
                            children: (e) => {
                                let { onMouseEnter: i, onMouseLeave: s } = e;
                                return (0, r.jsx)(N.II, {
                                    autoFocus: !0,
                                    className: ei.marginBottom8,
                                    name: 'username',
                                    value: n,
                                    placeholder: et.intl.string(et.t['09Q8ys']),
                                    onChange: t,
                                    onMouseEnter: i,
                                    onMouseLeave: s
                                });
                            }
                        }),
                        (0, r.jsx)(N.zx, {
                            className: ei.marginTop20,
                            disabled: !0,
                            children: et.intl.string(et.t['3PatS0'])
                        }),
                        (0, r.jsx)(N.i_, {
                            disabled: !0,
                            className: ei.marginTop8,
                            children: et.intl.format(et.t['F+0zT0'], {
                                termsURL: J.EYA.TERMS,
                                privacyURL: J.EYA.PRIVACY
                            })
                        }),
                        Q.a
                            ? null
                            : (0, r.jsx)(N.zx, {
                                  look: N.zx.Looks.LINK,
                                  color: N.zx.Colors.LINK,
                                  disabled: !0,
                                  className: ei.marginTop20,
                                  children: et.intl.string(et.t['r/jzu7'])
                              })
                    ]
                })
            ]
        });
    }
    renderInviteHeader() {
        let { invite: e } = this.props;
        return (null == e ? void 0 : e.stage_instance) != null && null != e.guild
            ? (0, r.jsx)(T.Z, {
                  stageInstance: e.stage_instance,
                  guild: e.guild
              })
            : (null == e ? void 0 : e.guild_scheduled_event) != null
              ? (0, r.jsx)(C.r, {
                    channel: e.channel,
                    guildScheduledEvent: e.guild_scheduled_event
                })
              : (0, r.jsx)(q.Z, { invite: e });
    }
    renderInviteButton() {
        let { invite: e, registering: t, consentRequired: n } = this.props,
            { consent: i } = this.state,
            s = N.zx.Colors.BRAND,
            a = et.intl.string(et.t['3PatS0']);
        return (
            (null == e ? void 0 : e.stage_instance) != null && ((s = N.zx.Colors.GREEN), (a = et.intl.string(et.t['5UKyUl']))),
            (0, r.jsx)(g.Tooltip, {
                text: !i && n ? et.intl.string(et.t.AY4IVF) : null,
                children: (e) =>
                    (0, r.jsx)('div', {
                        className: ei.marginTop20,
                        ...e,
                        children: (0, r.jsx)(N.zx, {
                            type: 'submit',
                            submitting: t,
                            disabled: !this.hasConsent(),
                            color: s,
                            children: a
                        })
                    })
            })
        );
    }
    renderInvite() {
        let {
                invite: e,
                authBoxClassName: t,
                apiErrors: { username: n, global_name: i }
            } = this.props,
            { subText: s, consentText: a } = this.renderConsentComponents(),
            l = (null == e ? void 0 : e.stage_instance) != null || (null == e ? void 0 : e.guild_scheduled_event) != null,
            o = (e) => {
                this.setState({ globalName: e });
            },
            c = this.state.globalName;
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsxs)(N.ZP, {
                    onSubmit: this.handleSubmit,
                    tag: 'form',
                    className: t,
                    children: [
                        this.renderInviteHeader(),
                        l ? (0, r.jsx)('div', { className: en.divider }) : null,
                        (0, r.jsxs)(N.gO, {
                            className: l ? void 0 : ei.marginTop40,
                            children: [
                                (0, r.jsx)(g.FormTitle, {
                                    error: ea(null != i ? i : n),
                                    children: et.intl.string(et.t['9AjdkJ'])
                                }),
                                (0, r.jsx)(g.Tooltip, {
                                    text: et.intl.string(et.t['hBB85+']),
                                    position: 'right',
                                    color: g.Tooltip.Colors.BRAND,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: s } = e;
                                        return (0, r.jsx)(N.II, {
                                            autoFocus: !0,
                                            className: ei.marginBottom8,
                                            name: 'global_name',
                                            value: c,
                                            placeholder: et.intl.string(et.t['09Q8ys']),
                                            onChange: o,
                                            error: null != n || null != i ? '' : null,
                                            onMouseEnter: t,
                                            onMouseLeave: s
                                        });
                                    }
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: et.intl.string(et.t['330TCQ'])
                                }),
                                this.renderInviteButton(),
                                s,
                                a,
                                Q.a
                                    ? null
                                    : (0, r.jsx)(N.zx, {
                                          look: N.zx.Looks.LINK,
                                          color: N.zx.Colors.LINK,
                                          onClick: this.handleGotoLogin,
                                          className: ei.marginTop20,
                                          children: et.intl.string(et.t['r/jzu7'])
                                      })
                            ]
                        })
                    ]
                }),
                null != e && l
                    ? (0, r.jsx)(N.ZP, {
                          className: ei.marginTop20,
                          children: (0, r.jsx)(T.y, {
                              guild: e.guild,
                              onlineCount: e.approximate_presence_count
                          })
                      })
                    : null
            ]
        });
    }
    renderErrorMessage() {
        let {
            apiErrors: { message: e }
        } = this.props;
        return 'string' != typeof e
            ? null
            : (0, r.jsx)(N.i_, {
                  className: l()(ei.marginTop20, en.errorMessage),
                  children: e
              });
    }
    renderFull(e, t) {
        let { email: n, username: i, globalName: a, password: o, consent: c, parsedDateOfBirth: u, globalNameFocused: d, emailClientError: h, usernameClientError: f, passwordClientError: m, dateOfBirthClientError: p } = this.state,
            {
                registering: x,
                consentRequired: E,
                isMobileWebInviteRegistration: v,
                uniqueUsernameRegistrationConfig: { suggestions: I },
                authBoxClassName: b,
                apiErrors: { email: C, username: T, global_name: A, password: Z, date_of_birth: j } = {},
                hasLoggedInAccounts: R,
                registrationCopyExperimentConfig: { hasCopyAboveButton: O }
            } = this.props,
            { subText: L, consentText: D } = this.renderConsentComponents(),
            k = this.renderErrorMessage(),
            M = (0, r.jsx)(g.Tooltip, {
                text: !c && E ? et.intl.string(et.t.AY4IVF) : null,
                children: (e) =>
                    (0, r.jsx)('div', {
                        className: ei.marginTop20,
                        ...e,
                        children: (0, r.jsx)(N.zx, {
                            type: 'submit',
                            submitting: x,
                            disabled: !this.hasConsent() || this.state.isRateLimited,
                            children: et.intl.string(et.t['3PatS0'])
                        })
                    })
            }),
            B = async () => {
                this.setState({ usernameFocused: !0 }), I && a.length > 0 && !P.Z.wasRegistrationSuggestionFetched(a) && (await y.Z.fetchSuggestionsRegistration(a));
            },
            G = null != e ? (0, r.jsx)(s.Fragment, { children: e() }, 'custom-header') : (0, r.jsx)(N.Dx, { children: et.intl.string(et.t.wC4TlZ) }, 'title'),
            U = (0, r.jsxs)(N.gO, {
                className: ei.marginTop20,
                children: [
                    (0, r.jsx)(N.II, {
                        autoFocus: !0,
                        className: ei.marginBottom20,
                        label: et.intl.string(et.t.dI4d4e),
                        name: 'email',
                        value: n,
                        onChange: (e) =>
                            this.setState({
                                email: e,
                                emailClientError: 0 === e.length ? et.intl.string(et.t.EkokLy) : null
                            }),
                        error: null != h ? h : ea(C),
                        type: 'email',
                        setRef: (e) => {
                            this.emailRef = e;
                        },
                        required: !0
                    }),
                    (0, r.jsx)(N.II, {
                        label: et.intl.string(et.t['9AjdkJ']),
                        className: ei.marginBottom20,
                        name: 'global_name',
                        value: a,
                        onChange: (e) => this.setState({ globalName: e }),
                        error: ea(A),
                        maxLength: ee.hy,
                        setRef: (e) => {
                            this.globalNameRef = e;
                        },
                        onFocus: () => this.setState({ globalNameFocused: !0 }),
                        onBlur: () => this.setState({ globalNameFocused: !1 })
                    }),
                    (0, r.jsx)(w.Z, {
                        show: d,
                        top: -12,
                        bottom: 20,
                        children: (0, r.jsx)(g.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-normal',
                            children: et.intl.string(et.t['330TCQ'])
                        })
                    }),
                    (0, r.jsxs)('div', {
                        onBlur: () => this.setState({ usernameFocused: !1 }),
                        onFocus: B,
                        tabIndex: -1,
                        children: [
                            (0, r.jsx)(N.II, {
                                label: et.intl.string(et.t.TWzdWl),
                                className: ei.marginBottom20,
                                name: 'username',
                                value: i,
                                onChange: (e) => {
                                    this.setState({
                                        username: e.toLocaleLowerCase(),
                                        usernameClientError: 0 === e.length ? et.intl.string(et.t.EkokLy) : null
                                    });
                                },
                                error: null != f ? f : ea(T),
                                setRef: (e) => {
                                    this.usernameRef = e;
                                },
                                required: !0
                            }),
                            this.renderUsernameValidation()
                        ]
                    }),
                    (0, r.jsx)(N.II, {
                        label: et.intl.string(et.t['CIGa+/']),
                        name: 'password',
                        value: o,
                        onChange: (e) =>
                            this.setState({
                                password: e,
                                passwordClientError: 0 === e.length ? et.intl.string(et.t.EkokLy) : null
                            }),
                        error: null != m ? m : ea(Z),
                        type: 'password',
                        setRef: (e) => {
                            this.passwordRef = e;
                        },
                        required: !0
                    }),
                    (0, r.jsx)(_.Z, {
                        label: et.intl.string(et.t.rhBeKS),
                        wrapperClassName: ei.marginTop20,
                        name: 'date_of_birth',
                        onChange: this.handleBirthdayChange,
                        ref: this.dateOfBirthRef,
                        error: null != p ? p : ea(j),
                        value: u,
                        required: !0
                    }),
                    O && L,
                    (0, r.jsx)(S.Z, {}),
                    M,
                    k,
                    D,
                    !O && L,
                    Q.a
                        ? null
                        : (0, r.jsx)(N.zx, {
                              look: v ? N.zx.Looks.FILLED : N.zx.Looks.LINK,
                              color: v ? N.zx.Colors.PRIMARY : N.zx.Colors.LINK,
                              onClick: this.handleGotoLogin,
                              className: ei.marginTop20,
                              children: et.intl.string(et.t['r/jzu7'])
                          })
                ]
            });
        return t
            ? (0, r.jsx)(Y.Z, {
                  onSubmit: this.handleSubmit,
                  tag: 'form',
                  className: l()(b, en.horizontalAuthBox),
                  children: () => [
                      G,
                      (0, r.jsxs)(
                          'div',
                          {
                              className: en.flex,
                              children: [
                                  (0, r.jsx)(N.Dx, {
                                      className: en.createAccountTemplateHeader,
                                      children: et.intl.string(et.t.wC4TlZ)
                                  }),
                                  U
                              ]
                          },
                          'register-title'
                      )
                  ]
              })
            : (0, r.jsxs)(N.ZP, {
                  onSubmit: this.handleSubmit,
                  tag: 'form',
                  className: b,
                  children: [
                      R && !v
                          ? (0, r.jsx)(N.zx, {
                                onClick: this.handleGotoLogin,
                                look: N.zx.Looks.LINK,
                                color: N.zx.Colors.PRIMARY,
                                className: en.goBackButton,
                                children: (0, r.jsxs)('div', {
                                    className: en.content,
                                    children: [
                                        (0, r.jsx)(g.ChevronSmallLeftIcon, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: en.caret
                                        }),
                                        (0, r.jsx)(g.Text, {
                                            variant: 'text-md/normal',
                                            children: et.intl.string(et.t['1MrpWF'])
                                        })
                                    ]
                                })
                            })
                          : null,
                      G,
                      U
                  ]
              });
    }
    render() {
        let { isUnderage: e, isMobileWebInviteRegistration: t } = this.props;
        if (e || this.hasError('date_of_birth')) return (0, r.jsx)(p.Z, {});
        let { invite: n, giftCode: i, guildTemplate: s } = this.props,
            a = null != n && null == n.guild && null == n.channel && null != n.inviter;
        return null == n || a || t
            ? null != s
                ? this.renderFull(() => (0, r.jsx)(j.Z, { guildTemplate: s }), !0)
                : null != i
                  ? this.renderFull(() => (0, r.jsx)(W.Z, { giftCode: i }))
                  : null != n && a && n.state === J.r2o.RESOLVED && !t
                    ? this.renderFull(() =>
                          (0, r.jsx)(q.Z, {
                              invite: n,
                              isRegister: !0
                          })
                      )
                    : this.renderFull()
            : n.state === J.r2o.RESOLVING
              ? this.renderInviteResolving()
              : this.renderInvite();
    }
    constructor(e) {
        var t;
        super(e),
            er(this, 'emailRef', void 0),
            er(this, 'usernameRef', void 0),
            er(this, 'globalNameRef', void 0),
            er(this, 'passwordRef', void 0),
            er(this, 'dateOfBirthRef', s.createRef()),
            er(this, '_retryTimer', new h.V7()),
            er(this, 'handleGotoLogin', (e) => {
                let t;
                let { email: n } = this.state,
                    { giftCode: i, guildTemplate: r, invite: s, location: a, onLoginStart: l, redirectTo: c, transitionTo: u, isMobileWebInviteRegistration: d } = this.props;
                if (d) {
                    null == l || l(e);
                    return;
                }
                let h = null != a ? (0, o.parse)(a.search) : {};
                null != s ? (t = J.Z5c.INVITE_LOGIN(s.code)) : null != i ? (t = J.Z5c.GIFT_CODE_LOGIN(i.code)) : null != r ? (t = J.Z5c.GUILD_TEMPLATE_LOGIN(r.code)) : null != c ? ((t = J.Z5c.LOGIN), (h.redirect_to = c)) : ((t = J.Z5c.LOGIN), '' !== n && (h = { email: n })), f.Z.loginReset(), u(t, { search: (0, o.stringify)(h) }), null == l || l(e), V.S.dispatch(J.CkL.WAVE_EMPHASIZE);
            }),
            er(this, 'handleSubmit', (e) => {
                null == e || e.preventDefault();
                let { email: t, username: n, password: i, parsedDateOfBirth: r } = this.state,
                    { invite: s, consentRequired: a } = this.props;
                if (null !== a) {
                    if (null == s) {
                        let e = !1;
                        if ((0 === t.length && (this.setState({ emailClientError: et.intl.string(et.t.EkokLy) }), (e = !0)), 0 === n.length && (this.setState({ usernameClientError: et.intl.string(et.t.EkokLy) }), (e = !0)), 0 === i.length && (this.setState({ passwordClientError: et.intl.string(et.t.EkokLy) }), (e = !0)), null == r && (this.setState({ dateOfBirthClientError: et.intl.string(et.t.EkokLy) }), (e = !0)), e)) return;
                    }
                    this.handleRegister();
                }
            }),
            er(this, 'handleBirthdayChange', (e) => {
                this.setState({ parsedDateOfBirth: e }), null != e && this.setState({ dateOfBirthClientError: null });
            }),
            er(this, 'renderUsernameValidation', () => {
                let { username: e, globalName: t, usernameFocused: n } = this.state,
                    {
                        usernameSuggestion: i,
                        uniqueUsernameRegistrationConfig: { livecheckEnabled: s }
                    } = this.props;
                return (0, r.jsx)(ec, {
                    username: e,
                    suggestion: i,
                    livecheckEnabled: s,
                    globalName: t,
                    isUsernameFocused: n,
                    onClickSuggestion: () => {
                        null != this.usernameRef && this.usernameRef.focus(), null != i && i.length > 0 && this.setState({ username: i });
                    }
                });
            });
        let n = null != e.location ? (0, o.parse)(e.location.search) : {};
        this.state = {
            email: null !== (t = n.email) && void 0 !== t ? t : '',
            username: '',
            globalName: '',
            password: '',
            parsedDateOfBirth: null,
            emailClientError: null,
            usernameClientError: null,
            passwordClientError: null,
            dateOfBirthClientError: null,
            consent: !e.consentRequired,
            consentRequiredProp: e.consentRequired,
            isRateLimited: !1,
            globalNameFocused: !1,
            usernameFocused: !1
        };
    }
}
function eo(e) {
    let t = (0, d.cj)([U.Z, G.default, m.Z, L.Z, R.Z], () => ({
            consentRequired: U.Z.getAuthenticationConsentRequired(),
            registering: G.default.getRegisterStatus() === J.$ib.REGISTERING,
            apiErrors: G.default.getErrors(),
            authenticated: G.default.isAuthenticated(),
            isUnderage: m.Z.isUnderageAnonymous(),
            country: L.Z.getCountryCode(),
            hasLoggedInAccounts: R.Z.getHasLoggedInAccounts()
        })),
        n = (0, k.F4)(),
        i = (0, d.e7)([P.Z], () => P.Z.registrationUsernameSuggestion()),
        [a, l] = s.useState(X.EW.FULL);
    return (
        (0, x.Z)(
            {
                type: u.ImpressionTypes.VIEW,
                name: u.ImpressionNames.USER_REGISTRATION,
                properties: {
                    impression_group: u.ImpressionGroups.USER_REGISTRATION_FLOW,
                    step: a
                }
            },
            {},
            [a]
        ),
        (0, r.jsx)(el, {
            onChangeStep: (e) => l(e),
            registrationCopyExperimentConfig: v.Z.getCurrentConfig({ location: '0ba758_2' }, { autoTrackExposure: !1 }),
            uniqueUsernameRegistrationConfig: n,
            usernameSuggestion: i,
            ...e,
            ...t
        })
    );
}
function ec(e) {
    let t,
        { username: n, suggestion: i, globalName: s, livecheckEnabled: a, isUsernameFocused: l, onClickSuggestion: o } = e,
        u = (0, M.a)(n, a, !0),
        d = a && n.length > 0;
    return (
        (t = d
            ? (0, c.EQ)(u)
                  .with(
                      {
                          type: D.K.ERROR,
                          message: c.P.select()
                      },
                      (e) =>
                          (0, r.jsx)(g.Text, {
                              className: en.messageNegative,
                              variant: 'text-sm/normal',
                              children: e
                          })
                  )
                  .with(
                      {
                          type: D.K.AVAILABLE,
                          message: c.P.select()
                      },
                      (e) =>
                          (0, r.jsx)(g.Text, {
                              className: en.messagePositive,
                              variant: 'text-sm/normal',
                              children: e
                          })
                  )
                  .otherwise(() =>
                      (0, r.jsx)(g.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-normal',
                          children: et.intl.string(et.t.z7c4bG)
                      })
                  )
            : null != i && i.length > 0 && s.length > 0
              ? (0, r.jsx)(g.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    children: et.intl.format(et.t.nDGqqq, {
                        suggestion: i,
                        nameOnClick: o
                    })
                })
              : (0, r.jsx)(g.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    children: et.intl.string(et.t.z7c4bG)
                })),
        (0, r.jsx)(w.Z, {
            show: (d && (null == u ? void 0 : u.type) === D.K.ERROR) || l,
            top: -12,
            bottom: 20,
            children: t
        })
    );
}
er(el, 'defaultProps', {
    giftCodeResolved: !1,
    transitionTo: (e) => n.g.location.assign(e)
});
