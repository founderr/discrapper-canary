"use strict";
n.r(t), n.d(t, {
  search: function() {
    return U
  },
  default: function() {
    return j
  },
  useSearchStoreOpenState: function() {
    return X
  },
  useDiscoveryState: function() {
    return Q
  },
  useQueryState: function() {
    return ee
  }
}), n("222007"), n("424973"), n("506083");
var i = n("884691"),
  l = n("483366"),
  a = n.n(l),
  s = n("693566"),
  r = n.n(s),
  o = n("446674"),
  u = n("872717"),
  d = n("913144"),
  c = n("798609"),
  p = n("763898"),
  f = n("938767"),
  m = n("38654"),
  I = n("252063"),
  _ = n("140596"),
  T = n("685841"),
  C = n("872173"),
  A = n("374363"),
  E = n("42203"),
  N = n("923959"),
  S = n("957255"),
  g = n("18494"),
  O = n("599110"),
  M = n("718517"),
  h = n("589777"),
  v = n("369010"),
  y = n("342564"),
  D = n("524768"),
  R = n("389153"),
  P = n("317041"),
  L = n("49111");

function U(e, t, n) {
  var i;
  let l;
  if ((null == n ? void 0 : n.abortable) && (null == n ? void 0 : n.signal.aborted)) return Promise.resolve(null);
  let a = {
    type: t.type,
    role_ids: null === (i = t.roleIds) || void 0 === i ? void 0 : i.join(",")
  };
  "applicationId" in t && null != t.applicationId ? (a.application_id = t.applicationId, l = "application") : "query" in t ? (a.query = t.query, a.limit = t.limit, a.cursor = t.cursor, l = "query") : "cursor" in t ? (a.limit = t.limit, a.cursor = t.cursor, null != t.commandIds && t.commandIds.length > 0 && (a.command_ids = t.commandIds.join(",")), l = "discovery") : l = "unknown", "includeApplications" in t && (a.include_applications = t.includeApplications), "checkPermissions" in t && (a.check_permissions = t.checkPermissions);
  let s = async i => {
    var l;
    return await new Promise(e => {
      setTimeout(e, i)
    }), U(e, {
      ...t,
      retries: (null !== (l = t.retries) && void 0 !== l ? l : 0) + 1
    }, n)
  };
  (null == t.retries || 0 === t.retries) && (t.start = performance.now());
  let r = e => {
    var i, s, r;
    if (null == t.start) return;
    let o = performance.now() - t.start;
    O.default.track(L.AnalyticEvents.APPLICATION_COMMAND_PERFORMANCE, {
      duration_ms: o,
      aborted: null !== (i = null == n ? void 0 : n.signal.aborted) && void 0 !== i && i,
      error: e,
      kind: l,
      command_type: t.type,
      include_applications: null !== (s = a.include_applications) && void 0 !== s && s,
      retries: null !== (r = t.retries) && void 0 !== r ? r : 0
    })
  };
  return u.default.get({
    url: L.Endpoints.APPLICATION_COMMANDS_SEARCH(e),
    query: a,
    signal: (null == n ? void 0 : n.abortable) ? n.signal : void 0
  }).then(e => {
    var t, n, i;
    return 202 === e.status ? s(5e3) : (r(!1), {
      applicationCommands: e.body.application_commands,
      applications: e.body.applications,
      nextCursor: null === (t = e.body.cursor) || void 0 === t ? void 0 : t.next,
      prevCursor: null === (n = e.body.cursor) || void 0 === n ? void 0 : n.previous,
      repaired: null === (i = e.body.cursor) || void 0 === i ? void 0 : i.repaired
    })
  }, e => (null == n ? void 0 : n.abortable) && (null == n ? void 0 : n.signal.aborted) ? (r(!0), null) : 429 === e.status ? s(e.body.retry_after * M.default.Millis.SECOND) : (r(!0), null))
}
let F = (e, t, n) => {
  let {
    channel: i,
    guild: l
  } = e;
  return null != i ? (0, h.getBuiltInCommands)(t, !0, n).filter(e => null == e.predicate || e.predicate({
    channel: i,
    guild: l
  })) : []
};

