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
    m = n(630759),
    _ = n(729303),
    f = n(651941),
    E = n(981631);
let C = new Map(),
    g = new Map(),
    I = !1,
    x = null;
function T() {
    return p.Z.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: n } = (0, u.my)(t),
            i = !0 === C.get(n),
            a = g.get(t) !== i;
        return g.set(t, i), !!a || e;
    }, !1);
}
function N() {
    var e;
    let t = null !== (e = h.Z.getUserIds()) && void 0 !== e ? e : new Set(),
        n = d.default.getId(),
        i = !0;
    for (let e of t)
        if (n !== e && !0 !== C.get(e)) {
            i = !1;
            break;
        }
    let a = i !== I;
    return (I = i), a;
}
function S(e) {
    let { userId: t } = e;
    if (d.default.getId() === t) return !1;
    let n = (function (e) {
            let t = h.Z.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
                i = f.Z.isKeyVerified(e, n) || _.Z.isKeyVerified(e, n),
                a = (0, m.UB)(e, [h.Z, p.Z]),
                s = i && !a,
                l = s !== C.get(e);
            return C.set(e, s), l;
        })(t),
        i = T(),
        a = N();
    return n || i || a;
}
function v() {
    C.clear(), g.clear(), (I = !1);
}
class Z extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, f.Z, h.Z, p.Z);
    }
    isCallVerified() {
        return I;
    }
    isStreamVerified(e) {
        return g.get(e);
    }
    isUserVerified(e) {
        return C.get(e);
    }
}
(l = 'SecureFramesVerifiedStore'),
    (s = 'displayName') in (a = Z)
        ? Object.defineProperty(a, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = l),
    (t.Z = new Z(c.Z, {
        CONNECTION_OPEN: v,
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (t === x) return !1;
            (x = t), v();
        },
        RTC_CONNECTION_STATE: function (e) {
            let { streamKey: t, state: n, context: i } = e;
            if (n !== E.hes.DISCONNECTED) return !1;
            switch (i) {
                case o.Yn.STREAM:
                    if (null == t) return !1;
                    return g.delete(t), N();
                case o.Yn.DEFAULT:
                    v();
            }
        },
        RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
            let { userIds: t } = e,
                n = d.default.getId(),
                i = t.reduce((e, t) => (n === t ? e : !!S({ userId: t }) || e), !1),
                a = T(),
                s = N();
            return i || a || s;
        },
        SECURE_FRAMES_TRANSIENT_KEY_CREATE: S,
        SECURE_FRAMES_TRANSIENT_KEY_DELETE: S,
        SECURE_FRAMES_VERIFIED_KEY_CREATE: S,
        SECURE_FRAMES_VERIFIED_KEY_DELETE: S,
        SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: S
    }));
