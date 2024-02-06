"use strict";
n.r(t), n.d(t, {
  saveGuildIdentityChanges: function() {
    return l
  },
  setCurrentGuild: function() {
    return a
  },
  initGuildIdentitySettings: function() {
    return u
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
    return I
  },
  setPendingNickname: function() {
    return h
  },
  setPendingThemeColors: function() {
    return S
  },
  resetPendingMemberChanges: function() {
    return p
  },
  resetPendingProfileChanges: function() {
    return T
  },
  resetAllPending: function() {
    return N
  },
  clearErrors: function() {
    return C
  },
  setDisableSubmit: function() {
    return R
  }
}), n("70102");
var i = n("872717"),
  r = n("913144"),
  o = n("54239"),
  s = n("49111");
async function l(e, t) {
  let {
    nick: n,
    avatar: o
  } = t;
  if (null == e) throw Error("Need guildId");
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
  });
  try {
    let t = await i.default.patch({
      url: s.Endpoints.SET_GUILD_MEMBER(e),
      body: {
        nick: n,
        avatar: o
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

function a(e) {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
    guild: e
  })
}

function u(e, t) {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_INIT",
    guild: e,
    analyticsLocations: t
  })
}

function c() {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
  }), (0, o.popLayer)()
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

function I(e) {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
    pronouns: e
  })
}

function h(e) {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
    nickname: e
  })
}

function S(e) {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
    themeColors: e
  })
}

function p() {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
  })
}

function T() {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
  })
}

function N() {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
  })
}

function C() {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
  })
}

function R(e) {
  r.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
    disable: e
  })
}