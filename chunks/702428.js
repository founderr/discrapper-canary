n.d(t, {
  Z: function() {
    return u
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(100527),
  a = n(360048),
  r = n(709158),
  o = n(689938),
  c = n(679638);

function u(e) {
  let {
    isSelected: t,
    onClick: n
  } = e;
  return (0, r.Z)(l.Z.QUEST_HOME_PAGE) ? (0, s.jsx)(a.Z, {
    avatar: (0, s.jsx)(i.QuestsIcon, {}),
    name: o.Z.Messages.QUESTS,
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
    className: c.categoryItem,
    selectedClassName: c.selectedCategoryItem,
    innerClassName: c.itemInner
  }, "quest-home") : null
}