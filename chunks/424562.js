"use strict";
let r, o, u, I, i, T, l, E, _;
n.r(e), n.d(e, {
  default: function() {
    return P
  }
});
var a = n("446674"),
  s = n("913144"),
  S = n("49111");
let c = S.FormStates.CLOSED,
  d = {},
  N = !1;

function f() {
  c = S.FormStates.CLOSED, d = {}, l = null, E = void 0, _ = []
}

function D() {
  G(), L(), d = {}, c = S.FormStates.OPEN
}

function G() {
  r = void 0, i = void 0
}

function L() {
  o = void 0, u = void 0, I = void 0, T = void 0
}
class R extends a.default.Store {
  getFormState() {
    return c
  }
  getErrors() {
    return d
  }
  showNotice() {
    return void 0 !== r || void 0 !== o || void 0 !== u || void 0 !== I || void 0 !== i || void 0 !== T
  }
  getPendingAvatar() {
    return r
  }
  getPendingBanner() {
    return o
  }
  getPendingBio() {
    return u
  }
  getPendingNickname() {
    return i
  }
  getPendingPronouns() {
    return I
  }
  getPendingAccentColor() {
    return i
  }
  getPendingThemeColors() {
    return T
  }
  getAllPending() {
    return {
      pendingAvatar: r,
      pendingBanner: o,
      pendingBio: u,
      pendingPronouns: I,
      pendingNickname: i,
      pendingThemeColors: T
    }
  }
  getGuild() {
    return l
  }
  getSource() {
    return E
  }
  getAnalyticsLocations() {
    return _
  }
  getIsDisableSubmit() {
    return N
  }
}
R.displayName = "GuildIdentitySettingsStore";
var P = new R(s.default, {
  GUILD_IDENTITY_SETTINGS_INIT: function(t) {
    l = t.guild, c = S.FormStates.OPEN, d = {}, E = t.source, _ = t.analyticsLocations
  },
  GUILD_IDENTITY_SETTINGS_CLOSE: f,
  GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
    D(), f()
  },
  GUILD_IDENTITY_SETTINGS_SET_GUILD: function(t) {
    l = t.guild, d = {}
  },
  GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
    c = S.FormStates.SUBMITTING, d = {}
  },
  GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(t) {
    var e;
    if (c !== S.FormStates.SUBMITTING) return !1;
    c = S.FormStates.OPEN, d = null !== (e = t.errors) && void 0 !== e ? e : {}
  },
  USER_PROFILE_UPDATE_FAILURE: function(t) {
    c = S.FormStates.OPEN, d = t.errors
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(t) {
    let {
      avatar: e
    } = t;
    r = e
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(t) {
    let {
      banner: e
    } = t;
    o = e
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(t) {
    let {
      bio: e
    } = t;
    u = e
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(t) {
    let {
      pronouns: e
    } = t;
    I = e
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(t) {
    let {
      nickname: e
    } = t;
    i = e
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(t) {
    let {
      themeColors: e
    } = t;
    T = e
  },
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: G,
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: L,
  GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: D,
  GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: D,
  GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
    d = {}
  },
  GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(t) {
    let {
      disable: e
    } = t;
    N = e
  }
})