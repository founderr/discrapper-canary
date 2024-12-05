var i,
    s,
    r,
    l,
    a = n(392711),
    o = n.n(a),
    c = n(213919),
    d = n(442837),
    u = n(570140);
let m = !1,
    g = [],
    h = '',
    p = '',
    x = !1,
    T = {
        viewNonce: '',
        regenerateNonce: ''
    };
class S extends (l = d.ZP.Store) {
    getVerificationKey() {
        return h;
    }
    getBackupCodes() {
        return g;
    }
    get togglingSMS() {
        return m;
    }
    getNonces() {
        return T;
    }
    get emailToken() {
        return p;
    }
    get hasSeenBackupPrompt() {
        return x;
    }
}
(r = 'MFAStore'),
    (s = 'displayName') in (i = S)
        ? Object.defineProperty(i, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[s] = r),
    (t.Z = new S(u.Z, {
        MFA_ENABLE_SUCCESS: function (e) {
            let { token: t, codes: n } = e;
            void 0 !== t && c.setToken(t), (g = n);
        },
        MFA_ENABLE_EMAIL_TOKEN: function (e) {
            let { token: t } = e;
            p = t;
        },
        MFA_DISABLE_SUCCESS: function (e) {
            let { token: t } = e;
            c.setToken(t);
        },
        MFA_SMS_TOGGLE: function () {
            m = !0;
        },
        MFA_SMS_TOGGLE_COMPLETE: function () {
            m = !1;
        },
        MFA_CLEAR_BACKUP_CODES: function () {
            g = [];
        },
        MFA_VIEW_BACKUP_CODES: function (e) {
            let { codes: t, key: n } = e;
            (g = o().sortBy(t, 'code')), (h = n);
        },
        MFA_SEND_VERIFICATION_KEY: function (e) {
            let { nonces: t } = e;
            T = t;
        },
        MFA_SEEN_BACKUP_CODE_PROMPT: function () {
            x = !0;
        }
    }));
