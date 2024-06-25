n.d(t, {
  Z: function() {
    return o
  }
});
var s = n(735250);
n(470079);
var i = n(497505),
  l = n(772257),
  a = n(46140),
  r = n(59608);

function o(e) {
  let {
    quests: t
  } = e;
  return (0, s.jsx)("div", {
    className: r.container,
    children: t.map(e => (0, s.jsx)(l.Z, {
      quest: e,
      location: a.dr.QUEST_HOME_DESKTOP,
      questContent: i.jn.QUEST_HOME_DESKTOP
    }, e.id))
  })
}