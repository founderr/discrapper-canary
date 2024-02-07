"use strict";
let s, o, a, l, r, i, u, d, E, _, c, T, S, N;
n.r(t), n.d(t, {
  default: function() {
    return G
  }
});
var C = n("265586"),
  A = n("446674"),
  f = n("913144"),
  I = n("49111");
let h = I.FormStates.CLOSED,
  R = {},
  m = !1;

function p() {
  h = I.FormStates.OPEN, R = {}
}

function U() {
  h = I.FormStates.CLOSED, R = {}
}

function O() {
  M(), g(), R = {}
}

function M() {
  s = void 0, o = void 0, a = void 0, l = void 0
}

function g() {
  r = void 0, i = void 0, u = void 0, d = void 0, E = void 0, l = void 0
}

function v() {
  c = void 0, T = void 0, S = void 0, N = void 0, _ = void 0
}
class x extends A.default.Store {
  getFormState() {
    return h
  }
  getErrors() {
    return R
  }
  showNotice() {
    return void 0 !== s || void 0 !== r || void 0 !== i || void 0 !== u || void 0 !== d || void 0 !== E || void 0 !== a || void 0 !== l || void 0 !== o
  }
  getPendingAvatar() {
    return s
  }
  getPendingGlobalName() {
    return o
  }
  getPendingBanner() {
    return r
  }
  getPendingBio() {
    return i
  }
  getPendingPronouns() {
    return u
  }
  getPendingAccentColor() {
    return d
  }
  getPendingThemeColors() {
    return E
  }
  getPendingAvatarDecoration() {
    return a
  }
  getPendingProfileEffectId() {
    return l
  }
  getAllPending() {
    return {
      pendingAvatar: s,
      pendingBanner: r,
      pendingBio: i,
      pendingPronouns: u,
      pendingAccentColor: d,
      pendingThemeColors: E,
      pendingAvatarDecoration: a,
      pendingProfileEffectId: l,
      pendingGlobalName: o
    }
  }
  getTryItOutThemeColors() {
    return _
  }
  getTryItOutAvatar() {
    return c
  }
  getTryItOutAvatarDecoration() {
    return T
  }
  getTryItOutProfileEffectId() {
    return S
  }
  getTryItOutBanner() {
    return N
  }
  getAllTryItOut() {
    return {
      tryItOutThemeColors: _,
      tryItOutAvatar: c,
      tryItOutAvatarDecoration: T,
      tryItOutProfileEffectId: S,
      tryItOutBanner: N
    }
  }
  getIsDisableSubmit() {
    return m
  }
}
x.displayName = "UserSettingsAccountStore";
var G = new x(f.default, {
  USER_SETTINGS_ACCOUNT_INIT: p,
  USER_SETTINGS_MODAL_INIT: p,
  USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: p,
  USER_SETTINGS_MODAL_SET_SECTION: function(e) {
    let {
      section: t
    } = e;
    return t === I.UserSettingsSections.ACCOUNT && p()
  },
  USER_SETTINGS_ACCOUNT_CLOSE: U,
  USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: function() {
    O(), v(), U()
  },
  USER_SETTINGS_ACCOUNT_SUBMIT: function() {
    h = I.FormStates.SUBMITTING, R = {}
  },
  USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: function(e) {
    var t;
    if (h !== I.FormStates.SUBMITTING) return !1;
    h = I.FormStates.OPEN, R = null !== (t = e.errors) && void 0 !== t ? t : {}
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: function(e) {
    let {
      avatar: t
    } = e;
    s = t, c = void 0
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: function(e) {
    let {
      globalName: t
    } = e;
    o = t
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: function(e) {
    let {
      avatarDecoration: t
    } = e;
    a = t
  },
  USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: function(e) {
    let {
      item: t
    } = e;
    (null == t ? void 0 : t.type) === C.CollectiblesItemType.PROFILE_EFFECT ? (T = null, S = null == t ? void 0 : t.id) : (S = null, T = t)
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: function(e) {
    let {
      profileEffectId: t
    } = e;
    l = t
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: function(e) {
    let {
      banner: t
    } = e;
    r = t
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: function(e) {
    let {
      bio: t
    } = e;
    i = t
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
    d = t
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: function(e) {
    let {
      themeColors: t
    } = e;
    E = t
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: function(e) {
    let {
      avatar: t
    } = e;
    c = t
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: function(e) {
    let {
      avatarDecoration: t
    } = e;
    T = t
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: function(e) {
    let {
      profileEffectId: t
    } = e;
    S = t
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: function(e) {
    let {
      banner: t
    } = e;
    N = t
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: function(e) {
    let {
      themeColors: t
    } = e;
    _ = t
  },
  USER_SETTINGS_CLEAR_ERRORS: function() {
    R = {}
  },
  USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: M,
  USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: g,
  USER_SETTINGS_RESET_ALL_PENDING: O,
  USER_SETTINGS_RESET_ALL_TRY_IT_OUT: v,
  USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: function() {
    a = void 0
  },
  LOGOUT: function() {
    s = void 0
  },
  USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT: function(e) {
    let {
      disable: t
    } = e;
    m = t
  }
})