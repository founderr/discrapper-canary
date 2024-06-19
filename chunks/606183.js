i.d(n, {
  Z: function() {
    return s
  }
});
var t = i(735250);
i(470079);
var l = i(481060),
  a = i(941546);

function s(e) {
  let {
    activeSection: n,
    setSection: i,
    sections: s
  } = e;
  return (0, t.jsx)(l.TabBar, {
    selectedItem: n,
    type: "top",
    onItemSelect: i,
    className: a.tabBar,
    children: s.map(e => {
      let {
        name: n,
        text: i,
        Icon: s
      } = e;
      return (0, t.jsxs)(l.TabBar.Item, {
        id: n,
        className: a.tabBarItem,
        "aria-label": i,
        children: [(0, t.jsx)(s, {
          className: a.icon,
          color: "currentColor"
        }), i]
      }, n)
    })
  })
}