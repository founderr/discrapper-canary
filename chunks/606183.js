"use strict";
l.r(t), l.d(t, {
  default: function() {
    return s
  }
});
var i = l("735250");
l("470079");
var a = l("481060"),
  n = l("212208");

function s(e) {
  let {
    activeSection: t,
    setSection: l,
    sections: s
  } = e;
  return (0, i.jsx)(a.TabBar, {
    selectedItem: t,
    type: "top",
    onItemSelect: l,
    className: n.tabBar,
    children: s.map(e => {
      let {
        name: t,
        text: l,
        Icon: s
      } = e;
      return (0, i.jsxs)(a.TabBar.Item, {
        id: t,
        className: n.tabBarItem,
        "aria-label": l,
        children: [(0, i.jsx)(s, {
          className: n.icon,
          color: "currentColor"
        }), l]
      }, t)
    })
  })
}