function H(e, t) {
  if (0 === t.length) return e;
  let n = [...e],
    i = (0, R.buildApplicationCommands)(t).filter(e => {
      let t = n.findIndex(t => t.id === e.id);
      return !(t >= 0) || (n[t] = e, !1)
    });
  return [...n, ...i]
}

function b(e) {
  let t = e.map(R.getApplicationCommandSection);
  return t.concat(h.BUILT_IN_SECTIONS[P.BuiltInSectionId.BUILT_IN])
}
let B = (e, t) => ({
    type: t,
    inputType: D.ApplicationCommandInputType.PLACEHOLDER,
    id: "placeholder-".concat(e),
    name: "",
    displayName: "",
    description: "",
    displayDescription: "",
    applicationId: ""
  }),
  G = [h.BUILT_IN_SECTIONS[P.BuiltInSectionId.BUILT_IN]];
class w extends o.default.Store {
  initialize() {
    this.waitFor(A.default), this.syncWith([S.default], () => {
      this.shouldResetAll = !0
    }), this.syncWith([A.default], V)
  }
  getChannelState(e, t) {
    var n;
    return null === (n = K.channelStates.get(e)) || void 0 === n ? void 0 : n[t]
  }
  getOrInsertChannelState(e, t) {
    let n = K.channelStates,
      i = n.has(e);
    if (O.default.track(L.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
        miss: !i,
        size: n.length
      }), !i) {
      let t = () => ({
          discoveryInitialized: !1,
          topCursor: null,
          scrollDownCursor: null,
          applicationSections: null,
          applicationCommands: null,
          filteredSectionId: null,
          pendingQueries: new Map,
          queries: new Map,
          queriedApplicationId: null,
          sawFrecencySection: !1
        }),
        i = {
          [c.ApplicationCommandType.CHAT]: t(),
          [c.ApplicationCommandType.MESSAGE]: t(),
          [c.ApplicationCommandType.USER]: t(),
          [c.ApplicationCommandType.PRIMARY_ENTRY_POINT]: t()
        };
      n.set(e, i)
    }
    return n.get(e)[t]
  }
  getApplicationSections(e, t) {
    var n, i;
    return null !== (i = null === (n = this.getChannelState(e, t)) || void 0 === n ? void 0 : n.applicationSections) && void 0 !== i ? i : G
  }
  getQueryCommands(e, t, n) {
    var i, l, a;
    let s = this.getChannelState(e, t);
    return null !== (a = null == s ? void 0 : null === (i = s.queries.get(n)) || void 0 === i ? void 0 : i.commands) && void 0 !== a ? a : null == s ? void 0 : null === (l = s.pendingQueries.get(n)) || void 0 === l ? void 0 : l.commands
  }
  hasQueryResults(e, t, n) {
    var i, l;
    return null !== (l = null === (i = this.getChannelState(e, t)) || void 0 === i ? void 0 : i.queries.has(n)) && void 0 !== l && l
  }
  constructor(...e) {
    super(...e), this.channelStates = new r({
      max: 5
    }), this.componentIsOpen = !1, this.shouldResetAll = !1, this.shouldResetGuild = null, this.shouldResetDMs = !1
  }
}

function x(e) {
  var t;
  let {
    guildId: n
  } = e, i = g.default.getChannelId();
  return null != i && (null === (t = E.default.getChannel(i)) || void 0 === t ? void 0 : t.guild_id) !== n ? W(n) : K.componentIsOpen ? (K.shouldResetGuild = n, !1) : W(n)
}

function W(e) {
  let t = N.default.getChannels(e),
    n = t[0, N.GUILD_SELECTABLE_CHANNELS_KEY].concat(t[N.GUILD_VOCAL_CHANNELS_KEY]),
    i = K.channelStates.length;
  for (let e of n) K.channelStates.del(e.channel.id);
  return K.channelStates.length !== i
}

