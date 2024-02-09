"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  },
  useContextIndexState: function() {
    return z
  },
  useUserIndexState: function() {
    return X
  },
  useDiscoveryState: function() {
    return Q
  },
  useQueryState: function() {
    return $
  }
}), n("222007"), n("424973"), n("881410");
var i, l, a = n("884691"),
  s = n("627445"),
  r = n.n(s),
  o = n("811022"),
  u = n("446674"),
  d = n("913144"),
  c = n("851387");
n("798609");
var p = n("605393"),
  f = n("892692"),
  m = n("915639"),
  I = n("872173"),
  _ = n("42203"),
  T = n("305961"),
  C = n("162771"),
  A = n("697218"),
  E = n("599110"),
  N = n("589777"),
  S = n("369010"),
  g = n("342564"),
  O = n("9566"),
  M = n("972620"),
  h = n("524768"),
  v = n("389153"),
  y = n("123373"),
  D = n("217946"),
  R = n("317041"),
  P = n("49111");
let L = new o.default("ApplicationCommandIndexStore"),
  U = Symbol("currentUser"),
  F = Symbol("stale"),
  H = Symbol("current"),
  b = Object.freeze({
    descriptors: [],
    commands: [],
    sectionedCommands: [],
    loading: !0
  }),
  B = Object.freeze({
    serverVersion: H,
    fetchState: {
      fetching: !1
    },
    result: {
      sections: {},
      sectionIdsByBotId: {},
      version: H
    }
  }),
  G = Object.freeze({
    serverVersion: F,
    fetchState: {
      fetching: !1
    }
  }),
  w = {
    sensitivity: "accent",
    numeric: !0
  };

function x(e) {
  switch (e.type) {
    case "guild":
      return e.guildId;
    case "channel":
      return e.channelId;
    case "user":
      return U
  }
}

function W(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = x(e),
    l = K.indices[i];
  return null != l ? ("fetchState" in t && l.fetchState.fetching && l.fetchState.abort.abort(), K.indices[i] = {
    ...l,
    ...t
  }) : n && (K.indices[i] = {
    serverVersion: F,
    fetchState: {
      fetching: !1
    },
    ...t
  }), l
}

function Y(e) {
  let t = x(e),
    n = K.indices[t];
  (null == n ? void 0 : n.fetchState.fetching) && n.fetchState.abort.abort(), delete K.indices[t]
}

