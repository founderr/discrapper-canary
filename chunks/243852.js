"use strict";
n.r(t), n("47120");
var a, s, l, i, r, o = n("442837"),
  u = n("433517"),
  d = n("846519"),
  c = n("570140"),
  f = n("278323"),
  E = n("581567"),
  h = n("594190"),
  _ = n("454175"),
  C = n("581883"),
  m = n("70956"),
  S = n("780570"),
  I = n("77498"),
  p = n("283595"),
  T = n("981631");
let g = "ActivityTrackingStore",
  A = 30 * m.default.Millis.MINUTE,
  N = 5 * m.default.Millis.MINUTE,
  R = null !== (a = u.Storage.get(g)) && void 0 !== a ? a : {},
  O = {},
  v = !1;

function L(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  t && P(e, !0);
  let n = O[e.applicationId];
  null != n && (n.stop(), delete O[e.applicationId]), delete R[e.applicationId], u.Storage.set(g, R)
}

function P(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = Date.now(),
    a = null != e.updatedAt ? n - e.updatedAt : 0;
  a > A + N && (a = 0), f.default.updateActivity({
    applicationId: e.applicationId,
    distributor: e.isDiscordApplication ? T.Distributors.DISCORD : e.distributor,
    shareActivity: (0, S.shouldShareApplicationActivity)(e.applicationId, p.default),
    token: e.token,
    duration: Math.floor(a / 1e3),
    closed: t,
    exePath: e.exePath
  }), e.updatedAt = n, t && _.default.updateUserRecentGamesLocal(e.applicationId, Math.floor(a / 1e3));
  let s = O[e.applicationId];
  null == s && (s = O[e.applicationId] = new d.Interval).start(A, () => P(e)), !t && (R[e.applicationId] = e, u.Storage.set(g, R))
}

function M() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
    t = h.default.getVisibleRunningGames(),
    n = new Set;
  for (let {
      name: e,
      distributor: a,
      exePath: s
    }
    of t) {
    let t = I.default.getGameByName(e);
    if (null != t) n.add(t.id), !(t.id in R) && P({
      applicationId: t.id,
      updatedAt: Date.now(),
      distributor: a,
      exePath: (0, E.removeExecutablePathPrefix)(null != s ? s : "")
    })
  }
  for (let t of Object.keys(R)) !n.has(t) && L(R[t], e)
}

function y() {
  for (let e of Object.keys(R)) L(R[e]);
  v = !1
}
class D extends(s = o.default.Store) {
  initialize() {
    this.waitFor(h.default, C.default, p.default), this.syncWith([C.default], M)
  }
  getActivities() {
    return R
  }
}
r = "ActivityTrackingStore", (i = "displayName") in(l = D) ? Object.defineProperty(l, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[i] = r, new D(c.default, {
  RUNNING_GAMES_CHANGE: () => M(),
  CONNECTION_OPEN: function() {
    if (v) return !1;
    for (let e of Object.keys(R)) P(R[e]);
    M(!1), v = !0
  },
  CONNECTION_CLOSED: function(e) {
    let {
      code: t
    } = e;
    4004 === t && y()
  },
  LOGOUT: y,
  ACTIVITY_UPDATE_SUCCESS: function(e) {
    let {
      applicationId: t,
      token: n
    } = e, a = R[t];
    if (null == a) return !1;
    a.token = n, u.Storage.set(g, R)
  },
  ACTIVITY_UPDATE_FAIL: function(e) {
    let {
      applicationId: t
    } = e, n = R[t];
    if (null == n) return !1;
    n.token = null, n.updatedAt = null, u.Storage.set(g, R)
  }
})