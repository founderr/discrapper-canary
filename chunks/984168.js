"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  a = n("481060"),
  o = n("314734"),
  l = n("689938"),
  u = n("319306");

function d(e) {
  let {
    sortOrder: t,
    onSortOptionClick: n,
    closePopout: r
  } = e, d = e => {
    n(e), r()
  };
  return (0, i.jsx)("div", {
    className: s()(o.APP_LAUNCHER_ELEMENT_CLASSNAME, u.container),
    children: (0, i.jsx)(a.Menu, {
      navId: "command-list-sort",
      "aria-label": l.default.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_A11Y_LABEL,
      hideScroller: !0,
      onClose: r,
      onSelect: r,
      children: (0, i.jsxs)(a.MenuGroup, {
        label: l.default.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_HEADER,
        children: [(0, i.jsx)(a.MenuRadioItem, {
          id: "sort-by-popular",
          group: "sort-by",
          label: l.default.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_OPTION_POPULAR,
          action: () => d(o.CommandListSortOrder.POPULAR),
          checked: t === o.CommandListSortOrder.POPULAR
        }), (0, i.jsx)(a.MenuRadioItem, {
          id: "sort-by-alphabetical",
          group: "sort-by",
          label: l.default.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_OPTION_ALPHABETICAL,
          action: () => d(o.CommandListSortOrder.ALPHABETICAL),
          checked: t === o.CommandListSortOrder.ALPHABETICAL
        })]
      })
    })
  })
}