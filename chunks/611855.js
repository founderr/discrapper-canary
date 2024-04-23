"use strict";
n.r(t);
var s = n("735250");
n("470079");
var l = n("120356"),
  a = n.n(l),
  i = n("481060"),
  r = n("689938"),
  o = n("560499");
t.default = function(e) {
  let {
    className: t,
    color: n = "header-primary",
    textOpacity: l = .9,
    bgOpacity: u = .2
  } = e;
  return (0, s.jsxs)(i.Text, {
    variant: "text-xxs/medium",
    color: n,
    className: a()(o.promotedTag, t),
    children: [(0, s.jsx)("span", {
      className: o.promotedTagBackground,
      style: {
        opacity: u
      }
    }), (0, s.jsx)("span", {
      style: {
        opacity: l
      },
      children: r.default.Messages.QUESTS_PROMOTED
    })]
  })
}