"use strict";
n.r(t), n.d(t, {
  getUserIdFromCommunicationDisabledUserKey: function() {
    return w
  },
  getGuildIdFromCommunicationDisabledUserKey: function() {
    return k
  },
  default: function() {
    return Q
  }
}), n("222007"), n("702976"), n("424973");
var i, r, s = n("917351"),
  a = n.n(s),
  o = n("509043"),
  l = n("446674"),
  u = n("913144"),
  c = n("605250"),
  d = n("509"),
  p = n("564568"),
  h = n("38654"),
  f = n("568734"),
  E = n("449008"),
  _ = n("271938"),
  m = n("42203"),
  S = n("305961"),
  g = n("657944");
let T = new c.default("GuildMemberStore"),
  I = {},
  v = {},
  C = {},
  A = !1,
  R = 0,
  N = 0,
  y = {},
  O = {},
  D = {
    added: [],
    removed: []
  };

function b(e, t) {
  if (null == t.communicationDisabledUntil || !(0, d.isMemberCommunicationDisabled)(t)) return P(e, t.userId);
  let n = U(e, t.userId),
    i = C[n];
  i !== t.communicationDisabledUntil && (0, d.isMemberCommunicationDisabled)(t) && (C[n] = t.communicationDisabledUntil, L(n))
}

function P(e, t) {
  if (null != t) {
    let n = U(e, t);
    null != C[n] && L(n), M(U(e, t))
  } else
    for (let t in C) {
      let n = k(t);
      n === e && (L(t), M(t))
    }
}

function L(e) {
  R += 1, y[e] = R
}

function M(e) {
  w(e) === _.default.getId() && (0, p.clearCommunicationDisabledNotice)(k(e)), delete C[e]
}

function U(e, t) {
  let n = [];
  return n[0] = e, n[1] = t, n.join("-")
}

function w(e) {
  return e.split("-")[1]
}

function k(e) {
  return e.split("-")[0]
}

function G(e, t) {
  let n, i, r, s, a;
  if (0 === t.length) return {
    colorString: void 0,
    colorRoleId: void 0,
    hoistRoleId: void 0,
    iconRoleId: void 0,
    highestRoleId: void 0
  };
  for (let n of t) {
    let t = e[n];
    if (null == t) continue;
    (null == a || t.position > a.position) && (a = t), t.color > 0 && (null == i || t.position > i.position) && (i = t), t.hoist && (null == r || t.position > r.position) && (r = t);
    let o = null != t.icon || null != t.unicodeEmoji;
    o && (null == s || t.position > s.position) && (s = t)
  }
  if (null != i) {
    var l;
    null == i.colorString && i.color > 0 && (i.colorString = (0, o.int2hex)(i.color)), n = null !== (l = i.colorString) && void 0 !== l ? l : void 0
  }
  return {
    colorString: n,
    colorRoleId: null == i ? void 0 : i.id,
    iconRoleId: null == s ? void 0 : s.id,
    hoistRoleId: null == r ? void 0 : r.id,
    highestRoleId: null == a ? void 0 : a.id
  }
}

function x(e) {
  let {
    userId: t,
    nick: n,
    guildId: i,
    avatar: r,
    guildRoles: s,
    roles: a,
    premiumSince: o,
    isPending: l,
    joinedAt: u,
    communicationDisabledUntil: c,
    unusualDMActivityUntil: d,
    fullProfileLoadedTimestamp: p,
    flags: f
  } = e, {
    colorString: E,
    colorRoleId: m,
    iconRoleId: S,
    hoistRoleId: g,
    highestRoleId: T
  } = G(s, a), C = {
    userId: t,
    nick: n,
    guildId: i,
    avatar: r,
    roles: a,
    colorString: E,
    colorRoleId: m,
    iconRoleId: S,
    hoistRoleId: g,
    highestRoleId: T,
    premiumSince: o,
    isPending: l,
    joinedAt: u,
    communicationDisabledUntil: c,
    unusualDMActivityUntil: d,
    fullProfileLoadedTimestamp: p,
    flags: f
  }, A = I[i];
  if (null == A) return C;
  if (t === _.default.getId()) {
    if (h.default.isViewingRoles(i) || h.default.isFullServerPreview(i)) {
      let e = h.default.getViewingRoles(i);
      v[i] = {
        ...C,
        ...h.default.getMemberOptions(i),
        roles: null != e ? Object.keys(e) : []
      }
    } else null != v[i] && delete v[i]
  }
  return C
}(r = i || (i = {}))[r.GUILD = 0] = "GUILD", r[r.USER = 1] = "USER";

