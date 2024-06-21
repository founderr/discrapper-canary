t(47120);
var n, i, a, l, r = t(442837),
  o = t(570140),
  c = t(911969);
let E = !1,
  d = [];
class _ extends(n = r.ZP.Store) {
  hasFetchedCredentials() {
    return E
  }
  getCredentials() {
    return d
  }
}
l = "WebAuthnStore", (a = "displayName") in(i = _) ? Object.defineProperty(i, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = l, s.Z = new _(o.Z, {
  LOGOUT: function() {
    d = [], E = !1
  },
  MFA_WEBAUTHN_CREDENTIALS_LOADED(e) {
    d = e.credentials, E = !0
  },
  AUTHENTICATOR_CREATE(e) {
    let {
      credential: s
    } = e;
    s.type === c.Pi.WEBAUTHN && void 0 === d.find(e => e.id === s.id) && (d = [...d, s])
  },
  AUTHENTICATOR_UPDATE(e) {
    let {
      credential: s
    } = e;
    s.type === c.Pi.WEBAUTHN && (d = d.map(e => e.id === s.id ? s : e))
  },
  AUTHENTICATOR_DELETE(e) {
    let {
      credential: s
    } = e;
    s.type === c.Pi.WEBAUTHN && (d = d.filter(e => e.id !== s.id))
  }
})