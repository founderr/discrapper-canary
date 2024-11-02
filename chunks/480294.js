var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140);
let u = !1,
    c = !1,
    d = {},
    f = null;
class _ extends (s = o.ZP.Store) {
    hasConsented(e) {
        return null != d[e] && d[e].consented;
    }
    get fetchedConsents() {
        return u;
    }
    get receivedConsentsInConnectionOpen() {
        return c;
    }
    getAuthenticationConsentRequired() {
        return f;
    }
}
(a = 'ConsentStore'),
    (i = 'displayName') in (r = _)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new _(l.Z, {
        CONNECTION_OPEN: function (e) {
            let { consents: t } = e;
            null != t &&
                ((d = {
                    ...d,
                    ...t
                }),
                (c = !0));
        },
        UPDATE_CONSENTS: function (e) {
            let { consents: t } = e;
            (d = { ...t }), (u = !0);
        },
        SET_CONSENT_REQUIRED: function (e) {
            f = e.consentRequired;
        },
        LOGOUT: function () {
            f = null;
        }
    }));
