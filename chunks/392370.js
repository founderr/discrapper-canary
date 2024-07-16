t.d(n, {
  Q2: function() {
return R;
  },
  pe: function() {
return T;
  }
}), t(47120), t(653041), t(536091);
var i = t(470079),
  l = t(392711),
  a = t.n(l),
  r = t(373793),
  s = t(288385),
  o = t(442837),
  c = t(911969),
  u = t(127255),
  d = t(654455),
  m = t(213459),
  p = t(807169),
  _ = t(104793),
  E = t(674588),
  A = t(809547),
  f = t(822245),
  h = t(631827),
  N = t(783097),
  C = t(689079),
  v = t(665692);

function I(e, n) {
  let t = f.Z.getScoreWithoutLoadingLatest(e.id);
  return f.Z.getScoreWithoutLoadingLatest(n.id) - t;
}

function P(e, n) {
  let t = (0, N.$d)(e),
i = (0, N.$d)(n);
  return (0, m.un)(t, i);
}

function x(e, n) {
  return (0, m.un)(e.displayName, n.displayName);
}

function T(e) {
  let {
channel: n,
query: t,
commandLimit: l,
applicationLimit: r,
searchesCommands: s = !0,
searchesBots: o = !0,
searchesActivities: E = !0
  } = e;
  t.startsWith(''.concat(v.GI)) && (t = t.substring(1));
  let {
commands: A,
commandSectionMap: f,
loading: T
  } = function(e) {
var n, t;
let {
  channel: l,
  includeBuiltIn: a = !0,
  allowFetch: r = !0
} = e, s = (0, m.em)(l, !0, r), o = (0, m.PL)(!0, r);
return i.useMemo(() => {
  var e, n, t, i, r;
  let c = null !== (t = null === (e = s.result) || void 0 === e ? void 0 : e.sections) && void 0 !== t ? t : {},
    u = null !== (i = null === (n = o.result) || void 0 === n ? void 0 : n.sections) && void 0 !== i ? i : {},
    d = [
      ...Object.keys(c),
      ...Object.keys(u).filter(e => !(e in c))
    ];
  a && d.push(C.bi.BUILT_IN);
  let p = [],
    _ = {};
  for (let e of d) {
    let n = (0, m.If)(l, e),
      t = null !== (r = n.sectionCommands) && void 0 !== r ? r : [];
    p.push(...t), t.forEach(e => {
      null != n.descriptor && (_[e.id] = n.descriptor);
    });
  }
  return {
    commands: p,
    commandSectionMap: _,
    loading: !0 === s.fetchState.fetching || !0 === o.fetchState.fetching
  };
}, [
  l,
  a,
  s.fetchState.fetching,
  null === (n = s.result) || void 0 === n ? void 0 : n.sections,
  o.fetchState.fetching,
  null === (t = o.result) || void 0 === t ? void 0 : t.sections
]);
  }({
channel: n,
includeBuiltIn: !0
  }), {
apps: R
  } = function(e) {
let {
  channel: n,
  onlyWithCommands: t,
  includeBuiltIn: i,
  allowFetch: l = !0
} = e, a = (0, p.Hs)(n, c.yU.CHAT).hasBaseAccessPermissions, r = (0, m.em)(n, a, l), s = (0, m.PL)(a, l), o = [], u = new Set();
if (null != r.result)
  for (let e of Object.values(r.result.sections)) {
    let n = e.descriptor.application;
    null != n && (Object.keys(e.commands).length > 0 || !t) && (o.push(n), u.add(n.id));
  }
if (null != s.result)
  for (let e of Object.values(s.result.sections)) {
    let n = e.descriptor.application;
    null != n && !u.has(n.id) && (Object.keys(e.commands).length > 0 || !t) && o.push(n);
  }
return i && o.push(N.Wx), {
  apps: o,
  loading: (null == r ? void 0 : r.fetchState.fetching) === !0 || (null == s ? void 0 : s.fetchState.fetching) === !0
};
  }({
channel: n,
onlyWithCommands: !0,
includeBuiltIn: !0
  }), L = (0, u.Z)({
guildId: n.getGuildId(),
channel: n
  }), S = i.useMemo(() => {
var e;
if (!s)
  return [];
return (0, h.N)(A, {
  limit: l,
  filterPredicates: [function(e) {
    let n = (0, p.k)(e, c.yU.CHAT),
      t = {};
    return i => {
      let {
        context: l,
        userId: a,
        roleIds: r,
        isImpersonating: s
      } = n;
      if (!(i.applicationId in t)) {
        let {
          descriptor: n,
          isGuildInstalled: o,
          isUserInstalled: c
        } = (0, m.If)(e, i.applicationId), u = null != l.guild_id ? _.ML(null == n ? void 0 : n.permissions, l.guild_id, a, r, s) : null, d = null != l.guild_id ? _.ZJ(null == n ? void 0 : n.permissions, l, l.guild_id) : null;
        t[i.applicationId] = {
          descriptor: n,
          applicationAllowedForUser: u,
          applicationAllowedForChannel: d,
          isGuildInstalled: o,
          isUserInstalled: c
        };
      }
      let {
        descriptor: o,
        applicationAllowedForChannel: c,
        applicationAllowedForUser: u,
        isGuildInstalled: d,
        isUserInstalled: p
      } = t[i.applicationId];
      return _.Ft(i, n, {
        applicationAllowedForUser: u,
        applicationAllowedForChannel: c,
        commandBotId: null == o ? void 0 : o.botId,
        isGuildInstalled: d,
        isUserInstalled: p
      }) === _.mF.ALLOWED;
    };
  }(n)],
  bucketPredicates: [
    function(e) {
      return n => {
        let t = n.name,
          i = n.displayName;
        return t.startsWith(e) || i.startsWith(e);
      };
    }(e = t),
    function(e) {
      let n = null == e ? void 0 : e.split(' '),
        t = n[0],
        i = n.slice(1).join(' ');
      return e => {
        let n = e.name,
          l = e.displayName;
        return !!(n.startsWith(t) && n.split(' ').slice(1).join(' ').startsWith(i) || l.startsWith(t) && l.split(' ').slice(1).join(' ').startsWith(i)) || !1;
      };
    }(e),
    function(e) {
      return n => {
        let t = n.name,
          i = n.displayName;
        return t.includes(e) || i.includes(e);
      };
    }(e),
    function(e) {
      return n => {
        var t;
        for (let {
            name: i,
            serverLocalizedName: l
          }
          of null !== (t = n.options) && void 0 !== t ? t : [])
          if (i.startsWith(e) || ''.concat(n.name, ' ').concat(i).startsWith(e) || null != n.displayName && ''.concat(n.displayName, ' ').concat(i).startsWith(e) || null != l && (l.startsWith(e) || ''.concat(n.name, ' ').concat(l).startsWith(e) || null != n.displayName && ''.concat(n.displayName, ' ').concat(l).startsWith(e)))
            return !0;
        return !1;
      };
    }(e),
    function(e) {
      return n => {
        var t;
        for (let {
            name: i,
            serverLocalizedName: l
          }
          of null !== (t = n.options) && void 0 !== t ? t : [])
          if (i.includes(e) || (null == l ? void 0 : l.includes(e)))
            return !0;
        return !1;
      };
    }(e)
  ],
  sortComparers: [
    function(e) {
      return (n, t) => {
        let i = d.ZP.getScoreWithoutLoadingLatest(e, n);
        return d.ZP.getScoreWithoutLoadingLatest(e, t) - i;
      };
    }({
      channel: n
    }),
    x
  ]
});
  }, [
s,
A,
l,
n,
t
  ]), g = i.useMemo(() => {
if (0 === S.length)
  return [];
let e = new Map(R.map(e => [
  e.id,
  e
]));
return a().compact(S.map(n => {
  var t;
  let i = e.get(n.applicationId);
  if (null == i)
    return null;
  let l = null !== (t = f[n.id]) && void 0 !== t ? t : null;
  return {
    command: n,
    application: i,
    section: l
  };
}));
  }, [
R,
S,
f
  ]), M = i.useMemo(() => {
var e;
if (!o && !E)
  return [];
let i = [];
if (o && E) {
  let e = new Set(R.map(e => {
    let {
      id: n
    } = e;
    return n;
  }));
  i.push(...R), i.push(...L.filter(n => {
    let {
      application: {
        id: t
      }
    } = n;
    return !e.has(t);
  }).map(e => {
    let {
      application: n
    } = e;
    return n;
  }));
} else
  i = o ? R : L.map(e => {
    let {
      application: n
    } = e;
    return n;
  });
return (0, h.N)(i, {
  limit: r,
  filterPredicates: [function(e) {
    let n = (0, p.k)(e, c.yU.CHAT);
    return t => {
      let {
        context: i,
        userId: l,
        roleIds: a,
        isImpersonating: r
      } = n, {
        descriptor: s,
        sectionCommands: o,
        isGuildInstalled: c,
        isUserInstalled: u
      } = (0, m.If)(e, t.id), d = null != i.guild_id ? _.ML(null == s ? void 0 : s.permissions, i.guild_id, l, a, r) : null, p = null != i.guild_id ? _.ZJ(null == s ? void 0 : s.permissions, i, i.guild_id) : null;
      return null == o || !(o.length > 0) || o.some(e => _.Ft(e, n, {
        applicationAllowedForUser: d,
        applicationAllowedForChannel: p,
        commandBotId: null == s ? void 0 : s.botId,
        isGuildInstalled: c,
        isUserInstalled: u
      }) === _.mF.ALLOWED);
    };
  }(n)],
  bucketPredicates: [
    function(e) {
      return n => (0, N.$d)(n).toLocaleLowerCase().startsWith(e.toLocaleLowerCase());
    }(e = t),
    function(e) {
      return n => (0, N.$d)(n).toLocaleLowerCase().includes(e.toLocaleLowerCase());
    }(e),
    function(e) {
      return n => {
        var t, i;
        let l = null === (t = (0, N.jD)(n)) || void 0 === t ? void 0 : t.toLocaleLowerCase();
        return null !== (i = null == l ? void 0 : l.startsWith(e.toLocaleLowerCase())) && void 0 !== i && i;
      };
    }(e),
    function(e) {
      return n => {
        var t, i;
        let l = null === (t = (0, N.jD)(n)) || void 0 === t ? void 0 : t.toLocaleLowerCase();
        return null !== (i = null == l ? void 0 : l.includes(e.toLocaleLowerCase())) && void 0 !== i && i;
      };
    }(e)
  ],
  sortComparers: [
    I,
    P
  ]
});
  }, [
o,
E,
r,
n,
t,
R,
L
  ]), O = g.length > 0, y = M.length > 0;
  return {
commandResults: g,
hasCommandResults: O,
applicationResults: M,
hasApplicationResults: y,
isEmptyState: !O && !y,
loading: T && s
  };
}

