let r;
n.d(t, {
    c: function () {
        return i;
    }
});
var i,
    a = n(411104);
var o = n(177593);
var s = n(773603);
var l = n(990547),
    u = n(213919),
    c = n(544891),
    d = n(433517),
    _ = n(570140),
    E = n(881052),
    f = n(882037),
    h = n(710845),
    p = n(57132),
    m = n(703656),
    I = n(365007),
    T = n(314897),
    g = n(480294),
    S = n(573261),
    A = n(572691),
    v = n(981631),
    N = n(792101);
let O = new h.Z('AuthenticationActionCreators'),
    R = 5000,
    C = null;
function y(e) {
    let t = {
        type: 'LOGOUT',
        ...e
    };
    _.Z.dispatch(t).catch((e) => {
        var t;
        throw (O.error('Error while dispatching LOGOUT', e), null === (t = window.DiscordErrors) || void 0 === t || t.softCrash(e), e);
    });
}
function L() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v.Z5c.DEFAULT_LOGGED_OUT;
    if ((y(), null == e)) return;
    let t = (0, p.PP)();
    if (null == t) {
        (0, m.uL)(e);
        return;
    }
    A.Z.popAll(),
        t.reset({
            index: 0,
            routes: [{ name: 'auth' }]
        });
}
!(function (e) {
    (e.MFA = 'MFA'), (e.SUCCESS = 'SUCCESS');
})(i || (i = {})),
    (t.Z = {
        startSession(e) {
            _.Z.wait(() => {
                _.Z.dispatch({
                    type: 'START_SESSION',
                    token: e
                });
            });
        },
        setLoginCredentials(e, t) {
            _.Z.dispatch({
                type: 'SET_LOGIN_CREDENTIALS',
                login: e,
                password: t
            });
        },
        login(e) {
            var t;
            let { login: n, password: r, loginCode: i, undelete: a, source: o, giftCodeSKUId: s, invite: u, isMultiAccount: c } = e;
            _.Z.dispatch({
                type: 'LOGIN',
                login: n,
                loginMethod: null != i && '' !== i ? v.nnr.LOGIN_CODE : v.nnr.PASSWORD
            }),
                this.setLoginCredentials(n, null !== (t = null != r ? r : i) && void 0 !== t ? t : void 0),
                S.Z.post({
                    url: v.ANM.LOGIN,
                    body: {
                        login: n,
                        password: r,
                        undelete: a,
                        login_code: i,
                        login_source: o,
                        gift_code_sku_id: s
                    },
                    retries: 2,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: l.NetworkActionNames.USER_LOGIN,
                        properties: {
                            invite_code: null == u ? void 0 : u.code,
                            is_multi_account: c
                        }
                    },
                    ...(c ? { headers: { authorization: '' } } : {})
                }).then(
                    (e) => {
                        let {
                            body: { mfa: t, sms: n, webauthn: r, ticket: i, token: a, backup: o, user_id: s, required_actions: l, totp: u }
                        } = e;
                        _.Z.dispatch({
                            type: 'LOGIN_ATTEMPTED',
                            user_id: s,
                            required_actions: l
                        }),
                            t
                                ? _.Z.dispatch({
                                      type: 'LOGIN_MFA_STEP',
                                      ticket: i,
                                      sms: n,
                                      webauthn: r,
                                      totp: u,
                                      backup: o
                                  })
                                : c
                                  ? this.switchAccountToken(a)
                                  : _.Z.dispatch({
                                        type: 'LOGIN_SUCCESS',
                                        token: a
                                    });
                    },
                    (e) => {
                        var t, i, a;
                        if (null != e.body && (null === (t = e.body) || void 0 === t ? void 0 : t.suspended_user_token) != null) {
                            _.Z.dispatch({
                                type: 'LOGIN_SUSPENDED_USER',
                                suspendedUserToken: null === (a = e.body) || void 0 === a ? void 0 : a.suspended_user_token
                            });
                            return;
                        }
                        let o = null === (i = e.body) || void 0 === i ? void 0 : i.code;
                        o === v.evJ.ACCOUNT_SCHEDULED_FOR_DELETION && null != r && '' !== r
                            ? _.Z.dispatch({
                                  type: 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION',
                                  credentials: {
                                      login: n,
                                      password: r
                                  }
                              })
                            : o === v.evJ.ACCOUNT_DISABLED && null != r && '' !== r
                              ? _.Z.dispatch({
                                    type: 'LOGIN_ACCOUNT_DISABLED',
                                    credentials: {
                                        login: n,
                                        password: r
                                    }
                                })
                              : o === v.evJ.PHONE_VERIFICATION_REQUIRED
                                ? _.Z.dispatch({ type: 'LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED' })
                                : _.Z.dispatch({
                                      type: 'LOGIN_FAILURE',
                                      error: new E.yZ(e)
                                  });
                    }
                );
        },
        loginMFAv2(e) {
            let { code: t, ticket: n, source: r, giftCodeSKUId: i, isMultiAccount: a, mfaType: o } = e;
            return S.Z.post({
                url: v.ANM.LOGIN_MFA(o),
                body: {
                    code: t,
                    ticket: n,
                    login_source: r,
                    gift_code_sku_id: i
                },
                retries: 2,
                oldFormErrors: !0,
                trackedActionData: { event: l.NetworkActionNames.USER_LOGIN_MFA }
            })
                .then((e) => {
                    a
                        ? this.switchAccountToken(e.body.token)
                        : _.Z.dispatch({
                              type: 'LOGIN_SUCCESS',
                              token: e.body.token
                          });
                })
                .catch((e) => {
                    var t;
                    if (null != e.body && null != e.body.suspended_user_token) {
                        _.Z.dispatch({
                            type: 'LOGIN_SUSPENDED_USER',
                            suspendedUserToken: e.body.suspended_user_token
                        });
                        return;
                    }
                    if ((null === (t = e.body) || void 0 === t ? void 0 : t.code) === v.evJ.MFA_INVALID_CODE) throw Error(e.body.message);
                    throw e;
                });
        },
        authenticatePasswordless(e) {
            let { authenticateFunc: t, conditionalMediationAbortController: n, source: r, giftCodeSKUId: i } = e;
            return (
                null == n || n.abort('Starting non-conditional mediation'),
                _.Z.dispatch({ type: 'PASSWORDLESS_START' }),
                (0, I.d$)()
                    .then((e) => {
                        let { challenge: n, ticket: a } = e;
                        return t(n).then((e) =>
                            this.loginWebAuthn({
                                ticket: a,
                                credential: e,
                                source: r,
                                giftCodeSKUId: i
                            })
                        );
                    })
                    .catch((e) => {
                        throw (
                            (_.Z.dispatch({
                                type: 'PASSWORDLESS_FAILURE',
                                error: e
                            }),
                            e)
                        );
                    })
            );
        },
        loginWebAuthn(e) {
            let { ticket: t, credential: n, source: r, giftCodeSKUId: i } = e;
            return S.Z.post({
                url: v.ANM.WEBAUTHN_CONDITIONAL_UI_LOGIN,
                body: {
                    credential: n,
                    ticket: t,
                    source: r,
                    giftCodeSKUId: i
                },
                retries: 1,
                trackedActionData: { event: l.NetworkActionNames.USER_LOGIN_PASSWORDLESS }
            })
                .then((e) => {
                    let {
                        body: { token: t, user_id: n, required_actions: r }
                    } = e;
                    _.Z.dispatch({
                        type: 'LOGIN_ATTEMPTED',
                        user_id: n,
                        required_actions: r
                    }),
                        _.Z.dispatch({
                            type: 'LOGIN_SUCCESS',
                            token: t
                        });
                })
                .catch((e) => {
                    if (null != e.body && null != e.body.suspended_user_token) {
                        _.Z.dispatch({
                            type: 'LOGIN_SUSPENDED_USER',
                            suspendedUserToken: e.body.suspended_user_token
                        });
                        return;
                    }
                    throw (
                        (_.Z.dispatch({
                            type: 'PASSWORDLESS_FAILURE',
                            error: e
                        }),
                        e)
                    );
                });
        },
        loginToken(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return (
                _.Z.dispatch({ type: 'LOGIN' }),
                new Promise((n) => {
                    setImmediate(() => {
                        _.Z.dispatch({
                            type: 'LOGIN_SUCCESS',
                            token: e
                        }),
                            t && this.startSession(e),
                            n();
                    });
                })
            );
        },
        loginReset(e) {
            _.Z.dispatch({
                type: 'LOGIN_RESET',
                isMultiAccount: e
            });
        },
        loginStatusReset() {
            _.Z.dispatch({ type: 'LOGIN_STATUS_RESET' });
        },
        logoutInternal(e) {
            y(e);
        },
        logout() {
            var e;
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v.Z5c.DEFAULT_LOGGED_OUT,
                n = arguments.length > 1 ? arguments[1] : void 0;
            return S.Z.post({
                url: v.ANM.LOGOUT,
                body: {
                    provider: (0, N.xJ)(),
                    token: d.K.get(v.JkL),
                    voip_provider: N.mv,
                    voip_token: d.K.get(v.scU)
                },
                oldFormErrors: !0,
                trackedActionData: { event: l.NetworkActionNames.USER_LOGOUT },
                ...(null != n && { headers: { authorization: null !== (e = u.getToken(n)) && void 0 !== e ? e : '' } })
            }).finally(() => {
                (null == n || n === T.default.getId()) && L(t);
            });
        },
        switchAccountToken(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = T.default.getToken();
            return (
                O.log('Switching accounts', {
                    wasLoggedIn: null != n,
                    tokenHasChanged: e !== n
                }),
                y({
                    isSwitchingAccount: !0,
                    goHomeAfterSwitching: t
                }),
                this.loginToken(e, !0).then(() => {
                    let t = T.default.getToken();
                    O.log('Switched accounts finished', { isCorrectToken: e === t });
                })
            );
        },
        verifySSOToken() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v.Z5c.DEFAULT_LOGGED_OUT;
            return c.tn
                .get({
                    url: v.ANM.ME,
                    oldFormErrors: !0
                })
                .catch(() => L(e));
        },
        verify(e) {
            null != e
                ? S.Z.post({
                      url: v.ANM.VERIFY,
                      body: { token: e },
                      oldFormErrors: !0,
                      trackedActionData: { event: l.NetworkActionNames.USER_VERIFY }
                  }).then(
                      (e) => {
                          _.Z.dispatch({
                              type: 'LOGIN_SUCCESS',
                              token: e.body.token
                          }),
                              _.Z.dispatch({
                                  type: 'VERIFY_SUCCESS',
                                  verifyingUserId: e.body.user_id
                              });
                      },
                      (e) =>
                          _.Z.dispatch({
                              type: 'VERIFY_FAILURE',
                              errors: e.body
                          })
                  )
                : _.Z.dispatch({
                      type: 'VERIFY_FAILURE',
                      errors: {}
                  });
        },
        async authorizePayment(e) {
            try {
                await S.Z.post({
                    url: v.ANM.AUTHORIZE_PAYMENT,
                    body: { token: e },
                    oldFormErrors: !0,
                    trackedActionData: { event: l.NetworkActionNames.AUTHORIZE_PAYMENT }
                }),
                    _.Z.dispatch({ type: 'VERIFY_SUCCESS' });
            } catch (e) {
                _.Z.dispatch({
                    type: 'VERIFY_FAILURE',
                    errors: {}
                });
            }
        },
        async authorizeIPAddress(e) {
            if (null == e) {
                _.Z.dispatch({
                    type: 'VERIFY_FAILURE',
                    errors: {}
                });
                return;
            }
            try {
                await S.Z.post({
                    url: v.ANM.AUTHORIZE_IP,
                    body: { token: e },
                    oldFormErrors: !0,
                    trackedActionData: { event: l.NetworkActionNames.AUTHORIZE_IP }
                }),
                    _.Z.dispatch({ type: 'VERIFY_SUCCESS' });
            } catch (e) {
                _.Z.dispatch({
                    type: 'VERIFY_FAILURE',
                    errors: {}
                });
            }
        },
        verifyResend: () =>
            S.Z.post({
                url: v.ANM.VERIFY_RESEND,
                oldFormErrors: !0,
                trackedActionData: { event: l.NetworkActionNames.USER_VERIFY_RESEND }
            }),
        async resetPassword(e, t, n) {
            _.Z.dispatch({ type: 'LOGIN' });
            let r = {
                    token: e,
                    password: t,
                    source: n
                },
                i = d.K.get(v.JkL),
                a = (0, N.xJ)();
            null != a && null != i && ((r.push_provider = a), (r.push_token = i));
            let o = d.K.get(v.scU);
            null != N.mv && null != o && ((r.push_voip_provider = N.mv), (r.push_voip_token = o));
            try {
                let {
                    body: { mfa: e, sms: t, webauthn: n, ticket: i, token: a, backup: o, totp: s }
                } = await S.Z.post({
                    url: v.ANM.RESET_PASSWORD,
                    body: r,
                    oldFormErrors: !0,
                    trackedActionData: { event: l.NetworkActionNames.USER_RESET_PASSWORD }
                });
                return {
                    result: e ? 'MFA' : 'SUCCESS',
                    sms: t,
                    webauthn: n,
                    ticket: i,
                    token: a,
                    backup: o,
                    totp: s
                };
            } catch (e) {
                throw (
                    (_.Z.dispatch({
                        type: 'LOGIN_FAILURE',
                        error: new E.yZ(e)
                    }),
                    e)
                );
            }
        },
        async resetPasswordMFAv2(e) {
            let { method: t, code: n, ticket: r, password: i, token: a, source: o } = e;
            return (
                _.Z.dispatch({ type: 'LOGIN_MFA' }),
                (
                    await S.Z.post({
                        url: v.ANM.RESET_PASSWORD,
                        body: {
                            code: n,
                            ticket: r,
                            password: i,
                            token: a,
                            source: o,
                            method: t
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: l.NetworkActionNames.USER_RESET_PASSWORD,
                            properties: { mfa: !0 }
                        }
                    })
                ).body.token
            );
        },
        async forgotPassword(e) {
            this.setLoginCredentials(e), _.Z.dispatch({ type: 'FORGOT_PASSWORD_REQUEST' });
            try {
                await S.Z.post({
                    url: v.ANM.FORGOT_PASSWORD,
                    body: { login: e },
                    oldFormErrors: !0,
                    trackedActionData: { event: l.NetworkActionNames.FORGOT_PASSWORD }
                }),
                    _.Z.dispatch({ type: 'FORGOT_PASSWORD_SENT' });
            } catch (t) {
                let e = new E.yZ(t);
                throw (
                    (e.code === v.evJ.PHONE_VERIFICATION_REQUIRED
                        ? _.Z.dispatch({ type: 'LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION' })
                        : _.Z.dispatch({
                              type: 'LOGIN_FAILURE',
                              error: e
                          }),
                    t)
                );
            }
        },
        setFingerprint(e) {
            _.Z.dispatch({
                type: 'FINGERPRINT',
                fingerprint: e
            });
        },
        getExperiments(e) {
            _.Z.dispatch({
                type: 'EXPERIMENTS_FETCH',
                withGuildExperiments: e
            });
        },
        getLocationMetadata: () =>
            null != C
                ? C
                : (clearTimeout(r),
                  (r = setTimeout(() => {
                      _.Z.dispatch({
                          type: 'SET_CONSENT_REQUIRED',
                          consentRequired: !0
                      });
                  }, R)),
                  (C = c.tn
                      .get({
                          url: v.ANM.AUTH_LOCATION_METADATA,
                          retries: 2,
                          oldFormErrors: !0
                      })
                      .then(
                          (e) => {
                              var t, n, i, a, o;
                              if ((clearTimeout(r), null == g.Z.getAuthenticationConsentRequired())) {
                                  let t = null === (a = null == e ? void 0 : null === (i = e.body) || void 0 === i ? void 0 : i.consent_required) || void 0 === a || a;
                                  _.Z.dispatch({
                                      type: 'SET_CONSENT_REQUIRED',
                                      consentRequired: t
                                  });
                              }
                              if (
                                  (_.Z.dispatch({
                                      type: 'SET_LOCATION_METADATA',
                                      countryCode: null !== (o = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.country_code) && void 0 !== o ? o : void 0
                                  }),
                                  (C = null),
                                  (null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.promotional_email_opt_in) != null)
                              ) {
                                  let t = e.body.promotional_email_opt_in;
                                  (0, f.K4)({
                                      required: t.required,
                                      checked: t.pre_checked,
                                      preChecked: t.pre_checked
                                  });
                              }
                          },
                          () => {
                              clearTimeout(r),
                                  _.Z.dispatch({
                                      type: 'SET_CONSENT_REQUIRED',
                                      consentRequired: !0
                                  }),
                                  (C = null);
                          }
                      ))),
        closeSuspendedUser() {
            _.Z.dispatch({ type: 'CLOSE_SUSPENDED_USER' });
        }
    });
