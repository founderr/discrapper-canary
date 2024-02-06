"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  }
}), n("222007");
var i = n("917351"),
  s = n.n(i),
  r = n("316693"),
  a = n("798609"),
  o = n("681937"),
  l = n("509"),
  u = n("38654"),
  d = n("267567"),
  c = n("755624"),
  f = n("233069"),
  _ = n("271938"),
  h = n("42203"),
  g = n("26989"),
  m = n("305961"),
  E = n("697218"),
  p = n("49111");
let v = r.default.deserialize(0),
  S = r.default.combine(...s.values(p.Permissions)),
  T = r.default.combine(p.Permissions.CREATE_INSTANT_INVITE, p.Permissions.CHANGE_NICKNAME, p.Permissions.VIEW_CHANNEL, p.Permissions.SEND_MESSAGES, p.Permissions.EMBED_LINKS, p.Permissions.ATTACH_FILES, p.Permissions.READ_MESSAGE_HISTORY, p.Permissions.MENTION_EVERYONE, p.Permissions.USE_EXTERNAL_EMOJIS, p.Permissions.USE_EXTERNAL_STICKERS, p.Permissions.ADD_REACTIONS, p.Permissions.CREATE_PUBLIC_THREADS, p.Permissions.CREATE_PRIVATE_THREADS, p.Permissions.SEND_MESSAGES_IN_THREADS, p.Permissions.CONNECT, p.Permissions.SPEAK, p.Permissions.USE_VAD, p.Permissions.STREAM, p.Permissions.USE_EMBEDDED_ACTIVITIES, p.Permissions.USE_SOUNDBOARD, p.Permissions.REQUEST_TO_SPEAK, p.Permissions.USE_APPLICATION_COMMANDS, p.Permissions.CREATE_GUILD_EXPRESSIONS, p.Permissions.CREATE_EVENTS),
  I = r.default.combine(p.Permissions.VIEW_CHANNEL, p.Permissions.READ_MESSAGE_HISTORY),
  C = r.default.combine(p.Permissions.VIEW_CHANNEL, p.Permissions.SEND_MESSAGES, p.Permissions.CONNECT, p.Permissions.SPEAK, p.Permissions.STREAM, p.Permissions.USE_EMBEDDED_ACTIVITIES, p.Permissions.USE_EXTERNAL_EMOJIS, p.Permissions.USE_EXTERNAL_SOUNDS, p.Permissions.USE_EXTERNAL_STICKERS, p.Permissions.USE_SOUNDBOARD, p.Permissions.USE_VAD),
  A = r.default.combine(p.Permissions.VIEW_CHANNEL, p.Permissions.READ_MESSAGE_HISTORY),
  y = r.default.combine(p.Permissions.VIEW_CHANNEL, p.Permissions.READ_MESSAGE_HISTORY, p.Permissions.CHANGE_NICKNAME),
  N = r.default.combine(p.Permissions.MANAGE_GUILD, p.Permissions.MANAGE_ROLES, p.Permissions.ADMINISTRATOR, p.Permissions.BAN_MEMBERS, p.Permissions.MANAGE_NICKNAMES, p.Permissions.CREATE_GUILD_EXPRESSIONS, p.Permissions.MANAGE_GUILD_EXPRESSIONS, p.Permissions.MANAGE_WEBHOOKS, p.Permissions.VIEW_AUDIT_LOG);

function R(e, t, n) {
  let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
  if (i && t.mfaLevel === p.MFALevels.ELEVATED && n === _.default.getId()) {
    var s;
    !(null === (s = E.default.getCurrentUser()) || void 0 === s ? void 0 : s.mfaEnabled) && (e = r.default.remove(e, p.ElevatedPermissions))
  }
  return e
}

function D(e, t, n, i) {
  let s = i[e];
  if (null != s && (n = r.default.remove(n, s.deny), n = r.default.add(n, s.allow)), null != t) {
    let e = v,
      s = v;
    for (let n = 0; n < t.roles.length; n++) {
      let a = i[t.roles[n]];
      null != a && (e = r.default.add(e, a.allow), s = r.default.add(s, a.deny))
    }
    n = r.default.remove(n, s), n = r.default.add(n, e);
    let a = i[t.userId];
    null != a && (n = r.default.remove(n, a.deny), n = r.default.add(n, a.allow));
    let u = r.default.has(n, p.Permissions.ADMINISTRATOR),
      d = (0, o.hasAutomodQuarantinedProfile)(t);
    d && !u && (n = r.default.filter(n, y));
    let c = (0, l.isMemberCommunicationDisabled)(t);
    c && !u && (n = r.default.filter(n, A))
  }
  return n
}

