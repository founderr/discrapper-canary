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
    T = n(944486),
    N = n(981631);
let S = 'ActivityTrackingStore',
    A = 30 * f.Z.Millis.MINUTE,
    b = 5 * f.Z.Millis.MINUTE,
    x = null !== (i = c.K.get(S)) && void 0 !== i ? i : {},
    Z = {},
    L = !1;
function y(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    t && O(e, !0);
    let n = Z[e.applicationId];
    null != n && (n.stop(), delete Z[e.applicationId]), delete x[e.applicationId], c.K.set(S, x);
}
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = Date.now(),
        i = null != e.updatedAt ? n - e.updatedAt : 0;
    i > A + b && (i = 0);
    let r = (0, _.OT)(e.applicationId, C.Z),
        l = T.Z.getVoiceChannelId(),
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
    null == o && (o = Z[e.applicationId] = new d.Xp()).start(A, () => O(e)), !t && ((x[e.applicationId] = e), c.K.set(S, x));
}
function P() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = p.ZP.getVisibleRunningGames(),
        n = new Set();
    for (let { name: e, distributor: i, exePath: r } of t) {
        let t = I.Z.getGameByName(e);
        if (null != t)
            n.add(t.id),
                !(t.id in x) &&
                    O({
                        applicationId: t.id,
                        updatedAt: Date.now(),
                        distributor: i,
                        exePath: (0, m.N6)(null != r ? r : '')
                    });
    }
    for (let t of Object.keys(x)) !n.has(t) && y(x[t], e);
}
function R() {
    for (let e of Object.keys(x)) y(x[e]);
    L = !1;
}
class j extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(p.ZP, g.Z, C.Z), this.syncWith([g.Z], P);
    }
    getActivities() {
        return x;
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
        RUNNING_GAMES_CHANGE: () => P(),
        CONNECTION_OPEN: function () {
            if (L) return !1;
            for (let e of Object.keys(x)) O(x[e]);
            P(!1), (L = !0);
        },
        CONNECTION_CLOSED: function (e) {
            let { code: t } = e;
            4004 === t && R();
        },
        LOGOUT: R,
        ACTIVITY_UPDATE_SUCCESS: function (e) {
            let { applicationId: t, token: n } = e,
                i = x[t];
            if (null == i) return !1;
            (i.token = n), c.K.set(S, x);
        },
        ACTIVITY_UPDATE_FAIL: function (e) {
            let { applicationId: t } = e,
                n = x[t];
            if (null == n) return !1;
            (n.token = null), (n.updatedAt = null), c.K.set(S, x);
        }
    });
