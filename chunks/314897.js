let r, i;
n.r(t), n(47120), n(177593), n(653041), n(411104);
var a,
    s,
    o,
    l,
    u = n(512722),
    c = n.n(u),
    d = n(213919),
    f = n(756647),
    _ = n(442837),
    p = n(544891),
    h = n(433517),
    m = n(570140),
    g = n(911969),
    E = n(109728),
    v = n(670890),
    I = n(569611),
    b = n(710845),
    S = n(703656),
    T = n(786213),
    y = n(626135),
    A = n(449934),
    N = n(960048),
    C = n(117240),
    R = n(412788),
    O = n(981631),
    D = n(723359);
let L = new b.Z('AuthenticationStore'),
    x = 'fingerprint',
    w = 'email_cache',
    M = 'user_id_cache',
    P = null,
    k = null,
    U = null,
    B = null,
    G = null,
    Z = null,
    F = null,
    V = null,
    j = O.u34.NONE,
    H = O.$ib.NONE,
    Y = !1,
    W = [],
    K = '',
    z = !1,
    q = null,
    Q = !1,
    X = !1,
    J = '',
    $ = !1,
    ee = !1,
    et = {},
    en = {},
    er = null,
    ei = null,
    ea = null,
    es = null,
    eo = !1,
    el = !1;
