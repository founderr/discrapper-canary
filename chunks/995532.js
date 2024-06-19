e.d(_, {
  a: function() {
    return t
  }
});
var T, s, I, A, n = e(442837),
  N = e(570140);
let t = {},
  r = {},
  a = {},
  L = !1,
  D = !1,
  S = !1;

function U(E) {
  let {
    guild: _
  } = E.invite;
  return (null == _ ? void 0 : _.welcome_screen) != null && (r[_.id] = _.welcome_screen, !0)
}

function l(E) {
  let {
    welcomeScreen: _,
    guildId: e
  } = E;
  r[e] = null != _ ? _ : t
}
class O extends(A = n.ZP.Store) {
  get(E) {
    if (null != E) return r[E]
  }
  isFetching() {
    return D
  }
  hasError() {
    return S
  }
  hasSeen(E) {
    let _ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != E && (_ ? L : a[E] || !1)
  }
  isEmpty(E) {
    if (null == E) return !0;
    let _ = r[E];
    return null == _ || 0 === _.welcome_channels.length
  }
}
I = "WelcomeScreenStore", (s = "displayName") in(T = O) ? Object.defineProperty(T, s, {
  value: I,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : T[s] = I, _.Z = new O(N.Z, {
  INVITE_RESOLVE_SUCCESS: U,
  INVITE_ACCEPT_SUCCESS: U,
  WELCOME_SCREEN_SUBMIT_SUCCESS: l,
  WELCOME_SCREEN_UPDATE: l,
  WELCOME_SCREEN_VIEW: function(E) {
    let {
      guildId: _,
      isLurking: e
    } = E;
    a[_] = !0, e && (L = !0)
  },
  GUILD_STOP_LURKING: function() {
    L = !1
  },
  GUILD_DELETE: function(E) {
    let {
      guild: {
        id: _
      }
    } = E;
    a[_] = !1
  },
  WELCOME_SCREEN_FETCH_START: function() {
    D = !0, S = !1
  },
  WELCOME_SCREEN_FETCH_SUCCESS: function(E) {
    D = !1, S = !1;
    let {
      welcomeScreen: _,
      guildId: e
    } = E;
    r[e] = null != _ ? _ : t
  },
  WELCOME_SCREEN_FETCH_FAIL: function() {
    D = !1, S = !0
  }
})