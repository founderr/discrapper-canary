"use strict";
n.d(t, {
  BT: function() {
    return k
  },
  Hn: function() {
    return N
  },
  Hu: function() {
    return x
  },
  I0: function() {
    return function e(t) {
      let n, {
          forceRoles: i,
          context: r,
          overwrites: s,
          roles: o,
          checkElevated: a = !0,
          excludeGuildPermissions: l
        } = t,
        u = p;
      if (r instanceof d.Sf) {
        var _;
        if (r.isScheduledForDeletion()) return N;
        if (d.Ec.has(r.type)) {
          let t = I.Z.getChannel(r.parent_id);
          return null == t ? N : y(r, e({
            forceRoles: i,
            context: t,
            overwrites: s,
            roles: o,
            checkElevated: a,
            excludeGuildPermissions: l
          }), !1)
        }
        u = null !== (_ = r.computeLurkerPermissionsAllowList()) && void 0 !== _ ? _ : u;
        s = null != s ? {
          ...r.permissionOverwrites,
          ...s
        } : r.permissionOverwrites;
        let t = r.getGuildId();
        n = null != t ? h.Z.getGuild(t) : null
      } else s = null != s ? s : {}, n = r;
      if (null == n) return N;
      let c = {
        userId: A.lds,
        nick: "",
        guildId: n.id,
        guildMemberAvatar: null,
        roles: S.default.keys(i),
        colorString: null,
        hoistRoleId: null,
        premiumSince: null,
        isPending: !1,
        joinedAt: new Date().toISOString(),
        communicationDisabledUntil: null
      };
      return M({
        userId: A.lds,
        member: c,
        guild: n,
        overwrites: s,
        roles: o,
        checkElevated: a,
        excludeGuildPermissions: l,
        lurkerPermissionsMask: u
      })
    }
  },
  Og: function() {
    return y
  },
  TP: function() {
    return O
  },
  Uu: function() {
    return V
  },
  e9: function() {
    return w
  },
  iJ: function() {
    return b
  },
  o4: function() {
    return U
  },
  oz: function() {
    return Z
  },
  r6: function() {
    return G
  },
  uB: function() {
    return P
  },
  we: function() {
    return B
  },
  ym: function() {
    return v
  }
}), n(47120);
var i = n(392711),
  r = n.n(i),
  s = n(149765),
  o = n(911969),
  a = n(715903),
  l = n(69882),
  u = n(160404),
  _ = n(41776),
  c = n(569471),
  d = n(131704),
  E = n(314897),
  I = n(592125),
  T = n(271383),
  h = n(430824),
  f = n(594174),
  S = n(709054),
  A = n(981631);
let N = s.vB(0),
  m = s.$e(...r().values(A.Plq)),
  O = s.$e(A.Plq.CREATE_INSTANT_INVITE, A.Plq.CHANGE_NICKNAME, A.Plq.VIEW_CHANNEL, A.Plq.SEND_MESSAGES, A.Plq.EMBED_LINKS, A.Plq.ATTACH_FILES, A.Plq.READ_MESSAGE_HISTORY, A.Plq.MENTION_EVERYONE, A.Plq.USE_EXTERNAL_EMOJIS, A.Plq.USE_EXTERNAL_STICKERS, A.Plq.ADD_REACTIONS, A.Plq.CREATE_PUBLIC_THREADS, A.Plq.CREATE_PRIVATE_THREADS, A.Plq.SEND_MESSAGES_IN_THREADS, A.Plq.SEND_POLLS, A.Plq.CONNECT, A.Plq.SPEAK, A.Plq.USE_VAD, A.Plq.STREAM, A.Plq.USE_EMBEDDED_ACTIVITIES, A.Plq.USE_SOUNDBOARD, A.Plq.REQUEST_TO_SPEAK, A.Plq.USE_APPLICATION_COMMANDS, A.Plq.CREATE_GUILD_EXPRESSIONS, A.Plq.CREATE_EVENTS, A.Plq.USE_EXTERNAL_APPS),
  p = s.$e(A.Plq.VIEW_CHANNEL, A.Plq.READ_MESSAGE_HISTORY),
  R = s.$e(A.Plq.VIEW_CHANNEL, A.Plq.SEND_MESSAGES, A.Plq.CONNECT, A.Plq.SPEAK, A.Plq.STREAM, A.Plq.USE_EMBEDDED_ACTIVITIES, A.Plq.USE_EXTERNAL_APPS, A.Plq.USE_EXTERNAL_EMOJIS, A.Plq.USE_EXTERNAL_SOUNDS, A.Plq.USE_EXTERNAL_STICKERS, A.Plq.USE_SOUNDBOARD, A.Plq.USE_VAD),
  g = s.$e(A.Plq.VIEW_CHANNEL, A.Plq.READ_MESSAGE_HISTORY),
  C = s.$e(A.Plq.VIEW_CHANNEL, A.Plq.READ_MESSAGE_HISTORY, A.Plq.CHANGE_NICKNAME),
  v = s.$e(A.Plq.MANAGE_GUILD, A.Plq.MANAGE_ROLES, A.Plq.ADMINISTRATOR, A.Plq.BAN_MEMBERS, A.Plq.MANAGE_NICKNAMES, A.Plq.CREATE_GUILD_EXPRESSIONS, A.Plq.MANAGE_GUILD_EXPRESSIONS, A.Plq.MANAGE_WEBHOOKS, A.Plq.VIEW_AUDIT_LOG);