function eu(e) {
    let t = {};
    if (((t.error_code = e.code), null != e.errors)) {
        for (let n of Object.keys(e.errors)) t[n] = [e.getFirstFieldErrorMessage(n)];
        return t;
    }
    return (t.message = e.message), null != e.retryAfter && (t.retry_after = e.retryAfter), t;
}
function ec(e) {
    let t = null != d.getToken(),
        n = null != h.K.get(O.B1h);
    L.verbose(e, {
        tokenManagerHasToken: t,
        storageHasToken: n
    });
}
function ed() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((Z = h.K.get(x)), null != ei)) return ei;
    let t = null != Z ? Z : d.getToken();
    if (!(!(0, S.m1)() || (!e && null != t) || C.Z.isHandoffAvailable())) ef({ withGuildExperiments: !0 });
}
function ef(e) {
    let { withGuildExperiments: t } = e,
        n = {},
        r = y.default.getSuperPropertiesBase64();
    null != r && (n['X-Super-Properties'] = r),
        null != Z && (n['X-Fingerprint'] = Z),
        (ei = p.tn
            .get({
                url: O.ANM.EXPERIMENTS,
                query: { with_guild_experiments: t },
                headers: n,
                context: { location: (0, S.Wf)() },
                retries: 3,
                oldFormErrors: !0
            })
            .then(
                (e) => {
                    let { fingerprint: t, assignments: n, guild_experiments: r } = e.body;
                    t &&
                        m.Z.dispatch({
                            type: 'FINGERPRINT',
                            fingerprint: t
                        }),
                        m.Z.dispatch({
                            type: 'EXPERIMENTS_FETCH_SUCCESS',
                            fingerprint: t,
                            experiments: n,
                            guildExperiments: r
                        }),
                        (ei = null),
                        (0, E.$L)();
                },
                () => {
                    (ei = null), m.Z.dispatch({ type: 'EXPERIMENTS_FETCH_FAILURE' });
                }
            ));
}
function e_() {
    (F = Z), (Z = null), h.K.remove(x);
}
function ep(e, t) {
    ec('setAuthToken called.'), d.setToken(e, t);
}
function eh() {
    return ec('removeAuthToken called.'), d.removeToken();
}
function em() {
    (Y = !0),
        eg(),
        m.Z.wait(() => {
            (0, S.uL)(O.Z5c.REGISTER);
        });
}
function eg(e) {
    var t;
    ec('handleLogout called.');
    let n = eh();
    !(null !== (t = null == e ? void 0 : e.isSwitchingAccount) && void 0 !== t && t) && (n && e_(), ed()),
        _.ZP.PersistedStore.clearAll({
            omit: ['InstallationManagerStore', 'AgeGateStore', 'NativePermissionsStore', 'MultiAccountStore', 'DraftStore', 'OverlayStoreV2', 'StreamerModeStore', 'LoginRequiredActionStore'],
            type: (null == e ? void 0 : e.isSwitchingAccount) ? 'user-data-only' : 'all'
        }),
        R.Z.clearAll();
    I.ZH(), N.Z.clearUser(), h.K.remove(M), (P = null), (U = null), (j = (null == e ? void 0 : e.isSwitchingAccount) ? O.u34.LOGGING_IN : O.u34.NONE), (H = O.$ib.NONE), (K = ''), (J = ''), (q = null), (z = !1), ($ = !1), (ee = !1), (et = {}), (en = {}), (eo = !1), (el = !1);
}
class eE extends (a = _.ZP.Store) {
    initialize() {
        (P = h.K.get(M)), (k = h.K.get(w)), (ea = h.K.get('login_cache')), null == d.getToken() && ed(), this.addChangeListener(() => (0, v.u)(P));
    }
    getEmail() {
        return k;
    }
    getLogin() {
        return ea;
    }
    didVerifyFail() {
        return $;
    }
    getVerifyErrors() {
        return et;
    }
    didVerifySucceed() {
        return ee;
    }
    getLoginStatus() {
        return j;
    }
    getRegisterStatus() {
        return H;
    }
    getId() {
        return P;
    }
    getSessionId() {
        return U;
    }
    getAuthSessionIdHash() {
        return B;
    }
    getStaticAuthSessionId() {
        return G;
    }
    getToken() {
        return (0, A.LP)();
    }
    isAuthenticated() {
        return (0, A.$8)();
    }
    getFingerprint() {
        return Z;
    }
    getAnalyticsToken() {
        return V;
    }
    getErrors() {
        return en;
    }
    getMFATicket() {
        return K;
    }
    getMFASMS() {
        return z;
    }
    getMFATotp() {
        return Q;
    }
    getMFABackup() {
        return X;
    }
    getMFAWebAuthn() {
        return q;
    }
    getMFAMethods() {
        let e = [];
        return (
            null != q &&
                e.push({
                    type: 'webauthn',
                    challenge: q
                }),
            Q &&
                e.push({
                    type: 'totp',
                    backup_codes_allowed: X
                }),
            X && e.push({ type: 'backup' }),
            z && e.push({ type: 'sms' }),
            e
        );
    }
    hasTOTPEnabled() {
        return W.includes(g.Pi.TOTP);
    }
    hasSMSEnabled() {
        return W.includes(g.Pi.SMS);
    }
    hasWebAuthnEnabled() {
        return W.includes(g.Pi.WEBAUTHN);
    }
    getMaskedPhone() {
        return J;
    }
    getCredentials() {
        if (null == r) throw Error('no credentials');
        return r;
    }
    getVerifyingUserId() {
        return er;
    }
    getCurrentRegistrationOptions() {
        return i;
    }
    allowLogoutRedirect() {
        return !Y;
    }
    getWebAuthnChallenge() {
        return q;
    }
    getSuspendedUserToken() {
        return es;
    }
    getIsPasswordlessActive() {
        return eo;
    }
    attemptedPasswordLogin() {
        return el;
    }
}
(l = 'AuthenticationStore'),
    (o = 'displayName') in (s = eE)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.default = new eE(
        m.Z,
        {
            CONNECTION_OPEN: function (e) {
                var t;
                let { user: n, sessionId: r, authSessionIdHash: i, analyticsToken: a, auth: s, staticAuthSessionId: o } = e;
                ec('handleConnectionOpen called'), N.Z.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, T.Z)(n)), (U = r), (B = i), (G = o), (V = a), (P = n.id), (k = n.email), void 0 !== s && (W = s.authenticator_types), h.K.set(w, n.email), h.K.set(M, n.id);
            },
            OVERLAY_INITIALIZE: function (e) {
                var t;
                let { user: n, sessionId: r, analyticsToken: i, token: a } = e;
                N.Z.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, T.Z)(n)), (U = r), (V = i), ep(a), e_(), (P = n.id), h.K.set(M, n.id);
            },
            CONNECTION_CLOSED: function (e) {
                let { code: t } = e;
                ec('handleConnectionClosed called with code '.concat(t, '.'));
                let r = n(952265).nf;
                if (4004 === t) {
                    if (Y || r(D.$$) || r(D.dG)) {
                        em();
                        return;
                    }
                    y.default.track(O.rMx.APP_USER_DEAUTHENTICATED, { user_id: h.K.get(M) }), eg(), setImmediate(() => (0, S.uL)(O.Z5c.DEFAULT_LOGGED_OUT));
                }
            },
            AUTH_SESSION_CHANGE: function (e) {
                let { authSessionIdHash: t } = e;
                null != t && (B = t);
            },
            LOGIN: function (e) {
                (en = {}), (j = O.u34.LOGGING_IN), (J = ''), (i = null), null != e.login && (ea = e.login), el || (el = e.loginMethod === O.nnr.PASSWORD);
            },
            LOGIN_SUCCESS: function (e) {
                let { token: t } = e;
                (j = O.u34.NONE), ep(t), e_(), (K = ''), (z = !1), (q = null), (eo = !1), (J = '');
            },
            LOGIN_FAILURE: function (e) {
                let { error: t } = e;
                (K = ''),
                    (z = !1),
                    (q = null),
                    (j =
                        null !=
                        (en = (function (e) {
                            if (Object.keys(e.fields).length > 0) return e.fields;
                            let t = { message: e.message };
                            return null != e.retryAfter && (t.retry_after = e.retryAfter), t;
                        })(t)).date_of_birth
                            ? O.u34.LOGIN_AGE_GATE
                            : O.u34.NONE);
            },
            LOGIN_MFA_STEP: function (e) {
                let { ticket: t, sms: n, webauthn: r, backup: i, totp: a } = e;
                null != t && ((K = t), (z = n), (J = ''), (q = null != r ? r : null), (X = i), (Q = a)), (en = {}), (j = O.u34.MFA_STEP);
            },
            LOGIN_MFA: function () {
                j = O.u34.LOGGING_IN_MFA;
            },
            LOGIN_MFA_FAILURE: function (e) {
                let { message: t } = e;
                (j = O.u34.MFA_STEP), (en = { code: t });
            },
            LOGIN_MFA_SMS: function () {
                j = O.u34.LOGGING_IN_MFA_SMS;
            },
            LOGIN_MFA_SMS_REQUEST_SUCCESS: function (e) {
                let { phone: t } = e;
                (j = O.u34.MFA_SMS_STEP), (J = t);
            },
            LOGIN_MFA_SMS_FAILURE: function (e) {
                let { message: t } = e;
                (j = O.u34.MFA_SMS_STEP), (en = { code: t });
            },
            LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function (e) {
                (j = O.u34.ACCOUNT_SCHEDULED_FOR_DELETION), (r = e.credentials);
            },
            LOGIN_ACCOUNT_DISABLED: function (e) {
                (j = O.u34.ACCOUNT_DISABLED), (r = e.credentials);
            },
            LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function () {
                j = O.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION;
            },
            LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function () {
                j = O.u34.PHONE_IP_AUTHORIZATION;
            },
            LOGIN_RESET: function (e) {
                let { isMultiAccount: t } = e;
                if (((en = {}), (j = O.u34.NONE), (K = ''), (z = !1), (q = null), (i = null), (r = null), !t)) eh(), ed(!1);
            },
            LOGIN_STATUS_RESET: function () {
                j = O.u34.NONE;
            },
            LOGIN_SUSPENDED_USER: function (e) {
                let { suspendedUserToken: t } = e;
                (eo = !1), (es = t), setImmediate(() => (0, S.uL)(O.Z5c.ACCOUNT_STANDING));
            },
            SET_LOGIN_CREDENTIALS: function (e) {
                let { login: t, password: n } = e;
                r = {
                    login: t,
                    password: n
                };
            },
            LOGOUT: eg,
            FINGERPRINT: function (e) {
                let t = e.fingerprint;
                null == Z
                    ? null != t
                        ? (y.default.track(O.rMx.USER_FINGERPRINT_CHANGED, {
                              old_fingerprint: null != F ? (0, f.s)(F) : null,
                              new_fingerprint: (0, f.s)(t)
                          }),
                          (Z = t),
                          (F = t),
                          h.K.set(x, Z))
                        : ed()
                    : null != t &&
                      Z !== t &&
                      y.default.track(O.rMx.EXTERNAL_FINGERPRINT_DROPPED, {
                          fingerprint: (0, f.s)(Z),
                          dropped_fingerprint: (0, f.s)(t)
                      });
            },
            REGISTER_SAVE_FORM: function (e) {
                let { form: t } = e;
                (i = t), (H = O.$ib.REGISTER_AGE_GATE);
            },
            REGISTER: function (e) {
                let { birthday: t } = e;
                (en = {}),
                    null != t &&
                        (c()(null != i, 'Got birthday in multistep registration without existing form'),
                        (i = {
                            ...i,
                            birthday: t
                        })),
                    (H = O.$ib.REGISTERING);
            },
            REGISTER_SUCCESS: function (e) {
                let { token: t } = e;
                (H = O.$ib.NONE), (i = null), ep(t), e_();
            },
            REGISTER_FAILURE: function (e) {
                let { error: t } = e;
                (en = eu(t)), (H = null != t.getFieldErrors('date_of_birth') ? O.$ib.REGISTER_AGE_GATE : O.$ib.REGISTER_WITH_ERROR);
            },
            VERIFY_FAILURE: function (e) {
                let { errors: t } = e;
                ($ = !0), (ee = !1), (et = null != t ? t : {});
            },
            VERIFY_SUCCESS: function (e) {
                (ee = !0), ($ = !1), (et = {}), (er = e.verifyingUserId);
            },
            START_SESSION: function () {
                if (0 === Object.keys(en).length) return !1;
                en = {};
            },
            FORGOT_PASSWORD_REQUEST: function () {
                (j = O.u34.FORGOT_PASSWORD), (en = {});
            },
            FORGOT_PASSWORD_SENT: function () {
                (j = O.u34.NONE), (en = {});
            },
            UPDATE_TOKEN: function (e) {
                let { token: t, userId: n } = e;
                ec('handleUpdateToken called'), ep(t, n), e_();
            },
            EXPERIMENTS_FETCH: ef,
            CURRENT_USER_UPDATE: function (e) {
                let { user: t } = e;
                (P = t.id), (k = t.email), void 0 !== t.authenticator_types && (W = t.authenticator_types), h.K.set(w, t.email), h.K.set(M, t.id);
            },
            AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: em,
            CLEAR_AUTHENTICATION_ERRORS: function () {
                en = {};
            },
            CLOSE_SUSPENDED_USER: function () {
                (es = null), (j = O.u34.NONE), eg(), setImmediate(() => (0, S.uL)(O.Z5c.DEFAULT_LOGGED_OUT));
            },
            PASSWORDLESS_FAILURE: function (e) {
                let { error: t } = e;
                (K = ''), (z = !1), (q = null), (eo = !1), (j = null != (en = eu(t)).date_of_birth ? O.u34.LOGIN_AGE_GATE : O.u34.NONE);
            },
            PASSWORDLESS_START: function () {
                (en = {}), (eo = !0);
            }
        },
        m.c.Early
    ));
