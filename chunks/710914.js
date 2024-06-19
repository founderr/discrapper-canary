n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(735250);
n(470079);
var s = n(497505),
  l = n(772257),
  a = n(46140),
  r = n(59608);

function o(e) {
  let {
    quests: t
  } = e;
  return (0, i.jsx)("div", {
    className: r.container,
    children: t.map(e => (0, i.jsx)(l.Z, {
      quest: e,
      location: a.dr.QUEST_HOME_DESKTOP,
      questContent: s.jn.QUEST_HOME_DESKTOP
    }, e.id))
  })
}