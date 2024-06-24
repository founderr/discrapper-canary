"use strict";
n.d(t, {
  Q2: function() {
    return p
  },
  pe: function() {
    return R
  }
}), n(47120), n(653041), n(536091);
var i = n(470079),
  r = n(392711),
  s = n.n(r),
  o = n(373793),
  a = n(442837),
  l = n(911969),
  u = n(127255),
  _ = n(654455),
  c = n(213459),
  d = n(807169),
  E = n(104793),
  I = n(674588),
  T = n(809547),
  h = n(822245),
  S = n(631827),
  f = n(783097),
  N = n(689079);

function A(e, t) {
  let n = h.Z.getScoreWithoutLoadingLatest(e.id);
  return h.Z.getScoreWithoutLoadingLatest(t.id) - n
}

function m(e, t) {
  let n = (0, f.$d)(e),
    i = (0, f.$d)(t);
  return (0, c.un)(n, i)
}

function O(e, t) {
  return (0, c.un)(e.displayName, t.displayName)
}

function R(e) {
  let {
    channel: t,
    query: n,
    commandLimit: r,
    applicationLimit: o,
    searchesCommands: a = !0,
    searchesBots: I = !0,
    searchesActivities: T = !0
  } = e, {
    commands: h,
    commandSectionMap: R,
    loading: p
  } = function(e) {
    var t, n;
    let {
      channel: r,
      includeBuiltIn: s = !0,
      allowFetch: o = !0
    } = e, a = (0, c.em)(r, !0, o), l = (0, c.PL)(!0, o);
    return i.useMemo(() => {
      var e, t, n, i, o;
      let u = null !== (n = null === (e = a.result) || void 0 === e ? void 0 : e.sections) && void 0 !== n ? n : {},
        _ = null !== (i = null === (t = l.result) || void 0 === t ? void 0 : t.sections) && void 0 !== i ? i : {},
        d = [...Object.keys(u), ...Object.keys(_).filter(e => !(e in u))];
      s && d.push(N.bi.BUILT_IN);
      let E = [],
        I = {};
      for (let e of d) {
        let t = (0, c.If)(r, e),
          n = null !== (o = t.sectionCommands) && void 0 !== o ? o : [];
        E.push(...n), n.forEach(e => {
          null != t.descriptor && (I[e.id] = t.descriptor)
        })
      }
      return {
        commands: E,
        commandSectionMap: I,
        loading: !0 === a.fetchState.fetching || !0 === l.fetchState.fetching
      }
    }, [r, s, a.fetchState.fetching, null === (t = a.result) || void 0 === t ? void 0 : t.sections, l.fetchState.fetching, null === (n = l.result) || void 0 === n ? void 0 : n.sections])
  }({
    channel: t,
    includeBuiltIn: !1
  }), {
    apps: g
  } = function(e) {
    let {
      channel: t,
      onlyWithCommands: n,
      includeBuiltIn: i,
      allowFetch: r = !0
    } = e, s = (0, d.Hs)(t, l.yU.CHAT).hasBaseAccessPermissions, o = (0, c.em)(t, s, r), a = (0, c.PL)(s, r), u = [], _ = new Set;
    if (null != o.result)
      for (let e of Object.values(o.result.sections)) {
        let t = e.descriptor.application;
        null != t && (Object.keys(e.commands).length > 0 || !n) && (u.push(t), _.add(t.id))
      }
    if (null != a.result)
      for (let e of Object.values(a.result.sections)) {
        let t = e.descriptor.application;
        null != t && !_.has(t.id) && (Object.keys(e.commands).length > 0 || !n) && u.push(t)
      }
    return i && u.push(f.Wx), {
      apps: u,
      loading: (null == o ? void 0 : o.fetchState.fetching) === !0 || (null == a ? void 0 : a.fetchState.fetching) === !0
    }
  }({
    channel: t,
    onlyWithCommands: !0,
    includeBuiltIn: !1
  }), C = (0, u.Z)({
    guildId: t.getGuildId(),
    channel: t
  }), v = i.useMemo(() => {
    var e;
    if (!a) return [];
    return (0, S.N)(h, {
      limit: r,
      filterPredicates: [function(e) {
        let t = (0, d.k)(e, l.yU.CHAT),
          n = {};
        return i => {
          let {
            context: r,
            userId: s,
            roleIds: o,
            isImpersonating: a
          } = t;
          if (!(i.applicationId in n)) {
            let {
              descriptor: t,
              isGuildInstalled: l,
              isUserInstalled: u
            } = (0, c.If)(e, i.applicationId), _ = null != r.guild_id ? E.ML(null == t ? void 0 : t.permissions, r.guild_id, s, o, a) : null, d = null != r.guild_id ? E.ZJ(null == t ? void 0 : t.permissions, r, r.guild_id) : null;
            n[i.applicationId] = {
              descriptor: t,
              applicationAllowedForUser: _,
              applicationAllowedForChannel: d,
              isGuildInstalled: l,
              isUserInstalled: u
            }
          }
          let {
            descriptor: l,
            applicationAllowedForChannel: u,
            applicationAllowedForUser: _,
            isGuildInstalled: d,
            isUserInstalled: I
          } = n[i.applicationId];
          return E.Ft(i, t, {
            applicationAllowedForUser: _,
            applicationAllowedForChannel: u,
            commandBotId: null == l ? void 0 : l.botId,
            isGuildInstalled: d,
            isUserInstalled: I
          }) === E.mF.ALLOWED
        }
      }(t)],
      bucketPredicates: [function(e) {
        return t => {
          let n = t.name,
            i = t.displayName;
          return n.startsWith(e) || i.startsWith(e)
        }
      }(e = n), function(e) {
        let t = null == e ? void 0 : e.split(" "),
          n = t[0],
          i = t.slice(1).join(" ");
        return e => {
          let t = e.name,
            r = e.displayName;
          return !!(t.startsWith(n) && t.split(" ").slice(1).join(" ").startsWith(i) || r.startsWith(n) && r.split(" ").slice(1).join(" ").startsWith(i)) || !1
        }
      }(e), function(e) {
        return t => {
          let n = t.name,
            i = t.displayName;
          return n.includes(e) || i.includes(e)
        }
      }(e), function(e) {
        return t => {
          var n;
          for (let {
              name: i,
              serverLocalizedName: r
            }
            of null !== (n = t.options) && void 0 !== n ? n : [])
            if (i.startsWith(e) || "".concat(t.name, " ").concat(i).startsWith(e) || null != t.displayName && "".concat(t.displayName, " ").concat(i).startsWith(e) || null != r && (r.startsWith(e) || "".concat(t.name, " ").concat(r).startsWith(e) || null != t.displayName && "".concat(t.displayName, " ").concat(r).startsWith(e))) return !0;
          return !1
        }
      }(e), function(e) {
        return t => {
          var n;
          for (let {
              name: i,
              serverLocalizedName: r
            }
            of null !== (n = t.options) && void 0 !== n ? n : [])
            if (i.includes(e) || (null == r ? void 0 : r.includes(e))) return !0;
          return !1
        }
      }(e)],
      sortComparers: [function(e) {
        return (t, n) => {
          let i = _.ZP.getScoreWithoutLoadingLatest(e, t);
          return _.ZP.getScoreWithoutLoadingLatest(e, n) - i
        }
      }({
        channel: t
      }), O]
    })
  }, [a, h, r, t, n]), L = i.useMemo(() => {
    if (0 === v.length) return [];
    let e = new Map(g.map(e => [e.id, e]));
    return s().compact(v.map(t => {
      var n;
      let i = e.get(t.applicationId);
      if (null == i) return null;
      let r = null !== (n = R[t.id]) && void 0 !== n ? n : null;
      return {
        command: t,
        application: i,
        section: r
      }
    }))
  }, [g, v, R]), D = i.useMemo(() => {
    var e;
    if (!I && !T) return [];
    let i = [];
    if (I && T) {
      let e = new Set(g.map(e => {
        let {
          id: t
        } = e;
        return t
      }));
      i.push(...g), i.push(...C.filter(t => {
        let {
          application: {
            id: n
          }
        } = t;
        return !e.has(n)
      }).map(e => {
        let {
          application: t
        } = e;
        return t
      }))
    } else i = I ? g : C.map(e => {
      let {
        application: t
      } = e;
      return t
    });
    return (0, S.N)(i, {
      limit: o,
      filterPredicates: [function(e) {
        let t = (0, d.k)(e, l.yU.CHAT);
        return n => {
          let {
            context: i,
            userId: r,
            roleIds: s,
            isImpersonating: o
          } = t, {
            descriptor: a,
            sectionCommands: l,
            isGuildInstalled: u,
            isUserInstalled: _
          } = (0, c.If)(e, n.id), d = null != i.guild_id ? E.ML(null == a ? void 0 : a.permissions, i.guild_id, r, s, o) : null, I = null != i.guild_id ? E.ZJ(null == a ? void 0 : a.permissions, i, i.guild_id) : null;
          return null == l || !(l.length > 0) || l.some(e => E.Ft(e, t, {
            applicationAllowedForUser: d,
            applicationAllowedForChannel: I,
            commandBotId: null == a ? void 0 : a.botId,
            isGuildInstalled: u,
            isUserInstalled: _
          }) === E.mF.ALLOWED)
        }
      }(t)],
      bucketPredicates: [function(e) {
        return t => (0, f.$d)(t).toLocaleLowerCase().startsWith(e.toLocaleLowerCase())
      }(e = n), function(e) {
        return t => (0, f.$d)(t).toLocaleLowerCase().includes(e.toLocaleLowerCase())
      }(e), function(e) {
        return t => {
          var n, i;
          let r = null === (n = (0, f.jD)(t)) || void 0 === n ? void 0 : n.toLocaleLowerCase();
          return null !== (i = null == r ? void 0 : r.startsWith(e.toLocaleLowerCase())) && void 0 !== i && i
        }
      }(e), function(e) {
        return t => {
          var n, i;
          let r = null === (n = (0, f.jD)(t)) || void 0 === n ? void 0 : n.toLocaleLowerCase();
          return null !== (i = null == r ? void 0 : r.includes(e.toLocaleLowerCase())) && void 0 !== i && i
        }
      }(e)],
      sortComparers: [A, m]
    })
  }, [I, T, o, t, n, g, C]), M = L.length > 0, P = D.length > 0;
  return {
    commandResults: L,
    hasCommandResults: M,
    applicationResults: D,
    hasApplicationResults: P,
    isEmptyState: !M && !P,
    loading: p && a
  }
}