function Y() {
  let e = K.channelStates.length;
  return K.channelStates.keys().forEach(e => {
    var t;
    (null === (t = E.default.getChannel(e)) || void 0 === t ? void 0 : t.isPrivate()) && K.channelStates.del(e)
  }), K.channelStates.length !== e
}

function V() {
  var e, t, n;
  let i = null !== (n = null === (t = A.default.settings.textAndImages) || void 0 === t ? void 0 : null === (e = t.viewNsfwCommands) || void 0 === e ? void 0 : e.value) && void 0 !== n && n,
    l = i !== K.viewNsfwCommands;
  if (l) {
    if (K.viewNsfwCommands = i, !K.componentIsOpen) return Y();
    K.shouldResetDMs = !0
  }
  return !1
}

function k(e) {
  return !!K.channelStates.has(e) && (K.channelStates.del(e), !0)
}

function q() {
  K.shouldResetAll = !1, K.shouldResetGuild = null, K.shouldResetDMs = !1, K.componentIsOpen = !1, K.channelStates.reset()
}
w.displayName = "ApplicationCommandSearchStore";
let K = new w(d.default, {
  LOGOUT: q,
  CONNECTION_OPEN: q,
  APPLICATION_COMMAND_SEARCH_STORE_UPDATE: e => {
    let {
      channelId: t,
      commandType: n,
      state: i
    } = e, l = K.channelStates.get(t);
    if (null == l) return;
    let a = l[n],
      s = {
        ...a,
        ...i
      };
    l[n] = s, null == a.applicationCommands && null != s.applicationCommands && s.pendingQueries.forEach((e, t) => {
      let {
        context: n,
        commandType: i,
        limit: l
      } = e;
      Z({
        context: n,
        commandType: i,
        query: t,
        limit: l,
        canOnlyUseTextCommands: !1
      })
    })
  },
  APPLICATION_COMMAND_SEARCH_STORE_QUERY(e) {
    let {
      context: t,
      commandType: n,
      query: i,
      limit: l,
      applicationId: a
    } = e, s = null != T.default.getPendingReply(t.channel.id), r = Z({
      context: t,
      commandType: n,
      query: i,
      limit: l,
      canOnlyUseTextCommands: s,
      applicationId: a
    });
    !r && !s && $({
      context: t,
      commandType: n,
      query: i,
      limit: l,
      applicationId: a
    })
  },
  CHANNEL_UPDATES(e) {
    let {
      channels: t
    } = e;
    for (let e of t)
      if (null != e.guild_id && x({
          guildId: e.guild_id
        })) return !0;
    return !1
  },
  GUILD_APPLICATION_COMMAND_INDEX_UPDATE: x,
  IMPERSONATE_UPDATE: x,
  IMPERSONATE_STOP: x,
  APPLICATION_COMMAND_SEARCH_STORE_UI_UPDATE(e) {
    let {
      isOpen: t
    } = e;
    if (K.componentIsOpen = t, K.shouldResetAll) {
      q();
      return
    }
    let n = !1;
    return null != K.shouldResetGuild && (n = W(K.shouldResetGuild), K.shouldResetGuild = null), K.shouldResetDMs && (n = Y() || n, K.shouldResetDMs = !1), n
  },
  PRIVATE_CHANNEL_INTEGRATION_CREATE(e) {
    let {
      integration: t
    } = e;
    return k(t.channel_id)
  },
  PRIVATE_CHANNEL_INTEGRATION_UPDATE(e) {
    let {
      integration: t
    } = e;
    return k(t.channel_id)
  },
  PRIVATE_CHANNEL_INTEGRATION_DELETE(e) {
    let {
      channelId: t
    } = e;
    return k(t)
  },
  FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS(e) {
    let {
      channelId: t
    } = e;
    return k(t)
  }
});
var j = K;
let z = e => {
  if (null == e) return;
  let t = m.default.getViewingRoles(e);
  if (null == t) return;
  let n = Object.keys(t);
  return 0 === n.length && n.push(e), n
};

