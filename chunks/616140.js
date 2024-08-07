s.d(n, {
  Z: function() {
return p;
  }
}), s(47120);
var i = s(735250),
  l = s(470079),
  o = s(442837),
  t = s(706898),
  r = s(481060),
  a = s(387903),
  d = s(246946),
  c = s(785717),
  u = s(27144),
  I = s(100849),
  _ = s(944546),
  f = s(470900),
  E = s(988246),
  m = s(970041),
  S = s(715388),
  Z = s(879828),
  v = s(834534),
  x = s(228168),
  h = s(47460);

function T(e) {
  let {
section: n,
subsection: s,
user: l,
currentUser: o,
displayProfile: t,
onClose: r
  } = e, {
newActivityCardsEnabled: d
  } = (0, u.z)({
location: 'SimplifiedUserProfileModalTabs'
  });
  return n === x.oh.ACTIVITY && d ? (0, i.jsx)(Z.Z, {
user: l,
currentUser: o,
onClose: r
  }) : n === x.oh.ACTIVITY ? (0, i.jsx)(I.Z, {
showActions: (null == o ? void 0 : o.id) !== l.id,
user: l,
type: a.Y.SIMPLIFIED_PROFILE,
onClose: r
  }) : n === x.oh.MUTUAL_FRIENDS ? (0, i.jsx)(_.Z, {
user: l,
onClose: r
  }) : n === x.oh.MUTUAL_GUILDS ? (0, i.jsx)(f.Z, {
user: l,
onClose: r
  }) : n === x.oh.BOT_DATA_ACCESS ? (0, i.jsx)(m.Z, {
user: l
  }) : n === x.oh.BOT_INFO ? (0, i.jsx)(S.Z, {
user: l,
currentUser: o,
displayProfile: t,
subsection: s,
onClose: r
  }) : (0, i.jsx)(v.Z, {
user: l,
currentUser: o,
displayProfile: t,
subsection: s,
onClose: r
  });
}

function p(e) {
  var n, s, a;
  let {
user: u,
currentUser: I,
displayProfile: _,
items: f,
initialSection: m = x.oh.USER_INFO,
initialSubsection: S,
onClose: Z
  } = e, {
trackUserProfileAction: v
  } = (0, c.KZ)(), p = (0, o.e7)([d.Z], () => d.Z.hidePersonalInformation), [{
section: g,
subsection: N
  }, C] = l.useState({
section: null !== (a = null === (n = f.find(e => {
  let {
    section: n
  } = e;
  return n === m;
})) || void 0 === n ? void 0 : n.section) && void 0 !== a ? a : null === (s = f[0]) || void 0 === s ? void 0 : s.section,
subsection: S
  });
  l.useEffect(() => {
if (null == f.find(e => e.section === g))
  C({
    section: f[0].section,
    subsection: void 0
  });
  }, [
f,
g
  ]);
  let j = l.useCallback(e => {
v({
  action: 'PRESS_SECTION',
  section: e
}), C({
  section: e,
  subsection: void 0
});
  }, [
v,
C
  ]);
  return p ? (0, i.jsx)('div', {
className: h.container,
children: (0, i.jsx)(E.Z, {})
  }) : (0, i.jsxs)('div', {
className: h.container,
children: [
  (0, i.jsx)(t.n, {
    className: h.tabBar,
    type: 'top',
    selectedItem: g,
    onItemSelect: j,
    children: f.map(e => {
      let {
        section: n,
        text: s
      } = e;
      return (0, i.jsx)(t.n.Item, {
        className: h.tabBarItem,
        id: n,
        'aria-label': s,
        children: (0, i.jsx)(r.Text, {
          variant: 'text-sm/normal',
          children: s
        })
      }, n);
    })
  }),
  (0, i.jsx)(T, {
    items: f,
    section: g,
    subsection: N,
    user: u,
    currentUser: I,
    displayProfile: _,
    onClose: Z
  })
]
  });
}