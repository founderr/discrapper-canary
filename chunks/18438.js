"use strict";
n.d(t, {
  Cf: function() {
    return I
  },
  Fq: function() {
    return l
  },
  HP: function() {
    return a
  },
  I5: function() {
    return _
  },
  ID: function() {
    return T
  },
  IO: function() {
    return S
  },
  It: function() {
    return u
  },
  W3: function() {
    return N
  },
  b9: function() {
    return m
  },
  cV: function() {
    return c
  },
  g_: function() {
    return E
  },
  iq: function() {
    return o
  },
  pG: function() {
    return A
  },
  sr: function() {
    return h
  },
  xn: function() {
    return d
  },
  z5: function() {
    return f
  }
}), n(411104);
var i = n(544891),
  r = n(570140);
n(37234);
var s = n(981631);
async function o(e, t) {
  let {
    nick: n,
    avatar: o,
    avatarDecoration: a
  } = t;
  if (null == e) throw Error("Need guildId");
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
  });
  let l = {
    nick: n,
    avatar: o,
    avatar_decoration_id: null === a ? null : null == a ? void 0 : a.id,
    avatar_decoration_sku_id: null === a ? null : null == a ? void 0 : a.skuId
  };
  try {
    let t = await i.tn.patch({
      url: s.ANM.SET_GUILD_MEMBER(e),
      body: l,
      oldFormErrors: !0
    });
    return r.Z.dispatch({
      type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
    }), r.Z.dispatch({
      type: "GUILD_MEMBER_PROFILE_UPDATE",
      guildMember: t.body,
      guildId: e
    }), t
  } catch (t) {
    let e = t.body;
    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), r.Z.dispatch({
      type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
      errors: t.body
    })
  }
}

function a(e) {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
    guild: e
  })
}

function l(e, t) {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_INIT",
    guild: e,
    analyticsLocations: t
  })
}

function u() {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
  })
}

function _(e) {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
    avatar: e
  })
}

function c(e) {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION",
    avatarDecoration: e
  })
}

function d(e) {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID",
    profileEffectId: e
  })
}

function E(e) {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
    banner: e
  })
}

function I(e) {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
    bio: e
  })
}

function T(e) {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
    pronouns: e
  })
}

function h(e) {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
    nickname: e
  })
}

function f(e) {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
    themeColors: e
  })
}

function S() {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
  })
}

function A() {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
  })
}

function N() {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
  })
}

function m() {
  r.Z.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
  })
}