function V() {
  for (let e of Object.values(K.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
  K.indices = {}
}

function k() {
  W({
    type: "user"
  }, {
    serverVersion: F
  })
}
class q extends u.default.Store {
  initialize() {
    this.waitFor(m.default), this.syncWith([m.default], () => {
      ! function() {
        let e = m.default.locale;
        e !== K.oldLocale && (V(), K.collator = new Intl.Collator(e, {
          sensitivity: "accent",
          numeric: !0
        }), K.oldLocale = e)
      }()
    })
  }
  getContextState(e) {
    var t, n;
    return null != e && et(e) ? null !== (n = this.indices[null !== (t = e.guild_id) && void 0 !== t ? t : e.id]) && void 0 !== n ? n : G : B
  }
  getUserState() {
    var e;
    let t = C.default.getGuildId();
    return (0, v.isInUserAppExperiment)(t, {
      location: "getUserState"
    }, {
      autoTrackExposure: !1
    }) ? null !== (e = this.indices[U]) && void 0 !== e ? e : G : B
  }
  query(e, t, n) {
    let i = A.default.getCurrentUser();
    if (null == i) return b;
    let l = this.getContextState(e),
      a = this.getUserState(),
      s = (0, y.buildPermissionContext)(e, t.commandType),
      r = !1 !== t.applicationCommands && s.hasBaseAccessPermissions,
      o = !1;
    if (n.allowFetch) {
      let t = r && et(e);
      t && (E.default.track(P.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
        miss: null == l.result,
        size: Object.keys(K.indices).length
      }), en(l) && (null != e.guild_id ? (0, O.requestApplicationCommandIndex)({
        type: "guild",
        guildId: e.guild_id
      }) : (0, O.requestApplicationCommandIndex)({
        type: "channel",
        channelId: e.id
      }), o = !0)), (0, v.isInUserAppExperiment)(e.guild_id, {
        location: "query"
      }) && en(a) && ((0, O.requestApplicationCommandIndex)({
        type: "user"
      }), o = !0)
    }
    let u = J({
      permissionContext: s,
      text: t.text,
      allowApplicationCommands: r,
      builtIns: t.builtIns,
      scoreMethod: n.scoreMethod,
      allowEmptySections: n.allowEmptySections,
      contextState: l,
      userState: a
    });
    return u.loading = u.loading || o, u
  }
  constructor(...e) {
    super(...e), this.indices = {}, this.oldLocale = m.default.locale, this.collator = new Intl.Collator(m.default.locale, w)
  }
}
q.displayName = "ApplicationCommandIndexStore";
let K = new q(d.default, {
  LOGOUT: V,
  CONNECTION_OPEN: function() {
    for (let e of Object.values(K.indices)) e.serverVersion = F
  },
  APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function(e) {
    var t;
    let {
      target: n,
      start: i
    } = e;
    if (en(null !== (t = K.indices[x(n)]) && void 0 !== t ? t : G)) {
      let e = new AbortController;
      W(n, {
        fetchState: {
          fetching: !0,
          abort: e
        }
      }, !0), (0, O.fetchApplicationCommandIndex)(n, i, e)
    }
  },
  APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: function(e) {
    var t, n;
    let {
      target: i,
      index: l
    } = e, a = null === (t = A.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == a) return !1;
    let s = {},
      r = {},
      o = new Set;
    for (let e of l.applications) {
      if (null == e.bot && null != e.bot_id) {
        r[e.bot_id] = e.id;
        let t = A.default.getUser(e.bot_id);
        null != t ? e.bot = t : o.add(e.bot_id)
      } else null != e.bot && (r[e.bot.id] = e.id);
      let t = {
        descriptor: {
          ...(0, v.getApplicationCommandSection)(function(e) {
            return {
              description: e.description,
              icon: e.icon,
              id: e.id,
              name: e.name,
              bot: e.bot
            }
          }(e)),
          permissions: null != e.permissions ? (0, f.keyPermissions)(ea(e.permissions, a)) : void 0,
          botId: e.bot_id
        },
        commands: {}
      };
      s[e.id] = t
    }
    for (let e of ("guild" === i.type && o.size > 0 && c.default.requestMembersById(i.guildId, [...o]), (0, v.buildApplicationCommands)(l.application_commands.map(e => (function(e, t) {
        var n, i, l, a, s;
        let r = {
          ...e,
          description: null !== (l = null !== (i = e.description_default) && void 0 !== i ? i : e.description) && void 0 !== l ? l : "",
          dm_permission: void 0,
          name: null !== (a = e.name_default) && void 0 !== a ? a : e.name,
          options: null !== (s = null === (n = e.options) || void 0 === n ? void 0 : n.map(ei)) && void 0 !== s ? s : [],
          permissions: null != e.permissions ? ea(e.permissions, t) : void 0
        };
        return e.description !== e.description_default && (r.description_localized = e.description), e.name !== e.name_default && (r.name_localized = e.name), r
      })(e, a)), !0))) {
      let t = s[e.applicationId];
      if (null == t) {
        L.error("Command has no matching application");
        continue
      }
      t.commands[e.id] = e
    }
    let u = null !== (n = l.version) && void 0 !== n ? n : H;
    W(i, {
      serverVersion: u,
      result: {
        sections: s,
        sectionIdsByBotId: r,
        version: u
      },
      fetchState: {
        fetching: !1
      }
    })
  },
  APPLICATION_COMMAND_INDEX_FETCH_FAILURE: function(e) {
    let {
      target: t
    } = e;
    W(t, {
      fetchState: {
        fetching: !1,
        retryAfter: Date.now() + 5e3
      }
    })
  },
  APPLICATION_COMMAND_EXECUTE_BAD_VERSION: function(e) {
    let t, {
      channelId: n,
      guildId: i
    } = e;
    W(t = null != i ? {
      type: "guild",
      guildId: i
    } : {
      type: "channel",
      channelId: n
    }, {
      serverVersion: F
    })
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    Y({
      type: "channel",
      channelId: t.id
    })
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    Y({
      type: "guild",
      guildId: t.id
    })
  },
  GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function(e) {
    var t;
    let {
      guildId: n,
      version: i
    } = e, l = W({
      type: "guild",
      guildId: n
    }, {
      serverVersion: null != i ? i : F
    }), a = null == l ? void 0 : null === (t = l.result) || void 0 === t ? void 0 : t.sectionIdsByBotId;
    if (null != a)
      for (let e in a) {
        let t = _.default.getDMFromUserId(e);
        null != t && W({
          type: "channel",
          channelId: t
        }, {
          serverVersion: F
        })
      }
  },
  GUILD_MEMBERS_CHUNK: function(e) {
    var t;
    let {
      guildId: n,
      members: i
    } = e, l = x({
      type: "guild",
      guildId: n
    }), a = null === (t = K.indices[l]) || void 0 === t ? void 0 : t.result;
    if (null == a) return !1;
    let s = !1;
    return i.forEach(e => {
      let t = a.sectionIdsByBotId[e.user.id];
      if (null != t) {
        let n = a.sections[t];
        r(null != n, "Bot has no matching index section"), r(null != n.descriptor.application, "Bot's index section has no application info");
        let i = n.descriptor.application;
        i.bot = e.user, n.descriptor = (0, v.getApplicationCommandSection)(i), s = !0
      }
    }), s
  },
  USER_APPLICATION_UPDATE: k,
  USER_APPLICATION_REMOVE: k
});
var j = K;

function z(e, t, n) {
  let [i, l] = a.useState(!0), s = (0, u.useStateFromStoresObject)([K], () => K.getContextState(e));
  return a.useEffect(() => {
    if (i && null != e) {
      if (n) {
        let n = t && et(e);
        n && (E.default.track(P.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
          miss: null == s.result,
          size: Object.keys(K.indices).length
        }), en(s) && (null != e.guild_id ? (0, O.requestApplicationCommandIndex)({
          type: "guild",
          guildId: e.guild_id
        }) : (0, O.requestApplicationCommandIndex)({
          type: "channel",
          channelId: e.id
        })))
      }
      l(!1)
    }
  }, [s, n, e, t, i]), s
}

