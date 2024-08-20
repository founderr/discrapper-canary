n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(724458);
var i,
    a,
    s,
    l,
    r = n(442837),
    o = n(46973),
    c = n(570140),
    u = n(314897),
    d = n(19780),
    h = n(959457),
    m = n(729303),
    p = n(651941),
    _ = n(981631);
let f = new Map(),
    E = new Map(),
    C = !1,
    g = null;
function I() {
    let e = h.Z.getRTCConnections(),
        t = u.default.getId();
    return Object.entries(e).reduce((e, n) => {
        let [i, a] = n,
            s = a.getUserIds();
        if (!s.has(t)) return E.delete(i), !0;
        let l = !0;
        for (let e in s)
            if (e !== t && !0 !== f.get(e)) {
                l = !1;
                break;
            }
        let r = E.get(i) !== l;
        return E.set(i, l), !!r || e;
    }, !1);
}
function x() {
    var e;
    let t = null !== (e = d.Z.getUserIds()) && void 0 !== e ? e : new Set(),
        n = h.Z.getAllActiveStreamKeys(),
        i = u.default.getId(),
        a = !0;
    for (let e of t)
        if (i !== e && !0 !== f.get(e)) {
            a = !1;
            break;
        }
    let s = n.every((e) => E.get(e)),
        l = a && s,
        r = l !== C;
    return (C = l), r;
}
function T(e) {
    let { userId: t } = e;
    if (u.default.getId() === t) return !1;
    let n = (function (e) {
            let t = d.Z.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
                i = p.Z.isKeyVerified(e, n) || m.Z.isKeyVerified(e, n),
                a = h.Z.getAllActiveStreamKeys()
                    .filter((t) => h.Z.isUserConnected(t, e))
                    .every((t) => {
                        let i = h.Z.getSecureFramesRosterMapEntry(t, e);
                        if (null == i) return !1;
                        let a = new Uint8Array(i);
                        for (let e = 0; e < n.length; e++) if (n[e] !== a[e]) return !1;
                        return !0;
                    }),
                s = i && a,
                l = s !== f.get(e);
            return f.set(e, s), l;
        })(t),
        i = I(),
        a = x();
    return n || i || a;
}
function N(e) {
    let { userIds: t } = e,
        n = u.default.getId(),
        i = t.reduce((e, t) => (n === t ? e : !!T({ userId: t }) || e), !1),
        a = I(),
        s = x();
    return i || a || s;
}
function v() {
    f.clear(), E.clear(), (C = !1);
}
class S extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, p.Z, d.Z, h.Z);
    }
    isCallVerified() {
        return C;
    }
    isStreamVerified(e) {
        return E.get(e);
    }
    isUserVerified(e) {
        return f.get(e);
    }
}
(l = 'SecureFramesVerifiedStore'),
    (s = 'displayName') in (a = S)
        ? Object.defineProperty(a, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = l),
    (t.Z = new S(c.Z, {
        CONNECTION_OPEN: v,
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (t === g) return !1;
            (g = t), v();
        },
        RTC_CONNECTION_STATE: function (e) {
            let { streamKey: t, state: n, context: i } = e;
            if (n !== _.hes.DISCONNECTED) return !1;
            switch (i) {
                case o.Yn.STREAM:
                    if (null == t) return !1;
                    return E.delete(t), x();
                case o.Yn.DEFAULT:
                    v();
            }
        },
        RTC_CONNECTION_ROSTER_MAP_UPDATE: N,
        SECURE_FRAMES_TRANSIENT_KEY_CREATE: T,
        SECURE_FRAMES_TRANSIENT_KEY_DELETE: T,
        SECURE_FRAMES_VERIFIED_KEY_CREATE: T,
        SECURE_FRAMES_VERIFIED_KEY_DELETE: T,
        SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: T,
        SECURE_FRAMES_ALL_VERIFIED_KEYS_DELETE: N
    }));
