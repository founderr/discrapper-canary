"use strict";
let s, i;
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("222007");
var r = n("714617"),
  a = n.n(r),
  o = n("917351"),
  d = n.n(o),
  u = n("446674"),
  l = n("913144"),
  f = n("429928"),
  _ = n("837374"),
  c = n("662285"),
  g = n("845579"),
  m = n("374363"),
  h = n("233069"),
  v = n("599110"),
  E = n("964889"),
  p = n("271938"),
  y = n("546463"),
  T = n("603699"),
  C = n("686470"),
  S = n("52028"),
  I = n("824563"),
  A = n("235660"),
  D = n("49111");
let N = !1,
  O = D.StatusTypes.ONLINE,
  P = D.StatusTypes.UNKNOWN,
  b = 0,
  V = [],
  R = !1,
  k = !0,
  M = Object.freeze([]),
  w = [];

function L(e) {
  return (0, E.shouldShareApplicationActivity)(e, C.default)
}

function U(e) {
  switch (e.type) {
    case D.ActivityTypes.LISTENING:
      if ((0, f.default)(e)) return c.default.shouldShowActivity();
      if (null != e.application_id) return L(e.application_id);
      return !1;
    case D.ActivityTypes.PLAYING:
      return null != e.application_id ? L(e.application_id) : function(e) {
        let t = y.default.getGameByName(e);
        return null != t ? L(t.id) : g.ShowCurrentGame.getSetting()
      }(e.name);
    case D.ActivityTypes.STREAMING:
    case D.ActivityTypes.WATCHING:
    default:
      return null == e.application_id || L(e.application_id)
  }
}

function G() {
  var e;
  b = null !== (e = T.default.getIdleSince()) && void 0 !== e ? e : 0, R = T.default.isAFK(), k ? (O = P, F()) : O = N ? D.StatusTypes.INVISIBLE : g.StatusSetting.getSetting(), O === D.StatusTypes.ONLINE && b > 0 && (O = D.StatusTypes.IDLE);
  let t = !1,
    n = k || O === D.StatusTypes.INVISIBLE ? [] : S.default.getActivities().filter(U);
  !a(V, n) && (V = n, t = !0);
  let s = A.default.getRemoteActivities();
  if (M !== s && (M = s, t = !0), t) {
    let e = V.find(e => e.type === D.ActivityTypes.CUSTOM_STATUS),
      t = V.filter(e => e.type !== D.ActivityTypes.CUSTOM_STATUS);
    w = t.length > 0 ? V : null != e ? [e, ...d(M).filter(e => e.type !== D.ActivityTypes.CUSTOM_STATUS).uniqBy(e => "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name)).value()] : d.uniqBy(M, e => "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name))
  }
}

function F() {
  s = void 0, i = void 0
}

function H() {
  k = !1, P = D.StatusTypes.UNKNOWN, G(), I.default.setCurrentUserOnConnectionOpen(O, w)
}
class B extends u.default.Store {
  initialize() {
    this.waitFor(T.default, m.default, S.default, A.default, C.default, y.default), this.syncWith([S.default], G)
  }
  getLocalPresence() {
    return {
      status: O,
      since: b,
      activities: V,
      afk: R,
      broadcast: i
    }
  }
  getStatus() {
    return O
  }
  getActivities() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return e ? w : V
  }
  getPrimaryActivity() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return e ? w[0] : V[0]
  }
  getApplicationActivity(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return this.findActivity(t => t.application_id === e, t)
  }
  findActivity(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return this.getActivities(t).find(e)
  }
  getBroadcast() {
    return s
  }
}
B.displayName = "SelfPresenceStore";
var x = new B(l.default, {
  START_SESSION: G,
  CONNECTION_OPEN: function() {
    H(), .001 > Math.random() && v.default.track(D.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
      reason: "status_on_connection",
      rating: O
    })
  },
  CONNECTION_OPEN_SUPPLEMENTAL: H,
  OVERLAY_INITIALIZE: H,
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
  LOGOUT: function() {
    k = !0, P = O, G()
  },
  EMBEDDED_ACTIVITY_CLOSE: G,
  EMBEDDED_ACTIVITY_OPEN: G,
  FORCE_INVISIBLE: function(e) {
    return N = e.invisible, G()
  },
  WINDOW_FOCUS: function() {
    return N = !1, G()
  },
  BROADCAST_START: function(e) {
    s = e.broadcast, i = (0, _.broadcastToServer)(e.broadcast)
  },
  BROADCAST_STOP: F,
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    t instanceof h.ChannelRecordBase && (null == t ? void 0 : t.isBroadcastChannel()) && (null == t ? void 0 : t.ownerId) === p.default.getId() && (s = void 0, i = void 0)
  }
})