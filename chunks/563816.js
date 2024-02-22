"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("37983"),
  i = n("884691"),
  l = n("627445"),
  s = n.n(l),
  u = n("446674"),
  r = n("77078"),
  d = n("240249"),
  o = n("916565"),
  c = n("355263"),
  f = n("633043"),
  E = n("823026"),
  m = n("305961"),
  M = n("697218"),
  g = n("317041"),
  p = n("782340"),
  I = n("466063"),
  S = e => {
    let t, {
        commandType: n,
        commandTargetId: l,
        channel: S,
        guildId: v,
        onHeightUpdate: h,
        context: A
      } = e,
      _ = (0, u.useStateFromStores)([m.default], () => m.default.getGuild(null != v ? v : S.guild_id)),
      T = (0, u.useStateFromStores)([M.default], () => M.default.getUser(l)),
      C = (0, E.default)({
        user: T,
        guildId: null == _ ? void 0 : _.id,
        channel: S,
        context: A
      }),
      {
        commands: R,
        sectionDescriptors: O,
        loading: x
      } = d.useDiscovery(S, {
        commandType: n
      }, {
        limit: g.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
      }),
      {
        sections: y
      } = i.useMemo(() => {
        let e = {};
        return O.forEach(t => {
          e[t.id] = t
        }), {
          sections: e
        }
      }, [O]),
      N = i.useRef(x.current);
    i.useEffect(() => {
      x.current !== N.current && (N.current = x.current, null == h || h())
    }, [x, h]);
    let b = i.useCallback(e => {
      s(null != S, "menu item should not show if channel is null");
      let t = y[e.applicationId],
        n = null != t ? (0, c.getIconComponent)(t) : void 0;
      return (0, a.jsx)(r.MenuItem, {
        id: e.id,
        label: e.displayName,
        showIconFirst: !0,
        icon: () => null != n ? (0, a.jsx)(n, {
          channel: S,
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
              channel: S,
              guild: _
            },
            commandTargetId: l
          })
        }
      }, e.id)
    }, [S, _, l, y]);
    return x.current ? t = (0, a.jsx)(r.MenuItem, {
      id: "menu-commands-placeholder",
      render: () => (0, a.jsx)(f.default, {}),
      disabled: !0
    }, "menu-commands-placeholder") : (t = 0 === R.length ? (0, a.jsx)(r.MenuItem, {
      id: "menu-commands-empty",
      label: p.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
      disabled: !0
    }, "menu-commands-empty") : R.map(b), null != C && (t = (0, a.jsxs)(a.Fragment, {
      children: [t, (0, a.jsx)(r.MenuSeparator, {}, "separator"), C]
    }))), (0, a.jsx)(r.MenuItem, {
      id: "apps",
      label: p.default.Messages.APPS,
      listClassName: I.list,
      children: t
    })
  }