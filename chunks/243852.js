"use strict";
n.r(t), n("47120");
var a, s, l, i, r, o = n("442837"),
  u = n("433517"),
  d = n("846519"),
  c = n("570140"),
  f = n("278323"),
  E = n("581567"),
  h = n("594190"),
  C = n("581883"),
  _ = n("70956"),
  m = n("780570"),
  S = n("314897"),
  p = n("77498"),
  I = n("283595"),
  g = n("19780"),
  T = n("944486"),
  A = n("981631");
let N = "ActivityTrackingStore",
  v = 30 * _.default.Millis.MINUTE,
  R = 5 * _.default.Millis.MINUTE,
  O = null !== (a = u.Storage.get(N)) && void 0 !== a ? a : {},
  L = {},
  P = !1;

function M(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  t && y(e, !0);
  let n = L[e.applicationId];
  null != n && (n.stop(), delete L[e.applicationId]), delete O[e.applicationId], u.Storage.set(N, O)
}

function y(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = Date.now(),
    a = null != e.updatedAt ? n - e.updatedAt : 0;
  a > v + R && (a = 0);
  let s = (0, m.shouldShareApplicationActivity)(e.applicationId, I.default),
    l = T.default.getVoiceChannelId(),
    i = S.default.getSessionId(),
    r = g.default.getMediaSessionId();
  f.default.updateActivity({
    applicationId: e.applicationId,
    distributor: e.isDiscordApplication ? A.Distributors.DISCORD : e.distributor,
    shareActivity: s,
    token: e.token,
    duration: Math.floor(a / 1e3),
    closed: t,
    exePath: e.exePath,
    voiceChannelId: l,
    sessionId: i,
    mediaSessionId: r
  }), e.updatedAt = n;
  let o = L[e.applicationId];
  null == o && (o = L[e.applicationId] = new d.Interval).start(v, () => y(e)), !t && (O[e.applicationId] = e, u.Storage.set(N, O))
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
    if (null != t) n.add(t.id), !(t.id in O) && y({
      applicationId: t.id,
      updatedAt: Date.now(),
      distributor: a,
      exePath: (0, E.removeExecutablePathPrefix)(null != s ? s : "")
    })
  }
  for (let t of Object.keys(O)) !n.has(t) && M(O[t], e)
}

function x() {
  for (let e of Object.keys(O)) M(O[e]);
  P = !1
}
class b extends(s = o.default.Store) {
  initialize() {
    this.waitFor(h.default, C.default, I.default), this.syncWith([C.default], D)
  }
  getActivities() {
    return O
  }
}
r = "ActivityTrackingStore", (i = "displayName") in(l = b) ? Object.defineProperty(l, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[i] = r, new b(c.default, {
  RUNNING_GAMES_CHANGE: () => D(),
  CONNECTION_OPEN: function() {
    if (P) return !1;
    for (let e of Object.keys(O)) y(O[e]);
    D(!1), P = !0
  },
  CONNECTION_CLOSED: function(e) {
    let {
      code: t
    } = e;
    4004 === t && x()
  },
  LOGOUT: x,
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