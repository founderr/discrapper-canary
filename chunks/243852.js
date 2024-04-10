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
  C = n("619914"),
  m = n("581883"),
  S = n("70956"),
  I = n("780570"),
  p = n("77498"),
  T = n("283595"),
  g = n("19780"),
  N = n("944486"),
  A = n("981631");
let v = "ActivityTrackingStore",
  O = 30 * S.default.Millis.MINUTE,
  R = 5 * S.default.Millis.MINUTE,
  L = null !== (a = u.Storage.get(v)) && void 0 !== a ? a : {},
  M = {},
  P = !1;

function y(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  t && x(e, !0);
  let n = M[e.applicationId];
  null != n && (n.stop(), delete M[e.applicationId]), delete L[e.applicationId], u.Storage.set(v, L)
}

function x(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = Date.now(),
    a = null != e.updatedAt ? n - e.updatedAt : 0;
  a > O + R && (a = 0);
  let s = (0, I.shouldShareApplicationActivity)(e.applicationId, T.default),
    l = N.default.getVoiceChannelId(),
    i = g.default.getMediaSessionId();
  f.default.updateActivity({
    applicationId: e.applicationId,
    distributor: e.isDiscordApplication ? A.Distributors.DISCORD : e.distributor,
    shareActivity: s,
    token: e.token,
    duration: Math.floor(a / 1e3),
    closed: t,
    exePath: e.exePath,
    voiceChannelId: l,
    mediaSessionId: i
  }), e.updatedAt = n;
  let r = (0, C.isUserRecentGamesExperimentEnabled)({
    location: "28tk0bf_6"
  });
  t && s && r && _.default.updateUserRecentGamesLocal(e.applicationId, Math.floor(a / 1e3));
  let o = M[e.applicationId];
  null == o && (o = M[e.applicationId] = new d.Interval).start(O, () => x(e)), !t && (L[e.applicationId] = e, u.Storage.set(v, L))
}

function D() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
    t = h.default.getVisibleRunningGames(),
    n = new Set;
  for (let {
      name: e,
      distributor: a,
      exePath: s
    }
    of t) {
    let t = p.default.getGameByName(e);
    if (null != t) n.add(t.id), !(t.id in L) && x({
      applicationId: t.id,
      updatedAt: Date.now(),
      distributor: a,
      exePath: (0, E.removeExecutablePathPrefix)(null != s ? s : "")
    })
  }
  for (let t of Object.keys(L)) !n.has(t) && y(L[t], e)
}

function b() {
  for (let e of Object.keys(L)) y(L[e]);
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
    for (let e of Object.keys(L)) x(L[e]);
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
      token: n
    } = e, a = L[t];
    if (null == a) return !1;
    a.token = n, u.Storage.set(v, L)
  },
  ACTIVITY_UPDATE_FAIL: function(e) {
    let {
      applicationId: t
    } = e, n = L[t];
    if (null == n) return !1;
    n.token = null, n.updatedAt = null, u.Storage.set(v, L)
  }
})