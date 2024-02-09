"use strict";
n.r(e), n.d(e, {
  saveGuildIdentityChanges: function() {
    return i
  },
  setCurrentGuild: function() {
    return T
  },
  initGuildIdentitySettings: function() {
    return l
  },
  closeGuildIdentitySettings: function() {
    return E
  },
  resetAndCloseGuildIdentityForm: function() {
    return _
  },
  setPendingAvatar: function() {
    return a
  },
  setPendingBanner: function() {
    return s
  },
  setPendingBio: function() {
    return S
  },
  setPendingPronouns: function() {
    return c
  },
  setPendingNickname: function() {
    return d
  },
  setPendingThemeColors: function() {
    return N
  },
  resetPendingMemberChanges: function() {
    return f
  },
  resetPendingProfileChanges: function() {
    return D
  },
  resetAllPending: function() {
    return G
  },
  clearErrors: function() {
    return L
  },
  setDisableSubmit: function() {
    return R
  }
}), n("70102");
var r = n("872717"),
  o = n("913144"),
  u = n("54239"),
  I = n("49111");
async function i(t, e) {
  let {
    nick: n,
    avatar: u
  } = e;
  if (null == t) throw Error("Need guildId");
  o.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
  });
  try {
    let e = await r.default.patch({
      url: I.Endpoints.SET_GUILD_MEMBER(t),
      body: {
        nick: n,
        avatar: u
      },
      oldFormErrors: !0
    });
    return o.default.dispatch({
      type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
    }), o.default.dispatch({
      type: "GUILD_MEMBER_PROFILE_UPDATE",
      guildMember: e.body,
      guildId: t
    }), e
  } catch (e) {
    let t = e.body;
    (null == t ? void 0 : t.username) != null && (t.nick = t.username, delete t.username), o.default.dispatch({
      type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
      errors: e.body
    })
  }
}

function T(t) {
  o.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
    guild: t
  })
}

function l(t, e) {
  o.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_INIT",
    guild: t,
    analyticsLocations: e
  })
}

function E() {
  o.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
  }), (0, u.popLayer)()
}

function _() {
  o.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
  })
}

function a(t) {
  o.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
    avatar: t
  })
}

function s(t) {
  o.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
    banner: t
  })
}

function S(t) {
  o.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
    bio: t
  })
}

function c(t) {
  o.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
    pronouns: t
  })
}

function d(t) {
  o.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
    nickname: t
  })
}

function N(t) {
  o.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
    themeColors: t
  })
}

function f() {
  o.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
  })
}

function D() {
  o.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
  })
}

function G() {
  o.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
  })
}

function L() {
  o.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
  })
}

function R(t) {
  o.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
    disable: t
  })
}