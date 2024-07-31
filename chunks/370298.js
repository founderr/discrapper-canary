t.d(n, {
  Z: function() {
return O;
  }
}), t(47120);
var i = t(735250),
  l = t(470079),
  o = t(120356),
  a = t.n(o),
  s = t(892814),
  r = t(442837),
  d = t(481060),
  u = t(213459),
  c = t(581364),
  m = t(667204),
  h = t(147391),
  I = t(688465),
  E = t(978983),
  p = t(592125),
  C = t(430824),
  x = t(626135),
  M = t(823379),
  g = t(399654),
  f = t(844439),
  N = t(957552),
  T = t(981631),
  v = t(689938),
  _ = t(89311),
  A = t(206227);
let j = ['1057451930521194617'];

function O(e) {
  let {
toggleShowMenu: n,
showMenu: t,
className: l,
channelId: o,
commandTargetId: a
  } = e, s = (0, r.e7)([p.Z], () => p.Z.getChannel(o));
  return null == s ? null : (0, i.jsx)(d.Popout, {
renderPopout: e => {
  let {
    closePopout: n
  } = e;
  return (0, i.jsx)(P, {
    onClose: n,
    channel: s,
    commandTargetId: a
  });
},
position: 'right',
align: 'top',
animation: d.Popout.Animation.NONE,
onRequestClose: n,
shouldShow: t,
children: e => {
  let {
    onClick: t
  } = e;
  return (0, i.jsx)(d.Tooltip, {
    text: v.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
    children: e => (0, i.jsx)(d.Clickable, {
      ...e,
      className: l,
      focusProps: {
        offset: 2
      },
      onClick: n,
      'aria-label': v.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
      children: (0, i.jsx)(d.AppsIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 20,
        height: 20
      })
    })
  });
}
  });
}

function P(e) {
  let {
onSelect: n,
onClose: t,
channel: o,
commandTargetId: a
  } = e, p = (0, r.e7)([C.Z], () => C.Z.getGuild(o.guild_id)), {
fetchState: N,
recommendationsSections: A
  } = function(e) {
let {
  channelId: n
} = e, t = s.I.CONTEXTUAL_IMAGE, i = l.useMemo(() => ({
  channelId: n,
  location: t,
  withCommands: !0
}), [
  n,
  t
]);
l.useEffect(() => {
  (0, g.a)(i);
}, [i]);
let {
  fetchState: o,
  recommendationsSections: a
} = (0, r.cj)([f.ZP], () => ({
  fetchState: f.ZP.getFetchState(i),
  recommendationsSections: f.ZP.getRecommendations(i)
}));
return {
  fetchState: o,
  recommendationsSections: a
};
  }({
channelId: o.id
  }), O = (0, u.PL)(!0, !0), P = (0, u.LD)(o.guild_id, !0), S = N === f.M.FETCHING, w = l.useMemo(() => {
let e = A.length > 0 ? A[0].items : void 0;
return void 0 === e ? [] : e.map(e => {
  let {
    application: n,
    commands: t
  } = e, i = null == t ? void 0 : t.find(e => j.includes(e.id));
  return null != i ? {
    command: (0, c.Z8)({
      rootCommand: i,
      command: i,
      applicationId: n.id
    }),
    application: n
  } : null;
}).filter(M.lm);
  }, [A]);
  l.useEffect(() => {
var e, n;
if (!S && 0 !== w.length)
  x.default.track(T.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
    guild_id: null !== (e = null == o ? void 0 : o.guild_id) && void 0 !== e ? e : '',
    channel_id: null !== (n = null == o ? void 0 : o.id) && void 0 !== n ? n : '',
    application_ids: [...w.map(e => Number(e.application.id))],
    command_ids: [...w.map(e => Number(e.command.id))]
  });
  }, [
w,
o,
S
  ]);
  let R = l.useCallback(async e => {
var n, t;
let i = e.applicationId,
  l = (null === (n = O.result) || void 0 === n ? void 0 : n.sections[i]) != null,
  s = (null === (t = P.result) || void 0 === t ? void 0 : t.sections[i]) != null;
l || s || u.ZP.queryInstallOnDemandApp(e.applicationId, o.id), await (0, h.L)({
  applicationId: i,
  userIndexState: O,
  guildIndexState: P
}) && await (0, m.Z)({
  command: e,
  optionValues: {},
  context: {
    channel: o,
    guild: p
  },
  commandTargetId: a
});
  }, [
o,
p,
a,
O,
P
  ]);
  return (0, i.jsxs)(d.Menu, {
onSelect: n,
navId: 'image-context-commands-popout',
onClose: t,
'aria-label': v.Z.Messages.APP_IMAGE_REC_MENU_ARIA_LABEL,
children: [
  (0, i.jsx)(d.MenuItem, {
    id: 'menu-image-rec-header',
    render: () => (0, i.jsxs)('div', {
      className: _.flexRow,
      children: [
        (0, i.jsx)(d.Text, {
          className: _.title,
          variant: 'text-md/bold',
          color: 'header-primary',
          children: v.Z.Messages.APP_IMAGE_REC_MENU_HEADER
        }),
        (0, i.jsx)(I.Z, {})
      ]
    }),
    navigable: !1,
    disabled: !0
  }, 'menu-image-rec-header'),
  (0, i.jsx)(d.MenuSeparator, {}),
  S ? (0, i.jsx)(d.MenuItem, {
    id: 'menu-image-recs-placeholder',
    render: () => (0, i.jsx)(E.Z, {}),
    navigable: !1,
    disabled: !0
  }, 'menu-image-recs-placeholder') : (0, i.jsx)(i.Fragment, {
    children: w.map(e => (0, i.jsx)(d.MenuItem, {
      id: e.command.id,
      action: () => R(e.command),
      render: n => (0, i.jsx)(y, {
        ...e,
        isFocused: n.isFocused
      })
    }, e.command.id))
  })
]
  });
}

function y(e) {
  let {
command: n,
application: t,
isFocused: l
  } = e;
  return (0, i.jsxs)('div', {
className: a()(A.item, A.labelContainer, A.colorDefault, {
  [A.focused]: l
}),
children: [
  (0, i.jsx)('div', {
    className: a()(A.iconContainerLeft, _.appIcon),
    children: (0, i.jsx)(N.Z, {
      application: t,
      className: _.appIcon
    })
  }),
  (0, i.jsxs)('div', {
    className: A.label,
    children: [
      (0, i.jsx)('div', {
        className: a()(_.name, {
          [_.focused]: l
        }),
        children: n.name
      }),
      (0, i.jsx)('div', {
        className: a()(_.description, A.subtext),
        children: n.description
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: a()(A.iconContainer, _.icon),
    children: (0, i.jsx)(d.SendMessageIcon, {})
  })
]
  }, n.id);
}