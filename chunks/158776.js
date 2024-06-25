"use strict";
n(47120), n(653041);
var i, r, s, o, a = n(348327),
  l = n.n(a),
  u = n(392711),
  _ = n.n(u),
  c = n(442837),
  d = n(570140),
  E = n(122810),
  I = n(106301),
  T = n(709054),
  h = n(314897),
  f = n(594174),
  S = n(981631);
let A = Object.freeze([]),
  N = {},
  m = {},
  O = {},
  p = {},
  R = {},
  g = {};

function C(e, t) {
  let n = N[e];
  return null != n ? n[t] : null
}
let v = e => {
    switch (e.type) {
      case S.IIU.CUSTOM_STATUS:
        return 4;
      case S.IIU.COMPETING:
        return 3;
      case S.IIU.STREAMING:
        return 2;
      case S.IIU.PLAYING:
        return 1;
      default:
        return 0
    }
  },
  L = e => (0, E.Z)(e) ? 1 : 0;

function D(e, t) {
  var n, i, r, s, o;
  return n = e, v(t) - v(n) || (i = e, L(t) - L(i)) || (r = e, (null !== (s = t.created_at) && void 0 !== s ? s : 0) - (null !== (o = r.created_at) && void 0 !== o ? o : 0))
}

function M(e) {
  if (delete m[e], delete O[e], delete p[e], null == N[e]) return;
  let [t] = _().sortBy(N[e], e => -e.timestamp);
  t.status !== S.Skl.OFFLINE ? (m[e] = t.status, O[e] = t.activities, null != t.clientStatus && (p[e] = t.clientStatus), delete g[e]) : (_().every(N[e], e => e.status === S.Skl.OFFLINE) && delete N[e], g[e] = Date.now())
}

function P(e) {
  let t = N[e];
  if (null == t) return;
  let n = _().maxBy(Object.values(t), e => e.timestamp);
  n.status !== S.Skl.OFFLINE && (m[e] = n.status, O[e] = n.activities, null != n.clientStatus && (p[e] = n.clientStatus))
}

function y(e) {
  let {
    guildId: t,
    userId: n,
    status: i,
    clientStatus: r,
    activities: s
  } = e;
  if (n === h.default.getId()) return !1;
  let o = N[n];
  if (null == o) {
    if (i === S.Skl.OFFLINE) return !1;
    o = N[n] = {}
  }
  if (i === S.Skl.OFFLINE) o[t] = {
    status: i,
    clientStatus: r,
    activities: A,
    timestamp: Date.now()
  };
  else {
    let e = s.length > 1 ? [...s].sort(D) : s,
      n = o[t];
    s = null != n && l()(n.activities, e) ? n.activities : e, o[t] = {
      status: i,
      clientStatus: r,
      activities: s,
      timestamp: Date.now()
    }
  }
  return delete R[n], M(n), !0
}

function U(e) {
  let {
    guildId: t,
    userId: n,
    status: i,
    clientStatus: r,
    activities: s,
    timestamp: o
  } = e;
  if (n === h.default.getId()) return;
  let a = N[n];
  if (null == a) {
    if (i === S.Skl.OFFLINE) return;
    a = N[n] = {}
  }
  if (i === S.Skl.OFFLINE) a[t] = {
    status: i,
    clientStatus: r,
    activities: A,
    timestamp: Date.now()
  };
  else {
    let e = s.length > 1 ? [...s].sort(D) : s;
    a[t] = {
      status: i,
      clientStatus: r,
      activities: e,
      timestamp: o
    }
  }
}

function b(e, t) {
  if (t === h.default.getId()) return !1;
  let n = N[t];
  if (null == n || null == n[e]) return !1;
  delete n[e], 0 === Object.keys(n).length && delete N[t], M(t)
}

