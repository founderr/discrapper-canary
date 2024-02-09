"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
});
var a = s("446674"),
  n = s("913144"),
  i = s("177589"),
  r = s("824563"),
  l = s("843823"),
  o = s("697218"),
  u = s("49111");
let d = !1,
  c = {},
  _ = {};

function E(e) {
  let t = !1;
  return e.forEach(e => {
    t = !1 !== T(e) || t
  }), t
}

function I(e) {
  let t = _[e];
  if (null == t) return !1;
  let s = t.gameId;
  return null != c[s] && (c = {
    ...c
  }, delete c[s][e], 0 === Object.values(c[s]).length && delete c[s]), _ = {
    ..._
  }, delete _[e], !0
}

function T(e) {
  var t, s, a, n;
  let {
    user: r,
    activities: o
  } = e;
  if (null == r || !l.default.getUserAffinitiesUserIds().has(r.id)) return !1;
  let d = o.find(e => e.type !== u.ActivityTypes.CUSTOM_STATUS);
  if (null == d) return I(r.id);
  let E = (0, i.default)(d);
  if (null == E) return I(r.id);
  let T = _[r.id];
  null != T && T.gameId !== E && I(r.id);
  let f = null !== (s = null === (t = d.timestamps) || void 0 === t ? void 0 : t.start) && void 0 !== s ? s : Date.now(),
    S = {
      userId: r.id,
      activity: d,
      startedPlaying: f
    };
  return a = E, n = S, c = {
    ...c,
    [a]: {
      ...c[a],
      [n.userId]: n
    }
  }, _ = {
    ..._,
    [n.userId]: {
      gameId: a,
      startedPlaying: n.startedPlaying
    }
  }, !0
}

function f() {
  let e = !1;
  if (!l.default.needsRefresh() && !d) {
    let t;
    c = {}, _ = {}, t = !1, r.default.getUserIds().forEach(e => {
      let s = o.default.getUser(e);
      null != s && (t = T({
        user: s,
        activities: r.default.getActivities(e)
      }) || t)
    }), e = t
  }
  return d = !l.default.needsRefresh(), e
}
class S extends a.default.Store {
  initialize() {
    this.waitFor(l.default), this.syncWith([l.default], f)
  }
  get games() {
    return c
  }
  get usersPlaying() {
    return _
  }
  get gameIds() {
    return Object.keys(c)
  }
  getNowPlaying(e) {
    return c[e]
  }
  getUserGame(e) {
    return _[e]
  }
}
S.displayName = "NowPlayingStore";
var R = new S(n.default, {
  CONNECTION_OPEN: function() {
    c = {}, _ = {}
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      presences: t
    } = e;
    return E(t)
  },
  LOGOUT: function() {
    c = {}, _ = {}
  },
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.map(e => T(e)).some(e => e)
  },
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e;
    return E(t)
  }
})