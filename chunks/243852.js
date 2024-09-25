n(47120);
var i,
    a,
    s,
    r,
    l,
    o = n(442837),
    c = n(433517),
    d = n(846519),
    u = n(570140),
    _ = n(278323),
    E = n(581567),
    h = n(594190),
    m = n(581883),
    I = n(70956),
    g = n(780570),
    p = n(314897),
    T = n(77498),
    S = n(283595),
    f = n(19780),
    C = n(944486),
    N = n(981631);
let A = 'ActivityTrackingStore',
    v = 30 * I.Z.Millis.MINUTE,
    L = 5 * I.Z.Millis.MINUTE,
    Z = null !== (i = c.K.get(A)) && void 0 !== i ? i : {},
    R = {},
    O = !1;
function x(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    t && b(e, !0);
    let n = R[e.applicationId];
    null != n && (n.stop(), delete R[e.applicationId]), delete Z[e.applicationId], c.K.set(A, Z);
}
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = Date.now(),
        i = null != e.updatedAt ? n - e.updatedAt : 0;
    i > v + L && (i = 0);
    let a = (0, g.OT)(e.applicationId, S.Z),
        s = C.Z.getVoiceChannelId(),
        r = p.default.getSessionId(),
        l = f.Z.getMediaSessionId();
    _.Z.updateActivity({
        applicationId: e.applicationId,
        distributor: e.isDiscordApplication ? N.GQo.DISCORD : e.distributor,
        shareActivity: a,
        token: e.token,
        duration: Math.floor(i / 1000),
        closed: t,
        exePath: e.exePath,
        voiceChannelId: s,
        sessionId: r,
        mediaSessionId: l
    }),
        (e.updatedAt = n);
    let o = R[e.applicationId];
    null == o && (o = R[e.applicationId] = new d.Xp()).start(v, () => b(e)), !t && ((Z[e.applicationId] = e), c.K.set(A, Z));
}
function P() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = h.ZP.getVisibleRunningGames(),
        n = new Set();
    for (let { name: e, distributor: i, exePath: a } of t) {
        let t = T.Z.getGameByName(e);
        if (null != t)
            n.add(t.id),
                !(t.id in Z) &&
                    b({
                        applicationId: t.id,
                        updatedAt: Date.now(),
                        distributor: i,
                        exePath: (0, E.N6)(null != a ? a : '')
                    });
    }
    for (let t of Object.keys(Z)) !n.has(t) && x(Z[t], e);
}
function M() {
    for (let e of Object.keys(Z)) x(Z[e]);
    O = !1;
}
class D extends (a = o.ZP.Store) {
    initialize() {
        this.waitFor(h.ZP, m.Z, S.Z), this.syncWith([m.Z], P);
    }
    getActivities() {
        return Z;
    }
}
(l = 'ActivityTrackingStore'),
    (r = 'displayName') in (s = D)
        ? Object.defineProperty(s, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[r] = l),
    new D(u.Z, {
        RUNNING_GAMES_CHANGE: () => P(),
        CONNECTION_OPEN: function () {
            if (O) return !1;
            for (let e of Object.keys(Z)) b(Z[e]);
            P(!1), (O = !0);
        },
        CONNECTION_CLOSED: function (e) {
            let { code: t } = e;
            4004 === t && M();
        },
        LOGOUT: M,
        ACTIVITY_UPDATE_SUCCESS: function (e) {
            let { applicationId: t, token: n } = e,
                i = Z[t];
            if (null == i) return !1;
            (i.token = n), c.K.set(A, Z);
        },
        ACTIVITY_UPDATE_FAIL: function (e) {
            let { applicationId: t } = e,
                n = Z[t];
            if (null == n) return !1;
            (n.token = null), (n.updatedAt = null), c.K.set(A, Z);
        }
    });
