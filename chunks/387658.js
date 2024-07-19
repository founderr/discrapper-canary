t.d(n, {
  Z: function() {
return k;
  }
}), t(47120);
var i = t(735250),
  l = t(470079),
  a = t(120356),
  r = t.n(a),
  s = t(140835),
  o = t(246521),
  c = t(442837),
  u = t(481060),
  d = t(911969),
  m = t(607070),
  p = t(555573),
  _ = t(213459),
  E = t(10718),
  A = t(895924),
  h = t(583027),
  f = t(585483),
  N = t(499254),
  C = t(541099),
  v = t(827498),
  I = t(496158),
  P = t(676161),
  x = t(660090),
  T = t(783097),
  S = t(176412),
  L = t(870205),
  R = t(981631),
  g = t(689079),
  M = t(689938),
  y = t(627542),
  O = t(763963);
let j = 'placeholder',
  b = [, , , , , ].fill(j);

function Z(e) {
  var n, t;
  let {
channel: a,
command: r,
section: o,
sectionName: c
  } = e, d = l.useCallback(() => {
let e = C.Z.entrypoint();
N.y(v.ti.COMMAND), (0, h.Mo)({
  command: r,
  location: A.Vh.APP_LAUNCHER_APPLICATION_VIEW,
  sectionName: c
}), p.Po({
  channelId: a.id,
  command: r,
  section: o,
  location: A.Vh.APP_LAUNCHER_APPLICATION_VIEW,
  sectionName: c,
  source: e,
  commandOrigin: A.bB.APPLICATION_LAUNCHER
}), f.S.dispatch(R.CkL.FOCUS_CHANNEL_TEXT_AREA, {
  channelId: a.id
});
  }, [
a.id,
r,
o,
c
  ]), m = (null !== (t = null === (n = r.options) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0) > 0, _ = l.useMemo(() => (0, i.jsxs)('div', {
className: O.commandTextContainer,
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
className: O.command,
onClick: d,
children: [
  _,
  m ? (0, i.jsx)(s.F, {}) : (0, i.jsx)(U, {
    channel: a,
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
} = l.useMemo(() => ({
  styleLarge: {
    width: ''.concat(10 + 20 * Math.random(), '%'),
    height: 'auto'
  },
  styleSmall: {
    width: ''.concat(30 + 60 * Math.random(), '%'),
    height: 'auto'
  }
}), []),
a = l.useMemo(() => (0, i.jsxs)('div', {
  className: O.commandTextContainerPlaceholder,
  children: [
    (0, i.jsx)('div', {
      className: y.textPlaceholder,
      style: n,
      children: (0, i.jsx)(u.Text, {
        className: y.hidden,
        variant: 'text-sm/semibold',
        color: 'header-primary',
        lineClamp: 1,
        children: '_'
      })
    }),
    (0, i.jsx)('div', {
      className: y.textPlaceholder,
      style: t,
      children: (0, i.jsx)(u.Text, {
        className: y.hidden,
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
className: r()(O.command, y.loadingAnimation, {
  [y.noAnimation]: e
}),
children: a
  });
}

function U(e) {
  let {
channel: n,
command: t,
sectionName: a
  } = e, r = (0, _.PL)(!0, !0), s = (0, _.LD)(n.guild_id, !0), c = (0, I.D)(n), [d, m] = l.useState(!1), p = l.useCallback(async e => {
e.stopPropagation();
try {
  await (0, S.L_)({
    applicationId: t.applicationId,
    userIndexState: r,
    guildIndexState: s,
    sectionName: a,
    location: A.Vh.APP_LAUNCHER_APPLICATION_VIEW
  }) && (await (0, T.Y$)({
    command: t,
    optionValues: {},
    context: c,
    sectionName: a
  }), N.y(v.ti.COMMAND));
} finally {
  m(!1);
}
  }, [
t,
r,
s,
a,
c
  ]);
  return (0, i.jsxs)(u.Button, {
type: 'submit',
onClick: p,
disabled: d,
size: u.ButtonSizes.ICON,
color: u.Button.Colors.PRIMARY,
className: O.commandSentCTAButton,
innerClassName: O.commandSentCTAButtonInner,
'aria-label': M.Z.Messages.APP_LAUNCHER_SEND_COMMAND_ARIA_LABEL.format({
  commandName: t.name
}),
children: [
  (0, i.jsx)(u.Text, {
    variant: 'text-sm/medium',
    color: 'redesign-button-primary-text',
    children: M.Z.Messages.SEND
  }),
  (0, i.jsx)(o.U, {
    size: 'xs',
    color: u.tokens.colors.REDESIGN_BUTTON_PRIMARY_TEXT
  })
]
  });
}

function D(e) {
  let {
channel: n,
commands: t,
section: l,
headerName: a,
sectionName: r,
children: s
  } = e;
  return 0 === t.length ? null : (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsxs)('div', {
    className: O.commandListHeader,
    children: [
      (0, i.jsx)(u.Heading, {
        variant: 'heading-sm/semibold',
        children: a
      }),
      s
    ]
  }),
  (0, i.jsx)('ul', {
    className: O.commandContainer,
    'aria-label': a,
    children: t.map((e, t) => e === j ? (0, i.jsx)(H, {}, e + t) : (0, i.jsx)(Z, {
      channel: n,
      command: e,
      section: l,
      sectionName: r
    }, e.id))
  })
]
  });
}

function k(e) {
  var n;
  let {
channel: t,
application: a,
sectionName: r,
installOnDemand: s
  } = e, {
filterSection: o,
commandsByActiveSection: c,
sectionDescriptors: u,
loading: m
  } = E.wi(t, {
commandType: d.yU.CHAT
  }, {
placeholderCount: 0,
limit: g.tn,
includeFrecency: !0,
allowApplicationState: s,
applicationId: a.id
  }), p = null !== (n = u.find(e => e.id === a.id)) && void 0 !== n ? n : null, {
sortOrder: _,
setSortOrder: A,
commands: h,
canSort: f
  } = (0, x.Z)({
sectionId: a.id,
commandsByActiveSection: c
  });
  l.useEffect(() => {
o(a.id);
  }, [
a.id,
o
  ]);
  let N = (0, P.Z)({
channel: t,
commands: h,
limit: 5
  });
  return (0, i.jsxs)('ul', {
className: O.contentContainer,
children: [
  (0, i.jsx)(D, {
    channel: t,
    section: p,
    commands: N,
    headerName: M.Z.Messages.APP_LAUNCHER_HOME_RECENT_COMMANDS_HEADER,
    sectionName: r
  }),
  (0, i.jsx)(D, {
    channel: t,
    section: p,
    commands: m.current ? b : h,
    headerName: M.Z.Messages.APP_LAUNCHER_USE_THIS_APP_HEADER,
    sectionName: r,
    children: f && (0, i.jsx)(L.Z, {
      sortOrder: _,
      onSortOptionClick: A
    })
  })
]
  });
}