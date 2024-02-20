"use strict";
let r, i;
n.r(t), n.d(t, {
  default: function() {
    return eE
  }
}), n("222007"), n("860677"), n("424973"), n("70102");
var o = n("627445"),
  l = n.n(o),
  u = n("171718"),
  a = n("391679"),
  s = n("446674"),
  E = n("872717"),
  _ = n("95410"),
  c = n("913144"),
  d = n("798609"),
  T = n("821316"),
  A = n("605250"),
  I = n("393414"),
  S = n("705873"),
  f = n("599110"),
  O = n("831588"),
  R = n("286235"),
  N = n("72177"),
  L = n("455079"),
  p = n("49111"),
  C = n("586391");
let m = n("551042").hasModalOpen,
  P = new A.default("AuthenticationStore"),
  h = "fingerprint",
  D = "email_cache",
  g = "user_id_cache",
  U = null,
  M = null,
  v = null,
  G = null,
  y = null,
  F = null,
  b = null,
  B = p.LoginStates.NONE,
  H = p.RegistrationStates.NONE,
  V = !1,
  w = [],
  k = "",
  K = !1,
  Y = null,
  W = !1,
  x = !1,
  j = "",
  X = !1,
  J = !1,
  z = {},
  Z = {},
  Q = null,
  q = null,
  $ = null,
  ee = null;

function et(e) {
  let t = null != u.default.getToken(),
    n = null != _.default.get(p.TOKEN_KEY);
  P.verbose(e, {
    tokenManagerHasToken: t,
    storageHasToken: n
  })
}

function en() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  if (y = _.default.get(h), null != q) return q;
  let t = null != y ? y : u.default.getToken();
  !(!(0, I.isValidFingerprintRoute)() || !e && null != t || N.default.isHandoffAvailable()) && er({
    withGuildExperiments: !0
  })
}

function er(e) {
  let {
    withGuildExperiments: t
  } = e, n = {}, r = f.default.getSuperPropertiesBase64();
  null != r && (n["X-Super-Properties"] = r), null != y && (n["X-Fingerprint"] = y), q = E.default.get({
    url: p.Endpoints.EXPERIMENTS,
    query: {
      with_guild_experiments: t
    },
    headers: n,
    context: {
      location: (0, I.getFingerprintLocation)()
    },
    retries: 3,
    oldFormErrors: !0
  }).then(e => {
    let {
      fingerprint: t,
      assignments: n,
      guild_experiments: r
    } = e.body;
    t && c.default.dispatch({
      type: "FINGERPRINT",
      fingerprint: t
    }), c.default.dispatch({
      type: "EXPERIMENTS_FETCH_SUCCESS",
      fingerprint: t,
      experiments: n,
      guildExperiments: r
    }), q = null
  }, () => {
    q = null, c.default.dispatch({
      type: "EXPERIMENTS_FETCH_FAILURE"
    })
  })
}

function ei() {
  F = y, y = null, _.default.remove(h)
}

function eo(e, t) {
  et("setAuthToken called."), u.default.setToken(e, t)
}

function el() {
  et("removeAuthToken called."), u.default.removeToken()
}

function eu() {
  V = !0, ea(), c.default.wait(() => {
    (0, I.transitionTo)(p.Routes.REGISTER)
  })
}

