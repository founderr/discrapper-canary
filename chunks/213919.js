"use strict";
let i, r;
n.r(t), n.d(t, {
  encryptAndStoreTokens: function() {
    return g
  },
  getToken: function() {
    return A
  },
  hideToken: function() {
    return O
  },
  init: function() {
    return N
  },
  removeToken: function() {
    return p
  },
  setToken: function() {
    return m
  },
  showToken: function() {
    return R
  }
}), n(47120), n(724458);
var s = n(433517),
  o = n(231338);
let a = "dQw4w9WgXcQ:";

function l(e) {
  return [...e].reduce((e, t) => {
    let [n, i] = t;
    return e[n] = i, e
  }, {})
}
let u = null,
  _ = window.DiscordNative;
null != _ && (u = _.safeStorage);
let c = !1,
  d = {},
  E = {},
  I = !1,
  T = !1;

function h() {
  if (I) {
    s.K.remove(o.B1), s.K.remove(o.XM);
    return
  }
  null != r ? s.K.set(o.B1, r) : s.K.remove(o.B1), s.K.set(o.XM, E)
}

function S(e) {
  return null == e || 0 === e.length ? {
    decryptedToken: null,
    wasEncrypted: !1
  } : (null == u ? void 0 : u.isEncryptionAvailable()) && e.startsWith(a) ? {
    decryptedToken: u.decryptString(e.substring(a.length)),
    wasEncrypted: !0
  } : {
    decryptedToken: e,
    wasEncrypted: !1
  }
}

function f(e) {
  return (null == u ? void 0 : u.isEncryptionAvailable()) && !e.startsWith(a) ? "".concat(a).concat(u.encryptString(e)) : e
}

function N() {
  if (T) return;
  r = s.K.get(o.B1), E = s.K.get(o.XM) || {};
  let {
    decryptedToken: e,
    wasEncrypted: t
  } = S(r);
  c = t, i = e, d = l(Object.entries(E).map(e => {
    let [t, n] = e, {
      decryptedToken: i,
      wasEncrypted: r
    } = S(n);
    return c = r || c, [t, i]
  }).filter(e => {
    let [t, n] = e;
    return null != n
  })), T = !0
}

function A(e) {
  return (N(), null != e) ? d[e] : i
}

function m(e, t) {
  if (null == e) {
    p(t);
    return
  }
  i = e, null != t && (d[t] = e), c ? g() : (r = i, E = d, h())
}

function O() {
  if (!I) I = !0, h()
}

function R() {
  if (!!I) I = !1, h()
}

function p(e) {
  let t = i;
  return null != e && (t = d[e], delete d[e], delete E[e]), t === i && (i = null, r = null), h(), null != t
}

function g() {
  (null == u ? void 0 : u.isEncryptionAvailable()) ? (null != i && (r = f(i)), E = l(Object.entries(d).map(e => {
    let [t, n] = e;
    return [t, f(n)]
  })), c = !0) : (r = i, E = d), h()
}