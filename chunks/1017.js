"use strict";
r.r(t), r.d(t, {
  default: function() {
    return m
  }
});
var i = r("446674"),
  n = r("913144"),
  s = r("177589"),
  l = r("824563"),
  a = r("843823"),
  u = r("697218"),
  o = r("49111");
let c = !1,
  d = {},
  f = {};

function p(e) {
  let t = !1;
  return e.forEach(e => {
    t = !1 !== E(e) || t
  }), t
}

function h(e) {
  let t = f[e];
  if (null == t) return !1;
  let r = t.gameId;
  return null != d[r] && (d = {
    ...d
  }, delete d[r][e], 0 === Object.values(d[r]).length && delete d[r]), f = {
    ...f
  }, delete f[e], !0
}

function E(e) {
  let {
    user: t,
    activities: r
  } = e;
  if (null == t) return !1;
  let i = r.filter(e => e.type !== o.ActivityTypes.CUSTOM_STATUS);
  if (0 === i.length) return h(t.id);
  let n = !1;
  return i.forEach(e => {
    (function(e, t) {
      var r, i, n, l;
      let a = (0, s.default)(e);
      if (null == a) return h(t.id);
      let u = f[t.id];
      null != u && u.gameId !== a && h(t.id);
      let o = null !== (i = null === (r = e.timestamps) || void 0 === r ? void 0 : r.start) && void 0 !== i ? i : Date.now(),
        c = {
          userId: t.id,
          activity: e,
          startedPlaying: o
        };
      return n = a, l = c, d = {
        ...d,
        [n]: {
          ...d[n],
          [l.userId]: l
        }
      }, f = {
        ...f,
        [l.userId]: {
          gameId: n,
          startedPlaying: l.startedPlaying
        }
      }, !0
    })(e, t) && (n = !0)
  }), n
}

function _() {
  let e = !1;
  if (!a.default.needsRefresh() && !c) {
    let t;
    d = {}, f = {}, t = !1, l.default.getUserIds().forEach(e => {
      let r = u.default.getUser(e);
      null != r && (t = E({
        user: r,
        activities: l.default.getActivities(e)
      }) || t)
    }), e = t
  }
  return c = !a.default.needsRefresh(), e
}
class v extends i.default.Store {
  initialize() {
    this.waitFor(a.default), this.syncWith([a.default], _)
  }
  get games() {
    return d
  }
  get usersPlaying() {
    return f
  }
  get gameIds() {
    return Object.keys(d)
  }
  getNowPlaying(e) {
    return d[e]
  }
  getUserGame(e) {
    return f[e]
  }
}
v.displayName = "NowPlayingStore";
var m = new v(n.default, {
  CONNECTION_OPEN: function() {
    d = {}, f = {}
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t,
      presences: r
    } = e, i = !1;
    return t.forEach(e => {
      p(e.presences) && (i = !0)
    }), p(r) && (i = !0), i
  },
  LOGOUT: function() {
    d = {}, f = {}
  },
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.map(e => E(e)).some(e => e)
  },
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e;
    return p(t)
  }
})