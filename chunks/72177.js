"use strict";
let i, s, r;
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("748820"),
  o = n("446674"),
  l = n("95410"),
  u = n("862337"),
  d = n("913144"),
  c = n("697796"),
  f = n("766274"),
  _ = n("922932"),
  h = n("773336"),
  g = n("197881");
let m = "BrowserHandoffStore",
  E = !1,
  p = new u.Timeout;

function v() {
  null != i && null != s && (window.open("".concat(i, "&key=").concat(s)), _.default.focus(null, !0))
}

function S() {
  s = null, p.stop(), E = !1, l.default.set(m, E)
}

function T() {
  S()
}
class I extends o.default.Store {
  initialize() {
    !1 !== l.default.get(m) && (E = h.isPlatformEmbedded && "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL)
  }
  isHandoffAvailable() {
    return !g.ProcessArgs.isDisallowPopupsSet() && E
  }
  get user() {
    return r
  }
  get key() {
    return s
  }
}
I.displayName = "BrowserHandoffStore";
var C = new I(d.default, {
  RPC_SERVER_READY: function(e) {
    i = "".concat(location.protocol, "//").concat(location.host, "/handoff?rpc=").concat(e.port), v()
  },
  BROWSER_HANDOFF_BEGIN: function(e) {
    if (null != s) return !1;
    s = (0, a.v4)(), p.start(e.timeout, () => (0, c.handoffEnd)()), v()
  },
  BROWSER_HANDOFF_FROM_APP: function(e) {
    let {
      handoffKey: t,
      handoffToken: n,
      timeout: i
    } = e;
    if (null == t || null == n) return !1;
    E = !0, p.start(i, () => (0, c.handoffEnd)())
  },
  BROWSER_HANDOFF_UNAVAILABLE: S,
  BROWSER_HANDOFF_SET_USER: function(e) {
    r = new f.default(e.user)
  },
  LOGIN: T,
  LOGIN_SUCCESS: T,
  LOGOUT: T,
  REGISTER: T
})