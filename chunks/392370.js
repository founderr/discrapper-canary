"use strict";
n.d(t, {
  pe: function() {
    return N
  }
}), n(47120), n(653041);
var i, r, s = n(470079),
  o = n(911969),
  a = n(127255),
  l = n(654455),
  u = n(213459),
  _ = n(807169),
  c = n(104793),
  d = n(822245),
  E = n(631827),
  I = n(783097),
  T = n(689079);

function h(e, t) {
  let n = d.Z.getScoreWithoutLoadingLatest(e.id);
  return d.Z.getScoreWithoutLoadingLatest(t.id) - n
}

function S(e, t) {
  let n = (0, I.$d)(e),
    i = (0, I.$d)(t);
  return (0, u.un)(n, i)
}

function f(e, t) {
  return (0, u.un)(e.displayName, t.displayName)
}

function N(e) {
  let {
    channel: t,
    query: n,
    mode: i
  } = e, r = 2 !== i, {
    commands: d,
    commandSectionMap: N,
    loading: A
  } = function(e) {
    var t, n;
    let {
      channel: i,
      includeBuiltIn: r = !0,
      allowFetch: o = !0
    } = e, a = (0, u.em)(i, !0, o), l = (0, u.PL)(!0, o);
    return s.useMemo(() => {
      var e, t, n, s, o;
      let _ = null !== (n = null === (e = a.result) || void 0 === e ? void 0 : e.sections) && void 0 !== n ? n : {},
        c = null !== (s = null === (t = l.result) || void 0 === t ? void 0 : t.sections) && void 0 !== s ? s : {},
        d = [...Object.keys(_), ...Object.keys(c).filter(e => !(e in _))];
      r && d.push(T.bi.BUILT_IN);
      let E = [],
        I = {};
      for (let e of d) {
        let t = (0, u.If)(i, e),
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
    }, [i, r, a.fetchState.fetching, null === (t = a.result) || void 0 === t ? void 0 : t.sections, l.fetchState.fetching, null === (n = l.result) || void 0 === n ? void 0 : n.sections])
  }({
    channel: t,
    includeBuiltIn: !0
  }), {
    apps: m
  } = function(e) {
    let {
      channel: t,
      onlyWithCommands: n,
      includeBuiltIn: i,
      allowFetch: r = !0
    } = e, s = (0, _.Hs)(t, o.yU.CHAT).hasBaseAccessPermissions, a = (0, u.em)(t, s, r), l = (0, u.PL)(s, r), c = [], d = new Set;
    if (null != a.result)
      for (let e of Object.values(a.result.sections)) {
        let t = e.descriptor.application;
        null != t && (Object.keys(e.commands).length > 0 || !n) && (c.push(t), d.add(t.id))
      }
    if (null != l.result)
      for (let e of Object.values(l.result.sections)) {
        let t = e.descriptor.application;
        null != t && !d.has(t.id) && (Object.keys(e.commands).length > 0 || !n) && c.push(t)
      }
    return i && c.push(I.Wx), {
      apps: c,
      loading: (null == a ? void 0 : a.fetchState.fetching) === !0 || (null == l ? void 0 : l.fetchState.fetching) === !0
    }
  }({
    channel: t,
    onlyWithCommands: !0,
    includeBuiltIn: !0,
    allowFetch: r
  }), O = (0, a.Z)({
    guildId: t.getGuildId(),
    channel: t
  }), R = s.useMemo(() => {
    var e;
    if (2 === i) return [];
    return (0, E.N)(d, {
      filterPredicates: [function(e) {
        let t = (0, _.k)(e, o.yU.CHAT),
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
              isUserInstalled: _
            } = (0, u.If)(e, i.applicationId), d = null != r.guild_id ? c.ML(null == t ? void 0 : t.permissions, r.guild_id, s, o, a) : null, E = null != r.guild_id ? c.ZJ(null == t ? void 0 : t.permissions, r, r.guild_id) : null;
            n[i.applicationId] = {
              descriptor: t,
              applicationAllowedForUser: d,
              applicationAllowedForChannel: E,
              isGuildInstalled: l,
              isUserInstalled: _
            }
          }
          let {
            descriptor: l,
            applicationAllowedForChannel: _,
            applicationAllowedForUser: d,
            isGuildInstalled: E,
            isUserInstalled: I
          } = n[i.applicationId];
          return c.Ft(i, t, {
            applicationAllowedForUser: d,
            applicationAllowedForChannel: _,
            commandBotId: null == l ? void 0 : l.botId,
            isGuildInstalled: E,
            isUserInstalled: I
          }) === c.mF.ALLOWED
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
          let i = l.ZP.getScoreWithoutLoadingLatest(e, t);
          return l.ZP.getScoreWithoutLoadingLatest(e, n) - i
        }
      }({
        channel: t
      }), f]
    })
  }, [i, d, t, n]), p = s.useMemo(() => {
    if (0 === R.length) return [];
    let e = new Map(m.map(e => [e.id, e]));
    return R.map(t => {
      var n;
      return {
        command: t,
        application: e.get(t.applicationId),
        section: null !== (n = N[t.id]) && void 0 !== n ? n : null
      }
    }).filter(e => {
      let {
        application: t
      } = e;
      return null != t
    })
  }, [m, R, N]), g = s.useMemo(() => {
    var e;
    let r = 1 === i ? m : 2 === i ? O.map(e => {
      let {
        application: t
      } = e;
      return t
    }) : [...m, ...O.map(e => {
      let {
        application: t
      } = e;
      return t
    })];
    return (0, E.N)(r, {
      limit: 10,
      filterPredicates: [function(e) {
        let t = (0, _.k)(e, o.yU.CHAT);
        return n => {
          let {
            context: i,
            userId: r,
            roleIds: s,
            isImpersonating: o
          } = t, {
            descriptor: a,
            sectionCommands: l,
            isGuildInstalled: _,
            isUserInstalled: d
          } = (0, u.If)(e, n.id), E = null != i.guild_id ? c.ML(null == a ? void 0 : a.permissions, i.guild_id, r, s, o) : null, I = null != i.guild_id ? c.ZJ(null == a ? void 0 : a.permissions, i, i.guild_id) : null;
          return null == l || !(l.length > 0) || l.some(e => c.Ft(e, t, {
            applicationAllowedForUser: E,
            applicationAllowedForChannel: I,
            commandBotId: null == a ? void 0 : a.botId,
            isGuildInstalled: _,
            isUserInstalled: d
          }) === c.mF.ALLOWED)
        }
      }(t)],
      bucketPredicates: [function(e) {
        return t => (0, I.$d)(t).toLocaleLowerCase().startsWith(e.toLocaleLowerCase())
      }(e = n), function(e) {
        return t => (0, I.$d)(t).toLocaleLowerCase().includes(e.toLocaleLowerCase())
      }(e), function(e) {
        return t => {
          var n, i;
          let r = null === (n = (0, I.jD)(t)) || void 0 === n ? void 0 : n.toLocaleLowerCase();
          return null !== (i = null == r ? void 0 : r.startsWith(e.toLocaleLowerCase())) && void 0 !== i && i
        }
      }(e), function(e) {
        return t => {
          var n, i;
          let r = null === (n = (0, I.jD)(t)) || void 0 === n ? void 0 : n.toLocaleLowerCase();
          return null !== (i = null == r ? void 0 : r.includes(e.toLocaleLowerCase())) && void 0 !== i && i
        }
      }(e)],
      sortComparers: [h, S]
    })
  }, [i, m, O, t, n]), C = p.length > 0, v = g.length > 0;
  return {
    commandResults: p,
    hasCommandResults: C,
    applicationResults: g,
    hasApplicationResults: v,
    isEmptyState: !C && !v,
    loading: A && 2 !== i
  }
}(r = i || (i = {}))[r.CMDS_APPS_SHELF = 0] = "CMDS_APPS_SHELF", r[r.CMDS_APPS = 1] = "CMDS_APPS", r[r.SHELF = 2] = "SHELF", N.Modes = i