n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(724458);
var i,
    l,
    r,
    s,
    a = n(442837),
    o = n(46973),
    c = n(570140),
    u = n(569545),
    d = n(314897),
    h = n(19780),
    m = n(959457),
    p = n(630759),
    f = n(729303),
    g = n(651941),
    C = n(981631);
let x = new Map(),
    v = new Map(),
    _ = !1,
    I = null;
function E() {
    return m.Z.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: n } = (0, u.my)(t),
            i = !0 === x.get(n),
            l = v.get(t) !== i;
        return v.set(t, i), !!l || e;
    }, !1);
}
function b() {
    var e;
    let t = null !== (e = h.Z.getUserIds()) && void 0 !== e ? e : new Set(),
        n = d.default.getId(),
        i = !0;
    for (let e of t)
        if (n !== e && !0 !== x.get(e)) {
            i = !1;
            break;
        }
    let l = i !== _;
    return (_ = i), l;
}
function S(e) {
    let { userId: t } = e;
    if (d.default.getId() === t) return !1;
    let n = (function (e) {
            let t = h.Z.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
                i = g.Z.isKeyVerified(e, n) || f.Z.isKeyVerified(e, n),
                l = (0, p.UB)(e, [h.Z, m.Z]),
                r = i && !l,
                s = r !== x.get(e);
            return x.set(e, r), s;
        })(t),
        i = E(),
        l = b();
    return n || i || l;
}
function Z() {
    x.clear(), v.clear(), (_ = !1);
}
class T extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, g.Z, h.Z, m.Z);
    }
    isCallVerified() {
        return _;
    }
    isStreamVerified(e) {
        return v.get(e);
    }
    isUserVerified(e) {
        return x.get(e);
    }
}
(s = 'SecureFramesVerifiedStore'),
    (r = 'displayName') in (l = T)
        ? Object.defineProperty(l, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = s),
    (t.Z = new T(c.Z, {
        CONNECTION_OPEN: Z,
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (t === I) return !1;
            (I = t), Z();
        },
        RTC_CONNECTION_STATE: function (e) {
            let { streamKey: t, state: n, context: i } = e;
            if (n !== C.hes.DISCONNECTED) return !1;
            switch (i) {
                case o.Yn.STREAM:
                    if (null == t) return !1;
                    return v.delete(t), b();
                case o.Yn.DEFAULT:
                    Z();
            }
        },
        RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
            let { userIds: t } = e,
                n = d.default.getId(),
                i = t.reduce((e, t) => (n === t ? e : !!S({ userId: t }) || e), !1),
                l = E(),
                r = b();
            return i || l || r;
        },
        SECURE_FRAMES_TRANSIENT_KEY_CREATE: S,
        SECURE_FRAMES_TRANSIENT_KEY_DELETE: S,
        SECURE_FRAMES_VERIFIED_KEY_CREATE: S,
        SECURE_FRAMES_VERIFIED_KEY_DELETE: S,
        SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: S
    }));