function X() {
  i.useEffect(() => (d.default.dispatch({
    type: "APPLICATION_COMMAND_SEARCH_STORE_UI_UPDATE",
    isOpen: !0
  }), () => {
    d.default.dispatch({
      type: "APPLICATION_COMMAND_SEARCH_STORE_UI_UPDATE",
      isOpen: !1
    })
  }), [])
}

function Q(e, t, n, l) {
  let {
    canOnlyUseTextCommands: a,
    canUseFrecency: s
  } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, {
    discoveryInitialized: r,
    topCursor: u,
    scrollDownCursor: c,
    applicationSections: m,
    applicationCommands: T,
    filteredSectionId: C,
    sawFrecencySection: A
  } = (0, o.useStateFromStores)([K], () => K.getOrInsertChannelState(e.id, t), [e.id, t]), E = i.useCallback(n => {
    d.default.dispatch({
      type: "APPLICATION_COMMAND_SEARCH_STORE_UPDATE",
      channelId: e.id,
      commandType: t,
      state: n
    })
  }, [e.id, t]);
  (0, I.usePrivateChannelIntegrationState)({
    channelId: e.id
  });
  let N = i.useRef(!1),
    g = (0, p.default)(),
    O = i.useCallback(function(n, i) {
      let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
      if (N.current) return;
      N.current = !0;
      let a = z(e.guild_id);
      U(e.id, {
        type: t,
        roleIds: a,
        ...n
      }, {
        abortable: l,
        signal: g
      }).then(e => {
        N.current = !1, i(e)
      })
    }, [e.id, e.guild_id, t, g]),
    M = (0, f.useCommandContext)(e),
    D = (0, v.useTopCommands)(M),
    L = (0, v.useTopRealCommands)(M),
    G = (0, o.useStateFromStores)([S.default, _.default], () => (0, R.canUseApplicationCommands)(S.default, _.default, null != a && a, e), [a, e]);
  i.useEffect(() => {
    if (r) return;
    if (E({
        discoveryInitialized: !0
      }), !G || null != T && T.length > 0) return;
    let t = e.isPrivate() ? {} : {
      limit: l,
      commandIds: r ? void 0 : L,
      cursor: null != u ? u : void 0
    };
    O({
      ...t,
      includeApplications: null == m
    }, e => {
      if (null == e) return;
      let t = H([], e.applicationCommands),
        n = {
          applicationCommands: t,
          topCursor: e.prevCursor,
          scrollDownCursor: e.nextCursor
        };
      if (null != e.applications) {
        var i;
        n.applicationSections = b(null !== (i = e.applications) && void 0 !== i ? i : [])
      }
      E(n)
    }, !1)
  }, [T, e, l, G, m, r, u, O, L, E]);
  let w = i.useCallback(() => {
      null != c && O({
        limit: l,
        cursor: c
      }, e => {
        if (null == e) return;
        let t = !1 === e.repaired ? H([], e.applicationCommands) : H(null != T ? T : [], e.applicationCommands);
        E({
          applicationCommands: t,
          scrollDownCursor: e.nextCursor
        })
      })
    }, [l, O, c, T, E]),
    x = i.useCallback(t => {
      if (!N.current && t !== C) {
        if (null == t) {
          e.isPrivate() ? E({
            filteredSectionId: null,
            discoveryInitialized: !0
          }) : E({
            filteredSectionId: null,
            applicationCommands: null,
            discoveryInitialized: !1
          });
          return
        }!(t in h.BUILT_IN_SECTIONS || e.isPrivate()) && O({
          applicationId: t
        }, e => {
          null != e && E({
            applicationCommands: H([], e.applicationCommands)
          })
        }), E({
          filteredSectionId: t,
          scrollDownCursor: null
        })
      }
    }, [e, O, E, C]);
  X(), i.useEffect(() => () => {
    var n;
    (null === (n = K.channelStates.get(e.id)) || void 0 === n ? void 0 : n[t].filteredSectionId) != null && x(null)
  }, []);
  let W = i.useMemo(() => F(M, t, a), [M, t, a]),
    Y = i.useMemo(() => {
      if (!s) return [];
      let e = (G && null != T ? T : []).concat(W);
      return e.filter(e => D.includes(e.id)).sort((e, t) => {
        let n = y.default.getScoreWithoutLoadingLatest(M, e),
          i = y.default.getScoreWithoutLoadingLatest(M, t);
        return i - n
      }).slice(0, P.DISCOVERY_COMMANDS_FRECENCY_LIMIT)
    }, [s, D, G, T, W, M]);
  i.useEffect(() => {
    !A && Y.length > 0 && E({
      sawFrecencySection: !0
    })
  }, [E, Y, A]);
  let V = i.useMemo(() => {
      var e;
      let t = [];
      return (Y.length > 0 || A) && (t = t.concat(h.BUILT_IN_SECTIONS[P.BuiltInSectionId.FRECENCY])), G && null != m && (t = t.concat(m)), (null === (e = t[t.length - 1]) || void 0 === e ? void 0 : e.id) !== P.BuiltInSectionId.BUILT_IN && (t = t.concat(h.BUILT_IN_SECTIONS[P.BuiltInSectionId.BUILT_IN])), t
    }, [G, m, Y, A]),
    k = G && (!r || N.current || null != c),
    q = i.useMemo(() => {
      if (!k) return [];
      let e = [];
      for (let i = 0; i < n; i++) e.push(B(i, t));
      return e
    }, [k, n, t]),
    {
      activeSections: j,
      commandsByActiveSection: Q
    } = i.useMemo(() => {
      let e = [],
        t = [];
      return V.forEach(n => {
        let i;
        (null == C || n.id === C) && ((i = n.id === P.BuiltInSectionId.BUILT_IN ? k ? [] : [...W] : n.id === P.BuiltInSectionId.FRECENCY ? [...Y] : (null != T ? T : []).filter(e => e.applicationId === n.id)).length > 0 || n.id === C) && (e.push(n), t.push({
          section: n,
          data: i
        }))
      }), t.length > 0 && q.length > 0 && t[t.length - 1].data.push(...q), {
        activeSections: e,
        commandsByActiveSection: t
      }
    }, [V, Y, T, W, q, k, C]),
    Z = i.useMemo(() => {
      let e = [];
      return e = e.concat(Y), G && null != T && (e = e.concat(T)), e = e.concat(W)
    }, [G, Y, T, W]);
  return {
    filterSection: x,
    scrollDown: w,
    loading: N,
    filteredSectionId: C,
    hasMoreAfter: k,
    commands: Z,
    sectionDescriptors: V,
    activeSections: j,
    commandsByActiveSection: Q,
    placeholders: q
  }
}

