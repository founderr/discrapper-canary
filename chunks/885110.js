n(47120);
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
    _ = n(503438),
    p = n(768419),
    h = n(695346),
    m = n(581883),
    g = n(780570),
    E = n(77498),
    v = n(517100),
    b = n(283595),
    I = n(293273),
    T = n(158776),
    S = n(797258),
    y = n(981631);
let A = !1,
    N = y.Skl.ONLINE,
    C = y.Skl.UNKNOWN,
    R = 0,
    O = [],
    D = !1,
    L = !0,
    x = Object.freeze([]),
    w = [];
function M(e) {
    return (0, g.OT)(e, b.Z);
}
function P(e) {
    switch (e.type) {
        case y.IIU.LISTENING:
            if ((0, _.Z)(e)) return p.Z.shouldShowActivity();
            if (null != e.application_id) return M(e.application_id);
            return !1;
        case y.IIU.PLAYING:
            return null != e.application_id
                ? M(e.application_id)
                : (function (e) {
                      let t = E.Z.getGameByName(e);
                      return null != t ? M(t.id) : h.G6.getSetting();
                  })(e.name);
        case y.IIU.STREAMING:
        case y.IIU.WATCHING:
        default:
            return null == e.application_id || M(e.application_id);
    }
}
function k() {
    var e;
    if (((R = null !== (e = v.Z.getIdleSince()) && void 0 !== e ? e : 0), (D = v.Z.isAFK()), L)) N = C;
    else if (A) N = y.Skl.INVISIBLE;
    else {
        let e = h.co.getSetting();
        N = e !== y.Skl.UNKNOWN ? e : y.Skl.ONLINE;
    }
    N === y.Skl.ONLINE && R > 0 && (N = y.Skl.IDLE);
    let t = !1,
        n = L || N === y.Skl.INVISIBLE ? [] : I.Z.getActivities().filter(P);
    !l()(O, n) && ((O = n), (t = !0));
    let r = S.Z.getRemoteActivities();
    if ((x !== r && ((x = r), (t = !0)), t)) {
        let e = O.find((e) => e.type === y.IIU.CUSTOM_STATUS);
        w =
            O.filter((e) => e.type !== y.IIU.CUSTOM_STATUS).length > 0
                ? O
                : null != e
                  ? [
                        e,
                        ...c()(x)
                            .filter((e) => e.type !== y.IIU.CUSTOM_STATUS)
                            .uniqBy((e) => ''.concat(e.type, ':').concat(e.application_id, ':').concat(e.name))
                            .value()
                    ]
                  : c().uniqBy(x, (e) => ''.concat(e.type, ':').concat(e.application_id, ':').concat(e.name));
    }
}
function U() {
    (L = !1), (C = y.Skl.UNKNOWN), k(), T.Z.setCurrentUserOnConnectionOpen(N, w);
}
class G extends (r = d.ZP.Store) {
    initialize() {
        this.waitFor(v.Z, m.Z, I.Z, S.Z, b.Z, E.Z), this.syncWith([I.Z], k);
    }
    getLocalPresence() {
        return {
            status: N,
            since: R,
            activities: O,
            afk: D
        };
    }
    getStatus() {
        return N;
    }
    getActivities() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? w : O;
    }
    getPrimaryActivity() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? w[0] : O[0];
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
(s = 'SelfPresenceStore'),
    (a = 'displayName') in (i = G)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new G(f.Z, {
        START_SESSION: k,
        CONNECTION_OPEN: function () {
            U();
        },
        CONNECTION_OPEN_SUPPLEMENTAL: U,
        OVERLAY_INITIALIZE: U,
        CONNECTION_CLOSED: k,
        IDLE: k,
        AFK: k,
        RUNNING_GAMES_CHANGE: k,
        STREAMING_UPDATE: k,
        USER_SETTINGS_PROTO_UPDATE: k,
        LOCAL_ACTIVITY_UPDATE: k,
        SPOTIFY_PLAYER_STATE: k,
        SPOTIFY_PLAYER_PLAY: k,
        USER_CONNECTIONS_UPDATE: k,
        SESSIONS_REPLACE: k,
        RPC_APP_DISCONNECTED: k,
        LIBRARY_FETCH_SUCCESS: k,
        LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: k,
        LOGOUT: function () {
            (L = !0), (C = N), k();
        },
        FORCE_INVISIBLE: function (e) {
            return (A = e.invisible), k();
        },
        WINDOW_FOCUS: function () {
            return (A = !1), k();
        }
    }));
