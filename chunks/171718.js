"use strict";
let r, i;
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("222007"), n("808653");
var o = n("95410"),
  l = n("843455");
let u = "dQw4w9WgXcQ:";

function a(e) {
  return [...e].reduce((e, t) => {
    let [n, r] = t;
    return e[n] = r, e
  }, {})
}
let s = null,
  E = window.DiscordNative;
null != E && (s = E.safeStorage);
let _ = !1,
  c = {},
  d = {},
  T = !1,
  A = !1;

function I() {
  if (T) {
    o.default.remove(l.TOKEN_KEY), o.default.remove(l.TOKENS_KEY);
    return
  }
  null != i ? o.default.set(l.TOKEN_KEY, i) : o.default.remove(l.TOKEN_KEY), o.default.set(l.TOKENS_KEY, d)
}

function S(e) {
  return null == e || 0 === e.length ? {
    decryptedToken: null,
    wasEncrypted: !1
  } : (null == s ? void 0 : s.isEncryptionAvailable()) && e.startsWith(u) ? {
    decryptedToken: s.decryptString(e.substring(u.length)),
    wasEncrypted: !0
  } : {
    decryptedToken: e,
    wasEncrypted: !1
  }
}

function f(e) {
  return (null == s ? void 0 : s.isEncryptionAvailable()) && !e.startsWith(u) ? "".concat(u).concat(s.encryptString(e)) : e
}
var O = {
  init() {
    if (A) return;
    i = o.default.get(l.TOKEN_KEY), d = o.default.get(l.TOKENS_KEY) || {};
    let {
      decryptedToken: e,
      wasEncrypted: t
    } = S(i);
    _ = t, r = e, c = a(Object.entries(d).map(e => {
      let [t, n] = e, {
        decryptedToken: r,
        wasEncrypted: i
      } = S(n);
      return _ = i || _, [t, r]
    }).filter(e => {
      let [t, n] = e;
      return null != n
    })), A = !0
  },
  getToken(e) {
    return (this.init(), null != e) ? c[e] : r
  },
  setToken(e, t) {
    if (null == e) {
      this.removeToken(t);
      return
    }
    r = e, null != t && (c[t] = e), _ ? this.encryptAndStoreTokens() : (i = r, d = c, I())
  },
  hideToken() {
    !T && (T = !0, I())
  },
  showToken() {
    T && (T = !1, I())
  },
  removeToken(e) {
    let t = r;
    null != e && (t = c[e], delete c[e], delete d[e]), t === r && (r = null, i = null), I()
  },
  encryptAndStoreTokens() {
    (null == s ? void 0 : s.isEncryptionAvailable()) ? (null != r && (i = f(r)), d = a(Object.entries(c).map(e => {
      let [t, n] = e;
      return [t, f(n)]
    })), _ = !0) : (i = r, d = c), I()
  }
}