var i = n(735250),
  r = n(470079),
  a = n(512722),
  o = n.n(a),
  s = n(442837),
  u = n(481060),
  d = n(10718),
  l = n(667204),
  E = n(826298),
  _ = n(17165),
  c = n(276022),
  I = n(430824),
  T = n(594174),
  N = n(689079),
  S = n(689938),
  f = n(359522);
t.Z = e => {
  let t, {
  commandType: n,
  commandTargetId: a,
  channel: p,
  guildId: A,
  onHeightUpdate: O,
  context: h
} = e,
R = (0, s.e7)([I.Z], () => I.Z.getGuild(null != A ? A : p.guild_id)),
C = (0, s.e7)([T.default], () => T.default.getUser(a)),
m = (0, c.Z)({
  user: C,
  guildId: null == R ? void 0 : R.id,
  channel: p,
  context: h
}),
{
  commands: v,
  sectionDescriptors: Z,
  loading: M
} = d.wi(p, {
  commandType: n
}, {
  limit: N.lr
}),
{
  sections: G
} = r.useMemo(() => {
  let e = {};
  return Z.forEach(t => {
    e[t.id] = t;
  }), {
    sections: e
  };
}, [Z]),
y = r.useRef(M.current);
  r.useEffect(() => {
M.current !== y.current && (y.current = M.current, null == O || O());
  }, [
M,
O
  ]);
  let g = r.useCallback(e => {
o()(null != p, 'menu item should not show if channel is null');
let t = G[e.applicationId],
  n = null != t ? (0, E.ky)(t) : void 0;
return (0, i.jsx)(u.MenuItem, {
  id: e.id,
  label: e.displayName,
  showIconFirst: !0,
  icon: () => null != n ? (0, i.jsx)(n, {
    channel: p,
    section: t,
    width: 18,
    height: 18,
    selectable: !1
  }) : null,
  action: () => {
    (0, l.Z)({
      command: e,
      optionValues: {},
      context: {
        channel: p,
        guild: R
      },
      commandTargetId: a
    });
  }
}, e.id);
  }, [
p,
R,
a,
G
  ]);
  return M.current ? t = (0, i.jsx)(u.MenuItem, {
id: 'menu-commands-placeholder',
render: () => (0, i.jsx)(_.Z, {}),
disabled: !0
  }, 'menu-commands-placeholder') : (t = 0 === v.length ? (0, i.jsx)(u.MenuItem, {
id: 'menu-commands-empty',
label: S.Z.Messages.APPLICATION_COMMAND_NO_COMMANDS,
disabled: !0
  }, 'menu-commands-empty') : v.map(g), null != m && (t = (0, i.jsxs)(i.Fragment, {
children: [
  t,
  (0, i.jsx)(u.MenuSeparator, {}, 'separator'),
  m
]
  }))), (0, i.jsx)(u.MenuItem, {
id: 'apps',
label: S.Z.Messages.APPS,
listClassName: f.list,
children: t
  });
};