let r, i;
n.r(t);
var a,
    o = n(47120);
var s = n(177593);
var l = n(653041);
var u = n(411104);
var c = n(512722),
    d = n.n(c),
    _ = n(213919),
    E = n(756647),
    f = n(442837),
    h = n(544891),
    p = n(433517),
    m = n(570140),
    I = n(911969),
    T = n(109728),
    g = n(670890),
    S = n(569611),
    A = n(710845),
    v = n(703656),
    N = n(786213),
    O = n(626135),
    R = n(449934),
    C = n(960048),
    y = n(117240),
    b = n(412788),
    L = n(981631),
    D = n(723359);
function M(e, t, n) {
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
let P = new A.Z('AuthenticationStore'),
    U = 'fingerprint',
    w = 'email_cache',
    x = 'user_id_cache',
    G = 'login_cache',
    k = null,
    B = null,
    F = null,
    Z = null,
    V = null,
    H = null,
    Y = null,
    j = null,
    W = L.u34.NONE,
    K = L.$ib.NONE,
    z = !1,
    q = [],
    Q = '',
    X = !1,
    $ = null,
    J = !1,
    ee = !1,
    et = '',
    en = !1,
    er = !1,
    ei = {},
    ea = {},
    eo = null,
    es = null,
    el = null,
    eu = null,
    ec = !1,
    ed = !1;
function e_(e) {
    let t = {};
    if (((t.error_code = e.code), null != e.errors)) {
        for (let n of Object.keys(e.errors)) t[n] = [e.getFirstFieldErrorMessage(n)];
        return t;
    }
    return (t.message = e.message), null != e.retryAfter && (t.retry_after = e.retryAfter), t;
}
function eE(e) {
    if (Object.keys(e.fields).length > 0) return e.fields;
    let t = { message: e.message };
    return null != e.retryAfter && (t.retry_after = e.retryAfter), t;
}
function ef(e) {
    let t = null != _.getToken(),
        n = null != p.K.get(L.B1h);
    P.verbose(e, {
        tokenManagerHasToken: t,
        storageHasToken: n
    });
}
function eh() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (((H = p.K.get(U)), null != es)) return es;
    let t = null != H ? H : _.getToken();
    if (!(!(0, v.m1)() || (!e && null != t) || y.Z.isHandoffAvailable())) ep({ withGuildExperiments: !0 });
}
function ep(e) {
    let { withGuildExperiments: t } = e,
        n = {},
        r = O.default.getSuperPropertiesBase64();
    null != r && (n['X-Super-Properties'] = r),
        null != H && (n['X-Fingerprint'] = H),
        (es = h.tn
            .get({
                url: L.ANM.EXPERIMENTS,
                query: { with_guild_experiments: t },
                headers: n,
                context: { location: (0, v.Wf)() },
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
                        (es = null),
                        (0, T.$L)();
                },
                () => {
                    (es = null), m.Z.dispatch({ type: 'EXPERIMENTS_FETCH_FAILURE' });
                }
            ));
}
function em() {
    (Y = H), (H = null), p.K.remove(U);
}
function eI(e, t) {
    ef('setAuthToken called.'), _.setToken(e, t);
}
function eT() {
    return ef('removeAuthToken called.'), _.removeToken();
}
function eg(e) {
    (ea = {}), (W = L.u34.LOGGING_IN), (et = ''), (i = null), null != e.login && (el = e.login), ed || (ed = e.loginMethod === L.nnr.PASSWORD);
}
function eS(e) {
    let { isMultiAccount: t } = e;
    if (((ea = {}), (W = L.u34.NONE), (Q = ''), (X = !1), ($ = null), (i = null), (r = null), !t)) eT(), eh(!1);
}
function eA() {
    W = L.u34.NONE;
}
function ev(e) {
    let { login: t, password: n } = e;
    r = {
        login: t,
        password: n
    };
}
function eN(e) {
    let { token: t } = e;
    (W = L.u34.NONE), eI(t), em(), (Q = ''), (X = !1), ($ = null), (ec = !1), (et = '');
}
function eO(e) {
    let { error: t } = e;
    (Q = ''), (X = !1), ($ = null), (W = null != (ea = eE(t)).date_of_birth ? L.u34.LOGIN_AGE_GATE : L.u34.NONE);
}
function eR() {
    (ea = {}), (ec = !0);
}
function eC(e) {
    let { error: t } = e;
    (Q = ''), (X = !1), ($ = null), (ec = !1), (W = null != (ea = e_(t)).date_of_birth ? L.u34.LOGIN_AGE_GATE : L.u34.NONE);
}
function ey(e) {
    let { ticket: t, sms: n, webauthn: r, backup: i, totp: a } = e;
    null != t && ((Q = t), (X = n), (et = ''), ($ = null != r ? r : null), (ee = i), (J = a)), (ea = {}), (W = L.u34.MFA_STEP);
}
function eb() {
    W = L.u34.LOGGING_IN_MFA;
}
function eL(e) {
    let { message: t } = e;
    (W = L.u34.MFA_STEP), (ea = { code: t });
}
function eD() {
    W = L.u34.LOGGING_IN_MFA_SMS;
}
function eM(e) {
    let { phone: t } = e;
    (W = L.u34.MFA_SMS_STEP), (et = t);
}
function eP(e) {
    let { message: t } = e;
    (W = L.u34.MFA_SMS_STEP), (ea = { code: t });
}
function eU(e) {
    (W = L.u34.ACCOUNT_SCHEDULED_FOR_DELETION), (r = e.credentials);
}
function ew(e) {
    (W = L.u34.ACCOUNT_DISABLED), (r = e.credentials);
}
function ex() {
    W = L.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION;
}
function eG() {
    W = L.u34.PHONE_IP_AUTHORIZATION;
}
function ek(e) {
    let t = e.fingerprint;
    null == H
        ? null != t
            ? (O.default.track(L.rMx.USER_FINGERPRINT_CHANGED, {
                  old_fingerprint: null != Y ? (0, E.s)(Y) : null,
                  new_fingerprint: (0, E.s)(t)
              }),
              (H = t),
              (Y = t),
              p.K.set(U, H))
            : eh()
        : null != t &&
          H !== t &&
          O.default.track(L.rMx.EXTERNAL_FINGERPRINT_DROPPED, {
              fingerprint: (0, E.s)(H),
              dropped_fingerprint: (0, E.s)(t)
          });
}
function eB(e) {
    let { form: t } = e;
    (i = t), (K = L.$ib.REGISTER_AGE_GATE);
}
function eF(e) {
    let { birthday: t } = e;
    (ea = {}),
        null != t &&
            (d()(null != i, 'Got birthday in multistep registration without existing form'),
            (i = {
                ...i,
                birthday: t
            })),
        (K = L.$ib.REGISTERING);
}
function eZ(e) {
    let { token: t } = e;
    (K = L.$ib.NONE), (i = null), eI(t), em();
}
function eV(e) {
    let { error: t } = e;
    (ea = e_(t)), (K = null != t.getFieldErrors('date_of_birth') ? L.$ib.REGISTER_AGE_GATE : L.$ib.REGISTER_WITH_ERROR);
}
function eH() {
    if (0 === Object.keys(ea).length) return !1;
    ea = {};
}
function eY(e) {
    var t;
    let { user: n, sessionId: r, authSessionIdHash: i, analyticsToken: a, auth: o, staticAuthSessionId: s } = e;
    ef('handleConnectionOpen called'), C.Z.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, N.Z)(n)), (F = r), (Z = i), (V = s), (j = a), (k = n.id), (B = n.email), void 0 !== o && (q = o.authenticator_types), p.K.set(w, n.email), p.K.set(x, n.id);
}
function ej(e) {
    var t;
    let { user: n, sessionId: r, analyticsToken: i, token: a } = e;
    C.Z.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, N.Z)(n)), (F = r), (j = i), eI(a), em(), (k = n.id), p.K.set(x, n.id);
}
function eW(e) {
    let { code: t } = e;
    ef('handleConnectionClosed called with code '.concat(t, '.'));
    let r = n(952265).nf;
    if (4004 === t) {
        if (z || r(D.$$) || r(D.dG)) {
            eq();
            return;
        }
        O.default.track(L.rMx.APP_USER_DEAUTHENTICATED, { user_id: p.K.get(x) }), eQ(), setImmediate(() => (0, v.uL)(L.Z5c.DEFAULT_LOGGED_OUT));
    }
}
function eK(e) {
    let { token: t, userId: n } = e;
    ef('handleUpdateToken called'), eI(t, n), em();
}
function ez(e) {
    let { authSessionIdHash: t } = e;
    null != t && (Z = t);
}
function eq() {
    (z = !0),
        eQ(),
        m.Z.wait(() => {
            (0, v.uL)(L.Z5c.REGISTER);
        });
}
function eQ(e) {
    var t;
    ef('handleLogout called.');
    let n = eT();
    !(null !== (t = null == e ? void 0 : e.isSwitchingAccount) && void 0 !== t && t) && (n && em(), eh()),
        f.ZP.PersistedStore.clearAll({
            omit: ['InstallationManagerStore', 'AgeGateStore', 'NativePermissionsStore', 'MultiAccountStore', 'DraftStore', 'OverlayStoreV2', 'StreamerModeStore', 'LoginRequiredActionStore'],
            type: (null == e ? void 0 : e.isSwitchingAccount) ? 'user-data-only' : 'all'
        }),
        b.Z.clearAll();
    S.ZH(), C.Z.clearUser(), p.K.remove(x), (k = null), (W = (null == e ? void 0 : e.isSwitchingAccount) ? L.u34.LOGGING_IN : L.u34.NONE), (K = L.$ib.NONE), (Q = ''), (et = ''), ($ = null), (X = !1), (en = !1), (er = !1), (ei = {}), (ea = {}), (ec = !1), (ed = !1);
}
function eX(e) {
    let { errors: t } = e;
    (en = !0), (er = !1), (ei = null != t ? t : {});
}
function e$(e) {
    (er = !0), (en = !1), (ei = {}), (eo = e.verifyingUserId);
}
function eJ() {
    (W = L.u34.FORGOT_PASSWORD), (ea = {});
}
function e0() {
    (W = L.u34.NONE), (ea = {});
}
function e1(e) {
    let { user: t } = e;
    (k = t.id), (B = t.email), void 0 !== t.authenticator_types && (q = t.authenticator_types), p.K.set(w, t.email), p.K.set(x, t.id);
}
function e2() {
    ea = {};
}
function e3(e) {
    let { suspendedUserToken: t } = e;
    (ec = !1), (eu = t), setImmediate(() => (0, v.uL)(L.Z5c.ACCOUNT_STANDING));
}
function e4() {
    (eu = null), (W = L.u34.NONE), eQ(), setImmediate(() => (0, v.uL)(L.Z5c.DEFAULT_LOGGED_OUT));
}
class e5 extends (a = f.ZP.Store) {
    initialize() {
        (k = p.K.get(x)), (B = p.K.get(w)), (el = p.K.get(G)), null == _.getToken() && eh(), this.addChangeListener(() => (0, g.u)(k));
    }
    getEmail() {
        return B;
    }
    getLogin() {
        return el;
    }
    didVerifyFail() {
        return en;
    }
    getVerifyErrors() {
        return ei;
    }
    didVerifySucceed() {
        return er;
    }
    getLoginStatus() {
        return W;
    }
    getRegisterStatus() {
        return K;
    }
    getId() {
        return k;
    }
    getSessionId() {
        return F;
    }
    getAuthSessionIdHash() {
        return Z;
    }
    getStaticAuthSessionId() {
        return V;
    }
    getToken() {
        return (0, R.LP)();
    }
    isAuthenticated() {
        return (0, R.$8)();
    }
    getFingerprint() {
        return H;
    }
    getAnalyticsToken() {
        return j;
    }
    getErrors() {
        return ea;
    }
    getMFATicket() {
        return Q;
    }
    getMFASMS() {
        return X;
    }
    getMFATotp() {
        return J;
    }
    getMFABackup() {
        return ee;
    }
    getMFAWebAuthn() {
        return $;
    }
    getMFAMethods() {
        let e = [];
        return (
            null != $ &&
                e.push({
                    type: 'webauthn',
                    challenge: $
                }),
            J &&
                e.push({
                    type: 'totp',
                    backup_codes_allowed: ee
                }),
            ee && e.push({ type: 'backup' }),
            X && e.push({ type: 'sms' }),
            e
        );
    }
    hasTOTPEnabled() {
        return q.includes(I.Pi.TOTP);
    }
    hasSMSEnabled() {
        return q.includes(I.Pi.SMS);
    }
    hasWebAuthnEnabled() {
        return q.includes(I.Pi.WEBAUTHN);
    }
    getMaskedPhone() {
        return et;
    }
    getCredentials() {
        if (null == r) throw Error('no credentials');
        return r;
    }
    getVerifyingUserId() {
        return eo;
    }
    getCurrentRegistrationOptions() {
        return i;
    }
    allowLogoutRedirect() {
        return !z;
    }
    getWebAuthnChallenge() {
        return $;
    }
    getSuspendedUserToken() {
        return eu;
    }
    getIsPasswordlessActive() {
        return ec;
    }
    attemptedPasswordLogin() {
        return ed;
    }
}
M(e5, 'displayName', 'AuthenticationStore'),
    (t.default = new e5(
        m.Z,
        {
            CONNECTION_OPEN: eY,
            OVERLAY_INITIALIZE: ej,
            CONNECTION_CLOSED: eW,
            AUTH_SESSION_CHANGE: ez,
            LOGIN: eg,
            LOGIN_SUCCESS: eN,
            LOGIN_FAILURE: eO,
            LOGIN_MFA_STEP: ey,
            LOGIN_MFA: eb,
            LOGIN_MFA_FAILURE: eL,
            LOGIN_MFA_SMS: eD,
            LOGIN_MFA_SMS_REQUEST_SUCCESS: eM,
            LOGIN_MFA_SMS_FAILURE: eP,
            LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: eU,
            LOGIN_ACCOUNT_DISABLED: ew,
            LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: ex,
            LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: eG,
            LOGIN_RESET: eS,
            LOGIN_STATUS_RESET: eA,
            LOGIN_SUSPENDED_USER: e3,
            SET_LOGIN_CREDENTIALS: ev,
            LOGOUT: eQ,
            FINGERPRINT: ek,
            REGISTER_SAVE_FORM: eB,
            REGISTER: eF,
            REGISTER_SUCCESS: eZ,
            REGISTER_FAILURE: eV,
            VERIFY_FAILURE: eX,
            VERIFY_SUCCESS: e$,
            START_SESSION: eH,
            FORGOT_PASSWORD_REQUEST: eJ,
            FORGOT_PASSWORD_SENT: e0,
            UPDATE_TOKEN: eK,
            EXPERIMENTS_FETCH: ep,
            CURRENT_USER_UPDATE: e1,
            AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eq,
            CLEAR_AUTHENTICATION_ERRORS: e2,
            CLOSE_SUSPENDED_USER: e4,
            PASSWORDLESS_FAILURE: eC,
            PASSWORDLESS_START: eR
        },
        m.c.Early
    ));
