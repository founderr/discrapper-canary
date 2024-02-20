"use strict";
n.r(t), n.d(t, {
  default: function() {
    return K
  }
}), n("222007");
var i = n("917351"),
  r = n.n(i),
  s = n("316693"),
  a = n("446674"),
  o = n("913144"),
  l = n("560208"),
  u = n("38654"),
  c = n("267567"),
  d = n("834052"),
  p = n("755624"),
  h = n("526311"),
  f = n("233069"),
  E = n("813006"),
  _ = n("766274"),
  m = n("845078"),
  S = n("991170"),
  g = n("42203"),
  T = n("926787"),
  I = n("26989"),
  v = n("305961"),
  C = n("697218"),
  A = n("49111"),
  R = n("562980");
let N = {},
  y = {},
  O = {},
  D = 0;

function b(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = N[e];
  if (null != n) return n;
  let i = C.default.getCurrentUser();
  if (null == i) return S.default.NONE;
  let r = v.default.getGuild(e);
  return null == r ? S.default.NONE : N[e] = S.default.computePermissions({
    user: i,
    context: r,
    checkElevated: t
  })
}

function P(e) {
  var t;
  let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    i = C.default.getCurrentUser();
  if (null == i) return S.default.NONE;
  let s = g.default.getChannel(e);
  if (null == s) return S.default.NONE;
  let a = s.getGuildId(),
    o = null != a && (c.default.isLurking(a) || (null === (t = I.default.getMember(a, i.id)) || void 0 === t ? void 0 : t.isPending));
  return !s.isScheduledForDeletion() && !o && r.isEmpty(s.permissionOverwrites) && null != a ? b(a) : S.default.computePermissions({
    user: i,
    context: s,
    checkElevated: n
  })
}

function L(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = y[e];
  return null != n ? n : y[e] = P(e, t)
}

function M(e) {
  if (null != e) {
    var t;
    O[e] = (null !== (t = O[e]) && void 0 !== t ? t : 0) + 1
  }
}

function U() {
  for (let e in N = {}, y = {}, O) O[e] += 1;
  D += 1
}

function w() {
  U()
}

function k() {
  U()
}

