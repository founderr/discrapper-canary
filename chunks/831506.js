"use strict";
l.r(t), l("47120");
var n, u, a, r, i = l("392711"),
  d = l.n(i),
  f = l("442837"),
  s = l("570140"),
  o = l("314897"),
  c = l("699516"),
  g = l("885110"),
  S = l("981631");
let E = {},
  p = {};

function m(e, t) {
  var l;
  return (null !== (l = E[e]) && void 0 !== l ? l : {})[t]
}

function v(e, t) {
  let l = m(e, t);
  if (null == l) return;
  let n = E[e];
  delete n[t], d().isEmpty(n) && delete E[e];
  let u = p[l];
  null != u && (u.delete(e), 0 === u.size && delete p[l])
}

function I(e, t, l, n) {
  let u = l.find(e => null != e.party && e.party.id),
    a = null != u && null != u.party ? u.party.id : null,
    r = m(t, e);
  if (null == a || n === S.StatusTypes.OFFLINE) return null != r && (v(t, e), void 0);
  if (null != r) {
    if (r === a) return !1;
    v(t, e)
  }! function(e, t, l) {
    var n;
    let u = E[e];
    if (null == u && (u = E[e] = {}), u[t] = l, c.default.isBlocked(e)) return;
    let a = null !== (n = p[l]) && void 0 !== n ? n : new Set;
    p[l] = a, a.add(e)
  }(t, e, a)
}

function A(e) {
  let {
    guild: t
  } = e, l = !1;
  for (let {
      user: e,
      status: n,
      activities: u
    }
    of t.presences) !1 !== I(t.id, e.id, u, n) && (l = !0);
  return l
}

function P(e, t) {
  let l = !1;
  return t.forEach(t => {
    null != t && I(e, t.user.id, t.activities, t.status) && (l = !0)
  }), l
}

function y() {
  let e = o.default.getId(),
    t = g.default.getActivities();
  return I(S.ME, e, t)
}
class O extends(n = f.default.Store) {
  initialize() {
    this.syncWith([g.default], y), this.waitFor(g.default, c.default)
  }
  getParty(e) {
    return null != e && null != p[e] ? p[e] : null
  }
  getUserParties() {
    return E
  }
  getParties() {
    return p
  }
}
r = "GamePartyStore", (a = "displayName") in(u = O) ? Object.defineProperty(u, a, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : u[a] = r, t.default = new O(s.default, {
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t,
      presences: l
    } = e, n = !1;
    for (let {
        user: e,
        status: t,
        activities: u
      }
      of l) null != e && !1 !== I(S.ME, e.id, u, t) && (n = !0);
    for (let e of t) !1 !== A({
      guild: e
    }) && (n = !0);
    return n
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      parties: t,
      userParties: l
    } = e;
    p = {}, E = {
      ...l
    }, Object.keys(t).forEach(e => p[e] = new Set(t[e]))
  },
  GUILD_CREATE: A,
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e, l = !1;
    for (let {
        user: e,
        activities: n
      }
      of t) null != e && !1 !== I(S.ME, e.id, n) && (l = !0);
    return l
  },
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.map(e => {
      let {
        guildId: t,
        user: l,
        status: n,
        activities: u
      } = e;
      return I(null != t ? t : S.ME, l.id, u, n)
    }).some(e => e)
  },
  THREAD_MEMBER_LIST_UPDATE: function(e) {
    let {
      guildId: t,
      members: l
    } = e;
    return P(t, l.map(e => e.presence))
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    let {
      guildId: t,
      addedMembers: l
    } = e;
    return null != l && P(t, l.map(e => e.presence))
  },
  RELATIONSHIP_ADD: function(e) {
    let {
      relationship: t
    } = e;
    if (!c.default.isBlocked(t.id)) return !1;
    let l = E[t.id];
    if (null == l) return !1;
    for (let e of d().values(l)) {
      let l = p[e];
      null != l && l.delete(t.id)
    }
  },
  RELATIONSHIP_REMOVE: function(e) {
    let {
      relationship: t
    } = e, l = E[t.id];
    if (null == l) return !1;
    for (let e of d().values(l)) {
      let l = p[e];
      null != l && l.add(t.id)
    }
  }
})