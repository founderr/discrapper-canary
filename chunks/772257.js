"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("497505"),
  o = n("918701"),
  u = n("439826"),
  d = n("43779"),
  c = n("46140"),
  f = n("73060");

function E(e) {
  var t;
  let {
    quest: n
  } = e, l = (0, o.isQuestExpired)(n), [E, h] = s.useState(!1);
  return (null === (t = n.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? null : (0, a.jsxs)("div", {
    className: i()(f.container, {
      [f.expired]: l,
      [f.live]: !l
    }),
    onMouseEnter: () => h(!0),
    onMouseLeave: () => h(!1),
    children: [(0, a.jsx)(u.default, {
      quest: n,
      isHovering: E
    }), (0, a.jsx)(d.default, {
      quest: n,
      questContent: r.QuestContent.QUEST_HOME_DESKTOP,
      location: c.QuestsExperimentLocations.QUEST_HOME_DESKTOP
    })]
  })
}