function Z(e) {
  let t, {
      context: n,
      commandType: i,
      query: l,
      limit: a,
      canOnlyUseTextCommands: s,
      applicationCommands: r,
      scrollDownCursor: o,
      applications: u,
      applicationId: d = null
    } = e,
    c = K.getOrInsertChannelState(n.channel.id, i);
  if (c.queriedApplicationId !== d) c.queries.clear(), c.pendingQueries.clear(), c.queriedApplicationId = d;
  else if (c.queries.has(l)) return !0;
  if (null != u && (c.applicationSections = b(u)), s) t = [];
  else {
    var p;
    t = n.channel.isPrivate() ? null !== (p = c.applicationCommands) && void 0 !== p ? p : [] : H([], null != r ? r : [])
  }
  let f = F(n, i, s),
    m = (0, R.canUseApplicationCommands)(S.default, _.default, s, n.channel) && (n.channel.isPrivate() ? null == c.applicationCommands : null == r),
    I = [],
    T = !1;
  if (m)
    for (let e = l.length - 1; e > 0; e -= 1) {
      let n = l.slice(0, e),
        i = c.queries.get(n);
      if (null != i) {
        T = i.done, i.commands.forEach(e => {
          null == t.find(t => t.id === e.id) && null == f.find(t => t.id === e.id) && I.push(e)
        });
        break
      }
    }
  T && (m = !1);
  let A = [],
    E = l.split(" ");
  if ([...t, ...I, ...f].forEach(e => {
      var t;
      let n = null === (t = c.applicationSections) || void 0 === t ? void 0 : t.find(t => t.id === e.applicationId),
        i = et(l, E, e, n);
      i > 0 && A.push({
        ...e,
        score: i
      })
    }), C.FrecencyUserSettingsActionCreators.loadIfNecessary(), A.sort((e, t) => {
      if (e.score !== t.score) return t.score - e.score;
      let i = y.default.getScoreWithoutLoadingLatest(n, e),
        l = y.default.getScoreWithoutLoadingLatest(n, t);
      return i !== l ? l - i : e.displayName.localeCompare(t.displayName)
    }), m || null != o)
    for (let e = 0; e < 4; e += 1) A.push({
      ...B(e, i),
      score: 0
    });
  return m ? (c.pendingQueries.set(l, {
    context: n,
    commandType: i,
    limit: a,
    commands: A
  }), c.queries.delete(l)) : (c.pendingQueries.delete(l), c.queries.set(l, {
    commands: A,
    done: T || null == o,
    scrollDownCursor: o
  })), T
}
let $ = a(e => {
    var t;
    let {
      context: n,
      commandType: i,
      query: l,
      limit: a,
      applicationId: s
    } = e;
    if (!(0, R.canUseApplicationCommands)(S.default, _.default, !1, n.channel)) return;
    let r = K.getOrInsertChannelState(n.channel.id, i);
    if (n.channel.isPrivate()) {
      !r.discoveryInitialized && null == r.applicationCommands && U(n.channel.id, {
        type: i,
        includeApplications: null == r.applicationSections
      }).then(e => {
        var t;
        if (null == e) return;
        let l = {
          applicationCommands: H([], null !== (t = e.applicationCommands) && void 0 !== t ? t : [])
        };
        null != e.applications && (l.applicationSections = b(e.applications)), d.default.dispatch({
          type: "APPLICATION_COMMAND_SEARCH_STORE_UPDATE",
          channelId: n.channel.id,
          commandType: i,
          state: l
        })
      });
      return
    }(null === (t = r.queries.get(l)) || void 0 === t ? void 0 : t.scrollDownCursor) == null && U(n.channel.id, {
      type: i,
      roleIds: z(n.channel.guild_id),
      query: l,
      limit: a,
      applicationId: s,
      includeApplications: !r.discoveryInitialized && null == r.applicationSections
    }).then(e => {
      if (null != e) K.channelStates.has(n.channel.id) && (Z({
        context: n,
        commandType: i,
        query: l,
        limit: a,
        canOnlyUseTextCommands: !1,
        applicationCommands: e.applicationCommands,
        scrollDownCursor: e.nextCursor,
        applications: e.applications,
        applicationId: s
      }), K.emitChange())
    })
  }, 250, {
    leading: !0,
    trailing: !0,
    maxWait: 750
  }),
  J = async (e, t) => {
    var n;
    let {
      context: i,
      commandType: l,
      query: a,
      limit: s
    } = e;
    if (!(0, R.canUseApplicationCommands)(S.default, _.default, !1, i.channel) || i.channel.isPrivate()) return;
    let r = K.getOrInsertChannelState(i.channel.id, l),
      o = null === (n = r.queries.get(a)) || void 0 === n ? void 0 : n.scrollDownCursor;
    null != o && await U(i.channel.id, {
      type: l,
      roleIds: z(i.channel.guild_id),
      query: a,
      limit: s,
      cursor: o,
      includeApplications: !r.discoveryInitialized && null == r.applicationSections
    }, {
      abortable: !0,
      signal: t
    }).then(e => {
      var t, n;
      if (null == e || !K.channelStates.has(i.channel.id)) return;
      let s = null !== (n = null === (t = r.queries.get(a)) || void 0 === t ? void 0 : t.commands.filter(e => e.inputType !== D.ApplicationCommandInputType.PLACEHOLDER)) && void 0 !== n ? n : [],
        o = H([], e.applicationCommands),
        u = [],
        d = a.split(" ");
      o.forEach(e => {
        var t;
        if (null != s.find(t => t.id === e.id)) return;
        let n = null === (t = r.applicationSections) || void 0 === t ? void 0 : t.find(t => t.id === e.applicationId),
          i = et(a, d, e, n);
        i > 0 && u.push({
          ...e,
          score: i
        })
      }), C.FrecencyUserSettingsActionCreators.loadIfNecessary(), u.sort((e, t) => {
        if (e.score !== t.score) return t.score - e.score;
        let n = y.default.getScoreWithoutLoadingLatest(i, e),
          l = y.default.getScoreWithoutLoadingLatest(i, t);
        return n !== l ? l - n : e.displayName.localeCompare(t.displayName)
      });
      let c = e.nextCursor;
      if (null != c)
        for (let e = 0; e < 4; e += 1) u.push({
          ...B(e, l),
          score: 0
        });
      r.queries.set(a, {
        commands: e.repaired ? u : [...s, ...u],
        done: !0,
        scrollDownCursor: c
      }), K.emitChange()
    })
  };

