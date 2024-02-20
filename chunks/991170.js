"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  }
}), n("222007");
var i = n("917351"),
  r = n.n(i),
  s = n("316693"),
  a = n("798609"),
  o = n("681937"),
  l = n("509"),
  u = n("38654"),
  c = n("267567"),
  d = n("755624"),
  p = n("233069"),
  h = n("271938"),
  f = n("42203"),
  E = n("26989"),
  _ = n("305961"),
  m = n("697218"),
  S = n("49111");
let g = s.default.deserialize(0),
  T = s.default.combine(...r.values(S.Permissions)),
  I = s.default.combine(S.Permissions.CREATE_INSTANT_INVITE, S.Permissions.CHANGE_NICKNAME, S.Permissions.VIEW_CHANNEL, S.Permissions.SEND_MESSAGES, S.Permissions.EMBED_LINKS, S.Permissions.ATTACH_FILES, S.Permissions.READ_MESSAGE_HISTORY, S.Permissions.MENTION_EVERYONE, S.Permissions.USE_EXTERNAL_EMOJIS, S.Permissions.USE_EXTERNAL_STICKERS, S.Permissions.ADD_REACTIONS, S.Permissions.CREATE_PUBLIC_THREADS, S.Permissions.CREATE_PRIVATE_THREADS, S.Permissions.SEND_MESSAGES_IN_THREADS, S.Permissions.CONNECT, S.Permissions.SPEAK, S.Permissions.USE_VAD, S.Permissions.STREAM, S.Permissions.USE_EMBEDDED_ACTIVITIES, S.Permissions.USE_SOUNDBOARD, S.Permissions.REQUEST_TO_SPEAK, S.Permissions.USE_APPLICATION_COMMANDS, S.Permissions.CREATE_GUILD_EXPRESSIONS, S.Permissions.CREATE_EVENTS),
  v = s.default.combine(S.Permissions.VIEW_CHANNEL, S.Permissions.READ_MESSAGE_HISTORY),
  C = s.default.combine(S.Permissions.VIEW_CHANNEL, S.Permissions.SEND_MESSAGES, S.Permissions.CONNECT, S.Permissions.SPEAK, S.Permissions.STREAM, S.Permissions.USE_EMBEDDED_ACTIVITIES, S.Permissions.USE_EXTERNAL_EMOJIS, S.Permissions.USE_EXTERNAL_SOUNDS, S.Permissions.USE_EXTERNAL_STICKERS, S.Permissions.USE_SOUNDBOARD, S.Permissions.USE_VAD),
  A = s.default.combine(S.Permissions.VIEW_CHANNEL, S.Permissions.READ_MESSAGE_HISTORY),
  R = s.default.combine(S.Permissions.VIEW_CHANNEL, S.Permissions.READ_MESSAGE_HISTORY, S.Permissions.CHANGE_NICKNAME),
  N = s.default.combine(S.Permissions.MANAGE_GUILD, S.Permissions.MANAGE_ROLES, S.Permissions.ADMINISTRATOR, S.Permissions.BAN_MEMBERS, S.Permissions.MANAGE_NICKNAMES, S.Permissions.CREATE_GUILD_EXPRESSIONS, S.Permissions.MANAGE_GUILD_EXPRESSIONS, S.Permissions.MANAGE_WEBHOOKS, S.Permissions.VIEW_AUDIT_LOG);

function y(e, t, n) {
  let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
  if (i && t.mfaLevel === S.MFALevels.ELEVATED && n === h.default.getId()) {
    var r;
    !(null === (r = m.default.getCurrentUser()) || void 0 === r ? void 0 : r.mfaEnabled) && (e = s.default.remove(e, S.ElevatedPermissions))
  }
  return e
}

function O(e, t, n, i) {
  let r = i[e];
  if (null != r && (n = s.default.remove(n, r.deny), n = s.default.add(n, r.allow)), null != t) {
    let e = g,
      r = g;
    for (let n = 0; n < t.roles.length; n++) {
      let a = i[t.roles[n]];
      null != a && (e = s.default.add(e, a.allow), r = s.default.add(r, a.deny))
    }
    n = s.default.remove(n, r), n = s.default.add(n, e);
    let a = i[t.userId];
    null != a && (n = s.default.remove(n, a.deny), n = s.default.add(n, a.allow));
    let u = s.default.has(n, S.Permissions.ADMINISTRATOR),
      c = (0, o.hasAutomodQuarantinedProfile)(t);
    c && !u && (n = s.default.filter(n, R));
    let d = (0, l.isMemberCommunicationDisabled)(t);
    d && !u && (n = s.default.filter(n, A))
  }
  return n
}

