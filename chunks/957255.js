"use strict";
n.r(t), n.d(t, {
  default: function() {
    return W
  }
}), n("222007");
var i = n("917351"),
  s = n.n(i),
  r = n("316693"),
  a = n("446674"),
  o = n("913144"),
  l = n("560208"),
  u = n("38654"),
  d = n("267567"),
  c = n("834052"),
  f = n("755624"),
  _ = n("526311"),
  h = n("233069"),
  g = n("813006"),
  m = n("766274"),
  E = n("845078"),
  p = n("991170"),
  v = n("42203"),
  S = n("926787"),
  T = n("26989"),
  I = n("305961"),
  C = n("697218"),
  A = n("49111"),
  y = n("562980");
let N = {},
  R = {},
  D = {},
  O = 0;

function P(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = N[e];
  if (null != n) return n;
  let i = C.default.getCurrentUser();
  if (null == i) return p.default.NONE;
  let s = I.default.getGuild(e);
  return null == s ? p.default.NONE : N[e] = p.default.computePermissions({
    user: i,
    context: s,
    checkElevated: t
  })
}

function b(e) {
  var t;
  let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    i = C.default.getCurrentUser();
  if (null == i) return p.default.NONE;
  let r = v.default.getChannel(e);
  if (null == r) return p.default.NONE;
  let a = r.getGuildId(),
    o = null != a && (d.default.isLurking(a) || (null === (t = T.default.getMember(a, i.id)) || void 0 === t ? void 0 : t.isPending));
  return !r.isScheduledForDeletion() && !o && s.isEmpty(r.permissionOverwrites) && null != a ? P(a) : p.default.computePermissions({
    user: i,
    context: r,
    checkElevated: n
  })
}

function L(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = R[e];
  return null != n ? n : R[e] = b(e, t)
}

function M(e) {
  if (null != e) {
    var t;
    D[e] = (null !== (t = D[e]) && void 0 !== t ? t : 0) + 1
  }
}

function U() {
  for (let e in N = {}, R = {}, D) D[e] += 1;
  O += 1
}

function k() {
  U()
}

function w() {
  U()
}

