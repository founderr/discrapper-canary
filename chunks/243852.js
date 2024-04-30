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
  p = a("780570"),
  I = a("314897"),
  T = a("77498"),
  g = a("283595"),
  A = a("19780"),
  N = a("944486"),
  v = a("981631");
let L = "ActivityTrackingStore",
  R = 30 * S.default.Millis.MINUTE,
  O = 5 * S.default.Millis.MINUTE,
  M = null !== (n = u.Storage.get(L)) && void 0 !== n ? n : {},
  P = {},
  y = !1;

function x(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  t && D(e, !0);
  let a = P[e.applicationId];
  null != a && (a.stop(), delete P[e.applicationId]), delete M[e.applicationId], u.Storage.set(L, M)
}

function D(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    a = Date.now(),
    n = null != e.updatedAt ? a - e.updatedAt : 0;
  n > R + O && (n = 0);
  let s = (0, p.shouldShareApplicationActivity)(e.applicationId, g.default),
    l = N.default.getVoiceChannelId(),
    i = I.default.getSessionId(),
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
  let c = P[e.applicationId];
  null == c && (c = P[e.applicationId] = new d.Interval).start(R, () => D(e)), !t && (M[e.applicationId] = e, u.Storage.set(L, M))
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
    if (null != t) a.add(t.id), !(t.id in M) && D({
      applicationId: t.id,
      updatedAt: Date.now(),
      distributor: n,
      exePath: (0, E.removeExecutablePathPrefix)(null != s ? s : "")
    })
  }
  for (let t of Object.keys(M)) !a.has(t) && x(M[t], e)
}

function U() {
  for (let e of Object.keys(M)) x(M[e]);
  y = !1
}
class j extends(s = o.default.Store) {
  initialize() {
    this.waitFor(h.default, m.default, g.default), this.syncWith([m.default], b)
  }
  getActivities() {
    return M
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
    if (y) return !1;
    for (let e of Object.keys(M)) D(M[e]);
    b(!1), y = !0
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
    } = e, n = M[t];
    if (null == n) return !1;
    n.token = a, u.Storage.set(L, M)
  },
  ACTIVITY_UPDATE_FAIL: function(e) {
    let {
      applicationId: t
    } = e, a = M[t];
    if (null == a) return !1;
    a.token = null, a.updatedAt = null, u.Storage.set(L, M)
  }
})