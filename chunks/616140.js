n.d(i, {
  Z: function() {
return h;
  }
}), n(47120);
var s = n(735250),
  l = n(470079),
  o = n(442837),
  t = n(706898),
  r = n(481060),
  a = n(387903),
  d = n(246946),
  c = n(785717),
  u = n(100849),
  I = n(944546),
  _ = n(470900),
  f = n(988246),
  E = n(970041),
  m = n(715388),
  S = n(834534),
  Z = n(228168),
  v = n(47460);

function x(e) {
  let {
section: i,
subsection: n,
user: l,
currentUser: o,
displayProfile: t,
onClose: r
  } = e;
  return i === Z.oh.ACTIVITY ? (0, s.jsx)(u.Z, {
showActions: (null == o ? void 0 : o.id) !== l.id,
user: l,
type: a.Y.SIMPLIFIED_PROFILE,
onClose: r
  }) : i === Z.oh.MUTUAL_FRIENDS ? (0, s.jsx)(I.Z, {
user: l,
onClose: r
  }) : i === Z.oh.MUTUAL_GUILDS ? (0, s.jsx)(_.Z, {
user: l,
onClose: r
  }) : i === Z.oh.BOT_DATA_ACCESS ? (0, s.jsx)(E.Z, {
user: l
  }) : i === Z.oh.BOT_INFO ? (0, s.jsx)(m.Z, {
user: l,
currentUser: o,
displayProfile: t,
subsection: n,
onClose: r
  }) : (0, s.jsx)(S.Z, {
user: l,
currentUser: o,
displayProfile: t,
subsection: n,
onClose: r
  });
}

function h(e) {
  var i, n, a;
  let {
user: u,
currentUser: I,
displayProfile: _,
items: E,
initialSection: m = Z.oh.USER_INFO,
initialSubsection: S,
onClose: h
  } = e, {
trackUserProfileAction: p
  } = (0, c.KZ)(), T = (0, o.e7)([d.Z], () => d.Z.hidePersonalInformation), [{
section: g,
subsection: N
  }, C] = l.useState({
section: null !== (a = null === (i = E.find(e => {
  let {
    section: i
  } = e;
  return i === m;
})) || void 0 === i ? void 0 : i.section) && void 0 !== a ? a : null === (n = E[0]) || void 0 === n ? void 0 : n.section,
subsection: S
  }), j = l.useCallback(e => {
p({
  action: 'PRESS_SECTION',
  section: e
}), C({
  section: e,
  subsection: void 0
});
  }, [
p,
C
  ]);
  return T ? (0, s.jsx)('div', {
className: v.container,
children: (0, s.jsx)(f.Z, {})
  }) : (0, s.jsxs)('div', {
className: v.container,
children: [
  (0, s.jsx)(t.n, {
    className: v.tabBar,
    type: 'top',
    selectedItem: g,
    onItemSelect: j,
    children: E.map(e => {
      let {
        section: i,
        text: n
      } = e;
      return (0, s.jsx)(t.n.Item, {
        className: v.tabBarItem,
        id: i,
        'aria-label': n,
        children: (0, s.jsx)(r.Text, {
          variant: 'text-sm/normal',
          children: n
        })
      }, i);
    })
  }),
  (0, s.jsx)(x, {
    items: E,
    section: g,
    subsection: N,
    user: u,
    currentUser: I,
    displayProfile: _,
    onClose: h
  })
]
  });
}