n.d(t, {
  Z: function() {
return _;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(497505),
  o = n(602667),
  c = n(439826),
  d = n(43779),
  u = n(444627);

function _(e) {
  let {
quest: t,
className: n,
questContent: a,
contentPosition: _,
rowIndex: h
  } = e, [E, I] = s.useState(!1), m = s.useCallback(() => {
I(!0);
  }, [I]), g = s.useCallback(() => {
I(!1);
  }, [I]);
  return (0, i.jsx)(o.A, {
questOrQuests: t,
questContent: a,
questContentPosition: _,
questContentRowIndex: h,
trackGuildAndChannelMetadata: a === l.jn.QUESTS_EMBED,
children: e => (0, i.jsxs)('div', {
  id: 'quest-tile-'.concat(t.id),
  ref: t => {
    e.current = t;
  },
  className: r()(u.container, n),
  onMouseEnter: m,
  onMouseLeave: g,
  children: [
    (0, i.jsx)(c.Z, {
      quest: t,
      isHovering: E
    }),
    (0, i.jsx)(d.Z, {
      quest: t,
      questContent: a,
      isHovering: E,
      contentPosition: _,
      rowIndex: h
    })
  ]
})
  });
}