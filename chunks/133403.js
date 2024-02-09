"use strict";
n.r(e), n.d(e, {
  default: function() {
    return u
  }
});
var l = n("37983");
n("884691");
var i = n("414456"),
  a = n.n(i),
  r = n("77078"),
  o = n("782340"),
  s = n("239636");
let c = Object.freeze({
  DEFAULT: s.default,
  FILLED: s.filled
});

function u(t) {
  let {
    className: e,
    onClick: n,
    "aria-label": i,
    look: u = c.DEFAULT
  } = t;
  return (0, l.jsx)(r.Clickable, {
    "aria-label": null != i ? i : o.default.Messages.REMOVE,
    className: a(s.button, u, e),
    onClick: n
  })
}
u.Looks = c