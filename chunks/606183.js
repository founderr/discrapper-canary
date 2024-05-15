"use strict";
i.r(t), i.d(t, {
  default: function() {
    return s
  }
});
var l = i("735250");
i("470079");
var a = i("481060"),
  n = i("212208");

function s(e) {
  let {
    activeSection: t,
    setSection: i,
    shownSections: s
  } = e;
  return (0, l.jsx)(a.TabBar, {
    selectedItem: t,
    type: "top",
    onItemSelect: i,
    className: n.tabBar,
    children: s.map(e => (0, l.jsx)(a.TabBar.Item, {
      id: e.sectionName,
      className: n.tabBarItem,
      children: e.sectionText
    }, e.sectionName))
  })
}