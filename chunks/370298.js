t.d(n, {
  Z: function() {
return g;
  }
});
var i = t(735250),
  o = t(470079),
  a = t(120356),
  l = t.n(a),
  s = t(892814),
  r = t(442837),
  u = t(481060),
  c = t(688465),
  d = t(978983),
  m = t(768581),
  h = t(823379),
  I = t(399654),
  E = t(844439),
  p = t(957552),
  x = t(689938),
  C = t(89311),
  M = t(206227);

function g(e) {
  let {
toggleShowMenu: n,
showMenu: t,
className: o,
channelId: a
  } = e;
  return (0, i.jsx)(u.Popout, {
renderPopout: e => {
  let {
    closePopout: n
  } = e;
  return (0, i.jsx)(f, {
    onClose: n,
    channelId: a
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
    text: x.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
    children: e => (0, i.jsx)(u.Clickable, {
      ...e,
      className: o,
      focusProps: {
        offset: 2
      },
      onClick: n,
      'aria-label': x.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
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

function f(e) {
  let {
onSelect: n,
onClose: t,
channelId: a
  } = e, {
fetchState: l,
recommendationsSections: p
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
  (0, I.a)(i);
}, [i]);
let {
  fetchState: a,
  recommendationsSections: l
} = (0, r.cj)([E.ZP], () => ({
  fetchState: E.ZP.getFetchState(i),
  recommendationsSections: E.ZP.getRecommendations(i)
}));
return {
  fetchState: a,
  recommendationsSections: l
};
  }({
channelId: a
  }), M = l === E.M.FETCHING, g = o.useMemo(() => {
let e = p.length > 0 ? p[0].items : void 0;
return void 0 === e ? [] : e.map(e => {
  var n, t;
  let {
    application: i,
    commands: o
  } = e;
  if (void 0 === o || 0 === o.length)
    return null;
  let a = o[0],
    l = m.ZP.getApplicationIconURL({
      id: i.id,
      icon: i.icon
    });
  return {
    application: i,
    id: a.id,
    name: null !== (n = a.name_localized) && void 0 !== n ? n : a.name,
    description: null !== (t = a.description_localized) && void 0 !== t ? t : a.description,
    icon: l
  };
}).filter(h.lm);
  }, [p]);
  return (0, i.jsxs)(u.Menu, {
onSelect: n,
navId: 'image-context-commands-popout',
onClose: t,
'aria-label': x.Z.Messages.APP_IMAGE_REC_MENU_ARIA_LABEL,
children: [
  (0, i.jsx)(u.MenuItem, {
    id: 'menu-image-rec-header',
    render: () => (0, i.jsxs)('div', {
      className: C.flexRow,
      children: [
        (0, i.jsx)(u.Text, {
          className: C.title,
          variant: 'text-md/bold',
          color: 'header-primary',
          children: x.Z.Messages.APP_IMAGE_REC_MENU_HEADER
        }),
        (0, i.jsx)(c.Z, {})
      ]
    }),
    navigable: !1,
    disabled: !0
  }, 'menu-image-rec-header'),
  (0, i.jsx)(u.MenuSeparator, {}),
  M ? (0, i.jsx)(u.MenuItem, {
    id: 'menu-image-recs-placeholder',
    render: () => (0, i.jsx)(d.Z, {}),
    navigable: !1,
    disabled: !0
  }, 'menu-image-recs-placeholder') : (0, i.jsx)(i.Fragment, {
    children: g.map(e => (0, i.jsx)(u.MenuItem, {
      id: e.id,
      action: () => {},
      render: n => (0, i.jsx)(N, {
        command: e,
        isFocused: n.isFocused
      })
    }, e.id))
  })
]
  });
}

function N(e) {
  let {
command: n,
isFocused: t
  } = e;
  return (0, i.jsxs)('div', {
className: l()(M.item, M.labelContainer, M.colorDefault, {
  [M.focused]: t
}),
'data-menu-item': 'true',
children: [
  (0, i.jsx)('div', {
    className: l()(M.iconContainerLeft, C.appIcon),
    children: (0, i.jsx)(p.Z, {
      application: n.application,
      className: C.appIcon
    })
  }),
  (0, i.jsxs)('div', {
    className: l()(M.label),
    children: [
      (0, i.jsx)('div', {
        className: l()(C.name, {
          [C.focused]: t
        }),
        children: n.name
      }),
      (0, i.jsx)('div', {
        className: l()(C.description, M.subtext),
        children: n.description
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: l()(M.iconContainer, C.icon),
    children: (0, i.jsx)(u.SendMessageIcon, {})
  })
]
  }, n.id);
}