function ea(e) {
  et("handleLogout called."), el(), ei(), !(null == e ? void 0 : e.isSwitchingAccount) && en(), s.default.PersistedStore.clearAll({
    omit: ["InstallationManagerStore", "AgeGateStore", "NativePermissionsStore", "MultiAccountStore", "DraftStore", "OverlayStoreV2", "StreamerModeStore", "LoginRequiredActionStore"],
    type: (null == e ? void 0 : e.isSwitchingAccount) ? "user-data-only" : "all"
  }), L.default.clearAll(), T.clear(), R.default.clearUser(), _.default.remove(g), U = null, B = (null == e ? void 0 : e.isSwitchingAccount) ? p.LoginStates.LOGGING_IN : p.LoginStates.NONE, H = p.RegistrationStates.NONE, k = "", j = "", Y = null, K = !1, X = !1, J = !1, z = {}, Z = {}
}
class es extends s.default.Store {
  initialize() {
    U = _.default.get(g), M = _.default.get(D), $ = _.default.get("login_cache"), null == u.default.getToken() && en()
  }
  getEmail() {
    return M
  }
  getLogin() {
    return $
  }
  didVerifyFail() {
    return X
  }
  getVerifyErrors() {
    return z
  }
  didVerifySucceed() {
    return J
  }
  getLoginStatus() {
    return B
  }
  getRegisterStatus() {
    return H
  }
  getId() {
    return U
  }
  getSessionId() {
    return v
  }
  getAuthSessionIdHash() {
    return G
  }
  getToken() {
    return (0, O.getToken)()
  }
  isAuthenticated() {
    return (0, O.isAuthenticated)()
  }
  getFingerprint() {
    return y
  }
  getAnalyticsToken() {
    return b
  }
  getErrors() {
    return Z
  }
  getMFATicket() {
    return k
  }
  getMFASMS() {
    return K
  }
  getMFATotp() {
    return W
  }
  getMFABackup() {
    return x
  }
  getMFAWebAuthn() {
    return Y
  }
  getMFAMethods() {
    let e = [];
    return null != Y && e.push({
      type: "webauthn",
      challenge: Y
    }), W && e.push({
      type: "totp",
      backup_codes_allowed: x
    }), x && e.push({
      type: "backup"
    }), K && e.push({
      type: "sms"
    }), e
  }
  hasTOTPEnabled() {
    return w.includes(d.AuthenticatorType.TOTP)
  }
  hasSMSEnabled() {
    return w.includes(d.AuthenticatorType.SMS)
  }
  hasWebAuthnEnabled() {
    return w.includes(d.AuthenticatorType.WEBAUTHN)
  }
  getMaskedPhone() {
    return j
  }
  getCredentials() {
    if (null == r) throw Error("no credentials");
    return r
  }
  getVerifyingUserId() {
    return Q
  }
  getCurrentRegistrationOptions() {
    return i
  }
  allowLogoutRedirect() {
    return !V
  }
  getWebAuthnChallenge() {
    return Y
  }
  getSuspendedUserToken() {
    return ee
  }
}
es.displayName = "AuthenticationStore";
var eE = new es(c.default, {
  CONNECTION_OPEN: function(e) {
    var t;
    let {
      user: n,
      sessionId: r,
      authSessionIdHash: i,
      analyticsToken: o,
      auth: l
    } = e;
    et("handleConnectionOpen called"), R.default.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, S.default)(n)), v = r, G = i, b = o, U = n.id, M = n.email, void 0 !== l && (w = l.authenticator_types), _.default.set(D, n.email), _.default.set(g, n.id)
  },
  OVERLAY_INITIALIZE: function(e) {
    var t;
    let {
      user: n,
      sessionId: r,
      analyticsToken: i,
      token: o
    } = e;
    R.default.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, S.default)(n)), v = r, b = i, eo(o), ei(), U = n.id, _.default.set(g, n.id)
  },
  CONNECTION_CLOSED: function(e) {
    let {
      code: t
    } = e;
    if (et("handleConnectionClosed called with code ".concat(t, ".")), 4004 === t) {
      if (V || m(C.NEW_USER_AGE_GATE_MODAL_KEY) || m(C.EXISTING_USER_AGE_GATE_MODAL_KEY)) {
        eu();
        return
      }
      f.default.track(p.AnalyticEvents.APP_USER_DEAUTHENTICATED, {
        user_id: _.default.get(g)
      }), ea(), setImmediate(() => (0, I.transitionTo)(p.Routes.DEFAULT_LOGGED_OUT))
    }
  },
  AUTH_SESSION_CHANGE: function(e) {
    let {
      authSessionIdHash: t
    } = e;
    null != t && (G = t)
  },
  LOGIN: function(e) {
    Z = {}, B = p.LoginStates.LOGGING_IN, j = "", i = null, null != e.login && ($ = e.login)
  },
  LOGIN_SUCCESS: function(e) {
    let {
      token: t
    } = e;
    B = p.LoginStates.NONE, eo(t), ei(), k = "", K = !1, Y = null, j = ""
  },
  LOGIN_FAILURE: function(e) {
    let {
      error: t
    } = e;
    k = "", K = !1, Y = null, B = null != (Z = function(e) {
      if (Object.keys(e.fields).length > 0) return e.fields;
      let t = {
        message: e.message
      };
      return null != e.retryAfter && (t.retry_after = e.retryAfter), t
    }(t)).date_of_birth ? p.LoginStates.LOGIN_AGE_GATE : p.LoginStates.NONE
  },
  LOGIN_MFA_STEP: function(e) {
    let {
      ticket: t,
      sms: n,
      webauthn: r,
      backup: i,
      totp: o
    } = e;
    null != t && (k = t, K = n, j = "", Y = null != r ? r : null, x = i, W = o), Z = {}, B = p.LoginStates.MFA_STEP
  },
  LOGIN_MFA: function() {
    B = p.LoginStates.LOGGING_IN_MFA
  },
  LOGIN_MFA_FAILURE: function(e) {
    let {
      message: t
    } = e;
    B = p.LoginStates.MFA_STEP, Z = {
      code: t
    }
  },
  LOGIN_MFA_SMS: function() {
    B = p.LoginStates.LOGGING_IN_MFA_SMS
  },
  LOGIN_MFA_SMS_REQUEST_SUCCESS: function(e) {
    let {
      phone: t
    } = e;
    B = p.LoginStates.MFA_SMS_STEP, j = t
  },
  LOGIN_MFA_SMS_FAILURE: function(e) {
    let {
      message: t
    } = e;
    B = p.LoginStates.MFA_SMS_STEP, Z = {
      code: t
    }
  },
  LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function(e) {
    B = p.LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION, r = e.credentials
  },
  LOGIN_ACCOUNT_DISABLED: function(e) {
    B = p.LoginStates.ACCOUNT_DISABLED, r = e.credentials
  },
  LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function() {
    B = p.LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION
  },
  LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function() {
    B = p.LoginStates.PHONE_IP_AUTHORIZATION
  },
  LOGIN_RESET: function(e) {
    let {
      isMultiAccount: t
    } = e;
    Z = {}, B = p.LoginStates.NONE, k = "", K = !1, Y = null, i = null, r = null, !t && (el(), en(!1))
  },
  LOGIN_STATUS_RESET: function() {
    B = p.LoginStates.NONE
  },
  LOGIN_SUSPENDED_USER: function(e) {
    let {
      suspendedUserToken: t
    } = e;
    ee = t, setImmediate(() => (0, I.transitionTo)(p.Routes.ACCOUNT_STANDING))
  },
  SET_LOGIN_CREDENTIALS: function(e) {
    let {
      login: t,
      password: n
    } = e;
    r = {
      login: t,
      password: n
    }
  },
  LOGOUT: ea,
  FINGERPRINT: function(e) {
    let t = e.fingerprint;
    null == y ? null != t ? (f.default.track(p.AnalyticEvents.USER_FINGERPRINT_CHANGED, {
      old_fingerprint: null != F ? (0, a.extractId)(F) : null,
      new_fingerprint: (0, a.extractId)(t)
    }), y = t, F = t, _.default.set(h, y)) : en() : null != t && y !== t && f.default.track(p.AnalyticEvents.EXTERNAL_FINGERPRINT_DROPPED, {
      fingerprint: (0, a.extractId)(y),
      dropped_fingerprint: (0, a.extractId)(t)
    })
  },
  REGISTER_SAVE_FORM: function(e) {
    let {
      form: t
    } = e;
    i = t, H = p.RegistrationStates.REGISTER_AGE_GATE
  },
  REGISTER: function(e) {
    let {
      birthday: t
    } = e;
    Z = {}, null != t && (l(null != i, "Got birthday in multistep registration without existing form"), i = {
      ...i,
      birthday: t
    }), H = p.RegistrationStates.REGISTERING
  },
  REGISTER_SUCCESS: function(e) {
    let {
      token: t
    } = e;
    H = p.RegistrationStates.NONE, i = null, eo(t), ei()
  },
  REGISTER_FAILURE: function(e) {
    let {
      error: t
    } = e;
    Z = function(e) {
      let t = {};
      if (t.error_code = e.code, null != e.errors) {
        for (let n of Object.keys(e.errors)) t[n] = [e.getFirstFieldErrorMessage(n)];
        return t
      }
      return t.message = e.message, null != e.retryAfter && (t.retry_after = e.retryAfter), t
    }(t), H = null != t.getFieldErrors("date_of_birth") ? p.RegistrationStates.REGISTER_AGE_GATE : p.RegistrationStates.REGISTER_WITH_ERROR
  },
  VERIFY_FAILURE: function(e) {
    let {
      errors: t
    } = e;
    X = !0, J = !1, z = null != t ? t : {}
  },
  VERIFY_SUCCESS: function(e) {
    J = !0, X = !1, z = {}, Q = e.verifyingUserId
  },
  START_SESSION: function() {
    if (0 === Object.keys(Z).length) return !1;
    Z = {}
  },
  FORGOT_PASSWORD_REQUEST: function() {
    B = p.LoginStates.FORGOT_PASSWORD, Z = {}
  },
  FORGOT_PASSWORD_SENT: function() {
    B = p.LoginStates.NONE, Z = {}
  },
  UPDATE_TOKEN: function(e) {
    let {
      token: t,
      userId: n
    } = e;
    et("handleUpdateToken called"), eo(t, n), ei()
  },
  EXPERIMENTS_FETCH: er,
  CURRENT_USER_UPDATE: function(e) {
    let {
      user: t
    } = e;
    U = t.id, M = t.email, void 0 !== t.authenticator_types && (w = t.authenticator_types), _.default.set(D, t.email), _.default.set(g, t.id)
  },
  AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eu,
  CLEAR_AUTHENTICATION_ERRORS: function() {
    Z = {}
  },
  CLOSE_SUSPENDED_USER: function() {
    ee = null, B = p.LoginStates.NONE, ea(), setImmediate(() => (0, I.transitionTo)(p.Routes.DEFAULT_LOGGED_OUT))
  }
}, c.DispatchBand.Early)