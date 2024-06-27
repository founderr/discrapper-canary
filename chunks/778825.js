"use strict";
let i, r, s, o, a, l, u, _, c, d, E;
var I, T, h, f, S = n(442837),
  A = n(570140),
  N = n(981631);
let m = N.QZA.CLOSED,
  O = {};

function R() {
  p(), g(), O = {}, m = N.QZA.OPEN
}

function p() {
  i = void 0, u = void 0, r = void 0
}

function g() {
  o = void 0, a = void 0, l = void 0, _ = void 0, s = void 0
}
class C extends(f = S.ZP.Store) {
  getFormState() {
    return m
  }
  getErrors() {
    return O
  }
  showNotice() {
    return void 0 !== i || void 0 !== r || void 0 !== s || void 0 !== o || void 0 !== a || void 0 !== l || void 0 !== u || void 0 !== _
  }
  getIsSubmitDisabled() {
    return void 0 !== a && a.length > N.tPV
  }
  getPendingAvatar() {
    return i
  }
  getPendingAvatarDecoration() {
    return r
  }
  getPendingProfileEffectId() {
    return s
  }
  getPendingBanner() {
    return o
  }
  getPendingBio() {
    return a
  }
  getPendingNickname() {
    return u
  }
  getPendingPronouns() {
    return l
  }
  getPendingAccentColor() {
    return u
  }
  getPendingThemeColors() {
    return _
  }
  getAllPending() {
    return {
      pendingAvatar: i,
      pendingAvatarDecoration: r,
      pendingProfileEffectId: s,
      pendingBanner: o,
      pendingBio: a,
      pendingPronouns: l,
      pendingNickname: u,
      pendingThemeColors: _
    }
  }
  getGuild() {
    return c
  }
  getSource() {
    return d
  }
  getAnalyticsLocations() {
    return E
  }
}
h = "GuildIdentitySettingsStore", (T = "displayName") in(I = C) ? Object.defineProperty(I, T, {
  value: h,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : I[T] = h, t.Z = new C(A.Z, {
  GUILD_IDENTITY_SETTINGS_INIT: function(e) {
    c = e.guild, m = N.QZA.OPEN, O = {}, d = e.source, E = e.analyticsLocations
  },
  GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
    R(), m = N.QZA.CLOSED, O = {}, c = null, d = void 0, E = []
  },
  GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
    c = e.guild, O = {}
  },
  GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
    m = N.QZA.SUBMITTING, O = {}
  },
  GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
    var t;
    if (m !== N.QZA.SUBMITTING) return !1;
    m = N.QZA.OPEN, O = null !== (t = e.errors) && void 0 !== t ? t : {}
  },
  USER_PROFILE_UPDATE_FAILURE: function(e) {
    m = N.QZA.OPEN, O = e.errors
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
    let {
      avatar: t
    } = e;
    i = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION: function(e) {
    let {
      avatarDecoration: t
    } = e;
    r = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID: function(e) {
    let {
      profileEffectId: t
    } = e;
    s = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
    let {
      banner: t
    } = e;
    o = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
    let {
      bio: t
    } = e;
    a = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
    let {
      pronouns: t
    } = e;
    l = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
    let {
      nickname: t
    } = e;
    u = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
    let {
      themeColors: t
    } = e;
    _ = t
  },
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: p,
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: g,
  GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: R,
  GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: R,
  GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
    O = {}
  }
})