"use strict";
n.r(t), n.d(t, {
  DISABLED_BY_DEFAULT_PERMISSION_FLAG: function() {
    return L
  },
  allChannelsSentinel: function() {
    return R
  },
  buildApplicationCommands: function() {
    return N
  },
  buildCommand: function() {
    return m
  },
  canUseApplicationCommands: function() {
    return g
  },
  extractInteractionDataProps: function() {
    return U
  },
  getApplicationCommandOptionQueryOptions: function() {
    return C
  },
  getApplicationCommandSection: function() {
    return P
  },
  getCommandAttachmentDraftType: function() {
    return M
  },
  getCommandTriggerSection: function() {
    return y
  },
  getMatchingGroupCommands: function() {
    return O
  },
  hasAccess: function() {
    return v
  },
  isGuildInUserAppExperiment: function() {
    return b
  },
  isSnowflake: function() {
    return p
  },
  trackCommandSelected: function() {
    return G
  }
}), n("47120"), n("653041"), n("390547"), n("724458");
var i = n("654861"),
  r = n.n(i),
  s = n("512722"),
  a = n.n(s),
  o = n("392711"),
  l = n.n(o),
  u = n("149765"),
  d = n("911969"),
  _ = n("367907"),
  c = n("399860"),
  E = n("131704"),
  I = n("703558"),
  T = n("895924"),
  f = n("531010"),
  S = n("689079"),
  h = n("981631"),
  A = n("231338");

function m(e) {
  var t, n, i;
  let r, {
    rootCommand: s,
    command: a,
    applicationId: o,
    subCommandPath: l,
    useKeyedPermissions: _
  } = e;
  null != s.permissions && s.permissions.length > 0 && (_ ? r = (0, c.keyPermissions)(s.permissions) : (r = {}, s.permissions.forEach(e => {
    r[e.id] = e
  })));
  let E = (null != l ? l : []).map(e => e.name),
    I = (null != l ? l : []).map(e => e.displayName);
  return {
    version: s.version,
    guildId: s.guild_id,
    id: [s.id, ...E].join(S.SUB_COMMAND_KEY_SEPARATOR),
    name: [s.name, ...E].join(" "),
    serverLocalizedName: a.name_localized,
    applicationId: o,
    type: null !== (t = s.type) && void 0 !== t ? t : d.ApplicationCommandType.CHAT,
    inputType: T.ApplicationCommandInputType.BOT,
    description: a.description,
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
        if (t.type === d.ApplicationCommandOptionType.CHANNEL && "channel_types" in t) return {
          ...r,
          channelTypes: t.channel_types
        };
        if ((t.type === d.ApplicationCommandOptionType.NUMBER || t.type === d.ApplicationCommandOptionType.INTEGER) && ("min_value" in t || "max_value" in t)) return {
          ...r,
          minValue: t.min_value,
          maxValue: t.max_value
        };
        if (t.type === d.ApplicationCommandOptionType.STRING && ("min_length" in t || "max_length" in t)) return {
          ...r,
          minLength: t.min_length,
          maxLength: t.max_length
        };
        return r
      })
    }(a.options),
    rootCommand: s,
    subCommandPath: l,
    defaultMemberPermissions: null == s.default_member_permissions ? void 0 : u.deserialize(s.default_member_permissions),
    dmPermission: s.dm_permission,
    permissions: r,
    displayName: [null !== (n = s.name_localized) && void 0 !== n ? n : s.name, ...I].join(" "),
    displayDescription: null !== (i = a.description_localized) && void 0 !== i ? i : a.description,
    nsfw: s.nsfw,
    contexts: s.contexts,
    integration_types: s.integration_types,
    global_popularity_rank: s.global_popularity_rank
  }
}