function G(e) {
  var t;
  let {
    user: n
  } = e;
  if (n.id !== (null === (t = C.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
  U()
}

function x() {
  return !0
}

function F(e) {
  let {
    messages: t,
    threads: n
  } = e;
  return !!(n.length > 0) || t.some(e => e.some(e => null != e.thread))
}

function V(e) {
  let {
    guildId: t
  } = e;
  delete N[t];
  let n = g.default.getMutableBasicGuildChannelsForGuild(t);
  r.forEach(n, e => {
    delete y[e.id]
  }), D += 1, M(t)
}

function B(e) {
  let {
    instance: t
  } = e, n = g.default.getChannel(t.channel_id);
  if (null == n) return !1;
  let i = C.default.getCurrentUser(),
    r = S.default.computePermissions({
      user: i,
      context: n
    });
  if (r === y[n.id]) return !1;
  y[n.id] = r, D += 1
}

function H(e) {
  let {
    guildId: t
  } = e;
  delete N[t];
  let n = g.default.getMutableBasicGuildChannelsForGuild(t);
  r.forEach(n, e => {
    delete y[e.id]
  }), D += 1, M(t)
}

function j(e, t, n, i) {
  let r = S.default.NONE;
  if (e instanceof f.ChannelRecordBase) {
    if (f.THREAD_CHANNEL_TYPES.has(e.type)) {
      let r = g.default.getChannel(e.parent_id);
      return null == r ? S.default.NONE : S.default.applyThreadPermissions(e, j(r, t, n, i), p.default.hasJoined(e.id))
    }
    r = L(e.id)
  } else e instanceof E.default && (r = b(e.id));
  return void 0 !== t || void 0 !== n || void 0 !== i ? S.default.computePermissions({
    user: C.default.getCurrentUser(),
    context: e,
    overwrites: t,
    roles: n,
    checkElevated: !0,
    excludeGuildPermissions: i
  }) : r
}
class Y extends a.default.Store {
  initialize() {
    this.waitFor(C.default, v.default, g.default, I.default, T.default, p.default, d.default, u.default)
  }
  getChannelPermissions(e) {
    return f.THREAD_CHANNEL_TYPES.has(e.type) ? P(e.id) : L(e.id)
  }
  getGuildPermissions(e) {
    return b(e.id)
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
    return s.default.hasAny(b(e.id), R.MemberSafetyPagePermissions)
  }
  canAccessGuildSettings(e) {
    return s.default.hasAny(b(e.id), S.default.VIEW_GUILD_SETTINGS)
  }
  canWithPartialContext(e, t) {
    return "channelId" in t && "string" == typeof t.channelId ? this.can(e, g.default.getChannel(t.channelId)) : "guildId" in t && "string" == typeof t.guildId && this.can(e, v.default.getGuild(t.guildId))
  }
  can(e, t, n, i, r) {
    let a = j(t, n, i, r);
    return s.default.has(a, e)
  }
  canBasicChannel(e, t, n, i, r) {
    return "basicPermissions" in t ? m.default.has(t.basicPermissions, e) : s.default.has(j(t, n, i, r), m.default.asBigFlag(e))
  }
  computePermissions(e, t, n, i) {
    return j(e, t, n, i)
  }
  computeBasicPermissions(e) {
    return "basicPermissions" in e ? e.basicPermissions : m.default.asBasicFlag(j(e))
  }
  canManageUser(e, t, n) {
    let i = t instanceof _.default ? t.id : t;
    if (n.isOwner(i)) return !1;
    let r = C.default.getCurrentUser();
    if (!this.can(e, n)) return !1;
    let s = null != r ? S.default.getHighestRole(n, r.id) : void 0,
      a = S.default.getHighestRole(n, i);
    return null != r && S.default.isRoleHigher(n, r.id, s, a)
  }
  getHighestRole(e) {
    let t = C.default.getCurrentUser();
    return null != t ? S.default.getHighestRole(e, t.id) : null
  }
  isRoleHigher(e, t, n) {
    let i = C.default.getCurrentUser(),
      r = u.default.isViewingRoles(e.id);
    return S.default.isRoleHigher(e, r ? void 0 : null == i ? void 0 : i.id, t, n)
  }
  canImpersonateRole(e, t) {
    let n = this.getHighestRole(e),
      i = this.can(A.Permissions.MANAGE_GUILD, e) && this.can(A.Permissions.MANAGE_ROLES, e),
      r = this.isRoleHigher(e, n, t);
    return i && (r || t.id === (null == n ? void 0 : n.id))
  }
  getGuildVersion(e) {
    var t;
    return null !== (t = O[e]) && void 0 !== t ? t : 0
  }
  getChannelsVersion() {
    return D
  }
}

function W() {
  y = {}, N = {}, O = {}, D = 0
}
Y.displayName = "PermissionStore";
var K = new Y(o.default, {
  BACKGROUND_SYNC: w,
  CONNECTION_OPEN: w,
  OVERLAY_INITIALIZE: w,
  CACHE_LOADED: w,
  CACHE_LOADED_LAZY: w,
  CONNECTION_CLOSED: function() {
    W()
  },
  GUILD_CREATE: k,
  GUILD_UPDATE: k,
  GUILD_DELETE: k,
  GUILD_MEMBER_ADD: G,
  GUILD_MEMBER_UPDATE: G,
  CURRENT_USER_UPDATE: G,
  CHANNEL_CREATE: function(e) {
    let {
      channel: {
        id: t
      }
    } = e, n = g.default.getChannel(t);
    if (null == n || n.isPrivate()) return !1;
    let i = C.default.getCurrentUser(),
      r = S.default.computePermissions({
        user: i,
        context: n
      });
    if (y[n.id] === r) return !1;
    y[n.id] = r, D += 1, M(n.getGuildId())
  },
  THREAD_CREATE: x,
  THREAD_UPDATE: x,
  THREAD_LIST_SYNC: x,
  LOAD_THREADS_SUCCESS: x,
  LOAD_ARCHIVED_THREADS_SUCCESS: x,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = !1;
    for (let {
        id: e
      }
      of t) {
      let t = g.default.getChannel(e);
      if (null == t || t.isPrivate()) continue;
      let i = C.default.getCurrentUser(),
        r = S.default.computePermissions({
          user: i,
          context: t
        });
      y[t.id] !== r && (y[t.id] = r, M(t.getGuildId()), n = !0)
    }
    return !!n && (D += 1, n)
  },
  LOAD_MESSAGES_SUCCESS: function(e) {
    let {
      messages: t
    } = e;
    return t.some(e => null != e.thread)
  },
  SEARCH_FINISH: F,
  MOD_VIEW_SEARCH_FINISH: F,
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
    return !!(0, h.doesThreadMembersActionAffectMe)(e) && (M(e.guildId), !0)
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return delete y[t.id], D += 1, M(t.guild_id), !1
  },
  GUILD_ROLE_CREATE: V,
  GUILD_ROLE_UPDATE: V,
  GUILD_ROLE_DELETE: V,
  LOGOUT: W,
  STAGE_INSTANCE_CREATE: B,
  STAGE_INSTANCE_UPDATE: B,
  STAGE_INSTANCE_DELETE: B,
  IMPERSONATE_UPDATE: H,
  IMPERSONATE_STOP: H
})