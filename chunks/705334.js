n.d(t, {
  _: function() {
return I;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(143927),
  o = n(481060),
  c = n(836768),
  d = n(766219),
  u = n(49898),
  _ = n(689938),
  E = n(876425);

function h(e) {
  let {
tab: t
  } = e, n = (0, c.d)(e => e.selectedPage === t, l.Z), a = s.useMemo(() => function(e) {
switch (e) {
  case u.F$.SERVERS:
    return (0, i.jsx)(o.ServerIcon, {
      color: 'currentColor'
    });
  case u.F$.QUESTS:
    return (0, i.jsx)(o.QuestsIcon, {
      color: 'currentColor'
    });
}
  }(t), [t]), _ = s.useMemo(() => (0, d.sm)(t), [t]), h = s.useCallback(() => {
c.d.setState({
  selectedPage: t
});
  }, [t]);
  return (0, i.jsxs)(o.Clickable, {
onClick: h,
className: r()(E.navItem, {
  [E.selectedNavItem]: n
}),
children: [
  (0, i.jsx)('div', {
    className: E.navItemIcon,
    children: a
  }),
  (0, i.jsx)(o.Text, {
    variant: 'text-md/normal',
    color: 'none',
    children: _
  })
]
  });
}

function I() {
  return (0, i.jsxs)('div', {
className: E.container,
children: [
  (0, i.jsx)('div', {
    className: E.header,
    children: (0, i.jsx)(o.Heading, {
      variant: 'text-lg/semibold',
      children: _.Z.Messages.GLOBAL_DISCOVERY_TITLE
    })
  }),
  (0, i.jsx)('nav', {
    className: E.nav,
    children: u.mc.map(e => (0, i.jsx)(h, {
      tab: e
    }, e))
  })
]
  });
}