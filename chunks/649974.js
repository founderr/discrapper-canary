var s, i, l, a, r = n(442837),
  o = n(570140),
  c = n(656063),
  u = n(814443),
  d = n(158776),
  E = n(594174),
  h = n(981631);
let _ = !1,
  I = {},
  m = {};

function T(e) {
  let t = !1;
  return e.forEach(e => {
    t = !1 !== p(e) || t
  }), t
}

function g(e) {
  let t = m[e];
  if (null == t) return !1;
  let n = t.gameId;
  return null != I[n] && (I = {
    ...I
  }, delete I[n][e], 0 === Object.values(I[n]).length && delete I[n]), m = {
    ...m
  }, delete m[e], !0
}

function p(e) {
  let {
    user: t,
    activities: n
  } = e;
  if (null == t) return !1;
  let s = n.filter(e => e.type !== h.IIU.CUSTOM_STATUS);
  if (0 === s.length) return g(t.id);
  let i = !1;
  return s.forEach(e => {
    (function(e, t) {
      var n, s, i, l;
      let a = (0, c.Z)(e);
      if (null == a) return g(t.id);
      let r = m[t.id];
      null != r && r.gameId !== a && g(t.id);
      let o = null !== (s = null === (n = e.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== s ? s : Date.now(),
        u = {
          userId: t.id,
          activity: e,
          startedPlaying: o
        };
      return i = a, l = u, I = {
        ...I,
        [i]: {
          ...I[i],
          [l.userId]: l
        }
      }, m = {
        ...m,
        [l.userId]: {
          gameId: i,
          startedPlaying: l.startedPlaying
        }
      }, !0
    })(e, t) && (i = !0)
  }), i
}

function N() {
  let e = !1;
  if (!u.Z.needsRefresh() && !_) {
    let t;
    I = {}, m = {}, t = !1, d.Z.getUserIds().forEach(e => {
      let n = E.default.getUser(e);
      null != n && (t = p({
        user: n,
        activities: d.Z.getActivities(e)
      }) || t)
    }), e = t
  }
  return _ = !u.Z.needsRefresh(), e
}
class S extends(a = r.ZP.Store) {
  initialize() {
    this.waitFor(u.Z), this.syncWith([u.Z], N)
  }
  get games() {
    return I
  }
  get usersPlaying() {
    return m
  }
  get gameIds() {
    return Object.keys(I)
  }
  getNowPlaying(e) {
    return I[e]
  }
  getUserGame(e) {
    return m[e]
  }
}
l = "NowPlayingStore", (i = "displayName") in(s = S) ? Object.defineProperty(s, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = l, t.Z = new S(o.Z, {
  CONNECTION_OPEN: function() {
    I = {}, m = {}
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t,
      presences: n
    } = e, s = !1;
    return t.forEach(e => {
      T(e.presences) && (s = !0)
    }), T(n) && (s = !0), s
  },
  LOGOUT: function() {
    I = {}, m = {}
  },
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.map(e => p(e)).some(e => e)
  },
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e;
    return T(t)
  }
})