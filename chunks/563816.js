"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var i = n("37983"),
  l = n("884691"),
  u = n("627445"),
  a = n.n(u),
  r = n("446674"),
  d = n("77078"),
  o = n("240249"),
  s = n("916565"),
  c = n("355263"),
  E = n("633043"),
  _ = n("823026"),
  f = n("305961"),
  T = n("697218"),
  I = n("317041"),
  S = n("782340"),
  N = n("466063"),
  p = e => {
    let t, {
        commandType: n,
        commandTargetId: u,
        channel: p,
        guildId: m,
        onHeightUpdate: A,
        context: M
      } = e,
      h = (0, r.useStateFromStores)([f.default], () => f.default.getGuild(null != m ? m : p.guild_id)),
      C = (0, r.useStateFromStores)([T.default], () => T.default.getUser(u)),
      O = (0, _.default)({
        user: C,
        guildId: null == h ? void 0 : h.id,
        channel: p,
        context: M
      }),
      {
        commands: v,
        sectionDescriptors: g,
        loading: G
      } = o.useDiscovery(p, {
        commandType: n
      }, {
        limit: I.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
      }),
      {
        sections: y
      } = l.useMemo(() => {
        let e = {};
        return g.forEach(t => {
          e[t.id] = t
        }), {
          sections: e
        }
      }, [g]),
      R = l.useRef(G.current);
    l.useEffect(() => {
      G.current !== R.current && (R.current = G.current, null == A || A())
    }, [G, A]);
    let U = l.useCallback(e => {
      a(null != p, "menu item should not show if channel is null");
      let t = y[e.applicationId],
        n = null != t ? (0, c.getIconComponent)(t) : void 0;
      return (0, i.jsx)(d.MenuItem, {
        id: e.id,
        label: e.displayName,
        showIconFirst: !0,
        icon: () => null != n ? (0, i.jsx)(n, {
          channel: p,
          section: t,
          width: 18,
          height: 18,
          selectable: !1
        }) : null,
        action: () => {
          (0, s.default)({
            command: e,
            optionValues: {},
            context: {
              channel: p,
              guild: h
            },
            commandTargetId: u
          })
        }
      }, e.id)
    }, [p, h, u, y]);
    return G.current ? t = (0, i.jsx)(d.MenuItem, {
      id: "menu-commands-placeholder",
      render: () => (0, i.jsx)(E.default, {}),
      disabled: !0
    }, "menu-commands-placeholder") : (t = 0 === v.length ? (0, i.jsx)(d.MenuItem, {
      id: "menu-commands-empty",
      label: S.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
      disabled: !0
    }, "menu-commands-empty") : v.map(U), null != O && (t = (0, i.jsxs)(i.Fragment, {
      children: [t, (0, i.jsx)(d.MenuSeparator, {}, "separator"), O]
    }))), (0, i.jsx)(d.MenuItem, {
      id: "apps",
      label: S.default.Messages.APPS,
      listClassName: N.list,
      children: t
    })
  }