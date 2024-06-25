n(47120);
var s, i, l, a, r = n(392711),
  o = n.n(r),
  c = n(442837),
  u = n(570140),
  d = n(314897),
  E = n(699516),
  _ = n(885110),
  I = n(981631);
let T = {},
  m = {};

function N(e, t) {
  var n;
  return (null !== (n = T[e]) && void 0 !== n ? n : {})[t]
}

function h(e, t) {
  let n = N(e, t);
  if (null == n) return;
  let s = T[e];
  delete s[t], o().isEmpty(s) && delete T[e];
  let i = m[n];
  null != i && (i.delete(e), 0 === i.size && delete m[n])
}

function C(e, t, n, s) {
  let i = n.find(e => null != e.party && e.party.id),
    l = null != i && null != i.party ? i.party.id : null,
    a = N(t, e);
  if (null == l || s === I.Skl.OFFLINE) return null != a && (h(t, e), void 0);
  if (null != a) {
    if (a === l) return !1;
    h(t, e)
  }! function(e, t, n) {
    var s;
    let i = T[e];
    if (null == i && (i = T[e] = {}), i[t] = n, E.Z.isBlocked(e)) return;
    let l = null !== (s = m[n]) && void 0 !== s ? s : new Set;
    m[n] = l, l.add(e)
  }(t, e, l)
}

function S(e) {
  let {
    guild: t
  } = e, n = !1;
  for (let {
      user: e,
      status: s,
      activities: i
    }
    of t.presences) !1 !== C(t.id, e.id, i, s) && (n = !0);
  return n
}

function A(e, t) {
  let n = !1;
  return t.forEach(t => {
    null != t && C(e, t.user.id, t.activities, t.status) && (n = !0)
  }), n
}

function g() {
  let e = d.default.getId(),
    t = _.Z.getActivities();
  return C(I.ME, e, t)
}
class p extends(s = c.ZP.Store) {
  initialize() {
    this.syncWith([_.Z], g), this.waitFor(_.Z, E.Z)
  }
  getParty(e) {
    return null != e && null != m[e] ? m[e] : null
  }
  getUserParties() {
    return T
  }
  getParties() {
    return m
  }
}
a = "GamePartyStore", (l = "displayName") in(i = p) ? Object.defineProperty(i, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[l] = a, t.Z = new p(u.Z, {
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t,
      presences: n
    } = e, s = !1;
    for (let {
        user: e,
        status: t,
        activities: i
      }
      of n) null != e && !1 !== C(I.ME, e.id, i, t) && (s = !0);
    for (let e of t) !1 !== S({
      guild: e
    }) && (s = !0);
    return s
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      parties: t,
      userParties: n
    } = e;
    m = {}, T = {
      ...n
    }, Object.keys(t).forEach(e => m[e] = new Set(t[e]))
  },
  GUILD_CREATE: S,
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e, n = !1;
    for (let {
        user: e,
        activities: s
      }
      of t) null != e && !1 !== C(I.ME, e.id, s) && (n = !0);
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
        activities: i
      } = e;
      return C(null != t ? t : I.ME, n.id, i, s)
    }).some(e => e)
  },
  THREAD_MEMBER_LIST_UPDATE: function(e) {
    let {
      guildId: t,
      members: n
    } = e;
    return A(t, n.map(e => e.presence))
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    let {
      guildId: t,
      addedMembers: n
    } = e;
    return null != n && A(t, n.map(e => e.presence))
  },
  RELATIONSHIP_ADD: function(e) {
    let {
      relationship: t
    } = e;
    if (!E.Z.isBlocked(t.id)) return !1;
    let n = T[t.id];
    if (null == n) return !1;
    for (let e of o().values(n)) {
      let n = m[e];
      null != n && n.delete(t.id)
    }
  },
  RELATIONSHIP_REMOVE: function(e) {
    let {
      relationship: t
    } = e, n = T[t.id];
    if (null == n) return !1;
    for (let e of o().values(n)) {
      let n = m[e];
      null != n && n.add(t.id)
    }
  }
})