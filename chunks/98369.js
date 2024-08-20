n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(724458);
var i,
    a,
    s,
    l,
    r = n(442837),
    o = n(46973),
    c = n(570140),
    u = n(569545),
    d = n(314897),
    h = n(19780),
    p = n(959457),
    m = n(729303),
    _ = n(651941),
    f = n(981631);
let E = new Map(),
    g = new Map(),
    C = !1,
    I = null;
function x() {
    return p.Z.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: n } = (0, u.my)(t),
            i = !0 === E.get(n),
            a = g.get(t) !== i;
        return g.set(t, i), !!a || e;
    }, !1);
}
function T() {
    var e;
    let t = null !== (e = h.Z.getUserIds()) && void 0 !== e ? e : new Set(),
        n = d.default.getId(),
        i = !0;
    for (let e of t)
        if (n !== e && !0 !== E.get(e)) {
            i = !1;
            break;
        }
    let a = i !== C;
    return (C = i), a;
}
function v(e) {
    let { userId: t } = e;
    if (d.default.getId() === t) return !1;
    let n = (function (e) {
            let t = h.Z.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
                i = _.Z.isKeyVerified(e, n) || m.Z.isKeyVerified(e, n),
                a = p.Z.getAllActiveStreamKeys()
                    .filter((t) => p.Z.isUserConnected(t, e))
                    .every((t) => {
                        let i = p.Z.getSecureFramesRosterMapEntry(t, e);
                        if (null == i) return !1;
                        let a = new Uint8Array(i);
                        for (let e = 0; e < n.length; e++) if (n[e] !== a[e]) return !1;
                        return !0;
                    }),
                s = i && a,
                l = s !== E.get(e);
            return E.set(e, s), l;
        })(t),
        i = x(),
        a = T();
    return n || i || a;
}
function N() {
    E.clear(), g.clear(), (C = !1);
}
class S extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, _.Z, h.Z, p.Z);
    }
    isCallVerified() {
        return C;
    }
    isStreamVerified(e) {
        return g.get(e);
    }
    isUserVerified(e) {
        return E.get(e);
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
        CONNECTION_OPEN: N,
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (t === I) return !1;
            (I = t), N();
        },
        RTC_CONNECTION_STATE: function (e) {
            let { streamKey: t, state: n, context: i } = e;
            if (n !== f.hes.DISCONNECTED) return !1;
            switch (i) {
                case o.Yn.STREAM:
                    if (null == t) return !1;
                    return g.delete(t), T();
                case o.Yn.DEFAULT:
                    N();
            }
        },
        RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
            let { userIds: t } = e,
                n = d.default.getId(),
                i = t.reduce((e, t) => (n === t ? e : !!v({ userId: t }) || e), !1),
                a = x(),
                s = T();
            return i || a || s;
        },
        SECURE_FRAMES_TRANSIENT_KEY_CREATE: v,
        SECURE_FRAMES_TRANSIENT_KEY_DELETE: v,
        SECURE_FRAMES_VERIFIED_KEY_CREATE: v,
        SECURE_FRAMES_VERIFIED_KEY_DELETE: v,
        SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: v
    }));