function X(e, t) {
  let [n, i] = a.useState(!0), l = (0, u.useStateFromStoresObject)([K], () => K.getUserState()), s = (0, u.useStateFromStores)([C.default], C.default.getGuildId), r = (0, v.useIsInUserAppExperiment)(s, {
    location: "useUserIndexState"
  });
  return a.useEffect(() => {
    n && (t && en(l) && e && r && (0, O.requestApplicationCommandIndex)({
      type: "user"
    }), i(!1))
  }, [l, t, e, r, n]), l
}

function Q(e, t, n, i) {
  let {
    descriptors: l,
    commands: s,
    sectionedCommands: r,
    loading: o
  } = $(e, n, i), u = (0, S.useTopCommands)({
    channel: e,
    guild: t
  });
  return a.useMemo(() => {
    if (!i.includeFrecency || 0 === u.length) return {
      descriptors: l,
      commands: s,
      sectionedCommands: r,
      loading: o
    };
    let n = {
        channel: e,
        guild: t
      },
      a = s.filter(e => u.includes(e.id)).sort((e, t) => {
        let i = g.default.getScoreWithoutLoadingLatest(n, e),
          l = g.default.getScoreWithoutLoadingLatest(n, t);
        return l - i
      }).splice(0, R.DISCOVERY_COMMANDS_FRECENCY_LIMIT);
    return 0 === a.length ? {
      descriptors: l,
      commands: s,
      sectionedCommands: r,
      loading: o
    } : {
      descriptors: [N.BUILT_IN_SECTIONS[R.BuiltInSectionId.FRECENCY], ...l],
      commands: a.concat(s),
      sectionedCommands: [{
        section: N.BUILT_IN_SECTIONS[R.BuiltInSectionId.FRECENCY],
        data: a
      }, ...r],
      loading: o
    }
  }, [o, i.includeFrecency, u, e, t, s, l, r])
}
let Z = Object.freeze({
  applications: {
    useFrecency: !1,
    useScore: !1
  },
  commands: {
    useFrecency: !0,
    useScore: !0
  }
});

