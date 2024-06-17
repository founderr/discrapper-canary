"use strict";
n.d(t, {
  $z: function() {
    return C
  },
  BH: function() {
    return O
  },
  BO: function() {
    return L
  },
  D7: function() {
    return M
  },
  Dd: function() {
    return R
  },
  Ft: function() {
    return v
  },
  X0: function() {
    return y
  },
  XA: function() {
    return U
  },
  Z8: function() {
    return A
  },
  bD: function() {
    return p
  },
  nG: function() {
    return m
  },
  oK: function() {
    return g
  },
  qJ: function() {
    return G
  },
  tI: function() {
    return P
  },
  vC: function() {
    return b
  }
}), n(47120), n(653041), n(390547), n(724458);
var i = n(654861),
  r = n.n(i),
  s = n(512722),
  o = n.n(s),
  a = n(392711),
  l = n.n(a),
  u = n(149765),
  _ = n(911969),
  d = n(367907),
  c = n(399860),
  E = n(131704),
  I = n(703558),
  T = n(895924),
  h = n(531010),
  S = n(689079),
  f = n(981631),
  N = n(231338);

function A(e) {
  var t, n, i;
  let r, {
    rootCommand: s,
    command: o,
    applicationId: a,
    subCommandPath: l,
    useKeyedPermissions: d
  } = e;
  null != s.permissions && s.permissions.length > 0 && (d ? r = (0, c.tk)(s.permissions) : (r = {}, s.permissions.forEach(e => {
    r[e.id] = e
  })));
  let E = (null != l ? l : []).map(e => e.name),
    I = (null != l ? l : []).map(e => e.displayName);
  return {
    version: s.version,
    guildId: s.guild_id,
    id: [s.id, ...E].join(S.oQ),
    name: [s.name, ...E].join(" "),
    serverLocalizedName: o.name_localized,
    applicationId: a,
    type: null !== (t = s.type) && void 0 !== t ? t : _.yU.CHAT,
    inputType: T.iw.BOT,
    description: o.description,
    options: function e(t) {
      return null == t ? void 0 : t.map(t => {
        var n, i;
        let r = {
          ...t,
          choices: function(e) {
            return null == e ? void 0 : e.map(e => {
              var t;
              return {
                ...e,
                displayName: null !== (t = e.name_localized) && void 0 !== t ? t : e.name
              }
            })
          }(t.choices),
          options: e(t.options),
          serverLocalizedName: t.name_localized,
          displayName: null !== (n = t.name_localized) && void 0 !== n ? n : t.name,
          displayDescription: null !== (i = t.description_localized) && void 0 !== i ? i : t.description
        };
        if (t.type === _.jw.CHANNEL && "channel_types" in t) return {
          ...r,
          channelTypes: t.channel_types
        };
        if ((t.type === _.jw.NUMBER || t.type === _.jw.INTEGER) && ("min_value" in t || "max_value" in t)) return {
          ...r,
          minValue: t.min_value,
          maxValue: t.max_value
        };
        if (t.type === _.jw.STRING && ("min_length" in t || "max_length" in t)) return {
          ...r,
          minLength: t.min_length,
          maxLength: t.max_length
        };
        return r
      })
    }(o.options),
    rootCommand: s,
    subCommandPath: l,
    defaultMemberPermissions: null == s.default_member_permissions ? void 0 : u.vB(s.default_member_permissions),
    dmPermission: s.dm_permission,
    permissions: r,
    displayName: [null !== (n = s.name_localized) && void 0 !== n ? n : s.name, ...I].join(" "),
    displayDescription: null !== (i = o.description_localized) && void 0 !== i ? i : o.description,
    nsfw: s.nsfw,
    contexts: s.contexts,
    integration_types: s.integration_types,
    global_popularity_rank: s.global_popularity_rank
  }
}

function m(e, t) {
  return l().flatMap(e, e => (o()(null != e.id, "Missing command id"), function e(t) {
    var n, i;
    let {
      rootCommand: r,
      command: s,
      applicationId: o,
      subCommandPath: a,
      useKeyedPermissions: l
    } = t;
    if (s.hasOwnProperty("id")) {
      if (null == s.options || 0 === s.options.length) return [A({
        rootCommand: r,
        command: s,
        applicationId: o,
        subCommandPath: a,
        useKeyedPermissions: l
      })]
    } else if (s.type !== _.jw.SUB_COMMAND && s.type !== _.jw.SUB_COMMAND_GROUP && (null == s.options || 0 === s.options.length)) return [A({
      rootCommand: r,
      command: s,
      applicationId: o,
      subCommandPath: a,
      useKeyedPermissions: l
    })];
    let u = [];
    if (null == s.options) return u;
    let d = s.options.filter(e => e.type === _.jw.SUB_COMMAND_GROUP);
    for (let t = 0; t < d.length; t++) u.push(...e({
      rootCommand: r,
      command: d[t],
      applicationId: o,
      subCommandPath: (null != a ? a : []).concat([{
        name: d[t].name,
        type: _.jw.SUB_COMMAND_GROUP,
        displayName: null !== (n = d[t].name_localized) && void 0 !== n ? n : d[t].name
      }]),
      useKeyedPermissions: l
    }));
    let c = s.options.filter(e => e.type === _.jw.SUB_COMMAND);
    for (let e = 0; e < c.length; e++) u.push(A({
      rootCommand: r,
      command: c[e],
      applicationId: o,
      subCommandPath: (null != a ? a : []).concat([{
        name: c[e].name,
        type: _.jw.SUB_COMMAND,
        displayName: null !== (i = c[e].name_localized) && void 0 !== i ? i : c[e].name
      }]),
      useKeyedPermissions: l
    }));
    return 0 === d.length && 0 === c.length && u.push(A({
      rootCommand: r,
      command: s,
      applicationId: o,
      subCommandPath: a,
      useKeyedPermissions: l
    })), u
  }({
    rootCommand: e,
    command: e,
    applicationId: e.application_id,
    subCommandPath: void 0,
    useKeyedPermissions: t
  })))
}

