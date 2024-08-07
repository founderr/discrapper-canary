i.d(s, {
  Z: function() {
return T;
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
  E = i(988246),
  m = i(970041),
  v = i(715388),
  S = i(879828),
  x = i(834534),
  Z = i(228168),
  p = i(47460);

function h(e) {
  let {
section: s,
subsection: i,
user: l,
currentUser: t,
displayProfile: o,
onClose: a
  } = e, {
newActivityCardsEnabled: d
  } = (0, u.z)({
location: 'SimplifiedUserProfileModalTabs'
  });
  return s === Z.oh.ACTIVITY && d ? (0, n.jsx)(S.Z, {
user: l,
currentUser: t,
onClose: a
  }) : s === Z.oh.ACTIVITY ? (0, n.jsx)(I.Z, {
showActions: (null == t ? void 0 : t.id) !== l.id,
user: l,
type: r.Y.SIMPLIFIED_PROFILE,
onClose: a
  }) : s === Z.oh.MUTUAL_FRIENDS ? (0, n.jsx)(_.Z, {
user: l,
onClose: a
  }) : s === Z.oh.MUTUAL_GUILDS ? (0, n.jsx)(f.Z, {
user: l,
onClose: a
  }) : s === Z.oh.BOT_DATA_ACCESS ? (0, n.jsx)(m.Z, {
user: l
  }) : s === Z.oh.BOT_INFO ? (0, n.jsx)(v.Z, {
user: l,
currentUser: t,
displayProfile: o,
subsection: i,
onClose: a
  }) : (0, n.jsx)(x.Z, {
user: l,
currentUser: t,
displayProfile: o,
subsection: i,
onClose: a
  });
}

function T(e) {
  var s, i, r;
  let {
user: u,
currentUser: I,
displayProfile: _,
items: f,
initialSection: m = Z.oh.USER_INFO,
initialSubsection: v,
onClose: S
  } = e, {
trackUserProfileAction: x
  } = (0, c.KZ)(), T = (0, t.e7)([d.Z], () => d.Z.hidePersonalInformation), [{
section: g,
subsection: N
  }, j] = l.useState({
section: null !== (r = null === (s = f.find(e => {
  let {
    section: s
  } = e;
  return s === m;
})) || void 0 === s ? void 0 : s.section) && void 0 !== r ? r : null === (i = f[0]) || void 0 === i ? void 0 : i.section,
subsection: v
  });
  l.useEffect(() => {
if (null == f.find(e => e.section === g))
  j({
    section: f[0].section,
    subsection: void 0
  });
  }, [
f,
g
  ]);
  let C = l.useCallback(e => {
x({
  action: 'PRESS_SECTION',
  section: e
}), j({
  section: e,
  subsection: void 0
});
  }, [
x,
j
  ]);
  return T ? (0, n.jsx)('div', {
className: p.container,
children: (0, n.jsx)(E.Z, {})
  }) : (0, n.jsxs)('div', {
className: p.container,
children: [
  (0, n.jsx)(o.n, {
    className: p.tabBar,
    type: 'top',
    selectedItem: g,
    onItemSelect: C,
    children: f.map(e => {
      let {
        section: s,
        text: i
      } = e;
      return (0, n.jsx)(o.n.Item, {
        className: p.tabBarItem,
        id: s,
        'aria-label': i,
        children: (0, n.jsx)(a.Text, {
          variant: 'text-sm/normal',
          children: i
        })
      }, s);
    })
  }),
  (0, n.jsx)(h, {
    items: f,
    section: g,
    subsection: N,
    user: u,
    currentUser: I,
    displayProfile: _,
    onClose: S
  })
]
  });
}