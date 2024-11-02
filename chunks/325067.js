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
    h = [],
    g = '',
    p = '',
    x = !1,
    S = {
        viewNonce: '',
        regenerateNonce: ''
    };
class T extends (l = d.ZP.Store) {
    getVerificationKey() {
        return g;
    }
    getBackupCodes() {
        return h;
    }
    get togglingSMS() {
        return m;
    }
    getNonces() {
        return S;
    }
    get emailToken() {
        return p;
    }
    get hasSeenBackupPrompt() {
        return x;
    }
}
(r = 'MFAStore'),
    (s = 'displayName') in (i = T)
        ? Object.defineProperty(i, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[s] = r),
    (t.Z = new T(u.Z, {
        MFA_ENABLE_SUCCESS: function (e) {
            let { token: t, codes: n } = e;
            void 0 !== t && c.setToken(t), (h = n);
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
            h = [];
        },
        MFA_VIEW_BACKUP_CODES: function (e) {
            let { codes: t, key: n } = e;
            (h = o().sortBy(t, 'code')), (g = n);
        },
        MFA_SEND_VERIFICATION_KEY: function (e) {
            let { nonces: t } = e;
            S = t;
        },
        MFA_SEEN_BACKUP_CODE_PROMPT: function () {
            x = !0;
        }
    }));
