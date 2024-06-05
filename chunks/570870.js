"use strict";
n.r(t);
var i = n("735250"),
  l = n("470079"),
  a = n("512722"),
  u = n.n(a),
  s = n("442837"),
  d = n("481060"),
  r = n("10718"),
  o = n("667204"),
  c = n("826298"),
  f = n("17165"),
  S = n("276022"),
  E = n("430824"),
  T = n("594174"),
  _ = n("689079"),
  p = n("689938"),
  A = n("575287");
t.default = e => {
  let t, {
      commandType: n,
      commandTargetId: a,
      channel: I,
      guildId: g,
      onHeightUpdate: m,
      context: M
    } = e,
    O = (0, s.useStateFromStores)([E.default], () => E.default.getGuild(null != g ? g : I.guild_id)),
    v = (0, s.useStateFromStores)([T.default], () => T.default.getUser(a)),
    h = (0, S.default)({
      user: v,
      guildId: null == O ? void 0 : O.id,
      channel: I,
      context: M
    }),
    {
      commands: N,
      sectionDescriptors: R,
      loading: C
    } = r.useDiscovery(I, {
      commandType: n
    }, {
      limit: _.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
    }),
    {
      sections: P
    } = l.useMemo(() => {
      let e = {};
      return R.forEach(t => {
        e[t.id] = t
      }), {
        sections: e
      }
    }, [R]),
    D = l.useRef(C.current);
  l.useEffect(() => {
    C.current !== D.current && (D.current = C.current, null == m || m())
  }, [C, m]);
  let y = l.useCallback(e => {
    u()(null != I, "menu item should not show if channel is null");
    let t = P[e.applicationId],
      n = null != t ? (0, c.getIconComponent)(t) : void 0;
    return (0, i.jsx)(d.MenuItem, {
      id: e.id,
      label: e.displayName,
      showIconFirst: !0,
      icon: () => null != n ? (0, i.jsx)(n, {
        channel: I,
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
            channel: I,
            guild: O
          },
          commandTargetId: a
        })
      }
    }, e.id)
  }, [I, O, a, P]);
  return C.current ? t = (0, i.jsx)(d.MenuItem, {
    id: "menu-commands-placeholder",
    render: () => (0, i.jsx)(f.default, {}),
    disabled: !0
  }, "menu-commands-placeholder") : (t = 0 === N.length ? (0, i.jsx)(d.MenuItem, {
    id: "menu-commands-empty",
    label: p.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
    disabled: !0
  }, "menu-commands-empty") : N.map(y), null != h && (t = (0, i.jsxs)(i.Fragment, {
    children: [t, (0, i.jsx)(d.MenuSeparator, {}, "separator"), h]
  }))), (0, i.jsx)(d.MenuItem, {
    id: "apps",
    label: p.default.Messages.APPS,
    listClassName: A.list,
    children: t
  })
}