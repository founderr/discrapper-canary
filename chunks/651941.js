n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(47120);
var i,
    o = n(442837),
    r = n(253135),
    l = n(570140),
    s = n(709054);
function a(e, t, n) {
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
let u = {};
class c extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        var t;
        u = null !== (t = null == e ? void 0 : e.users) && void 0 !== t ? t : {};
    }
    getState() {
        return { users: u };
    }
    getKeyTrustedAt(e, t) {
        var n;
        let i = (0, r.MK)(t);
        return null === (n = u[e]) || void 0 === n ? void 0 : n[i];
    }
    isKeyVerified(e, t) {
        return null != this.getKeyTrustedAt(e, t);
    }
    getUserIds() {
        return s.default.keys(u);
    }
    getUserVerifiedKeys(e) {
        return u[e];
    }
}
a(c, 'displayName', 'VerifiedKeyStore'),
    a(c, 'persistKey', 'VerifiedKeyStore'),
    (t.Z = new c(l.Z, {
        SECURE_FRAMES_VERIFIED_KEY_CREATE: function (e) {
            let { userId: t, key: n } = e,
                i = (function (e) {
                    var t;
                    let n = null !== (t = u[e]) && void 0 !== t ? t : {};
                    return (u[e] = n), n;
                })(t),
                o = new Uint8Array(n);
            i[(0, r.MK)(o)] = Date.now();
        },
        SECURE_FRAMES_VERIFIED_KEY_DELETE: function (e) {
            let { userId: t, serializedKey: n } = e,
                i = u[t];
            if (null == i) return !1;
            let o = delete i[n],
                r = !1;
            return 0 === Object.keys(i).length && (delete u[t], (r = !0)), o || r;
        },
        SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function (e) {
            let { userId: t } = e;
            return null != u[t] && delete u[t];
        }
    }));
