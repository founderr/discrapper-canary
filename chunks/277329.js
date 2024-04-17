"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("481060"),
  i = s("326528"),
  r = s("689938"),
  o = s("451304");

function d() {
  let e = (0, i.useGameSettingsTabs)(),
    [t, s] = n.useState(e[0].id);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.Heading, {
      className: o.heading,
      variant: "heading-xl/semibold",
      children: r.default.Messages.GAMES
    }), (0, a.jsx)(l.TabBar, {
      className: o.tabBar,
      selectedItem: t,
      onItemSelect: s,
      orientation: "horizontal",
      type: "top",
      look: "brand",
      children: e.map(e => (0, a.jsxs)(l.TabBar.Item, {
        className: o.tab,
        id: e.id,
        "aria-label": e.title,
        children: [(0, a.jsx)(e.icon, {
          className: o.tabIcon,
          color: "currentColor"
        }), (0, a.jsx)("div", {
          className: o.iconTitle,
          children: e.title
        })]
      }, e.id))
    })]
  })
}