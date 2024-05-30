"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var s = n("497505"),
  l = n("772257"),
  i = n("46140"),
  r = n("710538");

function o(e) {
  let {
    quests: t
  } = e;
  return (0, a.jsx)("div", {
    className: r.container,
    children: t.map(e => (0, a.jsx)(l.default, {
      quest: e,
      location: i.QuestsExperimentLocations.QUEST_HOME_DESKTOP,
      questContent: s.QuestContent.QUEST_HOME_DESKTOP
    }, e.id))
  })
}