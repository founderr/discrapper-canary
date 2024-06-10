"use strict";
a.r(t), a.d(t, {
  PaymentModalAnchor: function() {
    return o
  }
});
var n = a("735250");
a("470079");
var s = a("481060"),
  r = a("689938"),
  l = a("905194");
let o = e => {
  let {
    onClick: t,
    children: a
  } = e;
  return (0, n.jsx)(s.Anchor, {
    onClick: t,
    className: l.link,
    children: a
  })
};
t.default = e => {
  let {
    onClick: t
  } = e;
  return (0, n.jsx)(o, {
    onClick: t,
    children: r.default.Messages.BACK
  })
}