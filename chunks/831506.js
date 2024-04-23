"use strict";
n.r(t), n("47120");
var s, l, a, i, r = n("392711"),
  o = n.n(r),
  u = n("442837"),
  d = n("570140"),
  c = n("314897"),
  f = n("699516"),
  E = n("885110"),
  _ = n("981631");
let m = {},
  T = {};

function I(e, t) {
  var n;
  return (null !== (n = m[e]) && void 0 !== n ? n : {})[t]
}

function p(e, t) {
  let n = I(e, t);
  if (null == n) return;
  let s = m[e];
  delete s[t], o().isEmpty(s) && delete m[e];
  let l = T[n];
  null != l && (l.delete(e), 0 === l.size && delete T[n])
}

function h(e, t, n, s) {
  let l = n.find(e => null != e.party && e.party.id),
    a = null != l && null != l.party ? l.party.id : null,
    i = I(t, e);
  if (null == a || s === _.StatusTypes.OFFLINE) return null != i && (p(t, e), void 0);
  if (null != i) {
    if (i === a) return !1;
    p(t, e)
  }! function(e, t, n) {
    var s;
    let l = m[e];
    if (null == l && (l = m[e] = {}), l[t] = n, f.default.isBlocked(e)) return;
    let a = null !== (s = T[n]) && void 0 !== s ? s : new Set;
    T[n] = a, a.add(e)
  }(t, e, a)
}

function N(e) {
  let {
    guild: t
  } = e, n = !1;
  for (let {
      user: e,
      status: s,
      activities: l
    }
    of t.presences) !1 !== h(t.id, e.id, l, s) && (n = !0);
  return n
}

function S(e, t) {
  let n = !1;
  return t.forEach(t => {
    null != t && h(e, t.user.id, t.activities, t.status) && (n = !0)
  }), n
}

function C() {
  let e = c.default.getId(),
    t = E.default.getActivities();
  return h(_.ME, e, t)
}
class A extends(s = u.default.Store) {
  initialize() {
    this.syncWith([E.default], C), this.waitFor(E.default, f.default)
  }
  getParty(e) {
    return null != e && null != T[e] ? T[e] : null
  }
  getUserParties() {
    return m
  }
  getParties() {
    return T
  }
}
i = "GamePartyStore", (a = "displayName") in(l = A) ? Object.defineProperty(l, a, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[a] = i, t.default = new A(d.default, {
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t,
      presences: n
    } = e, s = !1;
    for (let {
        user: e,
        status: t,
        activities: l
      }
      of n) null != e && !1 !== h(_.ME, e.id, l, t) && (s = !0);
    for (let e of t) !1 !== N({
      guild: e
    }) && (s = !0);
    return s
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      parties: t,
      userParties: n
    } = e;
    T = {}, m = {
      ...n
    }, Object.keys(t).forEach(e => T[e] = new Set(t[e]))
  },
  GUILD_CREATE: N,
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e, n = !1;
    for (let {
        user: e,
        activities: s
      }
      of t) null != e && !1 !== h(_.ME, e.id, s) && (n = !0);
    return n
  },
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.map(e => {
      let {
        guildId: t,
        user: n,
        status: s,
        activities: l
      } = e;
      return h(null != t ? t : _.ME, n.id, l, s)
    }).some(e => e)
  },
  THREAD_MEMBER_LIST_UPDATE: function(e) {
    let {
      guildId: t,
      members: n
    } = e;
    return S(t, n.map(e => e.presence))
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    let {
      guildId: t,
      addedMembers: n
    } = e;
    return null != n && S(t, n.map(e => e.presence))
  },
  RELATIONSHIP_ADD: function(e) {
    let {
      relationship: t
    } = e;
    if (!f.default.isBlocked(t.id)) return !1;
    let n = m[t.id];
    if (null == n) return !1;
    for (let e of o().values(n)) {
      let n = T[e];
      null != n && n.delete(t.id)
    }
  },
  RELATIONSHIP_REMOVE: function(e) {
    let {
      relationship: t
    } = e, n = m[t.id];
    if (null == n) return !1;
    for (let e of o().values(n)) {
      let n = T[e];
      null != n && n.add(t.id)
    }
  }
})