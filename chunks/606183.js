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
    sections: s
  } = e;
  return (0, l.jsx)(a.TabBar, {
    selectedItem: t,
    type: "top",
    onItemSelect: i,
    className: n.tabBar,
    children: s.map(e => {
      let {
        name: t,
        text: i,
        Icon: s
      } = e;
      return (0, l.jsxs)(a.TabBar.Item, {
        id: t,
        className: n.tabBarItem,
        "aria-label": i,
        children: [(0, l.jsx)(s, {
          className: n.icon,
          color: "currentColor"
        }), i]
      }, t)
    })
  })
}