function G(e) {
  for (let t of T.default.keys(N)) b(e, t)
}
class w extends(i = c.ZP.Store) {
  initialize() {
    this.waitFor(h.default, I.Z)
  }
  setCurrentUserOnConnectionOpen(e, t) {
    m[h.default.getId()] = e, O[h.default.getId()] = t
  }
  getStatus(e) {
    var t, n;
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : S.Skl.OFFLINE,
      s = f.default.getUser(e);
    if (null != s && s.hasFlag(S.xW$.BOT_HTTP_INTERACTIONS) && (r = S.Skl.UNKNOWN), null == s ? void 0 : s.isClyde()) return S.Skl.ONLINE;
    if (null == i) return null !== (t = m[e]) && void 0 !== t ? t : r;
    let o = C(e, i);
    return null !== (n = null == o ? void 0 : o.status) && void 0 !== n ? n : r
  }
  getActivities(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (null == t) {
      var n;
      return null !== (n = O[e]) && void 0 !== n ? n : A
    }
    let i = C(e, t);
    return null == i || null == i.activities ? A : i.activities
  }
  getPrimaryActivity(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    return this.getActivities(e, t).filter(e => e.type !== S.IIU.HANG_STATUS)[0]
  }
  getAllApplicationActivities(e) {
    let t = [];
    for (let n of T.default.keys(O))
      for (let i of O[n]) i.application_id === e && t.push({
        userId: n,
        activity: i
      });
    return t
  }
  getApplicationActivity(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    return this.findActivity(e, e => e.application_id === t, n)
  }
  findActivity(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    return this.getActivities(e, n).find(t)
  }
  getActivityMetadata(e) {
    return R[e]
  }
  getUserIds() {
    return T.default.keys(O)
  }
  isMobileOnline(e) {
    let t = p[e];
    return null != t && t[S.X5t.MOBILE] === S.Skl.ONLINE && t[S.X5t.DESKTOP] !== S.Skl.ONLINE
  }
  getClientStatus(e) {
    return p[e]
  }
  getLastOnlineTimestamp(e) {
    return g[e]
  }
  getState() {
    return {
      presencesForGuilds: N,
      statuses: m,
      activities: O,
      activityMetadata: R,
      clientStatuses: p,
      lastOnlineTimestamps: g
    }
  }
}
o = "PresenceStore", (s = "displayName") in(r = w) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new w(d.Z, {
  CONNECTION_OPEN: function() {
    return !0
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t,
      presences: n
    } = e, i = h.default.getId();
    N = {}, R = {}, g = {}, m = {
      [i]: m[i]
    }, O = {
      [i]: O[i]
    }, p = {
      [i]: {}
    };
    let r = new Set,
      s = Date.now();
    t.forEach(e => {
      e.presences.forEach(t => {
        let {
          user: n,
          status: i,
          clientStatus: o,
          activities: a
        } = t;
        U({
          guildId: e.id,
          userId: n.id,
          status: i,
          clientStatus: o,
          activities: a,
          timestamp: s
        }), r.add(n.id)
      })
    }), n.forEach(e => {
      let {
        user: t,
        status: n,
        clientStatus: i,
        activities: o
      } = e;
      null != t && (U({
        guildId: S.ME,
        userId: t.id,
        status: n,
        clientStatus: i,
        activities: o,
        timestamp: s
      }), r.add(t.id))
    }), r.delete(i), r.forEach(P)
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      presences: t
    } = e;
    N = t.presencesForGuilds, m = t.statuses, O = t.activities, R = t.activityMetadata
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    t.presences.forEach(e => {
      let {
        user: n,
        status: i,
        clientStatus: r,
        activities: s
      } = e;
      y({
        guildId: t.id,
        userId: n.id,
        status: i,
        clientStatus: r,
        activities: s
      })
    })
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    G(t.id)
  },
  GUILD_MEMBER_REMOVE: function(e) {
    let {
      guildId: t,
      user: n
    } = e;
    return b(t, n.id)
  },
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.map(e => {
      let {
        guildId: t,
        user: n,
        status: i,
        clientStatus: r,
        activities: s
      } = e;
      return y({
        guildId: null != t ? t : S.ME,
        userId: n.id,
        status: i,
        clientStatus: r,
        activities: s
      })
    }).some(e => e)
  },
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e;
    G(S.ME), t.forEach(e => {
      let {
        user: t,
        status: n,
        clientStatus: i,
        activities: r
      } = e;
      null != t && y({
        guildId: S.ME,
        userId: t.id,
        status: n,
        clientStatus: i,
        activities: r
      })
    })
  },
  ACTIVITY_METADATA_UPDATE: function(e) {
    let {
      userId: t,
      metadata: n
    } = e;
    return R[t] = n, !1
  },
  THREAD_MEMBER_LIST_UPDATE: function(e) {
    let {
      guildId: t,
      members: n
    } = e;
    n.forEach(e => {
      null != e.presence && y({
        guildId: t,
        userId: e.user_id,
        status: e.presence.status,
        clientStatus: e.presence.clientStatus,
        activities: e.presence.activities
      })
    })
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    let {
      guildId: t,
      addedMembers: n
    } = e;
    null == n || n.forEach(e => {
      null != e.presence && y({
        guildId: t,
        userId: e.userId,
        status: e.presence.status,
        clientStatus: e.presence.clientStatus,
        activities: e.presence.activities
      })
    })
  },
  SELF_PRESENCE_STORE_UPDATE: function(e) {
    let t = h.default.getId();
    if (m[t] === e.status && O[t] === e.activities) return !1;
    m[t] = e.status, O[t] = e.activities, delete R[t]
  }
})