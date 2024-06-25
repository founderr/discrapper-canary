n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(735250);
n(470079);
var s = n(497505),
  a = n(772257),
  r = n(46140),
  l = n(59608);

function o(e) {
  let {
    quests: t
  } = e;
  return (0, i.jsx)("div", {
    className: l.container,
    children: t.map(e => (0, i.jsx)(a.Z, {
      quest: e,
      location: r.dr.QUEST_HOME_DESKTOP,
      questContent: s.jn.QUEST_HOME_DESKTOP
    }, e.id))
  })
}