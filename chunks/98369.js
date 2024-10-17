n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(724458);
var r,
    l,
    i,
    u,
    s = n(442837),
    o = n(46973),
    a = n(570140),
    c = n(569545),
    d = n(314897),
    f = n(19780),
    E = n(959457),
    _ = n(630759),
    S = n(729303),
    I = n(651941),
    g = n(981631);
let R = new Map(),
    C = new Map(),
    m = !1,
    h = null;
function N() {
    return E.Z.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: n } = (0, c.my)(t),
            r = !0 === R.get(n),
            l = C.get(t) !== r;
        return C.set(t, r), !!l || e;
    }, !1);
}
function T() {
    var e;
    let t = null !== (e = f.Z.getUserIds()) && void 0 !== e ? e : new Set(),
        n = d.default.getId(),
        r = !0;
    for (let e of t)
        if (n !== e && !0 !== R.get(e)) {
            r = !1;
            break;
        }
    let l = r !== m;
    return (m = r), l;
}
function Z(e) {
    let { userId: t } = e;
    if (d.default.getId() === t) return !1;
    let n = (function (e) {
            let t = f.Z.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
                r = I.Z.isKeyVerified(e, n) || S.Z.isKeyVerified(e, n),
                l = (0, _.UB)(e, [f.Z, E.Z]),
                i = r && !l,
                u = i !== R.get(e);
            return R.set(e, i), u;
        })(t),
        r = N(),
        l = T();
    return n || r || l;
}
function v() {
    R.clear(), C.clear(), (m = !1);
}
class y extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(S.Z, I.Z, f.Z, E.Z);
    }
    isCallVerified() {
        return m;
    }
    isStreamVerified(e) {
        return C.get(e);
    }
    isUserVerified(e) {
        return R.get(e);
    }
}
(u = 'SecureFramesVerifiedStore'),
    (i = 'displayName') in (l = y)
        ? Object.defineProperty(l, i, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[i] = u),
    (t.Z = new y(a.Z, {
        CONNECTION_OPEN: v,
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (t === h) return !1;
            (h = t), v();
        },
        RTC_CONNECTION_STATE: function (e) {
            let { streamKey: t, state: n, context: r } = e;
            if (n !== g.hes.DISCONNECTED) return !1;
            switch (r) {
                case o.Yn.STREAM:
                    if (null == t) return !1;
                    return C.delete(t), T();
                case o.Yn.DEFAULT:
                    v();
            }
        },
        RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
            let { userIds: t } = e,
                n = d.default.getId(),
                r = t.reduce((e, t) => (n === t ? e : !!Z({ userId: t }) || e), !1),
                l = N(),
                i = T();
            return r || l || i;
        },
        SECURE_FRAMES_TRANSIENT_KEY_CREATE: Z,
        SECURE_FRAMES_TRANSIENT_KEY_DELETE: Z,
        SECURE_FRAMES_VERIFIED_KEY_CREATE: Z,
        SECURE_FRAMES_VERIFIED_KEY_DELETE: Z,
        SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: Z
    }));
