"use strict";
let o, s, a, r, l, i, E, _, u, T, S, d, N, c;
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var C = n("265586"),
  A = n("446674"),
  I = n("913144"),
  f = n("49111");
let R = f.FormStates.CLOSED,
  U = {},
  O = !1;

function m() {
  R = f.FormStates.OPEN, U = {}
}

function p() {
  R = f.FormStates.CLOSED, U = {}
}

function v() {
  M(), D(), U = {}
}

function M() {
  o = void 0, s = void 0, a = void 0, r = void 0
}

function D() {
  l = void 0, i = void 0, E = void 0, _ = void 0, u = void 0, r = void 0
}

function G() {
  S = void 0, d = void 0, N = void 0, c = void 0, T = void 0
}
class h extends A.default.Store {
  getFormState() {
    return R
  }
  getErrors() {
    return U
  }
  showNotice() {
    return void 0 !== o || void 0 !== l || void 0 !== i || void 0 !== E || void 0 !== _ || void 0 !== u || void 0 !== a || void 0 !== r || void 0 !== s
  }
  getPendingAvatar() {
    return o
  }
  getPendingGlobalName() {
    return s
  }
  getPendingBanner() {
    return l
  }
  getPendingBio() {
    return i
  }
  getPendingPronouns() {
    return E
  }
  getPendingAccentColor() {
    return _
  }
  getPendingThemeColors() {
    return u
  }
  getPendingAvatarDecoration() {
    return a
  }
  getPendingProfileEffectId() {
    return r
  }
  getAllPending() {
    return {
      pendingAvatar: o,
      pendingBanner: l,
      pendingBio: i,
      pendingPronouns: E,
      pendingAccentColor: _,
      pendingThemeColors: u,
      pendingAvatarDecoration: a,
      pendingProfileEffectId: r,
      pendingGlobalName: s
    }
  }
  getTryItOutThemeColors() {
    return T
  }
  getTryItOutAvatar() {
    return S
  }
  getTryItOutAvatarDecoration() {
    return d
  }
  getTryItOutProfileEffectId() {
    return N
  }
  getTryItOutBanner() {
    return c
  }
  getAllTryItOut() {
    return {
      tryItOutThemeColors: T,
      tryItOutAvatar: S,
      tryItOutAvatarDecoration: d,
      tryItOutProfileEffectId: N,
      tryItOutBanner: c
    }
  }
  getIsDisableSubmit() {
    return O
  }
}
h.displayName = "UserSettingsAccountStore";
var g = new h(I.default, {
  USER_SETTINGS_ACCOUNT_INIT: m,
  USER_SETTINGS_MODAL_INIT: m,
  USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: m,
  USER_SETTINGS_MODAL_SET_SECTION: function(e) {
    let {
      section: t
    } = e;
    return t === f.UserSettingsSections.ACCOUNT && m()
  },
  USER_SETTINGS_ACCOUNT_CLOSE: p,
  USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: function() {
    v(), G(), p()
  },
  USER_SETTINGS_ACCOUNT_SUBMIT: function() {
    R = f.FormStates.SUBMITTING, U = {}
  },
  USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: function(e) {
    var t;
    if (R !== f.FormStates.SUBMITTING) return !1;
    R = f.FormStates.OPEN, U = null !== (t = e.errors) && void 0 !== t ? t : {}
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: function(e) {
    let {
      avatar: t
    } = e;
    o = t, S = void 0
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: function(e) {
    let {
      globalName: t
    } = e;
    s = t
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
    (null == t ? void 0 : t.type) === C.CollectiblesItemType.PROFILE_EFFECT ? (d = null, N = null == t ? void 0 : t.id) : (N = null, d = t)
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: function(e) {
    let {
      profileEffectId: t
    } = e;
    r = t
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: function(e) {
    let {
      banner: t
    } = e;
    l = t
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
    E = t
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
    u = t
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: function(e) {
    let {
      avatar: t
    } = e;
    S = t
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: function(e) {
    let {
      avatarDecoration: t
    } = e;
    d = t
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: function(e) {
    let {
      profileEffectId: t
    } = e;
    N = t
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: function(e) {
    let {
      banner: t
    } = e;
    c = t
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: function(e) {
    let {
      themeColors: t
    } = e;
    T = t
  },
  USER_SETTINGS_CLEAR_ERRORS: function() {
    U = {}
  },
  USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: M,
  USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: D,
  USER_SETTINGS_RESET_ALL_PENDING: v,
  USER_SETTINGS_RESET_ALL_TRY_IT_OUT: G,
  USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: function() {
    a = void 0
  },
  LOGOUT: function() {
    o = void 0
  },
  USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT: function(e) {
    let {
      disable: t
    } = e;
    O = t
  }
})