function O(e) {
  return f.Xyh.test(e.trim())
}

function R(e, t, n, i) {
  let r = [];
  return l()(e).forEach(e => {
    t.test(e.displayName) && (null == e.predicate || e.predicate(n)) && r.push(e)
  }), r.slice(0, i)
}

function C(e) {
  let t = e.type === _.jw.STRING,
    n = e.type === _.jw.CHANNEL,
    i = e.type === _.jw.USER || e.type === _.jw.MENTIONABLE,
    r = e.type === _.jw.ROLE || e.type === _.jw.MENTIONABLE;
  return {
    canMentionEveryone: t || r,
    canMentionHere: t,
    canMentionChannels: t || n,
    canMentionUsers: t || i,
    canMentionRoles: t || r,
    canMentionAnyGuildUser: i,
    canMentionNonMentionableRoles: r
  }
}

function p(e) {
  return r()(e).subtract(1).toString()
}

function g(e, t, n, i) {
  return !n && (!!i.isMultiUserDM() || (i.isDM() ? !i.isSystemDM() : i.isArchivedLockedThread() ? e.can(u.$e(N.Pl.USE_APPLICATION_COMMANDS, N.Pl.MANAGE_THREADS), i) : !!(0, E.Em)(i.type) && e.can(u.$e(N.Pl.USE_APPLICATION_COMMANDS, N.Pl.SEND_MESSAGES), i)))
}
let L = u.vB(0);

function v(e) {
  let {
    PermissionStore: t,
    guild: n,
    selfMember: i,
    applicationLevelPermissions: r,
    commandLevelPermissions: s,
    defaultMemberPermissions: o
  } = e;
  if (n.ownerId === i.userId || t.can(N.Pl.ADMINISTRATOR, n)) return !0;
  let a = n.id;
  if (null != s) {
    let e = D(i, a, s);
    if ("boolean" == typeof e) return e
  }
  let l = D(i, a, r);
  return ("boolean" != typeof l || !!l) && (null == o || !u.fS(o, L) && t.can(o, n))
}

function D(e, t, n) {
  let i = n[(0, c.rE)(e.userId, T.Kw.USER)];
  if (null != i) return i.permission;
  let r = !1;
  for (let t of e.roles) {
    let e = n[(0, c.rE)(t, T.Kw.ROLE)];
    if (null != e && (r = !0, e.permission)) return !0
  }
  if (r) return !1;
  let s = n[(0, c.rE)(t, T.Kw.ROLE)];
  return null != s ? s.permission : null
}

function M(e) {
  switch (e) {
    case T.bB.CHAT:
      return I.d.SlashCommand;
    case T.bB.APPLICATION_LAUNCHER:
      return I.d.ApplicationLauncherCommand
  }
}

function P(e) {
  return null == e ? void 0 : e.id === S.bi.BUILT_IN ? T.ub.BUILT_IN : e.id === S.bi.FRECENCY ? T.ub.FRECENCY : T.ub.APP
}

function y(e) {
  var t, n;
  return {
    type: T.Qi.APPLICATION,
    id: e.id,
    name: null !== (n = null == e ? void 0 : null === (t = e.bot) || void 0 === t ? void 0 : t.username) && void 0 !== n ? n : e.name,
    icon: e.icon,
    application: e
  }
}

function U(e) {
  let t = e.id,
    n = e.options,
    i = null == n ? void 0 : n.find(e => e.type === _.jw.SUB_COMMAND_GROUP);
  null != i && (t += "".concat(S.oQ).concat(i.name), n = i.options);
  let r = null == n ? void 0 : n.find(e => e.type === _.jw.SUB_COMMAND);
  return null != r && (t += "".concat(S.oQ).concat(r.name), n = r.options), {
    commandKey: t,
    interactionOptions: n
  }
}

function b(e, t, n) {
  return null == e || h.Z.getCurrentConfig({
    guildId: e,
    ...t
  }, n).userAppsTreatment === h.e.ALLOWED
}

function G(e) {
  var t, n;
  let {
    command: i,
    location: r,
    triggerSection: s,
    queryLength: o,
    sectionName: a,
    query: l,
    searchResultsPosition: u
  } = e;
  (0, d.yw)(f.rMx.APPLICATION_COMMAND_SELECTED, {
    command_id: null !== (n = null === (t = i.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : i.id,
    application_id: i.applicationId,
    location: r,
    section: s,
    query_length: o,
    command_text_length: i.displayName.length,
    section_name: a,
    query: l,
    search_results_position: u
  })
}