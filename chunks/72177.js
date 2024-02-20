"use strict";
let r, i, o;
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var l = n("748820"),
  u = n("446674"),
  a = n("95410"),
  s = n("862337"),
  E = n("913144"),
  _ = n("697796"),
  c = n("766274"),
  d = n("922932"),
  T = n("773336"),
  A = n("197881");
let I = "BrowserHandoffStore",
  S = !1,
  f = new s.Timeout;

function O() {
  null != r && null != i && (window.open("".concat(r, "&key=").concat(i)), d.default.focus(null, !0))
}

function R() {
  i = null, f.stop(), S = !1, a.default.set(I, S)
}

function N() {
  R()
}
class L extends u.default.Store {
  initialize() {
    !1 !== a.default.get(I) && (S = T.isPlatformEmbedded && "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL)
  }
  isHandoffAvailable() {
    return !A.ProcessArgs.isDisallowPopupsSet() && S
  }
  get user() {
    return o
  }
  get key() {
    return i
  }
}
L.displayName = "BrowserHandoffStore";
var p = new L(E.default, {
  RPC_SERVER_READY: function(e) {
    r = "".concat(location.protocol, "//").concat(location.host, "/handoff?rpc=").concat(e.port), O()
  },
  BROWSER_HANDOFF_BEGIN: function(e) {
    if (null != i) return !1;
    i = (0, l.v4)(), f.start(e.timeout, () => (0, _.handoffEnd)()), O()
  },
  BROWSER_HANDOFF_FROM_APP: function(e) {
    let {
      handoffKey: t,
      handoffToken: n,
      timeout: r
    } = e;
    if (null == t || null == n) return !1;
    S = !0, f.start(r, () => (0, _.handoffEnd)())
  },
  BROWSER_HANDOFF_UNAVAILABLE: R,
  BROWSER_HANDOFF_SET_USER: function(e) {
    o = new c.default(e.user)
  },
  LOGIN: N,
  LOGIN_SUCCESS: N,
  LOGOUT: N,
  REGISTER: N
})