"use strict";
let i, r, s, o, a, l, u, _, c, d, E, I, T, h;
var f, S, N, A, m = n(979554),
  O = n(442837),
  p = n(570140),
  R = n(981631);
let g = R.QZA.CLOSED,
  C = {};

function v() {
  g = R.QZA.OPEN, C = {}
}

function L() {
  g = R.QZA.CLOSED, C = {}
}

function D() {
  M(), P(), C = {}
}

function M() {
  i = void 0, r = void 0, s = void 0, o = void 0
}

function P() {
  a = void 0, l = void 0, u = void 0, _ = void 0, c = void 0, o = void 0
}

function y() {
  E = void 0, I = void 0, T = void 0, h = void 0, d = void 0
}
class U extends(A = O.ZP.Store) {
  getFormState() {
    return g
  }
  getErrors() {
    return C
  }
  showNotice() {
    return void 0 !== i || void 0 !== a || void 0 !== l || void 0 !== u || void 0 !== _ || void 0 !== c || void 0 !== s || void 0 !== o || void 0 !== r
  }
  getIsSubmitDisabled() {
    return void 0 !== l && l.length > R.tPV
  }
  getPendingAvatar() {
    return i
  }
  getPendingGlobalName() {
    return r
  }
  getPendingBanner() {
    return a
  }
  getPendingBio() {
    return l
  }
  getPendingPronouns() {
    return u
  }
  getPendingAccentColor() {
    return _
  }
  getPendingThemeColors() {
    return c
  }
  getPendingAvatarDecoration() {
    return s
  }
  getPendingProfileEffectId() {
    return o
  }
  getAllPending() {
    return {
      pendingAvatar: i,
      pendingBanner: a,
      pendingBio: l,
      pendingPronouns: u,
      pendingAccentColor: _,
      pendingThemeColors: c,
      pendingAvatarDecoration: s,
      pendingProfileEffectId: o,
      pendingGlobalName: r
    }
  }
  getTryItOutThemeColors() {
    return d
  }
  getTryItOutAvatar() {
    return E
  }
  getTryItOutAvatarDecoration() {
    return I
  }
  getTryItOutProfileEffectId() {
    return T
  }
  getTryItOutBanner() {
    return h
  }
  getAllTryItOut() {
    return {
      tryItOutThemeColors: d,
      tryItOutAvatar: E,
      tryItOutAvatarDecoration: I,
      tryItOutProfileEffectId: T,
      tryItOutBanner: h
    }
  }
}
N = "UserSettingsAccountStore", (S = "displayName") in(f = U) ? Object.defineProperty(f, S, {
  value: N,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : f[S] = N, t.Z = new U(p.Z, {
  USER_SETTINGS_ACCOUNT_INIT: v,
  USER_SETTINGS_MODAL_INIT: v,
  USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: v,
  USER_SETTINGS_MODAL_SET_SECTION: function(e) {
    let {
      section: t
    } = e;
    return t === R.oAB.ACCOUNT && v()
  },
  USER_SETTINGS_ACCOUNT_CLOSE: L,
  USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: function() {
    D(), y(), L()
  },
  USER_SETTINGS_ACCOUNT_SUBMIT: function() {
    g = R.QZA.SUBMITTING, C = {}
  },
  USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: function(e) {
    var t;
    if (g !== R.QZA.SUBMITTING) return !1;
    g = R.QZA.OPEN, C = null !== (t = e.errors) && void 0 !== t ? t : {}
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: function(e) {
    let {
      avatar: t
    } = e;
    i = t, E = void 0
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: function(e) {
    let {
      globalName: t
    } = e;
    r = t
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: function(e) {
    let {
      avatarDecoration: t
    } = e;
    s = t
  },
  USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: function(e) {
    let {
      item: t
    } = e;
    (null == t ? void 0 : t.type) === m.Z.PROFILE_EFFECT ? (I = null, T = null == t ? void 0 : t.id) : (T = null, I = t)
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: function(e) {
    let {
      profileEffectId: t
    } = e;
    o = t
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: function(e) {
    let {
      banner: t
    } = e;
    a = t
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: function(e) {
    let {
      bio: t
    } = e;
    l = t
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: function(e) {
    let {
      pronouns: t
    } = e;
    u = t
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: function(e) {
    let {
      color: t
    } = e;
    _ = t
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: function(e) {
    let {
      themeColors: t
    } = e;
    c = t
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: function(e) {
    let {
      avatar: t
    } = e;
    E = t
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: function(e) {
    let {
      avatarDecoration: t
    } = e;
    I = t
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: function(e) {
    let {
      profileEffectId: t
    } = e;
    T = t
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: function(e) {
    let {
      banner: t
    } = e;
    h = t
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: function(e) {
    let {
      themeColors: t
    } = e;
    d = t
  },
  USER_SETTINGS_CLEAR_ERRORS: function() {
    C = {}
  },
  USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: M,
  USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: P,
  USER_SETTINGS_RESET_ALL_PENDING: D,
  USER_SETTINGS_RESET_ALL_TRY_IT_OUT: y,
  USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: function() {
    s = void 0
  },
  LOGOUT: function() {
    i = void 0
  }
})