function R(e) {
  let {
channel: n,
query: t,
fetches: l = !0
  } = e;
  t.startsWith(''.concat(v.GI)) && (t = t.substring(1));
  let [a, c] = i.useState(1), u = i.useRef(a);
  u.current = a;
  let {
fetchState: d,
totalPages: m
  } = (0, o.cj)([A.Z], () => {
var e, i;
return {
  fetchState: A.Z.getFetchState({
    query: t,
    guildId: n.guild_id,
    page: a,
    integrationType: r.Y.USER_INSTALL,
    minUserInstallCommandCount: 1,
    excludeAppsWithCustomInstallUrl: !0,
    source: s.F.APP_LAUNCHER
  }),
  totalPages: null !== (i = null === (e = A.Z.getSearchResults({
    query: t,
    guildId: n.guild_id,
    page: a,
    integrationType: r.Y.USER_INSTALL,
    minUserInstallCommandCount: 1,
    excludeAppsWithCustomInstallUrl: !0,
    source: s.F.APP_LAUNCHER
  })) || void 0 === e ? void 0 : e.totalPages) && void 0 !== i ? i : 0
};
  }, [
n.guild_id,
a,
t
  ]), p = i.useMemo(() => Array.from({
length: d === A.M.FETCHED || d === A.M.ERROR ? a : a - 1
  }, (e, i) => {
var l, a;
return null !== (a = null === (l = A.Z.getSearchResults({
  query: t,
  guildId: n.guild_id,
  page: i + 1,
  integrationType: r.Y.USER_INSTALL,
  minUserInstallCommandCount: 1,
  excludeAppsWithCustomInstallUrl: !0,
  source: s.F.APP_LAUNCHER
})) || void 0 === l ? void 0 : l.results) && void 0 !== a ? a : [];
  }), [
d,
n.guild_id,
t,
a
  ]), _ = i.useCallback(() => {
d === A.M.FETCHED && p.length === u.current && p.length > 0 && p[p.length - 1].length > 0 && p.length < m && (u.current++, c(e => e + 1));
  }, [
d,
u,
p,
m
  ]), f = i.useCallback(e => {
let {
  query: n,
  page: t,
  guildId: i
} = e;
E.yC({
  query: n,
  guildId: i,
  options: {
    page: t,
    integrationType: r.Y.USER_INSTALL,
    minUserInstallCommandCount: 1,
    excludeAppsWithCustomInstallUrl: !0,
    source: s.F.APP_LAUNCHER
  }
});
  }, []);
  return i.useEffect(() => {
if (!!l)
  f({
    query: t,
    page: a,
    guildId: n.guild_id
  });
  }, [
t,
n.guild_id,
f,
a,
l
  ]), i.useEffect(() => {
c(1);
  }, [
n.guild_id,
t
  ]), {
fetchState: d,
applicationResults: p.flat(),
fetchNextPage: _
  };
}