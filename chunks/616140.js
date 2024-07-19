s.d(n, {
  Z: function() {
return h;
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
  u = s(100849),
  I = s(944546),
  _ = s(470900),
  f = s(988246),
  E = s(970041),
  m = s(715388),
  S = s(834534),
  Z = s(228168),
  v = s(47460);

function x(e) {
  let {
section: n,
subsection: s,
user: l,
currentUser: o,
displayProfile: t,
onClose: r
  } = e;
  return n === Z.oh.ACTIVITY ? (0, i.jsx)(u.Z, {
showActions: (null == o ? void 0 : o.id) !== l.id,
user: l,
type: a.Y.SIMPLIFIED_PROFILE,
onClose: r
  }) : n === Z.oh.MUTUAL_FRIENDS ? (0, i.jsx)(I.Z, {
user: l,
onClose: r
  }) : n === Z.oh.MUTUAL_GUILDS ? (0, i.jsx)(_.Z, {
user: l,
onClose: r
  }) : n === Z.oh.BOT_DATA_ACCESS ? (0, i.jsx)(E.Z, {
user: l
  }) : n === Z.oh.BOT_INFO ? (0, i.jsx)(m.Z, {
user: l,
currentUser: o,
displayProfile: t,
subsection: s,
onClose: r
  }) : (0, i.jsx)(S.Z, {
user: l,
currentUser: o,
displayProfile: t,
subsection: s,
onClose: r
  });
}

function h(e) {
  var n, s, a;
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
section: null !== (a = null === (n = E.find(e => {
  let {
    section: n
  } = e;
  return n === m;
})) || void 0 === n ? void 0 : n.section) && void 0 !== a ? a : null === (s = E[0]) || void 0 === s ? void 0 : s.section,
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
  return T ? (0, i.jsx)('div', {
className: v.container,
children: (0, i.jsx)(f.Z, {})
  }) : (0, i.jsxs)('div', {
className: v.container,
children: [
  (0, i.jsx)(t.n, {
    className: v.tabBar,
    type: 'top',
    selectedItem: g,
    onItemSelect: j,
    children: E.map(e => {
      let {
        section: n,
        text: s
      } = e;
      return (0, i.jsx)(t.n.Item, {
        className: v.tabBarItem,
        id: n,
        'aria-label': s,
        children: (0, i.jsx)(r.Text, {
          variant: 'text-sm/normal',
          children: s
        })
      }, n);
    })
  }),
  (0, i.jsx)(x, {
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