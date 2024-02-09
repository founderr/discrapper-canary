"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var i = n("37983"),
  a = n("884691"),
  r = n("627445"),
  l = n.n(r),
  s = n("446674"),
  u = n("77078"),
  o = n("240249"),
  d = n("916565"),
  c = n("355263"),
  f = n("633043"),
  E = n("823026"),
  h = n("305961"),
  p = n("697218"),
  C = n("317041"),
  _ = n("782340"),
  I = n("205735"),
  S = e => {
    let t, {
        commandType: n,
        commandTargetId: r,
        channel: S,
        guildId: T,
        onHeightUpdate: N,
        context: v
      } = e,
      A = (0, s.useStateFromStores)([h.default], () => h.default.getGuild(null != T ? T : S.guild_id)),
      g = (0, s.useStateFromStores)([p.default], () => p.default.getUser(r)),
      m = (0, E.default)({
        user: g,
        guildId: null == A ? void 0 : A.id,
        channel: S,
        context: v
      }),
      {
        commands: M,
        sectionDescriptors: R,
        loading: O
      } = o.useDiscovery(S, {
        commandType: n
      }, {
        limit: C.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
      }),
      {
        sections: y
      } = a.useMemo(() => {
        let e = {};
        return R.forEach(t => {
          e[t.id] = t
        }), {
          sections: e
        }
      }, [R]),
      U = a.useRef(O.current);
    a.useEffect(() => {
      O.current !== U.current && (U.current = O.current, null == N || N())
    }, [O, N]);
    let L = a.useCallback(e => {
      l(null != S, "menu item should not show if channel is null");
      let t = y[e.applicationId],
        n = null != t ? (0, c.getIconComponent)(t) : void 0;
      return (0, i.jsx)(u.MenuItem, {
        id: e.id,
        label: e.displayName,
        showIconFirst: !0,
        icon: () => null != n ? (0, i.jsx)(n, {
          channel: S,
          section: t,
          width: 18,
          height: 18,
          selectable: !1
        }) : null,
        action: () => {
          (0, d.default)({
            command: e,
            optionValues: {},
            context: {
              channel: S,
              guild: A
            },
            commandTargetId: r
          })
        }
      }, e.id)
    }, [S, A, r, y]);
    return O.current ? t = (0, i.jsx)(u.MenuItem, {
      id: "menu-commands-placeholder",
      render: () => (0, i.jsx)(f.default, {}),
      disabled: !0
    }, "menu-commands-placeholder") : (t = 0 === M.length ? (0, i.jsx)(u.MenuItem, {
      id: "menu-commands-empty",
      label: _.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
      disabled: !0
    }, "menu-commands-empty") : M.map(L), null != m && (t = (0, i.jsxs)(i.Fragment, {
      children: [t, (0, i.jsx)(u.MenuSeparator, {}, "separator"), m]
    }))), (0, i.jsx)(u.MenuItem, {
      id: "apps",
      label: _.default.Messages.APPS,
      listClassName: I.list,
      children: t
    })
  }