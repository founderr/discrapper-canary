n.d(s, {
  Z: function() {
return T;
  }
}), n(47120);
var i = n(735250),
  l = n(470079),
  t = n(442837),
  o = n(706898),
  r = n(481060),
  a = n(387903),
  d = n(246946),
  c = n(785717),
  u = n(27144),
  _ = n(100849),
  I = n(944546),
  f = n(470900),
  E = n(988246),
  m = n(970041),
  x = n(715388),
  S = n(879828),
  v = n(834534),
  Z = n(228168),
  p = n(47460);

function h(e) {
  let {
section: s,
subsection: n,
user: l,
currentUser: t,
displayProfile: o,
onClose: r
  } = e, {
newActivityCardsEnabled: d
  } = (0, u.z)({
location: 'SimplifiedUserProfileModalTabs'
  });
  return s === Z.oh.ACTIVITY && d ? (0, i.jsx)(S.Z, {
user: l,
currentUser: t,
onClose: r
  }) : s === Z.oh.ACTIVITY ? (0, i.jsx)(_.Z, {
showActions: (null == t ? void 0 : t.id) !== l.id,
user: l,
type: a.Y.SIMPLIFIED_PROFILE,
onClose: r
  }) : s === Z.oh.MUTUAL_FRIENDS ? (0, i.jsx)(I.Z, {
user: l,
onClose: r
  }) : s === Z.oh.MUTUAL_GUILDS ? (0, i.jsx)(f.Z, {
user: l,
onClose: r
  }) : s === Z.oh.BOT_DATA_ACCESS ? (0, i.jsx)(m.Z, {
user: l
  }) : s === Z.oh.BOT_INFO ? (0, i.jsx)(x.Z, {
user: l,
currentUser: t,
displayProfile: o,
subsection: n,
onClose: r
  }) : (0, i.jsx)(v.Z, {
user: l,
currentUser: t,
displayProfile: o,
subsection: n,
onClose: r
  });
}

function T(e) {
  var s, n, a;
  let {
user: u,
currentUser: _,
displayProfile: I,
items: f,
initialSection: m = Z.oh.USER_INFO,
initialSubsection: x,
onClose: S
  } = e, {
trackUserProfileAction: v
  } = (0, c.KZ)(), T = (0, t.e7)([d.Z], () => d.Z.hidePersonalInformation), [{
section: g,
subsection: N
  }, j] = l.useState({
section: null !== (a = null === (s = f.find(e => {
  let {
    section: s
  } = e;
  return s === m;
})) || void 0 === s ? void 0 : s.section) && void 0 !== a ? a : null === (n = f[0]) || void 0 === n ? void 0 : n.section,
subsection: x
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
v({
  action: 'PRESS_SECTION',
  section: e
}), j({
  section: e,
  subsection: void 0
});
  }, [
v,
j
  ]);
  return T ? (0, i.jsx)('div', {
className: p.container,
children: (0, i.jsx)(E.Z, {})
  }) : (0, i.jsxs)('div', {
className: p.container,
children: [
  (0, i.jsx)(o.n, {
    className: p.tabBar,
    type: 'top',
    selectedItem: g,
    onItemSelect: C,
    children: f.map(e => {
      let {
        section: s,
        text: n
      } = e;
      return (0, i.jsx)(o.n.Item, {
        className: p.tabBarItem,
        id: s,
        'aria-label': n,
        children: (0, i.jsx)(r.Text, {
          variant: 'text-sm/normal',
          children: n
        })
      }, s);
    })
  }),
  (0, i.jsx)(h, {
    items: f,
    section: g,
    subsection: N,
    user: u,
    currentUser: _,
    displayProfile: I,
    onClose: S
  })
]
  });
}