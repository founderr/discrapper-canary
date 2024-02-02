"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("37983"),
  i = n("884691"),
  s = n("819855"),
  a = n("77078"),
  r = n("782340");

function o(e) {
  let {
    onConfirm: t,
    onDismiss: n,
    theme: o
  } = e;
  return (0, l.jsxs)(i.Fragment, {
    children: [(0, l.jsx)(a.Button, {
      onClick: t,
      children: r.default.Messages.GENERATE_A_NEW_LINK
    }), (0, l.jsx)(a.Button, {
      look: a.Button.Looks.LINK,
      color: (0, s.isThemeLight)(o) ? a.Button.Colors.PRIMARY : a.Button.Colors.WHITE,
      onClick: n,
      children: r.default.Messages.CANCEL
    })]
  })
}