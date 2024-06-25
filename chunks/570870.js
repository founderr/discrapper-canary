var i = t(735250),
  r = t(470079),
  l = t(512722),
  u = t.n(l),
  a = t(442837),
  o = t(481060),
  s = t(10718),
  d = t(667204),
  c = t(826298),
  E = t(17165),
  _ = t(276022),
  I = t(430824),
  T = t(594174),
  N = t(689079),
  S = t(689938),
  A = t(878859);
n.Z = e => {
  let n, {
      commandType: t,
      commandTargetId: l,
      channel: p,
      guildId: O,
      onHeightUpdate: f,
      context: M
    } = e,
    Z = (0, a.e7)([I.Z], () => I.Z.getGuild(null != O ? O : p.guild_id)),
    h = (0, a.e7)([T.default], () => T.default.getUser(l)),
    R = (0, _.Z)({
      user: h,
      guildId: null == Z ? void 0 : Z.id,
      channel: p,
      context: M
    }),
    {
      commands: g,
      sectionDescriptors: C,
      loading: m
    } = s.wi(p, {
      commandType: t
    }, {
      limit: N.lr
    }),
    {
      sections: G
    } = r.useMemo(() => {
      let e = {};
      return C.forEach(n => {
        e[n.id] = n
      }), {
        sections: e
      }
    }, [C]),
    v = r.useRef(m.current);
  r.useEffect(() => {
    m.current !== v.current && (v.current = m.current, null == f || f())
  }, [m, f]);
  let y = r.useCallback(e => {
    u()(null != p, "menu item should not show if channel is null");
    let n = G[e.applicationId],
      t = null != n ? (0, c.ky)(n) : void 0;
    return (0, i.jsx)(o.MenuItem, {
      id: e.id,
      label: e.displayName,
      showIconFirst: !0,
      icon: () => null != t ? (0, i.jsx)(t, {
        channel: p,
        section: n,
        width: 18,
        height: 18,
        selectable: !1
      }) : null,
      action: () => {
        (0, d.Z)({
          command: e,
          optionValues: {},
          context: {
            channel: p,
            guild: Z
          },
          commandTargetId: l
        })
      }
    }, e.id)
  }, [p, Z, l, G]);
  return m.current ? n = (0, i.jsx)(o.MenuItem, {
    id: "menu-commands-placeholder",
    render: () => (0, i.jsx)(E.Z, {}),
    disabled: !0
  }, "menu-commands-placeholder") : (n = 0 === g.length ? (0, i.jsx)(o.MenuItem, {
    id: "menu-commands-empty",
    label: S.Z.Messages.APPLICATION_COMMAND_NO_COMMANDS,
    disabled: !0
  }, "menu-commands-empty") : g.map(y), null != R && (n = (0, i.jsxs)(i.Fragment, {
    children: [n, (0, i.jsx)(o.MenuSeparator, {}, "separator"), R]
  }))), (0, i.jsx)(o.MenuItem, {
    id: "apps",
    label: S.Z.Messages.APPS,
    listClassName: A.list,
    children: n
  })
}