function O(e) {
  let {
    userId: t,
    member: n,
    guild: i,
    overwrites: s,
    roles: a,
    checkElevated: o = !0,
    excludeGuildPermissions: l = !1,
    lurkerPermissionsMask: u = I
  } = e;
  if (l) return D(i.id, n, v, s);
  a = null != a ? {
    ...i.roles,
    ...a
  } : i.roles;
  let c = a[i.id],
    f = null != c ? c.permissions : T;
  if (null != n)
    for (let e = 0; e < n.roles.length; e++) {
      let t = a[n.roles[e]];
      void 0 !== t && (f = r.default.add(f, t.permissions))
    }
  return f = r.default.has(f, p.Permissions.ADMINISTRATOR) ? S : D(i.id, n, f, s), (d.default.isLurking(i.id) || (null == n ? void 0 : n.isPending)) && (f = r.default.filter(f, u)), g.default.isCurrentUserGuest(i.id) && (f = r.default.filter(f, C)), R(f, i, t, o)
}

function P(e) {
  var t, n, i;
  let s, {
    user: r,
    context: a,
    overwrites: o,
    roles: l,
    checkElevated: d = !0,
    excludeGuildPermissions: _ = !1
  } = e;
  if (null == r) return v;
  let p = "string" == typeof r ? r : r.id,
    T = I;
  if (a instanceof f.ChannelRecordBase) {
    if (a.isScheduledForDeletion()) return v;
    if (f.THREAD_CHANNEL_TYPES.has(a.type)) {
      let e = h.default.getChannel(a.parent_id);
      if (null == e || e.isScheduledForDeletion()) return v;
      let t = p === (null === (n = E.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && c.default.hasJoined(a.id);
      return b(a, P({
        user: r,
        context: e,
        overwrites: o,
        roles: l,
        checkElevated: d,
        excludeGuildPermissions: _
      }), t)
    }
    T = null !== (i = a.computeLurkerPermissionsAllowList()) && void 0 !== i ? i : T;
    o = null != o ? {
      ...a.permissionOverwrites,
      ...o
    } : a.permissionOverwrites;
    let e = a.getGuildId();
    s = null != e ? m.default.getGuild(e) : null
  } else o = null != o ? o : {}, s = a;
  if (null == s) return v;
  if (!(p === (null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && u.default.isViewingRoles(s.id)) && s.isOwner(p)) return R(S, s, p, d);
  let C = g.default.getMember(s.id, p);
  return O({
    userId: p,
    member: C,
    guild: s,
    overwrites: o,
    roles: l,
    checkElevated: d,
    excludeGuildPermissions: _,
    lurkerPermissionsMask: T
  })
}

function b(e, t, n) {
  return e.type !== p.ChannelTypes.PRIVATE_THREAD || n || r.default.has(t, p.Permissions.MANAGE_THREADS) ? r.default.has(t, p.Permissions.SEND_MESSAGES_IN_THREADS) ? e.isLockedThread() && !r.default.has(t, p.Permissions.MANAGE_THREADS) ? r.default.remove(t, p.Permissions.SEND_MESSAGES) : r.default.combine(t, p.Permissions.SEND_MESSAGES) : r.default.remove(t, p.Permissions.SEND_MESSAGES) : v
}

function L(e) {
  return {
    id: e,
    type: a.PermissionOverwriteType.ROLE,
    allow: v,
    deny: v
  }
}

function M(e) {
  let {
    permission: t,
    user: n,
    context: i,
    overwrites: s,
    roles: a,
    excludeGuildPermissions: o
  } = e;
  return r.default.has(P({
    user: n,
    context: i,
    overwrites: s,
    roles: a,
    checkElevated: !0,
    excludeGuildPermissions: o
  }), t)
}
var U = {
  PASSTHROUGH: "PASSTHROUGH",
  ALLOW: "ALLOW",
  DENY: "DENY",
  NONE: v,
  DEFAULT: T,
  ALL: S,
  VIEW_GUILD_SETTINGS: N,
  computePermissionsForRoles: function e(t) {
    let n, {
        forceRoles: i,
        context: s,
        overwrites: r,
        roles: a,
        checkElevated: o = !0,
        excludeGuildPermissions: l
      } = t,
      u = I;
    if (s instanceof f.ChannelRecordBase) {
      var d;
      if (s.isScheduledForDeletion()) return v;
      if (f.THREAD_CHANNEL_TYPES.has(s.type)) {
        let t = h.default.getChannel(s.parent_id);
        return null == t ? v : b(s, e({
          forceRoles: i,
          context: t,
          overwrites: r,
          roles: a,
          checkElevated: o,
          excludeGuildPermissions: l
        }), !1)
      }
      u = null !== (d = s.computeLurkerPermissionsAllowList()) && void 0 !== d ? d : u;
      r = null != r ? {
        ...s.permissionOverwrites,
        ...r
      } : s.permissionOverwrites;
      let t = s.getGuildId();
      n = null != t ? m.default.getGuild(t) : null
    } else r = null != r ? r : {}, n = s;
    if (null == n) return v;
    let c = {
      userId: "",
      nick: "",
      guildId: n.id,
      guildMemberAvatar: null,
      roles: Object.keys(i),
      colorString: null,
      hoistRoleId: null,
      premiumSince: null,
      isPending: !1,
      joinedAt: new Date().toISOString(),
      communicationDisabledUntil: null
    };
    return O({
      userId: "",
      member: c,
      guild: n,
      overwrites: r,
      roles: a,
      checkElevated: o,
      excludeGuildPermissions: l,
      lurkerPermissionsMask: u
    })
  },
  computePermissions: P,
  applyThreadPermissions: b,
  getGuildVisualOwnerId: function(e) {
    var t;
    let n = s.some(e.roles, e => e.hoist && r.default.has(e.permissions, p.Permissions.ADMINISTRATOR));
    return n ? void 0 : null !== (t = e.ownerId) && void 0 !== t ? t : void 0
  },
  isRoleHigher: function(e, t, n, i) {
    if (null != t && e.isOwner(t)) return !0;
    if (null == n) return !1;
    let r = s(e.roles).sortBy(e => e.position).map(e => e.id).value();
    return r.indexOf(n.id) > (null != i ? r.indexOf(i.id) : -1)
  },
  getHighestRole: function(e, t) {
    let n = g.default.getMember(e.id, t);
    if (null != n) return s(e.roles).filter(e => -1 !== n.roles.indexOf(e.id)).sortBy(e => -e.position).first()
  },
  getHighestHoistedRole: function(e, t) {
    return null == t.hoistRoleId ? null : e.getRole(t.hoistRoleId)
  },
  can: M,
  canEveryoneRole(e, t) {
    let n;
    let i = {};
    if (t instanceof f.ChannelRecordBase) {
      if (t.type === p.ChannelTypes.PRIVATE_THREAD || f.THREAD_CHANNEL_TYPES.has(t.type) && null == (t = h.default.getChannel(t.parent_id))) return !1;
      i = t.permissionOverwrites;
      let e = t.getGuildId();
      n = null != e ? m.default.getGuild(e) : null
    } else n = t;
    if (null == n) return !1;
    let s = n.roles[n.id],
      a = s.permissions,
      o = i[n.id];
    return null != o && (a = r.default.remove(a, o.deny), a = r.default.add(a, o.allow)), r.default.has(a, e)
  },
  canEveryone(e, t) {
    let n;
    let i = {};
    if (t instanceof f.ChannelRecordBase) {
      if (t.type === p.ChannelTypes.PRIVATE_THREAD || f.THREAD_CHANNEL_TYPES.has(t.type) && null == (t = h.default.getChannel(t.parent_id))) return !1;
      i = t.permissionOverwrites;
      let e = t.getGuildId();
      n = null != e ? m.default.getGuild(e) : null
    } else n = t;
    if (null == n) return !1;
    let a = n.roles[n.id];
    return !(!r.default.has(a.permissions, e) || s.some(i, t => r.default.has(t.deny, e))) && !0
  },
  canManageACategory: function(e, t, n) {
    return !!M({
      permission: p.Permissions.MANAGE_CHANNELS,
      user: e,
      context: t
    }) || n.some(t => {
      let {
        channel: n
      } = t;
      return "null" !== n.id && M({
        permission: p.Permissions.MANAGE_CHANNELS,
        user: e,
        context: n
      })
    })
  },
  areChannelsLocked: function(e, t) {
    if (f.THREAD_CHANNEL_TYPES.has(e.type)) return !0;
    let {
      guild_id: n
    } = e;
    if (null == t || null == n || n !== t.guild_id) return !1;
    let i = {
        ...e.permissionOverwrites
      },
      s = {
        ...t.permissionOverwrites
      };
    return null == i[n] && (i[n] = L(n)), null == s[n] && (s[n] = L(n)), Object.keys(i).length === Object.keys(s).length && !Object.keys(i).some(e => {
      let t = i[e],
        n = s[e];
      return !(null != n && r.default.equals(n.deny, t.deny) && r.default.equals(n.allow, t.allow)) && !0
    })
  },
  makeEveryoneOverwrite: L
}