function $(e, t, n) {
  let i = (0, y.usePermissionContext)(e, t.commandType),
    l = !1 !== t.applicationCommands && i.hasBaseAccessPermissions,
    s = z(e, l, n.allowFetch),
    r = X(l, n.allowFetch);
  return a.useMemo(() => J({
    permissionContext: i,
    text: t.text,
    allowApplicationCommands: l,
    builtIns: t.builtIns,
    scoreMethod: n.scoreMethod,
    allowEmptySections: n.allowEmptySections,
    contextState: s,
    userState: r,
    sortOptions: n.sortOptions
  }), [i, t.text, t.builtIns, l, n.scoreMethod, n.allowEmptySections, n.sortOptions, s, r])
}

function J(e) {
  let {
    permissionContext: t,
    contextState: n,
    userState: i,
    text: l,
    builtIns: a = M.BuiltInCommandFilter.ALLOW,
    allowApplicationCommands: s = !0,
    allowEmptySections: o = !1,
    scoreMethod: u = M.ScoreMethod.NONE,
    sortOptions: d = Z
  } = e, {
    commandType: c
  } = t, f = null == l ? void 0 : l.toLowerCase(), m = null == f ? void 0 : f.split(" "), _ = a === M.BuiltInCommandFilter.ONLY_TEXT, C = a !== M.BuiltInCommandFilter.DENY ? (0, N.getBuiltInCommands)(c, !0, _) : [], A = [], E = {
    permissionContext: t,
    query: f,
    splitQuery: m,
    allowEmptySections: o,
    scoreMethod: u
  };
  if (s) {
    var S, O, h, v;
    let e = null !== (h = null === (S = n.result) || void 0 === S ? void 0 : S.sections) && void 0 !== h ? h : {},
      t = null !== (v = null === (O = i.result) || void 0 === O ? void 0 : O.sections) && void 0 !== v ? v : {},
      l = [...Object.keys(e), ...Object.keys(t).filter(t => !(t in e))];
    for (let n of l) {
      let i, l;
      let a = e[n],
        s = t[n];
      if (null != a && null != s) {
        for (let e in i = s.descriptor, l = [], s.commands) {
          let t = s.commands[e];
          l.push(t)
        }
        for (let e in a.commands)
          if (!(e in s.commands)) {
            let t = a.commands[e];
            l.push(t)
          }
      } else null != a ? (i = a.descriptor, l = Object.values(a.commands)) : null != s && (i = s.descriptor, l = Object.values(s.commands));
      r(null != i, "Failed to select application descriptor"), r(null != l, "Failed to select list of application commands");
      let o = ee(i, l, E);
      null != o && A.push(o)
    }
    d.applications.useFrecency && I.FrecencyUserSettingsActionCreators.loadIfNecessary(), A.sort((e, t) => {
      if (d.applications.useScore && u === M.ScoreMethod.APPLICATION_ONLY) {
        var n, i, l, a;
        let s = null !== (l = null === (n = e.data[0]) || void 0 === n ? void 0 : n.score) && void 0 !== l ? l : Number.MAX_VALUE,
          r = null !== (a = null === (i = t.data[0]) || void 0 === i ? void 0 : i.score) && void 0 !== a ? a : Number.MAX_VALUE;
        if (s !== r) return s - r
      }
      if (d.applications.useFrecency) {
        let n = p.default.getScoreWithoutLoadingLatest(e.section.id),
          i = p.default.getScoreWithoutLoadingLatest(t.section.id);
        if (n !== i) return i - n
      }
      return es(e.section.name, t.section.name)
    })
  }
  if (C.length > 0 || !0 === o) {
    let e = ee(N.BUILT_IN_SECTIONS[R.BuiltInSectionId.BUILT_IN], C, E);
    null != e && A.push(e)
  }
  let y = A.flatMap(e => e.data.map(t => ({
    ...t,
    section: e.section
  })));
  if (u === M.ScoreMethod.COMMAND_ONLY || u === M.ScoreMethod.COMMAND_OR_APPLICATION) {
    let e = t.context,
      n = T.default.getGuild(t.context.guild_id);
    d.commands.useFrecency && I.FrecencyUserSettingsActionCreators.loadIfNecessary(), y.sort((t, i) => {
      if (d.commands.useScore) {
        var l, a;
        let e = null !== (l = t.score) && void 0 !== l ? l : 0,
          n = null !== (a = i.score) && void 0 !== a ? a : 0;
        if (e !== n) return e - n
      }
      if (d.commands.useFrecency) {
        let l = g.default.getScoreWithoutLoadingLatest({
            channel: e,
            guild: n
          }, t),
          a = g.default.getScoreWithoutLoadingLatest({
            channel: e,
            guild: n
          }, i);
        if (l !== a) return a - l
      }
      return es(t.displayName, i.displayName)
    })
  }
  return {
    commands: y,
    descriptors: A.map(e => e.section),
    sectionedCommands: A,
    loading: (null == n ? void 0 : n.fetchState.fetching) === !0 || (null == i ? void 0 : i.fetchState.fetching) === !0
  }
}

