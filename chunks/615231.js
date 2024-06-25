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
    return E
  },
  wz: function() {
    return g
  }
});
var i = "copy",
  a = "convert";

function o(e, t, n) {
  if (t === i) return n;
  if (t === a) return e(n);
  if (t instanceof Array) return n.map(n => o(e, t[0], n));
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
      r[s] = o(e, i.schema, n[s])
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
    id: c(a),
    transports: u(i)
  },
  h = {
    appid: u(i),
    appidExclude: u(i),
    credProps: u(i)
  },
  _ = {
    appid: u(i),
    appidExclude: u(i),
    credProps: u(i)
  };
c({
  rp: c(i),
  user: c({
    id: c(a),
    name: c(i),
    displayName: c(i)
  }),
  challenge: c(a),
  pubKeyCredParams: c(i),
  timeout: u(i),
  excludeCredentials: u([d]),
  authenticatorSelection: u(i),
  attestation: u(i),
  extensions: u(h)
}), u(i), c(i), c(i), c(a), u(i), c({
  clientDataJSON: c(a),
  attestationObject: c(a),
  transports: l(i, e => {
    var t;
    return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
  })
}), l(_, e => e.getClientExtensionResults());
var p = {
    mediation: u(i),
    publicKey: c({
      challenge: c(a),
      timeout: u(i),
      rpId: u(i),
      allowCredentials: u([d]),
      userVerification: u(i),
      extensions: u(h)
    }),
    signal: u(i)
  },
  f = {
    type: c(i),
    id: c(i),
    rawId: c(a),
    authenticatorAttachment: u(i),
    response: c({
      clientDataJSON: c(a),
      authenticatorData: c(a),
      signature: c(a),
      userHandle: c(a)
    }),
    clientExtensionResults: l(_, e => e.getClientExtensionResults())
  };

function g(e) {
  return o(r, p, e)
}
async function E(e) {
  let t = await navigator.credentials.get(e);
  return t.toJSON = () => o(s, f, t), t
}