var i = t(735250),
  l = t(470079),
  r = t(512722),
  u = t.n(r),
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
      commandTargetId: r,
      channel: O,
      guildId: p,
      onHeightUpdate: M,
      context: f
    } = e,
    Z = (0, a.e7)([I.Z], () => I.Z.getGuild(null != p ? p : O.guild_id)),
    h = (0, a.e7)([T.default], () => T.default.getUser(r)),
    R = (0, _.Z)({
      user: h,
      guildId: null == Z ? void 0 : Z.id,
      channel: O,
      context: f
    }),
    {
      commands: C,
      sectionDescriptors: g,
      loading: m
    } = s.wi(O, {
      commandType: t
    }, {
      limit: N.lr
    }),
    {
      sections: G
    } = l.useMemo(() => {
      let e = {};
      return g.forEach(n => {
        e[n.id] = n
      }), {
        sections: e
      }
    }, [g]),
    v = l.useRef(m.current);
  l.useEffect(() => {
    m.current !== v.current && (v.current = m.current, null == M || M())
  }, [m, M]);
  let y = l.useCallback(e => {
    u()(null != O, "menu item should not show if channel is null");
    let n = G[e.applicationId],
      t = null != n ? (0, c.ky)(n) : void 0;
    return (0, i.jsx)(o.MenuItem, {
      id: e.id,
      label: e.displayName,
      showIconFirst: !0,
      icon: () => null != t ? (0, i.jsx)(t, {
        channel: O,
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
            channel: O,
            guild: Z
          },
          commandTargetId: r
        })
      }
    }, e.id)
  }, [O, Z, r, G]);
  return m.current ? n = (0, i.jsx)(o.MenuItem, {
    id: "menu-commands-placeholder",
    render: () => (0, i.jsx)(E.Z, {}),
    disabled: !0
  }, "menu-commands-placeholder") : (n = 0 === C.length ? (0, i.jsx)(o.MenuItem, {
    id: "menu-commands-empty",
    label: S.Z.Messages.APPLICATION_COMMAND_NO_COMMANDS,
    disabled: !0
  }, "menu-commands-empty") : C.map(y), null != R && (n = (0, i.jsxs)(i.Fragment, {
    children: [n, (0, i.jsx)(o.MenuSeparator, {}, "separator"), R]
  }))), (0, i.jsx)(o.MenuItem, {
    id: "apps",
    label: S.Z.Messages.APPS,
    listClassName: A.list,
    children: n
  })
}