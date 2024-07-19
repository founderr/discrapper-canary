n.d(t, {
  Z: function() {
return u;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(497505),
  o = n(439826),
  c = n(43779),
  d = n(444627);

function u(e) {
  let {
quest: t,
className: n
  } = e, [a, u] = s.useState(!1), _ = s.useCallback(() => {
u(!0);
  }, [u]), E = s.useCallback(() => {
u(!1);
  }, [u]);
  return (0, i.jsxs)('div', {
id: 'quest-tile-'.concat(t.id),
className: r()(d.container, n),
onMouseEnter: _,
onMouseLeave: E,
children: [
  (0, i.jsx)(o.Z, {
    quest: t,
    isHovering: a
  }),
  (0, i.jsx)(c.Z, {
    quest: t,
    questContent: l.jn.QUEST_HOME_DESKTOP,
    isHovering: a
  })
]
  });
}