"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("113434"),
  i = n("397549"),
  r = n("710914"),
  o = n("77608"),
  u = n("214655");

function d(e) {
  let {} = e, [t, n] = s.useState(l.QuestFilters.UNCLAIMED), {
    quests: d
  } = (0, l.useFilteredQuests)(t);
  return (0, a.jsxs)("div", {
    className: u.container,
    children: [(0, a.jsx)(o.default, {
      setSelectedFilter: e => {
        n(e)
      },
      selectedFilter: t
    }), t === l.QuestFilters.UNCLAIMED ? (0, a.jsx)(r.default, {
      quests: d
    }) : (0, a.jsx)(i.default, {
      quests: d
    })]
  })
}