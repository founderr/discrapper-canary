"use strict";
n.r(t);
var i = n("735250"),
  a = n("470079"),
  l = n("512722"),
  s = n.n(l),
  u = n("442837"),
  d = n("481060"),
  r = n("10718"),
  o = n("667204"),
  T = n("826298"),
  c = n("17165"),
  E = n("276022"),
  S = n("430824"),
  I = n("594174"),
  _ = n("689079"),
  p = n("689938"),
  f = n("575287");
t.default = e => {
  let t, {
      commandType: n,
      commandTargetId: l,
      channel: N,
      guildId: A,
      onHeightUpdate: O,
      context: h
    } = e,
    m = (0, u.useStateFromStores)([S.default], () => S.default.getGuild(null != A ? A : N.guild_id)),
    g = (0, u.useStateFromStores)([I.default], () => I.default.getUser(l)),
    R = (0, E.default)({
      user: g,
      guildId: null == m ? void 0 : m.id,
      channel: N,
      context: h
    }),
    {
      commands: M,
      sectionDescriptors: y,
      loading: G
    } = r.useDiscovery(N, {
      commandType: n
    }, {
      limit: _.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
    }),
    {
      sections: P
    } = a.useMemo(() => {
      let e = {};
      return y.forEach(t => {
        e[t.id] = t
      }), {
        sections: e
      }
    }, [y]),
    C = a.useRef(G.current);
  a.useEffect(() => {
    G.current !== C.current && (C.current = G.current, null == O || O())
  }, [G, O]);
  let v = a.useCallback(e => {
    s()(null != N, "menu item should not show if channel is null");
    let t = P[e.applicationId],
      n = null != t ? (0, T.getIconComponent)(t) : void 0;
    return (0, i.jsx)(d.MenuItem, {
      id: e.id,
      label: e.displayName,
      showIconFirst: !0,
      icon: () => null != n ? (0, i.jsx)(n, {
        channel: N,
        section: t,
        width: 18,
        height: 18,
        selectable: !1
      }) : null,
      action: () => {
        (0, o.default)({
          command: e,
          optionValues: {},
          context: {
            channel: N,
            guild: m
          },
          commandTargetId: l
        })
      }
    }, e.id)
  }, [N, m, l, P]);
  return G.current ? t = (0, i.jsx)(d.MenuItem, {
    id: "menu-commands-placeholder",
    render: () => (0, i.jsx)(c.default, {}),
    disabled: !0
  }, "menu-commands-placeholder") : (t = 0 === M.length ? (0, i.jsx)(d.MenuItem, {
    id: "menu-commands-empty",
    label: p.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
    disabled: !0
  }, "menu-commands-empty") : M.map(v), null != R && (t = (0, i.jsxs)(i.Fragment, {
    children: [t, (0, i.jsx)(d.MenuSeparator, {}, "separator"), R]
  }))), (0, i.jsx)(d.MenuItem, {
    id: "apps",
    label: p.default.Messages.APPS,
    listClassName: f.list,
    children: t
  })
}