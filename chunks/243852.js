n(47120);
var i,
    r,
    l,
    a,
    s,
    o = n(442837),
    c = n(433517),
    d = n(846519),
    u = n(570140),
    h = n(278323),
    m = n(581567),
    p = n(594190),
    g = n(581883),
    f = n(70956),
    _ = n(780570),
    E = n(314897),
    I = n(77498),
    C = n(283595),
    v = n(19780),
    S = n(944486),
    N = n(981631);
let T = 'ActivityTrackingStore',
    x = 30 * f.Z.Millis.MINUTE,
    b = 5 * f.Z.Millis.MINUTE,
    A = null !== (i = c.K.get(T)) && void 0 !== i ? i : {},
    Z = {},
    y = !1;
function L(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    t && R(e, !0);
    let n = Z[e.applicationId];
    null != n && (n.stop(), delete Z[e.applicationId]), delete A[e.applicationId], c.K.set(T, A);
}
function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = Date.now(),
        i = null != e.updatedAt ? n - e.updatedAt : 0;
    i > x + b && (i = 0);
    let r = (0, _.OT)(e.applicationId, C.Z),
        l = S.Z.getVoiceChannelId(),
        a = E.default.getSessionId(),
        s = v.Z.getMediaSessionId();
    h.Z.updateActivity({
        applicationId: e.applicationId,
        distributor: e.isDiscordApplication ? N.GQo.DISCORD : e.distributor,
        shareActivity: r,
        token: e.token,
        duration: Math.floor(i / 1000),
        closed: t,
        exePath: e.exePath,
        voiceChannelId: l,
        sessionId: a,
        mediaSessionId: s
    }),
        (e.updatedAt = n);
    let o = Z[e.applicationId];
    null == o && (o = Z[e.applicationId] = new d.Xp()).start(x, () => R(e)), !t && ((A[e.applicationId] = e), c.K.set(T, A));
}
function j() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = p.ZP.getVisibleRunningGames(),
        n = new Set();
    for (let { name: e, distributor: i, exePath: r } of t) {
        let t = I.Z.getGameByName(e);
        if (null != t)
            n.add(t.id),
                !(t.id in A) &&
                    R({
                        applicationId: t.id,
                        updatedAt: Date.now(),
                        distributor: i,
                        exePath: (0, m.N6)(null != r ? r : '')
                    });
    }
    for (let t of Object.keys(A)) !n.has(t) && L(A[t], e);
}
function O() {
    for (let e of Object.keys(A)) L(A[e]);
    y = !1;
}
class P extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(p.ZP, g.Z, C.Z), this.syncWith([g.Z], j);
    }
    getActivities() {
        return A;
    }
}
(s = 'ActivityTrackingStore'),
    (a = 'displayName') in (l = P)
        ? Object.defineProperty(l, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[a] = s),
    new P(u.Z, {
        RUNNING_GAMES_CHANGE: () => j(),
        CONNECTION_OPEN: function () {
            if (y) return !1;
            for (let e of Object.keys(A)) R(A[e]);
            j(!1), (y = !0);
        },
        CONNECTION_CLOSED: function (e) {
            let { code: t } = e;
            4004 === t && O();
        },
        LOGOUT: O,
        ACTIVITY_UPDATE_SUCCESS: function (e) {
            let { applicationId: t, token: n } = e,
                i = A[t];
            if (null == i) return !1;
            (i.token = n), c.K.set(T, A);
        },
        ACTIVITY_UPDATE_FAIL: function (e) {
            let { applicationId: t } = e,
                n = A[t];
            if (null == n) return !1;
            (n.token = null), (n.updatedAt = null), c.K.set(T, A);
        }
    });
