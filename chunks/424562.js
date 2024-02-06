"use strict";
let i, l, r, o, a, s, u, c, d;
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var f = n("446674"),
  E = n("913144"),
  p = n("49111");
let h = p.FormStates.CLOSED,
  _ = {},
  C = !1;

function S() {
  h = p.FormStates.CLOSED, _ = {}, u = null, c = void 0, d = []
}

function I() {
  T(), g(), _ = {}, h = p.FormStates.OPEN
}

function T() {
  i = void 0, a = void 0
}

function g() {
  l = void 0, r = void 0, o = void 0, s = void 0
}
class N extends f.default.Store {
  getFormState() {
    return h
  }
  getErrors() {
    return _
  }
  showNotice() {
    return void 0 !== i || void 0 !== l || void 0 !== r || void 0 !== o || void 0 !== a || void 0 !== s
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
    return a
  }
  getPendingPronouns() {
    return o
  }
  getPendingAccentColor() {
    return a
  }
  getPendingThemeColors() {
    return s
  }
  getAllPending() {
    return {
      pendingAvatar: i,
      pendingBanner: l,
      pendingBio: r,
      pendingPronouns: o,
      pendingNickname: a,
      pendingThemeColors: s
    }
  }
  getGuild() {
    return u
  }
  getSource() {
    return c
  }
  getAnalyticsLocations() {
    return d
  }
  getIsDisableSubmit() {
    return C
  }
}
N.displayName = "GuildIdentitySettingsStore";
var v = new N(E.default, {
  GUILD_IDENTITY_SETTINGS_INIT: function(e) {
    u = e.guild, h = p.FormStates.OPEN, _ = {}, c = e.source, d = e.analyticsLocations
  },
  GUILD_IDENTITY_SETTINGS_CLOSE: S,
  GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
    I(), S()
  },
  GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
    u = e.guild, _ = {}
  },
  GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
    h = p.FormStates.SUBMITTING, _ = {}
  },
  GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
    var t;
    if (h !== p.FormStates.SUBMITTING) return !1;
    h = p.FormStates.OPEN, _ = null !== (t = e.errors) && void 0 !== t ? t : {}
  },
  USER_PROFILE_UPDATE_FAILURE: function(e) {
    h = p.FormStates.OPEN, _ = e.errors
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
    o = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
    let {
      nickname: t
    } = e;
    a = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
    let {
      themeColors: t
    } = e;
    s = t
  },
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: T,
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: g,
  GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: I,
  GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: I,
  GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
    _ = {}
  },
  GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
    let {
      disable: t
    } = e;
    C = t
  }
})