function F(e) {
  e.guilds.forEach(e => {
    H(e)
  })
}

function V(e) {
  var t;
  let {
    guildId: n,
    user: i,
    nick: r,
    avatar: s,
    roles: a,
    premiumSince: o,
    isPending: l,
    joinedAt: u,
    communicationDisabledUntil: c,
    unusualDMActivityUntil: d,
    flags: p
  } = e, h = I[n];
  if (null == h) return !1;
  let f = S.default.getGuild(n);
  if (null == f) return T.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), !1;
  h[i.id] = x({
    userId: i.id,
    nick: r,
    guildId: n,
    avatar: s,
    guildRoles: f.roles,
    roles: a,
    premiumSince: o,
    isPending: l,
    joinedAt: u,
    communicationDisabledUntil: c,
    unusualDMActivityUntil: d,
    fullProfileLoadedTimestamp: null === (t = h[i.id]) || void 0 === t ? void 0 : t.fullProfileLoadedTimestamp,
    flags: p
  }), b(n, h[i.id])
}

function B(e, t) {
  let n = I[e];
  if (null == n) return !1;
  let i = S.default.getGuild(e);
  return null == i ? (T.warn("Guild ".concat(e, " not found during GUILD_MEMBERS_CHUNK.")), !1) : (t.forEach(t => {
    var r;
    let s = n[t.user.id];
    n[t.user.id] = x({
      userId: t.user.id,
      nick: t.nick,
      guildId: e,
      avatar: t.avatar,
      guildRoles: i.roles,
      roles: t.roles,
      premiumSince: t.premium_since,
      isPending: t.pending,
      joinedAt: t.joined_at,
      communicationDisabledUntil: t.communication_disabled_until,
      flags: t.flags,
      fullProfileLoadedTimestamp: null == s ? void 0 : s.fullProfileLoadedTimestamp,
      unusualDMActivityUntil: null !== (r = t.unusual_dm_activity_until) && void 0 !== r ? r : null == s ? void 0 : s.unusualDMActivityUntil
    }), b(e, n[t.user.id])
  }), N++, !0)
}

function H(e) {
  let t = e.id;
  !(t in I) && (I[e.id] = {});
  let n = S.default.getGuild(t);
  if (null == n) return !1;
  let i = I[t];
  for (let s of e.members) {
    var r;
    let a = s.user.id,
      o = i[a],
      l = x({
        userId: a,
        nick: s.nick,
        guildId: e.id,
        avatar: s.avatar,
        guildRoles: n.roles,
        roles: s.roles,
        premiumSince: s.premium_since,
        isPending: s.pending,
        joinedAt: s.joined_at,
        communicationDisabledUntil: s.communication_disabled_until,
        fullProfileLoadedTimestamp: null == o ? void 0 : o.fullProfileLoadedTimestamp,
        flags: s.flags,
        unusualDMActivityUntil: null !== (r = s.unusual_dm_activity_until) && void 0 !== r ? r : null == o ? void 0 : o.unusualDMActivityUntil
      });
    i[a] = l, b(t, l)
  }
  return !0
}

