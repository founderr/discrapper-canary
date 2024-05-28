"use strict";
s.r(t);
var n, a, r, l, i = s("442837"),
  u = s("570140"),
  o = s("656063"),
  d = s("158776"),
  c = s("800599"),
  I = s("594174"),
  T = s("981631");
let E = !1,
  f = {},
  _ = {};

function S(e) {
  let t = !1;
  return e.forEach(e => {
    t = !1 !== R(e) || t
  }), t
}

function A(e) {
  let t = _[e];
  if (null == t) return !1;
  let s = t.gameId;
  return null != f[s] && (f = {
    ...f
  }, delete f[s][e], 0 === Object.values(f[s]).length && delete f[s]), _ = {
    ..._
  }, delete _[e], !0
}

function R(e) {
  let {
    user: t,
    activities: s
  } = e;
  if (null == t) return !1;
  let n = s.filter(e => e.type !== T.ActivityTypes.CUSTOM_STATUS);
  if (0 === n.length) return A(t.id);
  let a = !1;
  return n.forEach(e => {
    (function(e, t) {
      var s, n, a, r;
      let l = (0, o.default)(e);
      if (null == l) return A(t.id);
      let i = _[t.id];
      null != i && i.gameId !== l && A(t.id);
      let u = null !== (n = null === (s = e.timestamps) || void 0 === s ? void 0 : s.start) && void 0 !== n ? n : Date.now(),
        d = {
          userId: t.id,
          activity: e,
          startedPlaying: u
        };
      return a = l, r = d, f = {
        ...f,
        [a]: {
          ...f[a],
          [r.userId]: r
        }
      }, _ = {
        ..._,
        [r.userId]: {
          gameId: a,
          startedPlaying: r.startedPlaying
        }
      }, !0
    })(e, t) && (a = !0)
  }), a
}

function O() {
  let e = !1;
  if (!c.default.needsRefresh() && !E) {
    let t;
    f = {}, _ = {}, t = !1, d.default.getUserIds().forEach(e => {
      let s = I.default.getUser(e);
      null != s && (t = R({
        user: s,
        activities: d.default.getActivities(e)
      }) || t)
    }), e = t
  }
  return E = !c.default.needsRefresh(), e
}
class h extends(l = i.default.Store) {
  initialize() {
    this.waitFor(c.default), this.syncWith([c.default], O)
  }
  get games() {
    return f
  }
  get usersPlaying() {
    return _
  }
  get gameIds() {
    return Object.keys(f)
  }
  getNowPlaying(e) {
    return f[e]
  }
  getUserGame(e) {
    return _[e]
  }
}
r = "NowPlayingStore", (a = "displayName") in(n = h) ? Object.defineProperty(n, a, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[a] = r, t.default = new h(u.default, {
  CONNECTION_OPEN: function() {
    f = {}, _ = {}
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t,
      presences: s
    } = e, n = !1;
    return t.forEach(e => {
      S(e.presences) && (n = !0)
    }), S(s) && (n = !0), n
  },
  LOGOUT: function() {
    f = {}, _ = {}
  },
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.map(e => R(e)).some(e => e)
  },
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e;
    return S(t)
  }
})