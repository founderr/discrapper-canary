n.d(s, {
  Z: function() {
return p;
  }
}), n(47120);
var i = n(735250),
  l = n(470079),
  o = n(442837),
  t = n(706898),
  r = n(481060),
  a = n(387903),
  d = n(246946),
  c = n(785717),
  u = n(27144),
  _ = n(100849),
  I = n(944546),
  E = n(470900),
  f = n(988246),
  m = n(970041),
  S = n(715388),
  Z = n(879828),
  x = n(834534),
  v = n(228168),
  h = n(47460);

function T(e) {
  let {
section: s,
subsection: n,
user: l,
currentUser: o,
displayProfile: t,
onClose: r
  } = e, {
newActivityCardsEnabled: d
  } = (0, u.z)({
location: 'SimplifiedUserProfileModalTabs'
  });
  return s === v.oh.ACTIVITY && d ? (0, i.jsx)(Z.Z, {
user: l,
currentUser: o,
onClose: r
  }) : s === v.oh.ACTIVITY ? (0, i.jsx)(_.Z, {
showActions: (null == o ? void 0 : o.id) !== l.id,
user: l,
type: a.Y.SIMPLIFIED_PROFILE,
onClose: r
  }) : s === v.oh.MUTUAL_FRIENDS ? (0, i.jsx)(I.Z, {
user: l,
onClose: r
  }) : s === v.oh.MUTUAL_GUILDS ? (0, i.jsx)(E.Z, {
user: l,
onClose: r
  }) : s === v.oh.BOT_DATA_ACCESS ? (0, i.jsx)(m.Z, {
user: l
  }) : s === v.oh.BOT_INFO ? (0, i.jsx)(S.Z, {
user: l,
currentUser: o,
displayProfile: t,
subsection: n,
onClose: r
  }) : (0, i.jsx)(x.Z, {
user: l,
currentUser: o,
displayProfile: t,
subsection: n,
onClose: r
  });
}

function p(e) {
  var s, n, a;
  let {
user: u,
currentUser: _,
displayProfile: I,
items: E,
initialSection: m = v.oh.USER_INFO,
initialSubsection: S,
onClose: Z
  } = e, {
trackUserProfileAction: x
  } = (0, c.KZ)(), p = (0, o.e7)([d.Z], () => d.Z.hidePersonalInformation), [{
section: g,
subsection: N
  }, C] = l.useState({
section: null !== (a = null === (s = E.find(e => {
  let {
    section: s
  } = e;
  return s === m;
})) || void 0 === s ? void 0 : s.section) && void 0 !== a ? a : null === (n = E[0]) || void 0 === n ? void 0 : n.section,
subsection: S
  });
  l.useEffect(() => {
if (null == E.find(e => e.section === g))
  C({
    section: E[0].section,
    subsection: void 0
  });
  }, [
E,
g
  ]);
  let j = l.useCallback(e => {
x({
  action: 'PRESS_SECTION',
  section: e
}), C({
  section: e,
  subsection: void 0
});
  }, [
x,
C
  ]);
  return p ? (0, i.jsx)('div', {
className: h.container,
children: (0, i.jsx)(f.Z, {})
  }) : (0, i.jsxs)('div', {
className: h.container,
children: [
  (0, i.jsx)(t.n, {
    className: h.tabBar,
    type: 'top',
    selectedItem: g,
    onItemSelect: j,
    children: E.map(e => {
      let {
        section: s,
        text: n
      } = e;
      return (0, i.jsx)(t.n.Item, {
        className: h.tabBarItem,
        id: s,
        'aria-label': n,
        children: (0, i.jsx)(r.Text, {
          variant: 'text-sm/normal',
          children: n
        })
      }, s);
    })
  }),
  (0, i.jsx)(T, {
    items: E,
    section: g,
    subsection: N,
    user: u,
    currentUser: _,
    displayProfile: I,
    onClose: Z
  })
]
  });
}