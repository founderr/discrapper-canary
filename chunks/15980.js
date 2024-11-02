n(47120);
var i,
    s,
    r,
    l,
    a = n(442837),
    o = n(570140),
    c = n(911969);
let d = !1,
    u = [];
class m extends (i = a.ZP.Store) {
    hasFetchedCredentials() {
        return d;
    }
    get hasCredentials() {
        return u.length > 0;
    }
    getCredentials() {
        return u;
    }
}
(l = 'WebAuthnStore'),
    (r = 'displayName') in (s = m)
        ? Object.defineProperty(s, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[r] = l),
    (t.Z = new m(o.Z, {
        LOGOUT: function () {
            (u = []), (d = !1);
        },
        MFA_WEBAUTHN_CREDENTIALS_LOADED(e) {
            (u = e.credentials), (d = !0);
        },
        AUTHENTICATOR_CREATE(e) {
            let { credential: t } = e;
            t.type === c.Pi.WEBAUTHN && void 0 === u.find((e) => e.id === t.id) && (u = [...u, t]);
        },
        AUTHENTICATOR_UPDATE(e) {
            let { credential: t } = e;
            t.type === c.Pi.WEBAUTHN && (u = u.map((e) => (e.id === t.id ? t : e)));
        },
        AUTHENTICATOR_DELETE(e) {
            let { credential: t } = e;
            t.type === c.Pi.WEBAUTHN && (u = u.filter((e) => e.id !== t.id));
        }
    }));
