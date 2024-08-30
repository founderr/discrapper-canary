t(47120);
var n,
    a,
    i,
    r,
    o = t(442837),
    l = t(570140),
    c = t(911969);
let d = !1,
    u = [];
class _ extends (n = o.ZP.Store) {
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
(r = 'WebAuthnStore'),
    (i = 'displayName') in (a = _)
        ? Object.defineProperty(a, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[i] = r),
    (s.Z = new _(l.Z, {
        LOGOUT: function () {
            (u = []), (d = !1);
        },
        MFA_WEBAUTHN_CREDENTIALS_LOADED(e) {
            (u = e.credentials), (d = !0);
        },
        AUTHENTICATOR_CREATE(e) {
            let { credential: s } = e;
            s.type === c.Pi.WEBAUTHN && void 0 === u.find((e) => e.id === s.id) && (u = [...u, s]);
        },
        AUTHENTICATOR_UPDATE(e) {
            let { credential: s } = e;
            s.type === c.Pi.WEBAUTHN && (u = u.map((e) => (e.id === s.id ? s : e)));
        },
        AUTHENTICATOR_DELETE(e) {
            let { credential: s } = e;
            s.type === c.Pi.WEBAUTHN && (u = u.filter((e) => e.id !== s.id));
        }
    }));
