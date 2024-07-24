n.d(t, {
  Z: function() {
return d;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(439826),
  o = n(43779),
  c = n(882442);

function d(e) {
  let {
quest: t,
className: n,
questContent: a
  } = e, [d, u] = s.useState(!1), _ = s.useCallback(() => {
u(!0);
  }, [u]), E = s.useCallback(() => {
u(!1);
  }, [u]);
  return (0, i.jsxs)('div', {
id: 'quest-tile-'.concat(t.id),
className: r()(c.container, n),
onMouseEnter: _,
onMouseLeave: E,
children: [
  (0, i.jsx)(l.Z, {
    quest: t,
    isHovering: d
  }),
  (0, i.jsx)(o.Z, {
    quest: t,
    questContent: a,
    isHovering: d
  })
]
  });
}