function ee(e, t, n, l) {
  X();
  let a = (0, p.default)(),
    {
      commands: s,
      applicationSections: r
    } = (0, o.useStateFromStoresObject)([K], () => {
      var i, l, a;
      let {
        queries: s,
        pendingQueries: r,
        applicationSections: o
      } = K.getOrInsertChannelState(e.id, t);
      return {
        applicationSections: o,
        commands: null !== (a = null === (i = s.get(n)) || void 0 === i ? void 0 : i.commands) && void 0 !== a ? a : null === (l = r.get(n)) || void 0 === l ? void 0 : l.commands
      }
    }, [e.id, t, n]);
  i.useEffect(() => {
    d.default.dispatch({
      type: "APPLICATION_COMMAND_SEARCH_STORE_QUERY",
      context: (0, f.getCommandContext)(e),
      query: n,
      limit: l,
      commandType: t
    })
  }, [e, t, n, l]);
  let u = i.useRef(!1),
    c = i.useCallback(() => {
      !u.current && (u.current = !0, J({
        commandType: t,
        context: {
          channel: e
        },
        query: n,
        limit: l
      }, a).finally(() => {
        u.current = !1
      }))
    }, [t, e, n, a, l]);
  return {
    commands: s,
    sections: null != r ? r : G,
    scrollDown: c
  }
}