function D(e) {
  let {
    userId: t,
    member: n,
    guild: i,
    overwrites: r,
    roles: a,
    checkElevated: o = !0,
    excludeGuildPermissions: l = !1,
    lurkerPermissionsMask: u = v
  } = e;
  if (l) return O(i.id, n, g, r);
  a = null != a ? {
    ...i.roles,
    ...a
  } : i.roles;
  let d = a[i.id],
    p = null != d ? d.permissions : I;
  if (null != n)
    for (let e = 0; e < n.roles.length; e++) {
      let t = a[n.roles[e]];
      void 0 !== t && (p = s.default.add(p, t.permissions))
    }
  return p = s.default.has(p, S.Permissions.ADMINISTRATOR) ? T : O(i.id, n, p, r), (c.default.isLurking(i.id) || (null == n ? void 0 : n.isPending)) && (p = s.default.filter(p, u)), E.default.isCurrentUserGuest(i.id) && (p = s.default.filter(p, C)), y(p, i, t, o)
}

function b(e) {
  var t, n, i;
  let r, {
    user: s,
    context: a,
    overwrites: o,
    roles: l,
    checkElevated: c = !0,
    excludeGuildPermissions: h = !1
  } = e;
  if (null == s) return g;
  let S = "string" == typeof s ? s : s.id,
    I = v;
  if (a instanceof p.ChannelRecordBase) {
    if (a.isScheduledForDeletion()) return g;
    if (p.THREAD_CHANNEL_TYPES.has(a.type)) {
      let e = f.default.getChannel(a.parent_id);
      if (null == e || e.isScheduledForDeletion()) return g;
      let t = S === (null === (n = m.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && d.default.hasJoined(a.id);
      return P(a, b({
        user: s,
        context: e,
        overwrites: o,
        roles: l,
        checkElevated: c,
        excludeGuildPermissions: h
      }), t)
    }
    I = null !== (i = a.computeLurkerPermissionsAllowList()) && void 0 !== i ? i : I;
    o = null != o ? {
      ...a.permissionOverwrites,
      ...o
    } : a.permissionOverwrites;
    let e = a.getGuildId();
    r = null != e ? _.default.getGuild(e) : null
  } else o = null != o ? o : {}, r = a;
  if (null == r) return g;
  if (!(S === (null === (t = m.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && u.default.isViewingRoles(r.id)) && r.isOwner(S)) return y(T, r, S, c);
  let C = E.default.getMember(r.id, S);
  return D({
    userId: S,
    member: C,
    guild: r,
    overwrites: o,
    roles: l,
    checkElevated: c,
    excludeGuildPermissions: h,
    lurkerPermissionsMask: I
  })
}

function P(e, t, n) {
  return e.type !== S.ChannelTypes.PRIVATE_THREAD || n || s.default.has(t, S.Permissions.MANAGE_THREADS) ? s.default.has(t, S.Permissions.SEND_MESSAGES_IN_THREADS) ? e.isLockedThread() && !s.default.has(t, S.Permissions.MANAGE_THREADS) ? s.default.remove(t, S.Permissions.SEND_MESSAGES) : s.default.combine(t, S.Permissions.SEND_MESSAGES) : s.default.remove(t, S.Permissions.SEND_MESSAGES) : g
}

function L(e) {
  return {
    id: e,
    type: a.PermissionOverwriteType.ROLE,
    allow: g,
    deny: g
  }
}

function M(e) {
  let {
    permission: t,
    user: n,
    context: i,
    overwrites: r,
    roles: a,
    excludeGuildPermissions: o
  } = e;
  return s.default.has(b({
    user: n,
    context: i,
    overwrites: r,
    roles: a,
    checkElevated: !0,
    excludeGuildPermissions: o
  }), t)
}
var U = {
  PASSTHROUGH: "PASSTHROUGH",
  ALLOW: "ALLOW",
  DENY: "DENY",
  NONE: g,
  DEFAULT: I,
  ALL: T,
  VIEW_GUILD_SETTINGS: N,
  computePermissionsForRoles: function e(t) {
    let n, {
        forceRoles: i,
        context: r,
        overwrites: s,
        roles: a,
        checkElevated: o = !0,
        excludeGuildPermissions: l
      } = t,
      u = v;
    if (r instanceof p.ChannelRecordBase) {
      var c;
      if (r.isScheduledForDeletion()) return g;
      if (p.THREAD_CHANNEL_TYPES.has(r.type)) {
        let t = f.default.getChannel(r.parent_id);
        return null == t ? g : P(r, e({
          forceRoles: i,
          context: t,
          overwrites: s,
          roles: a,
          checkElevated: o,
          excludeGuildPermissions: l
        }), !1)
      }
      u = null !== (c = r.computeLurkerPermissionsAllowList()) && void 0 !== c ? c : u;
      s = null != s ? {
        ...r.permissionOverwrites,
        ...s
      } : r.permissionOverwrites;
      let t = r.getGuildId();
      n = null != t ? _.default.getGuild(t) : null
    } else s = null != s ? s : {}, n = r;
    if (null == n) return g;
    let d = {
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
    return D({
      userId: "",
      member: d,
      guild: n,
      overwrites: s,
      roles: a,
      checkElevated: o,
      excludeGuildPermissions: l,
      lurkerPermissionsMask: u
    })
  },
  computePermissions: b,
  applyThreadPermissions: P,
  getGuildVisualOwnerId: function(e) {
    var t;
    let n = r.some(e.roles, e => e.hoist && s.default.has(e.permissions, S.Permissions.ADMINISTRATOR));
    return n ? void 0 : null !== (t = e.ownerId) && void 0 !== t ? t : void 0
  },
  isRoleHigher: function(e, t, n, i) {
    if (null != t && e.isOwner(t)) return !0;
    if (null == n) return !1;
    let s = r(e.roles).sortBy(e => e.position).map(e => e.id).value();
    return s.indexOf(n.id) > (null != i ? s.indexOf(i.id) : -1)
  },
  getHighestRole: function(e, t) {
    let n = E.default.getMember(e.id, t);
    if (null != n) return r(e.roles).filter(e => -1 !== n.roles.indexOf(e.id)).sortBy(e => -e.position).first()
  },
  getHighestHoistedRole: function(e, t) {
    return null == t.hoistRoleId ? null : e.getRole(t.hoistRoleId)
  },
  can: M,
  canEveryoneRole(e, t) {
    let n;
    let i = {};
    if (t instanceof p.ChannelRecordBase) {
      if (t.type === S.ChannelTypes.PRIVATE_THREAD || p.THREAD_CHANNEL_TYPES.has(t.type) && null == (t = f.default.getChannel(t.parent_id))) return !1;
      i = t.permissionOverwrites;
      let e = t.getGuildId();
      n = null != e ? _.default.getGuild(e) : null
    } else n = t;
    if (null == n) return !1;
    let r = n.roles[n.id],
      a = r.permissions,
      o = i[n.id];
    return null != o && (a = s.default.remove(a, o.deny), a = s.default.add(a, o.allow)), s.default.has(a, e)
  },
  canEveryone(e, t) {
    let n;
    let i = {};
    if (t instanceof p.ChannelRecordBase) {
      if (t.type === S.ChannelTypes.PRIVATE_THREAD || p.THREAD_CHANNEL_TYPES.has(t.type) && null == (t = f.default.getChannel(t.parent_id))) return !1;
      i = t.permissionOverwrites;
      let e = t.getGuildId();
      n = null != e ? _.default.getGuild(e) : null
    } else n = t;
    if (null == n) return !1;
    let a = n.roles[n.id];
    return !(!s.default.has(a.permissions, e) || r.some(i, t => s.default.has(t.deny, e))) && !0
  },
  canManageACategory: function(e, t, n) {
    return !!M({
      permission: S.Permissions.MANAGE_CHANNELS,
      user: e,
      context: t
    }) || n.some(t => {
      let {
        channel: n
      } = t;
      return "null" !== n.id && M({
        permission: S.Permissions.MANAGE_CHANNELS,
        user: e,
        context: n
      })
    })
  },
  areChannelsLocked: function(e, t) {
    if (p.THREAD_CHANNEL_TYPES.has(e.type)) return !0;
    let {
      guild_id: n
    } = e;
    if (null == t || null == n || n !== t.guild_id) return !1;
    let i = {
        ...e.permissionOverwrites
      },
      r = {
        ...t.permissionOverwrites
      };
    return null == i[n] && (i[n] = L(n)), null == r[n] && (r[n] = L(n)), Object.keys(i).length === Object.keys(r).length && !Object.keys(i).some(e => {
      let t = i[e],
        n = r[e];
      return !(null != n && s.default.equals(n.deny, t.deny) && s.default.equals(n.allow, t.allow)) && !0
    })
  },
  makeEveryoneOverwrite: L
}