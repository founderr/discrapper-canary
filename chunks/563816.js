"use strict";
n.r(e), n.d(e, {
  default: function() {
    return p
  }
});
var i = n("37983"),
  u = n("884691"),
  a = n("627445"),
  r = n.n(a),
  l = n("446674"),
  o = n("77078"),
  d = n("240249"),
  s = n("916565"),
  E = n("355263"),
  c = n("633043"),
  _ = n("823026"),
  T = n("305961"),
  I = n("697218"),
  S = n("317041"),
  f = n("782340"),
  N = n("205735"),
  p = t => {
    let e, {
        commandType: n,
        commandTargetId: a,
        channel: p,
        guildId: A,
        onHeightUpdate: C,
        context: G
      } = t,
      O = (0, l.useStateFromStores)([T.default], () => T.default.getGuild(null != A ? A : p.guild_id)),
      h = (0, l.useStateFromStores)([I.default], () => I.default.getUser(a)),
      R = (0, _.default)({
        user: h,
        guildId: null == O ? void 0 : O.id,
        channel: p,
        context: G
      }),
      {
        commands: U,
        sectionDescriptors: D,
        loading: P
      } = d.useDiscovery(p, {
        commandType: n
      }, {
        limit: S.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
      }),
      {
        sections: m
      } = u.useMemo(() => {
        let t = {};
        return D.forEach(e => {
          t[e.id] = e
        }), {
          sections: t
        }
      }, [D]),
      g = u.useRef(P.current);
    u.useEffect(() => {
      P.current !== g.current && (g.current = P.current, null == C || C())
    }, [P, C]);
    let M = u.useCallback(t => {
      r(null != p, "menu item should not show if channel is null");
      let e = m[t.applicationId],
        n = null != e ? (0, E.getIconComponent)(e) : void 0;
      return (0, i.jsx)(o.MenuItem, {
        id: t.id,
        label: t.displayName,
        showIconFirst: !0,
        icon: () => null != n ? (0, i.jsx)(n, {
          channel: p,
          section: e,
          width: 18,
          height: 18,
          selectable: !1
        }) : null,
        action: () => {
          (0, s.default)({
            command: t,
            optionValues: {},
            context: {
              channel: p,
              guild: O
            },
            commandTargetId: a
          })
        }
      }, t.id)
    }, [p, O, a, m]);
    return P.current ? e = (0, i.jsx)(o.MenuItem, {
      id: "menu-commands-placeholder",
      render: () => (0, i.jsx)(c.default, {}),
      disabled: !0
    }, "menu-commands-placeholder") : (e = 0 === U.length ? (0, i.jsx)(o.MenuItem, {
      id: "menu-commands-empty",
      label: f.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
      disabled: !0
    }, "menu-commands-empty") : U.map(M), null != R && (e = (0, i.jsxs)(i.Fragment, {
      children: [e, (0, i.jsx)(o.MenuSeparator, {}, "separator"), R]
    }))), (0, i.jsx)(o.MenuItem, {
      id: "apps",
      label: f.default.Messages.APPS,
      listClassName: N.list,
      children: e
    })
  }