function j(e) {
  let t = I[e.guildId];
  if (null == t) return !1;
  let n = S.default.getGuild(e.guildId);
  if (null == n) return T.warn("Guild ".concat(e.guildId, " not found during ").concat(e.type, ".")), !1;
  for (let i of Object.keys(t)) {
    let r = t[i];
    (null != r.roles && r.roles.length > 0 || null != r.colorString || null != r.hoistRoleId) && (t[i] = x({
      userId: i,
      nick: r.nick,
      guildId: e.guildId,
      avatar: r.avatar,
      guildRoles: n.roles,
      roles: r.roles,
      premiumSince: r.premiumSince,
      isPending: r.isPending,
      joinedAt: r.joinedAt,
      flags: r.flags,
      fullProfileLoadedTimestamp: null == r ? void 0 : r.fullProfileLoadedTimestamp
    }), b(e.guildId, t[i]))
  }
}

function Y(e) {
  let {
    guildId: t
  } = e, n = I[t];
  if (null == n) return !1;
  let i = S.default.getGuild(t);
  if (null == i) return T.warn("Guild ".concat(t, " not found during IMPERSONATE_UPDATE.")), !1;
  let r = _.default.getId(),
    s = n[r];
  n[r] = x({
    userId: r,
    nick: s.nick,
    guildId: t,
    avatar: s.avatar,
    guildRoles: i.roles,
    roles: s.roles,
    premiumSince: s.premiumSince,
    isPending: s.isPending,
    joinedAt: s.joinedAt,
    communicationDisabledUntil: s.communicationDisabledUntil,
    fullProfileLoadedTimestamp: s.fullProfileLoadedTimestamp,
    flags: s.flags
  })
}

function W(e) {
  var t;
  let {
    message: n,
    guildId: i
  } = e;
  (null === (t = n.resolved) || void 0 === t ? void 0 : t.members) != null && null != i && H({
    id: i,
    members: Object.entries(n.resolved.members).map(e => {
      var t, i;
      let [r, s] = e, a = null === (i = n.resolved) || void 0 === i ? void 0 : null === (t = i.users) || void 0 === t ? void 0 : t[r];
      if (null != a) return {
        ...s,
        user: a
      }
    }).filter(e => null != e)
  })
}

function K(e) {
  let {
    messages: t
  } = e;
  t.forEach(e => (function(e) {
    var t;
    if ((null === (t = e.resolved) || void 0 === t ? void 0 : t.members) == null) return;
    let n = m.default.getChannel(e.channel_id);
    !(null == n || n.isPrivate()) && H({
      id: n.guild_id,
      members: Object.entries(e.resolved.members).map(t => {
        var n, i;
        let [r, s] = t, a = null === (i = e.resolved) || void 0 === i ? void 0 : null === (n = i.users) || void 0 === n ? void 0 : n[r];
        if (null != a) return {
          ...s,
          user: a
        }
      }).filter(e => null != e)
    })
  })(e))
}

