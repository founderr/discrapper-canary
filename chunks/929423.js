"use strict";
n.r(t), n.d(t, {
  saveGuildIdentityChanges: function() {
    return s
  },
  setCurrentGuild: function() {
    return l
  },
  initGuildIdentitySettings: function() {
    return o
  },
  closeGuildIdentitySettings: function() {
    return c
  },
  resetAndCloseGuildIdentityForm: function() {
    return d
  },
  setPendingAvatar: function() {
    return f
  },
  setPendingBanner: function() {
    return E
  },
  setPendingBio: function() {
    return _
  },
  setPendingPronouns: function() {
    return T
  },
  setPendingNickname: function() {
    return S
  },
  setPendingThemeColors: function() {
    return I
  },
  resetPendingMemberChanges: function() {
    return h
  },
  resetPendingProfileChanges: function() {
    return N
  },
  resetAllPending: function() {
    return p
  },
  clearErrors: function() {
    return C
  },
  setDisableSubmit: function() {
    return A
  }
}), n("70102");
var i = n("872717"),
  r = n("913144"),
  u = n("54239"),
  a = n("49111");
async function s(e, t) {
  let {
    nick: n,
    avatar: u
  } = t;
  if (null == e) throw Error("Need guildId");
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
  });
  try {
    let t = await i.default.patch({
      url: a.Endpoints.SET_GUILD_MEMBER(e),
      body: {
        nick: n,
        avatar: u
      },
      oldFormErrors: !0
    });
    return r.default.dispatch({
      type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
    }), r.default.dispatch({
      type: "GUILD_MEMBER_PROFILE_UPDATE",
      guildMember: t.body,
      guildId: e
    }), t
  } catch (t) {
    let e = t.body;
    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), r.default.dispatch({
      type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
      errors: t.body
    })
  }
}

function l(e) {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
    guild: e
  })
}

function o(e, t) {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_INIT",
    guild: e,
    analyticsLocations: t
  })
}

function c() {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
  }), (0, u.popLayer)()
}

function d() {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
  })
}

function f(e) {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
    avatar: e
  })
}

function E(e) {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
    banner: e
  })
}

function _(e) {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
    bio: e
  })
}

function T(e) {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
    pronouns: e
  })
}

function S(e) {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
    nickname: e
  })
}

function I(e) {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
    themeColors: e
  })
}

function h() {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
  })
}

function N() {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
  })
}

function p() {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
  })
}

function C() {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
  })
}

function A(e) {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
    disable: e
  })
}