"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("819855"),
  s = n("77078"),
  a = n("782340");

function u(e) {
  let {
    onConfirm: t,
    onDismiss: n,
    theme: u
  } = e;
  return (0, l.jsxs)(i.Fragment, {
    children: [(0, l.jsx)(s.Button, {
      onClick: t,
      children: a.default.Messages.GENERATE_A_NEW_LINK
    }), (0, l.jsx)(s.Button, {
      look: s.Button.Looks.LINK,
      color: (0, r.isThemeLight)(u) ? s.Button.Colors.PRIMARY : s.Button.Colors.WHITE,
      onClick: n,
      children: a.default.Messages.CANCEL
    })]
  })
}