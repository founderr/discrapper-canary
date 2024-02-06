"use strict";
let i, r, o, s, l, a, u, c, d;
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var f = n("446674"),
  E = n("913144"),
  _ = n("49111");
let I = _.FormStates.CLOSED,
  h = {},
  S = !1;

function p() {
  I = _.FormStates.CLOSED, h = {}, u = null, c = void 0, d = []
}

function T() {
  N(), C(), h = {}, I = _.FormStates.OPEN
}

function N() {
  i = void 0, l = void 0
}

function C() {
  r = void 0, o = void 0, s = void 0, a = void 0
}
class R extends f.default.Store {
  getFormState() {
    return I
  }
  getErrors() {
    return h
  }
  showNotice() {
    return void 0 !== i || void 0 !== r || void 0 !== o || void 0 !== s || void 0 !== l || void 0 !== a
  }
  getPendingAvatar() {
    return i
  }
  getPendingBanner() {
    return r
  }
  getPendingBio() {
    return o
  }
  getPendingNickname() {
    return l
  }
  getPendingPronouns() {
    return s
  }
  getPendingAccentColor() {
    return l
  }
  getPendingThemeColors() {
    return a
  }
  getAllPending() {
    return {
      pendingAvatar: i,
      pendingBanner: r,
      pendingBio: o,
      pendingPronouns: s,
      pendingNickname: l,
      pendingThemeColors: a
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
    return S
  }
}
R.displayName = "GuildIdentitySettingsStore";
var v = new R(E.default, {
  GUILD_IDENTITY_SETTINGS_INIT: function(e) {
    u = e.guild, I = _.FormStates.OPEN, h = {}, c = e.source, d = e.analyticsLocations
  },
  GUILD_IDENTITY_SETTINGS_CLOSE: p,
  GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
    T(), p()
  },
  GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
    u = e.guild, h = {}
  },
  GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
    I = _.FormStates.SUBMITTING, h = {}
  },
  GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
    var t;
    if (I !== _.FormStates.SUBMITTING) return !1;
    I = _.FormStates.OPEN, h = null !== (t = e.errors) && void 0 !== t ? t : {}
  },
  USER_PROFILE_UPDATE_FAILURE: function(e) {
    I = _.FormStates.OPEN, h = e.errors
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
    r = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
    let {
      bio: t
    } = e;
    o = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
    let {
      pronouns: t
    } = e;
    s = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
    let {
      nickname: t
    } = e;
    l = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
    let {
      themeColors: t
    } = e;
    a = t
  },
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: N,
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: C,
  GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: T,
  GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: T,
  GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
    h = {}
  },
  GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
    let {
      disable: t
    } = e;
    S = t
  }
})