var i = t(735250),
  l = t(470079),
  r = t(512722),
  a = t.n(r),
  u = t(442837),
  o = t(481060),
  s = t(10718),
  d = t(667204),
  E = t(826298),
  c = t(17165),
  I = t(276022),
  T = t(430824),
  _ = t(594174),
  N = t(689079),
  S = t(689938),
  A = t(878859);
n.Z = e => {
  let n, {
      commandType: t,
      commandTargetId: r,
      channel: p,
      guildId: O,
      onHeightUpdate: h,
      context: f
    } = e,
    M = (0, u.e7)([T.Z], () => T.Z.getGuild(null != O ? O : p.guild_id)),
    R = (0, u.e7)([_.default], () => _.default.getUser(r)),
    Z = (0, I.Z)({
      user: R,
      guildId: null == M ? void 0 : M.id,
      channel: p,
      context: f
    }),
    {
      commands: G,
      sectionDescriptors: g,
      loading: m
    } = s.wi(p, {
      commandType: t
    }, {
      limit: N.lr
    }),
    {
      sections: y
    } = l.useMemo(() => {
      let e = {};
      return g.forEach(n => {
        e[n.id] = n
      }), {
        sections: e
      }
    }, [g]),
    C = l.useRef(m.current);
  l.useEffect(() => {
    m.current !== C.current && (C.current = m.current, null == h || h())
  }, [m, h]);
  let D = l.useCallback(e => {
    a()(null != p, "menu item should not show if channel is null");
    let n = y[e.applicationId],
      t = null != n ? (0, E.ky)(n) : void 0;
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
            guild: M
          },
          commandTargetId: r
        })
      }
    }, e.id)
  }, [p, M, r, y]);
  return m.current ? n = (0, i.jsx)(o.MenuItem, {
    id: "menu-commands-placeholder",
    render: () => (0, i.jsx)(c.Z, {}),
    disabled: !0
  }, "menu-commands-placeholder") : (n = 0 === G.length ? (0, i.jsx)(o.MenuItem, {
    id: "menu-commands-empty",
    label: S.Z.Messages.APPLICATION_COMMAND_NO_COMMANDS,
    disabled: !0
  }, "menu-commands-empty") : G.map(D), null != Z && (n = (0, i.jsxs)(i.Fragment, {
    children: [n, (0, i.jsx)(o.MenuSeparator, {}, "separator"), Z]
  }))), (0, i.jsx)(o.MenuItem, {
    id: "apps",
    label: S.Z.Messages.APPS,
    listClassName: A.list,
    children: n
  })
}