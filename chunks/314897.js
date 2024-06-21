"use strict";
let i, r;
n.r(t), n(47120), n(177593), n(653041), n(411104);
var s, o, a, l, u = n(512722),
  _ = n.n(u),
  c = n(213919),
  d = n(756647),
  E = n(442837),
  I = n(544891),
  T = n(433517),
  h = n(570140),
  S = n(911969),
  f = n(109728),
  N = n(670890),
  A = n(569611),
  m = n(710845),
  O = n(703656),
  R = n(786213),
  p = n(626135),
  g = n(449934),
  C = n(960048),
  v = n(117240),
  L = n(412788),
  D = n(981631),
  M = n(723359);
let P = n(952265).nf,
  y = new m.Z("AuthenticationStore"),
  U = "fingerprint",
  b = "email_cache",
  G = "user_id_cache",
  w = null,
  B = null,
  k = null,
  x = null,
  V = null,
  Z = null,
  H = null,
  F = null,
  Y = D.u34.NONE,
  j = D.$ib.NONE,
  W = !1,
  K = [],
  z = "",
  q = !1,
  X = null,
  Q = !1,
  J = !1,
  $ = "",
  ee = !1,
  et = !1,
  en = {},
  ei = {},
  er = null,
  es = null,
  eo = null,
  ea = null,
  el = !1;

function eu(e) {
  let t = {};
  if (t.error_code = e.code, null != e.errors) {
    for (let n of Object.keys(e.errors)) t[n] = [e.getFirstFieldErrorMessage(n)];
    return t
  }
  return t.message = e.message, null != e.retryAfter && (t.retry_after = e.retryAfter), t
}

function e_(e) {
  let t = null != c.getToken(),
    n = null != T.K.get(D.B1h);
  y.verbose(e, {
    tokenManagerHasToken: t,
    storageHasToken: n
  })
}

function ec() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  if (Z = T.K.get(U), null != es) return es;
  let t = null != Z ? Z : c.getToken();
  if (!(!(0, O.m1)() || !e && null != t || v.Z.isHandoffAvailable())) ed({
    withGuildExperiments: !0
  })
}

function ed(e) {
  let {
    withGuildExperiments: t
  } = e, n = {}, i = p.default.getSuperPropertiesBase64();
  null != i && (n["X-Super-Properties"] = i), null != Z && (n["X-Fingerprint"] = Z), es = I.tn.get({
    url: D.ANM.EXPERIMENTS,
    query: {
      with_guild_experiments: t
    },
    headers: n,
    context: {
      location: (0, O.Wf)()
    },
    retries: 3,
    oldFormErrors: !0
  }).then(e => {
    let {
      fingerprint: t,
      assignments: n,
      guild_experiments: i
    } = e.body;
    t && h.Z.dispatch({
      type: "FINGERPRINT",
      fingerprint: t
    }), h.Z.dispatch({
      type: "EXPERIMENTS_FETCH_SUCCESS",
      fingerprint: t,
      experiments: n,
      guildExperiments: i
    }), es = null, (0, f.$L)()
  }, () => {
    es = null, h.Z.dispatch({
      type: "EXPERIMENTS_FETCH_FAILURE"
    })
  })
}

function eE() {
  H = Z, Z = null, T.K.remove(U)
}

function eI(e, t) {
  e_("setAuthToken called."), c.setToken(e, t)
}

function eT() {
  return e_("removeAuthToken called."), c.removeToken()
}

function eh() {
  W = !0, eS(), h.Z.wait(() => {
    (0, O.uL)(D.Z5c.REGISTER)
  })
}

