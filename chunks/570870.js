"use strict";
n.r(t);
var u = n("735250"),
  l = n("470079"),
  i = n("512722"),
  s = n.n(i),
  a = n("442837"),
  r = n("481060"),
  d = n("10718"),
  o = n("667204"),
  c = n("826298"),
  f = n("17165"),
  p = n("276022"),
  S = n("430824"),
  g = n("594174"),
  m = n("689079"),
  A = n("689938"),
  M = n("575287");
t.default = e => {
  let t, {
      commandType: n,
      commandTargetId: i,
      channel: h,
      guildId: v,
      onHeightUpdate: E,
      context: I
    } = e,
    _ = (0, a.useStateFromStores)([S.default], () => S.default.getGuild(null != v ? v : h.guild_id)),
    T = (0, a.useStateFromStores)([g.default], () => g.default.getUser(i)),
    P = (0, p.default)({
      user: T,
      guildId: null == _ ? void 0 : _.id,
      channel: h,
      context: I
    }),
    {
      commands: N,
      sectionDescriptors: G,
      loading: C
    } = d.useDiscovery(h, {
      commandType: n
    }, {
      limit: m.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
    }),
    {
      sections: b
    } = l.useMemo(() => {
      let e = {};
      return G.forEach(t => {
        e[t.id] = t
      }), {
        sections: e
      }
    }, [G]),
    O = l.useRef(C.current);
  l.useEffect(() => {
    C.current !== O.current && (O.current = C.current, null == E || E())
  }, [C, E]);
  let x = l.useCallback(e => {
    s()(null != h, "menu item should not show if channel is null");
    let t = b[e.applicationId],
      n = null != t ? (0, c.getIconComponent)(t) : void 0;
    return (0, u.jsx)(r.MenuItem, {
      id: e.id,
      label: e.displayName,
      showIconFirst: !0,
      icon: () => null != n ? (0, u.jsx)(n, {
        channel: h,
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
            channel: h,
            guild: _
          },
          commandTargetId: i
        })
      }
    }, e.id)
  }, [h, _, i, b]);
  return C.current ? t = (0, u.jsx)(r.MenuItem, {
    id: "menu-commands-placeholder",
    render: () => (0, u.jsx)(f.default, {}),
    disabled: !0
  }, "menu-commands-placeholder") : (t = 0 === N.length ? (0, u.jsx)(r.MenuItem, {
    id: "menu-commands-empty",
    label: A.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
    disabled: !0
  }, "menu-commands-empty") : N.map(x), null != P && (t = (0, u.jsxs)(u.Fragment, {
    children: [t, (0, u.jsx)(r.MenuSeparator, {}, "separator"), P]
  }))), (0, u.jsx)(r.MenuItem, {
    id: "apps",
    label: A.default.Messages.APPS,
    listClassName: M.list,
    children: t
  })
}