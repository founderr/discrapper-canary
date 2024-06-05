"use strict";
a.r(t), a.d(t, {
  AlreadyOwned: function() {
    return u
  }
});
var s = a("735250");
a("470079");
var l = a("120356"),
  r = a.n(l),
  n = a("481060"),
  i = a("507893"),
  o = a("689938"),
  c = a("992911");
let u = e => {
  let {
    className: t,
    isPartiallyPurchased: a
  } = e;
  return a ? (0, s.jsx)(n.Tooltip, {
    tooltipClassName: c.partiallyOwnedDisclaimer,
    position: "top",
    align: "left",
    text: o.default.Messages.COLLECTIBLES_PARTIALLY_OWNED_DISCLAIMER,
    children: e => (0, s.jsxs)("div", {
      className: r()(c.partialOwnStateContainer, t),
      ...e,
      children: [(0, s.jsx)("span", {
        className: c.iconWrapper,
        children: (0, s.jsx)(i.default, {
          className: c.infoIcon
        })
      }), (0, s.jsx)(n.Text, {
        variant: "text-md/semibold",
        children: o.default.Messages.COLLECTIBLES_ALREADY_OWNED
      })]
    })
  }) : (0, s.jsx)(n.Text, {
    variant: "text-md/semibold",
    className: t,
    children: o.default.Messages.COLLECTIBLES_ALREADY_OWNED
  })
}