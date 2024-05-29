"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("735250");
n("470079");
var s = n("786089"),
  l = n("713996");

function i(e) {
  let {
    quests: t
  } = e;
  return (0, a.jsx)("div", {
    className: l.container,
    children: t.map(e => (0, a.jsx)(s.default, {
      quest: e
    }, e.id))
  })
}