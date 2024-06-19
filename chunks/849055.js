function r(e) {
  let t = "==".slice(0, (4 - e.length % 4) % 4),
    n = atob(e.replace(/-/g, "+").replace(/_/g, "/") + t),
    r = new ArrayBuffer(n.length),
    s = new Uint8Array(r);
  for (let e = 0; e < n.length; e++) s[e] = n.charCodeAt(e);
  return r
}

function s(e) {
  let t = new Uint8Array(e),
    n = "";
  for (let e of t) n += String.fromCharCode(e);
  return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
}
n.d(t, {
  U2: function() {
    return g
  },
  Ue: function() {
    return N
  }
});
var i = "copy",
  o = "convert";

function a(e, t, n) {
  if (t === i) return n;
  if (t === o) return e(n);
  if (t instanceof Array) return n.map(n => a(e, t[0], n));
  if (t instanceof Object) {
    let r = {};
    for (let [s, i] of Object.entries(t)) {
      if (i.derive) {
        let e = i.derive(n);
        void 0 !== e && (n[s] = e)
      }
      if (!(s in n)) {
        if (i.required) throw Error(`Missing key: ${s}`);
        continue
      }
      if (null == n[s]) {
        r[s] = null;
        continue
      }
      r[s] = a(e, i.schema, n[s])
    }
    return r
  }
}

function l(e, t) {
  return {
    required: !0,
    schema: e,
    derive: t
  }
}

function c(e) {
  return {
    required: !0,
    schema: e
  }
}

function u(e) {
  return {
    required: !1,
    schema: e
  }
}
var d = {
    type: c(i),
    id: c(o),
    transports: u(i)
  },
  h = {
    appid: u(i),
    appidExclude: u(i),
    credProps: u(i)
  },
  p = {
    appid: u(i),
    appidExclude: u(i),
    credProps: u(i)
  },
  C = {
    publicKey: c({
      rp: c(i),
      user: c({
        id: c(o),
        name: c(i),
        displayName: c(i)
      }),
      challenge: c(o),
      pubKeyCredParams: c(i),
      timeout: u(i),
      excludeCredentials: u([d]),
      authenticatorSelection: u(i),
      attestation: u(i),
      extensions: u(h)
    }),
    signal: u(i)
  },
  f = {
    type: c(i),
    id: c(i),
    rawId: c(o),
    authenticatorAttachment: u(i),
    response: c({
      clientDataJSON: c(o),
      attestationObject: c(o),
      transports: l(i, e => {
        var t;
        return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
      })
    }),
    clientExtensionResults: l(p, e => e.getClientExtensionResults())
  },
  m = {
    mediation: u(i),
    publicKey: c({
      challenge: c(o),
      timeout: u(i),
      rpId: u(i),
      allowCredentials: u([d]),
      userVerification: u(i),
      extensions: u(h)
    }),
    signal: u(i)
  },
  x = {
    type: c(i),
    id: c(i),
    rawId: c(o),
    authenticatorAttachment: u(i),
    response: c({
      clientDataJSON: c(o),
      authenticatorData: c(o),
      signature: c(o),
      userHandle: c(o)
    }),
    clientExtensionResults: l(p, e => e.getClientExtensionResults())
  };
async function N(e) {
  let t = await navigator.credentials.create(a(r, C, e));
  return a(s, f, t)
}
async function g(e) {
  let t = await navigator.credentials.get(a(r, m, e));
  return a(s, x, t)
}