i.d(n, {
  Z: function() {
return g;
  }
}), i(47120);
var s = i(735250),
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
  h = i(228168),
  S = i(47460);

function p(e) {
  let {
section: n,
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
  return n === h.oh.ACTIVITY && d ? (0, s.jsx)(v.Z, {
user: l,
currentUser: t,
onClose: a
  }) : n === h.oh.ACTIVITY ? (0, s.jsx)(I.Z, {
showActions: (null == t ? void 0 : t.id) !== l.id,
user: l,
type: r.Y.SIMPLIFIED_PROFILE,
onClose: a
  }) : n === h.oh.MUTUAL_FRIENDS ? (0, s.jsx)(_.Z, {
user: l,
onClose: a
  }) : n === h.oh.MUTUAL_GUILDS ? (0, s.jsx)(f.Z, {
user: l,
onClose: a
  }) : n === h.oh.BOT_DATA_ACCESS ? (0, s.jsx)(E.Z, {
user: l
  }) : n === h.oh.BOT_INFO ? (0, s.jsx)(x.Z, {
user: l,
currentUser: t,
displayProfile: o,
subsection: i,
onClose: a
  }) : (0, s.jsx)(Z.Z, {
user: l,
currentUser: t,
displayProfile: o,
subsection: i,
onClose: a
  });
}

function g(e) {
  var n, i, r;
  let {
user: u,
currentUser: I,
displayProfile: _,
items: f,
initialSection: E = h.oh.USER_INFO,
initialSubsection: x,
onClose: v
  } = e, {
trackUserProfileAction: Z
  } = (0, c.KZ)(), g = (0, t.e7)([d.Z], () => d.Z.hidePersonalInformation), [{
section: j,
subsection: T
  }, N] = l.useState({
section: null !== (r = null === (n = f.find(e => {
  let {
    section: n
  } = e;
  return n === E;
})) || void 0 === n ? void 0 : n.section) && void 0 !== r ? r : null === (i = f[0]) || void 0 === i ? void 0 : i.section,
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
  return g ? (0, s.jsx)('div', {
className: S.container,
children: (0, s.jsx)(m.Z, {})
  }) : (0, s.jsxs)('div', {
className: S.container,
children: [
  (0, s.jsx)(o.n, {
    className: S.tabBar,
    type: 'top',
    selectedItem: j,
    onItemSelect: C,
    children: f.map(e => {
      let {
        section: n,
        text: i
      } = e;
      return (0, s.jsx)(o.n.Item, {
        className: S.tabBarItem,
        id: n,
        'aria-label': i,
        children: (0, s.jsx)(a.Text, {
          variant: 'text-sm/normal',
          children: i
        })
      }, n);
    })
  }),
  (0, s.jsx)(p, {
    items: f,
    section: j,
    subsection: T,
    user: u,
    currentUser: I,
    displayProfile: _,
    onClose: v
  })
]
  });
}