"use strict";
s.r(t), s.d(t, {
  NO_WELCOME_SCREEN: function() {
    return r
  }
});
var a, n, i, E, l = s("442837"),
  _ = s("570140");
let r = {},
  u = {},
  o = {},
  T = !1,
  d = !1,
  A = !1;

function I(e) {
  let {
    guild: t
  } = e.invite;
  return (null == t ? void 0 : t.welcome_screen) != null && (u[t.id] = t.welcome_screen, !0)
}

function L(e) {
  let {
    welcomeScreen: t,
    guildId: s
  } = e;
  u[s] = null != t ? t : r
}
class c extends(E = l.default.Store) {
  get(e) {
    if (null != e) return u[e]
  }
  isFetching() {
    return d
  }
  hasError() {
    return A
  }
  hasSeen(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && (t ? T : o[e] || !1)
  }
  isEmpty(e) {
    if (null == e) return !0;
    let t = u[e];
    return null == t || 0 === t.welcome_channels.length
  }
}
i = "WelcomeScreenStore", (n = "displayName") in(a = c) ? Object.defineProperty(a, n, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[n] = i, t.default = new c(_.default, {
  INVITE_RESOLVE_SUCCESS: I,
  INVITE_ACCEPT_SUCCESS: I,
  WELCOME_SCREEN_SUBMIT_SUCCESS: L,
  WELCOME_SCREEN_UPDATE: L,
  WELCOME_SCREEN_VIEW: function(e) {
    let {
      guildId: t,
      isLurking: s
    } = e;
    o[t] = !0, s && (T = !0)
  },
  GUILD_STOP_LURKING: function() {
    T = !1
  },
  GUILD_DELETE: function(e) {
    let {
      guild: {
        id: t
      }
    } = e;
    o[t] = !1
  },
  WELCOME_SCREEN_FETCH_START: function() {
    d = !0, A = !1
  },
  WELCOME_SCREEN_FETCH_SUCCESS: function(e) {
    d = !1, A = !1;
    let {
      welcomeScreen: t,
      guildId: s
    } = e;
    u[s] = null != t ? t : r
  },
  WELCOME_SCREEN_FETCH_FAIL: function() {
    d = !1, A = !0
  }
})