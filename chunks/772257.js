n.d(t, {
  Z: function() {
    return h
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(497505),
  o = n(918701),
  c = n(439826),
  u = n(43779),
  d = n(46140),
  E = n(137124);

function h(e) {
  var t;
  let {
    quest: n
  } = e, l = (0, o.zi)(n), [h, _] = s.useState(!1);
  return (null === (t = n.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? null : (0, i.jsxs)("div", {
    className: a()(E.container, {
      [E.expired]: l,
      [E.live]: !l
    }),
    onMouseEnter: () => _(!0),
    onMouseLeave: () => _(!1),
    children: [(0, i.jsx)(c.Z, {
      quest: n,
      isHovering: h
    }), (0, i.jsx)(u.Z, {
      quest: n,
      questContent: r.jn.QUEST_HOME_DESKTOP,
      location: d.dr.QUEST_HOME_DESKTOP
    })]
  })
}