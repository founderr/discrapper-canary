n(47120);
var s, i, l, a, r, o = n(442837),
  c = n(433517),
  u = n(846519),
  d = n(570140),
  E = n(278323),
  h = n(581567),
  _ = n(594190),
  I = n(581883),
  m = n(70956),
  T = n(780570),
  g = n(314897),
  p = n(77498),
  N = n(283595),
  S = n(19780),
  C = n(944486),
  A = n(981631);
let f = "ActivityTrackingStore",
  Z = 30 * m.Z.Millis.MINUTE,
  L = 5 * m.Z.Millis.MINUTE,
  O = null !== (s = c.K.get(f)) && void 0 !== s ? s : {},
  v = {},
  R = !1;

function P(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  t && x(e, !0);
  let n = v[e.applicationId];
  null != n && (n.stop(), delete v[e.applicationId]), delete O[e.applicationId], c.K.set(f, O)
}

function x(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = Date.now(),
    s = null != e.updatedAt ? n - e.updatedAt : 0;
  s > Z + L && (s = 0);
  let i = (0, T.OT)(e.applicationId, N.Z),
    l = C.Z.getVoiceChannelId(),
    a = g.default.getSessionId(),
    r = S.Z.getMediaSessionId();
  E.Z.updateActivity({
    applicationId: e.applicationId,
    distributor: e.isDiscordApplication ? A.GQo.DISCORD : e.distributor,
    shareActivity: i,
    token: e.token,
    duration: Math.floor(s / 1e3),
    closed: t,
    exePath: e.exePath,
    voiceChannelId: l,
    sessionId: a,
    mediaSessionId: r
  }), e.updatedAt = n;
  let o = v[e.applicationId];
  null == o && (o = v[e.applicationId] = new u.Xp).start(Z, () => x(e)), !t && (O[e.applicationId] = e, c.K.set(f, O))
}

function M() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
    t = _.ZP.getVisibleRunningGames(),
    n = new Set;
  for (let {
      name: e,
      distributor: s,
      exePath: i
    }
    of t) {
    let t = p.Z.getGameByName(e);
    if (null != t) n.add(t.id), !(t.id in O) && x({
      applicationId: t.id,
      updatedAt: Date.now(),
      distributor: s,
      exePath: (0, h.N6)(null != i ? i : "")
    })
  }
  for (let t of Object.keys(O)) !n.has(t) && P(O[t], e)
}

function D() {
  for (let e of Object.keys(O)) P(O[e]);
  R = !1
}
class b extends(i = o.ZP.Store) {
  initialize() {
    this.waitFor(_.ZP, I.Z, N.Z), this.syncWith([I.Z], M)
  }
  getActivities() {
    return O
  }
}
r = "ActivityTrackingStore", (a = "displayName") in(l = b) ? Object.defineProperty(l, a, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[a] = r, new b(d.Z, {
  RUNNING_GAMES_CHANGE: () => M(),
  CONNECTION_OPEN: function() {
    if (R) return !1;
    for (let e of Object.keys(O)) x(O[e]);
    M(!1), R = !0
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
    } = e, s = O[t];
    if (null == s) return !1;
    s.token = n, c.K.set(f, O)
  },
  ACTIVITY_UPDATE_FAIL: function(e) {
    let {
      applicationId: t
    } = e, n = O[t];
    if (null == n) return !1;
    n.token = null, n.updatedAt = null, c.K.set(f, O)
  }
})