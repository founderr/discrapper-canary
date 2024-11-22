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
    N = n(944486),
    T = n(981631);
let S = 'ActivityTrackingStore',
    A = 30 * f.Z.Millis.MINUTE,
    x = 5 * f.Z.Millis.MINUTE,
    b = null !== (i = c.K.get(S)) && void 0 !== i ? i : {},
    Z = {},
    L = !1;
function y(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    t && P(e, !0);
    let n = Z[e.applicationId];
    null != n && (n.stop(), delete Z[e.applicationId]), delete b[e.applicationId], c.K.set(S, b);
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = Date.now(),
        i = null != e.updatedAt ? n - e.updatedAt : 0;
    i > A + x && (i = 0);
    let r = (0, _.OT)(e.applicationId, C.Z),
        l = N.Z.getVoiceChannelId(),
        a = E.default.getSessionId(),
        s = v.Z.getMediaSessionId();
    h.Z.updateActivity({
        applicationId: e.applicationId,
        distributor: e.isDiscordApplication ? T.GQo.DISCORD : e.distributor,
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
    null == o && (o = Z[e.applicationId] = new d.Xp()).start(A, () => P(e)), !t && ((b[e.applicationId] = e), c.K.set(S, b));
}
function O() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = p.ZP.getVisibleRunningGames(),
        n = new Set();
    for (let { name: e, distributor: i, exePath: r } of t) {
        let t = I.Z.getGameByName(e);
        if (null != t)
            n.add(t.id),
                !(t.id in b) &&
                    P({
                        applicationId: t.id,
                        updatedAt: Date.now(),
                        distributor: i,
                        exePath: (0, m.N6)(null != r ? r : '')
                    });
    }
    for (let t of Object.keys(b)) !n.has(t) && y(b[t], e);
}
function R() {
    for (let e of Object.keys(b)) y(b[e]);
    L = !1;
}
class j extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(p.ZP, g.Z, C.Z), this.syncWith([g.Z], O);
    }
    getActivities() {
        return b;
    }
}
(s = 'ActivityTrackingStore'),
    (a = 'displayName') in (l = j)
        ? Object.defineProperty(l, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[a] = s),
    new j(u.Z, {
        RUNNING_GAMES_CHANGE: () => O(),
        CONNECTION_OPEN: function () {
            if (L) return !1;
            for (let e of Object.keys(b)) P(b[e]);
            O(!1), (L = !0);
        },
        CONNECTION_CLOSED: function (e) {
            let { code: t } = e;
            4004 === t && R();
        },
        LOGOUT: R,
        ACTIVITY_UPDATE_SUCCESS: function (e) {
            let { applicationId: t, token: n } = e,
                i = b[t];
            if (null == i) return !1;
            (i.token = n), c.K.set(S, b);
        },
        ACTIVITY_UPDATE_FAIL: function (e) {
            let { applicationId: t } = e,
                n = b[t];
            if (null == n) return !1;
            (n.token = null), (n.updatedAt = null), c.K.set(S, b);
        }
    });
