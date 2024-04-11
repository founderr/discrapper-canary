"use strict";
s.r(t);
var a, i, r, l, n = s("442837"),
  o = s("570140"),
  u = s("656063"),
  d = s("158776"),
  c = s("800599"),
  _ = s("594174"),
  E = s("981631");
let C = !1,
  f = {},
  T = {};

function I(e) {
  let t = !1;
  return e.forEach(e => {
    t = !1 !== S(e) || t
  }), t
}

function R(e) {
  let t = T[e];
  if (null == t) return !1;
  let s = t.gameId;
  return null != f[s] && (f = {
    ...f
  }, delete f[s][e], 0 === Object.values(f[s]).length && delete f[s]), T = {
    ...T
  }, delete T[e], !0
}

function S(e) {
  let {
    user: t,
    activities: s
  } = e;
  if (null == t) return !1;
  let a = s.filter(e => e.type !== E.ActivityTypes.CUSTOM_STATUS);
  if (0 === a.length) return R(t.id);
  let i = !1;
  return a.forEach(e => {
    (function(e, t) {
      var s, a, i, r;
      let l = (0, u.default)(e);
      if (null == l) return R(t.id);
      let n = T[t.id];
      null != n && n.gameId !== l && R(t.id);
      let o = null !== (a = null === (s = e.timestamps) || void 0 === s ? void 0 : s.start) && void 0 !== a ? a : Date.now(),
        d = {
          userId: t.id,
          activity: e,
          startedPlaying: o
        };
      return i = l, r = d, f = {
        ...f,
        [i]: {
          ...f[i],
          [r.userId]: r
        }
      }, T = {
        ...T,
        [r.userId]: {
          gameId: i,
          startedPlaying: r.startedPlaying
        }
      }, !0
    })(e, t) && (i = !0)
  }), i
}

function p() {
  let e = !1;
  if (!c.default.needsRefresh() && !C) {
    let t;
    f = {}, T = {}, t = !1, d.default.getUserIds().forEach(e => {
      let s = _.default.getUser(e);
      null != s && (t = S({
        user: s,
        activities: d.default.getActivities(e)
      }) || t)
    }), e = t
  }
  return C = !c.default.needsRefresh(), e
}
class m extends(l = n.default.Store) {
  initialize() {
    this.waitFor(c.default), this.syncWith([c.default], p)
  }
  get games() {
    return f
  }
  get usersPlaying() {
    return T
  }
  get gameIds() {
    return Object.keys(f)
  }
  getNowPlaying(e) {
    return f[e]
  }
  getUserGame(e) {
    return T[e]
  }
}
r = "NowPlayingStore", (i = "displayName") in(a = m) ? Object.defineProperty(a, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[i] = r, t.default = new m(o.default, {
  CONNECTION_OPEN: function() {
    f = {}, T = {}
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t,
      presences: s
    } = e, a = !1;
    return t.forEach(e => {
      I(e.presences) && (a = !0)
    }), I(s) && (a = !0), a
  },
  LOGOUT: function() {
    f = {}, T = {}
  },
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.map(e => S(e)).some(e => e)
  },
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e;
    return I(t)
  }
})