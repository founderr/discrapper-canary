"use strict";
n.r(e), n.d(e, {
  default: function() {
    return p
  }
});
var i = n("37983"),
  u = n("884691"),
  r = n("627445"),
  a = n.n(r),
  d = n("446674"),
  l = n("77078"),
  o = n("240249"),
  s = n("916565"),
  I = n("355263"),
  E = n("633043"),
  c = n("823026"),
  T = n("305961"),
  _ = n("697218"),
  S = n("317041"),
  f = n("782340"),
  N = n("466063"),
  p = t => {
    let e, {
        commandType: n,
        commandTargetId: r,
        channel: p,
        guildId: G,
        onHeightUpdate: A,
        context: D
      } = t,
      M = (0, d.useStateFromStores)([T.default], () => T.default.getGuild(null != G ? G : p.guild_id)),
      O = (0, d.useStateFromStores)([_.default], () => _.default.getUser(r)),
      m = (0, c.default)({
        user: O,
        guildId: null == M ? void 0 : M.id,
        channel: p,
        context: D
      }),
      {
        commands: U,
        sectionDescriptors: h,
        loading: C
      } = o.useDiscovery(p, {
        commandType: n
      }, {
        limit: S.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
      }),
      {
        sections: R
      } = u.useMemo(() => {
        let t = {};
        return h.forEach(e => {
          t[e.id] = e
        }), {
          sections: t
        }
      }, [h]),
      y = u.useRef(C.current);
    u.useEffect(() => {
      C.current !== y.current && (y.current = C.current, null == A || A())
    }, [C, A]);
    let P = u.useCallback(t => {
      a(null != p, "menu item should not show if channel is null");
      let e = R[t.applicationId],
        n = null != e ? (0, I.getIconComponent)(e) : void 0;
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
              guild: M
            },
            commandTargetId: r
          })
        }
      }, t.id)
    }, [p, M, r, R]);
    return C.current ? e = (0, i.jsx)(l.MenuItem, {
      id: "menu-commands-placeholder",
      render: () => (0, i.jsx)(E.default, {}),
      disabled: !0
    }, "menu-commands-placeholder") : (e = 0 === U.length ? (0, i.jsx)(l.MenuItem, {
      id: "menu-commands-empty",
      label: f.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
      disabled: !0
    }, "menu-commands-empty") : U.map(P), null != m && (e = (0, i.jsxs)(i.Fragment, {
      children: [e, (0, i.jsx)(l.MenuSeparator, {}, "separator"), m]
    }))), (0, i.jsx)(l.MenuItem, {
      id: "apps",
      label: f.default.Messages.APPS,
      listClassName: N.list,
      children: e
    })
  }