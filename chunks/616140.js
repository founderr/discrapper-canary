i.d(s, {
  Z: function() {
return j;
  }
}), i(47120);
var n = i(735250),
  l = i(470079),
  t = i(442837),
  o = i(706898),
  a = i(481060),
  r = i(387903),
  d = i(246946),
  c = i(785717),
  u = i(27144),
  I = i(100849),
  _ = i(944546),
  f = i(470900),
  m = i(988246),
  E = i(970041),
  x = i(715388),
  v = i(879828),
  Z = i(834534),
  S = i(228168),
  h = i(455749);

function p(e) {
  let {
section: s,
subsection: i,
user: l,
currentUser: t,
displayProfile: o,
onClose: a
  } = e, {
pastActivityEnabled: d
  } = (0, u.z)({
location: 'SimplifiedUserProfileModalTabs'
  });
  return s === S.oh.ACTIVITY && d ? (0, n.jsx)(v.Z, {
user: l,
onClose: a
  }) : s === S.oh.ACTIVITY ? (0, n.jsx)(I.Z, {
showActions: (null == t ? void 0 : t.id) !== l.id,
user: l,
type: r.Y.SIMPLIFIED_PROFILE,
onClose: a
  }) : s === S.oh.MUTUAL_FRIENDS ? (0, n.jsx)(_.Z, {
user: l,
onClose: a
  }) : s === S.oh.MUTUAL_GUILDS ? (0, n.jsx)(f.Z, {
user: l,
onClose: a
  }) : s === S.oh.BOT_DATA_ACCESS ? (0, n.jsx)(E.Z, {
user: l
  }) : s === S.oh.BOT_INFO ? (0, n.jsx)(x.Z, {
user: l,
currentUser: t,
displayProfile: o,
subsection: i,
onClose: a
  }) : (0, n.jsx)(Z.Z, {
user: l,
currentUser: t,
displayProfile: o,
subsection: i,
onClose: a
  });
}

function j(e) {
  var s, i, r;
  let {
user: u,
currentUser: I,
displayProfile: _,
items: f,
initialSection: E = S.oh.USER_INFO,
initialSubsection: x,
onClose: v
  } = e, {
trackUserProfileAction: Z
  } = (0, c.KZ)(), j = (0, t.e7)([d.Z], () => d.Z.hidePersonalInformation), [{
section: T,
subsection: g
  }, N] = l.useState({
section: null !== (r = null === (s = f.find(e => {
  let {
    section: s
  } = e;
  return s === E;
})) || void 0 === s ? void 0 : s.section) && void 0 !== r ? r : null === (i = f[0]) || void 0 === i ? void 0 : i.section,
subsection: x
  }), C = l.useCallback(e => {
Z({
  action: 'PRESS_SECTION',
  section: e
}), N({
  section: e,
  subsection: void 0
});
  }, [
Z,
N
  ]);
  return j ? (0, n.jsx)('div', {
className: h.container,
children: (0, n.jsx)(m.Z, {})
  }) : (0, n.jsxs)('div', {
className: h.container,
children: [
  (0, n.jsx)(o.n, {
    className: h.tabBar,
    type: 'top',
    selectedItem: T,
    onItemSelect: C,
    children: f.map(e => {
      let {
        section: s,
        text: i
      } = e;
      return (0, n.jsx)(o.n.Item, {
        className: h.tabBarItem,
        id: s,
        'aria-label': i,
        children: (0, n.jsx)(a.Text, {
          variant: 'text-sm/normal',
          children: i
        })
      }, s);
    })
  }),
  (0, n.jsx)(p, {
    items: f,
    section: T,
    subsection: g,
    user: u,
    currentUser: I,
    displayProfile: _,
    onClose: v
  })
]
  });
}