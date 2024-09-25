var r,
    i = n(47120);
var a = n(348327),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    u = n(442837),
    c = n(570140),
    d = n(503438),
    _ = n(768419),
    E = n(695346),
    f = n(581883),
    h = n(780570),
    p = n(77498),
    m = n(517100),
    I = n(283595),
    T = n(293273),
    g = n(158776),
    S = n(797258),
    A = n(981631);
function v(e, t, n) {
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
let N = !1,
    O = A.Skl.ONLINE,
    R = A.Skl.UNKNOWN,
    C = 0,
    y = [],
    b = !1,
    L = !0,
    D = Object.freeze([]),
    M = [];
function P(e) {
    return (0, h.OT)(e, I.Z);
}
function U(e) {
    let t = p.Z.getGameByName(e);
    return null != t ? P(t.id) : E.G6.getSetting();
}
function w(e) {
    switch (e.type) {
        case A.IIU.LISTENING:
            if ((0, d.Z)(e)) return _.Z.shouldShowActivity();
            if (null != e.application_id) return P(e.application_id);
            return !1;
        case A.IIU.PLAYING:
            return null != e.application_id ? P(e.application_id) : U(e.name);
        case A.IIU.STREAMING:
        case A.IIU.WATCHING:
        default:
            return null == e.application_id || P(e.application_id);
    }
}
function x() {
    (L = !0), (R = O), G();
}
function G() {
    var e;
    if (((C = null !== (e = m.Z.getIdleSince()) && void 0 !== e ? e : 0), (b = m.Z.isAFK()), L)) O = R;
    else if (N) O = A.Skl.INVISIBLE;
    else {
        let e = E.co.getSetting();
        O = e !== A.Skl.UNKNOWN ? e : A.Skl.ONLINE;
    }
    O === A.Skl.ONLINE && C > 0 && (O = A.Skl.IDLE);
    let t = !1,
        n = L || O === A.Skl.INVISIBLE ? [] : T.Z.getActivities().filter(w);
    !o()(y, n) && ((y = n), (t = !0));
    let r = S.Z.getRemoteActivities();
    if ((D !== r && ((D = r), (t = !0)), t)) {
        let e = y.find((e) => e.type === A.IIU.CUSTOM_STATUS);
        M =
            y.filter((e) => e.type !== A.IIU.CUSTOM_STATUS).length > 0
                ? y
                : null != e
                  ? [
                        e,
                        ...l()(D)
                            .filter((e) => e.type !== A.IIU.CUSTOM_STATUS)
                            .uniqBy((e) => ''.concat(e.type, ':').concat(e.application_id, ':').concat(e.name))
                            .value()
                    ]
                  : l().uniqBy(D, (e) => ''.concat(e.type, ':').concat(e.application_id, ':').concat(e.name));
    }
}
function k(e) {
    return (N = e.invisible), G();
}
function B() {
    return (N = !1), G();
}
function F() {
    (L = !1), (R = A.Skl.UNKNOWN), G(), g.Z.setCurrentUserOnConnectionOpen(O, M);
}
function Z() {
    F();
}
class V extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, f.Z, T.Z, S.Z, I.Z, p.Z), this.syncWith([T.Z], G);
    }
    getLocalPresence() {
        return {
            status: O,
            since: C,
            activities: y,
            afk: b
        };
    }
    getStatus() {
        return O;
    }
    getActivities() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? M : y;
    }
    getPrimaryActivity() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? M[0] : y[0];
    }
    getApplicationActivity(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return this.findActivity((t) => t.application_id === e, t);
    }
    findActivity(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return this.getActivities(t).find(e);
    }
}
v(V, 'displayName', 'SelfPresenceStore'),
    (t.Z = new V(c.Z, {
        START_SESSION: G,
        CONNECTION_OPEN: Z,
        CONNECTION_OPEN_SUPPLEMENTAL: F,
        OVERLAY_INITIALIZE: F,
        CONNECTION_CLOSED: G,
        IDLE: G,
        AFK: G,
        RUNNING_GAMES_CHANGE: G,
        STREAMING_UPDATE: G,
        USER_SETTINGS_PROTO_UPDATE: G,
        LOCAL_ACTIVITY_UPDATE: G,
        SPOTIFY_PLAYER_STATE: G,
        SPOTIFY_PLAYER_PLAY: G,
        USER_CONNECTIONS_UPDATE: G,
        SESSIONS_REPLACE: G,
        RPC_APP_DISCONNECTED: G,
        LIBRARY_FETCH_SUCCESS: G,
        LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: G,
        LOGOUT: x,
        FORCE_INVISIBLE: k,
        WINDOW_FOCUS: B
    }));
