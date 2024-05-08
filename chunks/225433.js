"use strict";
n.r(e), n.d(e, {
  default: function() {
    return d
  }
});
var i = n("735250");
n("470079");
var l = n("120356"),
  o = n.n(l),
  u = n("481060"),
  s = n("689938"),
  a = n("321371");
let r = Object.freeze({
  DEFAULT: a.default,
  FILLED: a.filled
});

function d(t) {
  let {
    className: e,
    onClick: n,
    "aria-label": l,
    look: d = r.DEFAULT
  } = t;
  return (0, i.jsx)(u.Clickable, {
    "aria-label": null != l ? l : s.default.Messages.REMOVE,
    className: o()(a.button, d, e),
    onClick: n
  })
}
d.Looks = r