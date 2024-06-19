t.d(n, {
  O: function() {
    return c
  }
}), t(47120);
var i = t(470079),
  s = t(373793),
  l = t(442837),
  a = t(911969),
  r = t(282923),
  o = t(905753);

function c() {
  let e = (0, l.cj)([o.Z], () => {
      var e;
      return Object.values(null !== (e = o.Z.getCommands()) && void 0 !== e ? e : {})
    }),
    [n, t] = i.useState(""),
    c = i.useMemo(() => e.filter(e => {
      var n;
      return (null == e.integration_types || e.integration_types.includes(s.Y.GUILD_INSTALL)) && (null == e.contexts || (null === (n = e.contexts) || void 0 === n ? void 0 : n.includes(a.D.GUILD)))
    }), [e]),
    u = i.useMemo(() => [...c].sort((e, n) => {
      let t = a.yU.CHAT + 1,
        i = n.type > t ? t : n.type,
        s = i - (e.type > t ? t : e.type);
      return 0 !== s ? s : e.name.localeCompare(n.name)
    }), [c]),
    I = i.useMemo(() => n.startsWith("/") ? u.filter(e => e.type === a.yU.CHAT) : u, [n, u]),
    N = i.useMemo(() => n.startsWith("/") ? n.substring(1) : n, [n]);
  return {
    query: n,
    results: i.useMemo(() => (0, r.B)(I, d, N), [I, N]),
    setQuery: t,
    unfilteredCount: e.length
  }
}

function d(e) {
  return {
    id: e.id,
    names: [e.displayName]
  }
}