function et(e, t, n, i) {
  var l;
  let a = n.name,
    s = n.displayName;
  if (a.startsWith(e) || s.startsWith(e)) return 6;
  if (a.startsWith(t[0])) {
    let e = a.split(" ").slice(1).join(" ");
    if (e.startsWith(t.slice(1).join(" "))) return 5
  }
  if (s.startsWith(t[0])) {
    let e = s.split(" ").slice(1).join(" ");
    if (e.startsWith(t.slice(1).join(" "))) return 5
  }
  if (a.includes(e) || (null == s ? void 0 : s.includes(e))) return 4;
  let r = !1;
  for (let {
      name: t,
      serverLocalizedName: i
    }
    of null !== (l = n.options) && void 0 !== l ? l : []) {
    if (t.startsWith(e) || "".concat(a, " ").concat(t).startsWith(e)) return 3;
    if (null != s && "".concat(s, " ").concat(t).startsWith(e)) return 2;
    if (null != i && (i.startsWith(e) || "".concat(a, " ").concat(i).startsWith(e) || null != s && "".concat(s, " ").concat(i).startsWith(e))) return 3;
    (t.includes(e) || (null == i ? void 0 : i.includes(e))) && (r = !0)
  }
  return r ? 2 : (null == i ? void 0 : i.name.toLocaleLowerCase().startsWith(e)) ? 1 : 0
}