function L(e, t, n) {
  let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
  if (i && t.mfaLevel === A.BpS.ELEVATED && n === E.default.getId()) {
    var r;
    !(null === (r = f.default.getCurrentUser()) || void 0 === r ? void 0 : r.mfaEnabled) && (e = s.Od(e, A.TC2))
  }
  return e
}

function D(e, t, n, i) {
  let r = i[e];
  if (null != r && (n = s.Od(n, r.deny), n = s.IH(n, r.allow)), null != t) {
    let e = N,
      r = N;
    for (let n = 0; n < t.roles.length; n++) {
      let o = i[t.roles[n]];
      null != o && (e = s.IH(e, o.allow), r = s.IH(r, o.deny))
    }
    n = s.Od(n, r), n = s.IH(n, e);
    let o = i[t.userId];
    null != o && (n = s.Od(n, o.deny), n = s.IH(n, o.allow));
    let u = s.e$(n, A.Plq.ADMINISTRATOR);
    (0, a.EY)(t) && !u && (n = s.hX(n, C)), (0, l.b)(t) && !u && (n = s.hX(n, g))
  }
  return n
}

function M(e) {
  let {
    userId: t,
    member: n,
    guild: i,
    overwrites: r,
    roles: o,
    checkElevated: a = !0,
    excludeGuildPermissions: l = !1,
    lurkerPermissionsMask: u = p
  } = e;
  if (l) return D(i.id, n, N, r);
  let c = (o = null != o ? {
      ...h.Z.getRoles(i.id),
      ...o
    } : h.Z.getRoles(i.id))[i.getEveryoneRoleId()],
    d = null != c ? c.permissions : O;
  if (null != n)
    for (let e = 0; e < n.roles.length; e++) {
      let t = o[n.roles[e]];
      void 0 !== t && (d = s.IH(d, t.permissions))
    }
  return d = s.e$(d, A.Plq.ADMINISTRATOR) ? m : D(i.id, n, d, r), (_.Z.isLurking(i.id) || (null == n ? void 0 : n.isPending)) && (d = s.hX(d, u)), T.ZP.isCurrentUserGuest(i.id) && (d = s.hX(d, R)), L(d, i, t, a)
}

