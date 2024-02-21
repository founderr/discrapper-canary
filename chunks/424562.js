"use strict";
let i, r, u, a, s, l, o, c, d;
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var f = n("446674"),
  E = n("913144"),
  _ = n("49111");
let T = _.FormStates.CLOSED,
  S = {},
  I = !1;

function h() {
  T = _.FormStates.CLOSED, S = {}, o = null, c = void 0, d = []
}

function N() {
  p(), C(), S = {}, T = _.FormStates.OPEN
}

function p() {
  i = void 0, s = void 0
}

function C() {
  r = void 0, u = void 0, a = void 0, l = void 0
}
class A extends f.default.Store {
  getFormState() {
    return T
  }
  getErrors() {
    return S
  }
  showNotice() {
    return void 0 !== i || void 0 !== r || void 0 !== u || void 0 !== a || void 0 !== s || void 0 !== l
  }
  getPendingAvatar() {
    return i
  }
  getPendingBanner() {
    return r
  }
  getPendingBio() {
    return u
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
    return l
  }
  getAllPending() {
    return {
      pendingAvatar: i,
      pendingBanner: r,
      pendingBio: u,
      pendingPronouns: a,
      pendingNickname: s,
      pendingThemeColors: l
    }
  }
  getGuild() {
    return o
  }
  getSource() {
    return c
  }
  getAnalyticsLocations() {
    return d
  }
  getIsDisableSubmit() {
    return I
  }
}
A.displayName = "GuildIdentitySettingsStore";
var v = new A(E.default, {
  GUILD_IDENTITY_SETTINGS_INIT: function(e) {
    o = e.guild, T = _.FormStates.OPEN, S = {}, c = e.source, d = e.analyticsLocations
  },
  GUILD_IDENTITY_SETTINGS_CLOSE: h,
  GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
    N(), h()
  },
  GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
    o = e.guild, S = {}
  },
  GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
    T = _.FormStates.SUBMITTING, S = {}
  },
  GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
    var t;
    if (T !== _.FormStates.SUBMITTING) return !1;
    T = _.FormStates.OPEN, S = null !== (t = e.errors) && void 0 !== t ? t : {}
  },
  USER_PROFILE_UPDATE_FAILURE: function(e) {
    T = _.FormStates.OPEN, S = e.errors
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
    u = t
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
    l = t
  },
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: p,
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: C,
  GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: N,
  GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: N,
  GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
    S = {}
  },
  GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
    let {
      disable: t
    } = e;
    I = t
  }
})