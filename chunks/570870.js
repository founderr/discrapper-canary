var i = t(735250),
  r = t(470079),
  u = t(512722),
  l = t.n(u),
  a = t(442837),
  o = t(481060),
  d = t(10718),
  s = t(667204),
  c = t(826298),
  _ = t(276022),
  E = t(978983),
  I = t(430824),
  T = t(594174),
  N = t(689079),
  S = t(689938),
  A = t(359522);
n.Z = e => {
  let n, {
  commandType: t,
  commandTargetId: u,
  channel: p,
  guildId: O,
  onHeightUpdate: f,
  context: M
} = e,
h = (0, a.e7)([I.Z], () => I.Z.getGuild(null != O ? O : p.guild_id)),
Z = (0, a.e7)([T.default], () => T.default.getUser(u)),
R = (0, _.Z)({
  user: Z,
  guildId: null == h ? void 0 : h.id,
  channel: p,
  context: M
}),
{
  commands: C,
  sectionDescriptors: g,
  loading: G
} = d.wi(p, {
  commandTypes: [t]
}, {
  limit: N.lr
}),
{
  sections: m
} = r.useMemo(() => {
  let e = {};
  return g.forEach(n => {
    e[n.id] = n;
  }), {
    sections: e
  };
}, [g]),
y = r.useRef(G.current);
  r.useEffect(() => {
G.current !== y.current && (y.current = G.current, null == f || f());
  }, [
G,
f
  ]);
  let D = r.useCallback(e => {
l()(null != p, 'menu item should not show if channel is null');
let n = m[e.applicationId],
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
    (0, s.Z)({
      command: e,
      optionValues: {},
      context: {
        channel: p,
        guild: h
      },
      commandTargetId: u
    });
  }
}, e.id);
  }, [
p,
h,
u,
m
  ]);
  return G.current ? n = (0, i.jsx)(o.MenuItem, {
id: 'menu-commands-placeholder',
render: () => (0, i.jsx)(E.Z, {}),
disabled: !0
  }, 'menu-commands-placeholder') : (n = 0 === C.length ? (0, i.jsx)(o.MenuItem, {
id: 'menu-commands-empty',
label: S.Z.Messages.APPLICATION_COMMAND_NO_COMMANDS,
disabled: !0
  }, 'menu-commands-empty') : C.map(D), null != R && (n = (0, i.jsxs)(i.Fragment, {
children: [
  n,
  (0, i.jsx)(o.MenuSeparator, {}, 'separator'),
  R
]
  }))), (0, i.jsx)(o.MenuItem, {
id: 'apps',
label: S.Z.Messages.APPS,
listClassName: A.list,
children: n
  });
};