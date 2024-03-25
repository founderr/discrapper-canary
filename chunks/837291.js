"use strict";

function s(e) {
  let t = "==".slice(0, (4 - e.length % 4) % 4),
    n = e.replace(/-/g, "+").replace(/_/g, "/") + t,
    s = atob(n),
    a = new ArrayBuffer(s.length),
    r = new Uint8Array(a);
  for (let e = 0; e < s.length; e++) r[e] = s.charCodeAt(e);
  return a
}

function a(e) {
  let t = new Uint8Array(e),
    n = "";
  for (let e of t) n += String.fromCharCode(e);
  let s = btoa(n),
    a = s.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  return a
}
n.r(t), n.d(t, {
  get: function() {
    return m
  },
  parseRequestOptionsFromJSON: function() {
    return _
  }
}), n("781738"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("222007"), n("70102"), n("274635");
var r = "copy",
  i = "convert";

function l(e, t, n) {
  if (t === r) return n;
  if (t === i) return e(n);
  if (t instanceof Array) return n.map(n => l(e, t[0], n));
  if (t instanceof Object) {
    let s = {};
    for (let [a, r] of Object.entries(t)) {
      if (r.derive) {
        let e = r.derive(n);
        void 0 !== e && (n[a] = e)
      }
      if (!(a in n)) {
        if (r.required) throw Error("Missing key: ".concat(a));
        continue
      }
      if (null == n[a]) {
        s[a] = null;
        continue
      }
      s[a] = l(e, r.schema, n[a])
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
    type: u(r),
    id: u(i),
    transports: d(r)
  },
  f = {
    appid: d(r),
    appidExclude: d(r),
    credProps: d(r)
  },
  E = {
    appid: d(r),
    appidExclude: d(r),
    credProps: d(r)
  };
u({
  rp: u(r),
  user: u({
    id: u(i),
    name: u(r),
    displayName: u(r)
  }),
  challenge: u(i),
  pubKeyCredParams: u(r),
  timeout: d(r),
  excludeCredentials: d([c]),
  authenticatorSelection: d(r),
  attestation: d(r),
  extensions: d(f)
}), d(r), u(r), u(r), u(i), d(r), u({
  clientDataJSON: u(i),
  attestationObject: u(i),
  transports: o(r, e => {
    var t;
    return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
  })
}), o(E, e => e.getClientExtensionResults());
var h = {
    mediation: d(r),
    publicKey: u({
      challenge: u(i),
      timeout: d(r),
      rpId: d(r),
      allowCredentials: d([c]),
      userVerification: d(r),
      extensions: d(f)
    }),
    signal: d(r)
  },
  g = {
    type: u(r),
    id: u(r),
    rawId: u(i),
    authenticatorAttachment: d(r),
    response: u({
      clientDataJSON: u(i),
      authenticatorData: u(i),
      signature: u(i),
      userHandle: u(i)
    }),
    clientExtensionResults: o(E, e => e.getClientExtensionResults())
  };

function _(e) {
  return l(s, h, e)
}
async function m(e) {
  let t = await navigator.credentials.get(e);
  return t.toJSON = () => l(a, g, t), t
}