function ee(e, t, n) {
  let i, {
      query: l,
      splitQuery: a,
      allowEmptySections: s,
      scoreMethod: r,
      permissionContext: o
    } = n,
    {
      context: u,
      userId: d,
      roleIds: c,
      isImpersonating: p
    } = o,
    f = null != u.guild_id ? D.computeAllowedForUser(e.permissions, u.guild_id, d, c, p) : null,
    m = null != u.guild_id ? D.computeAllowedForChannel(e.permissions, u, u.guild_id) : null,
    I = [];
  for (let n of t) {
    let t = D.hasAccess(n, o, f, m, e.botId);
    t === D.HasAccessResult.ALLOWED && I.push(n)
  }
  return 0 !== (i = r !== M.ScoreMethod.NONE && null != l && null != a ? function(e, t, n, i, l) {
    let a;
    let s = [];
    if (l === M.ScoreMethod.APPLICATION_ONLY || l === M.ScoreMethod.COMMAND_OR_APPLICATION) {
      let t = i.name.toLocaleLowerCase();
      t.startsWith(e) ? a = 5 : t.includes(e) && (a = 6)
    }
    let r = t[0],
      o = t.slice(1).join(" ");
    for (let t of n) {
      let n;
      if (l === M.ScoreMethod.COMMAND_ONLY || l === M.ScoreMethod.COMMAND_OR_APPLICATION) {
        var u;
        n = null !== (u = function(e, t, n, i) {
          var l;
          let a = e.name,
            s = e.displayName;
          if (a.startsWith(t) || s.startsWith(t)) return 0;
          if (a.startsWith(n)) {
            let e = a.split(" ").slice(1).join(" ");
            if (e.startsWith(i)) return 1
          }
          if (s.startsWith(n)) {
            let e = s.split(" ").slice(1).join(" ");
            if (e.startsWith(i)) return 1
          }
          if (a.includes(t) || (null == s ? void 0 : s.includes(t))) return 2;
          let r = !1;
          for (let {
              name: n,
              serverLocalizedName: i
            }
            of null !== (l = e.options) && void 0 !== l ? l : []) {
            if (n.startsWith(t) || "".concat(a, " ").concat(n).startsWith(t) || null != s && "".concat(s, " ").concat(n).startsWith(t) || null != i && (i.startsWith(t) || "".concat(a, " ").concat(i).startsWith(t) || null != s && "".concat(s, " ").concat(i).startsWith(t))) return 3;
            (n.includes(t) || (null == i ? void 0 : i.includes(t))) && (r = !0)
          }
          if (r) return 4
        }(t, e, r, o)) && void 0 !== u ? u : a
      } else n = a;
      void 0 !== n && s.push({
        ...t,
        score: n
      })
    }
    return s
  }(l, a, I, e, r) : I).length || s ? ((r === M.ScoreMethod.NONE || r === M.ScoreMethod.APPLICATION_ONLY) && i.sort((e, t) => es(e.displayName, t.displayName)), {
    section: e,
    data: i
  }) : null
}

