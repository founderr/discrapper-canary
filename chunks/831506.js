"use strict";
n.r(t), n("47120");
var l, u, a, r, i = n("392711"),
  o = n.n(i),
  d = n("442837"),
  s = n("570140"),
  f = n("314897"),
  c = n("699516"),
  g = n("885110"),
  E = n("981631");
let I = {},
  C = {};

function S(e, t) {
  var n;
  return (null !== (n = I[e]) && void 0 !== n ? n : {})[t]
}

function O(e, t) {
  let n = S(e, t);
  if (null == n) return;
  let l = I[e];
  delete l[t], o().isEmpty(l) && delete I[e];
  let u = C[n];
  null != u && (u.delete(e), 0 === u.size && delete C[n])
}

function T(e, t, n, l) {
  let u = n.find(e => null != e.party && e.party.id),
    a = null != u && null != u.party ? u.party.id : null,
    r = S(t, e);
  if (null == a || l === E.StatusTypes.OFFLINE) return null != r && (O(t, e), void 0);
  if (null != r) {
    if (r === a) return !1;
    O(t, e)
  }! function(e, t, n) {
    var l;
    let u = I[e];
    if (null == u && (u = I[e] = {}), u[t] = n, c.default.isBlocked(e)) return;
    let a = null !== (l = C[n]) && void 0 !== l ? l : new Set;
    C[n] = a, a.add(e)
  }(t, e, a)
}

function N(e) {
  let {
    guild: t
  } = e, n = !1;
  for (let {
      user: e,
      status: l,
      activities: u
    }
    of t.presences) !1 !== T(t.id, e.id, u, l) && (n = !0);
  return n
}

function b(e, t) {
  let n = !1;
  return t.forEach(t => {
    null != t && T(e, t.user.id, t.activities, t.status) && (n = !0)
  }), n
}

function y() {
  let e = f.default.getId(),
    t = g.default.getActivities();
  return T(E.ME, e, t)
}
class p extends(l = d.default.Store) {
  initialize() {
    this.syncWith([g.default], y), this.waitFor(g.default, c.default)
  }
  getParty(e) {
    return null != e && null != C[e] ? C[e] : null
  }
  getUserParties() {
    return I
  }
  getParties() {
    return C
  }
}
r = "GamePartyStore", (a = "displayName") in(u = p) ? Object.defineProperty(u, a, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : u[a] = r, t.default = new p(s.default, {
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t,
      presences: n
    } = e, l = !1;
    for (let {
        user: e,
        status: t,
        activities: u
      }
      of n) null != e && !1 !== T(E.ME, e.id, u, t) && (l = !0);
    for (let e of t) !1 !== N({
      guild: e
    }) && (l = !0);
    return l
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      parties: t,
      userParties: n
    } = e;
    C = {}, I = {
      ...n
    }, Object.keys(t).forEach(e => C[e] = new Set(t[e]))
  },
  GUILD_CREATE: N,
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e, n = !1;
    for (let {
        user: e,
        activities: l
      }
      of t) null != e && !1 !== T(E.ME, e.id, l) && (n = !0);
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
        status: l,
        activities: u
      } = e;
      return T(null != t ? t : E.ME, n.id, u, l)
    }).some(e => e)
  },
  THREAD_MEMBER_LIST_UPDATE: function(e) {
    let {
      guildId: t,
      members: n
    } = e;
    return b(t, n.map(e => e.presence))
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    let {
      guildId: t,
      addedMembers: n
    } = e;
    return null != n && b(t, n.map(e => e.presence))
  },
  RELATIONSHIP_ADD: function(e) {
    let {
      relationship: t
    } = e;
    if (!c.default.isBlocked(t.id)) return !1;
    let n = I[t.id];
    if (null == n) return !1;
    for (let e of o().values(n)) {
      let n = C[e];
      null != n && n.delete(t.id)
    }
  },
  RELATIONSHIP_REMOVE: function(e) {
    let {
      relationship: t
    } = e, n = I[t.id];
    if (null == n) return !1;
    for (let e of o().values(n)) {
      let n = C[e];
      null != n && n.add(t.id)
    }
  }
})