n.d(i, {
  Z: function() {
return j;
  }
}), n(47120);
var s = n(735250),
  l = n(470079),
  t = n(442837),
  o = n(706898),
  a = n(481060),
  r = n(387903),
  d = n(246946),
  c = n(785717),
  u = n(304704),
  I = n(27144),
  _ = n(100849),
  f = n(944546),
  m = n(470900),
  E = n(988246),
  x = n(970041),
  v = n(715388),
  Z = n(879828),
  h = n(834534),
  S = n(228168),
  p = n(47460);

function g(e) {
  let {
section: i,
subsection: n,
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
  return i === S.oh.ACTIVITY && (d || c) ? (0, s.jsx)(Z.Z, {
user: l,
currentUser: t,
onClose: a
  }) : i === S.oh.ACTIVITY ? (0, s.jsx)(_.Z, {
showActions: (null == t ? void 0 : t.id) !== l.id,
user: l,
type: r.Y.SIMPLIFIED_PROFILE,
onClose: a
  }) : i === S.oh.MUTUAL_FRIENDS ? (0, s.jsx)(f.Z, {
user: l,
onClose: a
  }) : i === S.oh.MUTUAL_GUILDS ? (0, s.jsx)(m.Z, {
user: l,
onClose: a
  }) : i === S.oh.BOT_DATA_ACCESS ? (0, s.jsx)(x.Z, {
user: l
  }) : i === S.oh.BOT_INFO ? (0, s.jsx)(v.Z, {
user: l,
currentUser: t,
displayProfile: o,
subsection: n,
onClose: a
  }) : (0, s.jsx)(h.Z, {
user: l,
currentUser: t,
displayProfile: o,
subsection: n,
onClose: a
  });
}

function j(e) {
  var i, n, r;
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
section: null !== (r = null === (i = f.find(e => {
  let {
    section: i
  } = e;
  return i === m;
})) || void 0 === i ? void 0 : i.section) && void 0 !== r ? r : null === (n = f[0]) || void 0 === n ? void 0 : n.section,
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
        section: i,
        text: n
      } = e;
      return (0, s.jsx)(o.n.Item, {
        className: p.tabBarItem,
        id: i,
        'aria-label': n,
        children: (0, s.jsx)(a.Text, {
          variant: 'text-sm/normal',
          children: n
        })
      }, i);
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