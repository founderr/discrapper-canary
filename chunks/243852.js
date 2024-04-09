"use strict";
n.r(t), n("47120");
var a, s, l, i, r, o = n("442837"),
  u = n("433517"),
  d = n("846519"),
  c = n("570140"),
  f = n("278323"),
  E = n("581567"),
  _ = n("594190"),
  h = n("454175"),
  C = n("619914"),
  m = n("581883"),
  S = n("70956"),
  I = n("780570"),
  T = n("77498"),
  p = n("283595"),
  g = n("981631");
let N = "ActivityTrackingStore",
  A = 30 * S.default.Millis.MINUTE,
  R = 5 * S.default.Millis.MINUTE,
  O = null !== (a = u.Storage.get(N)) && void 0 !== a ? a : {},
  v = {},
  L = !1;

function P(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  t && M(e, !0);
  let n = v[e.applicationId];
  null != n && (n.stop(), delete v[e.applicationId]), delete O[e.applicationId], u.Storage.set(N, O)
}

function M(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = Date.now(),
    a = null != e.updatedAt ? n - e.updatedAt : 0;
  a > A + R && (a = 0);
  let s = (0, I.shouldShareApplicationActivity)(e.applicationId, p.default);
  f.default.updateActivity({
    applicationId: e.applicationId,
    distributor: e.isDiscordApplication ? g.Distributors.DISCORD : e.distributor,
    shareActivity: s,
    token: e.token,
    duration: Math.floor(a / 1e3),
    closed: t,
    exePath: e.exePath
  }), e.updatedAt = n;
  let l = (0, C.isUserRecentGamesExperimentEnabled)({
    location: "28tk0bf_6"
  });
  t && s && l && h.default.updateUserRecentGamesLocal(e.applicationId, Math.floor(a / 1e3));
  let i = v[e.applicationId];
  null == i && (i = v[e.applicationId] = new d.Interval).start(A, () => M(e)), !t && (O[e.applicationId] = e, u.Storage.set(N, O))
}

function y() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
    t = _.default.getVisibleRunningGames(),
    n = new Set;
  for (let {
      name: e,
      distributor: a,
      exePath: s
    }
    of t) {
    let t = T.default.getGameByName(e);
    if (null != t) n.add(t.id), !(t.id in O) && M({
      applicationId: t.id,
      updatedAt: Date.now(),
      distributor: a,
      exePath: (0, E.removeExecutablePathPrefix)(null != s ? s : "")
    })
  }
  for (let t of Object.keys(O)) !n.has(t) && P(O[t], e)
}

function D() {
  for (let e of Object.keys(O)) P(O[e]);
  L = !1
}
class x extends(s = o.default.Store) {
  initialize() {
    this.waitFor(_.default, m.default, p.default), this.syncWith([m.default], y)
  }
  getActivities() {
    return O
  }
}
r = "ActivityTrackingStore", (i = "displayName") in(l = x) ? Object.defineProperty(l, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[i] = r, new x(c.default, {
  RUNNING_GAMES_CHANGE: () => y(),
  CONNECTION_OPEN: function() {
    if (L) return !1;
    for (let e of Object.keys(O)) M(O[e]);
    y(!1), L = !0
  },
  CONNECTION_CLOSED: function(e) {
    let {
      code: t
    } = e;
    4004 === t && D()
  },
  LOGOUT: D,
  ACTIVITY_UPDATE_SUCCESS: function(e) {
    let {
      applicationId: t,
      token: n
    } = e, a = O[t];
    if (null == a) return !1;
    a.token = n, u.Storage.set(N, O)
  },
  ACTIVITY_UPDATE_FAIL: function(e) {
    let {
      applicationId: t
    } = e, n = O[t];
    if (null == n) return !1;
    n.token = null, n.updatedAt = null, u.Storage.set(N, O)
  }
})