function V(e) {
  var t;
  let {
    user: n
  } = e;
  if (n.id !== (null === (t = C.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
  U()
}

function G() {
  return !0
}

function F(e) {
  let {
    guildId: t
  } = e;
  delete N[t];
  let n = v.default.getMutableBasicGuildChannelsForGuild(t);
  s.forEach(n, e => {
    delete R[e.id]
  }), O += 1, M(t)
}

function x(e) {
  let {
    instance: t
  } = e, n = v.default.getChannel(t.channel_id);
  if (null == n) return !1;
  let i = C.default.getCurrentUser(),
    s = p.default.computePermissions({
      user: i,
      context: n
    });
  if (s === R[n.id]) return !1;
  R[n.id] = s, O += 1
}

function B(e) {
  let {
    guildId: t
  } = e;
  delete N[t];
  let n = v.default.getMutableBasicGuildChannelsForGuild(t);
  s.forEach(n, e => {
    delete R[e.id]
  }), O += 1, M(t)
}

function H(e, t, n, i) {
  let s = p.default.NONE;
  if (e instanceof h.ChannelRecordBase) {
    if (h.THREAD_CHANNEL_TYPES.has(e.type)) {
      let s = v.default.getChannel(e.parent_id);
      return null == s ? p.default.NONE : p.default.applyThreadPermissions(e, H(s, t, n, i), f.default.hasJoined(e.id))
    }
    s = L(e.id)
  } else e instanceof g.default && (s = P(e.id));
  return void 0 !== t || void 0 !== n || void 0 !== i ? p.default.computePermissions({
    user: C.default.getCurrentUser(),
    context: e,
    overwrites: t,
    roles: n,
    checkElevated: !0,
    excludeGuildPermissions: i
  }) : s
}
class Y extends a.default.Store {
  initialize() {
    this.waitFor(C.default, I.default, v.default, T.default, S.default, f.default, c.default, u.default)
  }
  getChannelPermissions(e) {
    return h.THREAD_CHANNEL_TYPES.has(e.type) ? b(e.id) : L(e.id)
  }
  getGuildPermissions(e) {
    return P(e.id)
  }
  getGuildPermissionProps(e) {
    let t = C.default.getCurrentUser();
    return {
      canManageGuild: this.can(A.Permissions.MANAGE_GUILD, e),
      canManageChannels: this.can(A.Permissions.MANAGE_CHANNELS, e),
      canManageRoles: this.can(A.Permissions.MANAGE_ROLES, e),
      canManageBans: this.can(A.Permissions.BAN_MEMBERS, e),
      canManageNicknames: this.can(A.Permissions.MANAGE_NICKNAMES, e),
      canManageGuildExpressions: this.can(A.Permissions.MANAGE_GUILD_EXPRESSIONS, e) || this.can(A.Permissions.CREATE_GUILD_EXPRESSIONS, e),
      canViewAuditLog: this.can(A.Permissions.VIEW_AUDIT_LOG, e),
      canViewAuditLogV2: this.can(A.Permissions.VIEW_AUDIT_LOG, e),
      canManageWebhooks: this.can(A.Permissions.MANAGE_WEBHOOKS, e),
      canViewGuildAnalytics: this.can(A.Permissions.VIEW_GUILD_ANALYTICS, e),
      canAccessMembersPage: this.canAccessMemberSafetyPage(e),
      isGuildAdmin: this.can(A.Permissions.ADMINISTRATOR, e),
      isOwner: null != t && e.isOwner(t),
      isOwnerWithRequiredMfaLevel: null != t && e.isOwnerWithRequiredMfaLevel(t),
      guild: e
    }
  }
  canAccessMemberSafetyPage(e) {
    return r.default.hasAny(P(e.id), y.MemberSafetyPagePermissions)
  }
  canAccessGuildSettings(e) {
    return r.default.hasAny(P(e.id), p.default.VIEW_GUILD_SETTINGS)
  }
  canWithPartialContext(e, t) {
    return "channelId" in t && "string" == typeof t.channelId ? this.can(e, v.default.getChannel(t.channelId)) : "guildId" in t && "string" == typeof t.guildId && this.can(e, I.default.getGuild(t.guildId))
  }
  can(e, t, n, i, s) {
    let a = H(t, n, i, s);
    return r.default.has(a, e)
  }
  canBasicChannel(e, t, n, i, s) {
    return "basicPermissions" in t ? E.default.has(t.basicPermissions, e) : r.default.has(H(t, n, i, s), E.default.asBigFlag(e))
  }
  computePermissions(e, t, n, i) {
    return H(e, t, n, i)
  }
  computeBasicPermissions(e) {
    return "basicPermissions" in e ? e.basicPermissions : E.default.asBasicFlag(H(e))
  }
  canManageUser(e, t, n) {
    let i = t instanceof m.default ? t.id : t;
    if (n.isOwner(i)) return !1;
    let s = C.default.getCurrentUser();
    if (!this.can(e, n)) return !1;
    let r = null != s ? p.default.getHighestRole(n, s.id) : void 0,
      a = p.default.getHighestRole(n, i);
    return null != s && p.default.isRoleHigher(n, s.id, r, a)
  }
  getHighestRole(e) {
    let t = C.default.getCurrentUser();
    return null != t ? p.default.getHighestRole(e, t.id) : null
  }
  isRoleHigher(e, t, n) {
    let i = C.default.getCurrentUser(),
      s = u.default.isViewingRoles(e.id);
    return p.default.isRoleHigher(e, s ? void 0 : null == i ? void 0 : i.id, t, n)
  }
  canImpersonateRole(e, t) {
    let n = this.getHighestRole(e),
      i = this.can(A.Permissions.MANAGE_GUILD, e) && this.can(A.Permissions.MANAGE_ROLES, e),
      s = this.isRoleHigher(e, n, t);
    return i && (s || t.id === (null == n ? void 0 : n.id))
  }
  getGuildVersion(e) {
    var t;
    return null !== (t = D[e]) && void 0 !== t ? t : 0
  }
  getChannelsVersion() {
    return O
  }
}

function j() {
  R = {}, N = {}, D = {}, O = 0
}
Y.displayName = "PermissionStore";
var W = new Y(o.default, {
  BACKGROUND_SYNC: k,
  CONNECTION_OPEN: k,
  OVERLAY_INITIALIZE: k,
  CACHE_LOADED: k,
  CACHE_LOADED_LAZY: k,
  CONNECTION_CLOSED: function() {
    j()
  },
  GUILD_CREATE: w,
  GUILD_UPDATE: w,
  GUILD_DELETE: w,
  GUILD_MEMBER_ADD: V,
  GUILD_MEMBER_UPDATE: V,
  CURRENT_USER_UPDATE: V,
  CHANNEL_CREATE: function(e) {
    let {
      channel: {
        id: t
      }
    } = e, n = v.default.getChannel(t);
    if (null == n || n.isPrivate()) return !1;
    let i = C.default.getCurrentUser(),
      s = p.default.computePermissions({
        user: i,
        context: n
      });
    if (R[n.id] === s) return !1;
    R[n.id] = s, O += 1, M(n.getGuildId())
  },
  THREAD_CREATE: G,
  THREAD_UPDATE: G,
  THREAD_LIST_SYNC: G,
  LOAD_THREADS_SUCCESS: G,
  LOAD_ARCHIVED_THREADS_SUCCESS: G,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = !1;
    for (let {
        id: e
      }
      of t) {
      let t = v.default.getChannel(e);
      if (null == t || t.isPrivate()) continue;
      let i = C.default.getCurrentUser(),
        s = p.default.computePermissions({
          user: i,
          context: t
        });
      R[t.id] !== s && (R[t.id] = s, M(t.getGuildId()), n = !0)
    }
    return !!n && (O += 1, n)
  },
  LOAD_MESSAGES_SUCCESS: function(e) {
    let {
      messages: t
    } = e;
    return t.some(e => null != e.thread)
  },
  SEARCH_FINISH: function(e) {
    let {
      messages: t,
      threads: n
    } = e;
    return !!(n.length > 0) || t.some(e => e.some(e => null != e.thread))
  },
  GUILD_FEED_FETCH_SUCCESS: function(e) {
    let {
      data: t
    } = e;
    return (0, l.getThreadsFromGuildFeedFetch)(t).length > 0
  },
  THREAD_MEMBER_UPDATE: function(e) {
    var t;
    return (null === (t = C.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.userId && (M(e.guildId), !0)
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    return !!(0, _.doesThreadMembersActionAffectMe)(e) && (M(e.guildId), !0)
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return delete R[t.id], O += 1, M(t.guild_id), !1
  },
  GUILD_ROLE_CREATE: F,
  GUILD_ROLE_UPDATE: F,
  GUILD_ROLE_DELETE: F,
  LOGOUT: j,
  STAGE_INSTANCE_CREATE: x,
  STAGE_INSTANCE_UPDATE: x,
  STAGE_INSTANCE_DELETE: x,
  IMPERSONATE_UPDATE: B,
  IMPERSONATE_STOP: B
})