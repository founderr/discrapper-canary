"use strict";
n.d(t, {
  $z: function() {
    return R
  },
  BH: function() {
    return m
  },
  BO: function() {
    return g
  },
  D7: function() {
    return L
  },
  Dd: function() {
    return O
  },
  Ft: function() {
    return C
  },
  X0: function() {
    return M
  },
  XA: function() {
    return P
  },
  Z8: function() {
    return A
  },
  bD: function() {
    return p
  },
  nG: function() {
    return N
  },
  qJ: function() {
    return U
  },
  tI: function() {
    return D
  },
  vC: function() {
    return y
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
  c = n(367907),
  d = n(399860);
n(131704);
var E = n(703558),
  I = n(895924),
  T = n(531010),
  h = n(689079),
  f = n(981631),
  S = n(231338);

function A(e) {
  var t, n, i;
  let r, {
    rootCommand: s,
    command: o,
    applicationId: a,
    subCommandPath: l,
    useKeyedPermissions: c
  } = e;
  null != s.permissions && s.permissions.length > 0 && (c ? r = (0, d.tk)(s.permissions) : (r = {}, s.permissions.forEach(e => {
    r[e.id] = e
  })));
  let E = (null != l ? l : []).map(e => e.name),
    T = (null != l ? l : []).map(e => e.displayName);
  return {
    version: s.version,
    guildId: s.guild_id,
    id: [s.id, ...E].join(h.oQ),
    name: [s.name, ...E].join(" "),
    serverLocalizedName: o.name_localized,
    applicationId: a,
    type: null !== (t = s.type) && void 0 !== t ? t : _.yU.CHAT,
    inputType: I.iw.BOT,
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
    displayName: [null !== (n = s.name_localized) && void 0 !== n ? n : s.name, ...T].join(" "),
    displayDescription: null !== (i = o.description_localized) && void 0 !== i ? i : o.description,
    nsfw: s.nsfw,
    contexts: s.contexts,
    integration_types: s.integration_types,
    global_popularity_rank: s.global_popularity_rank
  }
}

function N(e, t) {
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
    let c = s.options.filter(e => e.type === _.jw.SUB_COMMAND_GROUP);
    for (let t = 0; t < c.length; t++) u.push(...e({
      rootCommand: r,
      command: c[t],
      applicationId: o,
      subCommandPath: (null != a ? a : []).concat([{
        name: c[t].name,
        type: _.jw.SUB_COMMAND_GROUP,
        displayName: null !== (n = c[t].name_localized) && void 0 !== n ? n : c[t].name
      }]),
      useKeyedPermissions: l
    }));
    let d = s.options.filter(e => e.type === _.jw.SUB_COMMAND);
    for (let e = 0; e < d.length; e++) u.push(A({
      rootCommand: r,
      command: d[e],
      applicationId: o,
      subCommandPath: (null != a ? a : []).concat([{
        name: d[e].name,
        type: _.jw.SUB_COMMAND,
        displayName: null !== (i = d[e].name_localized) && void 0 !== i ? i : d[e].name
      }]),
      useKeyedPermissions: l
    }));
    return 0 === c.length && 0 === d.length && u.push(A({
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

function m(e) {
  return f.Xyh.test(e.trim())
}

function O(e, t, n, i) {
  let r = [];
  return l()(e).forEach(e => {
    t.test(e.displayName) && (null == e.predicate || e.predicate(n)) && r.push(e)
  }), r.slice(0, i)
}

function R(e) {
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
let g = u.vB(0);

function C(e) {
  let {
    PermissionStore: t,
    guild: n,
    selfMember: i,
    applicationLevelPermissions: r,
    commandLevelPermissions: s,
    defaultMemberPermissions: o
  } = e;
  if (n.ownerId === i.userId || t.can(S.Pl.ADMINISTRATOR, n)) return !0;
  let a = n.id;
  if (null != s) {
    let e = v(i, a, s);
    if ("boolean" == typeof e) return e
  }
  let l = v(i, a, r);
  return ("boolean" != typeof l || !!l) && (null == o || !u.fS(o, g) && t.can(o, n))
}

function v(e, t, n) {
  let i = n[(0, d.rE)(e.userId, I.Kw.USER)];
  if (null != i) return i.permission;
  let r = !1;
  for (let t of e.roles) {
    let e = n[(0, d.rE)(t, I.Kw.ROLE)];
    if (null != e && (r = !0, e.permission)) return !0
  }
  if (r) return !1;
  let s = n[(0, d.rE)(t, I.Kw.ROLE)];
  return null != s ? s.permission : null
}

function L(e) {
  switch (e) {
    case I.bB.CHAT:
      return E.d.SlashCommand;
    case I.bB.APPLICATION_LAUNCHER:
      return E.d.ApplicationLauncherCommand
  }
}

function D(e) {
  return null == e ? void 0 : e.id === h.bi.BUILT_IN ? I.ub.BUILT_IN : e.id === h.bi.FRECENCY ? I.ub.FRECENCY : I.ub.APP
}

function M(e, t) {
  var n, i;
  return {
    type: I.Qi.APPLICATION,
    id: e.id,
    name: null !== (i = null == e ? void 0 : null === (n = e.bot) || void 0 === n ? void 0 : n.username) && void 0 !== i ? i : e.name,
    icon: e.icon,
    application: e,
    isUserApp: null != t && t
  }
}

function P(e) {
  let t = e.id,
    n = e.options,
    i = null == n ? void 0 : n.find(e => e.type === _.jw.SUB_COMMAND_GROUP);
  null != i && (t += "".concat(h.oQ).concat(i.name), n = i.options);
  let r = null == n ? void 0 : n.find(e => e.type === _.jw.SUB_COMMAND);
  return null != r && (t += "".concat(h.oQ).concat(r.name), n = r.options), {
    commandKey: t,
    interactionOptions: n
  }
}

function y(e, t, n) {
  return null == e || T.Z.getCurrentConfig({
    guildId: e,
    ...t
  }, n).userAppsTreatment === T.e.ALLOWED
}

function U(e) {
  var t, n;
  let {
    command: i,
    location: r,
    triggerSection: s,
    queryLength: o,
    sectionName: a,
    query: l,
    searchResultsPosition: u,
    source: _
  } = e;
  (0, c.yw)(f.rMx.APPLICATION_COMMAND_SELECTED, {
    command_id: null !== (n = null === (t = i.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : i.id,
    application_id: i.applicationId,
    location: r,
    section: s,
    query_length: o,
    command_text_length: i.displayName.length,
    section_name: a,
    query: l,
    search_results_position: u,
    source: _
  })
}