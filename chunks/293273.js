n(653041), n(47120);
var r,
    i,
    a,
    s,
    o = n(348327),
    l = n.n(o),
    u = n(392711),
    c = n.n(u),
    d = n(442837),
    f = n(570140),
    _ = n(317381),
    h = n(676035),
    p = n(594190),
    m = n(106301),
    g = n(406066),
    E = n(768419),
    v = n(695346),
    I = n(581883),
    S = n(199902),
    T = n(272053),
    b = n(77498),
    y = n(981631);
let A = [],
    N = {};
function C() {
    let e = [],
        t = v.Ok.getSetting();
    null != t && ('0' === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) && e.push((0, h.I)(t));
    let n = g.Z.getActivities();
    e.push(...n);
    let r = T.Z.getStream();
    null != r &&
        e.push({
            type: y.IIU.STREAMING,
            ...r
        });
    let i = new Set();
    c().forEach(N, (t) => {
        let [, n] = t;
        null != n.application_id && (i.add(n.name), e.push(n));
    });
    let a = p.ZP.getVisibleGame(),
        s = null != a && null != a.name && i.has(a.name),
        o = null != a && a.isLauncher,
        u = S.Z.getCurrentUserActiveStream();
    if (null != a && null != a.name && !(s || (o && !(null != u)))) {
        var d, f;
        e.push({
            type: y.IIU.PLAYING,
            name: a.name,
            application_id: null !== (f = a.id) && void 0 !== f ? f : null === (d = b.Z.getGameByName(a.name)) || void 0 === d ? void 0 : d.id,
            timestamps: { start: a.start }
        });
    }
    let _ = E.Z.getActivity();
    null != _ &&
        e.push({
            type: y.IIU.LISTENING,
            ..._
        });
    let I = m.Z.getCurrentHangStatus();
    if (null != I) {
        let t = m.Z.getCustomHangStatus();
        e.push({
            type: y.IIU.HANG_STATUS,
            name: 'Hang Status',
            state: I,
            details: null == t ? void 0 : t.status,
            emoji: null == t ? void 0 : t.emoji
        });
    }
    !l()(A, e) && (A = e);
}
class R extends (r = d.ZP.Store) {
    initialize() {
        this.waitFor(p.ZP, _.ZP, T.Z, S.Z, E.Z, I.Z, m.Z, b.Z), this.syncWith([g.Z, m.Z], () => C());
    }
    getActivities() {
        return A;
    }
    getPrimaryActivity() {
        return A[0];
    }
    getApplicationActivity(e) {
        return this.findActivity((t) => t.application_id === e);
    }
    getCustomStatusActivity() {
        return this.findActivity((e) => e.type === y.IIU.CUSTOM_STATUS);
    }
    findActivity(e) {
        return A.find(e);
    }
    getApplicationActivities() {
        return N;
    }
    getActivityForPID(e) {
        for (let [t, n] of Object.values(N)) if (t === e) return n;
        return null;
    }
}
(s = 'LocalActivityStore'),
    (a = 'displayName') in (i = R)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new R(f.Z, {
        OVERLAY_INITIALIZE: function (e) {
            let { localActivities: t } = e;
            (N = { ...t }), C();
        },
        START_SESSION: function () {
            (N = {}), C();
        },
        LOCAL_ACTIVITY_UPDATE: function (e) {
            let { socketId: t, pid: n, activity: r } = e;
            if (l()(N[t], [n, r])) return !1;
            null != r ? (N[t] = [n, r]) : delete N[t], C();
        },
        RPC_APP_DISCONNECTED: function (e) {
            let { socketId: t } = e;
            delete N[t], C();
        },
        RUNNING_GAMES_CHANGE: C,
        LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: C,
        SPOTIFY_PLAYER_STATE: C,
        SPOTIFY_PLAYER_PLAY: C,
        STREAMING_UPDATE: C,
        USER_CONNECTIONS_UPDATE: C,
        STREAM_START: C,
        STREAM_STOP: C,
        USER_SETTINGS_PROTO_UPDATE: C,
        EMBEDDED_ACTIVITY_CLOSE: C,
        UPDATE_HANG_STATUS: C
    }));
