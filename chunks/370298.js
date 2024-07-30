t.d(n, {
  Z: function() {
return T;
  }
}), t(47120);
var i = t(735250),
  o = t(470079),
  l = t(120356),
  a = t.n(l),
  s = t(892814),
  r = t(442837),
  u = t(481060),
  d = t(688465),
  c = t(978983),
  m = t(592125),
  h = t(626135),
  I = t(768581),
  E = t(823379),
  p = t(399654),
  x = t(844439),
  C = t(957552),
  M = t(981631),
  g = t(689938),
  f = t(89311),
  N = t(206227);

function T(e) {
  let {
toggleShowMenu: n,
showMenu: t,
className: o,
channelId: l
  } = e;
  return (0, i.jsx)(u.Popout, {
renderPopout: e => {
  let {
    closePopout: n
  } = e;
  return (0, i.jsx)(j, {
    onClose: n,
    channelId: l
  });
},
position: 'right',
align: 'top',
animation: u.Popout.Animation.NONE,
onRequestClose: n,
shouldShow: t,
children: e => {
  let {
    onClick: t
  } = e;
  return (0, i.jsx)(u.Tooltip, {
    text: g.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
    children: e => (0, i.jsx)(u.Clickable, {
      ...e,
      className: o,
      focusProps: {
        offset: 2
      },
      onClick: n,
      'aria-label': g.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
      children: (0, i.jsx)(u.AppsIcon, {
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

function j(e) {
  let {
onSelect: n,
onClose: t,
channelId: l
  } = e, {
fetchState: a,
recommendationsSections: C
  } = function(e) {
let {
  channelId: n
} = e, t = s.I.CONTEXTUAL_IMAGE, i = o.useMemo(() => ({
  channelId: n,
  location: t,
  withCommands: !0
}), [
  n,
  t
]);
o.useEffect(() => {
  (0, p.a)(i);
}, [i]);
let {
  fetchState: l,
  recommendationsSections: a
} = (0, r.cj)([x.ZP], () => ({
  fetchState: x.ZP.getFetchState(i),
  recommendationsSections: x.ZP.getRecommendations(i)
}));
return {
  fetchState: l,
  recommendationsSections: a
};
  }({
channelId: l
  }), N = m.Z.getChannel(l), T = a === x.M.FETCHING, j = o.useMemo(() => {
let e = C.length > 0 ? C[0].items : void 0;
return void 0 === e ? [] : e.map(e => {
  var n, t;
  let {
    application: i,
    commands: o
  } = e;
  if (void 0 === o || 0 === o.length)
    return null;
  let l = o[0],
    a = I.ZP.getApplicationIconURL({
      id: i.id,
      icon: i.icon
    });
  return {
    application: i,
    id: l.id,
    name: null !== (n = l.name_localized) && void 0 !== n ? n : l.name,
    description: null !== (t = l.description_localized) && void 0 !== t ? t : l.description,
    icon: a
  };
}).filter(E.lm);
  }, [C]);
  return o.useEffect(() => {
var e, n;
if (!T && 0 !== j.length)
  h.default.track(M.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
    guild_id: null !== (e = null == N ? void 0 : N.guild_id) && void 0 !== e ? e : '',
    channel_id: null !== (n = null == N ? void 0 : N.id) && void 0 !== n ? n : '',
    application_ids: [...j.map(e => Number(e.application.id))],
    command_ids: [...j.map(e => Number(e.id))]
  });
  }, [
j,
N,
T
  ]), (0, i.jsxs)(u.Menu, {
onSelect: n,
navId: 'image-context-commands-popout',
onClose: t,
'aria-label': g.Z.Messages.APP_IMAGE_REC_MENU_ARIA_LABEL,
children: [
  (0, i.jsx)(u.MenuItem, {
    id: 'menu-image-rec-header',
    render: () => (0, i.jsxs)('div', {
      className: f.flexRow,
      children: [
        (0, i.jsx)(u.Text, {
          className: f.title,
          variant: 'text-md/bold',
          color: 'header-primary',
          children: g.Z.Messages.APP_IMAGE_REC_MENU_HEADER
        }),
        (0, i.jsx)(d.Z, {})
      ]
    }),
    navigable: !1,
    disabled: !0
  }, 'menu-image-rec-header'),
  (0, i.jsx)(u.MenuSeparator, {}),
  T ? (0, i.jsx)(u.MenuItem, {
    id: 'menu-image-recs-placeholder',
    render: () => (0, i.jsx)(c.Z, {}),
    navigable: !1,
    disabled: !0
  }, 'menu-image-recs-placeholder') : (0, i.jsx)(i.Fragment, {
    children: j.map(e => (0, i.jsx)(u.MenuItem, {
      id: e.id,
      action: () => {},
      render: n => (0, i.jsx)(_, {
        command: e,
        isFocused: n.isFocused
      })
    }, e.id))
  })
]
  });
}

function _(e) {
  let {
command: n,
isFocused: t
  } = e;
  return (0, i.jsxs)('div', {
className: a()(N.item, N.labelContainer, N.colorDefault, {
  [N.focused]: t
}),
'data-menu-item': 'true',
children: [
  (0, i.jsx)('div', {
    className: a()(N.iconContainerLeft, f.appIcon),
    children: (0, i.jsx)(C.Z, {
      application: n.application,
      className: f.appIcon
    })
  }),
  (0, i.jsxs)('div', {
    className: a()(N.label),
    children: [
      (0, i.jsx)('div', {
        className: a()(f.name, {
          [f.focused]: t
        }),
        children: n.name
      }),
      (0, i.jsx)('div', {
        className: a()(f.description, N.subtext),
        children: n.description
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: a()(N.iconContainer, f.icon),
    children: (0, i.jsx)(u.SendMessageIcon, {})
  })
]
  }, n.id);
}