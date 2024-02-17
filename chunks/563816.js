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
  d = n("446674"),
  l = n("77078"),
  o = n("240249"),
  s = n("916565"),
  c = n("355263"),
  E = n("633043"),
  I = n("823026"),
  T = n("305961"),
  _ = n("697218"),
  f = n("317041"),
  S = n("782340"),
  N = n("466063"),
  p = t => {
    let e, {
        commandType: n,
        commandTargetId: a,
        channel: p,
        guildId: A,
        onHeightUpdate: G,
        context: M
      } = t,
      D = (0, d.useStateFromStores)([T.default], () => T.default.getGuild(null != A ? A : p.guild_id)),
      O = (0, d.useStateFromStores)([_.default], () => _.default.getUser(a)),
      m = (0, I.default)({
        user: O,
        guildId: null == D ? void 0 : D.id,
        channel: p,
        context: M
      }),
      {
        commands: C,
        sectionDescriptors: U,
        loading: h
      } = o.useDiscovery(p, {
        commandType: n
      }, {
        limit: f.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
      }),
      {
        sections: R
      } = u.useMemo(() => {
        let t = {};
        return U.forEach(e => {
          t[e.id] = e
        }), {
          sections: t
        }
      }, [U]),
      g = u.useRef(h.current);
    u.useEffect(() => {
      h.current !== g.current && (g.current = h.current, null == G || G())
    }, [h, G]);
    let y = u.useCallback(t => {
      r(null != p, "menu item should not show if channel is null");
      let e = R[t.applicationId],
        n = null != e ? (0, c.getIconComponent)(e) : void 0;
      return (0, i.jsx)(l.MenuItem, {
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
              guild: D
            },
            commandTargetId: a
          })
        }
      }, t.id)
    }, [p, D, a, R]);
    return h.current ? e = (0, i.jsx)(l.MenuItem, {
      id: "menu-commands-placeholder",
      render: () => (0, i.jsx)(E.default, {}),
      disabled: !0
    }, "menu-commands-placeholder") : (e = 0 === C.length ? (0, i.jsx)(l.MenuItem, {
      id: "menu-commands-empty",
      label: S.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
      disabled: !0
    }, "menu-commands-empty") : C.map(y), null != m && (e = (0, i.jsxs)(i.Fragment, {
      children: [e, (0, i.jsx)(l.MenuSeparator, {}, "separator"), m]
    }))), (0, i.jsx)(l.MenuItem, {
      id: "apps",
      label: S.default.Messages.APPS,
      listClassName: N.list,
      children: e
    })
  }