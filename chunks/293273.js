var i,
    a = r(653041);
var s = r(47120);
var o = r(348327),
    l = r.n(o),
    u = r(392711),
    c = r.n(u),
    d = r(442837),
    f = r(570140),
    _ = r(317381),
    h = r(676035),
    p = r(594190),
    m = r(106301),
    g = r(406066),
    E = r(768419),
    v = r(695346),
    I = r(581883),
    T = r(199902),
    b = r(272053),
    y = r(77498),
    S = r(981631);
function A(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let N = [],
    C = {};
function R() {
    let e = [],
        n = v.Ok.getSetting();
    null != n && ('0' === n.expiresAtMs || new Date(Number(n.expiresAtMs)).getTime() - new Date().getTime() > 0) && e.push((0, h.I)(n));
    let r = g.Z.getActivities();
    e.push(...r);
    let i = b.Z.getStream();
    null != i &&
        e.push({
            type: S.IIU.STREAMING,
            ...i
        });
    let a = new Set();
    c().forEach(C, (n) => {
        let [, r] = n;
        null != r.application_id && (a.add(r.name), e.push(r));
    });
    let s = p.ZP.getVisibleGame(),
        o = null != s && null != s.name && a.has(s.name),
        u = null != s && s.isLauncher,
        d = null != T.Z.getCurrentUserActiveStream(),
        f = o || (u && !d);
    if (null != s && null != s.name && !f) {
        var _, I;
        e.push({
            type: S.IIU.PLAYING,
            name: s.name,
            application_id: null !== (I = s.id) && void 0 !== I ? I : null === (_ = y.Z.getGameByName(s.name)) || void 0 === _ ? void 0 : _.id,
            timestamps: { start: s.start }
        });
    }
    let A = E.Z.getActivity();
    null != A &&
        e.push({
            type: S.IIU.LISTENING,
            ...A
        });
    let R = m.Z.getCurrentHangStatus();
    if (null != R) {
        let n = m.Z.getCustomHangStatus();
        e.push({
            type: S.IIU.HANG_STATUS,
            name: 'Hang Status',
            state: R,
            details: null == n ? void 0 : n.status,
            emoji: null == n ? void 0 : n.emoji
        });
    }
    !l()(N, e) && (N = e);
}
function O() {
    (C = {}), R();
}
function D(e) {
    let { socketId: n, pid: r, activity: i } = e;
    if (l()(C[n], [r, i])) return !1;
    null != i ? (C[n] = [r, i]) : delete C[n], R();
}
function L(e) {
    let { socketId: n } = e;
    delete C[n], R();
}
function x(e) {
    let { localActivities: n } = e;
    (C = { ...n }), R();
}
class w extends (i = d.ZP.Store) {
    initialize() {
        this.waitFor(p.ZP, _.ZP, b.Z, T.Z, E.Z, I.Z, m.Z, y.Z), this.syncWith([g.Z, m.Z], () => R());
    }
    getActivities() {
        return N;
    }
    getPrimaryActivity() {
        return N[0];
    }
    getApplicationActivity(e) {
        return this.findActivity((n) => n.application_id === e);
    }
    getCustomStatusActivity() {
        return this.findActivity((e) => e.type === S.IIU.CUSTOM_STATUS);
    }
    findActivity(e) {
        return N.find(e);
    }
    getApplicationActivities() {
        return C;
    }
    getActivityForPID(e) {
        for (let [n, r] of Object.values(C)) if (n === e) return r;
        return null;
    }
}
A(w, 'displayName', 'LocalActivityStore'),
    (n.Z = new w(f.Z, {
        OVERLAY_INITIALIZE: x,
        START_SESSION: O,
        LOCAL_ACTIVITY_UPDATE: D,
        RPC_APP_DISCONNECTED: L,
        RUNNING_GAMES_CHANGE: R,
        LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: R,
        SPOTIFY_PLAYER_STATE: R,
        SPOTIFY_PLAYER_PLAY: R,
        STREAMING_UPDATE: R,
        USER_CONNECTIONS_UPDATE: R,
        STREAM_START: R,
        STREAM_STOP: R,
        USER_SETTINGS_PROTO_UPDATE: R,
        EMBEDDED_ACTIVITY_CLOSE: R,
        UPDATE_HANG_STATUS: R
    }));
