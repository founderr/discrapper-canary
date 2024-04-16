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
  I = a("77498"),
  T = a("283595"),
  g = a("19780"),
  A = a("944486"),
  N = a("981631");
let v = "ActivityTrackingStore",
  R = 30 * S.default.Millis.MINUTE,
  O = 5 * S.default.Millis.MINUTE,
  L = null !== (n = u.Storage.get(v)) && void 0 !== n ? n : {},
  M = {},
  P = !1;

function x(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  t && y(e, !0);
  let a = M[e.applicationId];
  null != a && (a.stop(), delete M[e.applicationId]), delete L[e.applicationId], u.Storage.set(v, L)
}

function y(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    a = Date.now(),
    n = null != e.updatedAt ? a - e.updatedAt : 0;
  n > R + O && (n = 0);
  let s = (0, p.shouldShareApplicationActivity)(e.applicationId, T.default),
    l = A.default.getVoiceChannelId(),
    i = g.default.getMediaSessionId();
  f.default.updateActivity({
    applicationId: e.applicationId,
    distributor: e.isDiscordApplication ? N.Distributors.DISCORD : e.distributor,
    shareActivity: s,
    token: e.token,
    duration: Math.floor(n / 1e3),
    closed: t,
    exePath: e.exePath,
    voiceChannelId: l,
    mediaSessionId: i
  }), e.updatedAt = a;
  let r = (0, C.isUserRecentGamesExperimentEnabled)({
    location: "28tk0bf_6"
  });
  t && s && r && _.default.updateUserRecentGamesLocal(e.applicationId, Math.floor(n / 1e3));
  let o = M[e.applicationId];
  null == o && (o = M[e.applicationId] = new d.Interval).start(R, () => y(e)), !t && (L[e.applicationId] = e, u.Storage.set(v, L))
}

function D() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
    t = h.default.getVisibleRunningGames(),
    a = new Set;
  for (let {
      name: e,
      distributor: n,
      exePath: s
    }
    of t) {
    let t = I.default.getGameByName(e);
    if (null != t) a.add(t.id), !(t.id in L) && y({
      applicationId: t.id,
      updatedAt: Date.now(),
      distributor: n,
      exePath: (0, E.removeExecutablePathPrefix)(null != s ? s : "")
    })
  }
  for (let t of Object.keys(L)) !a.has(t) && x(L[t], e)
}

function b() {
  for (let e of Object.keys(L)) x(L[e]);
  P = !1
}
class U extends(s = o.default.Store) {
  initialize() {
    this.waitFor(h.default, m.default, T.default), this.syncWith([m.default], D)
  }
  getActivities() {
    return L
  }
}
r = "ActivityTrackingStore", (i = "displayName") in(l = U) ? Object.defineProperty(l, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[i] = r, new U(c.default, {
  RUNNING_GAMES_CHANGE: () => D(),
  CONNECTION_OPEN: function() {
    if (P) return !1;
    for (let e of Object.keys(L)) y(L[e]);
    D(!1), P = !0
  },
  CONNECTION_CLOSED: function(e) {
    let {
      code: t
    } = e;
    4004 === t && b()
  },
  LOGOUT: b,
  ACTIVITY_UPDATE_SUCCESS: function(e) {
    let {
      applicationId: t,
      token: a
    } = e, n = L[t];
    if (null == n) return !1;
    n.token = a, u.Storage.set(v, L)
  },
  ACTIVITY_UPDATE_FAIL: function(e) {
    let {
      applicationId: t
    } = e, a = L[t];
    if (null == a) return !1;
    a.token = null, a.updatedAt = null, u.Storage.set(v, L)
  }
})