"use strict";
n.r(t), n.d(t, {
  encodeTotpSecret: function() {
    return E
  },
  encodeTotpSecretAsUrl: function() {
    return f
  },
  generateTotpSecret: function() {
    return u
  },
  hasCrypto: function() {
    return d
  },
  hasWebAuthn: function() {
    return c
  }
}), n("518263"), n("970173"), n("520712"), n("268111"), n("941497"), n("32026"), n("480839"), n("744285"), n("492257"), n("873817"), n("757143");
var a, s, o, r = n("943418");
let i = null !== (o = null === (a = window) || void 0 === a ? void 0 : a.crypto) && void 0 !== o ? o : null === (s = window) || void 0 === s ? void 0 : s.msCrypto,
  l = "Uint8Array" in window,
  d = null != i && "getRandomValues" in i && l,
  c = "PublicKeyCredential" in window && l;

function u() {
  var e, t;
  return t = (e = 20, i.getRandomValues(new Uint8Array(20))), r.encode(t).toString("utf8").replace(/=/g, "").toLowerCase().replace(/(\w{4})/g, "$1 ").trim()
}

function E(e) {
  return e.replace(/[\s._-]+/g, "").toUpperCase()
}

function f(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Discord";
  return "otpauth://totp/".concat(encodeURI(n), ":").concat(encodeURI(e), "?secret=").concat(E(t), "&issuer=").concat(encodeURIComponent(n))
}