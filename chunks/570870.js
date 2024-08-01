var i = t(735250),
  l = t(470079),
  u = t(512722),
  r = t.n(u),
  a = t(442837),
  s = t(481060),
  d = t(10718),
  o = t(667204),
  c = t(826298),
  _ = t(276022),
  E = t(978983),
  f = t(430824),
  A = t(594174),
  T = t(689079),
  I = t(689938),
  p = t(768075);
e.Z = n => {
  let e, {
  commandType: t,
  commandTargetId: u,
  channel: N,
  guildId: S,
  onHeightUpdate: h,
  context: M
} = n,
O = (0, a.e7)([f.Z], () => f.Z.getGuild(null != S ? S : N.guild_id)),
m = (0, a.e7)([A.default], () => A.default.getUser(u)),
g = (0, _.Z)({
  user: m,
  guildId: null == O ? void 0 : O.id,
  channel: N,
  context: M
}),
{
  commands: v,
  sectionDescriptors: R,
  loading: C
} = d.wi(N, {
  commandType: t
}, {
  limit: T.lr
}),
{
  sections: b
} = l.useMemo(() => {
  let n = {};
  return R.forEach(e => {
    n[e.id] = e;
  }), {
    sections: n
  };
}, [R]),
P = l.useRef(C.current);
  l.useEffect(() => {
C.current !== P.current && (P.current = C.current, null == h || h());
  }, [
C,
h
  ]);
  let Z = l.useCallback(n => {
r()(null != N, 'menu item should not show if channel is null');
let e = b[n.applicationId],
  t = null != e ? (0, c.ky)(e) : void 0;
return (0, i.jsx)(s.MenuItem, {
  id: n.id,
  label: n.displayName,
  showIconFirst: !0,
  icon: () => null != t ? (0, i.jsx)(t, {
    channel: N,
    section: e,
    width: 18,
    height: 18,
    selectable: !1
  }) : null,
  action: () => {
    (0, o.Z)({
      command: n,
      optionValues: {},
      context: {
        channel: N,
        guild: O
      },
      commandTargetId: u
    });
  }
}, n.id);
  }, [
N,
O,
u,
b
  ]);
  return C.current ? e = (0, i.jsx)(s.MenuItem, {
id: 'menu-commands-placeholder',
render: () => (0, i.jsx)(E.Z, {}),
disabled: !0
  }, 'menu-commands-placeholder') : (e = 0 === v.length ? (0, i.jsx)(s.MenuItem, {
id: 'menu-commands-empty',
label: I.Z.Messages.APPLICATION_COMMAND_NO_COMMANDS,
disabled: !0
  }, 'menu-commands-empty') : v.map(Z), null != g && (e = (0, i.jsxs)(i.Fragment, {
children: [
  e,
  (0, i.jsx)(s.MenuSeparator, {}, 'separator'),
  g
]
  }))), (0, i.jsx)(s.MenuItem, {
id: 'apps',
label: I.Z.Messages.APPS,
listClassName: p.list,
children: e
  });
};