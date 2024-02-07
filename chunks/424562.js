"use strict";
let i, l, r, a, s, u, o, d, c;
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var _ = n("446674"),
  I = n("913144"),
  E = n("49111");
let f = E.FormStates.CLOSED,
  T = {},
  S = !1;

function D() {
  f = E.FormStates.CLOSED, T = {}, o = null, d = void 0, c = []
}

function N() {
  A(), L(), T = {}, f = E.FormStates.OPEN
}

function A() {
  i = void 0, s = void 0
}

function L() {
  l = void 0, r = void 0, a = void 0, u = void 0
}
class m extends _.default.Store {
  getFormState() {
    return f
  }
  getErrors() {
    return T
  }
  showNotice() {
    return void 0 !== i || void 0 !== l || void 0 !== r || void 0 !== a || void 0 !== s || void 0 !== u
  }
  getPendingAvatar() {
    return i
  }
  getPendingBanner() {
    return l
  }
  getPendingBio() {
    return r
  }
  getPendingNickname() {
    return s
  }
  getPendingPronouns() {
    return a
  }
  getPendingAccentColor() {
    return s
  }
  getPendingThemeColors() {
    return u
  }
  getAllPending() {
    return {
      pendingAvatar: i,
      pendingBanner: l,
      pendingBio: r,
      pendingPronouns: a,
      pendingNickname: s,
      pendingThemeColors: u
    }
  }
  getGuild() {
    return o
  }
  getSource() {
    return d
  }
  getAnalyticsLocations() {
    return c
  }
  getIsDisableSubmit() {
    return S
  }
}
m.displayName = "GuildIdentitySettingsStore";
var h = new m(I.default, {
  GUILD_IDENTITY_SETTINGS_INIT: function(e) {
    o = e.guild, f = E.FormStates.OPEN, T = {}, d = e.source, c = e.analyticsLocations
  },
  GUILD_IDENTITY_SETTINGS_CLOSE: D,
  GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
    N(), D()
  },
  GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
    o = e.guild, T = {}
  },
  GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
    f = E.FormStates.SUBMITTING, T = {}
  },
  GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
    var t;
    if (f !== E.FormStates.SUBMITTING) return !1;
    f = E.FormStates.OPEN, T = null !== (t = e.errors) && void 0 !== t ? t : {}
  },
  USER_PROFILE_UPDATE_FAILURE: function(e) {
    f = E.FormStates.OPEN, T = e.errors
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
    let {
      avatar: t
    } = e;
    i = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
    let {
      banner: t
    } = e;
    l = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
    let {
      bio: t
    } = e;
    r = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
    let {
      pronouns: t
    } = e;
    a = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
    let {
      nickname: t
    } = e;
    s = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
    let {
      themeColors: t
    } = e;
    u = t
  },
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: A,
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: L,
  GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: N,
  GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: N,
  GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
    T = {}
  },
  GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
    let {
      disable: t
    } = e;
    S = t
  }
})