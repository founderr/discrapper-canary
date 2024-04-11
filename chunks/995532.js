"use strict";
s.r(t), s.d(t, {
  NO_WELCOME_SCREEN: function() {
    return u
  }
});
var E, _, a, n, T = s("442837"),
  i = s("570140");
let u = {},
  A = {},
  l = {},
  I = !1,
  L = !1,
  o = !1;

function r(e) {
  let {
    guild: t
  } = e.invite;
  return (null == t ? void 0 : t.welcome_screen) != null && (A[t.id] = t.welcome_screen, !0)
}

function d(e) {
  let {
    welcomeScreen: t,
    guildId: s
  } = e;
  A[s] = null != t ? t : u
}
class S extends(n = T.default.Store) {
  get(e) {
    if (null != e) return A[e]
  }
  isFetching() {
    return L
  }
  hasError() {
    return o
  }
  hasSeen(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && (t ? I : l[e] || !1)
  }
  isEmpty(e) {
    if (null == e) return !0;
    let t = A[e];
    return null == t || 0 === t.welcome_channels.length
  }
}
a = "WelcomeScreenStore", (_ = "displayName") in(E = S) ? Object.defineProperty(E, _, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : E[_] = a, t.default = new S(i.default, {
  INVITE_RESOLVE_SUCCESS: r,
  INVITE_ACCEPT_SUCCESS: r,
  WELCOME_SCREEN_SUBMIT_SUCCESS: d,
  WELCOME_SCREEN_UPDATE: d,
  WELCOME_SCREEN_VIEW: function(e) {
    let {
      guildId: t,
      isLurking: s
    } = e;
    l[t] = !0, s && (I = !0)
  },
  GUILD_STOP_LURKING: function() {
    I = !1
  },
  GUILD_DELETE: function(e) {
    let {
      guild: {
        id: t
      }
    } = e;
    l[t] = !1
  },
  WELCOME_SCREEN_FETCH_START: function() {
    L = !0, o = !1
  },
  WELCOME_SCREEN_FETCH_SUCCESS: function(e) {
    L = !1, o = !1;
    let {
      welcomeScreen: t,
      guildId: s
    } = e;
    A[s] = null != t ? t : u
  },
  WELCOME_SCREEN_FETCH_FAIL: function() {
    L = !1, o = !0
  }
})