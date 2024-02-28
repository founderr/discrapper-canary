"use strict";
n.r(t), n.d(t, {
  getContentRowHeight: function() {
    return r
  },
  default: function() {
    return u
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("974667"),
  i = n("77078");

function r(e) {
  return 30
}
var u = a.memo(function(e) {
  let {
    index: t,
    entry: n
  } = e, a = (0, s.useListItem)("".concat(t));
  return (0, l.jsx)(i.Clickable, {
    onClick: () => {},
    style: {
      height: 30,
      paddingLeft: 16
    },
    focusProps: {
      offset: {
        top: 4,
        bottom: 4,
        left: 4,
        right: 4
      }
    },
    ...a,
    role: "listitem",
    children: (0, l.jsxs)("div", {
      children: [t, " - ", n.id]
    })
  })
})