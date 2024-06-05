"use strict";

function s(e) {
  let t = "==".slice(0, (4 - e.length % 4) % 4),
    n = atob(e.replace(/-/g, "+").replace(/_/g, "/") + t),
    s = new ArrayBuffer(n.length),
    a = new Uint8Array(s);
  for (let e = 0; e < n.length; e++) a[e] = n.charCodeAt(e);
  return s
}

function a(e) {
  let t = new Uint8Array(e),
    n = "";
  for (let e of t) n += String.fromCharCode(e);
  return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
}
n.r(t), n.d(t, {
  get: function() {
    return _
  },
  parseRequestOptionsFromJSON: function() {
    return m
  }
});
var i = "copy",
  l = "convert";

function r(e, t, n) {
  if (t === i) return n;
  if (t === l) return e(n);
  if (t instanceof Array) return n.map(n => r(e, t[0], n));
  if (t instanceof Object) {
    let s = {};
    for (let [a, i] of Object.entries(t)) {
      if (i.derive) {
        let e = i.derive(n);
        void 0 !== e && (n[a] = e)
      }
      if (!(a in n)) {
        if (i.required) throw Error(`Missing key: ${a}`);
        continue
      }
      if (null == n[a]) {
        s[a] = null;
        continue
      }
      s[a] = r(e, i.schema, n[a])
    }
    return s
  }
}

function o(e, t) {
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

function d(e) {
  return {
    required: !1,
    schema: e
  }
}
var c = {
    type: u(i),
    id: u(l),
    transports: d(i)
  },
  f = {
    appid: d(i),
    appidExclude: d(i),
    credProps: d(i)
  },
  h = {
    appid: d(i),
    appidExclude: d(i),
    credProps: d(i)
  };
u({
  rp: u(i),
  user: u({
    id: u(l),
    name: u(i),
    displayName: u(i)
  }),
  challenge: u(l),
  pubKeyCredParams: u(i),
  timeout: d(i),
  excludeCredentials: d([c]),
  authenticatorSelection: d(i),
  attestation: d(i),
  extensions: d(f)
}), d(i), u(i), u(i), u(l), d(i), u({
  clientDataJSON: u(l),
  attestationObject: u(l),
  transports: o(i, e => {
    var t;
    return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
  })
}), o(h, e => e.getClientExtensionResults());
var E = {
    mediation: d(i),
    publicKey: u({
      challenge: u(l),
      timeout: d(i),
      rpId: d(i),
      allowCredentials: d([c]),
      userVerification: d(i),
      extensions: d(f)
    }),
    signal: d(i)
  },
  g = {
    type: u(i),
    id: u(i),
    rawId: u(l),
    authenticatorAttachment: d(i),
    response: u({
      clientDataJSON: u(l),
      authenticatorData: u(l),
      signature: u(l),
      userHandle: u(l)
    }),
    clientExtensionResults: o(h, e => e.getClientExtensionResults())
  };

function m(e) {
  return r(s, E, e)
}
async function _(e) {
  let t = await navigator.credentials.get(e);
  return t.toJSON = () => r(a, g, t), t
}