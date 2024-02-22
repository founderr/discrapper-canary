"use strict";
r.r(t), r.d(t, {
  default: function() {
    return g
  }
});
var n = r("446674"),
  s = r("913144"),
  i = r("177589"),
  l = r("824563"),
  a = r("843823"),
  u = r("697218"),
  o = r("49111");
let d = !1,
  c = {},
  f = {};

function h(e) {
  let t = !1;
  return e.forEach(e => {
    t = !1 !== E(e) || t
  }), t
}

function p(e) {
  let t = f[e];
  if (null == t) return !1;
  let r = t.gameId;
  return null != c[r] && (c = {
    ...c
  }, delete c[r][e], 0 === Object.values(c[r]).length && delete c[r]), f = {
    ...f
  }, delete f[e], !0
}

function E(e) {
  let {
    user: t,
    activities: r
  } = e;
  if (null == t) return !1;
  let n = r.filter(e => e.type !== o.ActivityTypes.CUSTOM_STATUS);
  if (0 === n.length) return p(t.id);
  let s = !1;
  return n.forEach(e => {
    (function(e, t) {
      var r, n, s, l;
      let a = (0, i.default)(e);
      if (null == a) return p(t.id);
      let u = f[t.id];
      null != u && u.gameId !== a && p(t.id);
      let o = null !== (n = null === (r = e.timestamps) || void 0 === r ? void 0 : r.start) && void 0 !== n ? n : Date.now(),
        d = {
          userId: t.id,
          activity: e,
          startedPlaying: o
        };
      return s = a, l = d, c = {
        ...c,
        [s]: {
          ...c[s],
          [l.userId]: l
        }
      }, f = {
        ...f,
        [l.userId]: {
          gameId: s,
          startedPlaying: l.startedPlaying
        }
      }, !0
    })(e, t) && (s = !0)
  }), s
}

function v() {
  let e = !1;
  if (!a.default.needsRefresh() && !d) {
    let t;
    c = {}, f = {}, t = !1, l.default.getUserIds().forEach(e => {
      let r = u.default.getUser(e);
      null != r && (t = E({
        user: r,
        activities: l.default.getActivities(e)
      }) || t)
    }), e = t
  }
  return d = !a.default.needsRefresh(), e
}
class _ extends n.default.Store {
  initialize() {
    this.waitFor(a.default), this.syncWith([a.default], v)
  }
  get games() {
    return c
  }
  get usersPlaying() {
    return f
  }
  get gameIds() {
    return Object.keys(c)
  }
  getNowPlaying(e) {
    return c[e]
  }
  getUserGame(e) {
    return f[e]
  }
}
_.displayName = "NowPlayingStore";
var g = new _(s.default, {
  CONNECTION_OPEN: function() {
    c = {}, f = {}
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t,
      presences: r
    } = e, n = !1;
    return t.forEach(e => {
      h(e.presences) && (n = !0)
    }), h(r) && (n = !0), n
  },
  LOGOUT: function() {
    c = {}, f = {}
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
    return h(t)
  }
})