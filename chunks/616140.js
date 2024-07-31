i.d(n, {
  Z: function() {
return j;
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
  u = i(304704),
  I = i(27144),
  _ = i(100849),
  f = i(944546),
  m = i(470900),
  E = i(988246),
  x = i(970041),
  v = i(715388),
  Z = i(879828),
  h = i(834534),
  S = i(228168),
  p = i(47460);

function g(e) {
  let {
section: n,
subsection: i,
user: l,
currentUser: t,
displayProfile: o,
onClose: a
  } = e, {
newActivityCardsEnabled: d
  } = (0, u.Z)({
location: 'SimplifiedUserProfileModalTabs'
  }), {
pastActivityEnabled: c
  } = (0, I.z)({
location: 'SimplifiedUserProfileModalTabs'
  });
  return n === S.oh.ACTIVITY && (d || c) ? (0, s.jsx)(Z.Z, {
user: l,
currentUser: t,
onClose: a
  }) : n === S.oh.ACTIVITY ? (0, s.jsx)(_.Z, {
showActions: (null == t ? void 0 : t.id) !== l.id,
user: l,
type: r.Y.SIMPLIFIED_PROFILE,
onClose: a
  }) : n === S.oh.MUTUAL_FRIENDS ? (0, s.jsx)(f.Z, {
user: l,
onClose: a
  }) : n === S.oh.MUTUAL_GUILDS ? (0, s.jsx)(m.Z, {
user: l,
onClose: a
  }) : n === S.oh.BOT_DATA_ACCESS ? (0, s.jsx)(x.Z, {
user: l
  }) : n === S.oh.BOT_INFO ? (0, s.jsx)(v.Z, {
user: l,
currentUser: t,
displayProfile: o,
subsection: i,
onClose: a
  }) : (0, s.jsx)(h.Z, {
user: l,
currentUser: t,
displayProfile: o,
subsection: i,
onClose: a
  });
}

function j(e) {
  var n, i, r;
  let {
user: u,
currentUser: I,
displayProfile: _,
items: f,
initialSection: m = S.oh.USER_INFO,
initialSubsection: x,
onClose: v
  } = e, {
trackUserProfileAction: Z
  } = (0, c.KZ)(), h = (0, t.e7)([d.Z], () => d.Z.hidePersonalInformation), [{
section: j,
subsection: T
  }, N] = l.useState({
section: null !== (r = null === (n = f.find(e => {
  let {
    section: n
  } = e;
  return n === m;
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
  return h ? (0, s.jsx)('div', {
className: p.container,
children: (0, s.jsx)(E.Z, {})
  }) : (0, s.jsxs)('div', {
className: p.container,
children: [
  (0, s.jsx)(o.n, {
    className: p.tabBar,
    type: 'top',
    selectedItem: j,
    onItemSelect: C,
    children: f.map(e => {
      let {
        section: n,
        text: i
      } = e;
      return (0, s.jsx)(o.n.Item, {
        className: p.tabBarItem,
        id: n,
        'aria-label': i,
        children: (0, s.jsx)(a.Text, {
          variant: 'text-sm/normal',
          children: i
        })
      }, n);
    })
  }),
  (0, s.jsx)(g, {
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