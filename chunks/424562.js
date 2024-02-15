"use strict";
let i, r, l, u, a, s, o, d, c;
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var f = n("446674"),
  E = n("913144"),
  _ = n("49111");
let S = _.FormStates.CLOSED,
  T = {},
  I = !1;

function h() {
  S = _.FormStates.CLOSED, T = {}, o = null, d = void 0, c = []
}

function v() {
  N(), C(), T = {}, S = _.FormStates.OPEN
}

function N() {
  i = void 0, a = void 0
}

function C() {
  r = void 0, l = void 0, u = void 0, s = void 0
}
class p extends f.default.Store {
  getFormState() {
    return S
  }
  getErrors() {
    return T
  }
  showNotice() {
    return void 0 !== i || void 0 !== r || void 0 !== l || void 0 !== u || void 0 !== a || void 0 !== s
  }
  getPendingAvatar() {
    return i
  }
  getPendingBanner() {
    return r
  }
  getPendingBio() {
    return l
  }
  getPendingNickname() {
    return a
  }
  getPendingPronouns() {
    return u
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
      pendingBanner: r,
      pendingBio: l,
      pendingPronouns: u,
      pendingNickname: a,
      pendingThemeColors: s
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
    return I
  }
}
p.displayName = "GuildIdentitySettingsStore";
var g = new p(E.default, {
  GUILD_IDENTITY_SETTINGS_INIT: function(e) {
    o = e.guild, S = _.FormStates.OPEN, T = {}, d = e.source, c = e.analyticsLocations
  },
  GUILD_IDENTITY_SETTINGS_CLOSE: h,
  GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
    v(), h()
  },
  GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
    o = e.guild, T = {}
  },
  GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
    S = _.FormStates.SUBMITTING, T = {}
  },
  GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
    var t;
    if (S !== _.FormStates.SUBMITTING) return !1;
    S = _.FormStates.OPEN, T = null !== (t = e.errors) && void 0 !== t ? t : {}
  },
  USER_PROFILE_UPDATE_FAILURE: function(e) {
    S = _.FormStates.OPEN, T = e.errors
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
    l = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
    let {
      pronouns: t
    } = e;
    u = t
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
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: N,
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: C,
  GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: v,
  GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: v,
  GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
    T = {}
  },
  GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
    let {
      disable: t
    } = e;
    I = t
  }
})