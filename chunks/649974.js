"use strict";
n.r(t);
var a, l, s, i, r = n("442837"),
  o = n("570140"),
  u = n("656063"),
  d = n("158776"),
  c = n("800599"),
  f = n("594174"),
  h = n("981631");
let E = !1,
  m = {},
  p = {};

function S(e) {
  let t = !1;
  return e.forEach(e => {
    t = !1 !== _(e) || t
  }), t
}

function g(e) {
  let t = p[e];
  if (null == t) return !1;
  let n = t.gameId;
  return null != m[n] && (m = {
    ...m
  }, delete m[n][e], 0 === Object.values(m[n]).length && delete m[n]), p = {
    ...p
  }, delete p[e], !0
}

function _(e) {
  let {
    user: t,
    activities: n
  } = e;
  if (null == t) return !1;
  let a = n.filter(e => e.type !== h.ActivityTypes.CUSTOM_STATUS);
  if (0 === a.length) return g(t.id);
  let l = !1;
  return a.forEach(e => {
    (function(e, t) {
      var n, a, l, s;
      let i = (0, u.default)(e);
      if (null == i) return g(t.id);
      let r = p[t.id];
      null != r && r.gameId !== i && g(t.id);
      let o = null !== (a = null === (n = e.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== a ? a : Date.now(),
        d = {
          userId: t.id,
          activity: e,
          startedPlaying: o
        };
      return l = i, s = d, m = {
        ...m,
        [l]: {
          ...m[l],
          [s.userId]: s
        }
      }, p = {
        ...p,
        [s.userId]: {
          gameId: l,
          startedPlaying: s.startedPlaying
        }
      }, !0
    })(e, t) && (l = !0)
  }), l
}

function N() {
  let e = !1;
  if (!c.default.needsRefresh() && !E) {
    let t;
    m = {}, p = {}, t = !1, d.default.getUserIds().forEach(e => {
      let n = f.default.getUser(e);
      null != n && (t = _({
        user: n,
        activities: d.default.getActivities(e)
      }) || t)
    }), e = t
  }
  return E = !c.default.needsRefresh(), e
}
class I extends(i = r.default.Store) {
  initialize() {
    this.waitFor(c.default), this.syncWith([c.default], N)
  }
  get games() {
    return m
  }
  get usersPlaying() {
    return p
  }
  get gameIds() {
    return Object.keys(m)
  }
  getNowPlaying(e) {
    return m[e]
  }
  getUserGame(e) {
    return p[e]
  }
}
s = "NowPlayingStore", (l = "displayName") in(a = I) ? Object.defineProperty(a, l, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = s, t.default = new I(o.default, {
  CONNECTION_OPEN: function() {
    m = {}, p = {}
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t,
      presences: n
    } = e, a = !1;
    return t.forEach(e => {
      S(e.presences) && (a = !0)
    }), S(n) && (a = !0), a
  },
  LOGOUT: function() {
    m = {}, p = {}
  },
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.map(e => _(e)).some(e => e)
  },
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e;
    return S(t)
  }
})