function eS(e) {
  var t;
  e_("handleLogout called.");
  let n = eT();
  !(null !== (t = null == e ? void 0 : e.isSwitchingAccount) && void 0 !== t && t) && (n && eE(), ec()), E.ZP.PersistedStore.clearAll({
    omit: ["InstallationManagerStore", "AgeGateStore", "NativePermissionsStore", "MultiAccountStore", "DraftStore", "OverlayStoreV2", "StreamerModeStore", "LoginRequiredActionStore"],
    type: (null == e ? void 0 : e.isSwitchingAccount) ? "user-data-only" : "all"
  }), L.Z.clearAll();
  A.ZH(), C.Z.clearUser(), T.K.remove(G), w = null, Y = (null == e ? void 0 : e.isSwitchingAccount) ? D.u34.LOGGING_IN : D.u34.NONE, j = D.$ib.NONE, z = "", $ = "", X = null, q = !1, ee = !1, et = !1, en = {}, ei = {}, el = !1
}
class ef extends(s = E.ZP.Store) {
  initialize() {
    w = T.K.get(G), B = T.K.get(b), eo = T.K.get("login_cache"), null == c.getToken() && ec(), this.addChangeListener(() => (0, N.u)(w))
  }
  getEmail() {
    return B
  }
  getLogin() {
    return eo
  }
  didVerifyFail() {
    return ee
  }
  getVerifyErrors() {
    return en
  }
  didVerifySucceed() {
    return et
  }
  getLoginStatus() {
    return Y
  }
  getRegisterStatus() {
    return j
  }
  getId() {
    return w
  }
  getSessionId() {
    return k
  }
  getAuthSessionIdHash() {
    return x
  }
  getStaticAuthSessionId() {
    return V
  }
  getToken() {
    return (0, g.LP)()
  }
  isAuthenticated() {
    return (0, g.$8)()
  }
  getFingerprint() {
    return Z
  }
  getAnalyticsToken() {
    return F
  }
  getErrors() {
    return ei
  }
  getMFATicket() {
    return z
  }
  getMFASMS() {
    return q
  }
  getMFATotp() {
    return Q
  }
  getMFABackup() {
    return J
  }
  getMFAWebAuthn() {
    return X
  }
  getMFAMethods() {
    let e = [];
    return null != X && e.push({
      type: "webauthn",
      challenge: X
    }), Q && e.push({
      type: "totp",
      backup_codes_allowed: J
    }), J && e.push({
      type: "backup"
    }), q && e.push({
      type: "sms"
    }), e
  }
  hasTOTPEnabled() {
    return K.includes(S.Pi.TOTP)
  }
  hasSMSEnabled() {
    return K.includes(S.Pi.SMS)
  }
  hasWebAuthnEnabled() {
    return K.includes(S.Pi.WEBAUTHN)
  }
  getMaskedPhone() {
    return $
  }
  getCredentials() {
    if (null == i) throw Error("no credentials");
    return i
  }
  getVerifyingUserId() {
    return er
  }
  getCurrentRegistrationOptions() {
    return r
  }
  allowLogoutRedirect() {
    return !W
  }
  getWebAuthnChallenge() {
    return X
  }
  getSuspendedUserToken() {
    return ea
  }
  getIsPasswordlessActive() {
    return el
  }
}
l = "AuthenticationStore", (a = "displayName") in(o = ef) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, t.default = new ef(h.Z, {
  CONNECTION_OPEN: function(e) {
    var t;
    let {
      user: n,
      sessionId: i,
      authSessionIdHash: r,
      analyticsToken: s,
      auth: o,
      staticAuthSessionId: a
    } = e;
    e_("handleConnectionOpen called"), C.Z.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, R.Z)(n)), k = i, x = r, V = a, F = s, w = n.id, B = n.email, void 0 !== o && (K = o.authenticator_types), T.K.set(b, n.email), T.K.set(G, n.id)
  },
  OVERLAY_INITIALIZE: function(e) {
    var t;
    let {
      user: n,
      sessionId: i,
      analyticsToken: r,
      token: s
    } = e;
    C.Z.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, R.Z)(n)), k = i, F = r, eI(s), eE(), w = n.id, T.K.set(G, n.id)
  },
  CONNECTION_CLOSED: function(e) {
    let {
      code: t
    } = e;
    if (e_("handleConnectionClosed called with code ".concat(t, ".")), 4004 === t) {
      if (W || P(M.$$) || P(M.dG)) {
        eh();
        return
      }
      p.default.track(D.rMx.APP_USER_DEAUTHENTICATED, {
        user_id: T.K.get(G)
      }), eS(), setImmediate(() => (0, O.uL)(D.Z5c.DEFAULT_LOGGED_OUT))
    }
  },
  AUTH_SESSION_CHANGE: function(e) {
    let {
      authSessionIdHash: t
    } = e;
    null != t && (x = t)
  },
  LOGIN: function(e) {
    ei = {}, Y = D.u34.LOGGING_IN, $ = "", r = null, null != e.login && (eo = e.login)
  },
  LOGIN_SUCCESS: function(e) {
    let {
      token: t
    } = e;
    Y = D.u34.NONE, eI(t), eE(), z = "", q = !1, X = null, el = !1, $ = ""
  },
  LOGIN_FAILURE: function(e) {
    let {
      error: t
    } = e;
    z = "", q = !1, X = null, Y = null != (ei = function(e) {
      if (Object.keys(e.fields).length > 0) return e.fields;
      let t = {
        message: e.message
      };
      return null != e.retryAfter && (t.retry_after = e.retryAfter), t
    }(t)).date_of_birth ? D.u34.LOGIN_AGE_GATE : D.u34.NONE
  },
  LOGIN_MFA_STEP: function(e) {
    let {
      ticket: t,
      sms: n,
      webauthn: i,
      backup: r,
      totp: s
    } = e;
    null != t && (z = t, q = n, $ = "", X = null != i ? i : null, J = r, Q = s), ei = {}, Y = D.u34.MFA_STEP
  },
  LOGIN_MFA: function() {
    Y = D.u34.LOGGING_IN_MFA
  },
  LOGIN_MFA_FAILURE: function(e) {
    let {
      message: t
    } = e;
    Y = D.u34.MFA_STEP, ei = {
      code: t
    }
  },
  LOGIN_MFA_SMS: function() {
    Y = D.u34.LOGGING_IN_MFA_SMS
  },
  LOGIN_MFA_SMS_REQUEST_SUCCESS: function(e) {
    let {
      phone: t
    } = e;
    Y = D.u34.MFA_SMS_STEP, $ = t
  },
  LOGIN_MFA_SMS_FAILURE: function(e) {
    let {
      message: t
    } = e;
    Y = D.u34.MFA_SMS_STEP, ei = {
      code: t
    }
  },
  LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function(e) {
    Y = D.u34.ACCOUNT_SCHEDULED_FOR_DELETION, i = e.credentials
  },
  LOGIN_ACCOUNT_DISABLED: function(e) {
    Y = D.u34.ACCOUNT_DISABLED, i = e.credentials
  },
  LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function() {
    Y = D.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION
  },
  LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function() {
    Y = D.u34.PHONE_IP_AUTHORIZATION
  },
  LOGIN_RESET: function(e) {
    let {
      isMultiAccount: t
    } = e;
    if (ei = {}, Y = D.u34.NONE, z = "", q = !1, X = null, r = null, i = null, !t) eT(), ec(!1)
  },
  LOGIN_STATUS_RESET: function() {
    Y = D.u34.NONE
  },
  LOGIN_SUSPENDED_USER: function(e) {
    let {
      suspendedUserToken: t
    } = e;
    el = !1, ea = t, setImmediate(() => (0, O.uL)(D.Z5c.ACCOUNT_STANDING))
  },
  SET_LOGIN_CREDENTIALS: function(e) {
    let {
      login: t,
      password: n
    } = e;
    i = {
      login: t,
      password: n
    }
  },
  LOGOUT: eS,
  FINGERPRINT: function(e) {
    let t = e.fingerprint;
    null == Z ? null != t ? (p.default.track(D.rMx.USER_FINGERPRINT_CHANGED, {
      old_fingerprint: null != H ? (0, d.s)(H) : null,
      new_fingerprint: (0, d.s)(t)
    }), Z = t, H = t, T.K.set(U, Z)) : ec() : null != t && Z !== t && p.default.track(D.rMx.EXTERNAL_FINGERPRINT_DROPPED, {
      fingerprint: (0, d.s)(Z),
      dropped_fingerprint: (0, d.s)(t)
    })
  },
  REGISTER_SAVE_FORM: function(e) {
    let {
      form: t
    } = e;
    r = t, j = D.$ib.REGISTER_AGE_GATE
  },
  REGISTER: function(e) {
    let {
      birthday: t
    } = e;
    ei = {}, null != t && (_()(null != r, "Got birthday in multistep registration without existing form"), r = {
      ...r,
      birthday: t
    }), j = D.$ib.REGISTERING
  },
  REGISTER_SUCCESS: function(e) {
    let {
      token: t
    } = e;
    j = D.$ib.NONE, r = null, eI(t), eE()
  },
  REGISTER_FAILURE: function(e) {
    let {
      error: t
    } = e;
    ei = eu(t), j = null != t.getFieldErrors("date_of_birth") ? D.$ib.REGISTER_AGE_GATE : D.$ib.REGISTER_WITH_ERROR
  },
  VERIFY_FAILURE: function(e) {
    let {
      errors: t
    } = e;
    ee = !0, et = !1, en = null != t ? t : {}
  },
  VERIFY_SUCCESS: function(e) {
    et = !0, ee = !1, en = {}, er = e.verifyingUserId
  },
  START_SESSION: function() {
    if (0 === Object.keys(ei).length) return !1;
    ei = {}
  },
  FORGOT_PASSWORD_REQUEST: function() {
    Y = D.u34.FORGOT_PASSWORD, ei = {}
  },
  FORGOT_PASSWORD_SENT: function() {
    Y = D.u34.NONE, ei = {}
  },
  UPDATE_TOKEN: function(e) {
    let {
      token: t,
      userId: n
    } = e;
    e_("handleUpdateToken called"), eI(t, n), eE()
  },
  EXPERIMENTS_FETCH: ed,
  CURRENT_USER_UPDATE: function(e) {
    let {
      user: t
    } = e;
    w = t.id, B = t.email, void 0 !== t.authenticator_types && (K = t.authenticator_types), T.K.set(b, t.email), T.K.set(G, t.id)
  },
  AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eh,
  CLEAR_AUTHENTICATION_ERRORS: function() {
    ei = {}
  },
  CLOSE_SUSPENDED_USER: function() {
    ea = null, Y = D.u34.NONE, eS(), setImmediate(() => (0, O.uL)(D.Z5c.DEFAULT_LOGGED_OUT))
  },
  PASSWORDLESS_FAILURE: function(e) {
    let {
      error: t
    } = e;
    z = "", q = !1, X = null, el = !1, Y = null != (ei = eu(t)).date_of_birth ? D.u34.LOGIN_AGE_GATE : D.u34.NONE
  },
  PASSWORDLESS_START: function() {
    ei = {}, el = !0
  }
}, h.c.Early)