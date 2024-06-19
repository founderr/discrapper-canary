n.d(t, {
  Z: function() {
    return u
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  l = n(113434),
  a = n(397549),
  r = n(710914),
  o = n(77608),
  c = n(402887);

function u(e) {
  let {} = e, [t, n] = s.useState(l.W6.UNCLAIMED), {
    quests: u
  } = (0, l.bA)(t);
  return (0, i.jsxs)("div", {
    className: c.container,
    children: [(0, i.jsx)(o.Z, {
      setSelectedFilter: e => {
        n(e)
      },
      selectedFilter: t
    }), t === l.W6.UNCLAIMED ? (0, i.jsx)(r.Z, {
      quests: u
    }) : (0, i.jsx)(a.Z, {
      quests: u
    })]
  })
}