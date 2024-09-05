var n,
    a,
    i,
    r,
    o = t(392711),
    l = t.n(o),
    c = t(213919),
    d = t(442837),
    _ = t(570140);
let u = !1,
    E = [],
    T = '',
    S = '',
    I = !1,
    N = {
        viewNonce: '',
        regenerateNonce: ''
    };
class m extends (r = d.ZP.Store) {
    getVerificationKey() {
        return T;
    }
    getBackupCodes() {
        return E;
    }
    get togglingSMS() {
        return u;
    }
    getNonces() {
        return N;
    }
    get emailToken() {
        return S;
    }
    get hasSeenBackupPrompt() {
        return I;
    }
}
(i = 'MFAStore'),
    (a = 'displayName') in (n = m)
        ? Object.defineProperty(n, a, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (n[a] = i),
    (s.Z = new m(_.Z, {
        MFA_ENABLE_SUCCESS: function (e) {
            let { token: s, codes: t } = e;
            void 0 !== s && c.setToken(s), (E = t);
        },
        MFA_ENABLE_EMAIL_TOKEN: function (e) {
            let { token: s } = e;
            S = s;
        },
        MFA_DISABLE_SUCCESS: function (e) {
            let { token: s } = e;
            c.setToken(s);
        },
        MFA_SMS_TOGGLE: function () {
            u = !0;
        },
        MFA_SMS_TOGGLE_COMPLETE: function () {
            u = !1;
        },
        MFA_CLEAR_BACKUP_CODES: function () {
            E = [];
        },
        MFA_VIEW_BACKUP_CODES: function (e) {
            let { codes: s, key: t } = e;
            (E = l().sortBy(s, 'code')), (T = t);
        },
        MFA_SEND_VERIFICATION_KEY: function (e) {
            let { nonces: s } = e;
            N = s;
        },
        MFA_SEEN_BACKUP_CODE_PROMPT: function () {
            I = !0;
        }
    }));