function P(e) {
  var t, n, i;
  let r, {
    user: s,
    context: o,
    overwrites: a,
    roles: l,
    checkElevated: _ = !0,
    excludeGuildPermissions: E = !1
  } = e;
  if (null == s) return N;
  let S = "string" == typeof s ? s : s.id,
    A = p;
  if (o instanceof d.Sf) {
    if (o.isScheduledForDeletion()) return N;
    if (d.Ec.has(o.type)) {
      let e = I.Z.getChannel(o.parent_id);
      if (null == e || e.isScheduledForDeletion()) return N;
      let t = S === (null === (n = f.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && c.Z.hasJoined(o.id);
      return y(o, P({
        user: s,
        context: e,
        overwrites: a,
        roles: l,
        checkElevated: _,
        excludeGuildPermissions: E
      }), t)
    }
    A = null !== (i = o.computeLurkerPermissionsAllowList()) && void 0 !== i ? i : A;
    a = null != a ? {
      ...o.permissionOverwrites,
      ...a
    } : o.permissionOverwrites;
    let e = o.getGuildId();
    r = null != e ? h.Z.getGuild(e) : null
  } else a = null != a ? a : {}, r = o;
  if (null == r) return N;
  if (!(S === (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && u.Z.isViewingRoles(r.id)) && r.isOwner(S)) return L(m, r, S, _);
  let O = T.ZP.getMember(r.id, S);
  return M({
    userId: S,
    member: O,
    guild: r,
    overwrites: a,
    roles: l,
    checkElevated: _,
    excludeGuildPermissions: E,
    lurkerPermissionsMask: A
  })
}

function y(e, t, n) {
  return e.type !== A.d4z.PRIVATE_THREAD || n || s.e$(t, A.Plq.MANAGE_THREADS) ? s.e$(t, A.Plq.SEND_MESSAGES_IN_THREADS) ? e.isLockedThread() && !s.e$(t, A.Plq.MANAGE_THREADS) ? s.Od(t, A.Plq.SEND_MESSAGES) : s.$e(t, A.Plq.SEND_MESSAGES) : s.Od(t, A.Plq.SEND_MESSAGES) : N
}

function U(e, t) {
  if (d.Ec.has(e.type)) return !0;
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
  return null == i[n] && (i[n] = B(n)), null == r[n] && (r[n] = B(n)), Object.keys(i).length === Object.keys(r).length && !Object.keys(i).some(e => {
    let t = i[e],
      n = r[e];
    return !(null != n && s.fS(n.deny, t.deny) && s.fS(n.allow, t.allow)) && !0
  })
}

function b(e) {
  var t;
  return r().some(h.Z.getRoles(e.id), e => e.hoist && s.e$(e.permissions, A.Plq.ADMINISTRATOR)) ? void 0 : null !== (t = e.ownerId) && void 0 !== t ? t : void 0
}

function G(e, t, n, i) {
  if (null != t && e.isOwner(t)) return !0;
  if (null == n) return !1;
  let s = r()(h.Z.getRoles(e.id)).sortBy(e => e.position).map(e => e.id).value();
  return s.indexOf(n.id) > (null != i ? s.indexOf(i.id) : -1)
}

function w(e, t) {
  let n = T.ZP.getMember(e.id, t);
  if (null != n) return r()(h.Z.getRoles(e.id)).filter(e => -1 !== n.roles.indexOf(e.id)).sortBy(e => -e.position).first()
}

function x(e, t) {
  return null == t.hoistRoleId ? null : h.Z.getRole(e.id, t.hoistRoleId)
}

function B(e) {
  return {
    id: e,
    type: o.BN.ROLE,
    allow: N,
    deny: N
  }
}

function k(e) {
  let {
    permission: t,
    user: n,
    context: i,
    overwrites: r,
    roles: o,
    excludeGuildPermissions: a
  } = e;
  return s.e$(P({
    user: n,
    context: i,
    overwrites: r,
    roles: o,
    checkElevated: !0,
    excludeGuildPermissions: a
  }), t)
}

function V(e, t) {
  let n;
  let i = {};
  if (t instanceof d.Sf) {
    if (t.type === A.d4z.PRIVATE_THREAD || d.Ec.has(t.type) && null == (t = I.Z.getChannel(t.parent_id))) return !1;
    i = t.permissionOverwrites;
    let e = t.getGuildId();
    n = null != e ? h.Z.getGuild(e) : null
  } else n = t;
  if (null == n) return !1;
  let r = h.Z.getRole(n.id, n.getEveryoneRoleId());
  if (null == r) return !1;
  let o = r.permissions,
    a = i[n.id];
  return null != a && (o = s.Od(o, a.deny), o = s.IH(o, a.allow)), s.e$(o, e)
}

function Z(e, t) {
  let n;
  let i = {};
  if (t instanceof d.Sf) {
    if (t.type === A.d4z.PRIVATE_THREAD || d.Ec.has(t.type) && null == (t = I.Z.getChannel(t.parent_id))) return !1;
    i = t.permissionOverwrites;
    let e = t.getGuildId();
    n = null != e ? h.Z.getGuild(e) : null
  } else n = t;
  if (null == n) return !1;
  let o = h.Z.getRole(n.id, n.getEveryoneRoleId());
  return !(null == o || !s.e$(o.permissions, e) || r().some(i, t => s.e$(t.deny, e))) && !0
}