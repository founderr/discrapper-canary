t.d(n, {
  Z: function() {
return B;
  }
}), t(47120);
var i = t(735250),
  a = t(470079),
  l = t(120356),
  r = t.n(l),
  o = t(140835),
  s = t(246521),
  c = t(442837),
  u = t(481060),
  d = t(911969),
  m = t(607070),
  p = t(555573),
  _ = t(213459),
  f = t(10718),
  C = t(895924),
  h = t(583027),
  A = t(585483),
  E = t(499254),
  N = t(541099),
  v = t(827498),
  x = t(496158),
  I = t(676161),
  g = t(660090),
  P = t(783097),
  L = t(176412),
  S = t(870205),
  T = t(981631),
  R = t(689079),
  b = t(689938),
  M = t(202558),
  y = t(66086);
let j = 'placeholder',
  O = [, , , , , ].fill(j);

function Z(e) {
  var n, t;
  let {
channel: l,
command: r,
section: s,
sectionName: c
  } = e, d = a.useCallback(() => {
let e = N.Z.entrypoint();
E.y(v.ti.COMMAND), (0, h.Mo)({
  command: r,
  location: C.Vh.APP_LAUNCHER_APPLICATION_VIEW,
  sectionName: c
}), p.Po({
  channelId: l.id,
  command: r,
  section: s,
  location: C.Vh.APP_LAUNCHER_APPLICATION_VIEW,
  sectionName: c,
  source: e,
  commandOrigin: C.bB.APPLICATION_LAUNCHER
}), A.S.dispatch(T.CkL.FOCUS_CHANNEL_TEXT_AREA, {
  channelId: l.id
});
  }, [
l.id,
r,
s,
c
  ]), m = (null !== (t = null === (n = r.options) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0) > 0, _ = a.useMemo(() => (0, i.jsxs)('div', {
className: y.commandTextContainer,
children: [
  (0, i.jsx)(u.Text, {
    variant: 'text-sm/semibold',
    color: 'header-primary',
    children: r.displayName
  }),
  (0, i.jsx)(u.Text, {
    variant: 'text-xs/medium',
    color: 'text-muted',
    lineClamp: 1,
    children: r.displayDescription
  })
]
  }), [
r.displayDescription,
r.displayName
  ]);
  return (0, i.jsxs)(u.Clickable, {
className: y.command,
onClick: d,
children: [
  _,
  m ? (0, i.jsx)(o.F, {}) : (0, i.jsx)(U, {
    channel: l,
    command: r,
    sectionName: c
  })
]
  });
}

function H() {
  let e = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
{
  styleLarge: n,
  styleSmall: t
} = a.useMemo(() => ({
  styleLarge: {
    width: ''.concat(10 + 20 * Math.random(), '%'),
    height: 'auto'
  },
  styleSmall: {
    width: ''.concat(30 + 60 * Math.random(), '%'),
    height: 'auto'
  }
}), []),
l = a.useMemo(() => (0, i.jsxs)('div', {
  className: y.commandTextContainerPlaceholder,
  children: [
    (0, i.jsx)('div', {
      className: M.textPlaceholder,
      style: n,
      children: (0, i.jsx)(u.Text, {
        className: M.hidden,
        variant: 'text-sm/semibold',
        color: 'header-primary',
        lineClamp: 1,
        children: '_'
      })
    }),
    (0, i.jsx)('div', {
      className: M.textPlaceholder,
      style: t,
      children: (0, i.jsx)(u.Text, {
        className: M.hidden,
        variant: 'text-xs/medium',
        color: 'text-muted',
        lineClamp: 1,
        children: '_'
      })
    })
  ]
}), [
  n,
  t
]);
  return (0, i.jsx)('div', {
className: r()(y.command, M.loadingAnimation, {
  [M.noAnimation]: e
}),
children: l
  });
}

function U(e) {
  let {
channel: n,
command: t,
sectionName: l
  } = e, r = (0, _.PL)(!0, !0), o = (0, _.LD)(n.guild_id, !0), c = (0, x.D)(n), [d, m] = a.useState(!1), p = a.useCallback(async e => {
e.stopPropagation();
try {
  await (0, L.L_)({
    applicationId: t.applicationId,
    userIndexState: r,
    guildIndexState: o,
    sectionName: l,
    location: C.Vh.APP_LAUNCHER_APPLICATION_VIEW
  }) && (await (0, P.Y$)({
    command: t,
    optionValues: {},
    context: c,
    sectionName: l
  }), E.y(v.ti.COMMAND));
} finally {
  m(!1);
}
  }, [
t,
r,
o,
l,
c
  ]);
  return (0, i.jsxs)(u.Button, {
type: 'submit',
onClick: p,
disabled: d,
size: u.ButtonSizes.ICON,
color: u.Button.Colors.PRIMARY,
className: y.commandSentCTAButton,
innerClassName: y.commandSentCTAButtonInner,
'aria-label': b.Z.Messages.APP_LAUNCHER_SEND_COMMAND_ARIA_LABEL.format({
  commandName: t.name
}),
children: [
  (0, i.jsx)(u.Text, {
    variant: 'text-sm/medium',
    color: 'currentColor',
    children: b.Z.Messages.SEND
  }),
  (0, i.jsx)(s.U, {
    size: 'xs',
    color: 'currentColor'
  })
]
  });
}

function D(e) {
  let {
channel: n,
commands: t,
section: a,
headerName: l,
sectionName: r,
children: o
  } = e;
  return 0 === t.length ? null : (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsxs)('div', {
    className: y.commandListHeader,
    children: [
      (0, i.jsx)(u.Heading, {
        variant: 'heading-sm/semibold',
        children: l
      }),
      o
    ]
  }),
  (0, i.jsx)('ul', {
    className: y.commandContainer,
    'aria-label': l,
    children: t.map((e, t) => e === j ? (0, i.jsx)(H, {}, e + t) : (0, i.jsx)(Z, {
      channel: n,
      command: e,
      section: a,
      sectionName: r
    }, e.id))
  })
]
  });
}

function B(e) {
  var n;
  let {
channel: t,
application: l,
sectionName: r,
installOnDemand: o
  } = e, {
filterSection: s,
commandsByActiveSection: c,
sectionDescriptors: u,
loading: m
  } = f.wi(t, {
commandType: d.yU.CHAT
  }, {
placeholderCount: 0,
limit: R.tn,
includeFrecency: !0,
allowApplicationState: o,
applicationId: l.id
  }), p = null !== (n = u.find(e => e.id === l.id)) && void 0 !== n ? n : null, {
sortOrder: _,
setSortOrder: C,
commands: h,
canSort: A
  } = (0, g.Z)({
sectionId: l.id,
commandsByActiveSection: c
  });
  a.useEffect(() => {
s(l.id);
  }, [
l.id,
s
  ]);
  let E = (0, I.Z)({
channel: t,
commands: h,
limit: 5
  });
  return (0, i.jsxs)('ul', {
className: y.contentContainer,
children: [
  (0, i.jsx)(D, {
    channel: t,
    section: p,
    commands: E,
    headerName: b.Z.Messages.APP_LAUNCHER_HOME_RECENT_COMMANDS_HEADER,
    sectionName: r
  }),
  (0, i.jsx)(D, {
    channel: t,
    section: p,
    commands: m.current ? O : h,
    headerName: b.Z.Messages.APP_LAUNCHER_USE_THIS_APP_HEADER,
    sectionName: r,
    children: A && (0, i.jsx)(S.Z, {
      sortOrder: _,
      onSortOptionClick: C
    })
  })
]
  });
}