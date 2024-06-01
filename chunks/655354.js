"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("481060"),
  o = n("689938"),
  u = n("953468");

function d(e) {
  let {
    className: t,
    onJump: n
  } = e, [s, d] = l.useState(!1);
  return (0, a.jsx)(r.Clickable, {
    className: i()(u.jumpButton, t),
    onClick: e => {
      d(!0), n(e)
    },
    children: s ? (0, a.jsx)(r.Spinner, {
      type: r.Spinner.Type.PULSING_ELLIPSIS
    }) : (0, a.jsx)(r.Text, {
      variant: "text-xs/normal",
      className: u.text,
      children: o.default.Messages.JUMP
    })
  })
}