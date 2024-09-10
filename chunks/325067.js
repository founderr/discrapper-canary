var n,
    o,
    a,
    l,
    r = i(392711),
    s = i.n(r),
    c = i(213919),
    d = i(442837),
    u = i(570140);
let _ = !1,
    E = [],
    M = '',
    A = '',
    b = !1,
    C = {
        viewNonce: '',
        regenerateNonce: ''
    };
class h extends (l = d.ZP.Store) {
    getVerificationKey() {
        return M;
    }
    getBackupCodes() {
        return E;
    }
    get togglingSMS() {
        return _;
    }
    getNonces() {
        return C;
    }
    get emailToken() {
        return A;
    }
    get hasSeenBackupPrompt() {
        return b;
    }
}
(a = 'MFAStore'),
    (o = 'displayName') in (n = h)
        ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (n[o] = a),
    (t.Z = new h(u.Z, {
        MFA_ENABLE_SUCCESS: function (e) {
            let { token: t, codes: i } = e;
            void 0 !== t && c.setToken(t), (E = i);
        },
        MFA_ENABLE_EMAIL_TOKEN: function (e) {
            let { token: t } = e;
            A = t;
        },
        MFA_DISABLE_SUCCESS: function (e) {
            let { token: t } = e;
            c.setToken(t);
        },
        MFA_SMS_TOGGLE: function () {
            _ = !0;
        },
        MFA_SMS_TOGGLE_COMPLETE: function () {
            _ = !1;
        },
        MFA_CLEAR_BACKUP_CODES: function () {
            E = [];
        },
        MFA_VIEW_BACKUP_CODES: function (e) {
            let { codes: t, key: i } = e;
            (E = s().sortBy(t, 'code')), (M = i);
        },
        MFA_SEND_VERIFICATION_KEY: function (e) {
            let { nonces: t } = e;
            C = t;
        },
        MFA_SEEN_BACKUP_CODE_PROMPT: function () {
            b = !0;
        }
    }));
