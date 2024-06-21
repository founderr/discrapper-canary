"use strict";
n.d(t, {
  pe: function() {
    return S
  }
}), n(47120), n(653041);
var i = n(470079),
  r = n(911969),
  s = n(127255),
  o = n(654455),
  a = n(213459),
  l = n(807169),
  u = n(104793),
  _ = n(822245),
  c = n(631827),
  d = n(783097),
  E = n(689079);

function I(e, t) {
  let n = _.Z.getScoreWithoutLoadingLatest(e.id);
  return _.Z.getScoreWithoutLoadingLatest(t.id) - n
}

function T(e, t) {
  let n = (0, d.$d)(e),
    i = (0, d.$d)(t);
  return (0, a.un)(n, i)
}

function h(e, t) {
  return (0, a.un)(e.displayName, t.displayName)
}

function S(e) {
  let {
    channel: t,
    query: n,
    commandLimit: _,
    applicationLimit: S,
    searchesCommands: f = !0,
    searchesBots: N = !0,
    searchesActivities: A = !0
  } = e, {
    commands: m,
    commandSectionMap: O,
    loading: R
  } = function(e) {
    var t, n;
    let {
      channel: r,
      includeBuiltIn: s = !0,
      allowFetch: o = !0
    } = e, l = (0, a.em)(r, !0, o), u = (0, a.PL)(!0, o);
    return i.useMemo(() => {
      var e, t, n, i, o;
      let _ = null !== (n = null === (e = l.result) || void 0 === e ? void 0 : e.sections) && void 0 !== n ? n : {},
        c = null !== (i = null === (t = u.result) || void 0 === t ? void 0 : t.sections) && void 0 !== i ? i : {},
        d = [...Object.keys(_), ...Object.keys(c).filter(e => !(e in _))];
      s && d.push(E.bi.BUILT_IN);
      let I = [],
        T = {};
      for (let e of d) {
        let t = (0, a.If)(r, e),
          n = null !== (o = t.sectionCommands) && void 0 !== o ? o : [];
        I.push(...n), n.forEach(e => {
          null != t.descriptor && (T[e.id] = t.descriptor)
        })
      }
      return {
        commands: I,
        commandSectionMap: T,
        loading: !0 === l.fetchState.fetching || !0 === u.fetchState.fetching
      }
    }, [r, s, l.fetchState.fetching, null === (t = l.result) || void 0 === t ? void 0 : t.sections, u.fetchState.fetching, null === (n = u.result) || void 0 === n ? void 0 : n.sections])
  }({
    channel: t,
    includeBuiltIn: !0
  }), {
    apps: p
  } = function(e) {
    let {
      channel: t,
      onlyWithCommands: n,
      includeBuiltIn: i,
      allowFetch: s = !0
    } = e, o = (0, l.Hs)(t, r.yU.CHAT).hasBaseAccessPermissions, u = (0, a.em)(t, o, s), _ = (0, a.PL)(o, s), c = [], E = new Set;
    if (null != u.result)
      for (let e of Object.values(u.result.sections)) {
        let t = e.descriptor.application;
        null != t && (Object.keys(e.commands).length > 0 || !n) && (c.push(t), E.add(t.id))
      }
    if (null != _.result)
      for (let e of Object.values(_.result.sections)) {
        let t = e.descriptor.application;
        null != t && !E.has(t.id) && (Object.keys(e.commands).length > 0 || !n) && c.push(t)
      }
    return i && c.push(d.Wx), {
      apps: c,
      loading: (null == u ? void 0 : u.fetchState.fetching) === !0 || (null == _ ? void 0 : _.fetchState.fetching) === !0
    }
  }({
    channel: t,
    onlyWithCommands: !0,
    includeBuiltIn: !0
  }), g = (0, s.Z)({
    guildId: t.getGuildId(),
    channel: t
  }), C = i.useMemo(() => {
    var e;
    if (!f) return [];
    return (0, c.N)(m, {
      limit: _,
      filterPredicates: [function(e) {
        let t = (0, l.k)(e, r.yU.CHAT),
          n = {};
        return i => {
          let {
            context: r,
            userId: s,
            roleIds: o,
            isImpersonating: l
          } = t;
          if (!(i.applicationId in n)) {
            let {
              descriptor: t,
              isGuildInstalled: _,
              isUserInstalled: c
            } = (0, a.If)(e, i.applicationId), d = null != r.guild_id ? u.ML(null == t ? void 0 : t.permissions, r.guild_id, s, o, l) : null, E = null != r.guild_id ? u.ZJ(null == t ? void 0 : t.permissions, r, r.guild_id) : null;
            n[i.applicationId] = {
              descriptor: t,
              applicationAllowedForUser: d,
              applicationAllowedForChannel: E,
              isGuildInstalled: _,
              isUserInstalled: c
            }
          }
          let {
            descriptor: _,
            applicationAllowedForChannel: c,
            applicationAllowedForUser: d,
            isGuildInstalled: E,
            isUserInstalled: I
          } = n[i.applicationId];
          return u.Ft(i, t, {
            applicationAllowedForUser: d,
            applicationAllowedForChannel: c,
            commandBotId: null == _ ? void 0 : _.botId,
            isGuildInstalled: E,
            isUserInstalled: I
          }) === u.mF.ALLOWED
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
          let i = o.ZP.getScoreWithoutLoadingLatest(e, t);
          return o.ZP.getScoreWithoutLoadingLatest(e, n) - i
        }
      }({
        channel: t
      }), h]
    })
  }, [f, m, _, t, n]), v = i.useMemo(() => {
    if (0 === C.length) return [];
    let e = new Map(p.map(e => [e.id, e]));
    return C.map(t => {
      var n;
      return {
        command: t,
        application: e.get(t.applicationId),
        section: null !== (n = O[t.id]) && void 0 !== n ? n : null
      }
    }).filter(e => {
      let {
        application: t
      } = e;
      return null != t
    })
  }, [p, C, O]), L = i.useMemo(() => {
    var e;
    if (!N && !A) return [];
    let i = [];
    if (N && A) {
      let e = new Set(p.map(e => {
        let {
          id: t
        } = e;
        return t
      }));
      i.push(...p), i.push(...g.filter(t => {
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
    } else i = N ? p : g.map(e => {
      let {
        application: t
      } = e;
      return t
    });
    return (0, c.N)(i, {
      limit: S,
      filterPredicates: [function(e) {
        let t = (0, l.k)(e, r.yU.CHAT);
        return n => {
          let {
            context: i,
            userId: r,
            roleIds: s,
            isImpersonating: o
          } = t, {
            descriptor: l,
            sectionCommands: _,
            isGuildInstalled: c,
            isUserInstalled: d
          } = (0, a.If)(e, n.id), E = null != i.guild_id ? u.ML(null == l ? void 0 : l.permissions, i.guild_id, r, s, o) : null, I = null != i.guild_id ? u.ZJ(null == l ? void 0 : l.permissions, i, i.guild_id) : null;
          return null == _ || !(_.length > 0) || _.some(e => u.Ft(e, t, {
            applicationAllowedForUser: E,
            applicationAllowedForChannel: I,
            commandBotId: null == l ? void 0 : l.botId,
            isGuildInstalled: c,
            isUserInstalled: d
          }) === u.mF.ALLOWED)
        }
      }(t)],
      bucketPredicates: [function(e) {
        return t => (0, d.$d)(t).toLocaleLowerCase().startsWith(e.toLocaleLowerCase())
      }(e = n), function(e) {
        return t => (0, d.$d)(t).toLocaleLowerCase().includes(e.toLocaleLowerCase())
      }(e), function(e) {
        return t => {
          var n, i;
          let r = null === (n = (0, d.jD)(t)) || void 0 === n ? void 0 : n.toLocaleLowerCase();
          return null !== (i = null == r ? void 0 : r.startsWith(e.toLocaleLowerCase())) && void 0 !== i && i
        }
      }(e), function(e) {
        return t => {
          var n, i;
          let r = null === (n = (0, d.jD)(t)) || void 0 === n ? void 0 : n.toLocaleLowerCase();
          return null !== (i = null == r ? void 0 : r.includes(e.toLocaleLowerCase())) && void 0 !== i && i
        }
      }(e)],
      sortComparers: [I, T]
    })
  }, [N, A, S, t, n, p, g]), D = v.length > 0, M = L.length > 0;
  return {
    commandResults: v,
    hasCommandResults: D,
    applicationResults: L,
    hasApplicationResults: M,
    isEmptyState: !D && !M,
    loading: R && f
  }
}