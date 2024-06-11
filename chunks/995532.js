"use strict";
E.r(t), E.d(t, {
  NO_WELCOME_SCREEN: function() {
    return I
  }
});
var _, s, T, a, A = E("442837"),
  n = E("570140");
let I = {},
  u = {},
  i = {},
  L = !1,
  l = !1,
  o = !1;

function r(e) {
  let {
    guild: t
  } = e.invite;
  return (null == t ? void 0 : t.welcome_screen) != null && (u[t.id] = t.welcome_screen, !0)
}

function d(e) {
  let {
    welcomeScreen: t,
    guildId: E
  } = e;
  u[E] = null != t ? t : I
}
class N extends(a = A.default.Store) {
  get(e) {
    if (null != e) return u[e]
  }
  isFetching() {
    return l
  }
  hasError() {
    return o
  }
  hasSeen(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && (t ? L : i[e] || !1)
  }
  isEmpty(e) {
    if (null == e) return !0;
    let t = u[e];
    return null == t || 0 === t.welcome_channels.length
  }
}
T = "WelcomeScreenStore", (s = "displayName") in(_ = N) ? Object.defineProperty(_, s, {
  value: T,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : _[s] = T, t.default = new N(n.default, {
  INVITE_RESOLVE_SUCCESS: r,
  INVITE_ACCEPT_SUCCESS: r,
  WELCOME_SCREEN_SUBMIT_SUCCESS: d,
  WELCOME_SCREEN_UPDATE: d,
  WELCOME_SCREEN_VIEW: function(e) {
    let {
      guildId: t,
      isLurking: E
    } = e;
    i[t] = !0, E && (L = !0)
  },
  GUILD_STOP_LURKING: function() {
    L = !1
  },
  GUILD_DELETE: function(e) {
    let {
      guild: {
        id: t
      }
    } = e;
    i[t] = !1
  },
  WELCOME_SCREEN_FETCH_START: function() {
    l = !0, o = !1
  },
  WELCOME_SCREEN_FETCH_SUCCESS: function(e) {
    l = !1, o = !1;
    let {
      welcomeScreen: t,
      guildId: E
    } = e;
    u[E] = null != t ? t : I
  },
  WELCOME_SCREEN_FETCH_FAIL: function() {
    l = !1, o = !0
  }
})