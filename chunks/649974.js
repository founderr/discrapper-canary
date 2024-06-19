var n, r, i, a, l = t(442837),
  o = t(570140),
  c = t(656063),
  u = t(814443),
  I = t(158776),
  T = t(594174),
  d = t(981631);
let _ = !1,
  E = {},
  S = {};

function O(e) {
  let s = !1;
  return e.forEach(e => {
    s = !1 !== N(e) || s
  }), s
}

function A(e) {
  let s = S[e];
  if (null == s) return !1;
  let t = s.gameId;
  return null != E[t] && (E = {
    ...E
  }, delete E[t][e], 0 === Object.values(E[t]).length && delete E[t]), S = {
    ...S
  }, delete S[e], !0
}

function N(e) {
  let {
    user: s,
    activities: t
  } = e;
  if (null == s) return !1;
  let n = t.filter(e => e.type !== d.IIU.CUSTOM_STATUS);
  if (0 === n.length) return A(s.id);
  let r = !1;
  return n.forEach(e => {
    (function(e, s) {
      var t, n, r, i;
      let a = (0, c.Z)(e);
      if (null == a) return A(s.id);
      let l = S[s.id];
      null != l && l.gameId !== a && A(s.id);
      let o = null !== (n = null === (t = e.timestamps) || void 0 === t ? void 0 : t.start) && void 0 !== n ? n : Date.now(),
        u = {
          userId: s.id,
          activity: e,
          startedPlaying: o
        };
      return r = a, i = u, E = {
        ...E,
        [r]: {
          ...E[r],
          [i.userId]: i
        }
      }, S = {
        ...S,
        [i.userId]: {
          gameId: r,
          startedPlaying: i.startedPlaying
        }
      }, !0
    })(e, s) && (r = !0)
  }), r
}

function R() {
  let e = !1;
  if (!u.Z.needsRefresh() && !_) {
    let s;
    E = {}, S = {}, s = !1, I.Z.getUserIds().forEach(e => {
      let t = T.default.getUser(e);
      null != t && (s = N({
        user: t,
        activities: I.Z.getActivities(e)
      }) || s)
    }), e = s
  }
  return _ = !u.Z.needsRefresh(), e
}
class h extends(a = l.ZP.Store) {
  initialize() {
    this.waitFor(u.Z), this.syncWith([u.Z], R)
  }
  get games() {
    return E
  }
  get usersPlaying() {
    return S
  }
  get gameIds() {
    return Object.keys(E)
  }
  getNowPlaying(e) {
    return E[e]
  }
  getUserGame(e) {
    return S[e]
  }
}
i = "NowPlayingStore", (r = "displayName") in(n = h) ? Object.defineProperty(n, r, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[r] = i, s.Z = new h(o.Z, {
  CONNECTION_OPEN: function() {
    E = {}, S = {}
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: s,
      presences: t
    } = e, n = !1;
    return s.forEach(e => {
      O(e.presences) && (n = !0)
    }), O(t) && (n = !0), n
  },
  LOGOUT: function() {
    E = {}, S = {}
  },
  PRESENCE_UPDATES: function(e) {
    let {
      updates: s
    } = e;
    return s.map(e => N(e)).some(e => e)
  },
  PRESENCES_REPLACE: function(e) {
    let {
      presences: s
    } = e;
    return O(s)
  }
})