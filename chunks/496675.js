"use strict";
n.r(t), n("47120");
var i, r, s, a, o = n("392711"),
  l = n.n(o),
  u = n("149765"),
  d = n("442837"),
  _ = n("570140"),
  c = n("160404"),
  E = n("41776"),
  I = n("427679"),
  T = n("569471"),
  f = n("195663"),
  S = n("131704"),
  h = n("601964"),
  A = n("598077"),
  m = n("386438"),
  N = n("700785"),
  p = n("592125"),
  O = n("683301"),
  C = n("271383"),
  R = n("430824"),
  g = n("594174"),
  L = n("981631"),
  v = n("478743");
let D = {},
  M = {},
  y = {},
  P = 0;

function U(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = D[e];
  if (null != n) return n;
  let i = g.default.getCurrentUser();
  if (null == i) return N.NONE;
  let r = R.default.getGuild(e);
  return null == r ? N.NONE : D[e] = N.computePermissions({
    user: i,
    context: r,
    checkElevated: t
  })
}

function b(e) {
  var t;
  let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    i = g.default.getCurrentUser();
  if (null == i) return N.NONE;
  let r = p.default.getChannel(e);
  if (null == r) return N.NONE;
  let s = r.getGuildId(),
    a = null != s && (E.default.isLurking(s) || (null === (t = C.default.getMember(s, i.id)) || void 0 === t ? void 0 : t.isPending));
  return !r.isScheduledForDeletion() && !a && l().isEmpty(r.permissionOverwrites) && null != s ? U(s) : N.computePermissions({
    user: i,
    context: r,
    checkElevated: n
  })
}

function G(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = M[e];
  return null != n ? n : M[e] = b(e, t)
}

function w(e) {
  if (null != e) {
    var t;
    y[e] = (null !== (t = y[e]) && void 0 !== t ? t : 0) + 1
  }
}

function k() {
  for (let e in D = {}, M = {}, y) y[e] += 1;
  P += 1
}

function B() {
  k()
}

function x() {
  k()
}

