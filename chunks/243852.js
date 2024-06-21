n(47120);
var i, s, l, a, r, o = n(442837),
  c = n(433517),
  u = n(846519),
  d = n(570140),
  E = n(278323),
  h = n(581567),
  _ = n(594190),
  I = n(581883),
  m = n(70956),
  g = n(780570),
  p = n(314897),
  N = n(77498),
  T = n(283595),
  C = n(19780),
  S = n(944486),
  A = n(981631);
let f = "ActivityTrackingStore",
  Z = 30 * m.Z.Millis.MINUTE,
  v = 5 * m.Z.Millis.MINUTE,
  L = null !== (i = c.K.get(f)) && void 0 !== i ? i : {},
  O = {},
  R = !1;

function x(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  t && M(e, !0);
  let n = O[e.applicationId];
  null != n && (n.stop(), delete O[e.applicationId]), delete L[e.applicationId], c.K.set(f, L)
}

function M(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = Date.now(),
    i = null != e.updatedAt ? n - e.updatedAt : 0;
  i > Z + v && (i = 0);
  let s = (0, g.OT)(e.applicationId, T.Z),
    l = S.Z.getVoiceChannelId(),
    a = p.default.getSessionId(),
    r = C.Z.getMediaSessionId();
  E.Z.updateActivity({
    applicationId: e.applicationId,
    distributor: e.isDiscordApplication ? A.GQo.DISCORD : e.distributor,
    shareActivity: s,
    token: e.token,
    duration: Math.floor(i / 1e3),
    closed: t,
    exePath: e.exePath,
    voiceChannelId: l,
    sessionId: a,
    mediaSessionId: r
  }), e.updatedAt = n;
  let o = O[e.applicationId];
  null == o && (o = O[e.applicationId] = new u.Xp).start(Z, () => M(e)), !t && (L[e.applicationId] = e, c.K.set(f, L))
}

function P() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
    t = _.ZP.getVisibleRunningGames(),
    n = new Set;
  for (let {
      name: e,
      distributor: i,
      exePath: s
    }
    of t) {
    let t = N.Z.getGameByName(e);
    if (null != t) n.add(t.id), !(t.id in L) && M({
      applicationId: t.id,
      updatedAt: Date.now(),
      distributor: i,
      exePath: (0, h.N6)(null != s ? s : "")
    })
  }
  for (let t of Object.keys(L)) !n.has(t) && x(L[t], e)
}

function D() {
  for (let e of Object.keys(L)) x(L[e]);
  R = !1
}
class b extends(s = o.ZP.Store) {
  initialize() {
    this.waitFor(_.ZP, I.Z, T.Z), this.syncWith([I.Z], P)
  }
  getActivities() {
    return L
  }
}
r = "ActivityTrackingStore", (a = "displayName") in(l = b) ? Object.defineProperty(l, a, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[a] = r, new b(d.Z, {
  RUNNING_GAMES_CHANGE: () => P(),
  CONNECTION_OPEN: function() {
    if (R) return !1;
    for (let e of Object.keys(L)) M(L[e]);
    P(!1), R = !0
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
    } = e, i = L[t];
    if (null == i) return !1;
    i.token = n, c.K.set(f, L)
  },
  ACTIVITY_UPDATE_FAIL: function(e) {
    let {
      applicationId: t
    } = e, n = L[t];
    if (null == n) return !1;
    n.token = null, n.updatedAt = null, c.K.set(f, L)
  }
})