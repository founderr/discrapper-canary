"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var s = n("735250"),
  l = n("470079"),
  a = n("120356"),
  i = n.n(a),
  r = n("481060"),
  o = n("689938"),
  u = n("277036");

function d(e) {
  let {
    className: t,
    onJump: n
  } = e, [a, d] = l.useState(!1);
  return (0, s.jsx)(r.Clickable, {
    className: i()(u.jumpButton, t),
    onClick: e => {
      d(!0), n(e)
    },
    children: a ? (0, s.jsx)(r.Spinner, {
      type: r.Spinner.Type.PULSING_ELLIPSIS
    }) : (0, s.jsx)(r.Text, {
      variant: "text-xs/normal",
      className: u.text,
      children: o.default.Messages.JUMP
    })
  })
}