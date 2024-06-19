t.d(s, {
  Ae: function() {
    return E
  },
  Qe: function() {
    return _
  },
  U0: function() {
    return T
  },
  bV: function() {
    return d
  },
  uZ: function() {
    return c
  }
}), t(518263), t(970173), t(520712), t(268111), t(941497), t(32026), t(480839), t(744285), t(492257), t(873817), t(757143);
var n, i, a, l = t(943418);
let r = null !== (a = null === (n = window) || void 0 === n ? void 0 : n.crypto) && void 0 !== a ? a : null === (i = window) || void 0 === i ? void 0 : i.msCrypto,
  o = "Uint8Array" in window,
  c = null != r && "getRandomValues" in r && o,
  E = "PublicKeyCredential" in window && o;

function d() {
  var e, s;
  return s = (e = 20, r.getRandomValues(new Uint8Array(20))), l.encode(s).toString("utf8").replace(/=/g, "").toLowerCase().replace(/(\w{4})/g, "$1 ").trim()
}

function _(e) {
  return e.replace(/[\s._-]+/g, "").toUpperCase()
}

function T(e, s) {
  let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Discord";
  return "otpauth://totp/".concat(encodeURI(t), ":").concat(encodeURI(e), "?secret=").concat(_(s), "&issuer=").concat(encodeURIComponent(t))
}