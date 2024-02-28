"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("627445"),
  u = n.n(l),
  i = n("446674"),
  r = n("77078"),
  d = n("240249"),
  o = n("916565"),
  c = n("355263"),
  m = n("633043"),
  f = n("823026"),
  g = n("305961"),
  h = n("697218"),
  E = n("317041"),
  _ = n("782340"),
  p = n("466063"),
  v = e => {
    let t, {
        commandType: n,
        commandTargetId: l,
        channel: v,
        guildId: I,
        onHeightUpdate: S,
        context: M
      } = e,
      A = (0, i.useStateFromStores)([g.default], () => g.default.getGuild(null != I ? I : v.guild_id)),
      N = (0, i.useStateFromStores)([h.default], () => h.default.getUser(l)),
      R = (0, f.default)({
        user: N,
        guildId: null == A ? void 0 : A.id,
        channel: v,
        context: M
      }),
      {
        commands: O,
        sectionDescriptors: D,
        loading: y
      } = d.useDiscovery(v, {
        commandType: n
      }, {
        limit: E.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
      }),
      {
        sections: T
      } = s.useMemo(() => {
        let e = {};
        return D.forEach(t => {
          e[t.id] = t
        }), {
          sections: e
        }
      }, [D]),
      x = s.useRef(y.current);
    s.useEffect(() => {
      y.current !== x.current && (x.current = y.current, null == S || S())
    }, [y, S]);
    let L = s.useCallback(e => {
      u(null != v, "menu item should not show if channel is null");
      let t = T[e.applicationId],
        n = null != t ? (0, c.getIconComponent)(t) : void 0;
      return (0, a.jsx)(r.MenuItem, {
        id: e.id,
        label: e.displayName,
        showIconFirst: !0,
        icon: () => null != n ? (0, a.jsx)(n, {
          channel: v,
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
              channel: v,
              guild: A
            },
            commandTargetId: l
          })
        }
      }, e.id)
    }, [v, A, l, T]);
    return y.current ? t = (0, a.jsx)(r.MenuItem, {
      id: "menu-commands-placeholder",
      render: () => (0, a.jsx)(m.default, {}),
      disabled: !0
    }, "menu-commands-placeholder") : (t = 0 === O.length ? (0, a.jsx)(r.MenuItem, {
      id: "menu-commands-empty",
      label: _.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
      disabled: !0
    }, "menu-commands-empty") : O.map(L), null != R && (t = (0, a.jsxs)(a.Fragment, {
      children: [t, (0, a.jsx)(r.MenuSeparator, {}, "separator"), R]
    }))), (0, a.jsx)(r.MenuItem, {
      id: "apps",
      label: _.default.Messages.APPS,
      listClassName: p.list,
      children: t
    })
  }