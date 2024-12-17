n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(47120);
var r,
    i = n(442837),
    u = n(253135),
    l = n(570140),
    s = n(709054);
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
let d = {};
class a extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        var t;
        d = null !== (t = null == e ? void 0 : e.users) && void 0 !== t ? t : {};
    }
    getState() {
        return { users: d };
    }
    getKeyTrustedAt(e, t) {
        var n;
        let r = (0, u.MK)(t);
        return null === (n = d[e]) || void 0 === n ? void 0 : n[r];
    }
    isKeyVerified(e, t) {
        return null != this.getKeyTrustedAt(e, t);
    }
    getUserIds() {
        return s.default.keys(d);
    }
    getUserVerifiedKeys(e) {
        return d[e];
    }
}
o(a, 'displayName', 'VerifiedKeyStore'),
    o(a, 'persistKey', 'VerifiedKeyStore'),
    (t.Z = new a(l.Z, {
        SECURE_FRAMES_VERIFIED_KEY_CREATE: function (e) {
            let { userId: t, key: n } = e,
                r = (function (e) {
                    var t;
                    let n = null !== (t = d[e]) && void 0 !== t ? t : {};
                    return (d[e] = n), n;
                })(t),
                i = new Uint8Array(n);
            r[(0, u.MK)(i)] = Date.now();
        },
        SECURE_FRAMES_VERIFIED_KEY_DELETE: function (e) {
            let { userId: t, serializedKey: n } = e,
                r = d[t];
            if (null == r) return !1;
            let i = delete r[n],
                u = !1;
            return 0 === Object.keys(r).length && (delete d[t], (u = !0)), i || u;
        },
        SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function (e) {
            let { userId: t } = e;
            return null != d[t] && delete d[t];
        }
    }));