function et(e) {
  var t;
  return null != e.guild_id || e.type === P.ChannelTypes.DM && (null === (t = A.default.getUser(e.getRecipientId())) || void 0 === t ? void 0 : t.bot) === !0
}

function en(e) {
  return !! function(e) {
    var t;
    return (null === (t = e.result) || void 0 === t ? void 0 : t.version) !== e.serverVersion
  }(e) && !e.fetchState.fetching && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
}

function ei(e) {
  var t, n, i, l;
  let a = {
    ...e,
    choices: null === (t = e.choices) || void 0 === t ? void 0 : t.map(el),
    description: null !== (i = e.description_default) && void 0 !== i ? i : e.description,
    name: null !== (l = e.name_default) && void 0 !== l ? l : e.name,
    options: null === (n = e.options) || void 0 === n ? void 0 : n.map(ei)
  };
  return e.description !== e.description_default && (a.description_localized = e.description), e.name !== e.name_default && (a.name_localized = e.name), a
}

function el(e) {
  var t;
  let n = {
    ...e,
    name: null !== (t = e.name_default) && void 0 !== t ? t : e.name
  };
  return e.name !== e.name_default && (n.name_localized = e.name), n
}

function ea(e, t) {
  let n = [];
  if (null != e.user && n.push({
      type: h.ApplicationCommandPermissionType.USER,
      id: t,
      permission: e.user
    }), null != e.channels)
    for (let [t, i] of Object.entries(e.channels)) n.push({
      type: h.ApplicationCommandPermissionType.CHANNEL,
      id: t,
      permission: i
    });
  if (null != e.roles)
    for (let [t, i] of Object.entries(e.roles)) n.push({
      type: h.ApplicationCommandPermissionType.ROLE,
      id: t,
      permission: i
    });
  return n
}(l = i || (i = {}))[l.COMMAND_NAME_STARTS_WITH = 0] = "COMMAND_NAME_STARTS_WITH", l[l.STARTS_WITH_COMMAND_NAME = 1] = "STARTS_WITH_COMMAND_NAME", l[l.COMMAND_NAME_CONTAINS = 2] = "COMMAND_NAME_CONTAINS", l[l.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME = 3] = "STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME", l[l.OPTION_NAME_CONTAINS = 4] = "OPTION_NAME_CONTAINS", l[l.SECTION_NAME_STARTS_WITH = 5] = "SECTION_NAME_STARTS_WITH", l[l.SECTION_NAME_CONTAINS = 6] = "SECTION_NAME_CONTAINS";

function es(e, t) {
  return K.collator.compare(e, t)
}