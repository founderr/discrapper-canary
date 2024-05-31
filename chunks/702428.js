"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var s = n("844099"),
  l = n("100527"),
  i = n("360048"),
  r = n("709158"),
  o = n("689938"),
  u = n("857446");

function d(e) {
  let {
    isSelected: t,
    onClick: n
  } = e;
  return (0, r.default)(l.default.QUEST_HOME_PAGE) ? (0, a.jsx)(i.default, {
    avatar: (0, a.jsx)(s.QuestsIcon, {}),
    name: o.default.Messages.QUESTS,
    focusProps: {
      offset: {
        right: 4,
        top: 1,
        bottom: 1
      }
    },
    onClick: n,
    wrapContent: !0,
    selected: t,
    className: u.categoryItem,
    selectedClassName: u.selectedCategoryItem,
    innerClassName: u.itemInner
  }, "quest-home") : null
}