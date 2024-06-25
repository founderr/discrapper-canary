n.d(t, {
  Z: function() {
    return u
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(113434),
  a = n(397549),
  r = n(710914),
  o = n(77608),
  c = n(402887);

function u(e) {
  let {} = e, [t, n] = i.useState(l.W6.UNCLAIMED), {
    quests: u
  } = (0, l.bA)(t);
  return (0, s.jsxs)("div", {
    className: c.container,
    children: [(0, s.jsx)(o.Z, {
      setSelectedFilter: e => {
        n(e)
      },
      selectedFilter: t
    }), t === l.W6.UNCLAIMED ? (0, s.jsx)(r.Z, {
      quests: u
    }) : (0, s.jsx)(a.Z, {
      quests: u
    })]
  })
}