function p(e) {
  let {
    channel: t,
    query: n,
    fetches: r = !0
  } = e, [s, l] = i.useState(1), u = i.useRef(s);
  u.current = s;
  let {
    fetchState: _,
    totalPages: c
  } = (0, a.cj)([T.Z], () => {
    var e, i;
    return {
      fetchState: T.Z.getFetchState({
        query: n,
        guildId: t.guild_id,
        page: s,
        integrationType: o.Y.USER_INSTALL,
        minUserInstallCommandCount: 1,
        excludeAppsWithCustomInstallUrl: !0
      }),
      totalPages: null !== (i = null === (e = T.Z.getSearchResults({
        query: n,
        guildId: t.guild_id,
        page: s,
        integrationType: o.Y.USER_INSTALL,
        minUserInstallCommandCount: 1,
        excludeAppsWithCustomInstallUrl: !0
      })) || void 0 === e ? void 0 : e.totalPages) && void 0 !== i ? i : 0
    }
  }, [t.guild_id, s, n]), d = i.useMemo(() => Array.from({
    length: _ === T.M.FETCHED || _ === T.M.ERROR ? s : s - 1
  }, (e, i) => {
    var r, s;
    return null !== (s = null === (r = T.Z.getSearchResults({
      query: n,
      guildId: t.guild_id,
      page: i + 1,
      integrationType: o.Y.USER_INSTALL,
      minUserInstallCommandCount: 1,
      excludeAppsWithCustomInstallUrl: !0
    })) || void 0 === r ? void 0 : r.results) && void 0 !== s ? s : []
  }), [_, t.guild_id, n, s]), E = i.useCallback(() => {
    _ === T.M.FETCHED && d.length === u.current && d.length > 0 && d[d.length - 1].length > 0 && d.length < c && (u.current++, l(e => e + 1))
  }, [_, u, d, c]), h = i.useCallback(e => {
    let {
      query: t,
      page: n,
      guildId: i
    } = e;
    I.yC({
      query: t,
      guildId: i,
      options: {
        page: n,
        integrationType: o.Y.USER_INSTALL,
        minUserInstallCommandCount: 1,
        excludeAppsWithCustomInstallUrl: !0
      }
    })
  }, []);
  return i.useEffect(() => {
    if (!!r) h({
      query: n,
      page: s,
      guildId: t.guild_id
    })
  }, [n, t.guild_id, h, s, r]), i.useEffect(() => {
    l(1)
  }, [t.guild_id, n]), {
    fetchState: _,
    applicationResults: d.flat(),
    fetchNextPage: E
  }
}