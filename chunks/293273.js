var r,
    i = n(653041);
var a = n(47120);
var o = n(348327),
    s = n.n(o),
    l = n(392711),
    u = n.n(l),
    c = n(442837),
    d = n(570140),
    _ = n(317381),
    E = n(676035),
    f = n(594190),
    h = n(106301),
    p = n(406066),
    m = n(768419),
    I = n(695346),
    T = n(581883),
    g = n(199902),
    S = n(272053),
    A = n(77498),
    v = n(981631);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let O = [],
    R = {};
function C() {
    let e = [],
        t = I.Ok.getSetting();
    null != t && ('0' === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) && e.push((0, E.I)(t));
    let n = p.Z.getActivities();
    e.push(...n);
    let r = S.Z.getStream();
    null != r &&
        e.push({
            type: v.IIU.STREAMING,
            ...r
        });
    let i = new Set();
    u().forEach(R, (t) => {
        null != t.application_id && (i.add(t.name), e.push(t));
    });
    let a = f.ZP.getVisibleGame(),
        o = null != a && null != a.name && i.has(a.name),
        l = null != a && a.isLauncher,
        c = null != g.Z.getCurrentUserActiveStream(),
        d = o || (l && !c);
    if (null != a && null != a.name && !d) {
        var _, T;
        e.push({
            type: v.IIU.PLAYING,
            name: a.name,
            application_id: null !== (T = a.id) && void 0 !== T ? T : null === (_ = A.Z.getGameByName(a.name)) || void 0 === _ ? void 0 : _.id,
            timestamps: { start: a.start }
        });
    }
    let N = m.Z.getActivity();
    null != N &&
        e.push({
            type: v.IIU.LISTENING,
            ...N
        });
    let C = h.Z.getCurrentHangStatus();
    if (null != C) {
        let t = h.Z.getCustomHangStatus();
        e.push({
            type: v.IIU.HANG_STATUS,
            name: 'Hang Status',
            state: C,
            details: null == t ? void 0 : t.status,
            emoji: null == t ? void 0 : t.emoji
        });
    }
    !s()(O, e) && (O = e);
}
function y() {
    (R = {}), C();
}
function b(e) {
    let { socketId: t, activity: n } = e;
    if (s()(R[t], n)) return !1;
    null != n ? (R[t] = n) : delete R[t], C();
}
function L(e) {
    let { socketId: t } = e;
    delete R[t], C();
}
function D(e) {
    let { localActivities: t } = e;
    (R = { ...t }), C();
}
class M extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(f.ZP, _.ZP, S.Z, g.Z, m.Z, T.Z, h.Z, A.Z), this.syncWith([p.Z, h.Z], () => C());
    }
    getActivities() {
        return O;
    }
    getPrimaryActivity() {
        return O[0];
    }
    getApplicationActivity(e) {
        return this.findActivity((t) => t.application_id === e);
    }
    getCustomStatusActivity() {
        return this.findActivity((e) => e.type === v.IIU.CUSTOM_STATUS);
    }
    findActivity(e) {
        return O.find(e);
    }
    getApplicationActivities() {
        return R;
    }
}
N(M, 'displayName', 'LocalActivityStore'),
    (t.Z = new M(d.Z, {
        OVERLAY_INITIALIZE: D,
        START_SESSION: y,
        LOCAL_ACTIVITY_UPDATE: b,
        RPC_APP_DISCONNECTED: L,
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
