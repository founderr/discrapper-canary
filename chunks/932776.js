"use strict";
l.r(t), l.d(t, {
  useIntegrationPermissionCommandSearch: function() {
    return d
  }
}), l("47120");
var n = l("470079"),
  a = l("373793"),
  s = l("442837"),
  i = l("911969"),
  r = l("282923"),
  o = l("905753");

function d() {
  let e = (0, s.useStateFromStoresObject)([o.default], () => {
      var e;
      return Object.values(null !== (e = o.default.getCommands()) && void 0 !== e ? e : {})
    }),
    [t, l] = n.useState(""),
    d = n.useMemo(() => e.filter(e => {
      var t;
      return (null == e.integration_types || e.integration_types.includes(a.ApplicationIntegrationType.GUILD_INSTALL)) && (null == e.contexts || (null === (t = e.contexts) || void 0 === t ? void 0 : t.includes(i.InteractionContextType.GUILD)))
    }), [e]),
    c = n.useMemo(() => [...d].sort((e, t) => {
      let l = i.ApplicationCommandType.CHAT + 1,
        n = t.type > l ? l : t.type,
        a = n - (e.type > l ? l : e.type);
      return 0 !== a ? a : e.name.localeCompare(t.name)
    }), [d]),
    f = n.useMemo(() => t.startsWith("/") ? c.filter(e => e.type === i.ApplicationCommandType.CHAT) : c, [t, c]),
    I = n.useMemo(() => t.startsWith("/") ? t.substring(1) : t, [t]);
  return {
    query: t,
    results: n.useMemo(() => (0, r.filterPermissionSearchItems)(f, u, I), [f, I]),
    setQuery: l,
    unfilteredCount: e.length
  }
}

function u(e) {
  return {
    id: e.id,
    names: [e.displayName]
  }
}