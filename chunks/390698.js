"use strict";
a.r(t), a.d(t, {
  AlreadyOwned: function() {
    return u
  }
});
var l = a("735250");
a("470079");
var s = a("120356"),
  r = a.n(s),
  n = a("481060"),
  i = a("507893"),
  o = a("689938"),
  c = a("992911");
let u = e => {
  let {
    className: t,
    isPartiallyPurchased: a
  } = e;
  return a ? (0, l.jsx)(n.Tooltip, {
    tooltipClassName: c.partiallyOwnedDisclaimer,
    position: "top",
    align: "left",
    text: o.default.Messages.COLLECTIBLES_PARTIALLY_OWNED_DISCLAIMER,
    children: e => (0, l.jsxs)("div", {
      className: r()(c.partialOwnStateContainer, t),
      ...e,
      children: [(0, l.jsx)("span", {
        className: c.iconWrapper,
        children: (0, l.jsx)(i.default, {
          className: c.infoIcon
        })
      }), (0, l.jsx)(n.Text, {
        variant: "text-md/semibold",
        children: o.default.Messages.COLLECTIBLES_ALREADY_OWNED
      })]
    })
  }) : (0, l.jsx)(n.Text, {
    variant: "text-md/semibold",
    className: t,
    children: o.default.Messages.COLLECTIBLES_ALREADY_OWNED
  })
}