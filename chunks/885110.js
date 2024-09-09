let r, i;
n(47120);
var a,
    s,
    o,
    l,
    u = n(348327),
    c = n.n(u),
    d = n(392711),
    _ = n.n(d),
    E = n(442837),
    f = n(570140),
    h = n(503438),
    p = n(860852),
    I = n(768419),
    m = n(695346),
    T = n(581883),
    S = n(131704),
    g = n(780570),
    A = n(314897),
    N = n(77498),
    O = n(517100),
    R = n(283595),
    v = n(293273),
    C = n(158776),
    y = n(797258),
    L = n(981631);
let D = !1,
    b = L.Skl.ONLINE,
    M = L.Skl.UNKNOWN,
    P = 0,
    U = [],
    w = !1,
    x = !0,
    G = Object.freeze([]),
    k = [];
function B(e) {
    return (0, g.OT)(e, R.Z);
}
function F(e) {
    switch (e.type) {
        case L.IIU.LISTENING:
            if ((0, h.Z)(e)) return I.Z.shouldShowActivity();
            if (null != e.application_id) return B(e.application_id);
            return !1;
        case L.IIU.PLAYING:
            return null != e.application_id
                ? B(e.application_id)
                : (function (e) {
                      let t = N.Z.getGameByName(e);
                      return null != t ? B(t.id) : m.G6.getSetting();
                  })(e.name);
        case L.IIU.STREAMING:
        case L.IIU.WATCHING:
        default:
            return null == e.application_id || B(e.application_id);
    }
}
function V() {
    var e;
    if (((P = null !== (e = O.Z.getIdleSince()) && void 0 !== e ? e : 0), (w = O.Z.isAFK()), x)) (b = M), H();
    else if (D) b = L.Skl.INVISIBLE;
    else {
        let e = m.co.getSetting();
        b = e !== L.Skl.UNKNOWN ? e : L.Skl.ONLINE;
    }
    b === L.Skl.ONLINE && P > 0 && (b = L.Skl.IDLE);
    let t = !1,
        n = x || b === L.Skl.INVISIBLE ? [] : v.Z.getActivities().filter(F);
    !c()(U, n) && ((U = n), (t = !0));
    let r = y.Z.getRemoteActivities();
    if ((G !== r && ((G = r), (t = !0)), t)) {
        let e = U.find((e) => e.type === L.IIU.CUSTOM_STATUS);
        k =
            U.filter((e) => e.type !== L.IIU.CUSTOM_STATUS).length > 0
                ? U
                : null != e
                  ? [
                        e,
                        ..._()(G)
                            .filter((e) => e.type !== L.IIU.CUSTOM_STATUS)
                            .uniqBy((e) => ''.concat(e.type, ':').concat(e.application_id, ':').concat(e.name))
                            .value()
                    ]
                  : _().uniqBy(G, (e) => ''.concat(e.type, ':').concat(e.application_id, ':').concat(e.name));
    }
}
function H() {
    (r = void 0), (i = void 0);
}
function Z() {
    (x = !1), (M = L.Skl.UNKNOWN), V(), C.Z.setCurrentUserOnConnectionOpen(b, k);
}
class Y extends (a = E.ZP.Store) {
    initialize() {
        this.waitFor(O.Z, T.Z, v.Z, y.Z, R.Z, N.Z), this.syncWith([v.Z], V);
    }
    getLocalPresence() {
        return {
            status: b,
            since: P,
            activities: U,
            afk: w,
            broadcast: i
        };
    }
    getStatus() {
        return b;
    }
    getActivities() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? k : U;
    }
    getPrimaryActivity() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? k[0] : U[0];
    }
    getApplicationActivity(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return this.findActivity((t) => t.application_id === e, t);
    }
    findActivity(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return this.getActivities(t).find(e);
    }
    getBroadcast() {
        return r;
    }
}
(l = 'SelfPresenceStore'),
    (o = 'displayName') in (s = Y)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.Z = new Y(f.Z, {
        START_SESSION: V,
        CONNECTION_OPEN: function () {
            Z();
        },
        CONNECTION_OPEN_SUPPLEMENTAL: Z,
        OVERLAY_INITIALIZE: Z,
        CONNECTION_CLOSED: V,
        IDLE: V,
        AFK: V,
        RUNNING_GAMES_CHANGE: V,
        STREAMING_UPDATE: V,
        USER_SETTINGS_PROTO_UPDATE: V,
        LOCAL_ACTIVITY_UPDATE: V,
        SPOTIFY_PLAYER_STATE: V,
        SPOTIFY_PLAYER_PLAY: V,
        USER_CONNECTIONS_UPDATE: V,
        SESSIONS_REPLACE: V,
        RPC_APP_DISCONNECTED: V,
        LIBRARY_FETCH_SUCCESS: V,
        LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: V,
        LOGOUT: function () {
            (x = !0), (M = b), V();
        },
        FORCE_INVISIBLE: function (e) {
            return (D = e.invisible), V();
        },
        WINDOW_FOCUS: function () {
            return (D = !1), V();
        },
        BROADCAST_START: function (e) {
            (r = e.broadcast), (i = (0, p.HD)(e.broadcast));
        },
        BROADCAST_STOP: H,
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            t instanceof S.Sf && (null == t ? void 0 : t.isBroadcastChannel()) && (null == t ? void 0 : t.ownerId) === A.default.getId() && ((r = void 0), (i = void 0));
        }
    }));
