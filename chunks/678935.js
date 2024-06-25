n.d(t, {
  Z: function() {
    return d
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(113434),
  r = n(397549),
  l = n(710914),
  o = n(77608),
  c = n(402887);

function d(e) {
  let {} = e, [t, n] = s.useState(a.W6.UNCLAIMED), {
    quests: d
  } = (0, a.bA)(t);
  return (0, i.jsxs)("div", {
    className: c.container,
    children: [(0, i.jsx)(o.Z, {
      setSelectedFilter: e => {
        n(e)
      },
      selectedFilter: t
    }), t === a.W6.UNCLAIMED ? (0, i.jsx)(l.Z, {
      quests: d
    }) : (0, i.jsx)(r.Z, {
      quests: d
    })]
  })
}