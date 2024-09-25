var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = !1,
    l = !1,
    u = {},
    c = null;
function d(e) {
    let { consents: t } = e;
    null != t &&
        ((u = {
            ...u,
            ...t
        }),
        (l = !0));
}
function _(e) {
    let { consents: t } = e;
    (u = { ...t }), (s = !0);
}
function E(e) {
    c = e.consentRequired;
}
function f() {
    c = null;
}
class h extends (r = i.ZP.Store) {
    hasConsented(e) {
        return null != u[e] && u[e].consented;
    }
    get fetchedConsents() {
        return s;
    }
    get receivedConsentsInConnectionOpen() {
        return l;
    }
    getAuthenticationConsentRequired() {
        return c;
    }
}
o(h, 'displayName', 'ConsentStore'),
    (t.Z = new h(a.Z, {
        CONNECTION_OPEN: d,
        UPDATE_CONSENTS: _,
        SET_CONSENT_REQUIRED: E,
        LOGOUT: f
    }));
