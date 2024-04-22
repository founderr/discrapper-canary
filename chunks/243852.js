"use strict";
a.r(t), a("47120");
var n, s, l, i, r, o = a("442837"),
  u = a("433517"),
  d = a("846519"),
  c = a("570140"),
  f = a("278323"),
  E = a("581567"),
  h = a("594190"),
  _ = a("454175"),
  C = a("619914"),
  m = a("581883"),
  S = a("70956"),
  I = a("780570"),
  p = a("314897"),
  T = a("77498"),
  g = a("283595"),
  A = a("19780"),
  N = a("944486"),
  v = a("981631");
let R = "ActivityTrackingStore",
  O = 30 * S.default.Millis.MINUTE,
  L = 5 * S.default.Millis.MINUTE,
  P = null !== (n = u.Storage.get(R)) && void 0 !== n ? n : {},
  M = {},
  x = !1;

function y(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  t && D(e, !0);
  let a = M[e.applicationId];
  null != a && (a.stop(), delete M[e.applicationId]), delete P[e.applicationId], u.Storage.set(R, P)
}

function D(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    a = Date.now(),
    n = null != e.updatedAt ? a - e.updatedAt : 0;
  n > O + L && (n = 0);
  let s = (0, I.shouldShareApplicationActivity)(e.applicationId, g.default),
    l = N.default.getVoiceChannelId(),
    i = p.default.getSessionId(),
    r = A.default.getMediaSessionId();
  f.default.updateActivity({
    applicationId: e.applicationId,
    distributor: e.isDiscordApplication ? v.Distributors.DISCORD : e.distributor,
    shareActivity: s,
    token: e.token,
    duration: Math.floor(n / 1e3),
    closed: t,
    exePath: e.exePath,
    voiceChannelId: l,
    sessionId: i,
    mediaSessionId: r
  }), e.updatedAt = a;
  let o = (0, C.isUserRecentGamesExperimentEnabled)({
    location: "28tk0bf_6"
  });
  t && s && o && _.default.updateUserRecentGamesLocal(e.applicationId, Math.floor(n / 1e3));
  let c = M[e.applicationId];
  null == c && (c = M[e.applicationId] = new d.Interval).start(O, () => D(e)), !t && (P[e.applicationId] = e, u.Storage.set(R, P))
}

function b() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
    t = h.default.getVisibleRunningGames(),
    a = new Set;
  for (let {
      name: e,
      distributor: n,
      exePath: s
    }
    of t) {
    let t = T.default.getGameByName(e);
    if (null != t) a.add(t.id), !(t.id in P) && D({
      applicationId: t.id,
      updatedAt: Date.now(),
      distributor: n,
      exePath: (0, E.removeExecutablePathPrefix)(null != s ? s : "")
    })
  }
  for (let t of Object.keys(P)) !a.has(t) && y(P[t], e)
}

function U() {
  for (let e of Object.keys(P)) y(P[e]);
  x = !1
}
class j extends(s = o.default.Store) {
  initialize() {
    this.waitFor(h.default, m.default, g.default), this.syncWith([m.default], b)
  }
  getActivities() {
    return P
  }
}
r = "ActivityTrackingStore", (i = "displayName") in(l = j) ? Object.defineProperty(l, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[i] = r, new j(c.default, {
  RUNNING_GAMES_CHANGE: () => b(),
  CONNECTION_OPEN: function() {
    if (x) return !1;
    for (let e of Object.keys(P)) D(P[e]);
    b(!1), x = !0
  },
  CONNECTION_CLOSED: function(e) {
    let {
      code: t
    } = e;
    4004 === t && U()
  },
  LOGOUT: U,
  ACTIVITY_UPDATE_SUCCESS: function(e) {
    let {
      applicationId: t,
      token: a
    } = e, n = P[t];
    if (null == n) return !1;
    n.token = a, u.Storage.set(R, P)
  },
  ACTIVITY_UPDATE_FAIL: function(e) {
    let {
      applicationId: t
    } = e, a = P[t];
    if (null == a) return !1;
    a.token = null, a.updatedAt = null, u.Storage.set(R, P)
  }
})