"use strict";
s.r(t);
var a, r, i, n, l = s("442837"),
  o = s("570140"),
  u = s("656063"),
  d = s("158776"),
  c = s("800599"),
  _ = s("594174"),
  E = s("981631");
let T = !1,
  I = {},
  R = {};

function f(e) {
  let t = !1;
  return e.forEach(e => {
    t = !1 !== m(e) || t
  }), t
}

function S(e) {
  let t = R[e];
  if (null == t) return !1;
  let s = t.gameId;
  return null != I[s] && (I = {
    ...I
  }, delete I[s][e], 0 === Object.values(I[s]).length && delete I[s]), R = {
    ...R
  }, delete R[e], !0
}

function m(e) {
  let {
    user: t,
    activities: s
  } = e;
  if (null == t) return !1;
  let a = s.filter(e => e.type !== E.ActivityTypes.CUSTOM_STATUS);
  if (0 === a.length) return S(t.id);
  let r = !1;
  return a.forEach(e => {
    (function(e, t) {
      var s, a, r, i;
      let n = (0, u.default)(e);
      if (null == n) return S(t.id);
      let l = R[t.id];
      null != l && l.gameId !== n && S(t.id);
      let o = null !== (a = null === (s = e.timestamps) || void 0 === s ? void 0 : s.start) && void 0 !== a ? a : Date.now(),
        d = {
          userId: t.id,
          activity: e,
          startedPlaying: o
        };
      return r = n, i = d, I = {
        ...I,
        [r]: {
          ...I[r],
          [i.userId]: i
        }
      }, R = {
        ...R,
        [i.userId]: {
          gameId: r,
          startedPlaying: i.startedPlaying
        }
      }, !0
    })(e, t) && (r = !0)
  }), r
}

function A() {
  let e = !1;
  if (!c.default.needsRefresh() && !T) {
    let t;
    I = {}, R = {}, t = !1, d.default.getUserIds().forEach(e => {
      let s = _.default.getUser(e);
      null != s && (t = m({
        user: s,
        activities: d.default.getActivities(e)
      }) || t)
    }), e = t
  }
  return T = !c.default.needsRefresh(), e
}
class N extends(n = l.default.Store) {
  initialize() {
    this.waitFor(c.default), this.syncWith([c.default], A)
  }
  get games() {
    return I
  }
  get usersPlaying() {
    return R
  }
  get gameIds() {
    return Object.keys(I)
  }
  getNowPlaying(e) {
    return I[e]
  }
  getUserGame(e) {
    return R[e]
  }
}
i = "NowPlayingStore", (r = "displayName") in(a = N) ? Object.defineProperty(a, r, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[r] = i, t.default = new N(o.default, {
  CONNECTION_OPEN: function() {
    I = {}, R = {}
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t,
      presences: s
    } = e, a = !1;
    return t.forEach(e => {
      f(e.presences) && (a = !0)
    }), f(s) && (a = !0), a
  },
  LOGOUT: function() {
    I = {}, R = {}
  },
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.map(e => m(e)).some(e => e)
  },
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e;
    return f(t)
  }
})