function V(e) {
  var t;
  let {
    user: n
  } = e;
  if (n.id !== (null === (t = g.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
  k()
}

function F() {
  return !0
}

function H(e) {
  let {
    messages: t,
    threads: n
  } = e;
  return !!(n.length > 0) || t.some(e => e.some(e => null != e.thread))
}

function Y(e) {
  let {
    guildId: t
  } = e;
  delete D[t];
  let n = p.default.getMutableBasicGuildChannelsForGuild(t);
  l().forEach(n, e => {
    delete M[e.id]
  }), P += 1, w(t)
}

function j(e) {
  let {
    instance: t
  } = e, n = p.default.getChannel(t.channel_id);
  if (null == n) return !1;
  let i = g.default.getCurrentUser(),
    r = N.computePermissions({
      user: i,
      context: n
    });
  if (r === M[n.id]) return !1;
  M[n.id] = r, P += 1
}

function W(e) {
  let {
    guildId: t
  } = e;
  delete D[t];
  let n = p.default.getMutableBasicGuildChannelsForGuild(t);
  l().forEach(n, e => {
    delete M[e.id]
  }), P += 1, w(t)
}

function K(e, t, n, i) {
  let r = N.NONE;
  if (e instanceof S.ChannelRecordBase) {
    if (S.THREAD_CHANNEL_TYPES.has(e.type)) {
      let r = p.default.getChannel(e.parent_id);
      return null == r ? N.NONE : N.applyThreadPermissions(e, K(r, t, n, i), T.default.hasJoined(e.id))
    }
    r = G(e.id)
  } else e instanceof h.default && (r = U(e.id));
  return void 0 !== t || void 0 !== n || void 0 !== i ? N.computePermissions({
    user: g.default.getCurrentUser(),
    context: e,
    overwrites: t,
    roles: n,
    checkElevated: !0,
    excludeGuildPermissions: i
  }) : r
}
class z extends(i = d.default.Store) {
  initialize() {
    this.waitFor(g.default, R.default, p.default, C.default, O.default, T.default, I.default, c.default)
  }
  getChannelPermissions(e) {
    return S.THREAD_CHANNEL_TYPES.has(e.type) ? b(e.id) : G(e.id)
  }
  getGuildPermissions(e) {
    return U(e.id)
  }
  getGuildPermissionProps(e) {
    let t = g.default.getCurrentUser();
    return {
      canManageGuild: this.can(L.Permissions.MANAGE_GUILD, e),
      canManageChannels: this.can(L.Permissions.MANAGE_CHANNELS, e),
      canManageRoles: this.can(L.Permissions.MANAGE_ROLES, e),
      canManageBans: this.can(L.Permissions.BAN_MEMBERS, e),
      canManageNicknames: this.can(L.Permissions.MANAGE_NICKNAMES, e),
      canManageGuildExpressions: this.can(L.Permissions.MANAGE_GUILD_EXPRESSIONS, e) || this.can(L.Permissions.CREATE_GUILD_EXPRESSIONS, e),
      canViewAuditLog: this.can(L.Permissions.VIEW_AUDIT_LOG, e),
      canViewAuditLogV2: this.can(L.Permissions.VIEW_AUDIT_LOG, e),
      canManageWebhooks: this.can(L.Permissions.MANAGE_WEBHOOKS, e),
      canViewGuildAnalytics: this.can(L.Permissions.VIEW_GUILD_ANALYTICS, e),
      canAccessMembersPage: this.canAccessMemberSafetyPage(e),
      isGuildAdmin: this.can(L.Permissions.ADMINISTRATOR, e),
      isOwner: null != t && e.isOwner(t),
      isOwnerWithRequiredMfaLevel: null != t && e.isOwnerWithRequiredMfaLevel(t),
      guild: e
    }
  }
  canAccessMemberSafetyPage(e) {
    return u.hasAny(U(e.id), v.MemberSafetyPagePermissions)
  }
  canAccessGuildSettings(e) {
    return u.hasAny(U(e.id), N.VIEW_GUILD_SETTINGS)
  }
  canWithPartialContext(e, t) {
    return "channelId" in t && "string" == typeof t.channelId ? this.can(e, p.default.getChannel(t.channelId)) : "guildId" in t && "string" == typeof t.guildId && this.can(e, R.default.getGuild(t.guildId))
  }
  can(e, t, n, i, r) {
    let s = K(t, n, i, r);
    return u.has(s, e)
  }
  canBasicChannel(e, t, n, i, r) {
    return "basicPermissions" in t ? m.default.has(t.basicPermissions, e) : u.has(K(t, n, i, r), m.default.asBigFlag(e))
  }
  computePermissions(e, t, n, i) {
    return K(e, t, n, i)
  }
  computeBasicPermissions(e) {
    return "basicPermissions" in e ? e.basicPermissions : m.default.asBasicFlag(K(e))
  }
  canManageUser(e, t, n) {
    let i = t instanceof A.default ? t.id : t;
    if (n.isOwner(i)) return !1;
    let r = g.default.getCurrentUser();
    if (!this.can(e, n)) return !1;
    let s = null != r ? N.getHighestRole(n, r.id) : void 0,
      a = N.getHighestRole(n, i);
    return null != r && N.isRoleHigher(n, r.id, s, a)
  }
  getHighestRole(e) {
    let t = g.default.getCurrentUser();
    return null != t ? N.getHighestRole(e, t.id) : null
  }
  isRoleHigher(e, t, n) {
    let i = g.default.getCurrentUser(),
      r = c.default.isViewingRoles(e.id);
    return N.isRoleHigher(e, r ? void 0 : null == i ? void 0 : i.id, t, n)
  }
  canImpersonateRole(e, t) {
    let n = this.getHighestRole(e),
      i = this.can(L.Permissions.MANAGE_GUILD, e) && this.can(L.Permissions.MANAGE_ROLES, e),
      r = this.isRoleHigher(e, n, t);
    return i && (r || t.id === (null == n ? void 0 : n.id))
  }
  getGuildVersion(e) {
    var t;
    return null !== (t = y[e]) && void 0 !== t ? t : 0
  }
  getChannelsVersion() {
    return P
  }
}

function Z() {
  M = {}, D = {}, y = {}, P = 0
}
a = "PermissionStore", (s = "displayName") in(r = z) ? Object.defineProperty(r, s, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = a, t.default = new z(_.default, {
  BACKGROUND_SYNC: B,
  CONNECTION_OPEN: B,
  OVERLAY_INITIALIZE: B,
  CACHE_LOADED: B,
  CACHE_LOADED_LAZY: B,
  CONNECTION_CLOSED: function() {
    Z()
  },
  GUILD_CREATE: x,
  GUILD_UPDATE: x,
  GUILD_DELETE: x,
  GUILD_MEMBER_ADD: V,
  GUILD_MEMBER_UPDATE: V,
  CURRENT_USER_UPDATE: V,
  CHANNEL_CREATE: function(e) {
    let {
      channel: {
        id: t
      }
    } = e, n = p.default.getChannel(t);
    if (null == n || n.isPrivate()) return !1;
    let i = g.default.getCurrentUser(),
      r = N.computePermissions({
        user: i,
        context: n
      });
    if (M[n.id] === r) return !1;
    M[n.id] = r, P += 1, w(n.getGuildId())
  },
  THREAD_CREATE: F,
  THREAD_UPDATE: F,
  THREAD_LIST_SYNC: F,
  LOAD_THREADS_SUCCESS: F,
  LOAD_ARCHIVED_THREADS_SUCCESS: F,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = !1;
    for (let {
        id: e
      }
      of t) {
      let t = p.default.getChannel(e);
      if (null == t || t.isPrivate()) continue;
      let i = g.default.getCurrentUser(),
        r = N.computePermissions({
          user: i,
          context: t
        });
      M[t.id] !== r && (M[t.id] = r, w(t.getGuildId()), n = !0)
    }
    return !!n && (P += 1, n)
  },
  LOAD_MESSAGES_SUCCESS: function(e) {
    let {
      messages: t
    } = e;
    return t.some(e => null != e.thread)
  },
  SEARCH_FINISH: H,
  MOD_VIEW_SEARCH_FINISH: H,
  THREAD_MEMBER_UPDATE: function(e) {
    var t;
    return (null === (t = g.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.userId && (w(e.guildId), !0)
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    return !!(0, f.doesThreadMembersActionAffectMe)(e) && (w(e.guildId), !0)
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return delete M[t.id], P += 1, w(t.guild_id), !1
  },
  GUILD_ROLE_CREATE: Y,
  GUILD_ROLE_UPDATE: Y,
  GUILD_ROLE_DELETE: Y,
  LOGOUT: Z,
  STAGE_INSTANCE_CREATE: j,
  STAGE_INSTANCE_UPDATE: j,
  STAGE_INSTANCE_DELETE: j,
  IMPERSONATE_UPDATE: W,
  IMPERSONATE_STOP: W
})