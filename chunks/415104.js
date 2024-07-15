n.d(t, {
  Z: function() {
return _;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(497505),
  o = n(918701),
  c = n(439826),
  d = n(43779),
  u = n(444627);

function _(e) {
  var t;
  let {
quest: n
  } = e, s = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, _ = !(0, o.zi)(n) || (0, o.iQ)(n) && s, [E, h] = a.useState(!1);
  return (0, i.jsxs)('div', {
className: r()(u.container, {
  [u.noCta]: !_,
  [u.cta]: _
}),
onMouseEnter: () => h(!0),
onMouseLeave: () => h(!1),
children: [
  (0, i.jsx)(c.Z, {
    quest: n,
    isHovering: E
  }),
  (0, i.jsx)(d.Z, {
    quest: n,
    questContent: l.jn.QUEST_HOME_DESKTOP
  })
]
  });
}