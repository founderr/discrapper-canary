var i = t(735250),
  r = t(470079),
  a = t(512722),
  s = t.n(a),
  o = t(442837),
  l = t(481060),
  u = t(10718),
  d = t(667204),
  c = t(826298),
  E = t(276022),
  _ = t(978983),
  I = t(430824),
  T = t(594174),
  N = t(689079),
  S = t(689938),
  p = t(768075);
n.Z = e => {
  let n, {
  commandType: t,
  commandTargetId: a,
  channel: f,
  guildId: A,
  onHeightUpdate: O,
  context: h
} = e,
M = (0, o.e7)([I.Z], () => I.Z.getGuild(null != A ? A : f.guild_id)),
Z = (0, o.e7)([T.default], () => T.default.getUser(a)),
m = (0, E.Z)({
  user: Z,
  guildId: null == M ? void 0 : M.id,
  channel: f,
  context: h
}),
{
  commands: g,
  sectionDescriptors: R,
  loading: C
} = u.wi(f, {
  commandType: t
}, {
  limit: N.lr
}),
{
  sections: v
} = r.useMemo(() => {
  let e = {};
  return R.forEach(n => {
    e[n.id] = n;
  }), {
    sections: e
  };
}, [R]),
G = r.useRef(C.current);
  r.useEffect(() => {
C.current !== G.current && (G.current = C.current, null == O || O());
  }, [
C,
O
  ]);
  let y = r.useCallback(e => {
s()(null != f, 'menu item should not show if channel is null');
let n = v[e.applicationId],
  t = null != n ? (0, c.ky)(n) : void 0;
return (0, i.jsx)(l.MenuItem, {
  id: e.id,
  label: e.displayName,
  showIconFirst: !0,
  icon: () => null != t ? (0, i.jsx)(t, {
    channel: f,
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
        channel: f,
        guild: M
      },
      commandTargetId: a
    });
  }
}, e.id);
  }, [
f,
M,
a,
v
  ]);
  return C.current ? n = (0, i.jsx)(l.MenuItem, {
id: 'menu-commands-placeholder',
render: () => (0, i.jsx)(_.Z, {}),
disabled: !0
  }, 'menu-commands-placeholder') : (n = 0 === g.length ? (0, i.jsx)(l.MenuItem, {
id: 'menu-commands-empty',
label: S.Z.Messages.APPLICATION_COMMAND_NO_COMMANDS,
disabled: !0
  }, 'menu-commands-empty') : g.map(y), null != m && (n = (0, i.jsxs)(i.Fragment, {
children: [
  n,
  (0, i.jsx)(l.MenuSeparator, {}, 'separator'),
  m
]
  }))), (0, i.jsx)(l.MenuItem, {
id: 'apps',
label: S.Z.Messages.APPS,
listClassName: p.list,
children: n
  });
};