function N(e, t) {
  return l().flatMap(e, e => (a()(null != e.id, "Missing command id"), function e(t) {
    var n, i;
    let {
      rootCommand: r,
      command: s,
      applicationId: a,
      subCommandPath: o,
      useKeyedPermissions: l
    } = t;
    if (s.hasOwnProperty("id")) {
      if (null == s.options || 0 === s.options.length) return [m({
        rootCommand: r,
        command: s,
        applicationId: a,
        subCommandPath: o,
        useKeyedPermissions: l
      })]
    } else if (s.type !== d.ApplicationCommandOptionType.SUB_COMMAND && s.type !== d.ApplicationCommandOptionType.SUB_COMMAND_GROUP && (null == s.options || 0 === s.options.length)) return [m({
      rootCommand: r,
      command: s,
      applicationId: a,
      subCommandPath: o,
      useKeyedPermissions: l
    })];
    let u = [];
    if (null == s.options) return u;
    let _ = s.options.filter(e => e.type === d.ApplicationCommandOptionType.SUB_COMMAND_GROUP);
    for (let t = 0; t < _.length; t++) u.push(...e({
      rootCommand: r,
      command: _[t],
      applicationId: a,
      subCommandPath: (null != o ? o : []).concat([{
        name: _[t].name,
        type: d.ApplicationCommandOptionType.SUB_COMMAND_GROUP,
        displayName: null !== (n = _[t].name_localized) && void 0 !== n ? n : _[t].name
      }]),
      useKeyedPermissions: l
    }));
    let c = s.options.filter(e => e.type === d.ApplicationCommandOptionType.SUB_COMMAND);
    for (let e = 0; e < c.length; e++) u.push(m({
      rootCommand: r,
      command: c[e],
      applicationId: a,
      subCommandPath: (null != o ? o : []).concat([{
        name: c[e].name,
        type: d.ApplicationCommandOptionType.SUB_COMMAND,
        displayName: null !== (i = c[e].name_localized) && void 0 !== i ? i : c[e].name
      }]),
      useKeyedPermissions: l
    }));
    return 0 === _.length && 0 === c.length && u.push(m({
      rootCommand: r,
      command: s,
      applicationId: a,
      subCommandPath: o,
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

function p(e) {
  return h.ID_REGEX.test(e.trim())
}

function O(e, t, n, i) {
  let r = [];
  return l()(e).forEach(e => {
    t.test(e.displayName) && (null == e.predicate || e.predicate(n)) && r.push(e)
  }), r.slice(0, i)
}

function C(e) {
  let t = e.type === d.ApplicationCommandOptionType.STRING,
    n = e.type === d.ApplicationCommandOptionType.CHANNEL,
    i = e.type === d.ApplicationCommandOptionType.USER || e.type === d.ApplicationCommandOptionType.MENTIONABLE,
    r = e.type === d.ApplicationCommandOptionType.ROLE || e.type === d.ApplicationCommandOptionType.MENTIONABLE;
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

function R(e) {
  return r()(e).subtract(1).toString()
}

function g(e, t, n, i) {
  return !n && (!!i.isMultiUserDM() || (i.isDM() ? !i.isSystemDM() : i.isArchivedLockedThread() ? e.can(u.combine(A.Permissions.USE_APPLICATION_COMMANDS, A.Permissions.MANAGE_THREADS), i) : !!(0, E.isReadableType)(i.type) && e.can(u.combine(A.Permissions.USE_APPLICATION_COMMANDS, A.Permissions.SEND_MESSAGES), i)))
}
let L = u.deserialize(0);

function v(e) {
  let {
    PermissionStore: t,
    guild: n,
    selfMember: i,
    applicationLevelPermissions: r,
    commandLevelPermissions: s,
    defaultMemberPermissions: a
  } = e;
  if (n.ownerId === i.userId || t.can(A.Permissions.ADMINISTRATOR, n)) return !0;
  let o = n.id;
  if (null != s) {
    let e = D(i, o, s);
    if ("boolean" == typeof e) return e
  }
  let l = D(i, o, r);
  return ("boolean" != typeof l || !!l) && (null == a || !u.equals(a, L) && t.can(a, n))
}

function D(e, t, n) {
  let i = n[(0, c.toPermissionKey)(e.userId, T.ApplicationCommandPermissionType.USER)];
  if (null != i) return i.permission;
  let r = !1;
  for (let t of e.roles) {
    let e = n[(0, c.toPermissionKey)(t, T.ApplicationCommandPermissionType.ROLE)];
    if (null != e && (r = !0, e.permission)) return !0
  }
  if (r) return !1;
  let s = n[(0, c.toPermissionKey)(t, T.ApplicationCommandPermissionType.ROLE)];
  return null != s ? s.permission : null
}

function M(e) {
  switch (e) {
    case T.CommandOrigin.CHAT:
      return I.DraftType.SlashCommand;
    case T.CommandOrigin.APPLICATION_LAUNCHER:
      return I.DraftType.ApplicationLauncherCommand
  }
}

function y(e) {
  if (null != e) {
    if (e.id === S.BuiltInSectionId.BUILT_IN) return T.ApplicationCommandTriggerSections.BUILT_IN;
    else if (e.id === S.BuiltInSectionId.FRECENCY) return T.ApplicationCommandTriggerSections.FRECENCY;
    else return T.ApplicationCommandTriggerSections.APP
  }
}

function P(e) {
  var t, n;
  return {
    type: T.ApplicationCommandSectionType.APPLICATION,
    id: e.id,
    name: null !== (n = null == e ? void 0 : null === (t = e.bot) || void 0 === t ? void 0 : t.username) && void 0 !== n ? n : e.name,
    icon: e.icon,
    application: e
  }
}

function U(e) {
  let t = e.id,
    n = e.options,
    i = null == n ? void 0 : n.find(e => e.type === d.ApplicationCommandOptionType.SUB_COMMAND_GROUP);
  null != i && (t += "".concat(S.SUB_COMMAND_KEY_SEPARATOR).concat(i.name), n = i.options);
  let r = null == n ? void 0 : n.find(e => e.type === d.ApplicationCommandOptionType.SUB_COMMAND);
  return null != r && (t += "".concat(S.SUB_COMMAND_KEY_SEPARATOR).concat(r.name), n = r.options), {
    commandKey: t,
    interactionOptions: n
  }
}

function b(e, t, n) {
  return null == e || f.default.getCurrentConfig({
    guildId: e,
    ...t
  }, n).userAppsTreatment === f.UserAppsTreatment.ALLOWED
}

function G(e) {
  var t, n;
  let {
    command: i,
    location: r,
    triggerSection: s,
    queryLength: a,
    sectionName: o,
    query: l,
    searchResultsPosition: u
  } = e;
  (0, _.trackWithMetadata)(h.AnalyticEvents.APPLICATION_COMMAND_SELECTED, {
    command_id: null !== (n = null === (t = i.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : i.id,
    application_id: i.applicationId,
    location: r,
    section: s,
    query_length: a,
    command_text_length: i.displayName.length,
    section_name: o,
    query: l,
    search_results_position: u
  })
}