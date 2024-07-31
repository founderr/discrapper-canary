t.d(n, {
  Z: function() {
return D;
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
  h = t(147391),
  A = t(583027),
  E = t(585483),
  N = t(499254),
  v = t(541099),
  x = t(827498),
  I = t(496158),
  g = t(676161),
  P = t(660090),
  L = t(783097),
  S = t(176412),
  T = t(870205),
  b = t(981631),
  R = t(689079),
  M = t(689938),
  y = t(627542),
  j = t(763963);
let O = 'placeholder',
  Z = [, , , , , ].fill(O);

function H(e) {
  var n, t;
  let {
channel: l,
command: r,
section: s,
sectionName: c
  } = e, d = a.useCallback(() => {
let e = v.Z.entrypoint();
N.y(x.ti.COMMAND), (0, A.Mo)({
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
}), E.S.dispatch(b.CkL.FOCUS_CHANNEL_TEXT_AREA, {
  channelId: l.id
});
  }, [
l.id,
r,
s,
c
  ]), m = (null !== (t = null === (n = r.options) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0) > 0, _ = a.useMemo(() => (0, S.ae)(r.displayDescription, void 0), [r.displayDescription]), f = a.useMemo(() => (0, i.jsxs)('div', {
className: j.commandTextContainer,
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
    children: _
  })
]
  }), [
r.displayName,
_
  ]);
  return (0, i.jsxs)(u.Clickable, {
className: j.command,
onClick: d,
children: [
  (0, i.jsx)(u.FocusBlock, {
    className: j.commandFocusBlock,
    children: f
  }),
  m ? (0, i.jsx)(o.F, {}) : (0, i.jsx)(B, {
    channel: l,
    command: r,
    sectionName: c
  })
]
  });
}

function U() {
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
  className: j.commandTextContainerPlaceholder,
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
className: r()(j.command, y.loadingAnimation, {
  [y.noAnimation]: e
}),
children: l
  });
}

function B(e) {
  let {
channel: n,
command: t,
sectionName: l
  } = e, r = (0, _.PL)(!0, !0), o = (0, _.LD)(n.guild_id, !0), c = (0, I.D)(n), [d, m] = a.useState(!1), p = a.useCallback(async e => {
e.stopPropagation();
let n = v.Z.lastShownEntrypoint();
try {
  await (0, h.L)({
    applicationId: t.applicationId,
    userIndexState: r,
    guildIndexState: o,
    sectionName: l,
    location: C.Vh.APP_LAUNCHER_APPLICATION_VIEW,
    source: n
  }) && (await (0, L.Y$)({
    command: t,
    optionValues: {},
    context: c,
    sectionName: l
  }), N.y(x.ti.COMMAND));
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
className: j.commandSentCTAButton,
innerClassName: j.commandSentCTAButtonInner,
'aria-label': M.Z.Messages.APP_LAUNCHER_SEND_COMMAND_ARIA_LABEL.format({
  commandName: t.name
}),
children: [
  (0, i.jsx)(u.Text, {
    variant: 'text-sm/medium',
    color: 'currentColor',
    children: M.Z.Messages.SEND
  }),
  (0, i.jsx)(s.U, {
    size: 'xs',
    color: 'currentColor'
  })
]
  });
}

function k(e) {
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
    className: j.commandListHeader,
    children: [
      (0, i.jsx)(u.Heading, {
        variant: 'heading-sm/semibold',
        children: l
      }),
      o
    ]
  }),
  (0, i.jsx)('ul', {
    className: j.commandContainer,
    'aria-label': l,
    children: t.map((e, t) => e === O ? (0, i.jsx)(U, {}, e + t) : (0, i.jsx)(H, {
      channel: n,
      command: e,
      section: a,
      sectionName: r
    }, e.id))
  })
]
  });
}

function D(e) {
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
installOnDemand: o,
applicationId: l.id
  }), p = null !== (n = u.find(e => e.id === l.id)) && void 0 !== n ? n : null, {
sortOrder: _,
setSortOrder: C,
commands: h,
canSort: A
  } = (0, P.Z)({
sectionId: l.id,
commandsByActiveSection: c
  });
  a.useEffect(() => {
s(l.id);
  }, [
l.id,
s
  ]);
  let E = (0, g.Z)({
channel: t,
commands: h,
limit: 5
  });
  return (0, i.jsxs)('ul', {
className: j.contentContainer,
children: [
  (0, i.jsx)(k, {
    channel: t,
    section: p,
    commands: E,
    headerName: M.Z.Messages.APP_LAUNCHER_HOME_RECENT_COMMANDS_HEADER,
    sectionName: r
  }),
  (0, i.jsx)(k, {
    channel: t,
    section: p,
    commands: m.current ? Z : h,
    headerName: M.Z.Messages.APP_LAUNCHER_USE_THIS_APP_HEADER,
    sectionName: r,
    children: A && (0, i.jsx)(T.Z, {
      sortOrder: _,
      onSortOptionClick: C
    })
  })
]
  });
}