function z(e) {
  let {
    messages: t
  } = e;
  t.forEach(e => K({
    messages: e
  }))
}
class q extends l.default.Store {
  initialize() {
    this.waitFor(S.default, _.default, h.default)
  }
  getMutableAllGuildsAndMembers() {
    return I
  }
  memberOf(e) {
    return a(I).toPairs().filter(t => {
      let [n, i] = t;
      return null != i[e]
    }).map(e => {
      let [t] = e;
      return t
    }).value()
  }
  getNicknameGuildsMapping(e) {
    let t = {};
    for (let i in I) {
      var n;
      let r = I[i],
        s = null === (n = r[e]) || void 0 === n ? void 0 : n.nick;
      null != s && (!Object.prototype.hasOwnProperty.call(t, s) && (t[s] = []), t[s].push(i))
    }
    return t
  }
  getNicknames(e) {
    return Object.keys(this.getNicknameGuildsMapping(e))
  }
  isMember(e, t) {
    if (null == e || null == t) return !1;
    let n = I[e];
    return null != n && null != n[t]
  }
  isGuestOrLurker(e, t) {
    var n;
    if (null == e || null == t) return !1;
    let i = I[e];
    return null != i && (null === (n = i[t]) || void 0 === n ? void 0 : n.joinedAt) == null
  }
  isCurrentUserGuest(e) {
    if (null == e) return !1;
    let t = _.default.getId(),
      n = I[e];
    if (null == n || null == n[t]) return !1;
    let i = n[t].flags;
    return null != i && (0, f.hasFlag)(i, g.GuildMemberFlags.IS_GUEST)
  }
  getMemberIds(e) {
    if (null == e) return [];
    let t = I[e];
    return null == t ? [] : Object.keys(t)
  }
  getMembers(e) {
    if (null == e) return [];
    let t = I[e];
    return null == t ? [] : Object.values(t)
  }
  getTrueMember(e, t) {
    let n = I[e];
    return null != n ? n[t] : null
  }
  getMember(e, t) {
    let n = this.getTrueMember(e, t);
    if (null != n && t === _.default.getId() && (h.default.isViewingRoles(e) || h.default.isFullServerPreview(e))) {
      var i;
      return null !== (i = v[e]) && void 0 !== i ? i : n
    }
    return n
  }
  getSelfMember(e) {
    return this.getMember(e, _.default.getId())
  }
  getNick(e, t) {
    if (null == e || null == t) return null;
    let n = this.getMember(e, t);
    return null != n ? n.nick : null
  }
  getCommunicationDisabledUserMap() {
    return C
  }
  getCommunicationDisabledVersion() {
    return R
  }
  getPendingRoleUpdates(e) {
    var t;
    return null !== (t = O[e]) && void 0 !== t ? t : D
  }
  getMemberRoleWithPendingUpdates(e, t) {
    var n, i;
    let r = null !== (i = null === (n = this.getMember(e, t)) || void 0 === n ? void 0 : n.roles) && void 0 !== i ? i : [],
      s = O[e];
    return null == s ? r : a.difference(a.union(r, s.added), s.removed)
  }
  getMemberVersion() {
    return N
  }
}
q.displayName = "GuildMemberStore";
var Q = new q(u.default, {
  CONNECTION_OPEN: function(e) {
    A ? A = !1 : I = {}, C = {}, F(e)
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    F(e)
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      guildMembers: t
    } = e;
    I = {
      ...t
    }
  },
  CACHE_LOADED: function(e) {
    let {
      guildMembers: t
    } = e;
    A = !0, I = {
      ...t
    }
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    return H(t)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete I[t.id], P(t.id)
  },
  GUILD_MEMBER_ADD: V,
  GUILD_MEMBER_UPDATE: V,
  GUILD_MEMBER_UPDATE_LOCAL: function(e) {
    var t, n, i;
    let {
      guildId: r,
      roles: s,
      addedRoleIds: o,
      removedRoleIds: l,
      flags: u
    } = e, c = _.default.getId(), d = I[r], p = null != d ? d[c] : null;
    if (null == p) return !1;
    let h = S.default.getGuild(r);
    if (null == h) return !1;
    let f = null !== (t = O[r]) && void 0 !== t ? t : {};
    O[r] = {
      added: a.difference(a.union(null !== (n = f.added) && void 0 !== n ? n : [], o), null != l ? l : []),
      removed: a.difference(a.union(null !== (i = f.removed) && void 0 !== i ? i : [], l), null != o ? o : [])
    }, d[c] = x({
      userId: c,
      guildId: r,
      nick: p.nick,
      avatar: p.avatar,
      guildRoles: h.roles,
      roles: null != s ? s : p.roles,
      premiumSince: p.premiumSince,
      isPending: p.isPending,
      joinedAt: p.joinedAt,
      flags: null != u ? u : p.flags,
      fullProfileLoadedTimestamp: p.fullProfileLoadedTimestamp
    })
  },
  GUILD_MEMBERS_CHUNK: function(e) {
    return B(e.guildId, e.members)
  },
  GUILD_MEMBER_REMOVE: function(e) {
    let {
      guildId: t,
      user: n
    } = e, i = I[t];
    if (null == i || null == i[n.id]) return !1;
    delete i[n.id], P(t, n.id), N++
  },
  THREAD_MEMBER_LIST_UPDATE: function(e) {
    let {
      guildId: t,
      members: n
    } = e;
    return B(t, n.map(e => e.member).filter(E.isNotNullish))
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    let {
      guildId: t,
      addedMembers: n
    } = e;
    return null != n && B(t, n.map(e => e.member).filter(E.isNotNullish))
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
    let {
      guildId: t,
      owners: n
    } = e;
    return B(t, n)
  },
  LOAD_FORUM_POSTS: function(e) {
    let {
      guildId: t,
      threads: n
    } = e;
    return B(t, Object.values(n).map(e => e.owner).filter(E.isNotNullish))
  },
  GUILD_ROLE_UPDATE: j,
  GUILD_ROLE_DELETE: j,
  GUILD_ROLE_MEMBER_REMOVE: function(e) {
    let {
      guildId: t,
      userId: n,
      roleId: i
    } = e, r = I[t];
    if (null == r) return !1;
    let s = S.default.getGuild(t);
    if (null == s) return T.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), !1;
    let a = r[n];
    if (null == a || !a.roles.includes(i)) return !1;
    a.roles = a.roles.filter(e => e !== i);
    let o = G(s.roles, a.roles);
    return r[n] = {
      ...a,
      ...o
    }, !0
  },
  GUILD_ROLE_MEMBER_ADD: function(e) {
    let {
      guildId: t,
      userId: n,
      roleId: i
    } = e, r = I[t];
    if (null == r) return !1;
    let s = S.default.getGuild(t);
    if (null == s) return T.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), !1;
    let a = r[n];
    if (null == a || a.roles.includes(i)) return !1;
    a.roles.push(i);
    let o = G(s.roles, a.roles);
    return r[n] = {
      ...a,
      ...o
    }, !0
  },
  GUILD_MEMBER_PROFILE_UPDATE: function(e) {
    let {
      guildMember: t,
      guildId: n
    } = e, i = I[n];
    if (null == i) return !1;
    let r = S.default.getGuild(n);
    if (null == r) return T.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), !1;
    i[t.user.id] = x({
      userId: t.user.id,
      nick: t.nick,
      guildId: n,
      avatar: t.avatar,
      guildRoles: r.roles,
      roles: t.roles,
      premiumSince: t.premium_since,
      isPending: t.pending,
      joinedAt: t.joined_at,
      communicationDisabledUntil: t.communication_disabled_until,
      unusualDMActivityUntil: t.unusual_dm_activity_until,
      flags: t.flags,
      fullProfileLoadedTimestamp: Date.now()
    }), b(n, i[t.user.id])
  },
  IMPERSONATE_UPDATE: Y,
  IMPERSONATE_STOP: Y,
  PASSIVE_UPDATE_V1: function(e) {
    return null != e.members && B(e.guildId, e.members)
  },
  CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function(e) {
    let {
      guildId: t
    } = e;
    if (null == t) return !1;
    delete O[t]
  },
  LOCAL_MESSAGES_LOADED: function(e) {
    var t, n;
    if (null == e.guildId || null == S.default.getGuild(e.guildId)) return !1;
    A = !0, I[e.guildId] = null !== (t = I[e.guildId]) && void 0 !== t ? t : {};
    let i = !1;
    for (let t of (A = !0, I[e.guildId] = null !== (n = I[e.guildId]) && void 0 !== n ? n : {}, e.members)) null == I[e.guildId][t.userId] && (i = !0, I[e.guildId][t.userId] = t);
    return i
  },
  MESSAGE_CREATE: W,
  MESSAGE_UPDATE: W,
  LOAD_MESSAGES_SUCCESS: K,
  LOAD_MESSAGES_AROUND_SUCCESS: K,
  LOAD_PINNED_MESSAGES_SUCCESS: K,
  LOAD_RECENT_MENTIONS_SUCCESS: K,
  SEARCH_FINISH: z,
  MOD_VIEW_SEARCH_FINISH: z,
  MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function(e) {
    let {
      guildId: t,
      members: n
    } = e, i = n.map(e => {
      let {
        member: t
      } = e;
      return t
    });
    return B(t, i)
  }
})