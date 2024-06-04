"use strict";
n.r(t), n.d(t, {
  HasAccessResult: function() {
    return i
  },
  computeAllowedForChannel: function() {
    return N
  },
  computeAllowedForUser: function() {
    return p
  },
  hasAccess: function() {
    return h
  }
}), n("47120");
var i, r, s = n("512722"),
  a = n.n(s),
  o = n("373793"),
  l = n("149765"),
  u = n("911969"),
  d = n("399860"),
  _ = n("131704"),
  c = n("430824"),
  E = n("895924"),
  I = n("581364"),
  T = n("807169"),
  f = n("689079"),
  S = n("981631");

function h(e, t, n) {
  let {
    context: i,
    commandType: r,
    allowNsfw: s,
    computedPermissions: d,
    userId: h,
    roleIds: A,
    isImpersonating: m,
    hasBaseAccessPermissions: O,
    hasSendMessagesPermission: C
  } = t, {
    applicationAllowedForUser: R,
    applicationAllowedForChannel: g,
    isGuildInstalled: L,
    commandBotId: v
  } = n;
  if (e.type !== r) return 2;
  if (e.nsfw && !s) return 1;
  let D = (0, T.computeCommandContextType)(i, v);
  if (null != e.contexts) {
    if (!e.contexts.includes(D)) return 4
  } else if (e.inputType === E.ApplicationCommandInputType.BOT && (!1 === e.dmPermission && D === u.InteractionContextType.BOT_DM || D === u.InteractionContextType.PRIVATE_CHANNEL)) return 4;
  if (null != e.predicate && i instanceof _.ChannelRecordBase) {
    let t = c.default.getGuild(i.guild_id);
    if (!e.predicate({
        channel: i,
        guild: t
      })) return 3
  }
  if (e.applicationId === f.BuiltInSectionId.BUILT_IN) return 0;
  let M = (0, T.getContextGuildId)(i);
  if (null == M || l.has(d, S.Permissions.ADMINISTRATOR)) return 0;
  if (!O || !C && L && (null == e.integration_types || e.integration_types.includes(o.ApplicationIntegrationType.GUILD_INSTALL))) return 5;
  if (i instanceof _.ChannelRecordBase) {
    a()(void 0 !== g, "missing applicationAllowedForChannel");
    let t = N(e.permissions, i, M);
    if (function(e) {
        return !1 === e
      }(t) || ! function(e) {
        return !0 === e
      }(t) && function(e) {
        return !1 === e
      }(g)) return 6
  }
  let y = p(e.permissions, M, h, A, m);
  return function(e) {
    return !0 === e
  }(y) ? 0 : function(e) {
    return !1 === e
  }(y) ? 7 : function(e) {
    return !1 === e
  }(R) || null != e.defaultMemberPermissions && !(!l.equals(e.defaultMemberPermissions, I.DISABLED_BY_DEFAULT_PERMISSION_FLAG) && l.has(d, e.defaultMemberPermissions)) ? 7 : 0
}

function A(e) {
  return !0 === e
}

function m(e) {
  return !1 === e
}

function N(e, t, n) {
  if (null == e) return null;
  let i = t.id;
  if (t.isThread()) {
    var r;
    i = null !== (r = t.parent_id) && void 0 !== r ? r : t.id
  }
  let s = e[(0, d.toPermissionKey)(i, E.ApplicationCommandPermissionType.CHANNEL)];
  if (null != s) return s.permission;
  let a = e[(0, d.toPermissionKey)((0, I.allChannelsSentinel)(n), E.ApplicationCommandPermissionType.CHANNEL)];
  return null != a ? a.permission : null
}

function p(e, t, n, i, r) {
  if (null == e) return null;
  if (!r) {
    let t = e[(0, d.toPermissionKey)(n, E.ApplicationCommandPermissionType.USER)];
    if (null != t) return t.permission
  }
  let s = !1;
  for (let t of i) {
    let n = e[(0, d.toPermissionKey)(t, E.ApplicationCommandPermissionType.ROLE)];
    if (null != n) {
      if (n.permission) return !0;
      s = !0
    }
  }
  if (s) return !1;
  let a = e[(0, d.toPermissionKey)(t, E.ApplicationCommandPermissionType.ROLE)];
  return null != a ? a.permission : null
}(r = i || (i = {}))[r.ALLOWED = 0] = "ALLOWED", r[r.NSFW_NOT_ALLOWED = 1] = "NSFW_NOT_ALLOWED", r[r.WRONG_COMMAND_TYPE = 2] = "WRONG_COMMAND_TYPE", r[r.PREDICATE_FAILED = 3] = "PREDICATE_FAILED", r[r.CONTEXT_NOT_ALLOWED = 4] = "CONTEXT_NOT_ALLOWED", r[r.MISSING_BASE_PERMISSIONS = 5] = "MISSING_BASE_PERMISSIONS", r[r.CHANNEL_DENIED = 6] = "CHANNEL_DENIED", r[r.USER_DENIED = 7] = "USER_DENIED"