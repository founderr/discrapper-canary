"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("819855"),
  a = n("77078"),
  s = n("782340");

function u(e) {
  let {
    onConfirm: t,
    onDismiss: n,
    theme: u
  } = e;
  return (0, l.jsxs)(i.Fragment, {
    children: [(0, l.jsx)(a.Button, {
      onClick: t,
      children: s.default.Messages.GENERATE_A_NEW_LINK
    }), (0, l.jsx)(a.Button, {
      look: a.Button.Looks.LINK,
      color: (0, r.isThemeLight)(u) ? a.Button.Colors.PRIMARY : a.Button.Colors.WHITE,
      onClick: n,
      children: s.default.Messages.CANCEL
    })]
  })
}