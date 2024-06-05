"use strict";

function s(e) {
  let t = "==".slice(0, (4 - e.length % 4) % 4),
    n = atob(e.replace(/-/g, "+").replace(/_/g, "/") + t),
    s = new ArrayBuffer(n.length),
    r = new Uint8Array(s);
  for (let e = 0; e < n.length; e++) r[e] = n.charCodeAt(e);
  return s
}

function r(e) {
  let t = new Uint8Array(e),
    n = "";
  for (let e of t) n += String.fromCharCode(e);
  return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
}
n.r(t), n.d(t, {
  create: function() {
    return N
  },
  get: function() {
    return g
  }
});
var a = "copy",
  o = "convert";

function i(e, t, n) {
  if (t === a) return n;
  if (t === o) return e(n);
  if (t instanceof Array) return n.map(n => i(e, t[0], n));
  if (t instanceof Object) {
    let s = {};
    for (let [r, a] of Object.entries(t)) {
      if (a.derive) {
        let e = a.derive(n);
        void 0 !== e && (n[r] = e)
      }
      if (!(r in n)) {
        if (a.required) throw Error(`Missing key: ${r}`);
        continue
      }
      if (null == n[r]) {
        s[r] = null;
        continue
      }
      s[r] = i(e, a.schema, n[r])
    }
    return s
  }
}

function l(e, t) {
  return {
    required: !0,
    schema: e,
    derive: t
  }
}

function u(e) {
  return {
    required: !0,
    schema: e
  }
}

function c(e) {
  return {
    required: !1,
    schema: e
  }
}
var d = {
    type: u(a),
    id: u(o),
    transports: c(a)
  },
  h = {
    appid: c(a),
    appidExclude: c(a),
    credProps: c(a)
  },
  f = {
    appid: c(a),
    appidExclude: c(a),
    credProps: c(a)
  },
  p = {
    publicKey: u({
      rp: u(a),
      user: u({
        id: u(o),
        name: u(a),
        displayName: u(a)
      }),
      challenge: u(o),
      pubKeyCredParams: u(a),
      timeout: c(a),
      excludeCredentials: c([d]),
      authenticatorSelection: c(a),
      attestation: c(a),
      extensions: c(h)
    }),
    signal: c(a)
  },
  C = {
    type: u(a),
    id: u(a),
    rawId: u(o),
    authenticatorAttachment: c(a),
    response: u({
      clientDataJSON: u(o),
      attestationObject: u(o),
      transports: l(a, e => {
        var t;
        return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
      })
    }),
    clientExtensionResults: l(f, e => e.getClientExtensionResults())
  },
  m = {
    mediation: c(a),
    publicKey: u({
      challenge: u(o),
      timeout: c(a),
      rpId: c(a),
      allowCredentials: c([d]),
      userVerification: c(a),
      extensions: c(h)
    }),
    signal: c(a)
  },
  x = {
    type: u(a),
    id: u(a),
    rawId: u(o),
    authenticatorAttachment: c(a),
    response: u({
      clientDataJSON: u(o),
      authenticatorData: u(o),
      signature: u(o),
      userHandle: u(o)
    }),
    clientExtensionResults: l(f, e => e.getClientExtensionResults())
  };
async function N(e) {
  let t = await navigator.credentials.create(i(s, p, e));
  return i(r, C, t)
}
async function g(e) {
  let t = await navigator.credentials.get(i(s, m, e));
  return i(r, x, t)
}