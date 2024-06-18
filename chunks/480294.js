"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140);
let u = !1,
  _ = !1,
  c = {},
  d = null;
class E extends(o = a.ZP.Store) {
  hasConsented(e) {
    return null != c[e] && c[e].consented
  }
  get fetchedConsents() {
    return u
  }
  get receivedConsentsInConnectionOpen() {
    return _
  }
  getAuthenticationConsentRequired() {
    return d
  }
}
s = "ConsentStore", (r = "displayName") in(i = E) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new E(l.Z, {
  CONNECTION_OPEN: function(e) {
    let {
      consents: t
    } = e;
    null != t && (c = {
      ...c,
      ...t
    }, _ = !0)
  },
  UPDATE_CONSENTS: function(e) {
    let {
      consents: t
    } = e;
    c = {
      ...t
    }, u = !0
  },
  SET_CONSENT_REQUIRED: function(e) {
    d = e.consentRequired
  },
  LOGOUT: function() {
    d = null
  }
})